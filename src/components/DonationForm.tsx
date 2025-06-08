
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const DonationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    itemType: '',
    quantity: '',
    pickupAddress: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
    
    toast({
      title: "Donation Submitted! 🌱",
      description: "Thank you for your contribution. We'll contact you soon for pickup details.",
    });
    
    // Reset form
    setFormData({
      itemType: '',
      quantity: '',
      pickupAddress: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      additionalNotes: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-gradient">Donate for a Greener Tomorrow</CardTitle>
        <p className="text-center text-gray-600">
          Your seeds and e-waste donations help us create a sustainable future for Udaipur
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="itemType">Donation Type *</Label>
              <Select value={formData.itemType} onValueChange={(value) => handleInputChange('itemType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select donation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seeds">Seeds 🌱</SelectItem>
                  <SelectItem value="e-waste">E-Waste ♻️</SelectItem>
                  <SelectItem value="both">Both Seeds & E-Waste</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="quantity">Quantity/Weight</Label>
              <Input
                id="quantity"
                placeholder="e.g., 2 kg seeds, 5 items"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="contactName">Contact Name *</Label>
            <Input
              id="contactName"
              placeholder="Your full name"
              value={formData.contactName}
              onChange={(e) => handleInputChange('contactName', e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="contactPhone">Phone Number *</Label>
              <Input
                id="contactPhone"
                placeholder="+91 12345 67890"
                value={formData.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="contactEmail">Email Address</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="your@email.com"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="pickupAddress">Pickup Address (Optional)</Label>
            <Textarea
              id="pickupAddress"
              placeholder="Full address for pickup (if needed)"
              value={formData.pickupAddress}
              onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any special instructions or information"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-nature text-white py-3 text-lg hover:opacity-90 transition-opacity"
          >
            Submit Donation 💚
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
