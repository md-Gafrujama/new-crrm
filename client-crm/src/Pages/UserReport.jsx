// import React, { useState, useEffect } from 'react';
// import { UserFooter } from '../Components/User/common/UserFooter';
// import { UserHeader } from '../Components/User/common/UserHeader';
// import { useSidebarUser, UserSidebar } from '../Components/User/common/UserSidebar';
// import { cn } from '../utils/cn';
// import { Calendar, BarChart2, PieChart, LineChart, AreaChart } from 'lucide-react';

// // Sample data for the charts
// const barData = [
//   { name: 'Jan', value: 4000 },
//   { name: 'Feb', value: 3000 },
//   { name: 'Mar', value: 6000 },
//   { name: 'Apr', value: 8000 },
//   { name: 'May', value: 5000 },
//   { name: 'Jun', value: 9000 },
//   { name: 'Jul', value: 10000 },
// ];

// const pieData = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const lineData = [
//   { name: 'Week 1', value: 2400 },
//   { name: 'Week 2', value: 1398 },
//   { name: 'Week 3', value: 9800 },
//   { name: 'Week 4', value: 3908 },
//   { name: 'Week 5', value: 4800 },
// ];

// const areaData = [
//   { name: 'Q1', value: 4000 },
//   { name: 'Q2', value: 3000 },
//   { name: 'Q3', value: 2000 },
//   { name: 'Q4', value: 2780 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const UserReport = ({ collapsed }) => {
//   const [timeRange, setTimeRange] = useState('monthly');
//   const [startDate, setStartDate] = useState(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
//   const [endDate, setEndDate] = useState(new Date());
//   const [isLoading, setIsLoading] = useState(false);
//   const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarUser();

//   useEffect(() => {
//     setIsLoading(true);
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [timeRange, startDate, endDate]);

//   const handleTimeRangeChange = (e) => {
//     setTimeRange(e.target.value);
//     const now = new Date();
//     switch (e.target.value) {
//       case 'weekly':
//         setStartDate(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000));
//         break;
//       case 'monthly':
//         setStartDate(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000));
//         break;
//       case 'quarterly':
//         setStartDate(new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000));
//         break;
//       case 'yearly':
//         setStartDate(new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000));
//         break;
//       default:
//         setStartDate(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000));
//     }
//     setEndDate(now);
//   };

//   // Simple bar chart component
//   const SimpleBarChart = ({ data }) => {
//     const maxValue = Math.max(...data.map(item => item.value));
//     return (
//       <div className="w-full h-64">
//         <div className="flex items-end h-48 gap-2">
//           {data.map((item, index) => (
//             <div key={index} className="flex-1 flex flex-col items-center">
//               <div
//                 className="w-full bg-blue-500 rounded-t"
//                 style={{ height: `${(item.value / maxValue) * 100}%` }}
//               ></div>
//               <span className="text-xs mt-1">{item.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   // Simple pie chart component
//   const SimplePieChart = ({ data }) => {
//     const total = data.reduce((sum, item) => sum + item.value, 0);
//     let cumulativePercent = 0;
    
//     return (
//       <div className="w-64 h-64 relative mx-auto">
//         <svg viewBox="0 0 100 100" className="w-full h-full">
//           {data.map((item, index) => {
//             const percent = item.value / total;
//             const startX = 50 + 50 * Math.cos(2 * Math.PI * cumulativePercent);
//             const startY = 50 + 50 * Math.sin(2 * Math.PI * cumulativePercent);
//             cumulativePercent += percent;
//             const endX = 50 + 50 * Math.cos(2 * Math.PI * cumulativePercent);
//             const endY = 50 + 50 * Math.sin(2 * Math.PI * cumulativePercent);
            
//             const largeArcFlag = percent > 0.5 ? 1 : 0;
            
//             return (
//               <path
//                 key={index}
//                 d={`M 50 50 L ${startX} ${startY} A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             );
//           })}
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-lg font-bold">Total</div>
//             <div>{total}</div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Simple line chart component
//   const SimpleLineChart = ({ data }) => {
//     const maxValue = Math.max(...data.map(item => item.value));
//     return (
//       <div className="w-full h-64 relative">
//         <div className="h-48">
//           {data.map((item, index) => {
//             const nextItem = data[index + 1];
//             if (!nextItem) return null;
            
//             return (
//               <div
//                 key={index}
//                 className="absolute top-0 left-0 w-full h-full"
//                 style={{
//                   left: `${(index / (data.length - 1)) * 100}%`,
//                   width: `${(1 / (data.length - 1)) * 100}%`
//                 }}
//               >
//                 <div
//                   className="absolute w-full"
//                   style={{
//                     height: '2px',
//                     backgroundColor: '#4f46e5',
//                     top: `${100 - (item.value / maxValue) * 100}%`,
//                   }}
//                 ></div>
//                 <div
//                   className="absolute w-px h-full bg-gray-200"
//                   style={{ left: '50%' }}
//                 ></div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex justify-between mt-2">
//           {data.map((item, index) => (
//             <span key={index} className="text-xs">{item.name}</span>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <UserHeader onToggleSidebar={toggleSidebar} />
//       <UserSidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
//         <div className={cn(
//           "transition-all duration-300 ease-in-out min-h-screen bg-slate-100 dark:bg-slate-900",
//           collapsed ? "md:ml-[70px]" : "md:ml-[0px]"
//         )}>
//           <div className="p-5">
//             <h1 className="text-2xl font-bold mb-6">User Dashboard Reports</h1>
            
//             {/* Filters */}
//             <div className="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 p-4">
//               <h2 className="text-lg font-semibold mb-3">Filters</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Time Range</label>
//                   <select
//                     value={timeRange}
//                     onChange={handleTimeRangeChange}
//                     className="w-full p-2 border rounded"
//                   >
//                     <option value="weekly">Weekly</option>
//                     <option value="monthly">Monthly</option>
//                     <option value="quarterly">Quarterly</option>
//                     <option value="yearly">Yearly</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Start Date</label>
//                   <div className="flex items-center border rounded p-2">
//                     <Calendar className="h-5 w-5 mr-2" />
//                     <input
//                       type="date"
//                       value={startDate.toISOString().split('T')[0]}
//                       onChange={(e) => setStartDate(new Date(e.target.value))}
//                       max={endDate.toISOString().split('T')[0]}
//                       className="w-full bg-transparent"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">End Date</label>
//                   <div className="flex items-center border rounded p-2">
//                     <Calendar className="h-5 w-5 mr-2" />
//                     <input
//                       type="date"
//                       value={endDate.toISOString().split('T')[0]}
//                       onChange={(e) => setEndDate(new Date(e.target.value))}
//                       min={startDate.toISOString().split('T')[0]}
//                       max={new Date().toISOString().split('T')[0]}
//                       className="w-full bg-transparent"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {isLoading ? (
//               <div className="text-center py-10">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
//                 <p>Loading reports...</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Bar Chart */}
//                 <div className="bg-white dark:bg-slate-800 rounded-lg shadow">
//                   <div className="p-4 border-b">
//                     <div className="flex items-center">
//                       <BarChart2 className="h-5 w-5 mr-2" />
//                       <h2 className="text-lg font-semibold">Monthly Activity</h2>
//                     </div>
//                     <p className="text-sm text-gray-500">Total activity per month</p>
//                   </div>
//                   <div className="p-4">
//                     <SimpleBarChart data={barData} />
//                   </div>
//                 </div>

//                 {/* Pie Chart */}
//                 <div className="bg-white dark:bg-slate-800 rounded-lg shadow">
//                   <div className="p-4 border-b">
//                     <div className="flex items-center">
//                       <PieChart className="h-5 w-5 mr-2" />
//                       <h2 className="text-lg font-semibold">Category Distribution</h2>
//                     </div>
//                     <p className="text-sm text-gray-500">Breakdown by categories</p>
//                   </div>
//                   <div className="p-4">
//                     <SimplePieChart data={pieData} />
//                   </div>
//                 </div>

//                 {/* Line Chart */}
//                 <div className="bg-white dark:bg-slate-800 rounded-lg shadow">
//                   <div className="p-4 border-b">
//                     <div className="flex items-center">
//                       <LineChart className="h-5 w-5 mr-2" />
//                       <h2 className="text-lg font-semibold">Weekly Trend</h2>
//                     </div>
//                     <p className="text-sm text-gray-500">Activity over weeks</p>
//                   </div>
//                   <div className="p-4">
//                     <SimpleLineChart data={lineData} />
//                   </div>
//                 </div>

//                 {/* Summary Stats */}
//                 <div className="bg-white dark:bg-slate-800 rounded-lg shadow">
//                   <div className="p-4 border-b">
//                     <h2 className="text-lg font-semibold">Summary Statistics</h2>
//                   </div>
//                   <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <div className="border rounded-lg p-4 text-center">
//                       <div className="text-2xl font-bold">1,234</div>
//                       <div className="text-sm text-gray-500">Total Activities</div>
//                     </div>
//                     <div className="border rounded-lg p-4 text-center">
//                       <div className="text-2xl font-bold">567</div>
//                       <div className="text-sm text-gray-500">Completed</div>
//                     </div>
//                     <div className="border rounded-lg p-4 text-center">
//                       <div className="text-2xl font-bold">89%</div>
//                       <div className="text-sm text-gray-500">Success Rate</div>
//                     </div>
//                     <div className="border rounded-lg p-4 text-center">
//                       <div className="text-2xl font-bold">12.5</div>
//                       <div className="text-sm text-gray-500">Avg. Daily</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </UserSidebar>
//       <UserFooter />
//     </>
//   );
// };

// export default UserReport;



import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';
import { UserHeader } from '../Components/User/common/UserHeader';
import { useSidebarUser, UserSidebar } from '../Components/User/common/UserSidebar';
import { cn } from "../utils/cn";
import { useTheme } from '../hooks/use-theme';
import { UserFooter } from '../Components/User/common/UserFooter';
import { useNavigate } from 'react-router-dom';

const UserReport = ({ collapsed, onLogout }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leadActivity, setLeadActivity] = useState([]);
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarUser();
   const navigate = useNavigate();
  const { theme } = useTheme();

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Load user profile and lead activity
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        
        if (!token || !storedUserId) {
          throw new Error('Missing authentication data');
        }

        // Fetch user profile
        const userResponse = await axios.get(`${API_BASE_URL}/api/allUser`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const matchedUser = userResponse.data.find(user => user.id === storedUserId);
        if (!matchedUser) throw new Error('User data mismatch');
        
        setCurrentUser(matchedUser);

        // Fetch lead activity
        const leadsResponse = await axios.get(`${API_BASE_URL}/api/usersData`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Combine all leads and sort by recent activity
        const allLeads = [
          ...(leadsResponse.data.data?.allNewLeads || []),
          ...(leadsResponse.data.data?.allContacted || []),
          ...(leadsResponse.data.data?.allEngaged || []),
          ...(leadsResponse.data.data?.allQualified || []),
          ...(leadsResponse.data.data?.allProposalSent || []),
          ...(leadsResponse.data.data?.allNegotiation || []),
          ...(leadsResponse.data.data?.allClosedWon || []),
          ...(leadsResponse.data.data?.allClosedLost || []),
          ...(leadsResponse.data.data?.allOnHold || []),
          ...(leadsResponse.data.data?.allDoNotContact || []),
        ];

        // Sort by most recent first
        const sortedLeads = allLeads.sort((a, b) => 
          new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt)
          .slice(0, 5));

        setLeadActivity(sortedLeads);
        setLoading(false);

      } catch (error) {
        console.error('Data loading error:', error);
        toast.error(error.message || "Failed to load data", {
          position: "top-right",
          theme: theme === 'dark' ? 'dark' : 'light',
        });
        setLoading(false);
        onLogout();
      }
    };

    loadUserData();
  }, [onLogout, theme]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ff8633]"></div>
      </div>
    );
  }

  return (
    <>
      <UserHeader onToggleSidebar={toggleSidebar} />
      <UserSidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        <div className={cn(
          "transition-all duration-300 ease-in-out min-h-screen bg-slate-100 dark:bg-slate-900",
          collapsed ? "md:ml-[70px]" : "md:ml-[0px]"
        )}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* User Profile Summary Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden mb-8">
               <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                  <p className="font-medium dark:text-gray-300">{currentUser.firstName} {currentUser.lastName}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                  <p className="font-medium dark:text-gray-300">
                    {currentUser.role}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                  <p className="font-medium dark:text-gray-300 capitalize">
                    {currentUser.statusOfWork || 'Active'}
                  </p>
                </div>
              </div>
            </div>

            {/* Lead Activity Section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-[#ff8633] to-[#ff9a5a] p-6">
                <h2 className="text-xl font-bold text-white">Recent Lead Activity</h2>
              </div>
              
              <div className="p-6">
                {leadActivity.length > 0 ? (
                  <>
                  <div className="space-y-4">
                    {leadActivity.map((lead) => (
                      <div key={lead.id} className="border-b border-gray-200 dark:border-slate-700 pb-4 last:border-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium dark:text-gray-300">
                              {lead.customerFirstName} {lead.customerLastName}
                            </h3>
                            <p className="text-sm text-gray-600 text-left dark:text-gray-400">
                              {lead.companyName || 'No company specified'}
                            </p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                            lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                            lead.status === 'Closed Won' ? 'bg-green-100 text-green-800' :
                            lead.status === 'Closed Lost' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {lead.status}
                          </span>
                        </div>
                        <div className="mt-2 flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">
                            {lead.serviceInterestedIn || 'No service specified'}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {formatDate(lead.updatedAt || lead.createdAt)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 py-3 text-right">
                  <button 
                    onClick={() => navigate('/user-leads')}
                    className="text-sm font-medium text-[white] p-4 rounded-lg bg-[#ff8633]"
                  >
                    View all ({leadActivity.length}) Leads →
                  </button>
                </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">
                      No lead activity found
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </UserSidebar>
      <UserFooter />
    </>
  );
};

export default UserReport;