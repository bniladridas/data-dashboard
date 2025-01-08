'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card'; // Updated import path
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext'; // Corrected import path
import { fetchLiveData } from './api'; // Mock API for real-time data

type ChartData = { name: string; value: number }; // Define the type for the data

const DataDashboard = () => {
  const [data, setData] = useState<ChartData[]>([]); // Use the defined type
  const [data2, setData2] = useState<ChartData[]>([]); // Use the defined type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Update error state type
  const { theme, toggleTheme } = useTheme(); // Theme context

  // Fetch real-time data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchLiveData(); // Replace with your API call
        setData(result.data1);
        setData2(result.data2);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} p-6`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
      >
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="grid grid-cols-1 gap-6">
        {/* Top Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
            <CardContent className="p-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#444' : '#ddd'} />
                    <XAxis dataKey="name" stroke={theme === 'dark' ? '#00ffcc' : '#007acc'} />
                    <YAxis stroke={theme === 'dark' ? '#00ffcc' : '#007acc'} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: theme === 'dark' ? '#00ffcc' : '#007acc' }}
                      itemStyle={{ color: theme === 'dark' ? '#00ffcc' : '#007acc' }}
                    />
                    <Bar dataKey="value" fill={theme === 'dark' ? '#00ffcc' : '#007acc'} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
            <CardContent className="p-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data2}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#444' : '#ddd'} />
                    <XAxis dataKey="name" stroke={theme === 'dark' ? '#00ffcc' : '#007acc'} />
                    <YAxis stroke={theme === 'dark' ? '#00ffcc' : '#007acc'} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: theme === 'dark' ? '#00ffcc' : '#007acc' }}
                      itemStyle={{ color: theme === 'dark' ? '#00ffcc' : '#007acc' }}
                    />
                    <Bar dataKey="value" fill={theme === 'dark' ? '#00ffcc' : '#007acc'} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default DataDashboard;