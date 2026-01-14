
export enum View {
  HOME = 'home',
  PACKAGES = 'packages',
  PACKAGE_DETAIL = 'package_detail',
  CRUISES = 'cruises',
  CRUISE_DETAIL = 'cruise_detail',
  RIVER_CRUISES = 'river_cruises',
  TRIP_BUILDER = 'trip_builder',
  BLOG = 'blog',
  AMBASSADOR = 'ambassador',
  REFERRAL = 'referral',
  GUEST_PORTAL = 'guest_portal',
  LOGIN = 'login',
  ADMIN_PACKAGES = 'admin_packages',
  ADMIN_BOOKINGS = 'admin_bookings',
  ADMIN_SHOREX = 'admin_shorex',
  ADMIN_AMBASSADOR = 'admin_ambassador',
  ADMIN_SEO = 'admin_seo'
}

export interface TravelPackage {
  id: string;
  name: string;
  destination: string;
  price: number;
  duration: string;
  rating: number;
  reviews: string;
  image: string;
  vibe: string[];
  description: string;
}

export interface Cruise {
  id: string;
  name: string;
  line: string;
  ship: string;
  duration: string;
  price: number;
  rating: number;
  image: string;
  type: 'Ocean' | 'River';
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
}
