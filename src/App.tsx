import React from 'react'
import Navbar from './components/Navbar';
import LandPage from './components/LandPage';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App: React.FC = ({}) => {

  return (
    <>
    <Navbar/>
    <LandPage/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
