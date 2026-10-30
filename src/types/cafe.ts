export type DietaryType = 'veg' | 'non-veg';

export type MenuCategory = 
  | 'all'
  | 'soups'
  | 'starters'
  | 'mains'
  | 'rice-noodles'
  | 'cafe-beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryName: string;
  price: number;
  description: string;
  dietary: DietaryType;
  isPopular?: boolean;
  isSignature?: boolean;
  image?: string;
  portionNote?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  source: 'Google' | 'Swiggy / Local Diners';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Ambience' | 'Culinary' | 'Card & Identity' | 'Beverages';
  src: string;
  caption: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'Indoor Dining' | 'Café Lounge' | 'Family Table';
  specialNotes?: string;
}

export type PageId = 'home' | 'menu' | 'about' | 'gallery' | 'order' | 'contact';
