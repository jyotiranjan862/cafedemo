import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/cafeData';
import { PageId } from '../types/cafe';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1C22] text-white pt-16 pb-12 border-t border-[#D89B2B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" showTagline={true} theme="dark" />
            
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Kendrapara’s sanctuary for genuine dining along Cuttack-Chandbali Road. 
              Air-conditioned family hall, authentic Chinese soups, wok noodles, rolls, and whole Tawa Pomfret.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#E5A836]">
              <ShieldCheck className="w-4 h-4" />
              <span>{BUSINESS_INFO.odiaName} · Verified Location</span>
            </div>

            {/* Quick Swiggy and Zomato Badges in footer */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={BUSINESS_INFO.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-[#FC8019] hover:bg-[#E56F0D] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={BUSINESS_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-[#E23744] hover:bg-[#CB202D] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Pages (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#D89B2B] font-semibold">
              Pages
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dine-In Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About & Space
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Real Photographs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('order')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Order Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Directions & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Address & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#D89B2B] font-semibold">
              Highway Address
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D89B2B] shrink-0 mt-0.5" />
                <span>
                  Plot No-16, Jajang, Opp. Bharat Petroleum, Kapaleswar, Cuttack Chandbali Rd, Kendrapara - 754250
                </span>
              </p>
              <p className="flex items-center gap-2 pt-1 font-mono text-stone-300">
                <Phone className="w-3.5 h-3.5 text-[#D89B2B] shrink-0" />
                <span>+91 91248 66535 / +91 63705 66695</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#D89B2B] shrink-0" />
                <span>10:30 AM – 10:30 PM (Daily)</span>
              </p>
            </div>
          </div>

          {/* Reservation & Discovery (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#D89B2B] font-semibold">
              Hospitality
            </h4>
            <div className="space-y-2.5 text-xs">
              <button
                onClick={onOpenReservation}
                className="w-full py-2 rounded bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Book a Table
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors pt-1"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3 text-[#D89B2B]" />
              </a>

              <p className="text-[11px] text-stone-500 pt-1 leading-snug">
                Avg. ₹250–₹450 for two. Cash, UPI, and major cards accepted.
              </p>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} DESTIN CAFÉ & RESTAURANT. All rights reserved.
          </p>
          <p className="text-stone-400 text-[11px]">
            Plot No-16, Jajang, Kapaleswar, Kendrapara, Odisha - 754250
          </p>
        </div>

      </div>
    </footer>
  );
};
