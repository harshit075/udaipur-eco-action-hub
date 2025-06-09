
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TreePine, Bike, Users, MapPin, Calendar, Award, BarChart3, ArrowRight, Heart, Vote } from 'lucide-react';

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
    },
    {
      icon: Heart,
      title: 'Food Donation',
      description: 'Help feed the hungry through community food donation drives',
      color: 'from-orange-500 to-red-500',
      stats: '1,250 meals provided'
    }
  ];

  const quickActions = [
    { 
      title: 'Donate Seeds & Food', 
      description: 'Contribute seeds, food, and e-waste for sustainability', 
      href: '/donate',
      icon: TreePine,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      title: 'Vote on Projects', 
      description: 'Shape Udaipur\'s future through community voting', 
      href: '/community-voting',
      icon: Vote,
      color: 'from-purple-500 to-violet-600'
    },
    { 
      title: 'Join Next Event', 
      description: 'Participate in upcoming activities and drives', 
      href: '/events',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      title: 'Track Your Impact', 
      description: 'Monitor your environmental contributions', 
      href: '/dashboard',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Public Transparency Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient">Transparent</span> Community Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We're Making a <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Four key initiatives driving environmental change in Udaipur through community participation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center card-hover border-0 shadow-xl bg-card fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="pb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-4 text-card-foreground">{feature.title}</CardTitle>
                  <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {feature.stats}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Voting Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient">Community</span> Driven Decisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Have your say in shaping Udaipur's future. Vote on local projects and infrastructure development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-purple-500/10 to-violet-500/10">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-xl gradient-purple flex items-center justify-center shadow-lg">
                  <Vote className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Active Projects</h3>
                <p className="text-muted-foreground">3 projects awaiting community votes</p>
                <div className="text-3xl font-bold text-primary">87%</div>
                <p className="text-sm text-muted-foreground">Community participation rate</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-xl gradient-sky flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Community Voices</h3>
                <p className="text-muted-foreground">Every opinion matters in our decisions</p>
                <div className="text-3xl font-bold text-primary">1,247</div>
                <p className="text-sm text-muted-foreground">Total votes cast this month</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-xl gradient-nature flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Completed Projects</h3>
                <p className="text-muted-foreground">Community-approved projects delivered</p>
                <div className="text-3xl font-bold text-primary">15</div>
                <p className="text-sm text-muted-foreground">Successfully completed this year</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/community-voting">
              <Button className="gradient-purple text-white px-8 py-3 hover:opacity-90 transition-opacity">
                <Vote className="w-5 h-5 mr-2" />
                Vote on Current Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Food Donation Highlight */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Feed the <span className="text-gradient">Community</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our Sunday food donation drives to help feed those in need. Every meal shared makes our community stronger and more compassionate.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1,250</div>
                  <div className="text-muted-foreground">Meals Provided</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24</div>
                  <div className="text-muted-foreground">Food Drives</div>
                </div>
              </div>
              <Link to="/donate">
                <Button className="gradient-orange text-white px-8 py-3 hover:opacity-90 transition-opacity">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Food Items
                </Button>
              </Link>
            </div>
            
            <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-orange flex items-center justify-center shadow-lg">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-card-foreground mb-4">Next Food Drive</h3>
                    <p className="text-muted-foreground">This Sunday at Community Center</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Time:</span>
                      <span className="font-medium text-card-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Location:</span>
                      <span className="font-medium text-card-foreground">Fateh Sagar Area</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Volunteers:</span>
                      <span className="font-medium text-card-foreground">32 registered</span>
                    </div>
                  </div>
                  
                  <Link to="/events">
                    <Button className="w-full gradient-orange text-white hover:opacity-90 transition-opacity">
                      Join This Drive
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Take <span className="text-gradient">Action?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose how you want to contribute to a greener, more caring Udaipur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="card-hover border-0 shadow-xl bg-card group fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{action.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{action.description}</p>
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
              <Link to="/community-voting" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Voting</Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Dashboard</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
