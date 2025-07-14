
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../common/Header';
import { Sidebar,useSidebar } from '../common/sidebar';
import AddLeadsForm from '../Leads/AddLeadsForm';



const CombinedLeadForm = ({collapsed}) => {
const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
  return (
    <>
{localStorage.getItem('userType') === 'admin' && (
<>
 <Header onToggleSidebar={toggleSidebar} />
  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} >
   <AddLeadsForm/>
  </Sidebar>
  </>
)}
  
{localStorage.getItem('userType') === 'user' && (
  <>
   <AddLeadsForm/>
  </>
)}
   </>
  );
};


export default CombinedLeadForm;
