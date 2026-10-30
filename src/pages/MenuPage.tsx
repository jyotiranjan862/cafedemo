import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/cafeData';
import { MenuItem, MenuCategory, DietaryType, CartItem } from '../types/cafe';
import { DeliveryBadges } from '../components/DeliveryBadges';
import { Search, Plus, Minus, ShoppingBag, X, ExternalLink, Image as ImageIcon, Flame } from 'lucide-react';

interface MenuPageProps {
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onOpenOrderTray: () => void;
  onInspectImage: (src: string, title: string, caption: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  cart,
  onAddToCart,
  onUpdateQuantity,
  onOpenOrderTray,
  onInspectImage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'soups', label: 'Soups (Veg & Non-Veg)' },
    { id: 'rice-noodles', label: 'Wok Noodles & Biryani' },
    { id: 'starters', label: 'Kathi Rolls & Starters' },
    { id: 'mains', label: 'Coastal Catch & Salads' },
    { id: 'cafe-beverages', label: 'Café, Burgers & Drinks' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesDietary =
        dietaryFilter === 'all' || item.dietary === dietaryFilter;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.categoryName.toLowerCase().includes(query);

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  const getItemQuantity = (itemId: string): number => {
    const found = cart.find((c) => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalCartValue = cart.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FAF7F2] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="bg-[#123038] text-white rounded-2xl p-6 sm:p-10 border border-[#D89B2B]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E5A836] font-semibold">
              Verified Dine-In & Delivery Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              DESTIN Menu & Pricing
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Every dish below is transcribed from our authentic wooden dine-in menu card and active coastal kitchen specialties. 
              Order for table service, parcel pickup via WhatsApp, or home delivery on Swiggy & Zomato.
            </p>
          </div>

          {/* Quick Action: Inspect Physical Menu Card */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() =>
                onInspectImage(
                  BUSINESS_INFO.images.menuCard,
                  'Official Printed Dine-In Menu Card',
                  'High-resolution capture of the original wooden printed dine-in menu card at DESTIN Café & Restaurant, Kendrapara.'
                )
              }
              className="px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-[#D89B2B]/40 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ImageIcon className="w-4 h-4 text-[#E5A836]" />
              <span>Inspect Wooden Menu Card</span>
            </button>

            <DeliveryBadges variant="compact" />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#123038] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-[#123038] hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-bar: Search & Dietary Switch */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-1">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search soups, hakka noodles, rolls, tawa pomfret, coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs rounded-md bg-white border border-stone-300 focus:outline-none focus:border-[#D89B2B] text-stone-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Pure Veg / Non-Veg filter */}
            <div className="flex items-center gap-1 p-1 bg-stone-200 rounded-md self-start sm:self-auto">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Diets
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'bg-white text-emerald-800 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span className="w-3 h-3 border border-emerald-600 rounded-[2px] flex items-center justify-center p-[1px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                </span>
                <span>Pure Veg</span>
              </button>

              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-white text-red-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span className="w-3 h-3 border border-red-700 rounded-[2px] flex items-center justify-center p-[1px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                </span>
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-xl border border-stone-200 space-y-3">
            <p className="text-stone-500 text-sm">No dishes found matching your current filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#D89B2B] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 border border-stone-200 hover:border-[#D89B2B]/60 transition-all flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-xs"
                >
                  <div className="space-y-2">
                    {/* Header Row: Dietary Icon, Category, Price */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {item.dietary === 'veg' ? (
                          <span
                            className="w-3.5 h-3.5 border border-emerald-600 rounded-[2px] flex items-center justify-center p-[1.5px] shrink-0"
                            title="Pure Vegetarian"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          </span>
                        ) : (
                          <span
                            className="w-3.5 h-3.5 border border-red-700 rounded-[2px] flex items-center justify-center p-[1.5px] shrink-0"
                            title="Non-Vegetarian"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                          </span>
                        )}

                        <span className="text-[11px] text-stone-500 font-mono">
                          {item.categoryName}
                        </span>
                      </div>

                      <span className="font-mono text-base font-bold text-[#123038]">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Item Name */}
                    <div>
                      <h3 className="font-semibold text-stone-900 text-base leading-tight">
                        {item.name}
                      </h3>
                      
                      {(item.isSignature || item.isPopular || item.portionNote) && (
                        <div className="flex items-center gap-2 text-[11px] font-medium text-[#D89B2B] pt-0.5">
                          {item.isSignature && <span>Signature Specialty</span>}
                          {item.isSignature && item.isPopular && <span aria-hidden="true">·</span>}
                          {item.isPopular && <span>Popular</span>}
                          {item.portionNote && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-stone-500">{item.portionNote}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed pt-0.5">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Row: Action button */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-mono">
                      Freshly made to order
                    </span>

                    {qty === 0 ? (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="px-3 py-1.5 rounded bg-[#123038] hover:bg-[#1C4854] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5 text-[#D89B2B]" />
                        <span>Add</span>
                      </button>
                    ) : (
                      <div className="flex items-center border border-[#123038] rounded bg-[#123038] text-white overflow-hidden text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-1 hover:bg-[#1C4854] text-stone-200 cursor-pointer"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-mono font-bold text-xs text-[#E5A836]">
                          {qty}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-1 hover:bg-[#1C4854] text-stone-200 cursor-pointer"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating Order Tray Bar when items exist */}
        {totalCartCount > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-lg px-4">
            <div className="bg-[#123038] text-white p-3.5 rounded-xl shadow-2xl border border-[#D89B2B] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D89B2B] text-[#123038] flex items-center justify-center font-bold text-sm">
                  {totalCartCount}
                </div>
                <div>
                  <span className="block text-xs font-medium text-stone-300">
                    {totalCartCount} {totalCartCount === 1 ? 'dish' : 'dishes'} in Order Tray
                  </span>
                  <span className="block font-mono text-sm font-bold text-[#E5A836]">
                    ₹{totalCartValue} Subtotal
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenOrderTray}
                className="px-4 py-2 rounded-md bg-[#D89B2B] hover:bg-[#E5A836] text-[#123038] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Tray & Order</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
