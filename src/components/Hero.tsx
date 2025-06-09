
import React from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, Bike, Users, Heart, Vote } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: 'Trees Planted', value: '2,847', icon: TreePine, color: 'text-green-600' },
    { label: 'KM Cycled', value: '15,623', icon: Bike, color: 'text-blue-600' },
    { label: 'Lakes Cleaned', value: '12', icon: Users, color: 'text-emerald-600' },
  ];

  const communityActions = [
    {
      title: 'Food Donation',
      description: 'Help feed families in need',
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
      link: '/donate'
    },
    {
      title: 'Community Voting',
      description: 'Vote on city development projects',
      icon: Vote,
      color: 'from-blue-500 to-green-500',
      link: '/voting'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Building a{' '}
            <span className="text-gradient">Greener Udaipur</span>
            <br />
            Together
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            उदयपुर को हरा-भरा बनाने में हमारा साथ दें। पेड़ लगाएं, साइकिल चलाएं, और झीलों को साफ रखें।
            <br />
            <span className="text-lg">Join our community-driven initiative for a sustainable future.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gradient-nature text-white px-8 py-3 text-lg hover:opacity-90 transition-opacity">
              बीज और ई-वेस्ट दान करें / Donate Seeds & E-Waste
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              अगले कार्यक्रम में शामिल हों / Join Next Event
            </Button>
          </div>

          {/* Community Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {communityActions.map((action, index) => (
              <div key={index} className={`bg-gradient-to-br ${action.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="flex items-center mb-4">
                  <action.icon className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">{action.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{action.description}</p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          {/* Weekly Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center md:col-span-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                इस सप्ताह का प्रभाव
                <br />
                <span className="text-lg text-muted-foreground">This Week's Impact</span>
              </h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
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
