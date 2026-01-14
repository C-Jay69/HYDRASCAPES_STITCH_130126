
import React from 'react';
import { View } from '../types';
import { PACKAGES, BLOG_POSTS } from '../constants';

interface HomeViewProps {
  onNavigate: (view: View, id?: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="relative rounded-xl overflow-hidden min-h-[560px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" 
             style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9gRELLXFEpFwQLBtIG3qTmK-nDYTxNGZ12mBSXBhvu1HAmLNYVoJMkXSObPY2pC8sT4nShDJzZ-a0WPmZDPOWMncJLvJ8A3MrZetuAts1jLhd4dn8KKg_KMn02I5m5FFX6QOQdXzajqcKZUEj1uWg6EsiaVCNOBAZCg-4Ds5LWtHURQbTK0t5gseKOJPsdfx6MV4hCktqdR_xI7GeNik24wWuKplK-iiK7ol1qDsi75H2uH81Sl7FcLVzTwOQisOMwT-nhpOKLjM")'}}>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-6 max-w-4xl tracking-tight">
            Dive Into Your Next Adventure
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl">
            Curated tropical getaways and expert travel guides for the modern explorer.
          </p>
          <div className="w-full max-w-3xl bg-white dark:bg-background-dark p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-[#e7f1f4] dark:border-white/10 w-full">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full placeholder:text-gray-400" placeholder="Where to?" type="text"/>
            </div>
            <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-[#e7f1f4] dark:border-white/10 w-full">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full placeholder:text-gray-400" placeholder="When?" type="text"/>
            </div>
            <button 
              onClick={() => onNavigate(View.PACKAGES)}
              className="bg-primary text-[#0d191c] w-full md:w-auto px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              Explore Packages
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-8 px-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Popular Destinations</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium mt-2">Most loved tropical spots by our community</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-1 hover:underline">
            View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="flex overflow-x-auto gap-6 no-scrollbar pb-6">
          {['Maldives', 'Bora Bora', 'Bali', 'Phuket'].map((dest, i) => (
            <div key={dest} className="min-w-[300px] flex-shrink-0 group cursor-pointer" onClick={() => onNavigate(View.PACKAGE_DETAIL)}>
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={`https://picsum.photos/seed/dest${i}/400/600`} alt={dest} />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-white text-2xl font-bold">{dest}</h3>
                  <p className="text-white/80 text-sm">{(i + 1) * 24} Packages Available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight mb-8">Featured Travel Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className="bg-white dark:bg-background-dark/50 border border-[#e7f1f4] dark:border-white/10 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-56 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={pkg.image} alt={pkg.name} />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-[#0d191c]">{pkg.duration}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-primary mb-2">
                  <span className="material-symbols-outlined text-sm filled-icon">star</span>
                  <span className="text-sm font-bold">{pkg.rating} ({pkg.reviews} Reviews)</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">{pkg.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#e7f1f4] dark:border-white/10">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase">Starting at</span>
                    <div className="text-2xl font-black text-primary">${pkg.price.toLocaleString()}</div>
                  </div>
                  <button 
                    onClick={() => onNavigate(View.PACKAGE_DETAIL, pkg.id)}
                    className="bg-[#e7f1f4] dark:bg-white/10 px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 bg-white/50 dark:bg-white/5 rounded-xl my-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Recent Travel Insights</h2>
          <button className="bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all">Explore Blog</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="flex flex-col gap-4 group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.image} alt={post.title} />
              </div>
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{post.category}</span>
                <h4 className="font-bold text-lg mt-1 group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;
