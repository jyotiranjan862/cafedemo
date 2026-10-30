import React, { useState } from 'react';
import { CartItem } from '../types/cafe';
import { BUSINESS_INFO } from '../data/cafeData';
import { X, Trash2, Plus, Minus, ShoppingBag, Phone, Send, Check } from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'Dine-In' | 'Takeaway'>('Dine-In');
  const [customerName, setCustomerName] = useState('');
  const [cookingNotes, setCookingNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = `*NEW ORDER - DESTIN CAFÉ & RESTAURANT*\n`;
    message += `*Type:* ${orderType}\n`;
    if (customerName.trim()) {
      message += `*Customer:* ${customerName.trim()}\n`;
    }
    message += `--------------------------------\n`;

    cart.forEach((c) => {
      message += `• ${c.quantity}x ${c.item.name} (₹${c.item.price}) = ₹${c.quantity * c.item.price}\n`;
    });

    message += `--------------------------------\n`;
    message += `*Total Amount:* ₹${subtotal}\n`;

    if (cookingNotes.trim()) {
      message += `*Special Instructions:* ${cookingNotes.trim()}\n`;
    }

    message += `\n_Sent via DESTIN Official Website (Kendrapara)_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#1E293B] flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-5 bg-[#123038] text-white flex items-center justify-between border-b border-[#D89B2B]/30">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D89B2B]" />
              <div>
                <h3 className="font-serif text-lg font-semibold">Your Order Tray</h3>
                <span className="text-xs text-stone-300">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-stone-800">Your order tray is empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Browse the menu and add your favorite soups, coastal seafood, biryanis or beverages.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-[#123038] bg-[#D89B2B] hover:bg-[#E5A836] rounded-md transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="bg-stone-200/80 p-1 rounded-lg flex items-center gap-1">
                  <button
                    onClick={() => setOrderType('Dine-In')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      orderType === 'Dine-In'
                        ? 'bg-white text-[#123038] shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Dine-In at DESTIN
                  </button>
                  <button
                    onClick={() => setOrderType('Takeaway')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      orderType === 'Takeaway'
                        ? 'bg-white text-[#123038] shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Takeaway / Parcel
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span>Selected Items</span>
                    <button
                      onClick={onClearCart}
                      className="text-stone-400 hover:text-red-600 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear all</span>
                    </button>
                  </div>

                  {cart.map((c) => (
                    <div
                      key={c.item.id}
                      className="bg-white p-3.5 rounded-lg border border-stone-200 flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          {c.item.dietary === 'veg' ? (
                            <span className="w-2.5 h-2.5 border border-emerald-600 rounded-[2px] flex items-center justify-center p-[1px] shrink-0">
                              <span className="w-1 h-1 rounded-full bg-emerald-600" />
                            </span>
                          ) : (
                            <span className="w-2.5 h-2.5 border border-red-700 rounded-[2px] flex items-center justify-center p-[1px] shrink-0">
                              <span className="w-1 h-1 rounded-full bg-red-700" />
                            </span>
                          )}
                          <h5 className="font-semibold text-xs text-stone-900 truncate">
                            {c.item.name}
                          </h5>
                        </div>
                        <span className="font-mono text-xs text-stone-500">
                          ₹{c.item.price} each
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-stone-300 rounded bg-stone-50 text-xs">
                          <button
                            onClick={() => onUpdateQuantity(c.item.id, -1)}
                            className="p-1 hover:bg-stone-200 text-stone-700"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-mono font-bold text-xs text-[#123038]">
                            {c.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(c.item.id, 1)}
                            className="p-1 hover:bg-stone-200 text-stone-700"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-mono text-xs font-bold text-[#123038] w-14 text-right">
                          ₹{c.item.price * c.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-2 border-t border-stone-200">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Mohapatra"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:border-[#D89B2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Cooking Notes / Spice Level (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Medium spice, crispy pomfret, no onions"
                      value={cookingNotes}
                      onChange={(e) => setCookingNotes(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:border-[#D89B2B]"
                    />
                  </div>
                </div>

                {/* Subtotal Summary Card */}
                <div className="p-4 rounded-lg bg-stone-100 border border-stone-200/80 space-y-2 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Items Subtotal</span>
                    <span className="font-mono">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Taxes & Kitchen Service</span>
                    <span className="text-emerald-700 font-medium">Included at table</span>
                  </div>
                  <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-sm text-[#123038]">
                    <span>Estimated Total</span>
                    <span className="font-mono text-base text-[#D89B2B]">₹{subtotal}</span>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Drawer Actions Footer */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-stone-200 space-y-2.5">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3 rounded-md bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Order via WhatsApp</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="w-full py-2.5 rounded-md bg-[#123038] hover:bg-[#1A4550] text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D89B2B]" />
                <span>Call Kitchen: {BUSINESS_INFO.phones[0].display}</span>
              </a>

              <p className="text-[10px] text-center text-stone-500 pt-1">
                Order will be prepared fresh upon confirmation from DESTIN staff.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
