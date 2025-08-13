import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItem {
  name: string;
  description: string;
  prices?: { size: string; price: string }[];
  price?: string;
  image?: string;
}

const pizzas: MenuItem[] = [
  {
    name: "e Shpisë",
    description: "Sos domate, Kashkavall, Përshutë, Suxhuk, Këpurdha, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
  },
  {
    name: "Përshutë",
    description: "Sos domate, Kashkavall, Përshutë, Këpurdha, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop"
  },
  {
    name: "Margarita",
    description: "Sos domate, Kashkavall, Susam.",
    prices: [
      { size: "20cm", price: "2.00 €" },
      { size: "30cm", price: "4.00 €" },
      { size: "40cm", price: "7.00 €" },
      { size: "60cm", price: "13.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop"
  },
  {
    name: "Tuna",
    description: "Sos domate, Kashkavall, Tuna, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop"
  },
  {
    name: "Fungi",
    description: "Sos domate, Kashkavall, Këpurdha, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&h=300&fit=crop"
  },
  {
    name: "Peperoni",
    description: "Sos domate, Kashkavall, Suxhuk, Këpurdha, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
  },
  {
    name: "Mexicane",
    description: "Sos domate, Kashkavall, Suxhuk, Misër, Chilli, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop"
  },
  {
    name: "Vegetariane",
    description: "Sos domate, Kashkavall, Spec, Qepë, Misër, Këpurdha, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop"
  },
  {
    name: "Chicken Curry",
    description: "Sos domate, Kashkavall, Mish Pule, Curry, Këpurdha, Susam.",
    prices: [
      { size: "20cm", price: "2.50 €" },
      { size: "30cm", price: "4.50 €" },
      { size: "40cm", price: "8.00 €" },
      { size: "60cm", price: "15.00 €" }
    ],
    image: "https://images.unsplash.com/photo-1565564242292-d9ff5fd44dff?w=400&h=300&fit=crop"
  }
];

const sandwiches: MenuItem[] = [
  {
    name: "i Shpisë",
    description: "Sos domate, Kashkavall, Lulashtrydhe, Mish Suxhuk, Këpurdha.",
    price: "2.50 €",
    image: "https://images.unsplash.com/photo-1540713434306-58505d7e0c4b?w=400&h=300&fit=crop"
  },
  {
    name: "Përshutë",
    description: "Sos domate, Kashkavall, Sos Llarange, Përshutë.",
    price: "2.00 €",
    image: "https://images.unsplash.com/photo-1565299585323-38174c6ca999?w=400&h=300&fit=crop"
  },
  {
    name: "Pulë",
    description: "Sos domate, Kashkavall, Sos Llarange, Mish Pule.",
    price: "2.00 €",
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&h=300&fit=crop"
  },
  {
    name: "Tuna",
    description: "Sos domate, Kashkavall, Sos Llarange, Tuna.",
    price: "2.50 €",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop"
  },
  {
    name: "Suxhuk",
    description: "Sos domate, Kashkavall, Sos Llarange, Suxhuk.",
    price: "2.00 €",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop"
  },
  {
    name: "Vegetarian",
    description: "Sos domate, Kashkavall, Sos Llarange, Misër, Këpurdha.",
    price: "2.00 €",
    image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400&h=300&fit=crop"
  }
];

const drinks: MenuItem[] = [
  { name: "Coca Cola", price: "1.00 €" },
  { name: "Fanta", price: "1.00 €" },
  { name: "Ice-T", price: "1.00 €" },
  { name: "Sprite", price: "1.00 €" },
  { name: "Schweppes", price: "1.00 €" },
  { name: "Ujë", price: "0.50 €" }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Menuja Jonë</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zgjedhje të mëdha pizzash, sandwichësh dhe pijesh të freskëta
          </p>
        </div>

        {/* Pizzas Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-3xl md:text-4xl text-orange-600 bg-orange-50 px-8 py-4 rounded-full">
              🍕 Pizza
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pizzas.map((pizza, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={pizza.image!}
                    alt={pizza.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{pizza.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pizza.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {pizza.prices?.map((priceItem, priceIndex) => (
                      <div key={priceIndex} className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">{priceItem.size}</Badge>
                        <span className="text-orange-600 font-medium">{priceItem.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sandwiches Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-3xl md:text-4xl text-orange-600 bg-orange-50 px-8 py-4 rounded-full">
              🥪 Sandwich
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sandwiches.map((sandwich, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={sandwich.image!}
                    alt={sandwich.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{sandwich.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{sandwich.description}</p>
                  <div className="flex justify-end">
                    <span className="text-orange-600 font-medium text-lg">{sandwich.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Drinks Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-3xl md:text-4xl text-orange-600 bg-orange-50 px-8 py-4 rounded-full">
              🥤 Pijët
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {drinks.map((drink, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-4">
                  <h4 className="text-lg mb-2 text-gray-800">{drink.name}</h4>
                  <span className="text-orange-600 font-medium text-lg">{drink.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}