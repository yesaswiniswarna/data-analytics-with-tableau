import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const DietaryTrendsChart: React.FC = () => {
  const data = [
    { month: 'Jan', healthyMeals: 65, fastFood: 35, homeCooked: 45 },
    { month: 'Feb', healthyMeals: 68, fastFood: 32, homeCooked: 48 },
    { month: 'Mar', healthyMeals: 62, fastFood: 38, homeCooked: 42 },
    { month: 'Apr', healthyMeals: 70, fastFood: 30, homeCooked: 52 },
    { month: 'May', healthyMeals: 75, fastFood: 25, homeCooked: 58 },
    { month: 'Jun', healthyMeals: 72, fastFood: 28, homeCooked: 55 },
    { month: 'Jul', healthyMeals: 78, fastFood: 22, homeCooked: 62 },
    { month: 'Aug', healthyMeals: 80, fastFood: 20, homeCooked: 65 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Dietary Trends Over Time</h3>
          <p className="text-sm text-gray-600">Monthly eating pattern analysis</p>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span>Healthy Meals</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
            <span>Fast Food</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
            <span>Home Cooked</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="healthyMeals" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              name="Healthy Meals"
            />
            <Line 
              type="monotone" 
              dataKey="fastFood" 
              stroke="#ef4444" 
              strokeWidth={3}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
              name="Fast Food"
            />
            <Line 
              type="monotone" 
              dataKey="homeCooked" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              name="Home Cooked"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Positive Trend:</strong> Healthy meal consumption has increased by 23% over the past 8 months.
        </p>
      </div>
    </motion.div>
  );
};

export default DietaryTrendsChart;