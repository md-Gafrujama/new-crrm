// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
// import { Users, ShoppingCart, DollarSign, TrendingUp, Activity, AlertCircle } from 'lucide-react';
// import { Header } from '../Components/Admin/common/Header';
// import { Sidebar,useSidebar } from '../Components/Admin/common/sidebar';
// import { cn } from "../utils/cn";
// import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
// import { useTheme } from "../hooks/use-theme";  
// import Footer  from '../Components/Admin/common/Footer';

// const Dashboard = ({collapsed, onLogout }) => {

//   const { theme, setTheme } = useTheme();
//   const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
//   const stats = [
//     { title: 'Total Users', value: '2,453', change: '+12%', trend: 'up' },
//     { title: 'Revenue', value: '$9,876', change: '+8.2%', trend: 'up' },
//     { title: 'Tasks Completed', value: '156', change: '-3.1%', trend: 'down' },
//     { title: 'Pending Requests', value: '23', change: '+4%', trend: 'up' },
//   ];

//   const userDistributionData = [
//     { name: 'Active Users', value: 8547, color: '#10B981' },
//     { name: 'Inactive Users', value: 3200, color: '#F59E0B' },
//     { name: 'New Users', value: 1100, color: '#3B82F6' }
//   ];

//   const salesData = [
//     { month: 'Jan', sales: 4000, users: 2400 },
//     { month: 'Feb', sales: 3000, users: 1398 },
//     { month: 'Mar', sales: 2000, users: 9800 },
//     { month: 'Apr', sales: 2780, users: 3908 },
//     { month: 'May', sales: 1890, users: 4800 },
//     { month: 'Jun', sales: 2390, users: 3800 }
//   ];

//   const revenueData = [
//     { day: 'Mon', revenue: 12400 },
//     { day: 'Tue', revenue: 15600 },
//     { day: 'Wed', revenue: 18200 },
//     { day: 'Thu', revenue: 14800 },
//     { day: 'Fri', revenue: 22100 },
//     { day: 'Sat', revenue: 19500 },
//     { day: 'Sun', revenue: 16300 }
//   ];



//   return (
//     <>
//      <Header 
//           onToggleSidebar={toggleSidebar} 
//       />
//        <Sidebar 
//                 isOpen={isSidebarOpen} 
//                 onClose={closeSidebar}
//         >
//        <div className={cn(
//     "transition-[margin] duration-300 ease-in-out",
//     collapsed ? "md:ml-[70px]" : "md:ml-[0px]"
//   )}>
//     <div className="min-h-screen">
//       {/* Header */}
//       <main className="mx-auto px-4 py-6 sm:px-0 lg:px-0">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg">
//               <div className="px-4 py-5 sm:p-6">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
//                     <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                     </svg>
//                   </div>
//                   <div className="ml-5 w-0 flex-1">
//                     <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.title}</dt>
//                     <dd className="flex items-baseline">
//                       <div className="text-2xl font-semibold text-gray-900 dark:text-gray-400">{stat.value}</div>
//                       <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
//                         {stat.change}
//                         <svg
//                           className={`self-center flex-shrink-0 h-5 w-5 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                           aria-hidden="true"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d={stat.trend === 'up' ? "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" : "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"}
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </dd>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Main Content */}
//         <div className="justify-center p-10 lg:grid-cols-3">
//           {/* Right Side */}
//           <div className="lg:col-span-2 space-y-6">
//       {/* Charts Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         {/* User Distribution Pie Chart */}
//         <div className="bg-white dark:bg-slate-800 shadow overflow-hidden rounded-lg">
//           <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
//             <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-400">User Distribution</h3>
//           </div>
//           <div className="p-6">
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={userDistributionData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {userDistributionData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip formatter={(value) => [value.toLocaleString(), 'Users']} />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Revenue Trend Line Chart */}
//         <div className="bg-white dark:bg-slate-800 shadow overflow-hidden rounded-lg">
//           <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-slate-700">
//             <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-400">Weekly Revenue</h3>
//           </div>
//           <div className="p-6">
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={revenueData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Revenue']} />
//                 <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Sales & Users Bar Chart */}
//       <div className="bg-white dark:bg-slate-800 shadow overflow-hidden rounded-lg">
//         <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-slate-700">
//           <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-400">Monthly Sales & User Growth</h3>
//         </div>
//         <div className="p-6">
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={salesData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="sales" fill="#10B981" name="Sales ($)" />
//               <Bar dataKey="users" fill="#3B82F6" name="New Users" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//     </div>

         
//         </div>
//       </main>
//     </div>
//     </div>
//     </Sidebar>
//     <Footer/>
//     </>
//   );
// };

// export default Dashboard;















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, ShoppingCart, DollarSign, Package, 
  Activity, AlertCircle, Clock, CheckCircle, 
  XCircle, Server, Database, HardDrive, 
  Bell, Mail, MessageSquare, Calendar,User,UserPlus,Tag,Settings,
  TrendingUp, PieChart, BarChart2, LineChart
} from 'lucide-react';
import { Header } from '../Components/Admin/common/Header';
import { Sidebar, useSidebar } from '../Components/Admin/common/sidebar';
import { cn } from "../utils/cn";
import { useTheme } from "../hooks/use-theme";  
import Footer from '../Components/Admin/common/Footer';

const Dashboard = ({ collapsed }) => {
  const { theme, setTheme } = useTheme();
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
  const navigate = useNavigate();

  // Sample data
  const [stats, setStats] = useState([
    { id: 1, title: 'Total Products', value: '1,248', icon: <Package className="h-5 w-5" />, change: '+5.2%', trend: 'up' },
    { id: 2, title: 'Pending Orders', value: '42', icon: <ShoppingCart className="h-5 w-5" />, change: '-12%', trend: 'down' },
    { id: 3, title: 'System Health', value: '98%', icon: <Activity className="h-5 w-5" />, change: '+0.5%', trend: 'up' },
    { id: 4, title: 'Active Sessions', value: '156', icon: <Users className="h-5 w-5" />, change: '+8.1%', trend: 'up' }
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: 'order', user: 'John Smith', action: 'placed a new order', time: '2 mins ago', status: 'pending' },
    { id: 2, type: 'user', user: 'Sarah Johnson', action: 'registered new account', time: '15 mins ago', status: 'completed' },
    { id: 3, type: 'system', user: 'System', action: 'completed nightly backup', time: '1 hour ago', status: 'completed' },
    { id: 4, type: 'alert', user: 'System', action: 'high memory usage detected', time: '3 hours ago', status: 'warning' }
  ]);

  const [systemStatus, setSystemStatus] = useState([
    { id: 1, component: 'Web Server', status: 'operational', icon: <Server className="h-4 w-4" /> },
    { id: 2, component: 'Database', status: 'operational', icon: <Database className="h-4 w-4" /> },
    { id: 3, component: 'Storage', status: 'warning', icon: <HardDrive className="h-4 w-4" /> },
    { id: 4, component: 'API', status: 'operational', icon: <MessageSquare className="h-4 w-4" /> }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New feature request', content: 'Customer requested bulk export functionality', time: 'Today, 10:30 AM', read: false },
    { id: 2, title: 'System update available', content: 'Version 2.3.5 is ready to install', time: 'Yesterday, 4:15 PM', read: true },
    { id: 3, title: 'Payment received', content: 'Invoice #3245 has been paid', time: 'Yesterday, 11:20 AM', read: true }
  ]);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      // In a real app, you would fetch this data from an API
      setStats([
        { id: 1, title: 'Total Products', value: '1,248', icon: <Package className="h-5 w-5" />, change: '+5.2%', trend: 'up' },
        { id: 2, title: 'Pending Orders', value: '42', icon: <ShoppingCart className="h-5 w-5" />, change: '-12%', trend: 'down' },
        { id: 3, title: 'System Health', value: '98%', icon: <Activity className="h-5 w-5" />, change: '+0.5%', trend: 'up' },
        { id: 4, title: 'Active Sessions', value: '156', icon: <Users className="h-5 w-5" />, change: '+8.1%', trend: 'up' }
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'operational': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'operational': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'critical': return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        <div className={cn(
          "transition-all duration-300 ease-in-out min-h-screen bg-gray-50 dark:bg-gray-900",
          collapsed ? "md:ml-[70px]" : "md:ml-[0px]"
        )}>
          <main className="p-6">
            {/* Welcome Banner */}
            <div className="bg-[#ff8633] rounded-lg shadow p-6 mb-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
              <p className="opacity-90">Here's what's happening with your store today.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</h3>
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-200">{stat.value}</span>
                    <span className={`flex items-center text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                      {stat.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 ml-1" />
                      ) : (
                        <TrendingUp className="h-4 w-4 ml-1 transform rotate-180" />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Recent Activities */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg dark:text-gray-400 font-semibold flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-blue-500" />
                    Recent Activities
                  </h2>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-1">
                          {activity.type === 'order' && <ShoppingCart className="h-5 w-5 text-blue-500" />}
                          {activity.type === 'user' && <User className="h-5 w-5 text-green-500" />}
                          {activity.type === 'system' && <Server className="h-5 w-5 text-purple-500" />}
                          {activity.type === 'alert' && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                              {activity.user} <span className="text-gray-500 dark:text-gray-400 font-normal">{activity.action}</span>
                            </p>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                              activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                              activity.status === 'warning' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {activity.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                  <button 
                    onClick={() => navigate('/admin/activities')}
                    className="text-sm font-medium text-[#ff8633] "
                  >
                    View all activities →
                  </button>
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg dark:text-gray-400 font-semibold flex items-center">
                    <Server className="h-5 w-5 mr-2 text-green-500" />
                    System Status
                  </h2>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {systemStatus.map((item) => (
                    <div key={item.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mr-3">
                            {item.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{item.component}</span>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-xs font-medium mr-2 ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                          {getStatusIcon(item.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Last updated: {new Date().toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Notifications */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg dark:text-gray-400 font-semibold flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-yellow-500" />
                    Notifications
                  </h2>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/30' : ''}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex justify-between">
                        <h3 className={`text-sm font-medium ${!notification.read ? 'text-blue-800 dark:text-blue-200' : 'text-gray-800 dark:text-gray-200'}`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            New
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 text-left">
                        {notification.content}
                      </p>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-left ">
                        {notification.time}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                  <button 
                    onClick={() => navigate('/admin/notifications')}
                    className="text-sm font-medium text-[#ff8633]"
                  >
                    View all notifications →
                  </button>
                </div>
              </div>


              {/* Upcoming Events */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg dark:text-gray-400 font-semibold flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-red-500" />
                    Upcoming Events
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 rounded-md p-2">
                        <Calendar className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 text-left">Monthly Maintenance</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-left">Tomorrow, 2:00 AM - 4:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-md p-2">
                        <Mail className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 text-left">Newsletter Campaign</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-left">Starts in 3 days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-md p-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 text-left">Quarterly Sales Report</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-left">Due in 1 week</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                  <button 
                    onClick={() => navigate('/admin/calendar')}
                    className="text-sm font-medium text-[#ff8633]"
                  >
                    View full calendar →
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Sidebar>
      <Footer />
    </>
  );
};

export default Dashboard;