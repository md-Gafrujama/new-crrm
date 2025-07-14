
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Admin/common/Header';
import { Sidebar,useSidebar } from '../Admin/common/sidebar';
import AlertsandReminderForm from '../Admin/Forms/AlertsandReminderForm';
import { UserHeader } from '../User/common/UserHeader';
import { UserSidebar ,useSidebarUser} from '../User/common/UserSidebar';


const CombinedAlertReminder = ({collapsed}) => {
const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
const { isSidebarOpenUser, toggleSidebarUser, closeSidebarUser } = useSidebarUser();
  return (
    <>
{localStorage.getItem('userType') === 'admin' && (
<>
 <Header onToggleSidebar={toggleSidebar} />
  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} >
   <AlertsandReminderForm />
  </Sidebar>
  </>
)}
  
{localStorage.getItem('userType') === 'user' && (
  <>
    <UserHeader onToggleSidebar={toggleSidebarUser} />
  <UserSidebar isOpen={isSidebarOpenUser} onClose={closeSidebarUser} >
   <AlertsandReminderForm />
   </UserSidebar>
  </>
)}
   </>
  );
};


export default CombinedAlertReminder;
