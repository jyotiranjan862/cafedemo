import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/cafeData';
import { PageId } from '../types/cafe';
import { Phone, ShoppingBag, Menu as MenuIcon, X, CalendarCheck, ExternalLink, MapPin, Star } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenReservation: () => void;
  onOpenOrderTray: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenReservation,
  onOpenOrderTray,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live opening status (10:30 AM to 10:30 PM)
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeDec = currentHour + currentMinutes / 60;
  const isOpen = currentTimeDec >= 10.5 && currentTimeDec <= 22.5;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Dine-In Menu' },
    { id: 'about', label: 'About & Space' },
    { id: 'gallery', label: 'Real Photos' },
    { id: 'order', label: 'Order Online' },
    { id: 'contact', label: 'Directions & Hours' },
  ];

  const handlePageSelect = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 text-white shadow-md">
        
        {/* Top Announcement / Status Strip (Above Main Navbar) */}
        <div className="bg-[#09191E] border-b border-[#D89B2B]/25 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            
            {/* Left: Live Status & Exact Landmark Location */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap min-w-0">
              <span className="inline-flex items-center gap-1.5 font-medium text-stone-100 shrink-0">
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span>{isOpen ? 'Open Now · Till 10:30 PM' : 'Opens Daily at 10:30 AM'}</span>
              </span>

              <span className="text-stone-500 font-bold hidden xs:inline">·</span>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-stone-300 hover:text-[#E5A836] transition-colors truncate"
                title="View Opp. Bharat Petroleum location on Google Maps"
              >
                <MapPin className="w-3 h-3 text-[#D89B2B] shrink-0" />
                <span className="truncate">Opp. Bharat Petroleum, Kapaleswar, Kendrapara</span>
              </a>
            </div>

            {/* Right: Phone & Rating */}
            <div className="hidden md:flex items-center gap-3.5 shrink-0 font-mono text-[11px]">
              <div className="flex items-center gap-1 text-[#E5A836]">
                <Star className="w-3 h-3 fill-current" />
                <span className="font-bold text-white">4.4</span>
                <span className="text-stone-400 text-[10px]">/ 5.0 Rating</span>
              </div>

              <span className="text-stone-700">|</span>

              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="hover:text-[#E5A836] transition-colors flex items-center gap-1 text-stone-200"
              >
                <Phone className="w-3 h-3 text-[#D89B2B]" />
                <span>{BUSINESS_INFO.phones[0].display}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Main Navbar Bar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#123038]/95 backdrop-blur-md py-2.5 border-b border-[#D89B2B]/20'
              : 'bg-[#123038] py-3.5 border-b border-stone-800/80'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              
              {/* Zone 1: Brand Wordmark */}
              <button
                onClick={() => handlePageSelect('home')}
                className="flex items-center text-left group transition-transform hover:scale-[1.01] cursor-pointer"
                aria-label="DESTIN Café and Restaurant Home"
              >
                <BrandLogo size="sm" showTagline={false} theme="dark" />
              </button>

              {/* Zone 2: Multi-Page Navigation Links (Desktop) */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold tracking-wide text-stone-300">
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handlePageSelect(item.id)}
                      className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                        isActive
                          ? 'text-[#E5A836] bg-white/10 font-bold'
                          : 'text-stone-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Zone 3: Actions (Swiggy/Zomato, Order Tray, Table Booking) */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                
                {/* Quick Swiggy Pill (Compact) */}
                <a
                  href={BUSINESS_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#FC8019] hover:bg-[#E56F0D] text-white text-[11px] font-bold transition-colors"
                  title="Order on Swiggy Kendrapara"
                >
                  <span>Swiggy</span>
                </a>

                {/* Order Cart Drawer Button */}
                <button
                  onClick={onOpenOrderTray}
                  className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-[#D89B2B]/40 hover:border-[#D89B2B] bg-[#173D47] text-[#FAF7F2] transition-colors cursor-pointer"
                  title="View your food order tray"
                  aria-label={`Order Tray with ${cartCount} items`}
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#D89B2B]" />
                  <span className="hidden sm:inline">Tray</span>
                  {cartCount > 0 && (
                    <span className="flex items-center justify-center w-4 h-4 text-[10px] font-bold text-[#123038] bg-[#D89B2B] rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Reserve Table Button (Primary Action) */}
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#123038] bg-[#D89B2B] hover:bg-[#E5A836] active:scale-[0.98] rounded-md transition-all cursor-pointer shadow-sm"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Book Table</span>
                  <span className="sm:hidden">Book</span>
                </button>

                {/* Mobile menu trigger */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-1.5 rounded-md text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>
        </div>

      </header>

      {/* Mobile Multi-Page Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#0A1C22]/98 backdrop-blur-lg pt-28 pb-8 px-6 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-stone-800">
              <BrandLogo size="md" showTagline={true} theme="dark" />
            </div>

            {/* Quick Delivery Badges on Mobile */}
            <div className="flex items-center gap-2 pt-1 pb-2">
              <a
                href={BUSINESS_INFO.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center rounded bg-[#FC8019] text-white text-xs font-bold flex items-center justify-center gap-1"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center rounded bg-[#E23744] text-white text-xs font-bold flex items-center justify-center gap-1"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageSelect(item.id)}
                    className={`text-left text-base font-semibold py-2.5 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#173D47] text-[#E5A836] border border-[#D89B2B]/40'
                        : 'text-stone-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-stone-500 font-mono">→</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-5 border-t border-stone-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-[#123038] bg-[#D89B2B] rounded-md transition-colors"
            >
              Book a Table at DESTIN
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="w-full py-2.5 text-center text-xs font-medium text-stone-300 bg-white/5 border border-stone-700/60 rounded-md flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D89B2B]" />
              <span>Call Kitchen: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
