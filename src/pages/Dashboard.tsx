
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TreePine, Bike, Users, Award, Star } from 'lucide-react';

const Dashboard = () => {
  const userStats = {
    name: 'Eco Warrior',
    totalImpact: 95,
    treesPlanted: 12,
    cyclingDistance: 245,
    eventsAttended: 8,
    seedsDonated: 5.2,
    eWasteRecycled: 3.1
  };

  const badges = [
    { name: 'Tree Guardian', earned: true, icon: TreePine },
    { name: 'Cycling Champion', earned: true, icon: Bike },
    { name: 'Community Hero', earned: false, icon: Users },
    { name: 'Eco Legend', earned: false, icon: Award },
  ];

  const recentActivities = [
    { date: 'June 2, 2025', activity: 'Planted 3 trees at Fateh Sagar', points: 15 },
    { date: 'May 26, 2025', activity: 'Completed 25km cycling marathon', points: 10 },
    { date: 'May 19, 2025', activity: 'Donated 2kg seeds', points: 8 },
    { date: 'May 12, 2025', activity: 'Lake cleanup volunteer', points: 12 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your <span className="text-gradient">Environmental Impact</span>
          </h1>
          <p className="text-xl text-gray-600">
            Track your contributions to making Udaipur greener and cleaner
          </p>
        </div>

        {/* Welcome Card */}
        <Card className="mb-8 gradient-nature text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, {userStats.name}! 👋</h2>
                <p className="text-green-100">Your environmental impact score: {userStats.totalImpact}/100</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{userStats.totalImpact}</div>
                <div className="text-green-100">Impact Points</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trees Planted</CardTitle>
              <TreePine className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.treesPlanted}</div>
              <p className="text-xs text-muted-foreground">+3 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Distance Cycled</CardTitle>
              <Bike className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.cyclingDistance}km</div>
              <p className="text-xs text-muted-foreground">+25km this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.eventsAttended}</div>
              <p className="text-xs text-muted-foreground">2 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <Award className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.seedsDonated + userStats.eWasteRecycled}kg</div>
              <p className="text-xs text-muted-foreground">Seeds & E-waste</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Badges Section */}
          <Card>
            <CardHeader>
              <CardTitle>Your Eco Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      badge.earned
                        ? 'border-primary bg-green-50 text-primary'
                        : 'border-gray-200 bg-gray-50 text-gray-400'
                    }`}
                  >
                    <badge.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium text-sm">{badge.name}</div>
                    {badge.earned && (
                      <Star className="w-4 h-4 mx-auto mt-1 text-yellow-500 fill-current" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{activity.activity}</div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                    <div className="text-primary font-bold">+{activity.points}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Goal Section */}
        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Next Milestone</h3>
            <p className="text-gray-600 mb-6">
              Plant 3 more trees to unlock the "Forest Guardian" badge and reach 100 impact points!
            </p>
            <button className="gradient-nature text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Join Next Plantation Event
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
