import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Gallery from '../components/galleries/Gallery';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Gallery/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
