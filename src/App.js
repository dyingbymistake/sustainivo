import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;