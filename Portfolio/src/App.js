import React from 'react';
import './App.scss';
import Intro from './component/intro';
import Skills from './component/skill';
import Portfolio from './component/Portfolio';
import Contact from './component/contact';
import Footer from './component/Footer';


function App() {
  return (
    <div>
         <Intro/>
         <Skills/>
         <Portfolio/>
         <Contact/>
         <Footer/>
         
     </div>
  );
}

export default App;
