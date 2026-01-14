
import React, { useState } from 'react';
import { View } from '../types';
import { PACKAGES } from '../constants';
import { getTravelRecommendations } from '../services/geminiService';

const TripBuilderView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [budget, setBudget] = useState('Luxury');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const vibes = [
    { id: 'Adventure', label: 'Adventure', sub: 'Hiking, trekking', img: 'https://picsum.photos/seed/adv/300/400' },
    { id: 'Romance', label: 'Romance', sub: 'Sunsets, dining', img: 'https://picsum.photos/seed/rom/300/400' },
    { id: 'Family', label: 'Family', sub: 'Beach, fun', img: 'https://picsum.photos/seed/fam/300/400' },
    { id: 'Wellness', label: 'Wellness', sub: 'Spa, relaxation', img: 'https://picsum.photos/seed/wel/300/400' },
    { id: 'Culture', label: 'Culture', sub: 'History, arts', img: 'https://picsum.photos/seed/cul/300/400' },
  ];

  const toggleVibe = (id: string) => {
    setSelectedVibes(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]);
  };

  const handleNext = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setLoading(true);
      const aiRec = await getTravelRecommendations(selectedVibes, budget, PACKAGES);
      setRecommendation(aiRec);
      setLoading(false);
      setStep(3);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">Your Journey Starts Here</span>
              <h3 className="text-lg font-bold">Build Your Escape</h3>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold">Step {step} of 3</span>
            </div>
          </div>
          <div className="h-3 w-full bg-[#cee4e8] dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${(step/3)*100}%` }}></div>
          </div>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">What's your vibe?</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">Select all styles that match your mood.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
              {vibes.map(v => (
                <div 
                  key={v.id}
                  onClick={() => toggleVibe(v.id)}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border-4 transition-all duration-300 shadow-lg ${selectedVibes.includes(v.id) ? 'border-primary scale-105 shadow-primary/20' : 'border-transparent'}`}
                >
                  <img src={v.img} alt={v.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 h-8 w-8 rounded-full border-2 border-white/50 bg-white/10 flex items-center justify-center text-white backdrop-blur-md">
                    {selectedVibes.includes(v.id) && <span className="material-symbols-outlined text-lg font-bold">check</span>}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-bold mb-1">{v.label}</h4>
                    <p className="text-white/80 text-xs font-medium">{v.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-xl">
             <h2 className="text-3xl font-bold mb-8">Refine Your Search</h2>
             <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold mb-4 uppercase tracking-widest text-slate-500">Budget Tier</label>
                  <div className="grid grid-cols-4 gap-4">
                    {['Value', 'Boutique', 'Luxury', 'Ultra'].map(t => (
                      <button 
                        key={t}
                        onClick={() => setBudget(t)}
                        className={`py-3 rounded-xl font-bold border-2 transition-all ${budget === t ? 'border-primary bg-primary/10 text-primary' : 'border-slate-100 dark:border-slate-800'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <p className="text-sm italic text-slate-500">"We use AI to analyze your vibes and match you with the perfect {budget} experience from our collection."</p>
                </div>
             </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in zoom-in-95 duration-500">
            <h2 className="text-4xl font-black mb-4">Your AI Travel Match</h2>
            {loading ? (
              <div className="py-20 flex flex-col items-center gap-4">
                <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="font-bold text-slate-500">Curating your dream escape...</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <span className="material-symbols-outlined filled-icon">auto_awesome</span>
                    <span className="font-bold uppercase text-sm tracking-widest">Personalized Pitch</span>
                  </div>
                  <p className="text-2xl font-medium leading-relaxed italic">"{recommendation}"</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PACKAGES.slice(0, 2).map(pkg => (
                    <div key={pkg.id} className="group relative flex flex-col bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-[#e7f1f4] dark:border-white/10 shadow-sm transition-all hover:border-primary/50">
                      <img src={pkg.image} className="h-64 w-full object-cover" alt={pkg.name} />
                      <div className="p-8">
                        <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                        <p className="text-[#498e9c] text-sm mb-6">{pkg.description}</p>
                        <button 
                          onClick={() => onNavigate(View.PACKAGE_DETAIL, pkg.id)}
                          className="w-full bg-primary py-4 rounded-full font-bold text-[#0d191c]"
                        >
                          Book My Custom Escape
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 flex items-center justify-between">
          <button 
            onClick={() => step > 1 ? setStep(step - 1) : onNavigate(View.HOME)}
            className="text-slate-500 font-bold flex items-center gap-2 hover:text-slate-900"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          {step < 3 && (
            <button 
              onClick={handleNext}
              className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2"
            >
              {step === 2 ? 'Show My Matches' : 'Next'}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripBuilderView;
