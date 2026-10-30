import React from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { PageId } from '../types/cafe';
import { DeliveryBadges } from '../components/DeliveryBadges';
import { MapPin, ShieldCheck, ChevronRight, Utensils, Coffee, ExternalLink, CalendarCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservation: () => void;
  onOpenOrderTray: () => void;
  onInspectImage: (src: string, title: string, caption: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenReservation,
  onOpenOrderTray,
  onInspectImage,
}) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Hero Section with Real Exterior Facade */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-24 bg-[#123038] text-white overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D89B2B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 2-Column Hero: Editorial Story + Real Exterior Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#D89B2B]/15 border border-[#D89B2B]/30 text-[#E5A836] text-xs uppercase tracking-widest font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.odiaName} · Official Location</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.08] text-white">
                  DESTIN Café & Restaurant
                  <span className="block italic text-[#E5A836] font-normal text-2xl sm:text-3xl lg:text-4xl pt-2">
                    "Savour Your Story"
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed pt-2">
                  Welcome to Kendrapara’s premier culinary destination on Cuttack-Chandbali Road. 
                  Experience our fully air-conditioned timber dining hall, fresh whole <strong className="text-white font-medium">Tawa Pomfret</strong>, 
                  Indo-Chinese wok soups from <strong className="text-white font-medium">₹80</strong>, and thick cold coffee blends.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="px-5 py-3 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Explore Dine-In Menu</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenReservation}
                  className="px-5 py-3 rounded-md bg-[#1E434D] hover:bg-[#275662] text-white border border-[#D89B2B]/40 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-[#D89B2B]" />
                  <span>Reserve a Table</span>
                </button>

                <button
                  onClick={() => onNavigate('order')}
                  className="px-4 py-3 text-stone-300 hover:text-white text-xs font-semibold tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Swiggy & Zomato</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FC8019]" />
                </button>
              </div>

              {/* Highlights row */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg border-t border-[#D89B2B]/20">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-stone-400 font-mono block">Cuisine</span>
                  <span className="text-xs font-semibold text-white">Chinese, Coastal & Café</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] text-stone-400 font-mono block">Specialty</span>
                  <span className="text-xs font-semibold text-[#E5A836]">Tawa Pomfret & Rolls</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] text-stone-400 font-mono block">Atmosphere</span>
                  <span className="text-xs font-semibold text-white">AC Family Banquet</span>
                </div>
              </div>

            </div>

            {/* Right: Authentic Exterior Photograph Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D89B2B]/40 to-[#123038] opacity-75 blur-md group-hover:opacity-100 transition duration-500" />
                
                <div className="relative bg-[#0D2228] p-3 sm:p-4 rounded-xl border border-[#D89B2B]/40 shadow-2xl">
                  
                  <div
                    onClick={() =>
                      onInspectImage(
                        BUSINESS_INFO.images.exterior,
                        'DESTIN Café & Restaurant Exterior',
                        'Real front exterior showing 3D signage, white jali lattice, and paved entrance opposite Bharat Petroleum, Kapaleswar.'
                      )
                    }
                    className="relative rounded-lg overflow-hidden cursor-pointer bg-stone-900 group/img"
                  >
                    <img
                      src={BUSINESS_INFO.images.exterior}
                      alt="DESTIN Café and Restaurant front exterior with 3D signage and jali screen"
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <div className="flex items-center justify-between w-full text-xs">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#D89B2B]" />
                          <span>Actual Restaurant Facade</span>
                        </span>
                        <span className="text-[#E5A836] font-mono text-[11px]">Click to expand</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 px-1 flex items-center justify-between text-xs text-stone-300">
                    <span className="font-mono text-[11px] text-stone-400">Plot No-16, Jajang, Kapaleswar</span>
                    <button
                      onClick={() => onNavigate('gallery')}
                      className="text-[#E5A836] hover:underline font-medium text-[11px]"
                    >
                      View all venue photos →
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Online Delivery Badges Banner (Swiggy, Zomato, Direct) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DeliveryBadges variant="banner" onOpenOrderTray={onOpenOrderTray} />
      </div>

      {/* Real Venue Preview: Dining Hall & Warm Ambiance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#D89B2B] font-semibold">
                Authentic Interior Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#123038] mt-1">
                Step Inside DESTIN
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                Warm timber slat pillars, private air-conditioned family tables, and ambient lighting designed for leisurely meals and family celebrations.
              </p>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2 text-xs font-semibold text-[#123038] hover:text-[#D89B2B] transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
            >
              <span>Explore Architecture & Story</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* 2 Real Photos Grid: Dining Hall + Reception Desk */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Dining Hall (7 Cols) */}
            <div
              onClick={() =>
                onInspectImage(
                  BUSINESS_INFO.images.diningHall,
                  'AC Family Dining Hall',
                  'Handcrafted wooden tables, purple upholstered chairs, fluted timber columns, and air-conditioned hall.'
                )
              }
              className="md:col-span-7 group relative rounded-xl overflow-hidden cursor-pointer bg-stone-900 border border-stone-200 shadow-xs"
            >
              <img
                src={BUSINESS_INFO.images.diningHall}
                alt="DESTIN spacious AC dining hall with wooden chairs and fluted columns"
                className="w-full h-72 sm:h-84 object-cover transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono uppercase text-[#E5A836] font-semibold">Air-Conditioned Dining</span>
                <h3 className="text-lg font-serif font-bold text-white">Family Banquet & Casual Lounge</h3>
                <p className="text-xs text-stone-300 mt-0.5">Spacious seating with comfortable cushioning and serene acoustic ambiance.</p>
              </div>
            </div>

            {/* Reception & Counter (5 Cols) */}
            <div
              onClick={() =>
                onInspectImage(
                  BUSINESS_INFO.images.receptionDesk,
                  'Front Reception Counter',
                  'Warm fluted timber slats, glowing amber pendant lamp, and backlit DESTIN slogan board.'
                )
              }
              className="md:col-span-5 group relative rounded-xl overflow-hidden cursor-pointer bg-stone-900 border border-stone-200 shadow-xs"
            >
              <img
                src={BUSINESS_INFO.images.receptionDesk}
                alt="Front desk reception with fluted timber and warm pendant lamp"
                className="w-full h-72 sm:h-84 object-cover transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono uppercase text-[#E5A836] font-semibold">Warm Hospitality</span>
                <h3 className="text-lg font-serif font-bold text-white">Front Desk & Hearth</h3>
                <p className="text-xs text-stone-300 mt-0.5">Ambient lighting casting geometric shadows, greeting every guest with warmth.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Official Menu Card Feature Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#123038] text-white rounded-2xl p-6 sm:p-10 border border-[#D89B2B]/30 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#E5A836] font-semibold">
                Transparent & Honest Pricing
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">
                The Official Dine-In Menu
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed max-w-xl">
                We believe in complete transparency. Our printed menu card is made available for all to inspect. 
                Enjoy freshly prepared Veg Soups from <strong className="text-white">₹80</strong>, 
                Non-Veg Soups from <strong className="text-white">₹99</strong>, 
                Wok Noodles from <strong className="text-white">₹70</strong>, and rolls from <strong className="text-white">₹70</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="px-5 py-2.5 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Browse Interactive Menu
                </button>

                <button
                  onClick={() =>
                    onInspectImage(
                      BUSINESS_INFO.images.menuCard,
                      'Official Dine-In Menu Card',
                      'The genuine printed wooden menu card with verified prices for soups, noodles, rolls, and salads.'
                    )
                  }
                  className="px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wide transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#E5A836]" />
                  <span>Inspect Printed Menu Card</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() =>
                  onInspectImage(
                    BUSINESS_INFO.images.menuCard,
                    'Official Dine-In Menu Card',
                    'The genuine printed wooden menu card with verified prices for soups, noodles, rolls, and salads.'
                  )
                }
                className="group relative max-w-xs rounded-xl overflow-hidden border border-[#D89B2B]/40 shadow-xl cursor-pointer"
              >
                <img
                  src={BUSINESS_INFO.images.menuCard}
                  alt="Official wooden menu card of DESTIN"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-black/80 text-xs text-white font-medium">
                    Click to zoom menu
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Three Pillars Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-xl border border-stone-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#123038]/5 text-[#D89B2B] flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Coastal Catch & Pomfret
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Signature whole Tawa Pomfret seasoned with Odia spices and pan-seared fresh on hot cast iron.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-stone-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#123038]/5 text-[#D89B2B] flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Espresso & Cold Blends
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Thick cold coffee crowned with vanilla bean ice cream, fresh mint mojitos, and artisan cappuccinos.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-stone-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#123038]/5 text-[#D89B2B] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Highway Transit Oasis
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dedicated parking, hygienic restrooms, and immediate access opposite Bharat Petroleum on Cuttack-Chandbali Rd.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
