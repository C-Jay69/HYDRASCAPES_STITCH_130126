
import React from 'react';
import { View } from '../types';

const SEOManagerView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Admin Sidebar */}
      <aside className="w-72 flex flex-col bg-white dark:bg-[#152a2e] border-r border-[#cee4e8] dark:border-[#22444a] h-full p-6">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-full size-10 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <div>
                <h1 className="text-lg font-extrabold leading-none">HYDRASCAPES</h1>
                <p className="text-[#498e9c] text-xs font-semibold uppercase tracking-wider">Admin Panel</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              <button onClick={() => onNavigate(View.ADMIN_BOOKINGS)} className="flex items-center gap-3 px-4 py-3 text-[#498e9c] hover:bg-slate-50 dark:hover:bg-white/5 rounded-full transition-all">
                <span className="material-symbols-outlined">calendar_month</span>
                <span className="text-sm font-semibold">Bookings</span>
              </button>
              <button onClick={() => onNavigate(View.ADMIN_PACKAGES)} className="flex items-center gap-3 px-4 py-3 text-[#498e9c] hover:bg-slate-50 dark:hover:bg-white/5 rounded-full transition-all">
                <span className="material-symbols-outlined">package_2</span>
                <span className="text-sm font-semibold">Manage Packages</span>
              </button>
              <button className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-full transition-all">
                <span className="material-symbols-outlined filled-icon">monitoring</span>
                <span className="text-sm font-bold">SEO & Content</span>
              </button>
              <button onClick={() => onNavigate(View.HOME)} className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 rounded-full transition-all mt-10">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm font-semibold">Exit Admin</span>
              </button>
            </nav>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black">SEO & Content Manager</h1>
            <p className="text-slate-500 mt-2">Optimize your travel blog and destination guides.</p>
          </div>
          <button className="bg-primary text-white h-12 px-6 rounded-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined">add_circle</span> Create New Post
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-6">Recent Articles</h3>
              <div className="space-y-4">
                {[
                  {title: 'Sustainable Bali Resorts', status: 'Excellent', health: 92, traffic: '12.5k'},
                  {title: 'Hidden Alps Hikes', status: 'Fair', health: 65, traffic: '8.2k'},
                  {title: 'Tokyo Street Food', status: 'Excellent', health: 88, traffic: '15.1k'}
                ].map(item => (
                  <div key={item.title} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex-1">
                      <p className="font-bold">{item.title}</p>
                      <p className="text-xs text-slate-500">Traffic: {item.traffic}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'Excellent' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {item.status} ({item.health}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="font-bold mb-6 flex items-center gap-2"><span className="material-symbols-outlined text-primary">trending_up</span> Keyword Trends</h3>
              <ul className="space-y-6">
                {[
                  {name: 'Patagonia Glaciers', val: '+240%'},
                  {name: 'Vegan Lisbon', val: '+185%'},
                  {name: 'Solo Japan', val: '+112%'}
                ].map(k => (
                  <li key={k.name}>
                    <div className="flex justify-between text-sm font-bold mb-1">
                      <span>{k.name}</span>
                      <span className="text-primary">{k.val}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{width: '70%'}}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SEOManagerView;
