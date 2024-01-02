import React from 'react';
import Header from './commonResource/Header/Header'
import Footer from './commonResource/Footer/Footer'
import SectionOne from './commonResource/SectionOne/SectionOne'
import SectionTwo from './commonResource/SectionTwo/SectionTwo'
import SectionThree from './commonResource/SectionThree/SectionThree'
import SectionFour from './commonResource/SectionFour/SectionFour'
import SectionFive from './commonResource/SectionFive/SectionFive'
import SectionSix from './commonResource/SectionSix/SectionSix'
// import './css/styles.css';

function App() {
  return (
      <div > 
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <Footer/>
        
      </div>
  );
}

export default App;
