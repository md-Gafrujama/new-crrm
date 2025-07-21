
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Admin/common/Header';
import { Sidebar,useSidebar } from '../Admin/common/sidebar';
import AddLeadsForm from '../Admin/Leads/AddLeadsForm';
import { UserHeader } from '../User/common/UserHeader';
import { UserSidebar ,useSidebarUser} from '../User/common/UserSidebar';
import { UserFooter } from '../User/common/UserFooter';
import Footer from '../Admin/common/Footer';

const CombinedLeadForm = ({collapsed}) => {
const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
const { isSidebarOpenUser, toggleSidebarUser, closeSidebarUser } = useSidebarUser();
  return (
    <>
{localStorage.getItem('userType') === 'admin' && (
<>
 <Header onToggleSidebar={toggleSidebar} />
  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} >
   <AddLeadsForm/>
  </Sidebar>
  <Footer/>
  </>
)}
  
{localStorage.getItem('userType') === 'user' && (
  <>
  <UserHeader onToggleSidebar={toggleSidebarUser} />
  <UserSidebar isOpen={isSidebarOpenUser} onClose={closeSidebarUser} >
   <AddLeadsForm/>
   </UserSidebar>
   <UserFooter/>
  </>
)}
   </>
  );
};


export default CombinedLeadForm;
