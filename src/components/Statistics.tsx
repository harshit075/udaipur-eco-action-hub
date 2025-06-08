
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TreePine, Bike, Users, Recycle, Award, TrendingUp } from 'lucide-react';

interface StatisticCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  color: string;
  description?: string;
  trend?: string;
}

const StatisticCard = ({ title, value, icon: Icon, color, description, trend }: StatisticCardProps) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className={`h-4 w-4 ${color}`} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      {description && (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}
      {trend && (
        <div className="flex items-center text-xs text-green-600 mt-2">
          <TrendingUp className="w-3 h-3 mr-1" />
          {trend}
        </div>
      )}
    </CardContent>
  </Card>
);

const Statistics = () => {
  const cityStats = [
    {
      title: 'Trees Planted',
      value: '2,847',
      icon: TreePine,
      color: 'text-green-600',
      description: 'Across 12 wards in Udaipur',
      trend: '+12% this month'
    },
    {
      title: 'Kilometers Cycled',
      value: '15,623',
      icon: Bike,
      color: 'text-blue-600',
      description: 'By 450+ participants',
      trend: '+8% this week'
    },
    {
      title: 'Lakes Cleaned',
      value: '12',
      icon: Users,
      color: 'text-emerald-600',
      description: 'Including Fatehsagar & Pichola',
      trend: '+2 new locations'
    },
    {
      title: 'E-Waste Collected',
      value: '845kg',
      icon: Recycle,
      color: 'text-orange-600',
      description: 'From 280+ households',
      trend: '+15% this month'
    },
    {
      title: 'Active Volunteers',
      value: '1,250',
      icon: Award,
      color: 'text-purple-600',
      description: 'Regular participants',
      trend: '+45 new members'
    },
    {
      title: 'Events Completed',
      value: '89',
      icon: TrendingUp,
      color: 'text-indigo-600',
      description: 'Since January 2024',
      trend: '100% success rate'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cityStats.map((stat, index) => (
        <StatisticCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Statistics;
