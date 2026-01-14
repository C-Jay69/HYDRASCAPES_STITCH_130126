
import { TravelPackage, Cruise, BlogPost } from './types';

export const PACKAGES: TravelPackage[] = [
  {
    id: '1',
    name: 'Azure Escape: Mauritius',
    destination: 'Mauritius',
    price: 1299,
    duration: '7 Days / 6 Nights',
    rating: 4.9,
    reviews: '1.2k',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkoy0cTBbq2vm29-3YSq3GLDiPnmtIpI69AwDISSY4VymCa5OKV3I13U8EzZKZ9sTpNBxiBl0SiWngcz_P5WOUxlogidB5LFvbsJeye45tuuFHWMW44zplA35oW69WYd0ntkZvQozAarpUIB-J6zJUJLYWb76RzquBJdOHqIFXpPWMMXWxdsrcEbGAYg_9qk1bHj_dSV1EGpX6rwPRjSi5sl0HBw_XwNnylb1GZt5HYRxhEMidRTWvgfAIFxly1gpbExsZ9xqC-Rg',
    vibe: ['Luxury', 'Romance'],
    description: 'Experience ultimate luxury with private lagoon access and all-inclusive gourmet dining.'
  },
  {
    id: '2',
    name: 'Hidden Grotto Expedition',
    destination: 'Thailand',
    price: 850,
    duration: '5 Days / 4 Nights',
    rating: 4.8,
    reviews: '850',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuDDKTtxPs4rBxNpcu9EE0ZGSKiFIf1ajpXcHhhgCTn8xKFg503VS7Mjextu7IM9o2agOoRHpyAYckps7Gj2bTV14A8VStBnxdIyDDtsUY4BozcCx00Y7i1YP2ehmLAYUAX_OOZB-r6IueaENcnRKXsz4JLgCqVVFMm2JyMmJNszD5MN792nBpcUGvYSKxzsLFFKbyF7zhAs6ameMyQvo4ecZHmmXPptI_piCS1HW2ZdqZ1LHbv9ShHQo3lPWCKtVSAn0Z14sPWUM',
    vibe: ['Adventure'],
    description: 'Navigate secret caves and bioluminescent bays with our expert local guides.'
  },
  {
    id: '3',
    name: 'Ultimate Seychelles Safari',
    destination: 'Seychelles',
    price: 2450,
    duration: '10 Days / 9 Nights',
    rating: 5.0,
    reviews: '2.4k',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQQxioQuZqKlixWbEOH_t65OeA_8lMUa_HDfmNpwJ_75R9qf8L68bAE16326qPGSm_qi_lU-cS3t0vERZo6P7GA14_XVIYHTpWFNScyVeXKWmC3px3EEJ_TuL4xZ8Do5x2sDOLzwo9QEYVuNi62ylA1DEsor1AueuvnQfORFvqYcveIjBayFKRQpJ_vffCoq1v00euYqo48zYvdDpXOYeYhxMMKvsEAkHV2NA0CR8Ys8VK7GmrLFw36r5xzZ6WaKgSSn-HeiQrg0E',
    vibe: ['Luxury', 'Adventure'],
    description: 'An island-hopping adventure featuring giant tortoises and granite boulder beaches.'
  }
];

export const CRUISES: Cruise[] = [
  {
    id: 'c1',
    name: 'Western Caribbean Adventure',
    line: 'Royal Caribbean',
    ship: 'Icon of the Seas',
    duration: '7 Nights',
    price: 1299,
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmkLvEFin9mhDAJbqZz9_I9qmIfPP5JNnDUtAxwLWbkA2obhlp4kiQHF-i__MRtMYRXEHJMTVbhFqChLruJjCSUxquYQAaPsanGgMSBlhunz8unpRZEfEY4tNnFErhO20CCzJPNTUdzKQXL9pjPs4M1hUpgr48save9NS6ATD97RVDsekJIY4kuFc6ieCUSyZbUoWgH83wHRq5T4LLWOz1yhVem3ua28pCU9pgT-w4fnE7ZG8vFblPvSuX9IOlkYihn5GInq7S1js',
    type: 'Ocean',
    tags: ['Best Seller', 'Family Favorite']
  },
  {
    id: 'c2',
    name: 'Bahamian Castaway Cay',
    line: 'Disney Cruise Line',
    ship: 'Disney Wish',
    duration: '4 Nights',
    price: 1840,
    rating: 5.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb7F8nDO6S1ctXfujB3MRzVuVSpAMqzC7DrDptAmiiNdPXt67i_ilKL2JmpRGPrwCLXDyyJONLOG9ZlNihw-8UGQMBtxh4CpNyY7Qxj5KWvNvYFXle56mlfFjb6m6cAW5J8bIjr--fHsfwooKAxGj_Zim_Ks2hK7Chbkmcd4DPATlusboAEhrOgV6YR74EekMpT9lwdr8TOOHCfP3YxK7Vw2UONcmP-IjN6iB0f_XGxNP03Mo4dg6bLEk3HpnfaVS_-p-8cHfFafw',
    type: 'Ocean',
    tags: ['Magical Getaway']
  },
  {
    id: 'c3',
    name: 'Seine River Romance',
    line: 'AmaWaterways',
    ship: 'AmaLyra',
    duration: '7 Nights',
    price: 3450,
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSe2LjFRAJpbYo_9IRK1nA2DOHoOXJ2-RUbMO-AlkVrNcPi13Sm7bvckjQlrRFviXxgOfH--QZ-p-ycXQMg8jgNTlyOslat_ggryodrgp24ORPBMKDC9l3StnTwKvuEKOkCAgnHfK8oPLUy5qsPfcXzSjc1U1UkHcJF7kncHs_dkswgLq-9ojDP5TB123HhFX4XBok5DCVq_ydB0BJsvK5Fo_2XhzIFlupoM4yBS1CP7lA2Dg2mqNTjCtmz5MQv5lc-1N6wEDZUvQ',
    type: 'River',
    tags: ['Seasonal Special']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '10 Must-Visit Hidden Lagoons in 2024',
    category: 'Guides',
    excerpt: 'Escape the crowds with these untouched gems...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnzc0X-Ocq9EMFDS3YUDIICXnIU4Er5H4-8fi8oud09O2UVWa_w328M-rtLoL9lr4yce82ci2FoqZIN-BfIplYC0BjlGYdRWVFK-oMPW2OIeESn-9fwv8JMEPOuQdlTWA8zvHZUB2j4BgKKPCrRY_ynt7b1s-o6398eatIXnVE-HFVRPZMRZ52feDAByuHusjB1cv2Sq3wTtfsA7lU4cWB1SpPRIfDsouo4WTFnAw62AZ9_P2zU_rkP2DaXMtQ5BguEeKKaSIIne0',
    readTime: '8 min read'
  },
  {
    id: 'b2',
    title: 'Packing Light for the Tropical Heat',
    category: 'Tips',
    excerpt: 'The ultimate checklist for your next island getaway...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw2pxJJH16q3-WvgQuSmg68iti2E_sYjcMVQuWpN3X2L8A95w_DKBFr4U1SK4CrzzGD7pP6-Nw4VubmZ2TOIJ_sEj0J8WkiNLgSNayaxQJeONur-S24yKkUQwm__he-zAsSMwWvw2bW6h1JjlV9NqKrYVpcBMuEFhtkumSaD2Lf_PEjDbnHJEHpCRNfWQb_IJ9OgJCsfobkXQBda5Qnk0ApXqjW9bc89_xOHfr4ptYRXmZW3fu0iuNRh8kYrcXEubrBNBek0w_880',
    readTime: '5 min read'
  }
];
