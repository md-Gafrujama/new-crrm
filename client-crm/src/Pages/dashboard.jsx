import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, ShoppingCart, DollarSign, TrendingUp, Activity, AlertCircle } from 'lucide-react';
import { Header } from '../Components/common/Header';
import { Sidebar } from '../Components/common/sidebar';
import { cn } from "../utils/cn";
import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";

const Dashboard = ({collapsed, onLogout }) => {

  const navigate = useNavigate();

  const stats = [
    { title: 'Total Users', value: '2,453', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$9,876', change: '+8.2%', trend: 'up' },
    { title: 'Tasks Completed', value: '156', change: '-3.1%', trend: 'down' },
    { title: 'Pending Requests', value: '23', change: '+4%', trend: 'up' },
  ];




    const statsCards = [
    { title: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Revenue', value: '$284,920', change: '+8.2%', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Orders', value: '3,247', change: '+23%', icon: ShoppingCart, color: 'bg-purple-500' },
    { title: 'Growth Rate', value: '15.3%', change: '+2.1%', icon: TrendingUp, color: 'bg-orange-500' }
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

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Created new product listing', time: '2 min ago', status: 'success' },
    { id: 2, user: 'Sarah Wilson', action: 'Updated user permissions', time: '5 min ago', status: 'info' },
    { id: 3, user: 'Mike Johnson', action: 'Processed bulk order #1247', time: '12 min ago', status: 'success' },
    { id: 4, user: 'Emily Davis', action: 'System backup completed', time: '1 hour ago', status: 'success' },
    { id: 5, user: 'Alex Brown', action: 'Failed login attempt detected', time: '2 hours ago', status: 'warning' }
  ];

  const alerts = [
    { id: 1, message: 'Server CPU usage at 85%', type: 'warning', time: '10 min ago' },
    { id: 2, message: 'Daily backup completed successfully', type: 'success', time: '1 hour ago' },
    { id: 3, message: 'New security update available', type: 'info', time: '3 hours ago' }
  ];



  return (
    <>
     {/* <Header/> */}
      <Sidebar/>
       <div className={cn(
    "transition-[margin] duration-300 ease-in-out",
    collapsed ? "md:ml-[70px]" : "md:ml-[240px]"
  )}>
    <div className="min-h-screen py-20 bg-gray-100">
      {/* Header */}
     
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors">

    <div className="flex-1">
       
    </div>
    
    {/* Right side container */}
    <div className="flex flex-1 items-center justify-end gap-4">
        {/* Search input */}
        <div className="hidden md:flex items-center w-full max-w-[300px]">
            <div className="input flex items-center w-full border border-gray-300 rounded-lg p-2 ">
                <Search
                    size={20}
                    className="text-slate-300"
                />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50 px-2"
                />
            </div>
        </div>
        
        {/* Theme toggle and logout buttons */}
        <div className="flex items-center gap-x-3">
            <button
                className="btn-ghost size-10"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <Sun
                    size={20}
                    className="dark:hidden"
                />
                <Moon
                    size={20}
                    className="hidden dark:block"
                />
            </button>
            
            <button
                onClick={onLogout}
                className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
                Logout
            </button>
        </div>
    </div>
</header>

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
      <div className="bg-white shadow overflow-hidden rounded-lg bg-gray-100">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 ">
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
    </>
  );
};

export default Dashboard;