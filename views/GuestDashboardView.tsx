
import React from 'react';
import { View } from '../types';

const GuestDashboardView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-3 p-4">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-black leading-tight tracking-tight">Welcome back, Sarah</p>
            <p className="text-[#498e9c] text-lg font-medium">Your Maldives Escape is 14 days away. Are you ready?</p>
          </div>
          <button className="flex items-center gap-2 bg-white dark:bg-white/10 px-6 py-3 rounded-full border border-[#cee4e8] dark:border-white/20 text-sm font-bold hover:bg-[#f8fbfc] transition-colors">
            <span className="material-symbols-outlined text-primary">support_agent</span>
            Contact Your Agent
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px] relative group" 
                 style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://picsum.photos/seed/maldives/1200/600")'}}>
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-bold uppercase">
                Confirmed • MV-88291
              </div>
              <div className="flex flex-col p-8 gap-4">
                <h1 className="text-white text-4xl font-extrabold">Your Maldives Escape Awaits</h1>
                <div className="flex gap-4 py-4 max-w-md">
                  {[{val: 14, unit: 'Days'}, {val: 8, unit: 'Hours'}, {val: 45, unit: 'Mins'}, {val: 22, unit: 'Secs'}].map(t => (
                    <div key={t.unit} className="flex grow flex-col items-center gap-2">
                      <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white/20 backdrop-blur-lg border border-white/30">
                        <p className="text-white text-2xl font-black">{t.val}</p>
                      </div>
                      <p className="text-white text-xs font-bold uppercase">{t.unit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 flex flex-col gap-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">rocket_launch</span>
                Exclusive Upgrades
              </h3>
              <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                <p className="font-bold text-sm">Overwater Sunset Villa</p>
                <p className="text-xs text-slate-500">Upgrade from Beachfront for $249/night</p>
                <button className="w-full bg-primary text-white py-2 rounded-full text-xs font-bold">Claim Offer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestDashboardView;
