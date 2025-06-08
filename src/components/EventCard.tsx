
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  description: string;
  type: 'plantation' | 'cycling' | 'cleanup';
}

const EventCard = ({ title, date, time, location, participants, description, type }: EventCardProps) => {
  const getEventColor = () => {
    switch (type) {
      case 'plantation':
        return 'border-l-green-500 bg-green-50';
      case 'cycling':
        return 'border-l-blue-500 bg-blue-50';
      case 'cleanup':
        return 'border-l-emerald-500 bg-emerald-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getEventIcon = () => {
    switch (type) {
      case 'plantation':
        return '🌱';
      case 'cycling':
        return '🚴';
      case 'cleanup':
        return '🧹';
      default:
        return '📅';
    }
  };

  return (
    <Card className={`${getEventColor()} border-l-4 hover:shadow-lg transition-shadow`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <span className="text-2xl">{getEventIcon()}</span>
            {title}
          </CardTitle>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            {participants} joined
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-gray-700">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            {time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full gradient-nature text-white hover:opacity-90 transition-opacity">
          Register for Event
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
