
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
  delay?: number;
  valueColor?: string;
}

const StatisticCard = ({ title, value, icon: Icon, color, description, trend, delay = 0, valueColor = 'text-green-600' }: StatisticCardProps) => (
  <Card className="card-hover bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg fade-in" style={{ animationDelay: `${delay}ms` }}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <div className={`p-3 rounded-full bg-gradient-to-br ${color} shadow-md`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className={`text-3xl font-bold ${valueColor} tracking-tight`}>{value}</div>
      {description && (
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      )}
      {trend && (
        <div className="flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit">
          <TrendingUp className="w-3 h-3 mr-1" />
          <span className="font-medium">{trend}</span>
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
      color: 'from-green-500 to-emerald-600',
      description: 'Across 12 wards in Udaipur',
      trend: '+12% this month',
      delay: 0,
      valueColor: 'text-green-600'
    },
    {
      title: 'Kilometers Cycled',
      value: '15,623',
      icon: Bike,
      color: 'from-blue-500 to-cyan-600',
      description: 'By 450+ participants',
      trend: '+8% this week',
      delay: 100,
      valueColor: 'text-blue-600'
    },
    {
      title: 'Lakes Cleaned',
      value: '12',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      description: 'Including Fatehsagar & Pichola',
      trend: '+2 new locations',
      delay: 200,
      valueColor: 'text-emerald-600'
    },
    {
      title: 'E-Waste Collected',
      value: '845kg',
      icon: Recycle,
      color: 'from-green-600 to-emerald-700',
      description: 'From 280+ households',
      trend: '+15% this month',
      delay: 300,
      valueColor: 'text-green-600'
    },
    {
      title: 'Active Volunteers',
      value: '1,250',
      icon: Award,
      color: 'from-purple-500 to-violet-600',
      description: 'Regular participants',
      trend: '+45 new members',
      delay: 400,
      valueColor: 'text-purple-600'
    },
    {
      title: 'Events Completed',
      value: '89',
      icon: TrendingUp,
      color: 'from-indigo-500 to-blue-600',
      description: 'Since January 2024',
      trend: '100% success rate',
      delay: 500,
      valueColor: 'text-indigo-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cityStats.map((stat, index) => (
        <StatisticCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Statistics;
