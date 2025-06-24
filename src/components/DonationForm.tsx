
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
    additionalNotes: '',
    foodType: '',
    expiryDate: '',
    servings: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
    
    const donationType = formData.itemType === 'food' ? 'Food' : 
                        formData.itemType === 'seeds' ? 'Seeds' : 'E-Waste';
    
    toast({
      title: `${donationType} Donation Submitted! 🌱`,
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
      additionalNotes: '',
      foodType: '',
      expiryDate: '',
      servings: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFoodDonation = formData.itemType === 'food';

  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/95 to-slate-800/95 border-gray-700 backdrop-blur-sm shadow-2xl">
      <CardHeader className="bg-gradient-to-br from-gray-700/50 to-slate-700/50 border-b border-gray-600">
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Donate for a Greener Tomorrow
        </CardTitle>
        <p className="text-center text-gray-300">
          Your seeds, e-waste, and food donations help us create a sustainable future for Udaipur
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="itemType" className="text-green-400 font-medium">Donation Type *</Label>
              <Select value={formData.itemType} onValueChange={(value) => handleInputChange('itemType', value)}>
                <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-200 focus:border-green-500">
                  <SelectValue placeholder="Select donation type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="seeds" className="text-gray-200 focus:bg-gray-700">Seeds 🌱</SelectItem>
                  <SelectItem value="e-waste" className="text-gray-200 focus:bg-gray-700">E-Waste ♻️</SelectItem>
                  <SelectItem value="food" className="text-gray-200 focus:bg-gray-700">Food 🍽️</SelectItem>
                  <SelectItem value="multiple" className="text-gray-200 focus:bg-gray-700">Multiple Types</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="quantity" className="text-gray-300">Quantity/Weight</Label>
              <Input
                id="quantity"
                placeholder={isFoodDonation ? "e.g., 50 meals, 10kg rice" : "e.g., 2 kg seeds, 5 items"}
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:border-green-500"
              />
            </div>
          </div>

          {/* Food-specific fields */}
          {isFoodDonation && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-orange-900/20 border border-orange-800/50 rounded-lg">
              <div>
                <Label htmlFor="foodType" className="text-orange-400 font-medium">Food Type *</Label>
                <Select value={formData.foodType} onValueChange={(value) => handleInputChange('foodType', value)}>
                  <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-200 focus:border-orange-500">
                    <SelectValue placeholder="Select food type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="cooked-meals" className="text-gray-200 focus:bg-gray-700">Cooked Meals</SelectItem>
                    <SelectItem value="packaged-food" className="text-gray-200 focus:bg-gray-700">Packaged Food</SelectItem>
                    <SelectItem value="fresh-produce" className="text-gray-200 focus:bg-gray-700">Fresh Produce</SelectItem>
                    <SelectItem value="groceries" className="text-gray-200 focus:bg-gray-700">Groceries/Staples</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="servings" className="text-gray-300">Estimated Servings</Label>
                <Input
                  id="servings"
                  placeholder="e.g., 50 people"
                  value={formData.servings}
                  onChange={(e) => handleInputChange('servings', e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:border-orange-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="expiryDate" className="text-gray-300">Best Before/Expiry Date</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-gray-200 focus:border-orange-500"
                />
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="contactName" className="text-green-400 font-medium">Contact Name *</Label>
            <Input
              id="contactName"
              placeholder="Your full name"
              value={formData.contactName}
              onChange={(e) => handleInputChange('contactName', e.target.value)}
              required
              className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:border-green-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="contactPhone" className="text-green-400 font-medium">Phone Number *</Label>
              <Input
                id="contactPhone"
                placeholder="+91 12345 67890"
                value={formData.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                required
                className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:border-green-500"
              />
            </div>
            
            <div>
              <Label htmlFor="contactEmail" className="text-gray-300">Email Address</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="your@email.com"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="pickupAddress" className="text-gray-300">Pickup Address (Optional)</Label>
            <Textarea
              id="pickupAddress"
              placeholder="Full address for pickup (if needed)"
              value={formData.pickupAddress}
              onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
              rows={3}
              className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:border-green-500 resize-none"
            />
          </div>

          <div>
            <Label htmlFor="additionalNotes" className="text-gray-300">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any special instructions or information"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              rows={3}
              className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:border-green-500 resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit Donation 💚
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
