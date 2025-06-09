
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';

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
      text: 'Hello! I\'m EcoBot, your environmental assistant. I can help you with donations, events, impact tracking, and community projects. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const commonQuestions = [
    { 
      keywords: ["donate", "seed", "seeds", "plant"], 
      answer: "You can donate seeds by visiting our Donate page. We accept native species seeds for plantation drives. We also accept food donations and e-waste for proper recycling." 
    },
    { 
      keywords: ["food", "donation", "hungry", "meal"], 
      answer: "We organize food donation drives every Sunday! You can donate food items or host your own food drive. Check our Events page to join upcoming food donation events." 
    },
    { 
      keywords: ["event", "events", "when", "next", "upcoming"], 
      answer: "We organize events every Sunday including tree plantation drives, lake cleanups, cycling marathons, and food donation drives. Visit our Events page for the complete schedule." 
    },
    { 
      keywords: ["track", "dashboard", "impact", "contribution"], 
      answer: "Visit your Dashboard to see your personal environmental impact including trees planted, waste collected, events attended, and food donated. Every action counts!" 
    },
    { 
      keywords: ["waste", "e-waste", "electronic", "recycle"], 
      answer: "We accept all types of electronic waste including phones, computers, batteries, tablets, and small appliances for proper eco-friendly recycling." 
    },
    { 
      keywords: ["vote", "voting", "project", "community"], 
      answer: "You can vote on local community projects on our Community Voting page. Share your opinion on infrastructure, environmental, and technology projects shaping Udaipur's future." 
    },
    { 
      keywords: ["lake", "cleanup", "water", "pollution"], 
      answer: "We organize regular lake cleanup drives to preserve Udaipur's beautiful lakes. Join us to keep Fateh Sagar, Pichola, and other lakes clean and pristine." 
    },
    { 
      keywords: ["cycle", "cycling", "bike", "marathon"], 
      answer: "Join our cycling marathons to promote eco-friendly transportation! We organize group cycling events around Udaipur's scenic routes every weekend." 
    },
    { 
      keywords: ["tree", "plant", "plantation", "forest"], 
      answer: "Our tree plantation drives happen every Sunday at different locations. We've planted over 2,847 trees so far! Bring your family and help us create urban forests." 
    },
    { 
      keywords: ["volunteer", "help", "join", "participate"], 
      answer: "Great! You can volunteer by joining our events, donating items, voting on projects, or hosting your own drives. Every small action creates a big environmental impact." 
    }
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const qa of commonQuestions) {
      if (qa.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return qa.answer;
      }
    }
    
    return "I'm here to help with environmental initiatives in Udaipur! You can ask me about:\n• Seed, food, and e-waste donations\n• Upcoming events and volunteering\n• Tracking your environmental impact\n• Community project voting\n• Lake cleanups and tree plantation\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputMessage),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-nature text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-50 border-0">
          <CardHeader className="gradient-nature text-white rounded-t-lg">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              EcoBot Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="gradient-nature text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
