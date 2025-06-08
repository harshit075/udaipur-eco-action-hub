
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
      text: 'Hello! I\'m here to help you with questions about EcoUdaipur. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const commonQuestions = [
    { question: "How can I donate seeds?", answer: "You can donate seeds by visiting our Donate page and filling out the seed donation form. We accept native species seeds for our plantation drives." },
    { question: "When are the next events?", answer: "We organize events every Sunday! Check our Events page for upcoming tree plantation drives, lake cleanups, and cycling marathons." },
    { question: "How can I track my impact?", answer: "Visit your Dashboard to see your personal contributions including trees planted, waste collected, and events attended." },
    { question: "What types of e-waste do you accept?", answer: "We accept all types of electronic waste including phones, computers, batteries, and small appliances for proper recycling." }
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const qa of commonQuestions) {
      if (qa.question.toLowerCase().includes(lowerMessage) || 
          lowerMessage.includes(qa.question.toLowerCase().split(' ')[0])) {
        return qa.answer;
      }
    }
    
    if (lowerMessage.includes('donate') || lowerMessage.includes('seed')) {
      return commonQuestions[0].answer;
    } else if (lowerMessage.includes('event') || lowerMessage.includes('when')) {
      return commonQuestions[1].answer;
    } else if (lowerMessage.includes('track') || lowerMessage.includes('dashboard')) {
      return commonQuestions[2].answer;
    } else if (lowerMessage.includes('waste') || lowerMessage.includes('e-waste')) {
      return commonQuestions[3].answer;
    }
    
    return "I'm here to help with questions about our environmental initiatives. You can ask me about donations, events, tracking your impact, or e-waste collection!";
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
              EcoUdaipur Assistant
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
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
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
