"use client";

import React, { useState } from 'react';
import { format, addDays, startOfDay, isBefore, addMinutes, parse, setHours, setMinutes } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, ArrowRight, Loader2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { HumanCaptcha } from '@/components/ui/HumanCaptcha';
import { cn } from '@/lib/utils';
import { showSuccess, showError } from '@/utils/toast';

const timezones = [
  { value: "Europe/London", label: "London (GMT / BST)" },
  { value: "America/New_York", label: "New York (EST / EDT)" },
  { value: "America/Chicago", label: "Chicago (CST / CDT)" },
  { value: "America/Los_Angeles", label: "Los Angeles (PST / PDT)" },
  { value: "Europe/Paris", label: "Paris / Berlin (CET / CEST)" },
  { value: "Asia/Dubai", label: "Dubai (GST)" },
  { value: "Asia/Singapore", label: "Singapore / HK (SGT)" },
  { value: "Australia/Sydney", label: "Sydney (AEST / AEDT)" }
];

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(startOfDay(new Date()), 1));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userTimezone, setUserTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/London");
  const [step, setStep] = useState(1);
  const [isHuman, setIsHuman] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', businessNotes: '' });

  const generateTimeSlots = () => {
    const slots: string[] = [];
    let current = setMinutes(setHours(new Date(), 10), 0);
    const end = setMinutes(setHours(new Date(), 19), 30);

    while (isBefore(current, addMinutes(end, 1))) {
      slots.push(format(current, 'HH:mm'));
      current = addMinutes(current, 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const convertToUserTime = (ukTime: string) => {
    try {
      const today = format(selectedDate, 'yyyy-MM-dd');
      const ukDateTime = `${today} ${ukTime}`;
      const date = parse(ukDateTime, 'yyyy-MM-dd HH:mm', new Date());
      return formatInTimeZone(date, userTimezone, 'HH:mm');
    } catch {
      return ukTime;
    }
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHuman) {
      showError("Please check the human verification box before confirming.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://formspree.io/f/xwleyvaj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          selectedDate: format(selectedDate, 'yyyy-MM-dd'),
          selectedTimeUK: selectedTime,
          userLocalTime: `${convertToUserTime(selectedTime!)} (${userTimezone})`,
          message: formData.businessNotes || 'No notes provided',
          consultant: 'Maria'
        })
      });

      if (response.ok) {
        showSuccess(`Booking confirmed for ${formData.name}. Google Meet invitation sent to ${formData.email}.`);
        setStep(3);
      } else {
        showError("Booking failed. Please email info@calpir.com to lock in your time.");
      }
    } catch (err) {
      showError("Connection error. Please reach out to info@calpir.com or call +44 7346 875731.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="border border-zinc-200 bg-white p-4 sm:p-6 md:p-10 shadow-lg">
      {step === 1 && (
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-3.5 sm:gap-5 pb-5 sm:pb-6 border-b border-zinc-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 flex items-center justify-center shrink-0 text-white shadow-sm">
              <User size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="mono text-[10px] sm:text-xs uppercase tracking-widest text-emerald-800 font-bold">Squad Lead</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-zinc-950">Maria</h3>
              <p className="mono text-[10px] sm:text-xs text-zinc-600 font-bold">30 MINUTE FREE STRATEGY CONSULTATION</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-2.5 sm:space-y-3">
              <label className="mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-800 font-bold flex items-center gap-2">
                <CalendarIcon size={15} className="text-emerald-600" /> 1. Select Date
              </label>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {[...Array(8)].map((_, i) => {
                  const date = addDays(startOfDay(new Date()), i + 1);
                  const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "p-2 sm:p-3 border mono text-[10px] sm:text-xs flex flex-col items-center transition-all font-bold",
                        isSelected ? "border-emerald-600 bg-emerald-600 text-white shadow-sm" : "border-zinc-200 text-zinc-700 hover:border-emerald-600 hover:text-zinc-950 bg-zinc-50"
                      )}
                    >
                      <span className={isSelected ? "text-emerald-100" : "text-zinc-500"}>{format(date, 'EEE')}</span>
                      <span className="text-base sm:text-lg font-black">{format(date, 'dd')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <label className="mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-800 font-bold flex items-center gap-2">
                  <Clock size={15} className="text-emerald-600" /> 2. Select Time
                </label>
                <div className="w-full sm:w-56">
                  <Select value={userTimezone} onValueChange={setUserTimezone}>
                    <SelectTrigger className="bg-white border-zinc-300 mono text-[10px] sm:text-[11px] text-zinc-950 uppercase h-8 sm:h-9 rounded-none flex items-center gap-1.5 focus:ring-emerald-600">
                      <Globe size={12} className="text-emerald-600 shrink-0" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-zinc-200 text-zinc-950 max-h-64 shadow-xl z-50">
                      {timezones.map((tz) => (
                        <SelectItem key={tz.value} value={tz.value} className="mono text-xs uppercase hover:bg-emerald-50 cursor-pointer">
                          {tz.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 max-h-[180px] sm:max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "p-2 sm:p-2.5 border mono text-[11px] sm:text-xs font-bold transition-all",
                      selectedTime === time ? "border-emerald-600 bg-emerald-600 text-white shadow-sm" : "border-zinc-200 text-zinc-700 hover:border-emerald-600 hover:text-zinc-950 bg-zinc-50"
                    )}
                  >
                    {convertToUserTime(time)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button 
            type="button"
            disabled={!selectedTime}
            onClick={() => setStep(2)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 sm:py-6 rounded-none font-black text-sm sm:text-lg uppercase tracking-tight btn-hover"
          >
            Confirm Time Slot <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleBooking} className="space-y-5 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-zinc-950">Finalize Booking Details</h3>
            <p className="text-xs sm:text-sm text-zinc-600">Enter your details to generate your Google Meet video link</p>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            <div className="space-y-1">
              <label className="mono text-[11px] sm:text-xs uppercase text-zinc-700 font-bold block">Your Name *</label>
              <Input 
                required
                placeholder="Alex Smith" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white text-zinc-950 border-zinc-300 rounded-none h-11 sm:h-12 mono text-xs sm:text-sm focus:border-emerald-600"
              />
            </div>
            
            <div className="space-y-1">
              <label className="mono text-[11px] sm:text-xs uppercase text-zinc-700 font-bold block">Email *</label>
              <Input 
                required
                name="email"
                placeholder="alex@example.com" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white text-zinc-950 border-zinc-300 rounded-none h-11 sm:h-12 mono text-xs sm:text-sm focus:border-emerald-600"
              />
            </div>

            <div className="space-y-1">
              <label className="mono text-[11px] sm:text-xs uppercase text-zinc-700 font-bold block">What are you looking to build or solve? (Optional)</label>
              <Textarea 
                placeholder="E.g. launching a SaaS, need CRM + AI agents for support, website redesign..."
                value={formData.businessNotes}
                onChange={(e) => setFormData({ ...formData, businessNotes: e.target.value })}
                className="bg-white text-zinc-950 border-zinc-300 rounded-none mono text-xs sm:text-sm focus:border-emerald-600 resize-none"
                rows={3}
              />
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 p-3.5 sm:p-5 space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between items-center border-b border-zinc-200 pb-2">
              <span className="mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-bold">Date</span>
              <span className="font-bold uppercase text-zinc-950">{format(selectedDate, 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-200 pb-2">
              <span className="mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-bold">Time</span>
              <span className="font-bold uppercase text-zinc-950">{convertToUserTime(selectedTime!)} ({userTimezone})</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-bold">Platform</span>
              <span className="font-bold uppercase text-emerald-700">Google Meet</span>
            </div>
          </div>

          <HumanCaptcha isVerified={isHuman} onVerified={setIsHuman} />

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={isSending} className="border-zinc-300 text-zinc-800 hover:bg-zinc-100 py-5 sm:py-6 rounded-none font-bold uppercase text-[11px] sm:text-xs">
              Back
            </Button>
            <Button 
              type="submit"
              disabled={!formData.name || !formData.email || isSending}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-5 sm:py-6 rounded-none font-black uppercase text-[11px] sm:text-xs flex items-center justify-center gap-2 btn-hover"
            >
              {isSending ? <Loader2 className="animate-spin" size={16} /> : "Confirm Session"}
            </Button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="text-center py-8 sm:py-12 space-y-4 sm:space-y-5 animate-in zoom-in-95">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-950">Booking Confirmed</h3>
          <p className="text-zinc-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Your strategy session with Maria is locked in for <span className="text-zinc-950 font-bold">{format(selectedDate, 'MMMM dd')} at {convertToUserTime(selectedTime!)}</span>. A Google Meet invite has been dispatched to <span className="text-emerald-700 font-bold">{formData.email}</span>.
          </p>
          <Button asChild variant="outline" className="border-zinc-300 text-zinc-900 py-4 sm:py-5 px-6 sm:px-8 rounded-none font-bold uppercase hover:bg-zinc-100 text-xs">
            <a href="/">Return Home</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;