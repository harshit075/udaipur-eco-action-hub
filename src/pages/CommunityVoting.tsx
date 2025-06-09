import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, ThumbsDown, MessageCircle, Users, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'under-construction' | 'upcoming' | 'completed';
  votesFor: number;
  votesAgainst: number;
  location: string;
  timeline: string;
  budget: string;
  category: 'infrastructure' | 'environment' | 'community' | 'technology';
  comments: Array<{
    id: string;
    author: string;
    comment: string;
    timestamp: string;
  }>;
}

const CommunityVoting = () => {
  const { toast } = useToast();
  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'Smart Traffic Management System',
      description: 'Implementation of AI-powered traffic lights and smart sensors to reduce traffic congestion in the city center.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      status: 'under-construction' as const,
      votesFor: 342,
      votesAgainst: 45,
      location: 'City Center',
      timeline: '6 months',
      budget: '₹2.5 Crores',
      category: 'technology' as const,
      comments: [
        { id: '1', author: 'Rajesh Kumar', comment: 'This will greatly help reduce traffic jams during peak hours!', timestamp: '2 days ago' },
        { id: '2', author: 'Priya Sharma', comment: 'What about the environmental impact?', timestamp: '1 day ago' }
      ]
    },
    {
      id: '2',
      title: 'Fateh Sagar Lake Beautification',
      description: 'Comprehensive beautification project including walkways, gardens, and water quality improvement for Fateh Sagar Lake.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      status: 'upcoming' as const,
      votesFor: 567,
      votesAgainst: 23,
      location: 'Fateh Sagar Lake',
      timeline: '8 months',
      budget: '₹4.2 Crores',
      category: 'environment' as const,
      comments: [
        { id: '3', author: 'Amit Jain', comment: 'This is exactly what our city needs!', timestamp: '3 hours ago' }
      ]
    },
    {
      id: '3',
      title: 'Community Solar Power Grid',
      description: 'Installation of solar panels on government buildings and creation of a community solar power sharing system.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      status: 'upcoming' as const,
      votesFor: 289,
      votesAgainst: 67,
      location: 'Multiple Locations',
      timeline: '12 months',
      budget: '₹6.8 Crores',
      category: 'environment' as const,
      comments: []
    }
  ]);

  const [userVotes, setUserVotes] = useState<Record<string, 'for' | 'against' | null>>({});
  const [newComments, setNewComments] = useState<Record<string, string>>({});
  const [showComments, setShowComments] = useState<Record<string, boolean>>({});

  const handleVote = (projectId: string, voteType: 'for' | 'against') => {
    if (userVotes[projectId] === voteType) return;
    
    setUserVotes(prev => ({ ...prev, [projectId]: voteType }));
    toast({
      title: "Vote Submitted! 🗳️",
      description: `Your vote has been recorded for this project.`,
    });
  };

  const handleComment = (projectId: string) => {
    const comment = newComments[projectId];
    if (!comment?.trim()) return;

    setNewComments(prev => ({ ...prev, [projectId]: '' }));
    toast({
      title: "Comment Added! 💬",
      description: "Thank you for your feedback on this project.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'under-construction': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'upcoming': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'infrastructure': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'environment': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'community': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      case 'technology': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Community <span className="text-gradient">Project Voting</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have your say in shaping Udaipur's future. Vote on local projects and share your feedback 
              to help build a better community together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.replace('-', ' ')}
                    </Badge>
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{project.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{project.budget}</span>
                    </div>
                  </div>

                  {/* Voting Section */}
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Community Votes</span>
                      <span className="text-sm text-muted-foreground">
                        {project.votesFor + project.votesAgainst} total votes
                      </span>
                    </div>
                    
                    <div className="flex gap-4 mb-4">
                      <Button
                        onClick={() => handleVote(project.id, 'for')}
                        variant={userVotes[project.id] === 'for' ? 'default' : 'outline'}
                        className="flex-1"
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Support ({project.votesFor})
                      </Button>
                      <Button
                        onClick={() => handleVote(project.id, 'against')}
                        variant={userVotes[project.id] === 'against' ? 'destructive' : 'outline'}
                        className="flex-1"
                      >
                        <ThumbsDown className="w-4 h-4 mr-2" />
                        Oppose ({project.votesAgainst})
                      </Button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(project.votesFor / (project.votesFor + project.votesAgainst)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div>
                    <Button
                      variant="ghost"
                      onClick={() => setShowComments(prev => ({ 
                        ...prev, 
                        [project.id]: !prev[project.id] 
                      }))}
                      className="w-full justify-start"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comments ({project.comments.length})
                    </Button>

                    {showComments[project.id] && (
                      <div className="mt-4 space-y-4">
                        {project.comments.map((comment) => (
                          <div key={comment.id} className="bg-card p-3 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium text-sm">{comment.author}</span>
                              <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{comment.comment}</p>
                          </div>
                        ))}

                        <div className="flex gap-2">
                          <Textarea
                            placeholder="Share your thoughts on this project..."
                            value={newComments[project.id] || ''}
                            onChange={(e) => setNewComments(prev => ({ 
                              ...prev, 
                              [project.id]: e.target.value 
                            }))}
                            rows={3}
                            className="flex-1"
                          />
                          <Button 
                            onClick={() => handleComment(project.id)}
                            className="self-end"
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Have a Project Idea?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Submit your own project proposal for community consideration and voting.
                </p>
                <Button className="gradient-nature text-white px-8 py-3 hover:opacity-90 transition-opacity">
                  Submit Project Proposal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityVoting;
