import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

const Reports: React.FC = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly Nutritional Analysis',
      description: 'Comprehensive overview of student dietary patterns and nutritional intake',
      date: 'August 2024',
      type: 'Monthly',
      status: 'Ready',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Health Risk Assessment',
      description: 'Identification of students at risk for nutritional deficiencies',
      date: 'August 2024',
      type: 'Weekly',
      status: 'Ready',
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Dietary Intervention Impact',
      description: 'Analysis of intervention effectiveness on student eating habits',
      date: 'July 2024',
      type: 'Quarterly',
      status: 'Ready',
      size: '3.2 MB'
    },
    {
      id: 4,
      title: 'Cafeteria Utilization Report',
      description: 'Usage patterns and meal preference analysis',
      date: 'August 2024',
      type: 'Monthly',
      status: 'Processing',
      size: 'Pending'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Reports & Documentation</h1>
        <p className="text-green-100 text-lg">
          Comprehensive reports and analytical documentation
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            <span>Date Range</span>
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{report.title}</h3>
                  <p className="text-gray-600 mb-2">{report.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  report.status === 'Ready' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
                {report.status === 'Ready' && (
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Download className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Report Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Nutritional Reports</h3>
            <p className="text-sm text-gray-600">Detailed analysis of dietary intake and nutritional status</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Health Reports</h3>
            <p className="text-sm text-gray-600">Health risk assessments and intervention outcomes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Operational Reports</h3>
            <p className="text-sm text-gray-600">Cafeteria utilization and meal service analytics</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;