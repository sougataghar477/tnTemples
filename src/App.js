import logo from './logo.svg';
import  { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 import data from './data.json';
import './App.css';
import Banner from './components/Banner';
import SectionOne from './components/SectionOne';
import State from './components/State';
import Stories from './components/Stories';
import Sadhguru from './components/Sadhguru';
import Appeal from './components/Appeal';
import Act from './components/Act';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Media from './components/Media';
function App() {
 
  
  return (
    <div>
      <Banner />
      <SectionOne/>
      <State/>
      <Stories/>
      <Sadhguru/>
      <Appeal/>
      <Act/>
      <Carousel/>
      <Contact/>
      <Media/>
    </div>
  );
}

export default App;
