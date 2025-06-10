
import React, { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, Bike, Users, Heart, Vote, Play, ArrowRight } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  const stats = [
    { label: 'Trees Planted', value: '2,847', icon: TreePine, color: 'text-green-600' },
    { label: 'KM Cycled', value: '15,623', icon: Bike, color: 'text-green-600' },
    { label: 'Lakes Cleaned', value: '12', icon: Users, color: 'text-green-600' },
  ];

  const features = [
    {
      title: 'Food Donation',
      description: 'Help feed families in need',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop',
      link: '/donate'
    },
    {
      title: 'Community Voting',
      description: 'Vote on city development projects',
      icon: Vote,
      image: 'https://images.unsplash.com/photo-1541560052-77e59dd2f2ad?w=800&h=600&fit=crop',
      link: '/community-voting'
    },
    {
      title: 'Tree Plantation',
      description: 'Join our green movement',
      icon: TreePine,
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?w=800&h=600&fit=crop',
      link: '/events'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/50 to-emerald-900/70"></div>
      </div>

      {/* 3D Scene */}
      <div className="absolute top-20 right-10 w-96 h-96 z-10 hidden lg:block">
        <Suspense fallback={<div className="w-full h-full bg-green-900/20 rounded-full animate-pulse"></div>}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building a{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Greener Udaipur
            </span>
            <br />
            Together
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            उदयपुर को हरा-भरा बनाने में हमारा साथ दें। पेड़ लगाएं, साइकिल चलाएं, और झीलों को साफ रखें।
            <br />
            <span className="text-lg text-gray-300">Join our community-driven initiative for a sustainable future.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Heart className="w-5 h-5 mr-2" />
              बीज और ई-वेस्ट दान करें / Donate Now
            </Button>
            <Button size="lg" variant="outline" className="px-10 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-green-900 transition-all duration-300 rounded-full backdrop-blur-sm">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-200 mb-4">{feature.description}</p>
                </div>
                <Button 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full backdrop-blur-sm w-fit group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Stats with Glass Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-200 font-medium text-lg">{stat.label}</div>
              <div className="text-sm text-gray-300 mt-2">इस सप्ताह / This Week</div>
            </div>
          ))}
        </div>

        {/* Call to Action Video Section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of Udaipur citizens who are actively working towards a greener, cleaner, and more sustainable future.
              </p>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                <TreePine className="w-5 h-5 mr-2" />
                Start Your Impact Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
