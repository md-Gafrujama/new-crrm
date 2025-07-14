
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../common/Header';
import { Sidebar,useSidebar } from '../common/sidebar';
import AlertsandReminderForm from '../Forms/AlertsandReminderForm';



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
