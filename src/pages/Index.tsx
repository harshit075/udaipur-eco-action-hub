
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, ArrowRight, Play, Heart, Vote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      title: 'Tree Plantation Drive',
      date: 'June 15, 2025',
      location: 'Fateh Sagar Lake',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?w=600&h=400&fit=crop'
    },
    {
      title: 'Community Food Drive',
      date: 'June 16, 2025', 
      location: 'City Palace',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop'
    }
  ];

  const successStories = [
    {
      title: t('lakeRestoration'),
      description: t('lakeRestorationDesc'),
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      impact: `2,000 ${t('wasteRemoved')}`,
      video: 'https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761'
    },
    {
      title: t('urbanForest'),
      description: t('urbanForestDesc'),
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
      impact: `1,500 ${t('treesPlantedCount')}`,
      video: 'https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Enhanced Statistics Section with Background Video */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 to-green-50/95 dark:from-gray-900/95 dark:to-green-950/95"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Real Impact, Real Numbers
            </h2>
            <p className="text-2xl text-muted-foreground">
              See how our community is making a difference every day
            </p>
          </div>
          <Statistics />
        </div>
      </section>

      {/* Enhanced Video Stories Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              {t('successStories')}
            </h2>
            <p className="text-2xl text-gray-200">
              {t('successStoriesDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  {/* Background Video */}
                  <div className="absolute inset-0 z-0">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={story.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Foreground Image Overlay */}
                  <div className="relative z-10">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-96 object-cover transition-transform duration-1000 group-hover:scale-110 mix-blend-overlay opacity-60"
                    />
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-125 transition-transform duration-500 border-2 border-white/30">
                      <Play className="w-12 h-12 text-white ml-2" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-10">
                    <h3 className="text-3xl font-bold text-white mb-3">{story.title}</h3>
                    <p className="text-gray-200 mb-6 text-lg">{story.description}</p>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-semibold w-fit">
                      {story.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?w=1920&h=1080&fit=crop" 
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-emerald-50/90 dark:from-green-950/90 dark:to-emerald-950/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              {t('upcomingEvents')}
            </h2>
            <p className="text-2xl text-muted-foreground">
              {t('upcomingEventsDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group border-2 border-white/50 backdrop-blur-sm bg-white/80">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 text-lg">
                    {t('joinEvent')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-10 py-4 text-lg">
              {t('viewAllEvents')}
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-8">
            {t('makeUdaipurGreener')}
          </h2>
          <p className="text-2xl mb-16 max-w-4xl mx-auto text-green-100 leading-relaxed">
            {t('finalCtaDesc')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-12 hover:bg-white/25 transition-all duration-500 border-2 border-white/20">
              <Heart className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-6">{t('makeDonation')}</h3>
              <p className="text-green-100 mb-8 text-lg leading-relaxed">
                {t('donationDesc')}
              </p>
              <Button className="bg-white text-green-900 hover:bg-gray-100 w-full py-4 text-lg font-semibold">
                {t('donateButton')}
              </Button>
            </div>
            
            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-12 hover:bg-white/25 transition-all duration-500 border-2 border-white/20">
              <Vote className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-6">{t('communityVotingCta')}</h3>
              <p className="text-green-100 mb-8 text-lg leading-relaxed">
                {t('votingDesc')}
              </p>
              <Button className="bg-white text-green-900 hover:bg-gray-100 w-full py-4 text-lg font-semibold">
                {t('voteNow')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
