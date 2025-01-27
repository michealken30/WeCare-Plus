import React from 'react';
import { ShoppingCart, Star, Plus } from 'lucide-react';

function Supplements() {
  const supplements = [
    {
      id: 1,
      name: 'Multivitamin Complex',
      price: 29.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=300&q=80',
      description: 'Complete daily vitamin and mineral support'
    },
    {
      id: 2,
      name: 'Omega-3 Fish Oil',
      price: 24.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1577448978063-85ecbe0ba00f?auto=format&fit=crop&w=300&q=80',
      description: 'Heart and brain health support'
    },
    {
      id: 3,
      name: 'Probiotics',
      price: 34.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1584017911946-62b8e49e7d90?auto=format&fit=crop&w=300&q=80',
      description: 'Digestive health and immune support'
    },
    {
      id: 4,
      name: 'Vitamin D3',
      price: 19.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1584017911957-d0f4395d9972?auto=format&fit=crop&w=300&q=80',
      description: 'Bone health and immune system support'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Health Supplements
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Premium quality supplements to support your health and wellness journey.
          All products are thoroughly tested and certified.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {supplements.map((supplement) => (
          <div key={supplement.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={supplement.image}
                alt={supplement.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{supplement.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{supplement.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{supplement.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">
                  ${supplement.price}
                </span>
                <button className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-purple-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Monthly Supplement Box</h2>
          <p className="text-gray-600 mt-2">
            Get your personalized supplement box delivered monthly. Save up to 20%!
          </p>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Subscribe Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Supplements;