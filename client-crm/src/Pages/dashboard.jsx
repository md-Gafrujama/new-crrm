import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, ShoppingCart, DollarSign, TrendingUp, Activity, AlertCircle } from 'lucide-react';
import { Header } from '../Components/common/Header';
import { Sidebar,useSidebar } from '../Components/common/sidebar';
import { cn } from "../utils/cn";
import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";  

const Dashboard = ({collapsed, onLogout }) => {

  const { theme, setTheme } = useTheme();
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
  const stats = [
    { title: 'Total Users', value: '2,453', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$9,876', change: '+8.2%', trend: 'up' },
    { title: 'Tasks Completed', value: '156', change: '-3.1%', trend: 'down' },
    { title: 'Pending Requests', value: '23', change: '+4%', trend: 'up' },
  ];

  const userDistributionData = [
    { name: 'Active Users', value: 8547, color: '#10B981' },
    { name: 'Inactive Users', value: 3200, color: '#F59E0B' },
    { name: 'New Users', value: 1100, color: '#3B82F6' }
  ];

  const salesData = [
    { month: 'Jan', sales: 4000, users: 2400 },
    { month: 'Feb', sales: 3000, users: 1398 },
    { month: 'Mar', sales: 2000, users: 9800 },
    { month: 'Apr', sales: 2780, users: 3908 },
    { month: 'May', sales: 1890, users: 4800 },
    { month: 'Jun', sales: 2390, users: 3800 }
  ];

  const revenueData = [
    { day: 'Mon', revenue: 12400 },
    { day: 'Tue', revenue: 15600 },
    { day: 'Wed', revenue: 18200 },
    { day: 'Thu', revenue: 14800 },
    { day: 'Fri', revenue: 22100 },
    { day: 'Sat', revenue: 19500 },
    { day: 'Sun', revenue: 16300 }
  ];



  return (
    <>
     <Header 
          onToggleSidebar={toggleSidebar} 
      />
       <Sidebar 
                isOpen={isSidebarOpen} 
                onClose={closeSidebar}
        >
       <div className={cn(
    "transition-[margin] duration-300 ease-in-out",
    collapsed ? "md:ml-[70px]" : "md:ml-[240px]"
  )}>
    <div className="min-h-screen py-20">
      {/* Header */}
      <main className="mx-auto px-4 py-6 sm:px-0 lg:px-0">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                        <svg
                          className={`self-center flex-shrink-0 h-5 w-5 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d={stat.trend === 'up' ? "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" : "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"}
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="justify-center p-10 lg:grid-cols-3">
          {/* Right Side */}
          <div className="lg:col-span-2 space-y-6">
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Distribution Pie Chart */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Distribution</h3>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={userDistributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value.toLocaleString(), 'Users']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Trend Line Chart */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Weekly Revenue</h3>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Revenue']} />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Sales & Users Bar Chart */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Monthly Sales & User Growth</h3>
        </div>
        <div className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#10B981" name="Sales ($)" />
              <Bar dataKey="users" fill="#3B82F6" name="New Users" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>

         
        </div>
      </main>
    </div>
    </div>
    </Sidebar>
    </>
  );
};

export default Dashboard;