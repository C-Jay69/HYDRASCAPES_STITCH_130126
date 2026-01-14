
import React from 'react';
import { View } from '../types';
import { CRUISES } from '../constants';

const CruiseHubView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full bg-cover bg-center relative" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://picsum.photos/seed/ocean/1200/800")'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/40 to-transparent"></div>
          </div>
          <div className="w-1/2 h-full bg-cover bg-center relative" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://picsum.photos/seed/river/1200/800")'}}>
            <div className="absolute inset-0 bg-gradient-to-l from-background-dark/40 to-transparent"></div>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-primary font-bold text-xs tracking-widest uppercase mb-6 border border-white/20">
            Luxury Reimagined
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6">Explore the Infinite Blue</h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10">From open ocean horizons to intimate European rivers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-[#0d191c] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              <span className="material-symbols-outlined">sailing</span> Ocean Grandeur
            </button>
            <button onClick={() => onNavigate(View.RIVER_CRUISES)} className="bg-white/20 backdrop-blur-xl text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">kayaking</span> River Intimacy
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-black mb-12">Featured Voyages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CRUISES.map(cruise => (
            <div key={cruise.id} className="bg-white dark:bg-[#1a2d31] rounded-2xl overflow-hidden shadow-lg border border-[#e7f1f4] dark:border-[#2a4a50] group hover:shadow-2xl transition-all">
              <div className="relative h-56">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={cruise.image} alt={cruise.name} />
                <div className="absolute top-4 left-4 bg-primary/90 text-[#0d191c] text-[10px] font-black uppercase px-2 py-1 rounded">{cruise.type}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{cruise.name}</h3>
                <p className="text-sm text-[#498e9c] mb-4">{cruise.line} • {cruise.ship}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e7f1f4]">
                  <div>
                    <p className="text-[10px] text-[#498e9c] font-bold uppercase">From</p>
                    <p className="text-2xl font-black text-primary">${cruise.price.toLocaleString()}</p>
                  </div>
                  <button className="bg-primary hover:bg-[#0bbbdc] text-[#0d191c] font-black px-4 py-2 rounded-lg transition-colors">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CruiseHubView;
