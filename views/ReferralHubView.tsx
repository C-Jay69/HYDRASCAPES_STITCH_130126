
import React from 'react';
import { View } from '../types';

const ReferralHubView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="bg-cover bg-center rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden mb-12"
             style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://picsum.photos/seed/ref/1200/600")'}}>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Travel is Better with Friends</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Give $100, Get $100. Share the Hydrascapes experience and save on your next luxury getaway.</p>
          <button className="bg-primary text-white h-14 px-10 rounded-full font-bold text-lg shadow-lg">Start Sharing</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Quick Share</h2>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-slate-500 uppercase mb-2 block">Your Referral Link</label>
                <div className="flex items-stretch gap-0 rounded-xl overflow-hidden border-2 border-primary/20">
                  <input className="flex-1 bg-slate-50 p-4 font-bold text-primary focus:ring-0 border-none" readOnly value="hydrascapes.com/ref/EXPLORE2024" />
                  <button className="bg-primary text-white px-6"><span className="material-symbols-outlined">content_copy</span></button>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                {['chat', 'share', 'groups', 'public'].map(icon => (
                  <button key={icon} className="size-14 rounded-full bg-slate-100 dark:bg-slate-800 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 size-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div>
              <h2 className="text-2xl font-bold mb-6">My Referral Stats</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                  <p className="text-4xl font-black text-primary mb-2">12</p>
                  <p className="text-slate-400 text-sm font-bold">Friends Joined</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                  <p className="text-4xl font-black text-green-400 mb-2">$1,200</p>
                  <p className="text-slate-400 text-sm font-bold">Rewards Earned</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-primary p-4 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs uppercase font-black opacity-80">Available Credit</p>
                <p className="text-2xl font-black">$400.00</p>
              </div>
              <button className="bg-white text-primary px-6 py-2 rounded-full font-bold">Redeem</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralHubView;
