import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Gallery from "../../components/galleries/Gallery";
import Footer from "../../components/footer/Footer";
import PropertyList from "../../components/galleryList/GalleryList";
import FeaturedProperties from "../../components/featuredGallery/FeaturedProperties";
import MailList from "../../components/mailList/MailList";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Gallery />
        <h2 className="homeTitle">Browse by property type</h2>

        <PropertyList />

        <h2 className="homeTitle">Homes guests love</h2>

        <FeaturedProperties />

        <MailList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
