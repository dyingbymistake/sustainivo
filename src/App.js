import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import Report from './components/Report';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import HomeEnergyUse from './components/pages/HomeEnergyUse';
import WasteManagement from './components/pages/WasteManagement';
import SustainableEating from './components/pages/SustainableEating';
import Contribution from './components/pages/Contribution';
import GreenTransportation from './components/pages/GreenTransportation';

function App() {
  const [report, setReport] = useState(null); // State for the report

  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sign-up' element={<SignUp />} />
           
            <Route path='/quiz' element={
              report ? <Report report={report} /> : <Quiz setReport={setReport} />
            } />
              <Route path='/home-energy-use' element={<HomeEnergyUse />} />
        <Route path='/waste-management' element={<WasteManagement />} />
        <Route path='/sustainable-eating' element={<SustainableEating />} />
        <Route path='/green-transportation' element={<GreenTransportation />} />
        <Route path='/contribution' element={<Contribution />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
