import React from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { ShieldCheck, MapPin, Phone, Clock, Utensils, Award, CheckCircle2, Heart, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onInspectImage: (src: string, title: string, caption: string) => void;
  onOpenReservation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onInspectImage, onOpenReservation }) => {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FAF7F2] text-[#1E293B] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D89B2B] font-semibold">
            {BUSINESS_INFO.odiaName} · Kendrapara
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#123038] tracking-tight">
            Our Story & Design Philosophy
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            How a highway retreat on Cuttack-Chandbali Road grew into Kendrapara’s benchmark for 
            authentic Chinese soups, sizzling coastal seafood, and warm family dining.
          </p>
        </div>

        {/* Narrative & Visiting Card Proof Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-[#D89B2B] font-semibold block">
                The Origin
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#123038] leading-tight">
                "Savour Your Story" — More than a Slogan, a Hospitality Promise
              </h2>
              <div className="text-stone-600 text-sm leading-relaxed space-y-3">
                <p>
                  Located opposite the Bharat Petroleum station in Kapaleswar, Kendrapara, DESTIN was conceptualized 
                  to provide locals and highway commuters an elevated dining environment without the steep prices of luxury metro hotels.
                </p>
                <p>
                  Instead of pre-cooked buffet pans, our kitchen prepares every bowl of <strong className="text-stone-900">Lemon Coriander Soup</strong>, 
                  every plate of <strong className="text-stone-900">Butter Garlic Noodles</strong>, and every whole <strong className="text-stone-900">Tawa Pomfret</strong> fresh to order on live wok burners and cast iron griddles.
                </p>
                <p>
                  With ample front parking, immaculate hygiene, air-conditioned seating, and fast delivery through Swiggy and Zomato, 
                  DESTIN welcomes solo travelers, gathering students, and multi-generational families alike.
                </p>
              </div>
            </div>

            {/* Quality Commitments */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-100 text-xs">
              <div className="space-y-1">
                <strong className="text-stone-900 font-semibold block flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Real Coastal Catch</span>
                </strong>
                <p className="text-stone-500">Fresh fish and prawns sourced daily from regional coastal fisheries.</p>
              </div>

              <div className="space-y-1">
                <strong className="text-stone-900 font-semibold block flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No Artificial Shortcuts</span>
                </strong>
                <p className="text-stone-500">Traditional vegetable and poultry broths simmered with whole spices.</p>
              </div>
            </div>
          </div>

          {/* Right: Visiting Card Dossier */}
          <div className="lg:col-span-5 bg-[#123038] text-white p-7 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D89B2B]/20">
                <span className="text-xs font-mono uppercase text-[#E5A836] font-semibold">
                  Official Business Registration
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Verified In-Person
                </span>
              </div>

              <div
                onClick={() =>
                  onInspectImage(
                    BUSINESS_INFO.images.visitingCard,
                    'Official Business Visiting Card',
                    'Real physical visiting card of DESTIN Café & Restaurant with contact lines and registered address.'
                  )
                }
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-[#D89B2B]/40 bg-stone-900 shadow-inner"
              >
                <img
                  src={BUSINESS_INFO.images.visitingCard}
                  alt="Official visiting card of DESTIN Café & Restaurant"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-black/80 text-xs text-white">
                    Click to inspect full card
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D89B2B] shrink-0 mt-0.5" />
                  <span>Plot No-16, Jajang, (Opp. Bharat Petroleum), Kapaleswar, Cuttack Chandbali Rd, Kendrapara - 754250</span>
                </p>
                <p className="flex items-center gap-2 font-mono text-stone-200">
                  <Phone className="w-3.5 h-3.5 text-[#D89B2B] shrink-0" />
                  <span>+91 91248 66535 · +91 63705 66695</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D89B2B] shrink-0" />
                  <span>10:30 AM – 10:30 PM (Daily, All 7 Days)</span>
                </p>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-2.5 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Book a Family Table
            </button>
          </div>

        </div>

        {/* Architectural Design & Ambiance Breakdown */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D89B2B] font-semibold">
              The Physical Space
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#123038]">
              Designed for Comfort & Warmth
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              A tour through the design details captured in our real venue photographs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1: The Modern Facade */}
            <div
              onClick={() =>
                onInspectImage(
                  BUSINESS_INFO.images.exterior,
                  'Modern Exterior & Jali Lattice',
                  'The sleek charcoal facade with 3D signage and white traditional jali screens.'
                )
              }
              className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-stone-50 hover:border-[#D89B2B] transition-all"
            >
              <div className="h-48 overflow-hidden bg-stone-900">
                <img
                  src={BUSINESS_INFO.images.exterior}
                  alt="Modern facade of DESTIN with jali screens"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  01. The Modern Facade & Jali
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Contrasting charcoal panels with intricate white geometric jali lattice work and vibrant potted greenery on a paved courtyard.
                </p>
              </div>
            </div>

            {/* Feature 2: Timber Dining Hall */}
            <div
              onClick={() =>
                onInspectImage(
                  BUSINESS_INFO.images.diningHall,
                  'AC Family Dining Hall',
                  'Spacious wooden dining tables with purple cushion chairs and fluted timber pillars.'
                )
              }
              className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-stone-50 hover:border-[#D89B2B] transition-all"
            >
              <div className="h-48 overflow-hidden bg-stone-900">
                <img
                  src={BUSINESS_INFO.images.diningHall}
                  alt="Spacious dining hall with wooden furniture"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  02. Banquet Hall & Timber Pillars
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Air-conditioned dining space with purple upholstery, warm wooden dining sets, and fluted vertical wooden columns.
                </p>
              </div>
            </div>

            {/* Feature 3: Warm Reception */}
            <div
              onClick={() =>
                onInspectImage(
                  BUSINESS_INFO.images.receptionDesk,
                  'Amber Pendant Reception',
                  'Front desk counter with fluted timber slats and glowing amber lighting.'
                )
              }
              className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-stone-50 hover:border-[#D89B2B] transition-all"
            >
              <div className="h-48 overflow-hidden bg-stone-900">
                <img
                  src={BUSINESS_INFO.images.receptionDesk}
                  alt="Reception counter with amber pendant light"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  03. The Amber Light Hearth
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A fluted natural timber reception desk bathed in warm rays from custom hanging amber glass pendant lights.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
