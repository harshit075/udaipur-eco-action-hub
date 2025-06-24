
import DonationForm from "@/components/DonationForm";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Users, Droplets, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Donate = () => {
  const { t } = useLanguage();

  const impactStats = [
    {
      icon: TreePine,
      value: "₹500",
      description: "Plants 10 trees",
      color: "text-green-400",
      bgGradient: "from-green-600 to-emerald-700",
      shadowColor: "shadow-green-900/50",
      borderColor: "border-green-700"
    },
    {
      icon: Droplets,
      value: "₹1000",
      description: "Cleans 1000L water",
      color: "text-blue-400",
      bgGradient: "from-blue-600 to-cyan-700",
      shadowColor: "shadow-blue-900/50",
      borderColor: "border-blue-700"
    },
    {
      icon: Users,
      value: "₹2000",
      description: "Feeds 50 families",
      color: "text-purple-400",
      bgGradient: "from-purple-600 to-violet-700",
      shadowColor: "shadow-purple-900/50",
      borderColor: "border-purple-700"
    },
    {
      icon: Heart,
      value: "₹5000",
      description: "Supports 1 month operations",
      color: "text-red-400",
      bgGradient: "from-red-600 to-pink-700",
      shadowColor: "shadow-red-900/50",
      borderColor: "border-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <Navbar />
      
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-30">
        <LanguageToggle />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 to-emerald-950/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
            {t('makeDonation')}
          </h1>
          <p className="text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            {t('donationDesc')}
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Your Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how your donation creates positive change in our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${stat.borderColor} ${stat.shadowColor} border-2 bg-gradient-to-br from-gray-800/95 to-slate-800/95 backdrop-blur-sm group cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className={`relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.bgGradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white drop-shadow-sm" />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.bgGradient} opacity-20 blur-xl scale-150`}></div>
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium text-lg group-hover:text-gray-100 transition-colors duration-300">
                  {stat.description}
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.bgGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Impact Visual */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-700/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Together, we've made a difference!
          </h3>
          <p className="text-gray-300 text-lg">
            Every rupee you donate goes directly towards creating a sustainable and eco-friendly Udaipur
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('donateButton')}
            </h2>
            <p className="text-xl text-gray-300">
              Every contribution helps build a sustainable future for Udaipur
            </p>
          </div>
          <DonationForm />
        </div>
      </section>
    </div>
  );
};

export default Donate;
