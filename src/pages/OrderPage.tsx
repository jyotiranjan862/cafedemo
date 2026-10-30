import React from 'react';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/cafeData';
import { MenuItem, CartItem } from '../types/cafe';
import { DeliveryBadges } from '../components/DeliveryBadges';
import { ExternalLink, ShoppingBag, Phone, Clock, ShieldCheck, Plus, Check, Send } from 'lucide-react';

interface OrderPageProps {
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onOpenOrderTray: () => void;
  onOpenReservation: () => void;
}

export const OrderPage: React.FC<OrderPageProps> = ({
  cart,
  onAddToCart,
  onOpenOrderTray,
  onOpenReservation,
}) => {
  const topDeliveryFavorites = MENU_ITEMS.filter((item) => item.isPopular || item.isSignature).slice(0, 8);

  const getItemQty = (itemId: string): number => {
    const found = cart.find((c) => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FAF7F2] text-[#1E293B] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D89B2B] font-semibold">
            Delivery & Takeaway Hub
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#123038] tracking-tight">
            Order Online from DESTIN
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Choose your preferred delivery method: instant doorstep delivery on <strong className="text-stone-900">Swiggy</strong> and <strong className="text-stone-900">Zomato</strong>, 
            or direct kitchen ordering with <strong className="text-stone-900">0% markup via WhatsApp</strong>.
          </p>
        </div>

        {/* 3 Main Ordering Channels (Cards) */}
        <DeliveryBadges variant="cards" onOpenOrderTray={onOpenOrderTray} />

        {/* Quick Direct Order Tray Teaser */}
        <div className="bg-[#123038] text-white rounded-2xl p-6 sm:p-8 border border-[#D89B2B]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase text-[#E5A836] font-semibold">
              Fastest Kitchen Direct Order
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Direct Kitchen Parcel / Takeaway Tray
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Add items directly to your tray below and click "Send Order via WhatsApp". 
              Our chef confirms preparation time instantly and has your meal packed hot for pickup.
            </p>
          </div>

          <button
            onClick={onOpenOrderTray}
            className="px-6 py-3.5 rounded-lg bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Open Order Tray ({totalCartCount} items)</span>
          </button>
        </div>

        {/* Most Ordered Delivery Favorites */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#D89B2B] font-semibold">
                Customer Favorites
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#123038]">
                Popular Items for Delivery & Takeaway
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              Prices match the official printed menu card
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topDeliveryFavorites.map((item) => {
              const qty = getItemQty(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 border border-stone-200 hover:border-[#D89B2B] transition-all flex flex-col justify-between space-y-4 shadow-2xs"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      {item.dietary === 'veg' ? (
                        <span className="w-3.5 h-3.5 border border-emerald-600 rounded-[2px] flex items-center justify-center p-[1.5px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        </span>
                      ) : (
                        <span className="w-3.5 h-3.5 border border-red-700 rounded-[2px] flex items-center justify-center p-[1.5px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        </span>
                      )}
                      <span className="font-mono font-bold text-sm text-[#123038]">
                        ₹{item.price}
                      </span>
                    </div>

                    <h4 className="font-semibold text-stone-900 text-sm leading-snug">
                      {item.name}
                    </h4>

                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-mono">
                      {item.categoryName}
                    </span>

                    <button
                      onClick={() => onAddToCart(item)}
                      className="px-3 py-1.5 rounded bg-[#123038] hover:bg-[#1C4854] text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3 text-[#D89B2B]" />
                      <span>{qty > 0 ? `Added (${qty})` : 'Add'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phone Ordering Card */}
        <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif font-bold text-stone-900 text-xl">
              Prefer to order over phone call?
            </h3>
            <p className="text-xs text-stone-600">
              Speak directly with our front desk manager at Kapaleswar for large party orders or road trip takeaway parcels.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {BUSINESS_INFO.phones.map((phone) => (
              <a
                key={phone.raw}
                href={`tel:${phone.raw}`}
                className="px-4 py-2.5 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 text-xs font-bold font-mono transition-colors flex items-center gap-2 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#D89B2B]" />
                <span>{phone.display}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
