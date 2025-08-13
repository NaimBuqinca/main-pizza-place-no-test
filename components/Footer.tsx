import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl mb-4">Pizza Place</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Vendi i Picës suaj - Shijojeni çdo kafshim të pizzës sonë të shijshme!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="tel:045116466" 
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
            >
              📞 045 116 466
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <span className="text-gray-400">
              E Hënë - E Shtunë: 10:00 - 24:00
            </span>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2025 Pizza Place. Të gjitha të drejtat e rezervuara.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}