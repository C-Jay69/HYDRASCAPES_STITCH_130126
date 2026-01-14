
import React from 'react';
import { View } from '../types';

const AdminBookingsView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const bookings = [
    { name: 'Alex Rivera', pkg: '7 Days in Santorini', status: 'Pending', price: '$2,450' },
    { name: 'Sarah Jenkins', pkg: 'Alpine Ski Retreat', status: 'Confirmed', price: '$3,120' },
    { name: 'Marcus Chen', pkg: 'Tokyo City Nights', status: 'Cancelled', price: '$1,890' },
    { name: 'Elena Rodriguez', pkg: 'Bali Wellness Week', status: 'Pending', price: '$4,200' },
  ];

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
              <button className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-full">
                <span className="material-symbols-outlined filled-icon">calendar_month</span>
                <span className="text-sm font-bold">Bookings</span>
              </button>
              <button onClick={() => onNavigate(View.ADMIN_PACKAGES)} className="flex items-center gap-3 px-4 py-3 text-[#498e9c] hover:bg-slate-50 dark:hover:bg-white/5 rounded-full transition-all">
                <span className="material-symbols-outlined">package_2</span>
                <span className="text-sm font-semibold">Manage Packages</span>
              </button>
              <button onClick={() => onNavigate(View.ADMIN_SEO)} className="flex items-center gap-3 px-4 py-3 text-[#498e9c] hover:bg-slate-50 dark:hover:bg-white/5 rounded-full transition-all">
                <span className="material-symbols-outlined">monitoring</span>
                <span className="text-sm font-semibold">SEO & Content</span>
              </button>
              <button onClick={() => onNavigate(View.HOME)} className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 rounded-full transition-all mt-10">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm font-semibold">Exit Admin</span>
              </button>
            </nav>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="p-8">
          <h2 className="text-4xl font-black tracking-tight">Booking Requests</h2>
          <p className="text-[#498e9c] mt-1 font-medium">12 active requests waiting for your approval</p>
        </header>

        <div className="px-8 grid grid-cols-3 gap-8">
          <div className="col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="p-6 text-xs font-bold uppercase text-slate-500">Customer</th>
                  <th className="p-6 text-xs font-bold uppercase text-slate-500">Package</th>
                  <th className="p-6 text-xs font-bold uppercase text-slate-500">Status</th>
                  <th className="p-6 text-xs font-bold uppercase text-slate-500">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookings.map(b => (
                  <tr key={b.name} className="hover:bg-slate-50 transition-colors cursor-pointer">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-slate-200 bg-cover" style={{backgroundImage: `url('https://picsum.photos/seed/${b.name}/100/100')`}}></div>
                        <p className="font-bold">{b.name}</p>
                      </div>
                    </td>
                    <td className="p-6 text-sm font-medium">{b.pkg}</td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        b.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                        b.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="p-6 font-bold">{b.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 shadow-xl flex flex-col gap-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-lg font-bold">Booking Details</h3>
              <button className="material-symbols-outlined">close</button>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="size-20 rounded-full bg-slate-200 bg-cover border-4 border-slate-50" style={{backgroundImage: 'url("https://picsum.photos/seed/details/200/200")'}}></div>
              <h4 className="text-xl font-bold">Alex Rivera</h4>
              <span className="flex items-center gap-1 text-primary text-sm font-bold uppercase"><span className="material-symbols-outlined text-sm">verified</span> Frequent Traveler</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase">Special Requests</p>
              <p className="text-sm italic">"Celebrating our 10th anniversary. If possible, a room with a direct caldera view would be amazing."</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 rounded-xl border border-red-500 text-red-500 font-bold">Reject</button>
              <button className="py-3 rounded-xl bg-primary text-white font-bold">Confirm</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminBookingsView;
