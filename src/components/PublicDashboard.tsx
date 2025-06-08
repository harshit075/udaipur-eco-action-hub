
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Statistics from './Statistics';
import { MapPin, Calendar, Users, Target } from 'lucide-react';

const PublicDashboard = () => {
  const monthlyGoals = [
    { title: 'Trees to Plant', current: 2847, target: 3000, unit: 'trees' },
    { title: 'Cycling Distance', current: 15623, target: 20000, unit: 'km' },
    { title: 'E-Waste Collection', current: 845, target: 1000, unit: 'kg' },
    { title: 'New Volunteers', current: 1250, target: 1500, unit: 'people' }
  ];

  const recentActivities = [
    {
      title: 'Fatehsagar Lake Cleanup',
      date: 'Dec 1, 2024',
      participants: 85,
      impact: '120kg waste collected'
    },
    {
      title: 'Cycling Marathon - City Palace Route',
      date: 'Nov 26, 2024',
      participants: 142,
      impact: '1,280km total distance'
    },
    {
      title: 'Tree Plantation Drive - Sajjangarh',
      date: 'Nov 24, 2024',
      participants: 96,
      impact: '150 saplings planted'
    }
  ];

  const wardPerformance = [
    { ward: 'Ward 1 - City Palace', trees: 285, cleanups: 4, volunteers: 120 },
    { ward: 'Ward 2 - Fatehsagar', trees: 342, cleanups: 6, volunteers: 156 },
    { ward: 'Ward 3 - Udaipole', trees: 198, cleanups: 3, volunteers: 89 },
    { ward: 'Ward 4 - Surajpole', trees: 267, cleanups: 5, volunteers: 134 }
  ];

  return (
    <div className="space-y-8">
      {/* Main Statistics */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Udaipur <span className="text-gradient">Civic Impact</span> Dashboard
        </h2>
        <Statistics />
      </div>

      {/* Monthly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Monthly Goals Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monthlyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{goal.title}</span>
                  <span className="text-muted-foreground">
                    {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
                  </span>
                </div>
                <Progress value={(goal.current / goal.target) * 100} className="h-2" />
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
            Recent Community Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-foreground">
                    <Users className="w-4 h-4" />
                    {activity.participants} participants
                  </div>
                  <p className="text-sm text-primary font-medium">{activity.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ward-wise Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Ward-wise Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium text-foreground">Ward</th>
                  <th className="text-center p-2 font-medium text-foreground">Trees Planted</th>
                  <th className="text-center p-2 font-medium text-foreground">Cleanups</th>
                  <th className="text-center p-2 font-medium text-foreground">Volunteers</th>
                </tr>
              </thead>
              <tbody>
                {wardPerformance.map((ward, index) => (
                  <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-2 text-foreground">{ward.ward}</td>
                    <td className="p-2 text-center text-green-600 font-semibold">{ward.trees}</td>
                    <td className="p-2 text-center text-blue-600 font-semibold">{ward.cleanups}</td>
                    <td className="p-2 text-center text-purple-600 font-semibold">{ward.volunteers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublicDashboard;
