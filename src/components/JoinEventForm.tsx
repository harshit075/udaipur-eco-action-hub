
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import LocationPicker from './LocationPicker';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  location: z.string().min(1, 'Please select your location'),
  message: z.string().optional(),
});

interface JoinEventFormProps {
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
}

const JoinEventForm = ({ eventTitle, eventDate, eventLocation }: JoinEventFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Event registration:', {
      ...values,
      event: eventTitle,
      eventDate,
      eventLocation
    });
    
    toast({
      title: "Registration Successful!",
      description: `You've successfully registered for ${eventTitle}. We'll send you more details via email.`,
    });
    
    form.reset();
  };

  const handleLocationSelect = (location: { lat: number; lng: number; address: string }) => {
    form.setValue('location', location.address);
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-2xl text-green-800">Join {eventTitle}</DialogTitle>
        <p className="text-gray-600">
          {new Date(eventDate).toLocaleDateString()} at {eventLocation}
        </p>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Location</FormLabel>
                <FormControl>
                  <LocationPicker
                    onLocationSelect={handleLocationSelect}
                    placeholder="Search for your location..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any special requirements or questions?" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          >
            Register for Event
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default JoinEventForm;
