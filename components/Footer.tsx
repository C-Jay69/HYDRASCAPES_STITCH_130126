
import React from 'react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-[#e7f1f4] dark:border-white/10 pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-primary size-6">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
              </svg>
            </div>
            <h2 className="text-lg font-extrabold tracking-tight uppercase">HYDRASCAPES</h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">Your premier gateway to the world's most breathtaking tropical destinations. We curate experiences that last a lifetime.</p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => onNavigate(View.HOME)} className="hover:text-primary">About Us</button></li>
            <li><button onClick={() => onNavigate(View.AMBASSADOR)} className="hover:text-primary">Ambassadors</button></li>
            <li><button onClick={() => onNavigate(View.REFERRAL)} className="hover:text-primary">Partner Program</button></li>
            <li><button className="hover:text-primary">Newsroom</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button className="hover:text-primary">Help Center</button></li>
            <li><button className="hover:text-primary">Travel Advisories</button></li>
            <li><button className="hover:text-primary">Safety Protocols</button></li>
            <li><button className="hover:text-primary">Terms of Service</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Get the latest tropical deals and guides.</p>
          <div className="flex flex-col gap-2">
            <input className="bg-gray-100 dark:bg-white/5 border-none rounded-full px-4 py-2 text-sm focus:ring-primary" placeholder="Your email address" type="email"/>
            <button className="bg-primary text-[#0d191c] px-4 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-[#e7f1f4] dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <p>© 2024 HYDRASCAPES Travel Agency. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
