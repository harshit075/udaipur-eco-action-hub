
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TreePine, Bike, Users, MapPin, Calendar, Award, BarChart3 } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: TreePine,
      title: 'Tree Plantation',
      description: 'Join weekly plantation drives and help create urban forests in Udaipur',
      color: 'text-green-600'
    },
    {
      icon: Bike,
      title: 'Cycling Marathon',
      description: 'Promote eco-friendly transportation through community cycling events',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Lake Cleanup',
      description: 'Preserve the beauty of our lakes through regular cleanup initiatives',
      color: 'text-emerald-600'
    }
  ];

  const quickActions = [
    { title: 'Donate Seeds & E-Waste', description: 'Contribute to environmental sustainability', href: '/donate' },
    { title: 'Join Next Event', description: 'Participate in upcoming activities', href: '/events' },
    { title: 'Track Your Impact', description: 'Monitor your environmental contributions', href: '/dashboard' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Public Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Transparent</span> Community Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track our collective environmental progress in real-time. Every contribution counts towards a greener Udaipur.
            </p>
          </div>
          
          <Statistics />
          
          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button className="gradient-nature text-white px-8 py-3 text-lg hover:opacity-90 transition-opacity">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Full Public Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We're Making a <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three key initiatives driving environmental change in Udaipur through community participation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Take <span className="text-gradient">Action?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose how you want to contribute to a greener Udaipur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{action.title}</h3>
                  <p className="text-gray-600 mb-6">{action.description}</p>
                  <Link to={action.href}>
                    <Button className="w-full gradient-nature text-white hover:opacity-90 transition-opacity">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-nature rounded-lg flex items-center justify-center">
                <TreePine className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">EcoUdaipur</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building a sustainable future for Udaipur, one action at a time.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link>
              <Link to="/donate" className="text-gray-400 hover:text-white transition-colors">Donate</Link>
              <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
