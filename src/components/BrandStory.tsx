import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { MapPin, Phone, CheckCircle2, Coffee, Utensils, Compass, Clock, Copy, Check } from 'lucide-react';

interface BrandStoryProps {
  onInspectCard: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onInspectCard }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 9124866535');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="story" className="py-20 bg-[#FAF7F2] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Kicker */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D89B2B]">
            Authentic Hospitality · Kendrapara
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123038] tracking-tight">
            A Haven for Good Food, Slow Conversations & Savoring Moments
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed pt-2">
            DESTIN was born from a simple belief: every journey along the Cuttack-Chandbali highway
            deserves a warm table, piping hot food made with honest ingredients, and a story worth savouring.
          </p>
        </div>

        {/* Narrative & Verification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Brand Story & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-white p-8 sm:p-10 rounded-xl border border-stone-200/80 shadow-sm">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#123038] uppercase tracking-wider">
                <span className="w-8 h-px bg-[#D89B2B]" />
                <span>The Vision Behind DESTIN</span>
              </div>

              <h3 className="text-2xl font-serif text-[#123038] leading-snug">
                "We wanted to build more than a highway stop — a space where flavor meets community."
              </h3>

              <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Located at Plot No-16 in Jajang, directly opposite the Bharat Petroleum station in Kapaleswar,
                  DESTIN Café & Restaurant bridges the warmth of an intimate European-style coffee house with the
                  exuberance of an authentic Odia coastal kitchen and Asian wok.
                </p>
                <p>
                  Whether you are dropping in for a rich iced cold coffee after college, savoring our celebrated
                  <strong className="text-[#123038]"> Tawa Pomfret</strong> fresh from coastal fisheries, or warming up with a 
                  bowl of fragrant <strong className="text-[#123038]">Lemon Coriander Soup</strong>, every recipe is cooked to order 
                  without artificial pretension.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-md bg-[#123038]/5 flex items-center justify-center text-[#D89B2B]">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-[#123038]">Fresh Coastal Catch</h4>
                <p className="text-xs text-stone-500 leading-normal">
                  Whole Pomfret and river fish seasoned with genuine coastal marinades.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-md bg-[#123038]/5 flex items-center justify-center text-[#D89B2B]">
                  <Coffee className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-[#123038]">Café Culture</h4>
                <p className="text-xs text-stone-500 leading-normal">
                  Freshly pulled espresso, hand-churned cold coffee, burgers, and mocktails.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-md bg-[#123038]/5 flex items-center justify-center text-[#D89B2B]">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-[#123038]">Highway Comfort</h4>
                <p className="text-xs text-stone-500 leading-normal">
                  Easy parking, spotless restrooms, and air-conditioned dining for travelers.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Business Identity Card Dossier (5 Cols) */}
          <div className="lg:col-span-5 bg-[#123038] text-white p-8 rounded-xl flex flex-col justify-between shadow-md">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#D89B2B]/20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E5A836]">
                  Verified Business Profile
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Active & Operating
                </span>
              </div>

              {/* Verified Card Thumbnail Action */}
              <div
                onClick={onInspectCard}
                className="group relative cursor-pointer rounded-lg overflow-hidden border border-[#D89B2B]/40 bg-stone-900 shadow-inner"
              >
                <img
                  src={BUSINESS_INFO.visitingCardImage}
                  alt="Verified visiting card of DESTIN Café & Restaurant Kendrapara"
                  className="w-full h-44 object-cover transform transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-[#FAF7F2] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D89B2B]" />
                    <span>Click to inspect original card</span>
                  </span>
                </div>
              </div>

              {/* Key Location Facts */}
              <div className="space-y-3.5 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D89B2B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Physical Address:</strong>
                    <span>Plot No-16, Jajang, (Opp. Bharat Petroleum), Kapaleswar, Cuttack Chandbali Rd, Kendrapara, Odisha - 754250</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D89B2B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Daily Hours:</strong>
                    <span>Monday to Sunday: 10:30 AM – 10:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D89B2B] shrink-0 mt-0.5" />
                  <div className="w-full">
                    <strong className="block text-white font-medium">Direct Inquiries & Bookings:</strong>
                    <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                      <span className="font-mono text-stone-200">+91 9124866535 / +91 6370566695</span>
                      <button
                        onClick={handleCopyPhone}
                        className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[11px] text-[#E5A836] transition-colors flex items-center gap-1 cursor-pointer"
                        title="Copy primary phone number"
                      >
                        {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-[#D89B2B]/20">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#123038] bg-[#D89B2B] hover:bg-[#E5A836] rounded transition-colors flex items-center justify-center gap-2"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
