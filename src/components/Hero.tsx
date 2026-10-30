import React from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { BrandLogo } from './BrandLogo';
import { MapPin, Phone, Star, Clock, ArrowDown, ExternalLink, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onInspectCard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onInspectCard }) => {
  // Determine live opening status based on Indian standard hours (10:30 - 22:30)
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeDec = currentHour + currentMinutes / 60;
  const isOpen = currentTimeDec >= 10.5 && currentTimeDec <= 22.5;

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#123038] text-white overflow-hidden">
      {/* Subtle organic background wave element mimicking the brand card */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 600 C300 450, 700 750, 1540 500 L1540 900 L-100 900 Z"
            fill="#D89B2B"
            fillOpacity="0.15"
          />
          <path
            d="M-50 700 C450 550, 950 820, 1600 620"
            stroke="#D89B2B"
            strokeWidth="3"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Bar Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#D89B2B]/20 text-xs text-stone-300">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#173D47] border border-[#D89B2B]/30 text-stone-200">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-medium">
                {isOpen ? 'Open Now · Till 10:30 PM' : 'Opens Daily at 10:30 AM'}
              </span>
            </span>

            <span className="hidden sm:inline text-stone-400">·</span>

            <span className="hidden sm:inline-flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#D89B2B]" />
              <span>Cuttack Chandbali Rd, Kendrapara (Opp. Bharat Petroleum)</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[#E5A836]">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-white text-sm">4.4</span>
              <span className="text-stone-400 text-xs">/ 5.0 Rating</span>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="hover:text-[#E5A836] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#D89B2B]" />
              <span className="font-mono text-xs">{BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Strategic Narrative (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#D89B2B]/15 border border-[#D89B2B]/30 text-[#E5A836] text-xs uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Business & Verified Kitchen</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.08] text-white">
                Savour Your Story at{' '}
                <span className="italic text-[#E5A836] font-normal block sm:inline">
                  DESTIN.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-stone-300 font-light max-w-2xl leading-relaxed pt-2">
                Kendrapara’s sanctuary for genuine food lovers. From sizzling cast-iron{' '}
                <strong className="text-white font-medium">Tawa Pomfret</strong> and steaming{' '}
                <strong className="text-white font-medium">Lemon Coriander broths</strong> to artisanal espresso 
                and slow-cooked biryani along Cuttack-Chandbali Highway.
              </p>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-2">
              <div className="p-3 rounded bg-[#173D47]/70 border border-stone-700/60">
                <span className="block text-xs uppercase text-stone-400 font-medium">Cuisine</span>
                <span className="text-sm font-semibold text-white">Coastal, Chinese & Café</span>
              </div>
              <div className="p-3 rounded bg-[#173D47]/70 border border-stone-700/60">
                <span className="block text-xs uppercase text-stone-400 font-medium">Specialty</span>
                <span className="text-sm font-semibold text-[#E5A836]">Whole Tawa Pomfret</span>
              </div>
              <div className="p-3 rounded bg-[#173D47]/70 border border-stone-700/60 col-span-2 sm:col-span-1">
                <span className="block text-xs uppercase text-stone-400 font-medium">Highway Access</span>
                <span className="text-sm font-semibold text-white">Opp. Bharat Petroleum</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#D89B2B]/20 flex items-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Verified Menu</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 rounded-md bg-[#1E434D] hover:bg-[#25525E] text-white border border-[#D89B2B]/40 font-semibold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve Table</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-stone-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#D89B2B]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Physical Visiting Card Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full max-w-md relative group">
              {/* Outer decorative card frame with warm glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D89B2B]/50 to-[#123038] opacity-70 blur-md group-hover:opacity-90 transition duration-500" />
              
              <div className="relative bg-[#0D2228] p-4 sm:p-5 rounded-xl border border-[#D89B2B]/40 shadow-2xl">
                
                {/* Header label */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-xs">
                  <div className="flex items-center gap-1.5 text-[#E5A836] font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Official Business Card</span>
                  </div>
                  <span className="text-stone-400 font-mono text-[11px]">Kendrapara, Odisha</span>
                </div>

                {/* The Real Visiting Card Image */}
                <div 
                  onClick={onInspectCard}
                  className="relative overflow-hidden rounded-lg cursor-pointer bg-stone-900 border border-stone-800 group/img"
                  title="Click to view full resolution verified business card"
                >
                  <img
                    src={BUSINESS_INFO.visitingCardImage}
                    alt="DESTIN Café and Restaurant official business card showing address, phone numbers and logo"
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover/img:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-black/75 text-xs text-white font-medium backdrop-blur-sm flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-[#D89B2B]" />
                      <span>Inspect Card Details</span>
                    </span>
                  </div>
                </div>

                {/* Verified details footer excerpt */}
                <div className="pt-3.5 space-y-2 text-xs text-stone-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D89B2B] shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Plot No-16, Jajang, Opp. Bharat Petroleum, Kapaleswar, Cuttack Chandbali Rd
                    </span>
                  </div>
                  <div className="flex items-center gap-3 pt-1 text-stone-400 font-mono text-[11px]">
                    <span>Tel: +91 91248 66535</span>
                    <span>·</span>
                    <span>+91 63705 66695</span>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-[11px] text-stone-400 pt-3 flex items-center gap-1.5">
              <span>Primary source of truth verified from physical card & local listings.</span>
            </p>

          </div>

        </div>

      </div>

      {/* Decorative down indicator */}
      <div className="text-center pt-10">
        <a
          href="#story"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stone-700 text-stone-400 hover:text-[#D89B2B] hover:border-[#D89B2B] transition-colors"
          aria-label="Scroll to our story"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
