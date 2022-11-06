import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Section1 />
        <Section2 />
        <Faq />
        <Footer />
    </div>
  );
}

export default App;