import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem, MenuCategory, DietaryType, CartItem } from '../types/cafe';
import { Search, ShoppingBag, Plus, Minus, Check, Flame, Award, X } from 'lucide-react';

interface MenuSectionProps {
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onOpenOrderTray: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onAddToCart,
  onUpdateQuantity,
  onOpenOrderTray,
  selectedCategory,
  onSelectCategory,
}) => {
  const [dietaryFilter, setDietaryFilter] = useState<'all' | DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Creations' },
    { id: 'soups', label: 'Artisanal Soups' },
    { id: 'starters', label: 'Starters & Wok' },
    { id: 'mains', label: 'Coastal & Curries' },
    { id: 'rice-noodles', label: 'Rice, Biryani & Noodles' },
    { id: 'cafe-beverages', label: 'Café & Cold Brews' },
  ];

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary match
      const matchesDietary =
        dietaryFilter === 'all' || item.dietary === dietaryFilter;

      // Search match
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
    <section id="menu" className="py-20 bg-[#FAF7F2] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D89B2B]">
            Verified Digital Menu & Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123038] tracking-tight">
            The Complete DESTIN Menu
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            All prices and items are directly verified from the café’s official Kendrapara kitchen records.
            Add items to your order tray to place an order directly via WhatsApp or Phone.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10">
          
          {/* Category Tabs (Interactive Segmented Control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#123038] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-[#123038] hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Sub-Bar: Search & Dietary Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Pomfret, Lemon Coriander Soup, Biryani, Coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs rounded-md bg-white border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#D89B2B] focus:border-[#D89B2B] text-stone-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Filter Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-md self-start sm:self-auto">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Dietary
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'bg-white text-emerald-800 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {/* Standard Indian Veg Symbol */}
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
                {/* Standard Indian Non-Veg Symbol */}
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
          <div className="py-16 text-center bg-white rounded-xl border border-stone-200">
            <p className="text-stone-500 text-sm">No dishes found matching your current filter.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#D89B2B] hover:underline cursor-pointer"
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
                  className="bg-white rounded-xl p-5 border border-stone-200/90 hover:border-[#D89B2B]/60 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-sm"
                >
                  <div className="space-y-2">
                    
                    {/* Header Row: Dietary Icon, Category, Badges & Price */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {/* Indian Veg / Non-Veg Standard Mark */}
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

                    {/* Dish Title */}
                    <div>
                      <h3 className="font-semibold text-stone-900 text-base leading-tight">
                        {item.name}
                      </h3>
                      
                      {/* Quiet highlight tags (No pills) */}
                      {(item.isSignature || item.isPopular || item.portionNote) && (
                        <div className="flex items-center gap-2 text-[11px] font-medium text-[#D89B2B] pt-0.5">
                          {item.isSignature && <span>Signature Specialty</span>}
                          {item.isSignature && item.isPopular && <span aria-hidden="true">·</span>}
                          {item.isPopular && <span>Most Ordered</span>}
                          {item.portionNote && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-stone-500">{item.portionNote}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed pt-1">
                      {item.description}
                    </p>

                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-mono">
                      Freshly prepared to order
                    </span>

                    {/* Add to Cart or Stepper */}
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

        {/* Floating / Sticky Order Tray Notification Bar if items exist */}
        {totalCartCount > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-lg px-4">
            <div className="bg-[#123038] text-white p-3.5 rounded-xl shadow-2xl border border-[#D89B2B] flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom duration-300">
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
    </section>
  );
};
