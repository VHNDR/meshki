import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='min-h-screen w-full p-0 m-0 bg-c-back text-c-text '>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App