import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Kontaktoni me Ne</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jemi këtu për t'ju shërbyer! Telefononi ose vizitoni restorantin tonë.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">📞</div>
              <CardTitle className="text-2xl text-gray-800">Telefoni</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Na telefononi për porosi</p>
              <Button 
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                asChild
              >
                <a href="tel:045116466" className="text-xl">045 116 466</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">⏰</div>
              <CardTitle className="text-2xl text-gray-800">Orari i Punës</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p>E Hënë - E Shtune: 09:00 - 00:00</p>
                <p>E Diel: MBYLUR</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">🍕</div>
              <CardTitle className="text-2xl text-gray-800">Shërbimi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p>✅ Porosi për marrje</p>
                <p>✅ Shërbim në vend</p>
                <p>✅ Dërgesa në shtëpi</p>
                <p className="text-orange-600 font-medium">Vendi i Picës suaj!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Adresa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl mb-4">📍</div>
              <p className="text-gray-600 mb-4">
                   
              </p>
              <p className="text-lg text-gray-800">Pizza Place Restaurant</p>
              <p className="text-gray-600">Dragodan, Rr. Ferid Curri A2 L12, Pristina, Kosovo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}