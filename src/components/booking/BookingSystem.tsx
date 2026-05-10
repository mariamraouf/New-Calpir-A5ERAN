"use client";

import React, { useState, useEffect } from 'react';
import { format, addDays, startOfDay, isBefore, addMinutes, parse, setHours, setMinutes } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';
import { Calendar as CalendarIcon, Clock, Globe, User, CheckCircle2, ArrowRight } from 'lucide-react';
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
  const [formData, setFormData] = useState({ name: '', email: '' });

  // UK Time: 1 PM (13:00) to 12 AM (00:00)
  const generateTimeSlots = () => {
    const slots = [];
    let current = setMinutes(setHours(new Date(), 13), 0);
    const end = setMinutes(setHours(new Date(), 23), 30);

    while (isBefore(current, addMinutes(end, 1))) {
      slots.push(format(current, 'HH:mm'));
      current = addMinutes(current, 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleBooking = () => {
    showSuccess(`Booking confirmed for ${formData.name}! The Google Meet link has been sent to ${formData.email}.`);
    setStep(3);
  };

  const convertToUserTime = (ukTime: string) => {
    const today = format(selectedDate, 'yyyy-MM-dd');
    const ukDateTime = `${today} ${ukTime}`;
    const date = parse(ukDateTime, 'yyyy-MM-dd HH:mm', new Date());
    return formatInTimeZone(date, userTimezone, 'HH:mm');
  };

  return (
    <div className="border border-white/10 bg-white/5 p-8 md:p-12">
      {step === 1 && (
        <div className="space-y-12">
          <div className="flex items-center gap-6 pb-8 border-b border-white/10">
            <div className="w-20 h-20 bg-[#064e3b] flex items-center justify-center shrink-0">
              <User size={40} className="text-white" />
            </div>
            <div>
              <div className="mono text-[0.6rem] uppercase tracking-widest text-[#064e3b] mb-1">Consultant</div>
              <h3 className="text-3xl font-black uppercase">Maria</h3>
              <p className="mono text-xs text-white/40">30 MINUTE STRATEGY SESSION</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <label className="mono text-[0.6rem] uppercase tracking-widest text-white/40 flex items-center gap-2">
                <CalendarIcon size={14} /> Select Date
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => {
                  const date = addDays(startOfDay(new Date()), i + 1);
                  const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "p-4 border mono text-[0.6rem] flex flex-col items-center transition-all",
                        isSelected ? "border-[#064e3b] bg-[#064e3b] text-white" : "border-white/10 hover:border-white/30"
                      )}
                    >
                      <span className="opacity-60">{format(date, 'EEE')}</span>
                      <span className="text-lg font-black">{format(date, 'dd')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="mono text-[0.6rem] uppercase tracking-widest text-white/40 flex items-center gap-2">
                  <Clock size={14} /> Select Time
                </label>
                <div className="w-40">
                  <Select value={userTimezone} onValueChange={setUserTimezone}>
                    <SelectTrigger className="bg-black border-white/10 mono text-[0.6rem] uppercase h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/10">
                      {timezones.map(tz => (
                        <SelectItem key={tz} value={tz} className="mono text-[0.6rem] uppercase">{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "p-4 border mono text-xs transition-all",
                      selectedTime === time ? "border-[#064e3b] bg-[#064e3b] text-white" : "border-white/10 hover:border-white/30"
                    )}
                  >
                    {convertToUserTime(time)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button 
            disabled={!selectedTime}
            onClick={() => setStep(2)}
            className="w-full bg-[#064e3b] hover:bg-[#053e2f] text-white py-8 rounded-none font-black text-xl uppercase tracking-tighter"
          >
            Confirm Details <ArrowRight className="ml-2" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center">
            <h3 className="text-4xl font-black uppercase mb-4">Finalize Booking</h3>
            <p className="mono text-sm text-white/40">Enter your details to receive the meeting link</p>
          </div>

          <div className="space-y-6">
            <Input 
              placeholder="YOUR NAME" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-black border-white/10 rounded-none h-16 mono text-lg focus:border-[#064e3b]"
            />
            <Input 
              placeholder="YOUR EMAIL" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-black border-white/10 rounded-none h-16 mono text-lg focus:border-[#064e3b]"
            />
          </div>

          <div className="bg-white/5 border border-white/10 p-8 space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Date</span>
              <span className="font-black uppercase">{format(selectedDate, 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Time</span>
              <span className="font-black uppercase">{convertToUserTime(selectedTime!)} ({userTimezone})</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Platform</span>
              <span className="font-black uppercase text-[#064e3b]">Google Meet</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => setStep(1)} className="border-white/10 py-8 rounded-none font-black uppercase">Back</Button>
            <Button 
              disabled={!formData.name || !formData.email}
              onClick={handleBooking} 
              className="bg-[#064e3b] hover:bg-[#053e2f] text-white py-8 rounded-none font-black uppercase"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center py-20 space-y-8 animate-in zoom-in-95">
          <div className="w-24 h-24 bg-[#064e3b] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h3 className="text-5xl font-black uppercase">Booking Confirmed</h3>
          <p className="mono text-lg text-white/40 max-w-[500px] mx-auto">
            Your session with Maria is locked in. A Google Meet invitation has been sent to {formData.email}.
          </p>
          <Button asChild variant="outline" className="border-white/10 py-8 px-12 rounded-none font-black uppercase">
            <a href="/">Return Home</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;