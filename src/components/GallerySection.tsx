import React, { useState } from 'react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/cafeData';
import { GalleryItem } from '../types/cafe';
import { X, ZoomIn, ShieldCheck, MapPin, Phone } from 'lucide-react';

interface GallerySectionProps {
  onInspectCard: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onInspectCard }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D89B2B]">
            Authentic Visual Records
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123038] tracking-tight">
            Brand Identity & Atmosphere
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            In compliance with truth in dining, we feature real verified business assets and genuine identity records 
            rather than generic stock images. Click any card to inspect in full detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured Large Card: Physical Visiting Card */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[0])}
            className="md:col-span-2 group relative bg-[#123038] rounded-xl overflow-hidden border border-[#D89B2B]/40 cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden bg-stone-900">
              <img
                src={BUSINESS_INFO.visitingCardImage}
                alt="Official DESTIN Visiting Card showing logo and address"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123038] via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A1C22]/85 text-[#E5A836] text-xs font-semibold backdrop-blur-xs border border-[#D89B2B]/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Identity Record</span>
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="p-6 bg-[#123038] text-white space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>Physical Visiting Card Record</span>
                <span>Plot No-16, Jajang, Kendrapara</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E5A836] transition-colors">
                DESTIN Café & Restaurant — "Savour Your Story"
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Official card featuring the signature stylized leaf logo, teal and ochre waves, direct phone lines, and physical address opposite Bharat Petroleum on Cuttack-Chandbali Road.
              </p>
            </div>
          </div>

          {/* Card 2: Culinary Anchor */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[1])}
            className="group relative bg-[#123038] rounded-xl overflow-hidden border border-stone-700 cursor-pointer shadow-sm flex flex-col justify-between"
          >
            <div className="p-6 flex-1 flex flex-col justify-center space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#173D47] text-[#D89B2B] flex items-center justify-center mx-auto border border-[#D89B2B]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#E5A836]">Specialty Kitchen</span>
                <h4 className="text-lg font-serif font-bold text-white">Whole Tawa Pomfret</h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Prepared on a smoking cast-iron griddle with authentic coastal Odia spice marinades. A verified menu specialty priced at ₹1,080.
              </p>
            </div>
            <div className="p-4 bg-[#0E272D] border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-between font-mono">
              <span>Category: Coastal Catch</span>
              <span className="text-[#E5A836]">View Details →</span>
            </div>
          </div>

          {/* Card 3: Wok & Simmered Broths */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[2])}
            className="group relative bg-[#123038] rounded-xl overflow-hidden border border-stone-700 cursor-pointer shadow-sm flex flex-col justify-between"
          >
            <div className="p-6 flex-1 flex flex-col justify-center space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#173D47] text-[#D89B2B] flex items-center justify-center mx-auto border border-[#D89B2B]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#E5A836]">Soup Specialty</span>
                <h4 className="text-lg font-serif font-bold text-white">Lemon Coriander & Wok Soups</h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Freshly simmered herbs, crushed ginger, lime juice, and crispy noodles. Loved by Kendrapara locals and highway commuters.
              </p>
            </div>
            <div className="p-4 bg-[#0E272D] border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-between font-mono">
              <span>Category: Artisanal Soups</span>
              <span className="text-[#E5A836]">View Details →</span>
            </div>
          </div>

          {/* Card 4: Detailed Location & Transit Landmark */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[3])}
            className="md:col-span-2 group relative bg-[#123038] rounded-xl overflow-hidden border border-stone-700 cursor-pointer shadow-sm flex flex-col justify-between"
          >
            <div className="p-6 bg-[#173D47]/80 flex-1 space-y-3">
              <div className="flex items-center gap-2 text-[#E5A836] text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Highway Landmark & Location Proof</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-white">
                Opposite Bharat Petroleum, Kapaleswar
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Positioned strategically along Cuttack-Chandbali Road (Plot No-16, Jajang, Kapaleswar, Kendrapara, Odisha - 754250). Offering ample parking and swift access for both private cars and highway travellers.
              </p>
            </div>
            <div className="p-4 bg-[#0E272D] border-t border-stone-800 text-xs text-stone-300 flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[11px]">Primary Line: +91 91248 66535</span>
              <span className="text-[#E5A836] font-medium">Click to inspect →</span>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#123038] text-white max-w-2xl w-full rounded-2xl overflow-hidden border border-[#D89B2B]/40 shadow-2xl space-y-4"
          >
            <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#E5A836] font-mono">
                <span>{activeItem.category}</span>
                <span>Verified Source</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                {activeItem.title}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
