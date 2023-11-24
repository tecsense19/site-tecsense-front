
import React, { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//====Importing Components
import AppContext from './context/AppContext';
import Footer from './components/footer/Footer';
import MainContent from './components/Content/MainContent';
import WhoWeAre from './components/pages/Who We Are/whoWeAre';
import DetailBlog from './components/pages/OurBlog/DetailBlog';
import Services from './components/pages/Services/Services';
import ServicesCard from './components/Content/ServicesCard';


//===Importing Icon Packs
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Heder from './components/heder/Heder';
import OurBlog from './components/pages/OurBlog/OurBlog';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    }); 
  }, []);
  return (
    <AppContext>
      <BrowserRouter>
        <Heder />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/who-we-are' element={<WhoWeAre />} />
          <Route path='/our-blog' element={<OurBlog />} />
          <Route path='our-blog/:blogIndex' element={<DetailBlog />} />
          <Route path='/Services/:id' element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
library.add(fab, fas, far)