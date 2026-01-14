
import React from 'react';
import { View } from '../types';

const AmbassadorLandingView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      <section className="flex flex-col lg:flex-row w-full min-h-[85vh] overflow-hidden">
        <div className="relative w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 bg-background-dark overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center z-0 opacity-50" style={{backgroundImage: 'url("https://picsum.photos/seed/amb/800/1200")'}}></div>
          <div className="relative z-20 max-w-lg">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-primary rounded-full">Elite Program</span>
            <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Travel the World as an <span className="text-primary">Ambassador</span>
            </h1>
            <p className="text-slate-100 text-lg leading-relaxed mb-8">Turn your passion for discovery into exclusive rewards. Join our inner circle.</p>
            <button className="bg-primary text-white h-14 px-8 rounded-xl font-bold text-lg shadow-xl">Apply Now</button>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 relative bg-slate-100">
           <img src="https://picsum.photos/seed/san/1200/1200" className="absolute inset-0 w-full h-full object-cover" alt="Ambassador" />
        </div>
      </section>

      <section className="py-24 max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-16">Ambassador Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {icon: 'flight', title: 'Free Trips', desc: 'Travel on us to our partner resorts.'},
            {icon: 'payments', title: 'Earn Commission', desc: 'Industry leading rewards for referrals.'},
            {icon: 'verified_user', title: 'Early Access', desc: 'Document our newest routes first.'}
          ].map(perk => (
            <div key={perk.title} className="flex flex-col items-center gap-4">
              <div className="size-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">{perk.icon}</span>
              </div>
              <h3 className="text-2xl font-bold">{perk.title}</h3>
              <p className="text-slate-500 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AmbassadorLandingView;
