import React from 'react';
import GlobalStyle from './globalStyles'
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Services from './pages/services/Services';
import Products from './pages/products/Products';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/homePage/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
  <>
  <GlobalStyle />
  <ScrollToTop />
    <Navbar />
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/sign-up' element={<SignUp />}/>
    </Routes>
    <Footer />
  </>
    );
}

export default App;
