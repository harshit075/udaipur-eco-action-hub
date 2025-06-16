
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Vote, Users, Calendar, MapPin, TreePine, Droplets, Recycle, Building, Lightbulb, Wind } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import VotingForm from "@/components/VotingForm";
import { useState } from "react";

const CommunityVoting = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Smart Waste Management System",
      description: "Implement IoT-based waste management with smart bins and collection routes",
      category: "Waste Management",
      icon: Recycle,
      votes: 1250,
      totalVotes: 2000,
      budget: "₹15,00,000",
      location: "City-wide",
      deadline: "2025-01-15",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      status: "active"
    },
    {
      id: 2,
      title: "Urban Forest Development",
      description: "Create green corridors and mini forests in urban areas to improve air quality",
      category: "Environment",
      icon: TreePine,
      votes: 980,
      totalVotes: 2000,
      budget: "₹25,00,000",
      location: "Sector 4-7",
      deadline: "2025-02-01",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      status: "active"
    },
    {
      id: 3,
      title: "Lake Water Purification Plant",
      description: "Install advanced water purification systems for cleaner lake water",
      category: "Water Conservation",
      icon: Droplets,
      votes: 750,
      totalVotes: 2000,
      budget: "₹30,00,000",
      location: "Fateh Sagar Lake",
      deadline: "2025-01-30",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      status: "active"
    },
    {
      id: 4,
      title: "Solar Street Lighting Project",
      description: "Replace traditional street lights with solar-powered LED systems",
      category: "Renewable Energy",
      icon: Lightbulb,
      votes: 1100,
      totalVotes: 2000,
      budget: "₹20,00,000",
      location: "Old City Area",
      deadline: "2025-02-15",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop",
      status: "active"
    },
    {
      id: 5,
      title: "Digital Healthcare Kiosks",
      description: "Set up AI-powered health screening kiosks in public areas",
      category: "Healthcare",
      icon: Building,
      votes: 890,
      totalVotes: 2000,
      budget: "₹18,00,000",
      location: "Public Markets",
      deadline: "2025-03-01",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      status: "active"
    },
    {
      id: 6,
      title: "Wind Energy Pilot Program",
      description: "Install small wind turbines for renewable energy generation",
      category: "Renewable Energy",
      icon: Wind,
      votes: 675,
      totalVotes: 2000,
      budget: "₹35,00,000",
      location: "Hilltop Areas",
      deadline: "2025-04-01",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
      status: "active"
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
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-green-900 to-emerald-900 text-white overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
            {t('communityVoting')}
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('voteForProjectDesc')}
          </p>
        </div>
      </section>

      {/* Voting Projects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Active Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Vote for the projects you want to see implemented in Udaipur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group border-2 border-blue-200 bg-white/95 backdrop-blur-sm">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Progress</span>
                    <span className="text-sm font-bold text-blue-600">
                      {project.votes}/{project.totalVotes} votes
                    </span>
                  </div>
                  <Progress 
                    value={(project.votes / project.totalVotes) * 100} 
                    className="h-3"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(project.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {project.budget}
                  </div>
                  <div className="text-sm text-gray-500">Estimated Budget</div>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 group-hover:scale-105 transition-all duration-300"
                    >
                      <Vote className="w-4 h-4 mr-2" />
                      {t('voteNow')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    {selectedProject && (
                      <VotingForm
                        projectId={selectedProject.id}
                        projectTitle={selectedProject.title}
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

export default CommunityVoting;
