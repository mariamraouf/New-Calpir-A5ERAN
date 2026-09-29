"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { CalendarCheck, Loader2, Mail, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import BookingSystem from '@/components/booking/BookingSystem';
import { showSuccess, showError } from '@/utils/toast';
import { trackLeadGeneration } from '@/utils/analytics';
import { cn } from '@/lib/utils';

/**
 * One popup for both ways of getting in touch, reachable from anywhere.
 *
 * Booking used to live only at the bottom of /contact, which meant three clicks
 * and a scroll from the homepage. Now the navbar button, the hero and any page
 * can call openBooking() and the calendar appears over the page.
 *
 * Nothing is prefilled except an email the visitor typed themselves in the hero.
 * Prefilled dropdowns and placeholder-looking values were hard to read and made
 * it unclear what had actually been entered.
 */

type Tab = 'book' | 'message';

interface BookingModalContextValue {
  openBooking: (email?: string) => void;
  openMessage: (email?: string) => void;
  close: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export const useBookingModal = (): BookingModalContextValue => {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    // A no op keeps a stray call from crashing a page that sits outside the
    // provider, rather than taking the whole route down.
    return { openBooking: () => {}, openMessage: () => {}, close: () => {} };
  }
  return ctx;
};

const MessageForm: React.FC<{ initialEmail?: string; onSent: () => void }> = ({
  initialEmail = '',
  onSent,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');
  const [sending, setSending] = useState(false);

  const field =
    'w-full border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 rounded-none focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600';

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: only a bot fills this in.
    if (botField.trim() !== '') return;
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/xlgalgka', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _gotcha: botField, name, email, message, source: 'Popup message form' }),
      });
      if (res.ok) {
        trackLeadGeneration("booking_modal");
        showSuccess(`Thanks ${name || 'very much'}. We will reply to ${email} shortly.`);
        onSent();
      } else {
        showError('That did not send. Please email info@calpir.com directly.');
      }
    } catch {
      showError('Connection problem. Please email info@calpir.com.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label htmlFor="popup-name" className="mono text-[11px] uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
          Your name
        </label>
        <input
          id="popup-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="popup-email" className="mono text-[11px] uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
          Email
        </label>
        <input
          id="popup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="popup-message" className="mono text-[11px] uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
          What are you trying to get done?
        </label>
        <textarea
          id="popup-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
          className={cn(field, 'resize-y')}
        />
      </div>

      {/* Honeypot. Positioned off screen so people never see it; bots fill it in.
          Also sent to Formspree as _gotcha, which drops the submission server side. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={botField}
        onChange={(ev) => setBotField(ev.target.value)}
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />

      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-none font-bold tracking-tight"
      >
        {sending ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" /> Sending
          </>
        ) : (
          <>
            <Send size={16} className="mr-2" /> Send message
          </>
        )}
      </Button>
      <p className="mono text-[10px] uppercase tracking-wider text-zinc-500 text-center">
        We reply within 4 business hours. No sales sequence, no newsletter.
      </p>
    </form>
  );
};

export const BookingModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>('book');
  const [email, setEmail] = useState('');

  const openBooking = useCallback((e?: string) => {
    setEmail(e || '');
    setTab('book');
    setOpen(true);
  }, []);

  const openMessage = useCallback((e?: string) => {
    setEmail(e || '');
    setTab('message');
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openBooking, openMessage, close }),
    [openBooking, openMessage, close]
  );

  const tabBtn = (id: Tab, label: string, Icon: React.ElementType) => (
    <button
      key={id}
      type="button"
      onClick={() => setTab(id)}
      className={cn(
        'flex-1 flex items-center justify-center gap-2 py-3 mono text-[11px] sm:text-xs uppercase tracking-wider font-bold border-b-2 transition-colors',
        tab === id
          ? 'border-emerald-600 text-emerald-800 bg-emerald-50/60'
          : 'border-transparent text-zinc-500 hover:text-emerald-700'
      )}
    >
      <Icon size={14} /> {label}
    </button>
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[min(94vw,860px)] w-full p-0 rounded-none border-zinc-300 max-h-[92dvh] overflow-y-auto gap-0">
          <DialogTitle className="sr-only">
            {tab === 'book' ? 'Book a free consultation' : 'Send Calpir a message'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Pick a time for a free 30 minute call, or send a message and we will reply by email.
          </DialogDescription>

          <div className="flex border-b border-zinc-200 sticky top-0 bg-white z-10">
            {tabBtn('book', 'Pick a time', CalendarCheck)}
            {tabBtn('message', 'Send a message', Mail)}
          </div>

          <div className={tab === 'message' ? 'p-5 sm:p-8' : ''}>
            {tab === 'book' ? (
              <BookingSystem initialEmail={email} bare />
            ) : (
              <MessageForm initialEmail={email} onSent={close} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </BookingModalContext.Provider>
  );
};

export default BookingModalProvider;
