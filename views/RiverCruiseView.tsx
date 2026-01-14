
import React from 'react';
import { View } from '../types';

const RiverCruiseView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-background-dark text-white min-h-screen">
       <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-cover bg-center" 
               style={{backgroundImage: 'linear-gradient(to bottom, rgba(10, 14, 23, 0.4), rgba(10, 14, 23, 0.8)), url("https://picsum.photos/seed/douro/1600/900")'}}>
          </div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Luxury River Travel</span>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            Intimacy, Elegance, <br/> <span className="text-[#d4af37]">Local Immersion</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl font-light">
            Experience the serenity of boutique river travel through the heart of Europe's most iconic landscapes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl">Explore Voyages</button>
            <button className="border border-white/20 bg-white/5 px-8 py-4 rounded-full font-bold text-white backdrop-blur-md">View Itineraries</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24 text-center">
        <h2 className="text-3xl font-bold md:text-4xl mb-16">The Intimate Experience</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-left">
          {[
            {icon: 'directions_boat', title: 'Boutique Ships', desc: 'Max 120 guests for highly personalized service.'},
            {icon: 'location_city', title: 'Heart of Cities', desc: 'Dock steps away from historic centers.'},
            {icon: 'restaurant', title: 'All-Inclusive', desc: 'Farm-to-table dining and regional wine pairings.'}
          ].map(item => (
            <div key={item.title} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="size-14 bg-primary/20 text-primary flex items-center justify-center rounded-xl mb-6">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RiverCruiseView;
