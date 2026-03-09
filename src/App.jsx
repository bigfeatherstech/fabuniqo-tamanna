import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AboutPage from './pages/About';
import CollectionPage from './pages/CollectionPage.JSX';
import BackToTop from './components/BOTTOM_TO_TOP/ScrollToTop.JSX';
import LuxuryCursor from './components/LuxuryCursor';
import LiquidLoading from './components/SKELLETON_HUB/LiquidLoading';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('fabniquo_loaded');

    if (hasSeenLoader) {
      setShowLoader(false);
    } else {
      // Total wait time: 2.5s (fill) + 1s (exit transition)
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('fabniquo_loaded', 'true');
      }, 3800); 

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* 1. Loader Logic */}
      {showLoader && <LiquidLoading />}

      {/* 2. Content Logic: Hidden until loader starts exiting */}
      <div>
        <Navbar />
        {/* <LuxuryCursor />  */}
        
        <main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/collection' element={<CollectionPage />} />
            <Route path='/productDetail' element={<ProductDetail />} />
            <Route path='/category' element={<CategoryPage />} />
            
          </Routes>
        </main>
        
        <BackToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;


// import { Route, Routes } from 'react-router-dom'
// import './App.css'

// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import Homepage from './pages/Homepage'
// import AboutPage from './pages/About'
// import CollectionPage from './pages/CollectionPage.JSX'
// import BackToTop from './components/BOTTOM_TO_TOP/ScrollToTop.JSX'
// import LuxuryCursor from './components/LuxuryCursor'

// function App() {
 

//   return (
//     <>
//       <Navbar/>
//         {/* <LuxuryCursor/> */}
//       <Routes>
//         <Route path='/' element={<Homepage/>} />
//         <Route path='/about' element={<AboutPage/>} />
//         <Route path='/collection' element={<CollectionPage/>} />
//       </Routes>
//       {/* <BackToTop/> */}
//       <Footer/>
   
        
//     </>
//   )
// }

// export default App
