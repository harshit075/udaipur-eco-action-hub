
import React from 'react';
import Navbar from '@/components/Navbar';
import EventCard from '@/components/EventCard';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Tree Plantation Drive / वृक्षारोपण अभियान',
      date: 'Sunday, June 9, 2025',
      time: '7:00 AM - 10:00 AM',
      location: 'Fateh Sagar Lake Area / फतेह सागर झील क्षेत्र',
      participants: 84,
      description: 'Join us for a community tree plantation drive around Fateh Sagar Lake. We will plant native species and create a greener future together. / फतेह सागर झील के आसपास पेड़ लगाने के लिए हमारे साथ जुड़ें।',
      type: 'plantation' as const
    },
    {
      title: 'Community Food Drive / सामुदायिक भोजन वितरण',
      date: 'Sunday, June 9, 2025',
      time: '5:00 PM - 8:00 PM',
      location: 'City Palace Community Center / सिटी पैलेस कम्युनिटी सेंटर',
      participants: 127,
      description: 'Help distribute meals to underprivileged families. Bring packaged food items or volunteer to help serve meals to the community. / जरूरतमंद परिवारों को भोजन वितरित करने में मदद करें।',
      type: 'cleanup' as const
    },
    {
      title: 'Weekly Cycling Marathon / साप्ताहिक साइकिलिंग मैराथन',
      date: 'Sunday, June 16, 2025',
      time: '6:00 AM - 9:00 AM',
      location: 'City Palace to Ambrai Ghat / सिटी पैलेस से अंबराई घाट',
      participants: 156,
      description: 'Cycle through the beautiful streets of Udaipur while promoting eco-friendly transportation. Prizes for top performers! / पर्यावरण-अनुकूल परिवहन को बढ़ावा देते हुए उदयपुर की खूबसूरत सड़कों पर साइकिल चलाएं।',
      type: 'cycling' as const
    },
    {
      title: 'Lake Pichola Cleanup / पिछोला झील सफाई',
      date: 'Sunday, June 16, 2025',
      time: '8:00 AM - 11:00 AM',
      location: 'Lake Pichola Ghats / पिछोला झील घाट',
      participants: 92,
      description: 'Help us maintain the beauty of Lake Pichola by participating in our cleanup drive. Breakfast provided for all volunteers. / पिछोला झील की सुंदरता बनाए रखने में हमारी मदद करें।',
      type: 'cleanup' as const
    },
    {
      title: 'Sunday Food Distribution Drive / रविवार भोजन वितरण',
      date: 'Sunday, June 23, 2025',
      time: '12:00 PM - 4:00 PM',
      location: 'Sukhadia Circle / सुखाड़िया सर्कल',
      participants: 89,
      description: 'Weekly food distribution drive to help feed the hungry. Volunteers needed for cooking, packaging, and distribution. / भूखों को खिलाने के लिए साप्ताहिक भोजन वितरण।',
      type: 'cleanup' as const
    },
    {
      title: 'Urban Forest Creation / शहरी वन निर्माण',
      date: 'Sunday, June 23, 2025',
      time: '7:30 AM - 10:30 AM',
      location: 'Udaipur Green Belt / उदयपुर ग्रीन बेल्ट',
      participants: 67,
      description: 'Large-scale plantation drive to create an urban forest in Udaipur. Plant trees and watch them grow into a beautiful green space. / उदयपुर में शहरी वन बनाने के लिए बड़े पैमाने पर वृक्षारोपण।',
      type: 'plantation' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              आगामी <span className="text-gradient">पर्यावरण कार्यक्रम</span>
              <br />
              <span className="text-2xl">Upcoming Environmental Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              हमारे साप्ताहिक पर्यावरण गतिविधियों में शामिल हों और उदयपुर में वास्तविक बदलाव लाएं।
              <br />
              <span className="text-lg">Join our weekly environmental activities and make a real difference in Udaipur.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                अपना कार्यक्रम आयोजित करना चाहते हैं?
                <br />
                <span className="text-lg text-muted-foreground">Want to Organize Your Own Event?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                क्या आपके पास कोई सामुदायिक पर्यावरण कार्यक्रम या भोजन दान अभियान का विचार है? हम आपका समर्थन करना चाहेंगे!
                <br />
                <span className="text-sm">Have an idea for a community environmental event or food donation drive? We'd love to support you!</span>
              </p>
              <button className="gradient-nature text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                कार्यक्रम प्रस्तावित करें / Propose an Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
