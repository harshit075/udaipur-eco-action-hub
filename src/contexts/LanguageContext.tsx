
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    heroTitle: "Building a Greener Udaipur Together",
    heroSubtitle: "Join our community-driven initiative for a sustainable future.",
    donateButton: "Donate Now",
    watchStory: "Watch Our Story",
    
    // Stats
    treesPlanted: "Trees Planted",
    kmCycled: "KM Cycled",
    lakesCleaned: "Lakes Cleaned",
    thisWeek: "This Week",
    
    // Features
    foodDonation: "Food Donation",
    foodDonationDesc: "Help feed families in need",
    communityVoting: "Community Voting",
    communityVotingDesc: "Vote on city development projects",
    treePlantation: "Tree Plantation",
    treePlantationDesc: "Join our green movement",
    learnMore: "Learn More",
    
    // CTA
    readyToMakeDifference: "Ready to Make a Difference?",
    ctaDescription: "Join thousands of Udaipur citizens who are actively working towards a greener, cleaner, and more sustainable future.",
    startJourney: "Start Your Impact Journey",
    
    // Success Stories
    successStories: "Success Stories",
    successStoriesDesc: "Watch how we're transforming Udaipur together",
    lakeRestoration: "Lake Restoration Success",
    lakeRestorationDesc: "How we cleaned Pichola Lake with community effort",
    urbanForest: "Urban Forest Creation",
    urbanForestDesc: "Creating green spaces in the heart of Udaipur",
    wasteRemoved: "kg waste removed",
    treesPlantedCount: "trees planted",
    
    // Events
    upcomingEvents: "Upcoming Events",
    upcomingEventsDesc: "Join our next environmental activities",
    joinEvent: "Join Event",
    viewAllEvents: "View All Events",
    
    // Final CTA
    makeUdaipurGreener: "Ready to Make Udaipur Greener?",
    finalCtaDesc: "Every action counts. Whether it's planting a tree, donating food, or voting on community projects, your contribution helps build a sustainable future for Udaipur.",
    makeDonation: "Make a Donation",
    donationDesc: "Donate seeds, e-waste, or food to support our community initiatives",
    communityVotingCta: "Community Voting",
    votingDesc: "Have your say in city development projects and community decisions",
    voteNow: "Vote Now"
  },
  hi: {
    // Hero Section
    heroTitle: "मिलकर बनाएं हरा-भरा उदयपुर",
    heroSubtitle: "एक स्थायी भविष्य के लिए हमारी सामुदायिक पहल में शामिल हों।",
    donateButton: "दान करें",
    watchStory: "हमारी कहानी देखें",
    
    // Stats
    treesPlanted: "पेड़ लगाए गए",
    kmCycled: "साइकिल किलोमीटर",
    lakesCleaned: "झीलें साफ की गईं",
    thisWeek: "इस सप्ताह",
    
    // Features
    foodDonation: "खाद्य दान",
    foodDonationDesc: "जरूरतमंद परिवारों को भोजन दिलाने में मदद करें",
    communityVoting: "सामुदायिक मतदान",
    communityVotingDesc: "शहर विकास परियोजनाओं पर वोट दें",
    treePlantation: "वृक्षारोपण",
    treePlantationDesc: "हमारे हरित आंदोलन से जुड़ें",
    learnMore: "और जानें",
    
    // CTA
    readyToMakeDifference: "बदलाव लाने के लिए तैयार हैं?",
    ctaDescription: "हजारों उदयपुर निवासियों के साथ जुड़ें जो एक हरित, स्वच्छ और टिकाऊ भविष्य की दिशा में सक्रिय रूप से काम कर रहे हैं।",
    startJourney: "अपनी प्रभाव यात्रा शुरू करें",
    
    // Success Stories
    successStories: "सफलता की कहानियां",
    successStoriesDesc: "देखें कि हम मिलकर उदयपुर को कैसे बदल रहे हैं",
    lakeRestoration: "झील बहाली सफलता",
    lakeRestorationDesc: "सामुदायिक प्रयास से पिछोला झील की सफाई",
    urbanForest: "शहरी वन निर्माण",
    urbanForestDesc: "उदयपुर के हृदय में हरित स्थान बनाना",
    wasteRemoved: "किलो कचरा हटाया गया",
    treesPlantedCount: "पेड़ लगाए गए",
    
    // Events
    upcomingEvents: "आगामी कार्यक्रम",
    upcomingEventsDesc: "हमारी अगली पर्यावरणीय गतिविधियों में शामिल हों",
    joinEvent: "कार्यक्रम में शामिल हों",
    viewAllEvents: "सभी कार्यक्रम देखें",
    
    // Final CTA
    makeUdaipurGreener: "उदयपुर को हरा-भरा बनाने के लिए तैयार हैं?",
    finalCtaDesc: "हर कार्य मायने रखता है। चाहे पेड़ लगाना हो, भोजन दान करना हो, या सामुदायिक परियोजनाओं पर वोट देना हो, आपका योगदान उदयपुर के टिकाऊ भविष्य के निर्माण में मदद करता है।",
    makeDonation: "दान करें",
    donationDesc: "हमारी सामुदायिक पहलों का समर्थन करने के लिए बीज, ई-कचरा या भोजन दान करें",
    communityVotingCta: "सामुदायिक मतदान",
    votingDesc: "शहर विकास परियोजनाओं और सामुदायिक निर्णयों में अपनी बात रखें",
    voteNow: "अब वोट करें"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
