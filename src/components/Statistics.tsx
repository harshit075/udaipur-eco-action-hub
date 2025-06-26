
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TreePine, Bike, Users, Recycle, Award, TrendingUp } from 'lucide-react';

interface StatisticCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  color: string;
  description?: string;
  trend?: string;
  delay?: number;
  valueColor?: string;
}

const StatisticCard = ({ title, value, icon: Icon, color, description, trend, delay = 0, valueColor = 'text-green-400' }: StatisticCardProps) => (
  <Card className="card-hover bg-gradient-to-br from-gray-800/90 to-slate-800/90 border border-gray-700 shadow-2xl fade-in backdrop-blur-sm hover:border-gray-600 transition-all duration-300" style={{ animationDelay: `${delay}ms` }}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
      <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
      <div className={`p-3 rounded-full bg-gradient-to-br ${color} shadow-lg border border-gray-600`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className={`text-3xl font-bold ${valueColor} tracking-tight`}>{value}</div>
      {description && (
        <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
      )}
      {trend && (
        <div className="flex items-center text-xs text-green-400 bg-green-900/30 border border-green-800/50 px-2 py-1 rounded-full w-fit">
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
      color: 'from-green-600 to-emerald-700',
      description: 'Across 12 wards in Udaipur',
      trend: '+12% this month',
      delay: 0,
      valueColor: 'text-green-400'
    },
    {
      title: 'Kilometers Cycled',
      value: '15,623',
      icon: Bike,
      color: 'from-blue-600 to-cyan-700',
      description: 'By 450+ participants',
      trend: '+8% this week',
      delay: 100,
      valueColor: 'text-blue-400'
    },
    {
      title: 'Lakes Cleaned',
      value: '12',
      icon: Users,
      color: 'from-emerald-600 to-teal-700',
      description: 'Including Fatehsagar & Pichola',
      trend: '+2 new locations',
      delay: 200,
      valueColor: 'text-emerald-400'
    },
    {
      title: 'E-Waste Collected',
      value: '845kg',
      icon: Recycle,
      color: 'from-green-700 to-emerald-800',
      description: 'From 280+ households',
      trend: '+15% this month',
      delay: 300,
      valueColor: 'text-green-400'
    },
    {
      title: 'Active Volunteers',
      value: '1,250',
      icon: Award,
      color: 'from-purple-600 to-violet-700',
      description: 'Regular participants',
      trend: '+45 new members',
      delay: 400,
      valueColor: 'text-purple-400'
    },
    {
      title: 'Events Completed',
      value: '89',
      icon: TrendingUp,
      color: 'from-indigo-600 to-blue-700',
      description: 'Since January 2024',
      trend: '100% success rate',
      delay: 500,
      valueColor: 'text-indigo-400'
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
