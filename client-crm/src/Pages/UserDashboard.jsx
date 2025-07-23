// import React, { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { UserHeader } from '../Components/User/common/UserHeader';
// import { UserSidebar,useSidebarUser } from '../Components/User/common/UserSidebar';
// import { UserFooter } from '../Components/User/common/UserFooter';
// import { toast } from 'react-toastify';
// import { API_BASE_URL } from '../config/api';
// import axios from 'axios';

// const UserDashboard = ({onLogout}) => {
//   const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarUser();
//   const [currentUser, setCurrentUser] = useState(null);
  
//     useEffect(() => {
//       const loadUserProfile = async () => {
//         try {
//           const token = localStorage.getItem('token');
//           const storedUserId = localStorage.getItem('userId');
//           const storedUsername = localStorage.getItem('username');
  
//           if (!token || !storedUserId) {
//             throw new Error('Missing authentication data');
//           }
  
//           const response = await axios.get(`${API_BASE_URL}/api/allUser`, {
//             headers: { 'Authorization': `Bearer ${token}` }
//           });
  
//           const allUsers = response.data;
//           const matchedUser = allUsers.find(user =>
//             user.id === storedUserId &&
//             user.username === storedUsername
//           );
  
//           if (!matchedUser) {
//             throw new Error('User data mismatch');
//           }
  
//           setCurrentUser(matchedUser);
//           setLoading(false);
  
//         } catch (error) {
//           console.error('Profile loading error:', error);
//           const errorMessage = error.response?.data?.message ||
//             error.message ||
//             "Failed to load profile data";
  
//           toast.error(errorMessage, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: theme === 'dark' ? 'dark' : 'light',
//             style: { fontSize: '1.2rem' },
//           });
//           setLoading(false);
//           onLogout();
//         }
//       };
  
//       loadUserProfile();
//     }, [onLogout]);
  
//     const user = currentUser ? {
//       id: currentUser.id,
//       name: `${currentUser.firstName} ${currentUser.lastName}`,
//       email: currentUser.email,
//       role: currentUser.role,
//       joinDate: new Date(currentUser.createdAt).toLocaleDateString(),
//       lastLogin: 'Recently',
//       avatar: currentUser.photo || 'https://randomuser.me/api/portraits/men/32.jpg',
//       bio: currentUser.about || `User with username ${currentUser.username}`,
//       skills: currentUser.skills || ['User Management', 'Profile Editing'],
//       phoneNumber: currentUser.phoneNumber || 'Not provided',
//       assignedWork: currentUser.assignedWork || 'No assigned work',
//       statusOfWork: currentUser.statusOfWork || 'Unknown'
//     } : {
//       name: 'User',
//       email: 'No email',
//       role: 'user',
//       joinDate: 'Unknown',
//       lastLogin: 'Unknown',
//       avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//       bio: 'User information not available',
//       skills: [],
//       phoneNumber: 'Not provided',
//       assignedWork: 'No data',
//       statusOfWork: 'Unknown'
//     };

//   // Sample data
//   const stats = [
//     { title: 'Total Projects', value: '24', change: '+12%', trend: 'up' },
//     { title: 'Tasks Completed', value: '156', change: '+5%', trend: 'up' },
//     { title: 'Pending Requests', value: '8', change: '-2%', trend: 'down' },
//     { title: 'Team Members', value: '14', change: '+3%', trend: 'up' },
//   ];

//   const recentActivities = [
//     { id: 1, action: 'Completed project "Website Redesign"', time: '2 hours ago', icon: '✅' },
//     { id: 2, action: 'Received feedback on "Mobile App"', time: '5 hours ago', icon: '💬' },
//     { id: 3, action: 'Started new project "Dashboard UI"', time: '1 day ago', icon: '🚀' },
//     { id: 4, action: 'Meeting with client at 3 PM', time: '2 days ago', icon: '📅' },
//   ];

//   const projects = [
//     { id: 1, name: 'Website Redesign', status: 'Completed', progress: 100, dueDate: 'May 15, 2023' },
//     { id: 2, name: 'Mobile App Development', status: 'In Progress', progress: 75, dueDate: 'Jun 20, 2023' },
//     { id: 3, name: 'Dashboard UI', status: 'Not Started', progress: 0, dueDate: 'Jul 10, 2023' },
//     { id: 4, name: 'API Integration', status: 'In Progress', progress: 45, dueDate: 'Jun 5, 2023' },
//   ];

//   return (
//     <>
//       <UserHeader onToggleSidebar={toggleSidebar} />
//       <UserSidebar isOpen={isSidebarOpen} onClose={closeSidebar} >
//     <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
//       <div className="flex-1 overflow-auto">
//         <main className="p-6">
//            <div className="bg-[#ff8633] rounded-lg shadow p-6 mb-6 text-white">
//               <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}  !</h1>
//               <p className="opacity-90">Your Assigned Work: {user.assignedWork}.</p>
//             </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
//                 <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
//                 <div className="flex items-end mt-2">
//                   <span className="text-2xl font-bold text-gray-800 dark:text-gray-400 ">{stat.value}</span>
//                   <span className={`ml-2 text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
//                     {stat.change}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Recent Activity and Projects */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Recent Activity */}
//             <div className="lg:col-span-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
//               <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400 mb-4">Recent Activity</h2>
//               <div className="space-y-4">
//                 {recentActivities.map(activity => (
//                   <div key={activity.id} className="flex items-start">
//                     <span className="mr-3 mt-1">{activity.icon}</span>
//                     <div>
//                       <p className="text-gray-800 dark:text-gray-400">{activity.action}</p>
//                       <p className="text-gray-500 text-sm">{activity.time}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <Link to="#" className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-block">
//                 View all activity →
//               </Link>
//             </div>

//             {/* Projects Table */}
//             <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">Your Projects</h2>
//                 <Link to="#" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
//                   + New Project
//                 </Link>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {projects.map(project => (
//                       <tr key={project.id} >
//                         <td className="px-4 py-4 whitespace-nowrap">
//                           <Link to={`/projects/${project.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
//                             {project.name}
//                           </Link>
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap">
//                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             project.status === 'Completed' ? 'bg-green-100 text-green-800' :
//                             project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
//                             'bg-gray-100 text-gray-800'
//                           }`}>
//                             {project.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap">
//                           <div className="w-full bg-gray-200 rounded-full h-2.5">
//                             <div 
//                               className={`h-2.5 rounded-full ${
//                                 project.progress === 100 ? 'bg-green-600' : 'bg-blue-600'
//                               }`} 
//                               style={{ width: `${project.progress}%` }}
//                             ></div>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {project.dueDate}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//     </UserSidebar>
//     <UserFooter/>
//     </>
//   );
// };

// export default UserDashboard;












import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserHeader } from '../Components/User/common/UserHeader';
import { UserSidebar,useSidebarUser } from '../Components/User/common/UserSidebar';
import { UserFooter } from '../Components/User/common/UserFooter';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../config/api';
import axios from 'axios';
import { PersonalDetails } from '../Components/User/common/PersonalDetails';

const UserDashboard = ({onLogout}) => {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarUser();
  const [currentUser, setCurrentUser] = useState(null);
  const { user, loading } = PersonalDetails(onLogout);


  // Sample data
  const stats = [
    { title: 'Total Projects', value: '24', change: '+12%', trend: 'up' },
    { title: 'Tasks Completed', value: '156', change: '+5%', trend: 'up' },
    { title: 'Pending Requests', value: '8', change: '-2%', trend: 'down' },
    { title: 'Team Members', value: '14', change: '+3%', trend: 'up' },
  ];

  const recentActivities = [
    { id: 1, action: 'Completed project "Website Redesign"', time: '2 hours ago', icon: '✅' },
    { id: 2, action: 'Received feedback on "Mobile App"', time: '5 hours ago', icon: '💬' },
    { id: 3, action: 'Started new project "Dashboard UI"', time: '1 day ago', icon: '🚀' },
    { id: 4, action: 'Meeting with client at 3 PM', time: '2 days ago', icon: '📅' },
  ];

  const projects = [
    { id: 1, name: 'Website Redesign', status: 'Completed', progress: 100, dueDate: 'May 15, 2023' },
    { id: 2, name: 'Mobile App Development', status: 'In Progress', progress: 75, dueDate: 'Jun 20, 2023' },
    { id: 3, name: 'Dashboard UI', status: 'Not Started', progress: 0, dueDate: 'Jul 10, 2023' },
    { id: 4, name: 'API Integration', status: 'In Progress', progress: 45, dueDate: 'Jun 5, 2023' },
  ];

  return (
    <>
      <UserHeader onToggleSidebar={toggleSidebar} />
      <UserSidebar isOpen={isSidebarOpen} onClose={closeSidebar} >
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      <div className="flex-1 overflow-auto">
        <main className="p-6">
           <div className="bg-[#ff8633] rounded-lg shadow p-6 mb-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}  !</h1>
              <p className="opacity-90">Your Assigned Work: {user.assignedWork}.</p>
            </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                <div className="flex items-end mt-2">
                  <span className="text-2xl font-bold text-gray-800 dark:text-gray-400 ">{stat.value}</span>
                  <span className={`ml-2 text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity and Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-start">
                    <span className="mr-3 mt-1">{activity.icon}</span>
                    <div>
                      <p className="text-gray-800 dark:text-gray-400">{activity.action}</p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="#" className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-block">
                View all activity →
              </Link>
            </div>

            {/* Projects Table */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">Your Projects</h2>
                <Link to="#" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                  + New Project
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {projects.map(project => (
                      <tr key={project.id} >
                        <td className="px-4 py-4 whitespace-nowrap">
                          <Link to={`/projects/${project.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                            {project.name}
                          </Link>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                project.progress === 100 ? 'bg-green-600' : 'bg-blue-600'
                              }`} 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {project.dueDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </UserSidebar>
    <UserFooter/>
    </>
  );
};

export default UserDashboard;