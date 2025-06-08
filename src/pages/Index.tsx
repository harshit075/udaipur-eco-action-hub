
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TreePine, Bike, Users, MapPin, Calendar, Award, BarChart3, ArrowRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: TreePine,
      title: 'Tree Plantation',
      description: 'Join weekly plantation drives and help create urban forests in Udaipur',
      color: 'from-green-500 to-emerald-600',
      stats: '2,847 trees planted'
    },
    {
      icon: Bike,
      title: 'Cycling Marathon',
      description: 'Promote eco-friendly transportation through community cycling events',
      color: 'from-blue-500 to-cyan-600',
      stats: '15,623 km cycled'
    },
    {
      icon: Users,
      title: 'Lake Cleanup',
      description: 'Preserve the beauty of our lakes through regular cleanup initiatives',
      color: 'from-emerald-500 to-teal-600',
      stats: '12 lakes cleaned'
    }
  ];

  const quickActions = [
    { 
      title: 'Donate Seeds & E-Waste', 
      description: 'Contribute to environmental sustainability', 
      href: '/donate',
      icon: TreePine,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      title: 'Join Next Event', 
      description: 'Participate in upcoming activities', 
      href: '/events',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      title: 'Track Your Impact', 
      description: 'Monitor your environmental contributions', 
      href: '/dashboard',
      icon: BarChart3,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <Hero />
      
      {/* Public Transparency Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Transparent</span> Community Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Track our collective environmental progress in real-time. Every contribution counts towards a greener Udaipur.
            </p>
          </div>
          
          <div className="fade-in">
            <Statistics />
          </div>
          
          <div className="text-center mt-16 slide-up">
            <Link to="/dashboard">
              <Button className="gradient-nature text-white px-10 py-4 text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl card-hover">
                <BarChart3 className="w-5 h-5 mr-3" />
                View Full Public Dashboard
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We're Making a <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Three key initiatives driving environmental change in Udaipur through community participation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="text-center card-hover border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="pb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                  <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {feature.stats}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Take <span className="text-gradient">Action?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose how you want to contribute to a greener Udaipur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {quickActions.map((action, index) => (
              <Card key={index} className="card-hover border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 group fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{action.description}</p>
                  <Link to={action.href}>
                    <Button className="w-full gradient-nature text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg py-3">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 gradient-nature rounded-xl flex items-center justify-center shadow-lg">
                <TreePine className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">EcoUdaipur</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Building a sustainable future for Udaipur, one action at a time.
            </p>
            <div className="flex justify-center space-x-8">
              <Link to="/events" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Events</Link>
              <Link to="/donate" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Donate</Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Dashboard</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
