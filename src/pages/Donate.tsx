
import DonationForm from "@/components/DonationForm";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, TreePine, Users, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Donate = () => {
  const { t } = useLanguage();

  const impactStats = [
    {
      icon: TreePine,
      value: "₹500",
      description: "Plants 10 trees",
      color: "text-green-600"
    },
    {
      icon: Droplets,
      value: "₹1000",
      description: "Cleans 1000L water",
      color: "text-blue-600"
    },
    {
      icon: Users,
      value: "₹2000",
      description: "Feeds 50 families",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      value: "₹5000",
      description: "Supports 1 month operations",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-emerald-900/80"></div>
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
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            See how your donation makes a real difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-200 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t('donateButton')}
            </h2>
            <p className="text-xl text-muted-foreground">
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
