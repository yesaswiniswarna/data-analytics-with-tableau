import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Apple, Utensils, Heart, AlertTriangle } from 'lucide-react';

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: 'Healthy Eating Score',
      value: '78.5%',
      change: '+5.2%',
      trend: 'up',
      icon: Heart,
      color: 'green',
      description: 'Overall nutritional quality'
    },
    {
      title: 'Fruit & Vegetable Intake',
      value: '3.2',
      change: '-0.8',
      trend: 'down',
      icon: Apple,
      color: 'red',
      description: 'Servings per day'
    },
    {
      title: 'Meal Frequency',
      value: '2.8',
      change: '+0.3',
      trend: 'up',
      icon: Utensils,
      color: 'blue',
      description: 'Meals per day'
    },
    {
      title: 'Nutritional Deficiencies',
      value: '23%',
      change: '+2.1%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'orange',
      description: 'Students at risk'
    }
  ];

  const getColorClasses = (color: string, trend: string) => {
    const colors = {
      green: trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50',
      red: trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50',
      blue: trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50',
      orange: trend === 'up' ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${
                stat.color === 'green' ? 'bg-green-100' :
                stat.color === 'red' ? 'bg-red-100' :
                stat.color === 'blue' ? 'bg-blue-100' : 'bg-orange-100'
              }`}>
                <Icon className={`w-6 h-6 ${
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'red' ? 'text-red-600' :
                  stat.color === 'blue' ? 'text-blue-600' : 'text-orange-600'
                }`} />
              </div>
              <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(stat.color, stat.trend)}`}>
                <TrendIcon className="w-3 h-3 mr-1" />
                {stat.change}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;