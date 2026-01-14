
import React, { useState, useEffect } from 'react';
import { View } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import PackageDetailView from './views/PackageDetailView';
import TripBuilderView from './views/TripBuilderView';
import CruiseHubView from './views/CruiseHubView';
import RiverCruiseView from './views/RiverCruiseView';
import AdminPackagesView from './views/AdminPackagesView';
import AdminBookingsView from './views/AdminBookingsView';
import GuestDashboardView from './views/GuestDashboardView';
import AmbassadorLandingView from './views/AmbassadorLandingView';
import ReferralHubView from './views/ReferralHubView';
import SEOManagerView from './views/SEOManagerView';
import AdminLoginView from './views/AdminLoginView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('hydrascapes_admin_auth') === 'true';
  });
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  // Handle Hash Changes for basic routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(View).includes(hash as View)) {
        const targetView = hash as View;
        // Protect Admin Views
        const isAdminView = [View.ADMIN_PACKAGES, View.ADMIN_BOOKINGS, View.ADMIN_SHOREX, View.ADMIN_AMBASSADOR, View.ADMIN_SEO].includes(targetView);
        if (isAdminView && !isAuthenticated) {
          setCurrentView(View.LOGIN);
          window.location.hash = View.LOGIN;
        } else {
          setCurrentView(targetView);
        }
      } else {
        setCurrentView(View.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAuthenticated]);

  const navigate = (view: View, id?: string) => {
    if (id) setSelectedPackageId(id);
    window.location.hash = view;
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('hydrascapes_admin_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('hydrascapes_admin_auth');
    navigate(View.HOME);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView onNavigate={navigate} />;
      case View.PACKAGE_DETAIL:
        return <PackageDetailView packageId={selectedPackageId || '1'} onNavigate={navigate} />;
      case View.TRIP_BUILDER:
        return <TripBuilderView onNavigate={navigate} />;
      case View.CRUISES:
        return <CruiseHubView onNavigate={navigate} />;
      case View.RIVER_CRUISES:
        return <RiverCruiseView onNavigate={navigate} />;
      case View.LOGIN:
        return <AdminLoginView onLogin={handleLogin} onNavigate={navigate} />;
      case View.ADMIN_PACKAGES:
        return <AdminPackagesView onNavigate={navigate} />;
      case View.ADMIN_BOOKINGS:
        return <AdminBookingsView onNavigate={navigate} />;
      case View.GUEST_PORTAL:
        return <GuestDashboardView onNavigate={navigate} />;
      case View.AMBASSADOR:
        return <AmbassadorLandingView onNavigate={navigate} />;
      case View.REFERRAL:
        return <ReferralHubView onNavigate={navigate} />;
      case View.ADMIN_SEO:
        return <SEOManagerView onNavigate={navigate} />;
      default:
        return <HomeView onNavigate={navigate} />;
    }
  };

  const isPortal = [View.ADMIN_PACKAGES, View.ADMIN_BOOKINGS, View.ADMIN_SHOREX, View.ADMIN_AMBASSADOR, View.ADMIN_SEO].includes(currentView);
  const isLoginPage = currentView === View.LOGIN;

  return (
    <div className={`min-h-screen flex flex-col ${isAuthenticated ? 'dark' : ''}`}>
      {!isPortal && !isLoginPage && (
        <Navbar 
          currentView={currentView} 
          onNavigate={navigate} 
          onLogout={handleLogout} 
          isAuthenticated={isAuthenticated} 
        />
      )}
      <main className="flex-1">
        {renderView()}
      </main>
      {!isPortal && !isLoginPage && <Footer onNavigate={navigate} />}
    </div>
  );
};

export default App;
