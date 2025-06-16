
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Statistics from './Statistics';
import { MapPin, Calendar, Users, Target, Award, Trophy, TrendingUp, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const PublicDashboard = () => {
  const monthlyGoals = [
    { title: 'Trees to Plant', current: 2847, target: 3000, unit: 'trees', color: 'bg-green-500' },
    { title: 'Cycling Distance', current: 15623, target: 20000, unit: 'km', color: 'bg-blue-500' },
    { title: 'E-Waste Collection', current: 845, target: 1000, unit: 'kg', color: 'bg-emerald-500' },
    { title: 'New Volunteers', current: 1250, target: 1500, unit: 'people', color: 'bg-purple-500' }
  ];

  const recentActivities = [
    {
      title: 'Fatehsagar Lake Cleanup',
      date: 'Dec 1, 2024',
      participants: 85,
      impact: '120kg waste collected',
      status: 'completed'
    },
    {
      title: 'Cycling Marathon - City Palace Route',
      date: 'Nov 26, 2024',
      participants: 142,
      impact: '1,280km total distance',
      status: 'completed'
    },
    {
      title: 'Tree Plantation Drive - Sajjangarh',
      date: 'Nov 24, 2024',
      participants: 96,
      impact: '150 saplings planted',
      status: 'completed'
    }
  ];

  const wardPerformance = [
    { ward: 'Ward 1 - City Palace', trees: 285, cleanups: 4, volunteers: 120, rank: 3 },
    { ward: 'Ward 2 - Fatehsagar', trees: 342, cleanups: 6, volunteers: 156, rank: 1 },
    { ward: 'Ward 3 - Udaipole', trees: 198, cleanups: 3, volunteers: 89, rank: 4 },
    { ward: 'Ward 4 - Surajpole', trees: 267, cleanups: 5, volunteers: 134, rank: 2 }
  ];

  // Sample data for charts
  const monthlyData = [
    { month: 'Jul', trees: 180, volunteers: 45, cleanups: 8 },
    { month: 'Aug', trees: 250, volunteers: 62, cleanups: 12 },
    { month: 'Sep', trees: 320, volunteers: 78, cleanups: 15 },
    { month: 'Oct', trees: 280, volunteers: 89, cleanups: 18 },
    { month: 'Nov', trees: 400, volunteers: 95, cleanups: 22 },
    { month: 'Dec', trees: 342, volunteers: 120, cleanups: 25 }
  ];

  const categoryData = [
    { name: 'Tree Plantation', value: 45, color: '#10B981' },
    { name: 'Waste Management', value: 30, color: '#3B82F6' },
    { name: 'Water Conservation', value: 15, color: '#06B6D4' },
    { name: 'Community Events', value: 10, color: '#8B5CF6' }
  ];

  const impactMetrics = [
    { title: 'CO2 Absorbed', value: '1,250', unit: 'tons', icon: TrendingUp, color: 'text-green-600' },
    { title: 'Water Saved', value: '50,000', unit: 'liters', icon: BarChart3, color: 'text-blue-600' },
    { title: 'Waste Recycled', value: '2,500', unit: 'kg', icon: Target, color: 'text-emerald-600' },
    { title: 'Lives Impacted', value: '15,000', unit: 'people', icon: Users, color: 'text-purple-600' }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-4 h-4 text-yellow-500" />;
    if (rank === 2) return <Award className="w-4 h-4 text-gray-400" />;
    if (rank === 3) return <Award className="w-4 h-4 text-amber-600" />;
    return null;
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 slide-up">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          Udaipur <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Civic Impact</span> Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Real-time transparency into our collective environmental efforts. Every action counts towards a greener, cleaner Udaipur.
        </p>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((metric, index) => (
          <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{metric.title}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                    <span className="text-sm text-muted-foreground">{metric.unit}</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${metric.color.split('-')[1]}-100 to-${metric.color.split('-')[1]}-200 flex items-center justify-center`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Statistics */}
      <div className="fade-in">
        <Statistics />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Progress Chart */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              Monthly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="trees" stroke="#10B981" strokeWidth={3} />
                <Line type="monotone" dataKey="volunteers" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Distribution */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              Activity Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Goals */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 card-hover">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            Monthly Goals Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monthlyGoals.map((goal, index) => (
              <div key={index} className="space-y-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground text-lg">{goal.title}</span>
                  <span className="text-sm text-muted-foreground font-medium">
                    {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={(goal.current / goal.target) * 100} className="h-4" />
                  <div className="text-right text-sm font-medium text-primary">
                    {Math.round((goal.current / goal.target) * 100)}% Complete
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ward Performance Chart */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            Ward Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={wardPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ward" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="trees" fill="#10B981" />
              <Bar dataKey="volunteers" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 card-hover">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            Recent Community Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-lg">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{activity.participants} participants</span>
                  </div>
                  <p className="text-sm text-primary font-semibold">{activity.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ward-wise Performance Leaderboard */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 card-hover">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            Ward-wise Performance Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold text-foreground">Rank</th>
                  <th className="text-left p-4 font-semibold text-foreground">Ward</th>
                  <th className="text-center p-4 font-semibold text-foreground">Trees Planted</th>
                  <th className="text-center p-4 font-semibold text-foreground">Cleanups</th>
                  <th className="text-center p-4 font-semibold text-foreground">Volunteers</th>
                </tr>
              </thead>
              <tbody>
                {wardPerformance.map((ward, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{ward.rank}</span>
                        {getRankIcon(ward.rank)}
                      </div>
                    </td>
                    <td className="p-4 text-foreground font-medium">{ward.ward}</td>
                    <td className="p-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                        {ward.trees}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                        {ward.cleanups}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold">
                        {ward.volunteers}
                      </span>
                    </td>
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
