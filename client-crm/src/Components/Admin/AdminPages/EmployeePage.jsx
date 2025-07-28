import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditUser from '../Forms/EditUser';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/api'; 
import { Header } from '../common/Header';
import { Sidebar,useSidebar } from '../common/sidebar';
import { cn } from "../../../utils/cn";
import { useTheme } from '../../../hooks/use-theme';
import Footer from '../common/Footer';
import AddEmployeeForm from '../Forms/AddEmployeeForm';

const EmployeePage = ({collapsed}) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  
  useEffect(() => {
   const fetchUsers = async () => {
    
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Please login to view users');
    }
   
    // i have kept /allUser for now after the api created add /allEmployee 
    const response = await axios.get(`${API_BASE_URL}/api/allUser`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 401) {
      localStorage.removeItem('token');
      throw new Error('Session expired. Please login again.');
    }

    setUsers(response.data);
  } catch (err) {
    setError(err.message);
    // if (err.message.includes('Session expired')) {
    // }
  } finally {
    setLoading(false);
  }
};
    fetchUsers();
  }, []);




  const handleEditUser = (userId) => {
    setSelectedUserId(userId);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedUserId(null);
  };


    const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    handleCloseModal();
  };

  const handleUserDeleted = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    handleCloseModal();
  };



  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff8633]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header onToggleSidebar={toggleSidebar} />
     <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
      <div className={cn(
    "transition-[margin] duration-300 ease-in-out",
    collapsed ? "md:ml-[70px]" : "md:ml-[0px]"
  )}>
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-400">Employee Management</h1>
        <div className='flex flex-col lg:flex-row md:flex-row gap-2'>
        <button
           onClick={() => setShowAddEmployeeForm(true)}
          className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#ff8633] text-white rounded-lg transition-colors hover:bg-[#e57328]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
            <path d="M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Add New Employee
        </button>
        </div>
      </div>



      {users.length === 0 ? (
        <div className="max-w-6xl mx-auto text-center py-12">
          <p className="text-gray-600 text-lg">No users found.</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
  {users.map((user) => (
    <div
      key={user.id}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative group">
        <img
          src={user.photo || 'https://randomuser.me/api/portraits/men/1.jpg'}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-48 object-cover group-hover:brightness-75 transition duration-300"
          onError={(e) => {
            e.target.src = 'https://randomuser.me/api/portraits/men/1.jpg';
          }}
        />
        <button
        //   onClick={() => handleEditUser(user.id)}
          className="absolute top-3 right-3 p-2 bg-white dark:bg-slate-700 rounded-full shadow hover:bg-gray-200 dark:hover:bg-slate-600 transition"
          aria-label="Edit user"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
      </div>

      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 truncate">
          {user.firstName} {user.lastName} <span className="text-sm text-gray-500">({user.username})</span>
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full capitalize">
            {user.role}
          </span>
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${user.statusOfWork === 'active' ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
            {user.statusOfWork || 'Active'}
          </span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="truncate">{user.email}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          <span className="font-medium">Task:</span> {user.assignedWork || 'No task assigned'}
        </div>
      </div>
    </div>
  ))}
</div>

      )}

            {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <EditUser 
              userId={selectedUserId} 
              onUpdate={handleUserUpdated}
              onDelete={handleUserDeleted}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
      <AddEmployeeForm
              isOpen={showAddEmployeeForm} 
              onClose={() => setShowAddEmployeeForm(false)}
            />
    </div>
    </div>
    </Sidebar>
    <Footer/>
    </>
  );
};

export default EmployeePage;




