"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Low friction first step on the homepage.
 *
 * Asking for an email is a much smaller ask than a five field form, so the hero
 * collects just that and hands it to the contact form, which reads it from the
 * query string and prefills the email field. Nothing is sent from here: the
 * actual submission still happens on /contact, so there is one place that talks
 * to Formspree and one place that handles errors.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface EmailCaptureCTAProps {
  label?: string;
  className?: string;
}

export const EmailCaptureCTA: React.FC<EmailCaptureCTAProps> = ({
  label = 'Book a call',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();

    if (!value) {
      setError('Pop your email in and we will take you to the booking form.');
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError('That does not look like an email address. Mind checking it?');
      return;
    }

    setError(null);
    navigate(`/contact?email=${encodeURIComponent(value)}#book`);
  };

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto"
      >
        <label htmlFor="hero-email" className="sr-only">
          Your email address
        </label>
        <input
          id="hero-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'hero-email-error' : undefined}
          className="flex-1 min-w-0 min-h-[56px] sm:min-h-[64px] border border-zinc-300 bg-white px-4 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 rounded-none focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
        />
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 min-h-[56px] sm:min-h-[64px] h-auto rounded-none font-black text-xs sm:text-base uppercase tracking-tight btn-hover shadow-md shrink-0"
        >
          {label} <ArrowRight size={16} className="ml-1.5" />
        </Button>
      </form>

      {error ? (
        <p
          id="hero-email-error"
          role="alert"
          className="mt-2.5 text-sm text-rose-700 text-center sm:text-left max-w-xl mx-auto"
        >
          {error}
        </p>
      ) : (
        <p className="mt-2.5 mono text-[11px] uppercase tracking-wider text-zinc-500 text-center max-w-xl mx-auto">
          Free 30 minute call. No obligation, and we will tell you if you do not need us.
        </p>
      )}
    </div>
  );
};

export default EmailCaptureCTA;
