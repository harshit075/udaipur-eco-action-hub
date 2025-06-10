
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    events: 'Events',
    donate: 'Donate',
    dashboard: 'Dashboard',
    communityVoting: 'Community Voting',
    
    // Hero Section
    heroTitle: 'EcoUdaipur',
    heroSubtitle: 'Building a sustainable future for Udaipur through community action and civic engagement',
    donateButton: 'Make a Donation',
    watchStory: 'Watch Our Story',
    
    // Features
    foodDonation: 'Food Donation',
    foodDonationDesc: 'Help feed the hungry in our community with fresh, nutritious meals',
    communityVoting: 'Community Voting',
    communityVotingDesc: 'Have your say in local environmental projects and initiatives',
    treePlantation: 'Tree Plantation',
    treePlantationDesc: 'Join us in making Udaipur greener, one tree at a time',
    
    // Stats
    treesPlanted: 'Trees Planted',
    kmCycled: 'KM Cycled',
    lakesCleaned: 'Lakes Cleaned',
    thisWeek: 'This Week',
    
    // Events
    upcomingEvents: 'Upcoming Events',
    upcomingEventsDesc: 'Join our community events and make a difference',
    joinEvent: 'Join Event',
    viewAllEvents: 'View All Events',
    
    // Success Stories
    successStories: 'Success Stories',
    successStoriesDesc: 'See the real impact our community is making',
    lakeRestoration: 'Lake Restoration Project',
    lakeRestorationDesc: 'Successfully cleaned and restored Fateh Sagar Lake',
    urbanForest: 'Urban Forest Initiative',
    urbanForestDesc: 'Created green spaces in urban areas of Udaipur',
    wasteRemoved: 'tons of waste removed',
    treesPlantedCount: 'trees planted',
    
    // Call to Action
    readyToMakeDifference: 'Ready to Make a Difference?',
    ctaDescription: 'Join thousands of citizens working together to create a sustainable Udaipur',
    startJourney: 'Start Your Journey',
    makeUdaipurGreener: 'Let\'s Make Udaipur Greener Together',
    finalCtaDesc: 'Every action counts. Join our community and be part of the change.',
    makeDonation: 'Make a Donation',
    donationDesc: 'Support our environmental initiatives with your contribution',
    communityVotingCta: 'Vote on Projects',
    votingDesc: 'Have your say in upcoming environmental projects',
    voteNow: 'Vote Now',
    
    // Community Form
    joinCommunity: 'Join Our Community',
    joinCommunityDesc: 'Be part of the change and help build a sustainable Udaipur',
    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    interests: 'Areas of Interest',
    environment: 'Environment',
    education: 'Education',
    healthcare: 'Healthcare',
    infrastructure: 'Infrastructure',
    submitForm: 'Join Community',
    
    // City Voting
    voteForProject: 'Vote for City Projects',
    voteForProjectDesc: 'Help decide which environmental projects should be prioritized in Udaipur',
    projectVoting: 'Project Voting',
    
    // Common
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    aboutUs: 'About Us',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  },
  hi: {
    // Navigation
    home: 'होम',
    events: 'इवेंट्स',
    donate: 'दान करें',
    dashboard: 'डैशबोर्ड',
    communityVoting: 'सामुदायिक वोटिंग',
    
    // Hero Section
    heroTitle: 'इकोउदयपुर',
    heroSubtitle: 'सामुदायिक कार्य और नागरिक भागीदारी के माध्यम से उदयपुर के लिए एक टिकाऊ भविष्य का निर्माण',
    donateButton: 'दान करें',
    watchStory: 'हमारी कहानी देखें',
    
    // Features
    foodDonation: 'भोजन दान',
    foodDonationDesc: 'ताजे, पौष्टिक भोजन के साथ हमारे समुदाय के भूखे लोगों की मदद करें',
    communityVoting: 'सामुदायिक वोटिंग',
    communityVotingDesc: 'स्थानीय पर्यावरण परियोजनाओं और पहलों में अपनी राय दें',
    treePlantation: 'वृक्षारोपण',
    treePlantationDesc: 'उदयपुर को हरा-भरा बनाने में हमारे साथ जुड़ें, एक पेड़ एक बार में',
    
    // Stats
    treesPlanted: 'पेड़ लगाए गए',
    kmCycled: 'किमी साइकिल चलाई',
    lakesCleaned: 'झीलें साफ की गईं',
    thisWeek: 'इस सप्ताह',
    
    // Events
    upcomingEvents: 'आगामी कार्यक्रम',
    upcomingEventsDesc: 'हमारे सामुदायिक कार्यक्रमों में शामिल हों और बदलाव लाएं',
    joinEvent: 'इवेंट में शामिल हों',
    viewAllEvents: 'सभी इवेंट देखें',
    
    // Success Stories
    successStories: 'सफलता की कहानियां',
    successStoriesDesc: 'देखें कि हमारा समुदाय कितना वास्तविक प्रभाव डाल रहा है',
    lakeRestoration: 'झील पुनर्स्थापना परियोजना',
    lakeRestorationDesc: 'फतेह सागर झील को सफलतापूर्वक साफ और पुनर्स्थापित किया',
    urbanForest: 'शहरी वन पहल',
    urbanForestDesc: 'उदयपुर के शहरी क्षेत्रों में हरित स्थान बनाए',
    wasteRemoved: 'टन कचरा हटाया गया',
    treesPlantedCount: 'पेड़ लगाए गए',
    
    // Call to Action
    readyToMakeDifference: 'बदलाव लाने के लिए तैयार हैं?',
    ctaDescription: 'एक टिकाऊ उदयपुर बनाने के लिए मिलकर काम कर रहे हजारों नागरिकों से जुड़ें',
    startJourney: 'अपनी यात्रा शुरू करें',
    makeUdaipurGreener: 'आइए मिलकर उदयपुर को हरा-भरा बनाएं',
    finalCtaDesc: 'हर कार्य मायने रखता है। हमारे समुदाय से जुड़ें और बदलाव का हिस्सा बनें।',
    makeDonation: 'दान करें',
    donationDesc: 'अपने योगदान से हमारी पर्यावरणीय पहलों का समर्थन करें',
    communityVotingCta: 'परियोजनाओं पर वोट करें',
    votingDesc: 'आगामी पर्यावरणीय परियोजनाओं में अपनी राय दें',
    voteNow: 'अभी वोट करें',
    
    // Community Form
    joinCommunity: 'हमारे समुदाय से जुड़ें',
    joinCommunityDesc: 'बदलाव का हिस्सा बनें और एक टिकाऊ उदयपुर बनाने में मदद करें',
    fullName: 'पूरा नाम',
    email: 'ईमेल पता',
    phone: 'फोन नंबर',
    interests: 'रुचि के क्षेत्र',
    environment: 'पर्यावरण',
    education: 'शिक्षा',
    healthcare: 'स्वास्थ्य सेवा',
    infrastructure: 'बुनियादी ढांचा',
    submitForm: 'समुदाय में शामिल हों',
    
    // City Voting
    voteForProject: 'शहर की परियोजनाओं के लिए वोट करें',
    voteForProjectDesc: 'यह तय करने में मदद करें कि उदयपुर में कौन सी पर्यावरणीय परियोजनाओं को प्राथमिकता दी जानी चाहिए',
    projectVoting: 'परियोजना वोटिंग',
    
    // Common
    learnMore: 'और जानें',
    getStarted: 'शुरू करें',
    aboutUs: 'हमारे बारे में',
    contact: 'संपर्क',
    privacy: 'गोपनीयता नीति',
    terms: 'सेवा की शर्तें'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
