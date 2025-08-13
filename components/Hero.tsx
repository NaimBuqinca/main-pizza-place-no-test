import React from 'react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/514cbe69f1c898dc238ae0ec41a4f762d8260413.png';

export function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src={logoImage} 
            alt="Pizza Place Logo" 
            className="mx-auto w-80 h-auto mb-6"
          />
        </div>
        <h1 className="text-4xl md:text-6xl mb-4 text-gray-800">
          Mirë se vini në Pizza Place
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Shijoni pizzat më të shijshme në qytet. E freskët, e ngrohtë dhe plot shije!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToMenu}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full"
          >
            Shiko Menunë
          </Button>
          <Button 
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-6 text-lg rounded-full"
          >
            <a href="tel:045116466" className="flex items-center gap-2">
              📞 045 116 466
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}