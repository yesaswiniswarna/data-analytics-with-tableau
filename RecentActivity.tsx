import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, Users, FileText, Calendar } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'data_update',
      icon: Activity,
      title: 'Nutritional data updated',
      description: 'Latest meal consumption data processed for 2,847 students',
      time: '5 minutes ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'analysis',
      icon: TrendingUp,
      title: 'Weekly trend analysis completed',
      description: 'Identified 15% increase in healthy meal choices',
      time: '1 hour ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'alert',
      icon: Users,
      title: 'Health alert generated',
      description: 'Low vitamin C intake detected in 23% of student population',
      time: '2 hours ago',
      status: 'action_required'
    },
    {
      id: 4,
      type: 'report',
      icon: FileText,
      title: 'Monthly report generated',
      description: 'Comprehensive dietary analysis report for August 2024',
      time: '3 hours ago',
      status: 'completed'
    },
    {
      id: 5,
      type: 'schedule',
      icon: Calendar,
      title: 'Nutrition workshop scheduled',
      description: 'Response to irregular meal timing patterns',
      time: '4 hours ago',
      status: 'scheduled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'action_required':
        return 'bg-red-100 text-red-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'data_update':
        return 'text-blue-600 bg-blue-100';
      case 'analysis':
        return 'text-green-600 bg-green-100';
      case 'alert':
        return 'text-red-600 bg-red-100';
      case 'report':
        return 'text-purple-600 bg-purple-100';
      case 'schedule':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${getIconColor(activity.type)}`}>
                <Icon className="w-4 h-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {activity.title}
                  </h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                    {activity.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {activity.description}
                </p>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">System Status:</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentActivity;