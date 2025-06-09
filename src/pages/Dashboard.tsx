
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PublicDashboard from '@/components/PublicDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TreePine, Bike, Users, Award, Calendar, BarChart3, Heart } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('public');

  const userStats = {
    treesPlanted: 15,
    eventsAttended: 8,
    kmCycled: 127,
    eWasteDonated: '12kg',
    lakesHelped: 3,
    mealsProvided: 25
  };

  const userBadges = [
    { name: 'Tree Planter / वृक्ष रोपक', icon: TreePine, earned: true, description: 'Planted 10+ trees / 10+ पेड़ लगाए' },
    { name: 'Cycling Champion / साइकिलिंग चैंपियन', icon: Bike, earned: true, description: 'Cycled 100+ km / 100+ किमी साइकिल चलाई' },
    { name: 'Lake Guardian / झील संरक्षक', icon: Users, earned: false, description: 'Participate in 5 lake cleanups / 5 झील सफाई में भाग लें' },
    { name: 'Eco Warrior / पर्यावरण योद्धा', icon: Award, earned: false, description: 'Complete 20 events / 20 कार्यक्रम पूरे करें' },
    { name: 'Food Helper / भोजन सहायक', icon: Heart, earned: true, description: 'Helped serve 20+ meals / 20+ भोजन परोसने में मदद की' }
  ];

  const recentActivities = [
    { date: 'Dec 1, 2024', activity: 'Fatehsagar Lake Cleanup / फतेह सागर झील सफाई', impact: 'Collected 8kg waste / 8 किग्रा कचरा एकत्र किया' },
    { date: 'Nov 26, 2024', activity: 'Cycling Marathon / साइकिलिंग मैराथन', impact: 'Cycled 15km / 15 किमी साइकिल चलाई' },
    { date: 'Nov 24, 2024', activity: 'Tree Plantation / वृक्षारोपण', impact: 'Planted 3 saplings / 3 पौधे लगाए' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            प्रभाव <span className="text-gradient">डैशबोर्ड</span>
            <br />
            <span className="text-2xl">Impact Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            सामुदायिक प्रगति और आपके व्यक्तिगत पर्यावरणीय योगदान को ट्रैक करें
            <br />
            <span className="text-lg">Track community progress and your personal environmental contributions</span>
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="public" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              सार्वजनिक डैशबोर्ड / Public Dashboard
            </TabsTrigger>
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              मेरा प्रभाव / My Impact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="public" className="space-y-6">
            <PublicDashboard />
          </TabsContent>

          <TabsContent value="personal" className="space-y-6">
            {/* Personal Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.treesPlanted}</div>
                  <div className="text-sm text-muted-foreground">Trees Planted / पेड़ लगाए</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.eventsAttended}</div>
                  <div className="text-sm text-muted-foreground">Events / कार्यक्रम</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Bike className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.kmCycled}</div>
                  <div className="text-sm text-muted-foreground">KM Cycled / किमी साइकिल</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.eWasteDonated}</div>
                  <div className="text-sm text-muted-foreground">E-Waste / ई-वेस्ट</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.lakesHelped}</div>
                  <div className="text-sm text-muted-foreground">Lakes Helped / झीलें</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.mealsProvided}</div>
                  <div className="text-sm text-muted-foreground">Meals / भोजन</div>
                </CardContent>
              </Card>
            </div>

            {/* Badges Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  उपलब्धि बैज / Achievement Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userBadges.map((badge, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 ${
                      badge.earned 
                        ? 'border-primary bg-primary/10' 
                        : 'border-muted bg-muted/30'
                    }`}>
                      <div className="text-center">
                        <badge.icon className={`w-8 h-8 mx-auto mb-2 ${
                          badge.earned ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <h4 className={`font-semibold ${
                          badge.earned ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {badge.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {badge.description}
                        </p>
                        {badge.earned && (
                          <Badge variant="default" className="mt-2">अर्जित / Earned</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  आपकी हाल की गतिविधियां / Your Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">{activity.activity}</h4>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                      <Badge variant="secondary">{activity.impact}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
