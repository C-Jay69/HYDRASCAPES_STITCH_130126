
import React, { useState } from 'react';
import { View } from '../types';

interface AdminLoginViewProps {
  onLogin: () => void;
  onNavigate: (view: View) => void;
}

const AdminLoginView: React.FC<AdminLoginViewProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication logic
    setTimeout(() => {
      if (email === 'admin@hydrascapes.com' && password === 'admin123') {
        onLogin();
        onNavigate(View.ADMIN_BOOKINGS);
      } else {
        setError('Invalid administrative credentials. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-dark p-6 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] size-96 bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] size-96 bg-[#0a6e82]/30 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center size-16 bg-primary/10 rounded-2xl border border-primary/20 text-primary mb-6">
            <span className="material-symbols-outlined text-4xl filled-icon">lock_person</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight uppercase mb-2">Secure Admin Access</h1>
          <p className="text-slate-400 font-medium">Authorized personnel only — HYDRASCAPES Core</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Admin Identity</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">alternate_email</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@hydrascapes.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Access Key</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">key</span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex items-center gap-3 text-rose-400 text-sm font-bold">
                <span className="material-symbols-outlined">warning</span>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary text-[#0d191c] h-14 rounded-2xl font-black text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
            >
              {isLoading ? (
                <div className="size-6 border-4 border-[#0d191c]/30 border-t-[#0d191c] rounded-full animate-spin"></div>
              ) : (
                <>
                  Authenticate Access
                  <span className="material-symbols-outlined">login</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <button 
              onClick={() => onNavigate(View.HOME)}
              className="text-slate-500 text-sm font-bold hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Return to Public Portal
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-600 text-xs font-bold uppercase tracking-[0.2em]">
          End-to-End Encrypted Management System
        </p>
      </div>
    </div>
  );
};

export default AdminLoginView;
