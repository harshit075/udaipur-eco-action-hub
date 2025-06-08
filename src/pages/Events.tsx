
import React from 'react';
import EventCard from '@/components/EventCard';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Tree Plantation Drive',
      date: 'Sunday, June 9, 2025',
      time: '7:00 AM - 10:00 AM',
      location: 'Fateh Sagar Lake Area',
      participants: 84,
      description: 'Join us for a community tree plantation drive around Fateh Sagar Lake. We will plant native species and create a greener future together.',
      type: 'plantation' as const
    },
    {
      title: 'Weekly Cycling Marathon',
      date: 'Sunday, June 9, 2025',
      time: '6:00 AM - 9:00 AM',
      location: 'City Palace to Ambrai Ghat',
      participants: 156,
      description: 'Cycle through the beautiful streets of Udaipur while promoting eco-friendly transportation. Prizes for top performers!',
      type: 'cycling' as const
    },
    {
      title: 'Lake Pichola Cleanup',
      date: 'Sunday, June 16, 2025',
      time: '8:00 AM - 11:00 AM',
      location: 'Lake Pichola Ghats',
      participants: 92,
      description: 'Help us maintain the beauty of Lake Pichola by participating in our cleanup drive. Breakfast provided for all volunteers.',
      type: 'cleanup' as const
    },
    {
      title: 'Urban Forest Creation',
      date: 'Sunday, June 23, 2025',
      time: '7:30 AM - 10:30 AM',
      location: 'Udaipur Green Belt',
      participants: 67,
      description: 'Large-scale plantation drive to create an urban forest in Udaipur. Plant trees and watch them grow into a beautiful green space.',
      type: 'plantation' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-gradient">Environmental Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our weekly environmental activities and make a real difference in Udaipur. 
            Every Sunday brings a new opportunity to contribute to our city's green future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Want to Organize Your Own Event?
            </h3>
            <p className="text-gray-600 mb-6">
              Have an idea for a community environmental event? We'd love to support you!
            </p>
            <button className="gradient-nature text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Propose an Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
