import React from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { X, ShieldCheck, MapPin, Phone, Copy, ExternalLink } from 'lucide-react';

interface CardLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CardLightboxModal: React.FC<CardLightboxModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-3xl rounded-2xl bg-[#0F2932] text-white shadow-2xl overflow-hidden border border-[#D89B2B]/40 space-y-4">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#E5A836]">
              <ShieldCheck className="w-5 h-5" />
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg">
                  Original Visiting Card Record
                </h3>
                <span className="text-[11px] text-stone-400 font-mono">
                  Primary Source of Truth · Kendrapara
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* High-Res Photo of Card */}
          <div className="px-4 sm:px-6">
            <div className="rounded-xl overflow-hidden bg-black/50 border border-stone-800 shadow-inner flex items-center justify-center p-2">
              <img
                src={BUSINESS_INFO.visitingCardImage}
                alt="Full resolution official business card for DESTIN Café & Restaurant Kendrapara"
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Extracted Verified Information Grid */}
          <div className="p-5 sm:p-6 bg-[#0B1E24] border-t border-stone-800 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-stone-400 uppercase font-mono text-[10px]">
                  Business Name & Trademark
                </span>
                <p className="font-semibold text-white text-sm">
                  DEST iN CAFÉ & RESTAURANT
                </p>
                <p className="text-[#E5A836] font-mono text-[11px]">
                  Tagline: "SAVOUR YOUR STORY"
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-stone-400 uppercase font-mono text-[10px]">
                  Registered Contact Numbers
                </span>
                <p className="font-mono text-stone-200">
                  +91 91248 66535 · +91 63705 66695
                </p>
                <p className="text-stone-400 text-[11px]">
                  Verified for direct phone orders & table reservations
                </p>
              </div>

              <div className="sm:col-span-2 space-y-1 pt-2 border-t border-stone-800">
                <span className="text-stone-400 uppercase font-mono text-[10px]">
                  Physical Location
                </span>
                <p className="text-stone-200 leading-relaxed font-sans">
                  Plot No-16, Jajang, (Opp. Bharat Petroleum), Kapaleswar, Cuttack Chandbali Rd, Kendrapara, Odisha - 754250
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-stone-400">
              <span className="text-[11px]">
                Authentic asset provided directly by establishment.
              </span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5A836] hover:underline font-medium flex items-center gap-1"
              >
                <span>Verify on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
