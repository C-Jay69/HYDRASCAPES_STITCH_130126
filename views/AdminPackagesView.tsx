
import React from 'react';
import { View } from '../types';
import { PACKAGES } from '../constants';

const AdminPackagesView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
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
              <button className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-full">
                <span className="material-symbols-outlined filled-icon">package_2</span>
                <span className="text-sm font-bold">Manage Packages</span>
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
        <header className="p-8 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Manage Packages</h2>
            <p className="text-[#498e9c] mt-1 font-medium">Create and manage your agency's travel offerings</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all">
            <span className="material-symbols-outlined">add_circle</span>
            Create New Package
          </button>
        </header>

        <div className="px-8 flex-1">
          <div className="bg-white dark:bg-[#152a2e] rounded-2xl border border-[#cee4e8] dark:border-[#22444a] shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background-light/50 dark:bg-white/5 border-b border-[#cee4e8] dark:border-[#22444a]">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#498e9c]">Package Name</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#498e9c]">Destination</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#498e9c]">Price</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#498e9c]">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#498e9c] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#cee4e8] dark:divide-[#22444a]">
                {PACKAGES.map(pkg => (
                  <tr key={pkg.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <img src={pkg.image} className="w-12 h-12 rounded-xl object-cover" alt="" />
                        <span className="font-bold">{pkg.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-semibold text-[#498e9c]">{pkg.destination}</td>
                    <td className="px-6 py-5 text-sm font-bold">${pkg.price.toLocaleString()}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2 text-primary">
                        <button className="p-2 hover:bg-primary/10 rounded-full"><span className="material-symbols-outlined">edit</span></button>
                        <button className="p-2 hover:bg-rose-50 text-rose-400 rounded-full"><span className="material-symbols-outlined">delete</span></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPackagesView;
