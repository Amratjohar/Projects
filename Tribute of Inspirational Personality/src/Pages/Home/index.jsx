import React from 'react';
import "./Home.css";

import Navbar from "../../Components/Navbar/index.jsx";
import HeroSection from "../../Components/HeroSection/index.jsx";
import AboutSection from "../../Components/AboutSection/index.jsx";
import PersonalitySection from "../../Components/PersonalitySection/index.jsx";
import EventsSection from "../../Components/EventsSection/index.jsx";
import CarouselSection from "../../Components/CarouselSection/index.jsx";
import PictureSection from "../../Components/PictureSection/index.jsx";
import FooterSection from "../../Components/FooterSection/index.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <PersonalitySection />
      <EventsSection />
      <CarouselSection />
      <PictureSection />
      <FooterSection />
    </>
  )
}

export default Home;