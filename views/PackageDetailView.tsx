
import React, { useState } from 'react';
import { View, TravelPackage } from '../types';
import { PACKAGES } from '../constants';

interface PackageDetailViewProps {
  packageId: string;
  onNavigate: (view: View) => void;
}

const PackageDetailView: React.FC<PackageDetailViewProps> = ({ packageId, onNavigate }) => {
  const pkg = PACKAGES.find(p => p.id === packageId) || PACKAGES[0];
  const [success, setSuccess] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="pt-40 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-2xl text-center border-t-4 border-primary">
          <span className="material-symbols-outlined text-primary text-7xl mb-4 filled-icon">task_alt</span>
          <h2 className="text-3xl font-black mb-4">Inquiry Sent!</h2>
          <p className="text-slate-500 mb-8">One of our luxury consultants will contact you shortly to finalize your custom escape to {pkg.destination}.</p>
          <button onClick={() => onNavigate(View.HOME)} className="w-full bg-primary text-white py-4 rounded-full font-bold">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 max-w-[1200px] mx-auto px-6 py-8">
      {/* Gallery Header */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-12">
        <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={pkg.image} alt={pkg.name} />
          <div className="absolute bottom-6 left-6 z-20">
            <h1 className="text-4xl font-extrabold text-white mb-2">{pkg.name}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              <span>{pkg.destination}</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-xl overflow-hidden group">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={`https://picsum.photos/seed/pkg2/400/300`} alt="Detail 1" />
        </div>
        <div className="col-span-1 rounded-xl overflow-hidden group">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={`https://picsum.photos/seed/pkg3/400/300`} alt="Detail 2" />
        </div>
        <div className="col-span-2 rounded-xl overflow-hidden group relative">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={`https://picsum.photos/seed/pkg4/800/300`} alt="Detail 3" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <button className="bg-white/90 backdrop-blur text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined">grid_view</span> View All Photos
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Experience Paradise</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{pkg.description} Our luxury package offers an all-inclusive stay at a 5-star resort, complete with private villa access, world-class dining, and exclusive excursions.</p>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Journey</h2>
              <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1 rounded-full">{pkg.duration}</span>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map(day => (
                <div key={day} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">{day}</div>
                    <div className="w-0.5 grow bg-gray-200 dark:bg-gray-800 my-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-bold mb-2">Adventure Phase {day}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Discover local hidden gems and enjoy curated experiences led by our top-rated guides.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
            <div className="flex items-end gap-1 mb-6">
              <span className="text-3xl font-extrabold">${pkg.price.toLocaleString()}</span>
              <span className="text-gray-500 dark:text-gray-400 mb-1">/ person</span>
            </div>
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Check-in Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">calendar_month</span>
                  <input className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg pl-10 py-3 focus:ring-2 focus:ring-primary text-sm" type="date" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Travelers</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">group</span>
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg pl-10 py-3 focus:ring-2 focus:ring-primary text-sm appearance-none">
                    <option>2 Adults</option>
                    <option>1 Adult</option>
                    <option>2 Adults, 1 Child</option>
                    <option>Group (4+)</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-full font-extrabold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                Book This Package
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">Free cancellation up to 14 days before arrival</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailView;
