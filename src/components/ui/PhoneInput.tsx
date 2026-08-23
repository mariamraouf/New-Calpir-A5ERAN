"use client";

import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const countryCodes = [
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+20", country: "EG", flag: "🇪🇬" },
  { code: "+965", country: "KW", flag: "🇰🇼" },
  { code: "+974", country: "QA", flag: "🇶🇦" },
  { code: "+968", country: "OM", flag: "🇴🇲" },
  { code: "+973", country: "BH", flag: "🇧🇭" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+64", country: "NZ", flag: "🇳🇿" },
  { code: "+353", country: "IE", flag: "🇮🇪" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
  { code: "+43", country: "AT", flag: "🇦🇹" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+47", country: "NO", flag: "🇳🇴" },
  { code: "+45", country: "DK", flag: "🇩🇰" },
  { code: "+358", country: "FI", flag: "🇫🇮" },
  { code: "+351", country: "PT", flag: "🇵🇹" },
  { code: "+48", country: "PL", flag: "🇵🇱" },
  { code: "+90", country: "TR", flag: "🇹🇷" },
  { code: "+92", country: "PK", flag: "🇵🇰" },
  { code: "+880", country: "BD", flag: "🇧🇩" },
  { code: "+234", country: "NG", flag: "🇳🇬" },
  { code: "+254", country: "KE", flag: "🇰🇪" },
  { code: "+233", country: "GH", flag: "🇬🇭" },
  { code: "+62", country: "ID", flag: "🇮🇩" },
  { code: "+60", country: "MY", flag: "🇲🇾" },
  { code: "+63", country: "PH", flag: "🇵🇭" },
  { code: "+84", country: "VN", flag: "🇻🇳" },
  { code: "+66", country: "TH", flag: "🇹🇭" },
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
  const [selectedCode, setSelectedCode] = useState("+44");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCodeChange = (code: string) => {
    setSelectedCode(code);
    onChange(`${code} ${phoneNumber}`.trim());
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d\s-]/g, "");
    setPhoneNumber(raw);
    onChange(`${selectedCode} ${raw}`.trim());
  };

  return (
    <div className={`flex items-stretch border border-zinc-300 bg-white focus-within:border-emerald-600 ${className}`}>
      {/* Country Code Dropdown */}
      <div className="w-[110px] shrink-0 border-r border-zinc-200 bg-zinc-50">
        <Select value={selectedCode} onValueChange={handleCodeChange}>
          <SelectTrigger className="w-full h-12 border-0 bg-transparent px-2.5 mono text-xs font-bold text-zinc-900 rounded-none focus:ring-0 focus:ring-offset-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border-zinc-200 text-zinc-950 max-h-60 shadow-xl z-50">
            {countryCodes.map((c) => (
              <SelectItem key={`${c.country}-${c.code}`} value={c.code} className="mono text-xs cursor-pointer py-2">
                <span className="mr-1.5">{c.flag}</span>
                <span className="font-bold">{c.code}</span>
                <span className="text-zinc-500 text-[10px] ml-1">({c.country})</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Number Input */}
      <Input
        type="tel"
        value={phoneNumber}
        onChange={handleNumberChange}
        placeholder={placeholder}
        className="flex-1 border-0 h-12 mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-3 text-zinc-950 placeholder:text-zinc-400"
      />
    </div>
  );
};

export default PhoneInput;