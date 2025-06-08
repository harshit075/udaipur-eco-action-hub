
import React from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, Bike, Users } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: 'Trees Planted', value: '2,847', icon: TreePine, color: 'text-green-600' },
    { label: 'KM Cycled', value: '15,623', icon: Bike, color: 'text-blue-600' },
    { label: 'Lakes Cleaned', value: '12', icon: Users, color: 'text-emerald-600' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building a{' '}
            <span className="text-gradient">Greener Udaipur</span>
            <br />
            Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our community-driven initiative to plant trees, promote cycling, and keep our beautiful lakes clean. 
            Every small action creates a lasting impact on our environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gradient-nature text-white px-8 py-3 text-lg hover:opacity-90 transition-opacity">
              Donate Seeds & E-Waste
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Join Next Event
            </Button>
          </div>

          {/* Weekly Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">This Week's Impact</h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 opacity-10">
        <TreePine className="w-64 h-64 text-green-600" />
      </div>
    </div>
  );
};

export default Hero;
