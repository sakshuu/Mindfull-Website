

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MyFooter, Navigationbar } from './components';
import { About, Contactus, Home, OurServices, Page404 } from './pages';
import { loading } from './assets/videos';
import ContactusFooter from './components/ContactusFooter';

const Loader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(1, 1, 1, 1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">
          <video autoPlay loop muted playsInline style={{ width: '100vw' }}>
            <source src={loading} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </span>
      </div>
    </div>
  );
};

const ComingSoonMobile = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(1, 1, 1, 1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000,
      color: 'white',
      fontSize: '24px',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1>Stay Tuned for Our Mobile version view Release</h1>
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const is404Page = !['/', '/contactus', '/about', '/services'].includes(location.pathname);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (isMobile) {
    return <ComingSoonMobile />;
  }

  return (
    <div style={{ backgroundColor: 'rgba(1, 1, 1, 1)' }}>
      {!is404Page && <Navigationbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {!is404Page && (
        location.pathname === '/contactus' ? <ContactusFooter /> : <MyFooter />
      )}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;