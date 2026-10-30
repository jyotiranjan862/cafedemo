/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { OrderPage } from './pages/OrderPage';
import { ContactPage } from './pages/ContactPage';

import { PageId, CartItem, MenuItem } from './types/cafe';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderTrayOpen, setIsOrderTrayOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  
  // High-Res Image Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter((c): c is CartItem => c !== null);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleInspectImage = (src: string, title: string, caption: string) => {
    setLightboxData({ src, title, caption });
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E293B] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        activePage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenOrderTray={() => setIsOrderTrayOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Multi-Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenOrderTray={() => setIsOrderTrayOpen(true)}
            onInspectImage={handleInspectImage}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            cart={cart}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
            onOpenOrderTray={() => setIsOrderTrayOpen(true)}
            onInspectImage={handleInspectImage}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onInspectImage={handleInspectImage}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onInspectImage={handleInspectImage} />
        )}

        {currentPage === 'order' && (
          <OrderPage
            cart={cart}
            onAddToCart={handleAddToCart}
            onOpenOrderTray={() => setIsOrderTrayOpen(true)}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Global Slide-out Order Tray Drawer */}
      <OrderDrawer
        isOpen={isOrderTrayOpen}
        onClose={() => setIsOrderTrayOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Global Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Global High-Resolution Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={!!lightboxData}
        onClose={() => setLightboxData(null)}
        imageSrc={lightboxData?.src || ''}
        imageTitle={lightboxData?.title || ''}
        imageCaption={lightboxData?.caption || ''}
      />
    </div>
  );
}
