import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🌱 Hello! I\'m EcoBot, your dedicated environmental assistant for Udaipur! I can help you with:\n\n• Tree plantation & seed donations\n• Food waste management & donations\n• E-waste recycling programs\n• Community events & volunteering\n• Impact tracking & statistics\n• Lake conservation initiatives\n• Sustainable transportation\n\nHow can I help make Udaipur greener today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const commonQuestions = [
    { 
      keywords: ["donate", "seed", "seeds", "plant", "tree", "plantation"], 
      answer: "🌳 **Seed & Tree Donations:**\n\n• We accept native species seeds like Neem, Peepal, Banyan, and Gulmohar\n• Minimum quantity: 50 seeds or 1kg bulk seeds\n• We organize plantation drives every Sunday at 7 AM\n• Popular locations: Sajjangarh Hills, City Palace gardens, Fateh Sagar lakeside\n• Your seed donations help us maintain our goal of 5,000 trees annually\n• Each donated seed packet comes with planting instructions\n\n📍 Drop-off points: City Palace area, Sajjangarh Wildlife Sanctuary, and our community centers." 
    },
    { 
      keywords: ["food", "donation", "hungry", "meal", "feeding", "hunger"], 
      answer: "🍽️ **Food Donation Program:**\n\n• **Daily Operations:** We distribute 200+ meals daily to underprivileged families\n• **Sunday Drives:** Special community food drives every Sunday at 6 PM\n• **Accepted Items:** Cooked meals, packaged food, fresh vegetables, grains, pulses\n• **Safety Guidelines:** All food must be within expiry dates, properly packaged\n• **Impact:** Over 50,000 meals distributed in the last year\n• **Locations:** Jagdish Temple area, Clock Tower, Railway Station\n\n🏠 **Host Your Own:** We help you organize food drives in your locality with our volunteer support team." 
    },
    { 
      keywords: ["event", "events", "when", "next", "upcoming", "schedule", "calendar"], 
      answer: "📅 **Weekly Event Schedule:**\n\n🌳 **Sundays (7 AM):** Tree Plantation Drives\n📍 Rotating locations: Sajjangarh, Nehru Garden, Gulab Bagh\n\n🏊 **Saturdays (6 AM):** Lake Cleanup Drives\n📍 Fateh Sagar, Pichola, Udai Sagar\n\n🚴 **Saturdays (5 PM):** Eco-Cycling Marathon\n📍 City Palace → Jagmandir → Jag Niwas route\n\n🍽️ **Daily (6 PM):** Food Distribution\n📍 Multiple locations across the city\n\n♻️ **Monthly:** E-waste Collection Drives\n📍 Community centers and schools\n\n🗳️ **Ongoing:** Community Project Voting\n📍 Online platform for local development projects" 
    },
    { 
      keywords: ["track", "dashboard", "impact", "contribution", "statistics", "progress"], 
      answer: "📊 **Personal Impact Dashboard:**\n\n🌳 **Trees Planted:** Track your plantation contributions\n• Personal tree counter with GPS locations\n• Growth updates with photos from our field team\n• Carbon offset calculations\n\n♻️ **Waste Collected:** Monitor your cleanup efforts\n• Plastic, paper, metal collection logs\n• Environmental impact measurements\n\n🍽️ **Meals Provided:** Food donation tracking\n• Number of families helped\n• Nutritional impact assessments\n\n🚴 **Events Attended:** Participation history\n• Eco-points earned for each activity\n• Community leaderboards\n• Achievement badges and certificates\n\n📈 **Total Community Impact:** See collective progress towards our 2024 goals of 5,000 trees and 100,000 meals!" 
    },
    { 
      keywords: ["waste", "e-waste", "electronic", "recycle", "recycling", "plastic"], 
      answer: "♻️ **E-Waste & Recycling Program:**\n\n📱 **Electronics Accepted:**\n• Mobile phones, tablets, laptops\n• Batteries (all types), chargers, cables\n• Small appliances, LED bulbs\n• Computer parts, printers, keyboards\n\n🏭 **Processing:**\n• Partnership with certified recycling facilities in Jaipur\n• Data destruction certificates provided\n• Precious metal recovery for community funding\n• Safe disposal of hazardous materials\n\n📦 **Collection Points:**\n• Monthly drives at schools and colleges\n• Permanent drop-boxes at City Palace area\n• Door-to-door collection for bulk items (50+ pieces)\n\n💚 **Impact:** Last year we diverted 5 tons of e-waste from landfills and generated ₹25,000 for community projects!" 
    },
    { 
      keywords: ["vote", "voting", "project", "community", "development", "infrastructure"], 
      answer: "🗳️ **Community Project Voting:**\n\n🏛️ **Current Active Projects:**\n• Solar street lighting for rural areas\n• Waste segregation bins installation\n• Public EV charging stations\n• Rainwater harvesting systems\n• Community composting centers\n\n📊 **How It Works:**\n• Register on our platform with Aadhaar verification\n• Review detailed project proposals with cost breakdowns\n• Vote based on environmental impact and community need\n• Track implementation progress with regular updates\n\n💰 **Budget Allocation:**\n• Total annual budget: ₹50 lakhs from government and donations\n• Projects ranked by votes and environmental benefit score\n• Transparent fund utilization reports published monthly\n\n🏆 **Success Stories:** Our community voted projects have installed 200+ solar lights and 50 rainwater harvesting systems!" 
    },
    { 
      keywords: ["lake", "cleanup", "water", "pollution", "pichola", "fateh sagar"], 
      answer: "🏊 **Lake Conservation Initiative:**\n\n💧 **Our Beautiful Lakes:**\n• **Fateh Sagar:** Weekly cleanup drives, water quality monitoring\n• **Lake Pichola:** Heritage preservation with eco-friendly tourism\n• **Udai Sagar:** Rural community engagement programs\n• **Jaisamand:** Annual conservation camps\n\n🧹 **Cleanup Activities:**\n• **Saturday Morning Drives (6 AM):** Join 50+ volunteers weekly\n• **Equipment Provided:** Gloves, pickup tools, waste bags, life jackets\n• **Focus Areas:** Plastic removal, vegetation management, shoreline cleaning\n• **Safety First:** Professional supervision and first aid support\n\n📈 **Impact Metrics:**\n• 2 tons of waste removed monthly\n• 15% improvement in water quality scores\n• 500+ local families engaged in conservation\n• 25 species of migratory birds returned to Fateh Sagar\n\n🐟 **Ecosystem Restoration:** We've reintroduced native fish species and aquatic plants to restore natural balance!" 
    },
    { 
      keywords: ["cycle", "cycling", "bike", "marathon", "transport", "pollution"], 
      answer: "🚴 **Eco-Cycling Program:**\n\n🏁 **Weekend Marathons:**\n• **Route:** City Palace → Gangaur Ghat → Jagmandir → Jag Niwas (12 km)\n• **Time:** Saturdays 5 PM (cooler evening rides)\n• **Participants:** 30-80 cyclists weekly\n• **Bike Rental:** Available at ₹50 for the event\n\n🚲 **Daily Initiatives:**\n• **Bike-to-Work Wednesdays:** Office commuter groups\n• **School Cycling Programs:** Teaching children sustainable transport\n• **Cycle Maintenance Workshops:** Free monthly sessions\n• **Safe Cycling Routes:** Mapped family-friendly paths\n\n🌍 **Environmental Impact:**\n• Each cycling participant saves 2kg CO2 emissions per ride\n• Promoted cycling to 1,200+ people last year\n• Reduced car dependency by 15% among regular participants\n• Partnership with local businesses for cyclist-friendly infrastructure\n\n🏆 **Join Our Cycling Community:** WhatsApp group with 300+ active members sharing daily routes and tips!" 
    },
    { 
      keywords: ["volunteer", "help", "join", "participate", "contribute", "how to start"], 
      answer: "🤝 **Volunteer Opportunities:**\n\n👥 **Ways to Contribute:**\n• **Field Volunteer:** Join weekly events (4-6 hours commitment)\n• **Digital Volunteer:** Social media, content creation, online campaigns\n• **Skill-Based:** Use your profession (teaching, photography, accounting)\n• **Event Organizer:** Lead initiatives in your locality\n• **Fundraising:** Help with donation drives and corporate partnerships\n\n📱 **Getting Started:**\n1. Register on our website with basic details\n2. Attend orientation session (every first Sunday)\n3. Choose your preferred activities and schedule\n4. Get volunteer ID card and starter kit\n5. Join our WhatsApp groups for real-time updates\n\n🎓 **Training Provided:**\n• Environmental awareness workshops\n• First aid and safety protocols\n• Leadership development programs\n• Certificate courses in sustainability\n\n🏅 **Recognition Program:** Monthly volunteer awards, annual appreciation ceremony, and LinkedIn recommendations for active contributors!" 
    },
    { 
      keywords: ["start", "begin", "new", "first time", "beginner"], 
      answer: "🌟 **Welcome to Environmental Action!**\n\n📋 **Your First Steps:**\n1. **This Sunday:** Join our beginner-friendly tree plantation drive at 7 AM\n2. **Download:** Our EcoUdaipur app for event notifications\n3. **Follow:** @EcoUdaipur on social media for daily tips\n4. **Register:** For our monthly newsletter with impact updates\n\n🎯 **Easy Starting Points:**\n• **Donate:** Clean out closets and donate seeds/food/electronics\n• **Participate:** Join our weekend lake cleanup (no experience needed)\n• **Vote:** Log in to community voting platform for local projects\n• **Spread:** Share our initiatives with friends and family\n\n💡 **Pro Tips:**\n• Start small - even 1 hour monthly makes a difference\n• Bring friends - group activities are more fun and impactful\n• Document your journey - take photos and share your story\n• Ask questions - our community is super supportive!\n\n🎁 **Welcome Kit:** First-time volunteers get eco-friendly welcome kit with reusable water bottle, seed packets, and Udaipur environmental guidebook!" 
    },
    { 
      keywords: ["contact", "reach", "phone", "email", "address", "location"], 
      answer: "📞 **Contact Information:**\n\n🏢 **Main Office:**\n📍 Near City Palace, Gangaur Ghat Road, Udaipur - 313001\n📞 Phone: +91-294-2525252\n📧 Email: hello@ecoudaipur.org\n🕒 Hours: Monday-Saturday, 9 AM - 6 PM\n\n💬 **Quick Connect:**\n📱 WhatsApp: +91-9876543210 (24/7 for emergencies)\n🌐 Website: www.ecoudaipur.org\n📺 YouTube: EcoUdaipur Channel\n📸 Instagram: @ecoudaipur\n\n🚨 **Emergency Contacts:**\n• Wildlife rescue: +91-9999888777\n• Pollution reporting: +91-8888777666\n• Lake emergency: +91-7777666555\n\n📍 **Community Centers:**\n• Sajjangarh Area: Near Wildlife Sanctuary\n• Fateh Sagar: Opposite Nehru Garden\n• Old City: Near Jagdish Temple\n• Hiran Magri: Celebration Mall vicinity" 
    },
    { 
      keywords: ["cost", "money", "fee", "donation", "payment", "price"], 
      answer: "💰 **Costs & Donations:**\n\n🆓 **Completely Free:**\n• All environmental events and activities\n• Volunteer registration and training\n• Equipment for cleanup drives\n• Educational workshops and seminars\n• Community platform access\n\n💝 **Optional Donations:**\n• ₹100: Plants 2 saplings with 1-year care\n• ₹500: Feeds 10 families nutritious meals\n• ₹1000: Processes 50kg of e-waste safely\n• ₹2000: Funds 1 month of lake cleanup operations\n• ₹5000: Sponsors community event for 200 people\n\n🏦 **Payment Methods:**\n• UPI: ecoudaipur@paytm\n• Bank Transfer: Account details on website\n• Cash: At any community center\n• Cheque: Payable to 'Eco Udaipur Foundation'\n\n📊 **Transparency:** 100% of donations go directly to environmental projects. Monthly expense reports available on our website!" 
    }
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "🌱 Hello there! Welcome to EcoBot! I'm here to help you make a positive environmental impact in Udaipur. Whether you want to plant trees, clean lakes, donate food, or join our community events - I've got all the information you need. What interests you most?";
    }
    
    // Check for thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "🙏 You're very welcome! Thank you for caring about our environment. Every small action contributes to making Udaipur greener and more sustainable. Feel free to ask me anything else about our initiatives!";
    }
    
    for (const qa of commonQuestions) {
      if (qa.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return qa.answer;
      }
    }
    
    return "🤔 I'd love to help you with that! I specialize in environmental initiatives in Udaipur. Here's what I can assist you with:\n\n🌳 **Tree Plantation:** Seed donations, plantation drives, forest conservation\n🍽️ **Food Programs:** Meal donations, feeding drives, community kitchens\n♻️ **Waste Management:** E-waste recycling, cleanup drives, plastic reduction\n🏊 **Lake Conservation:** Water body cleanup, pollution prevention\n🚴 **Sustainable Transport:** Cycling programs, eco-friendly commuting\n🗳️ **Community Projects:** Local development voting, infrastructure improvements\n📊 **Impact Tracking:** Personal dashboard, statistics, progress monitoring\n\nCould you tell me more specifically what you'd like to know about? I'm here to help make your environmental journey in Udaipur meaningful and impactful!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay for better UX
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Dynamic Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 z-50 border-2 border-green-500/30 transform hover:scale-110 ${isOpen ? 'rotate-180' : 'hover:rotate-12'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300" />
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-yellow-300 animate-ping" />
          </div>
        )}
      </Button>

      {/* Dynamic Chat Window */}
      {isOpen && (
        <Card className={`fixed bottom-20 right-4 sm:bottom-28 sm:right-6 w-[90vw] max-w-sm sm:w-96 h-[70vh] sm:h-[500px] shadow-2xl z-50 border-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 backdrop-blur-lg transform transition-all duration-500 animate-in slide-in-from-bottom-4 slide-in-from-right-4`}>
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-t-lg border-b border-green-500/30 p-3 sm:p-4">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <Bot className="w-3 h-3 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm sm:text-base">EcoBot Assistant</div>
                <div className="text-xs text-green-100 font-normal">Your Environmental Guide</div>
              </div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-300 animate-pulse"></div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(70vh-80px)] sm:h-[420px] bg-gray-900/95 backdrop-blur-sm">
            {/* Dynamic Messages Container */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`max-w-[85%] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm whitespace-pre-line transition-all duration-300 hover:shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform hover:scale-105'
                        : 'bg-gradient-to-r from-gray-700 to-slate-700 text-gray-100 border border-gray-600/50 shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start animate-in slide-in-from-bottom-2">
                  <div className="bg-gradient-to-r from-gray-700 to-slate-700 text-gray-100 border border-gray-600/50 shadow-lg px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Dynamic Input Section */}
            <div className="p-3 sm:p-4 border-t border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
              <div className="flex gap-2 sm:gap-3">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about environmental initiatives..."
                  className="flex-1 bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20 rounded-xl text-sm transition-all duration-300 hover:bg-gray-700/70"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSendMessage} 
                  size="sm" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-3 sm:px-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-400 mt-2 text-center animate-pulse">
                Powered by EcoBot • Making Udaipur Greener 🌱
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
