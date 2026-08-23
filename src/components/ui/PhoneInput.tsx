"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const countries = [
  { code: "+44", country: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", country: "US", name: "United States", flag: "🇺🇸" },
  { code: "+1", country: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "+966", country: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+971", country: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+49", country: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "FR", name: "France", flag: "🇫🇷" },
  { code: "+34", country: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "+39", country: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "+31", country: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "+353", country: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "+41", country: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "+43", country: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "+46", country: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "+61", country: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "+64", country: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "+65", country: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "+91", country: "IN", name: "India", flag: "🇮🇳" },
  { code: "+965", country: "KW", name: "Kuwait", flag: "🇰🇼" },
  { code: "+974", country: "QA", name: "Qatar", flag: "🇶🇦" },
  { code: "+968", country: "OM", name: "Oman", flag: "🇴🇲" },
  { code: "+973", country: "BH", name: "Bahrain", flag: "🇧🇭" },
  { code: "+20", country: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "+27", country: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "+234", country: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "+55", country: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "+81", country: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "+86", country: "CN", name: "China", flag: "🇨🇳" },
  { code: "+852", country: "HK", name: "Hong Kong", flag: "🇭🇰" },
  { code: "+60", country: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "+63", country: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "+62", country: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "+90", country: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "+92", country: "PK", name: "Pakistan", flag: "🇵🇰" },
];

interface PhoneInputProps {
  value: string;
  onChange: (fullNumber: string) => void;
  placeholder?: string;
  className?: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  placeholder = "7346 875731",
  className = ""
}) => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [rawNumber, setRawNumber] = useState("");

  // Keep internal state updated if initial value is passed
  useEffect(() => {
    if (!value) return;
    const match = countries.find(c => value.startsWith(c.code));
    if (match) {
      const idx = countries.indexOf(match);
      setSelectedCountryIndex(idx);
      setRawNumber(value.replace(match.code, "").trim());
    }
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = parseInt(e.target.value, 10);
    setSelectedCountryIndex(idx);
    const country = countries[idx];
    onChange(`${country.code} ${rawNumber}`.trim());
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanNumber = e.target.value.replace(/[^\d\s\-()]/g, "");
    setRawNumber(cleanNumber);
    const country = countries[selectedCountryIndex];
    onChange(`${country.code} ${cleanNumber}`.trim());
  };

  const currentCountry = countries[selectedCountryIndex] || countries[0];

  return (
    <div className={`relative flex items-center w-full h-12 bg-white border border-zinc-300 transition-colors focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 shadow-sm ${className}`}>
      {/* Country Code Picker Box */}
      <div className="relative h-full flex items-center bg-zinc-50 border-r border-zinc-200 px-3 cursor-pointer shrink-0 hover:bg-zinc-100 transition-colors">
        <div className="flex items-center gap-1.5 pointer-events-none select-none">
          <span className="text-base leading-none">{currentCountry.flag}</span>
          <span className="mono text-xs font-black text-zinc-900">{currentCountry.code}</span>
          <ChevronDown size={13} className="text-zinc-500 shrink-0" />
        </div>

        {/* Full Native Select overlay for seamless cross-platform picker */}
        <select
          value={selectedCountryIndex}
          onChange={handleCountryChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-sm font-sans"
          aria-label="Select Country Code"
        >
          {countries.map((c, i) => (
            <option key={`${c.country}-${c.code}-${i}`} value={i} className="text-zinc-900 bg-white py-1">
              {c.flag} {c.code} ({c.name})
            </option>
          ))}
        </select>
      </div>

      {/* Phone Number Input */}
      <input
        type="tel"
        value={rawNumber}
        onChange={handleNumberChange}
        placeholder={placeholder}
        className="w-full h-full px-3.5 bg-transparent mono text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-none"
      />
    </div>
  );
};

export default PhoneInput;