import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, Clock } from 'lucide-react';

const AlertsPanel: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      icon: AlertTriangle,
      title: 'Low Vitamin C Intake',
      description: '23% of students below recommended levels',
      time: '2 hours ago',
      action: 'Review dietary recommendations'
    },
    {
      id: 2,
      type: 'warning',
      icon: TrendingDown,
      title: 'Declining Fruit Consumption',
      description: 'Down 15% from last month',
      time: '4 hours ago',
      action: 'Implement awareness campaign'
    },
    {
      id: 3,
      type: 'info',
      icon: Users,
      title: 'High Snack Consumption',
      description: '67% above recommended levels',
      time: '6 hours ago',
      action: 'Provide healthy alternatives'
    },
    {
      id: 4,
      type: 'warning',
      icon: Clock,
      title: 'Irregular Meal Timing',
      description: '34% skip breakfast regularly',
      time: '8 hours ago',
      action: 'Schedule nutrition workshop'
    }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-600';
      case 'warning':
        return 'text-yellow-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Health Alerts</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-600">Live Monitoring</span>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className={`p-4 rounded-lg border ${getAlertColor(alert.type)} transition-all hover:shadow-md`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 mt-0.5 ${getIconColor(alert.type)}`} />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {alert.title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{alert.time}</span>
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                      {alert.action}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All Alerts
        </button>
      </div>
    </motion.div>
  );
};

export default AlertsPanel;