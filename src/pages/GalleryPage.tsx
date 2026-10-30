import React, { useState } from 'react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/cafeData';
import { GalleryItem } from '../types/cafe';
import { ShieldCheck, ZoomIn, MapPin, Eye } from 'lucide-react';

interface GalleryPageProps {
  onInspectImage: (src: string, title: string, caption: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onInspectImage }) => {
  const [filter, setFilter] = useState<string>('all');

  const galleryList = [
    {
      id: 'gal-ext',
      title: 'Modern Charcoal Facade & Portico',
      category: 'exterior',
      categoryLabel: 'Exterior & Architecture',
      src: BUSINESS_INFO.images.exterior,
      caption:
        'The real front exterior of DESTIN Café & Restaurant along Cuttack-Chandbali Rd, showing 3D signage, traditional white jali trellis screens, potted greenery, and checkered entryway opposite Bharat Petroleum.',
      badge: 'Real Exterior Shot',
    },
    {
      id: 'gal-dining',
      title: 'AC Family Dining Hall',
      category: 'interior',
      categoryLabel: 'Interior & Dining',
      src: BUSINESS_INFO.images.diningHall,
      caption:
        'Full view of the air-conditioned dining interior with polished timber banquet tables, purple-cushioned chairs, decorative wall art, and fluted wooden support columns.',
      badge: 'Dining Hall',
    },
    {
      id: 'gal-reception',
      title: 'Fluted Timber Reception Desk',
      category: 'reception',
      categoryLabel: 'Front Desk & Hearth',
      src: BUSINESS_INFO.images.receptionDesk,
      caption:
        'Evening capture of the front reception counter featuring natural fluted timber slats, glowing amber glass pendant lamp, and backlit DESTIN "Savour your story..." sign.',
      badge: 'Front Desk',
    },
    {
      id: 'gal-menu',
      title: 'Official Printed Dine-In Menu Card',
      category: 'cards',
      categoryLabel: 'Menu & Identity',
      src: BUSINESS_INFO.images.menuCard,
      caption:
        'The authentic printed wooden dine-in menu card of DESTIN containing verified item pricing for Salads, Veg & Non-Veg Soups, and Wok Noodles & Rolls.',
      badge: 'Official Menu Card',
    },
    {
      id: 'gal-visiting',
      title: 'Official Physical Visiting Card Record',
      category: 'cards',
      categoryLabel: 'Menu & Identity',
      src: BUSINESS_INFO.images.visitingCard,
      caption:
        'Official visiting card showing primary phone lines (+91 9124866535, +91 6370566695) and full address at Plot No-16, Jajang, Kapaleswar, Kendrapara.',
      badge: 'Visiting Card',
    },
  ];

  const filteredPhotos = galleryList.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FAF7F2] text-[#1E293B] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D89B2B] font-semibold">
            Authentic Venue Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#123038] tracking-tight">
            Real Photographs of DESTIN
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            In strict compliance with transparency, every photograph displayed on this website represents 
            the actual premises, interior dining hall, reception desk, and official printed menu cards in Kendrapara.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Photos (5)' },
            { id: 'exterior', label: 'Exterior & Architecture' },
            { id: 'interior', label: 'Interior & Dining Hall' },
            { id: 'reception', label: 'Front Desk & Counter' },
            { id: 'cards', label: 'Official Cards & Menu' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#123038] text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-[#123038] border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onInspectImage(photo.src, photo.title, photo.caption)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-[#D89B2B] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#123038]/85 text-[#E5A836] text-[11px] font-semibold font-mono backdrop-blur-xs border border-[#D89B2B]/30">
                    {photo.badge}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-2 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-xs flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#D89B2B]" />
                    <span>Click to Expand</span>
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#D89B2B] block">
                    {photo.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-stone-900 text-lg leading-snug group-hover:text-[#D89B2B] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-400 flex items-center justify-between font-mono">
                  <span>Verified Photo</span>
                  <span className="text-[#D89B2B] font-medium flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>View full size</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
