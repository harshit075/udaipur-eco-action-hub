
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Users, Mail, Phone } from 'lucide-react';

interface JoinEventFormProps {
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  onClose?: () => void;
}

const JoinEventForm = ({ eventTitle, eventDate, eventLocation, onClose }: JoinEventFormProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event registration:', { eventTitle, ...formData });
    alert('Successfully registered for the event!');
    if (onClose) onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-green-800 mb-4">Join Event</CardTitle>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{eventTitle}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{eventDate}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{eventLocation}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Any special requirements or message?"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full"
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3"
          >
            <Users className="w-4 h-4 mr-2" />
            Register for Event
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default JoinEventForm;
