
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  onLogout: () => void;
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onLogout, isAuthenticated }) => {
  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e7f1f4] dark:border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(View.HOME)}>
          <div className="text-primary size-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight uppercase">HYDRASCAPES</h2>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => onNavigate(View.HOME)} className={`text-sm font-semibold transition-colors ${currentView === View.HOME ? 'text-primary' : 'hover:text-primary'}`}>Home</button>
          <button onClick={() => onNavigate(View.CRUISES)} className={`text-sm font-semibold transition-colors ${currentView === View.CRUISES ? 'text-primary' : 'hover:text-primary'}`}>Cruises</button>
          <button onClick={() => onNavigate(View.TRIP_BUILDER)} className={`text-sm font-semibold transition-colors ${currentView === View.TRIP_BUILDER ? 'text-primary' : 'hover:text-primary'}`}>Trip Builder</button>
          <button onClick={() => onNavigate(View.AMBASSADOR)} className={`text-sm font-semibold transition-colors ${currentView === View.AMBASSADOR ? 'text-primary' : 'hover:text-primary'}`}>Ambassador</button>
        </div>
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <button 
              onClick={() => onNavigate(View.LOGIN)}
              className="text-xs font-bold uppercase p-2 px-4 border border-slate-200 rounded-lg hover:bg-slate-100 transition-all dark:border-white/10 dark:hover:bg-white/5 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
              Admin Portal
            </button>
          ) : (
            <button 
              onClick={() => onNavigate(View.ADMIN_BOOKINGS)}
              className="text-xs font-bold uppercase p-2 px-4 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">dashboard</span>
              Dashboard
            </button>
          )}
          
          <button onClick={() => onNavigate(View.GUEST_PORTAL)} className="bg-primary text-[#0d191c] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Sign In
          </button>
          
          <div className="flex items-center gap-2">
             <div 
              className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20 cursor-pointer"
              onClick={() => isAuthenticated ? onNavigate(View.ADMIN_PACKAGES) : onNavigate(View.GUEST_PORTAL)}
              style={{backgroundImage: 'url("https://picsum.photos/seed/user/100/100")'}}
            ></div>
            {isAuthenticated && (
              <button onClick={onLogout} className="text-slate-400 hover:text-rose-500 transition-colors">
                <span className="material-symbols-outlined text-xl">logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
