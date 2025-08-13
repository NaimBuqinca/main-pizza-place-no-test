import React from 'react';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}