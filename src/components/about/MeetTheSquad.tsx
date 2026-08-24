"use client";

import React from 'react';
import SectionLabel from '../ui/SectionLabel';

const squadMembers = [
  { name: "Maria", role: "Founder & Lead Architect", img: "https://i.pravatar.cc/150?u=maria" },
  { name: "Alex", role: "Head of AI & Automation", img: "https://i.pravatar.cc/150?u=alex" },
  { name: "Jordan", role: "Creative Director", img: "https://i.pravatar.cc/150?u=jordan" },
  { name: "Sam", role: "Lead Frontend Engineer", img: "https://i.pravatar.cc/150?u=sam" },
];

const MeetTheSquad = () => {
  return (
    <section className="section-padding bg-zinc-50/70 border-y border-zinc-200">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>The Team</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-zinc-950 tracking-tight">
            Meet The Squad
          </h2>
          <p className="text-zinc-600 mt-4 text-base sm:text-lg">
            We are a tight-knit team of builders, designers, and strategists who are obsessed with launching successful businesses.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {squadMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:border-emerald-500 transition-all"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-950">{member.name}</h3>
              <p className="mono text-xs text-emerald-700 font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheSquad;