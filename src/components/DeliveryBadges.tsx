import React from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { ExternalLink, ShoppingBag, Zap, Clock } from 'lucide-react';

interface DeliveryBadgesProps {
  className?: string;
  variant?: 'banner' | 'compact' | 'cards';
  onOpenOrderTray?: () => void;
}

export const DeliveryBadges: React.FC<DeliveryBadgesProps> = ({
  className = '',
  variant = 'banner',
  onOpenOrderTray,
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Swiggy Button */}
        <a
          href={BUSINESS_INFO.swiggyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FC8019] hover:bg-[#E56F0D] text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm"
          title="Order Destin on Swiggy Kendrapara"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>Swiggy</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>

        {/* Zomato Button */}
        <a
          href={BUSINESS_INFO.zomatoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#E23744] hover:bg-[#CB202D] text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm"
          title="Find Destin on Zomato Kendrapara"
        >
          <span>Zomato</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${className}`}>
        {/* Swiggy Card */}
        <a
          href={BUSINESS_INFO.swiggyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-xl bg-white border border-stone-200 hover:border-[#FC8019] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-[#FC8019]/10 text-[#FC8019] text-xs font-bold font-mono">
              SWIGGY VERIFIED
            </span>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#FC8019] transition-colors" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#FC8019] transition-colors">
              Order on Swiggy
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Fast doorstep food delivery in Kendrapara city. Live order tracking & active promotional coupons.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#FC8019] flex items-center gap-1 pt-2 border-t border-stone-100">
            <span>Order on Swiggy App</span>
            <span aria-hidden="true">→</span>
          </span>
        </a>

        {/* Zomato Card */}
        <a
          href={BUSINESS_INFO.zomatoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-xl bg-white border border-stone-200 hover:border-[#E23744] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-[#E23744]/10 text-[#E23744] text-xs font-bold font-mono">
              ZOMATO PARTNER
            </span>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#E23744] transition-colors" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#E23744] transition-colors">
              Available on Zomato
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Explore local dining reviews, menus, and home delivery across Kendrapara municipality.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#E23744] flex items-center gap-1 pt-2 border-t border-stone-100">
            <span>Find on Zomato</span>
            <span aria-hidden="true">→</span>
          </span>
        </a>

        {/* Direct WhatsApp Ordering (0% Markup) */}
        <div
          onClick={onOpenOrderTray}
          className="group p-5 rounded-xl bg-[#123038] text-white border border-[#D89B2B]/40 hover:border-[#D89B2B] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-[#25D366]/20 text-[#25D366] text-xs font-bold font-mono">
              DIRECT WHATSAPP · 0% MARKUP
            </span>
            <ShoppingBag className="w-4 h-4 text-[#D89B2B]" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E5A836] transition-colors">
              Direct Kitchen Takeaway
            </h4>
            <p className="text-xs text-stone-300 mt-1 leading-relaxed">
              Order directly with the chef at actual dine-in prices. No platform commission. Ready for quick pickup or parcel.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#E5A836] flex items-center gap-1 pt-2 border-t border-stone-800">
            <span>Open Order Tray</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    );
  }

  // Default Banner
  return (
    <div className={`bg-[#173D47] border border-[#D89B2B]/30 rounded-xl p-4 sm:p-5 text-white ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-lg bg-[#D89B2B]/20 border border-[#D89B2B]/40 flex items-center justify-center text-[#E5A836] shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-xs uppercase font-mono font-semibold tracking-wider text-[#E5A836]">
                Online Delivery Available
              </span>
              <span className="text-stone-400 text-xs">·</span>
              <span className="text-xs text-stone-300">Kendrapara City</span>
            </div>
            <p className="text-sm font-medium text-white">
              Order your favorite soups, noodles & rolls on Swiggy and Zomato or order direct!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={BUSINESS_INFO.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded bg-[#FC8019] hover:bg-[#e6710f] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Swiggy</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={BUSINESS_INFO.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded bg-[#E23744] hover:bg-[#c92531] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Zomato</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {onOpenOrderTray && (
            <button
              onClick={onOpenOrderTray}
              className="px-3.5 py-2 rounded bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Direct Tray</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
