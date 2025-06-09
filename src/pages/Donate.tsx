
import React from 'react';
import Navbar from '@/components/Navbar';
import DonationForm from '@/components/DonationForm';

const Donate = () => {
  const impactStats = [
    { label: 'Seeds Collected', value: '5,240', description: 'kg of seeds ready for plantation' },
    { label: 'E-Waste Recycled', value: '2,180', description: 'kg of electronic waste properly disposed' },
    { label: 'Meals Distributed', value: '8,750', description: 'meals provided to families in need' },
    { label: 'Trees Grown', value: '1,850', description: 'from donated seeds' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Make a <span className="text-gradient">Lasting Impact</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your donations of seeds, e-waste, and food help us build a sustainable ecosystem in Udaipur. 
              Every contribution, no matter how small, creates lasting environmental and social change.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Donation Form */}
          <DonationForm />

          {/* How It Works Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">How Your Donations Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Seeds Donation</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Native tree and plant species</li>
                  <li>• Used in community plantation drives</li>
                  <li>• Help restore local ecosystems</li>
                  <li>• Create oxygen-rich environments</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">E-Waste Recycling</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Proper disposal of electronic waste</li>
                  <li>• Prevent toxic materials from landfills</li>
                  <li>• Recovery of valuable materials</li>
                  <li>• Support circular economy principles</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Food Donation</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Feed underprivileged families</li>
                  <li>• Reduce food waste in the community</li>
                  <li>• Sunday food distribution drives</li>
                  <li>• Support food security initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
