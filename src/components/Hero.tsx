
import React, { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, Bike, Users, Heart, Vote, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Lazy load the 3D scene to prevent initial loading issues
const Scene3D = React.lazy(() => import('./Scene3D'));

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('treesPlanted'), value: '2,847', icon: TreePine, color: 'text-green-600' },
    { label: t('kmCycled'), value: '15,623', icon: Bike, color: 'text-green-600' },
    { label: t('lakesCleaned'), value: '12', icon: Users, color: 'text-green-600' },
  ];

  const features = [
  {
    title: t('foodDonation'),
    description: t('foodDonationDesc'),
    icon: Heart,
    image: '/images/FoodDonation.jpg', // ✅ Corrected path
    link: '/donate'
  },
  {
    title: t('communityVoting'),
    description: t('communityVotingDesc'),
    icon: Vote,
    image: '/images/votting.jpg', // ✅ Corrected path
    link: '/community-voting'
  },
  {
    title: t('treePlantation'),
    description: t('treePlantationDesc'),
    icon: TreePine,
    image: '/images/TreePlanting.jpg', // ✅ Corrected path
    link: '/events'
  }
];


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 overflow-hidden">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-30">
       
      </div>

      {/* Enhanced Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/40 to-emerald-900/60"></div>
      </div>

      {/* Floating 3D Scene with Error Boundary */}
      <div className="absolute top-20 right-10 w-96 h-96 z-10 hidden lg:block">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full animate-pulse backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="text-white text-center">
              <TreePine className="w-12 h-12 mx-auto mb-2" />
              <div>Loading...</div>
            </div>
          </div>
        }>
          <Scene3D />
        </Suspense>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Content with Enhanced Typography */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>
          <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button size="lg" className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20">
              <Heart className="w-6 h-6 mr-3" />
              {t('donateButton')}
            </Button>
            <Button size="lg" variant="outline" className="px-12 py-6 text-xl border-3 border-white text-white hover:bg-white hover:text-green-900 transition-all duration-300 rounded-full backdrop-blur-md bg-white/10">
              <Play className="w-6 h-6 mr-3" />
              {t('watchStory')}
            </Button>
          </div>
        </div>

        {/* Enhanced Feature Cards with Parallax Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 transform">
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-96 object-cover transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
              <div className="relative z-10 p-10 h-96 flex flex-col justify-end">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-200 mb-6 text-lg">{feature.description}</p>
                </div>
                <Button 
                  className="bg-white/20 hover:bg-green-500 text-white border-2 border-white/30 hover:border-green-500 rounded-full backdrop-blur-sm w-fit group-hover:scale-105 transition-all duration-300"
                >
                  {t('learnMore')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Stats with Animated Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative backdrop-blur-xl bg-white/15 border-2 border-white/25 rounded-3xl p-10 text-center hover:bg-white/25 transition-all duration-500 hover:scale-105 shadow-2xl">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-gray-200 font-semibold text-xl mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300 font-medium">{t('thisWeek')}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action with Video Background */}
        <div className="mt-24 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative backdrop-blur-xl bg-white/15 border-2 border-white/25 rounded-3xl p-16">
              <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                {t('readyToMakeDifference')}
              </h2>
              <p className="text-gray-200 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
                {t('ctaDescription')}
              </p>
              <Button className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-12 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20">
                <TreePine className="w-6 h-6 mr-3" />
                {t('startJourney')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
