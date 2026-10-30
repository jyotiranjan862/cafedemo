import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, Car, Shield } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullFormatted);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const schedule = [
    { day: 'Monday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Tuesday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Wednesday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Thursday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Friday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Saturday', hours: '10:30 AM – 10:30 PM' },
    { day: 'Sunday', hours: '10:30 AM – 10:30 PM' },
  ];

  const todayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon...
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[todayIndex];

  return (
    <section id="location" className="py-20 bg-[#FAF7F2] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D89B2B]">
            Find Us on Cuttack-Chandbali Highway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123038] tracking-tight">
            Location, Directions & Hours
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated opposite the Bharat Petroleum fuel station in Jajang, Kapaleswar.
            Accessible from both Kendrapara town center and the Cuttack-Chandbali expressway.
          </p>
        </div>

        {/* 2-Column Location & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Contact & Hours (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono font-semibold text-[#D89B2B] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Exact Postal Address</span>
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="text-xs text-stone-500 hover:text-[#123038] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80 space-y-1">
                  <p className="font-semibold text-stone-900 text-sm">
                    DESTIN CAFÉ & RESTAURANT
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {BUSINESS_INFO.address.plot}, ({BUSINESS_INFO.address.landmark}),<br />
                    {BUSINESS_INFO.address.locality},<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} — {BUSINESS_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Highway Landmark & Transit Info */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/60 space-y-1">
                  <span className="text-stone-500 block font-medium">Landmark</span>
                  <strong className="text-stone-900 block font-semibold">Opp. Bharat Petroleum</strong>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/60 space-y-1">
                  <span className="text-stone-500 block font-medium">Parking</span>
                  <strong className="text-stone-900 block font-semibold">Dedicated Front Bay</strong>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono font-semibold text-stone-500 block">
                  Direct Phone Lines
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {BUSINESS_INFO.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="p-3 rounded-lg bg-stone-50 hover:bg-[#123038] hover:text-white border border-stone-200 text-stone-800 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#D89B2B]" />
                        <span className="font-mono text-xs font-semibold">{phone.display}</span>
                      </div>
                      <span className="text-[10px] text-stone-400 group-hover:text-stone-200">
                        {phone.primary ? 'Primary' : 'Alt'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Operating Schedule */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono font-semibold text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D89B2B]" />
                    <span>Operating Hours</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Open All 7 Days
                  </span>
                </div>

                <div className="divide-y divide-stone-100 text-xs border border-stone-200 rounded-lg overflow-hidden">
                  {schedule.map((item) => {
                    const isToday = item.day === todayName;
                    return (
                      <div
                        key={item.day}
                        className={`flex justify-between items-center px-3.5 py-2 ${
                          isToday ? 'bg-[#123038] text-white font-medium' : 'text-stone-600 bg-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#E5A836]" />}
                          <span>{item.day}</span>
                        </span>
                        <span className="font-mono">{item.hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Live Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Right Column: Google Maps Interactive Embed (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col">
            
            <div className="p-4 bg-[#123038] text-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D89B2B]" />
                <span className="font-medium">Google Maps Navigation Preview</span>
              </div>
              <span className="text-stone-300 font-mono text-[11px]">
                Kendrapara · Kapaleswar · Cuttack-Chandbali Rd
              </span>
            </div>

            {/* Embedded Responsive Google Maps iframe */}
            <div className="relative flex-1 min-h-[420px] w-full bg-stone-100">
              <iframe
                title="DESTIN Café and Restaurant Location Map"
                src="https://maps.google.com/maps?q=Kapaleswar+Kendrapara+Odisha+754250&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#D89B2B]" />
                <span>Easily accessible by two-wheelers, cars, and highway cruisers.</span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#123038] font-semibold hover:text-[#D89B2B] flex items-center gap-1 transition-colors"
              >
                <span>Open in Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
