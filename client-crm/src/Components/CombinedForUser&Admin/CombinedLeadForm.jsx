
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Admin/common/Header';
import { Sidebar,useSidebar } from '../Admin/common/sidebar';
import AddLeadsForm from '../Admin/Leads/AddLeadsForm';



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
