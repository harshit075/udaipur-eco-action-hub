
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import JoinEventForm from "@/components/JoinEventForm";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";

const Events = () => {
  const { t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      title: t('treePlantation'),
      description: "Join us for a massive tree plantation drive to increase green cover in Udaipur",
      date: "2024-12-15",
      time: "08:00 AM",
      location: "Fateh Sagar Lake",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      category: t('environment'),
      status: "upcoming"
    },
    {
      id: 2,
      title: t('foodDonation'),
      description: "Community food distribution for underprivileged families",
      date: "2024-12-20",
      time: "10:00 AM",
      location: "City Palace Area",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
      category: "Social",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Lake Cleaning Drive",
      description: "Volunteer to clean and preserve our beautiful lakes",
      date: "2024-12-25",
      time: "06:00 AM",
      location: "Pichola Lake",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      category: t('environment'),
      status: "upcoming"
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
            {t('upcomingEvents')}
          </h1>
          <p className="text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            {t('upcomingEventsDesc')}
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group border-2 border-green-200 bg-white/95 backdrop-blur-sm">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-green-800 group-hover:text-green-600 transition-colors">
                  {event.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attendees</span>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => setSelectedEvent(event)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 mt-6 group-hover:scale-105 transition-all duration-300"
                    >
                      {t('joinEvent')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    {selectedEvent && (
                      <JoinEventForm
                        eventTitle={selectedEvent.title}
                        eventDate={selectedEvent.date}
                        eventLocation={selectedEvent.location}
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
