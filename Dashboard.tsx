import React from 'react';
import { motion } from 'framer-motion';
import StatsCards from '../components/StatsCards';
import NutritionalChart from '../components/NutritionalChart';
import DietaryTrendsChart from '../components/DietaryTrendsChart';
import HealthMetricsChart from '../components/HealthMetricsChart';
import FoodConsumptionChart from '../components/FoodConsumptionChart';
import AlertsPanel from '../components/AlertsPanel';
import RecentActivity from '../components/RecentActivity';

const Dashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-2">College Food Choices Dashboard</h1>
          <p className="text-blue-100 text-lg">
            Comprehensive analysis and dietary strategies for student health optimization
          </p>
        </motion.div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold mb-1">Active Students</h3>
            <p className="text-2xl font-bold">2,847</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold mb-1">Data Points</h3>
            <p className="text-2xl font-bold">125K+</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold mb-1">Health Score</h3>
            <p className="text-2xl font-bold">78.5%</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NutritionalChart />
        <DietaryTrendsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HealthMetricsChart />
        <FoodConsumptionChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <AlertsPanel />
      </div>
    </motion.div>
  );
};

export default Dashboard;