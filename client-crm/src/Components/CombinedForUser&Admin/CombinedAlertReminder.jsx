
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Admin/common/Header';
import { Sidebar,useSidebar } from '../Admin/common/sidebar';
import AlertsandReminderForm from '../Admin/Forms/AlertsandReminderForm';



const CombinedAlertReminder = ({collapsed}) => {
const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
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
   <AlertsandReminderForm />
  </>
)}
   </>
  );
};


export default CombinedAlertReminder;
