// import React from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { MyFooter, Navigationbar } from './components';
// import { About, Contactus, Home, OurServices, Page404 } from './pages';

// const App = () => {
//   return <>
// <div style={{backgroundColor:'rgba(1, 1, 1, 1)'}}>
//   <BrowserRouter>
//   <Navigationbar/>
//   <Routes>
//     <Route path='/' element={<Home/>}></Route>
//     <Route path='/about' element={<About/>}></Route>
//     <Route path='/services' element={<OurServices/>}></Route>
//     <Route path='/contactu' element={<Contactus/>}></Route>
//     <Route path='*' element={<Page404/>}></Route>
//   </Routes>
//   <MyFooter/>
//   </BrowserRouter>
// </div>
//   </>
// }

// export default App


// import React from 'react'
// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import { MyFooter, Navigationbar } from './components';
// import { About,  Contactus,  Home, OurServices, Page404 } from './pages';

// const AppContent = () => {
//   const location = useLocation();
//   const is404Page = !['/', '/contactus', '/about', '/services'].includes(location.pathname);

//   return (
//     <div style={{backgroundColor:'rgba(1, 1, 1, 1)'}}>
//       {!is404Page && <Navigationbar/>}
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/about' element={<About/>}></Route>
//         <Route path='/services' element={<OurServices/>}></Route>
//         <Route path='/contactus' element={<Contactus/>}></Route>
//         <Route path='*' element={<Page404/>}></Route>
//       </Routes>
//       {!is404Page && <MyFooter/>}
//     </div>
//   );
// }
// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MyFooter, Navigationbar } from './components';
import { About, Contactus, Home, OurServices, Page404 } from './pages';
import { loading } from './assets/videos';

// Create a simple Loader component (you can customize this)
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
      {/* Replace this with your logo or any loading animation */}
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">
        <video 
        autoPlay 
        loop 
        muted 
        playsInline
        
        style={{ width: '100vw',  }}
      >
        <source src={loading} type="video/webm" />
        {/* <source src="/loader.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
        </span>
      </div>
      {/* Or use an image logo */}
      {/* <img src="/path-to-your-logo.png" alt="Loading..." style={{ width: '100px', height: '100px' }} /> */}
    </div>
  );
}

const AppContent = () => {
  const location = useLocation();
  const is404Page = !['/', '/contactus', '/about', '/services'].includes(location.pathname);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{backgroundColor:'rgba(1, 1, 1, 1)'}}>
      {!is404Page && <Navigationbar/>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<OurServices/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
      {!is404Page && <MyFooter/>}
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;