import React from 'react';
import { Calendar, MapPin, Syringe, Phone } from 'lucide-react';

function Immunization() {
  const vaccines = [
    {
      name: 'Flu Vaccine',
      availability: 'Available Now',
      description: 'Annual flu shot to protect against seasonal influenza'
    },
    {
      name: 'COVID-19 Vaccine',
      availability: 'Available Now',
      description: 'Protection against COVID-19 virus'
    },
    {
      name: 'Tdap Vaccine',
      availability: 'Available Now',
      description: 'Tetanus, diphtheria, and pertussis protection'
    },
    {
      name: 'Pneumococcal Vaccine',
      availability: 'Coming Soon',
      description: 'Protection against pneumococcal disease'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Free Immunization Program
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access essential vaccines at no cost. Protect yourself and your loved ones
          with our comprehensive immunization program.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Available Vaccines</h2>
          <div className="space-y-4">
            {vaccines.map((vaccine, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{vaccine.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    vaccine.availability === 'Available Now'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {vaccine.availability}
                  </span>
                </div>
                <p className="text-gray-600">{vaccine.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Schedule Your Vaccination</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Available Times</h3>
                  <p className="text-gray-600">Monday - Friday, 9 AM - 5 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">123 Healthcare Ave, Medical Center</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Contact</h3>
                  <p className="text-gray-600">1-800-HEALTH</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
              <Syringe className="h-5 w-5" />
              <span>Schedule Appointment</span>
            </button>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Important Information</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Bring a valid ID and insurance card (if applicable)</li>
              <li>Wear a mask during your visit</li>
              <li>Arrive 15 minutes before your appointment</li>
              <li>Cancel or reschedule at least 24 hours in advance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Immunization;