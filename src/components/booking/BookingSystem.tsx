"use client";

import React, { useState } from 'react';
import { format, addDays, startOfDay, isBefore, addMinutes, parse, setHours, setMinutes } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { showSuccess } from '@/utils/toast';

const timezones = [
  "Europe/London",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/Paris",
  "Asia/Dubai",
  "Asia/Singapore",
  "Australia/Sydney"
];

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(startOfDay(new Date()), 1));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userTimezone, setUserTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const generateTimeSlots = () => {
    const slots: string[] = [];
    let current = setMinutes(setHours(new Date(), 13), 0);
    const end = setMinutes(setHours(new Date(), 23), 30);

    while (isBefore(current, addMinutes(end, 1))) {
      slots.push(format(current, 'HH:mm'));
      current = addMinutes(current, 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleBooking = async () => {
    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    showSuccess(`Booking confirmed for ${formData.name}. Google Meet link sent to ${formData.email}.`);
    setIsSending(false);
    setStep(3);
  };

  const convertToUserTime = (ukTime: string) => {
    const today = format(selectedDate, 'yyyy-MM-dd');
    const ukDateTime = `${today} ${ukTime}`;
    const date = parse(ukDateTime, 'yyyy-MM-dd HH:mm', new Date());
    return formatInTimeZone(date, userTimezone, 'HH:mm');
  };

  return (
    <div className="border border-white/15 bg-[#0e0e0e] p-6 md:p-12">
      {step === 1 && (
        <div className="space-y-10">
          <div className="flex items-center gap-6 pb-6 border-b border-white/15">
            <div className="w-16 h-16 bg-emerald-500 flex items-center justify-center shrink-0 text-black">
              <User size={32} />
            </div>
            <div>
              <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Consultant</div>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white">Maria</h3>
              <p className="mono text-xs text-zinc-300 font-bold">30 MINUTE STRATEGY SESSION</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="mono text-xs uppercase tracking-wider text-zinc-200 font-bold flex items-center gap-2">
                <CalendarIcon size={16} className="text-emerald-400" /> Select Date
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => {
                  const date = addDays(startOfDay(new Date()), i + 1);
                  const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "p-3 border mono text-xs flex flex-col items-center transition-all font-bold",
                        isSelected ? "border-emerald-400 bg-emerald-500 text-black" : "border-white/15 text-zinc-300 hover:border-emerald-400 hover:text-white bg-white/[0.02]"
                      )}
                    >
                      <span className={isSelected ? "text-black/80" : "text-zinc-400"}>{format(date, 'EEE')}</span>
                      <span className="text-lg font-black">{format(date, 'dd')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="mono text-xs uppercase tracking-wider text-zinc-200 font-bold flex items-center gap-2">
                  <Clock size={16} className="text-emerald-400" /> Select Time
                </label>
                <div className="w-44">
                  <Select value={userTimezone} onValueChange={setUserTimezone}>
                    <SelectTrigger className="bg-black border-white/20 mono text-xs text-white uppercase h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-white/20 text-white">
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz} className="mono text-xs uppercase hover:bg-emerald-600/20">{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "p-3 border mono text-xs font-bold transition-all",
                      selectedTime === time ? "border-emerald-400 bg-emerald-500 text-black" : "border-white/15 text-zinc-300 hover:border-emerald-400 hover:text-white bg-white/[0.02]"
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
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover"
          >
            Confirm Details <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center">
            <h3 className="text-3xl font-black uppercase text-white mb-2">Finalize Booking</h3>
            <p className="text-sm text-zinc-300">Enter your details to receive the Google Meet link</p>
          </div>

          <div className="space-y-4">
            <Input 
              placeholder="YOUR FULL NAME" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-black text-white border-white/20 rounded-none h-14 mono text-base focus:border-emerald-400"
            />
            <Input 
              placeholder="YOUR WORK EMAIL" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-black text-white border-white/20 rounded-none h-14 mono text-base focus:border-emerald-400"
            />
          </div>

          <div className="bg-black border border-white/15 p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Date</span>
              <span className="font-bold uppercase text-white">{format(selectedDate, 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Time</span>
              <span className="font-bold uppercase text-white">{convertToUserTime(selectedTime!)} ({userTimezone})</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Platform</span>
              <span className="font-bold uppercase text-emerald-400">Google Meet</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={isSending} className="border-white/20 text-white py-7 rounded-none font-bold uppercase">Back</Button>
            <Button 
              type="button"
              disabled={!formData.name || !formData.email || isSending}
              onClick={handleBooking} 
              className="bg-emerald-500 hover:bg-emerald-600 text-black py-7 rounded-none font-black uppercase"
            >
              {isSending ? <Loader2 className="animate-spin" /> : "Confirm Session"}
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center py-16 space-y-6 animate-in zoom-in-95">
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-4xl font-black uppercase text-white">Booking Confirmed</h3>
          <p className="text-zinc-30<dyad-write path="src/components/booking/BookingSystem.tsx" description="Complete the BookingSystem component without any truncation">
"use client";

import React, { useState } from 'react';
import { format, addDays, startOfDay, isBefore, addMinutes, parse, setHours, setMinutes } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { showSuccess } from '@/utils/toast';

const timezones = [
  "Europe/London",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/Paris",
  "Asia/Dubai",
  "Asia/Singapore",
  "Australia/Sydney"
];

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(startOfDay(new Date()), 1));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userTimezone, setUserTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const generateTimeSlots = () => {
    const slots: string[] = [];
    let current = setMinutes(setHours(new Date(), 13), 0);
    const end = setMinutes(setHours(new Date(), 23), 30);

    while (isBefore(current, addMinutes(end, 1))) {
      slots.push(format(current, 'HH:mm'));
      current = addMinutes(current, 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleBooking = async () => {
    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    showSuccess(`Booking confirmed for ${formData.name}. Google Meet link sent to ${formData.email}.`);
    setIsSending(false);
    setStep(3);
  };

  const convertToUserTime = (ukTime: string) => {
    const today = format(selectedDate, 'yyyy-MM-dd');
    const ukDateTime = `${today} ${ukTime}`;
    const date = parse(ukDateTime, 'yyyy-MM-dd HH:mm', new Date());
    return formatInTimeZone(date, userTimezone, 'HH:mm');
  };

  return (
    <div className="border border-white/15 bg-[#0e0e0e] p-6 md:p-12">
      {step === 1 && (
        <div className="space-y-10">
          <div className="flex items-center gap-6 pb-6 border-b border-white/15">
            <div className="w-16 h-16 bg-emerald-500 flex items-center justify-center shrink-0 text-black">
              <User size={32} />
            </div>
            <div>
              <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Consultant</div>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white">Maria</h3>
              <p className="mono text-xs text-zinc-300 font-bold">30 MINUTE STRATEGY SESSION</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="mono text-xs uppercase tracking-wider text-zinc-200 font-bold flex items-center gap-2">
                <CalendarIcon size={16} className="text-emerald-400" /> Select Date
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => {
                  const date = addDays(startOfDay(new Date()), i + 1);
                  const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "p-3 border mono text-xs flex flex-col items-center transition-all font-bold",
                        isSelected ? "border-emerald-400 bg-emerald-500 text-black" : "border-white/15 text-zinc-300 hover:border-emerald-400 hover:text-white bg-white/[0.02]"
                      )}
                    >
                      <span className={isSelected ? "text-black/80" : "text-zinc-400"}>{format(date, 'EEE')}</span>
                      <span className="text-lg font-black">{format(date, 'dd')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="mono text-xs uppercase tracking-wider text-zinc-200 font-bold flex items-center gap-2">
                  <Clock size={16} className="text-emerald-400" /> Select Time
                </label>
                <div className="w-44">
                  <Select value={userTimezone} onValueChange={setUserTimezone}>
                    <SelectTrigger className="bg-black border-white/20 mono text-xs text-white uppercase h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-white/20 text-white">
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz} className="mono text-xs uppercase hover:bg-emerald-600/20">{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "p-3 border mono text-xs font-bold transition-all",
                      selectedTime === time ? "border-emerald-400 bg-emerald-500 text-black" : "border-white/15 text-zinc-300 hover:border-emerald-400 hover:text-white bg-white/[0.02]"
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
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover"
          >
            Confirm Details <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center">
            <h3 className="text-3xl font-black uppercase text-white mb-2">Finalize Booking</h3>
            <p className="text-sm text-zinc-300">Enter your details to receive the Google Meet link</p>
          </div>

          <div className="space-y-4">
            <Input 
              placeholder="YOUR FULL NAME" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-black text-white border-white/20 rounded-none h-14 mono text-base focus:border-emerald-400"
            />
            <Input 
              placeholder="YOUR WORK EMAIL" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-black text-white border-white/20 rounded-none h-14 mono text-base focus:border-emerald-400"
            />
          </div>

          <div className="bg-black border border-white/15 p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Date</span>
              <span className="font-bold uppercase text-white">{format(selectedDate, 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Time</span>
              <span className="font-bold uppercase text-white">{convertToUserTime(selectedTime!)} ({userTimezone})</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Platform</span>
              <span className="font-bold uppercase text-emerald-400">Google Meet</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={isSending} className="border-white/20 text-white py-7 rounded-none font-bold uppercase">Back</Button>
            <Button 
              type="button"
              disabled={!formData.name || !formData.email || isSending}
              onClick={handleBooking} 
              className="bg-emerald-500 hover:bg-emerald-600 text-black py-7 rounded-none font-black uppercase"
            >
              {isSending ? <Loader2 className="animate-spin" /> : "Confirm Session"}
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center py-16 space-y-6 animate-in zoom-in-95">
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-4xl font-black uppercase text-white">Booking Confirmed</h3>
          <p className="text-zinc-300 text-base max-w-[500px] mx-auto leading-relaxed">
            Your session with Maria is locked in. A Google Meet invitation has been sent to <span className="text-white font-bold">{formData.email}</span>.
          </p>
          <Button asChild variant="outline" className="border-white/20 text-white py-6 px-10 rounded-none font-bold uppercase hover:bg-white hover:text-black">
            <a href="/">Return Home</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;