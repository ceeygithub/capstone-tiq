
import React from 'react';
import Navigation from '../components/Navigation';
import Faq from '../components/Faq';
// import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navigation />
      <Header id="home" />
      {/* <AboutUs id="about" /> */}
      <Faq id="faq" />
      {/* <ContactForm id="contact" /> */}
      <Footer/>
    </>
  );
}

export default Home;

