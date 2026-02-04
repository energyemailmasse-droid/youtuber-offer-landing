import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import VouchNotifications from './components/VouchNotifications';
import Notice from './components/Notice';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Steps />
      <FAQ />
      <Notice />
      <Footer />
      <VouchNotifications />
    </div>
  );
}

export default App;
