
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, Phone, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CommunityForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interests: [] as string[]
  });

  const interestOptions = [
    { id: 'environment', label: t('environment') },
    { id: 'education', label: t('education') },
    { id: 'healthcare', label: t('healthcare') },
    { id: 'infrastructure', label: t('infrastructure') }
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-xl">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-green-800 flex items-center justify-center gap-2">
          <Users className="w-6 h-6" />
          {t('joinCommunity')}
        </CardTitle>
        <p className="text-gray-600 mt-2">{t('joinCommunityDesc')}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              {t('fullName')}
            </label>
            <Input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className="border-green-300 focus:border-green-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {t('email')}
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="border-green-300 focus:border-green-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {t('phone')}
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="border-green-300 focus:border-green-500"
              required
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">{t('interests')}</label>
            <div className="grid grid-cols-2 gap-3">
              {interestOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={formData.interests.includes(option.id)}
                    onCheckedChange={(checked) => handleInterestChange(option.id, !!checked)}
                  />
                  <label 
                    htmlFor={option.id} 
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-lg font-semibold"
          >
            {t('submitForm')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommunityForm;
