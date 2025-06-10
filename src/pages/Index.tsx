
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, ArrowRight, Play, Heart, Vote } from "lucide-react";

const Index = () => {
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
      title: 'Lake Restoration Success',
      description: 'How we cleaned Pichola Lake with community effort',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      impact: '2,000 kg waste removed'
    },
    {
      title: 'Urban Forest Creation',
      description: 'Creating green spaces in the heart of Udaipur',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
      impact: '1,500 trees planted'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Interactive Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50 dark:from-gray-900 dark:to-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Real Impact, Real Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our community is making a difference every day
            </p>
          </div>
          <Statistics />
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how we're transforming Udaipur together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                    <p className="text-gray-200 mb-4">{story.description}</p>
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm w-fit">
                      {story.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Events Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our next environmental activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                    Join Event
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make Udaipur Greener?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-green-100">
            Every action counts. Whether it's planting a tree, donating food, or voting on community projects, 
            your contribution helps build a sustainable future for Udaipur.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
              <p className="text-green-100 mb-6">
                Donate seeds, e-waste, or food to support our community initiatives
              </p>
              <Button className="bg-white text-green-900 hover:bg-gray-100 w-full">
                Donate Now
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <Vote className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Community Voting</h3>
              <p className="text-green-100 mb-6">
                Have your say in city development projects and community decisions
              </p>
              <Button className="bg-white text-green-900 hover:bg-gray-100 w-full">
                Vote Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
