import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FoodConsumptionChart: React.FC = () => {
  const data = [
    { category: 'Fruits', daily: 2.1, weekly: 14.7, recommended: 21 },
    { category: 'Vegetables', daily: 2.8, weekly: 19.6, recommended: 28 },
    { category: 'Grains', daily: 5.2, weekly: 36.4, recommended: 42 },
    { category: 'Protein', daily: 3.1, weekly: 21.7, recommended: 21 },
    { category: 'Dairy', daily: 1.8, weekly: 12.6, recommended: 21 },
    { category: 'Snacks', daily: 4.2, weekly: 29.4, recommended: 14 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          <p className="text-sm text-blue-600">Daily: {payload[0]?.value} servings</p>
          <p className="text-sm text-green-600">Weekly: {payload[1]?.value} servings</p>
          <p className="text-sm text-orange-600">Recommended: {payload[2]?.value} servings/week</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Food Group Consumption</h3>
          <p className="text-sm text-gray-600">Average servings per student</p>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
            <span>Daily</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span>Weekly</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
            <span>Recommended</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="daily" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="weekly" fill="#10b981" radius={[2, 2, 0, 0]} />
            <Bar dataKey="recommended" fill="#f59e0b" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-red-50 rounded-lg">
        <p className="text-sm text-red-800">
          <strong>Concern:</strong> Snack consumption is 110% above recommended levels, while fruit and vegetable intake remains below targets.
        </p>
      </div>
    </motion.div>
  );
};

export default FoodConsumptionChart;