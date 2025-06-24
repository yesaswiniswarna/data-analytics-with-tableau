import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const NutritionalChart: React.FC = () => {
  const data = [
    { nutrient: 'Protein', current: 65, recommended: 80, unit: 'g' },
    { nutrient: 'Carbs', current: 220, recommended: 250, unit: 'g' },
    { nutrient: 'Fat', current: 45, recommended: 60, unit: 'g' },
    { nutrient: 'Fiber', current: 18, recommended: 25, unit: 'g' },
    { nutrient: 'Vitamin C', current: 70, recommended: 90, unit: 'mg' },
    { nutrient: 'Calcium', current: 800, recommended: 1000, unit: 'mg' },
    { nutrient: 'Iron', current: 12, recommended: 18, unit: 'mg' }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className={`text-sm ${entry.dataKey === 'current' ? 'text-blue-600' : 'text-green-600'}`}>
              {entry.dataKey === 'current' ? 'Current' : 'Recommended'}: {entry.value}{data.find(d => d.nutrient === label)?.unit}
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
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Nutritional Intake Analysis</h3>
          <p className="text-sm text-gray-600">Current vs Recommended Daily Values</p>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
            <span>Current Intake</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span>Recommended</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="nutrient" 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="current" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="recommended" fill="#10b981" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Alert:</strong> Students are consuming 23% less fiber and 22% less Vitamin C than recommended levels.
        </p>
      </div>
    </motion.div>
  );
};

export default NutritionalChart;