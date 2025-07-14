import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/login.jsx';
import Sign from './Components/Admin/Forms/sign.jsx'
import Dashboard from './Pages/dashboard.jsx';
import UserProfile from './Pages/userProfile.jsx';
import Register from './Components/Admin/Forms/register.jsx';
import './App.css';
import ProtectedRoute from './Pages/protectedRoute.js';
import ForgetPassword from './Components/Admin/Forms/forgetPassword.jsx';
import OTPPage from './Pages/Otp.jsx';
import  UpdatePassword from "./Components/Admin/Forms/UpdatePassword.jsx"
import AllUsers from './Pages/AllUsers.jsx';
import EditUser from './Components/Admin/Forms/EditUser.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeadsActivity from './Components/Admin/Leads/LeadsActivity.jsx';
import Quoreb2b from './Components/Admin/ExternalData/Quoreb2b.jsx';
import Comparebazar from './Components/Admin/ExternalData/Comparebazar.jsx';
import ContactQuore from './Components/Admin/Forms/ContactQuore.jsx';
import QuoreLeads from './Components/Admin/Leads/QuoreLeads.jsx';
import { ThemeProvider } from './contexts/theme-context.jsx';
import CompareComments from './Components/Admin/ExternalData/CompareComments.jsx';
import QuoreComments from './Components/Admin/ExternalData/QuoreComments.jsx';
import CombinedLeadForm from './Components/CombinedForUser&Admin/CombinedLeadForm.jsx';
import CombinedAlertReminder from './Components/CombinedForUser&Admin/CombinedAlertReminder.jsx';
import UserLeads from './Components/User/Leads/UserLeads.jsx';
import ConnectSocialMedia from './Pages/ConnectSocialMedia.jsx';
import UserSettings from './Pages/UserSettings.jsx';
import UserDashboard from './Pages/UserDashboard.jsx';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [userType, setUserType] = useState(localStorage.getItem("userType"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
      setUserType(localStorage.getItem("userType"));
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userType");
    localStorage.removeItem("token"); 
    setIsLoggedIn(false);
    setUserType(null);
    
  };

  return (
    <ThemeProvider storageKey="theme">
    <Router>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={ isLoggedIn ? (
              userType === "admin" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/user-dashboard" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {!isLoggedIn && ( 
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetPassword" element={ <ForgetPassword/>} />
            <Route path="/quorecomment" element={<Quoreb2b />} />
            <Route path="/comparebazarcomment" element={<Comparebazar />} />
            <Route path="/contactquore" element={<ContactQuore />} />
            <Route path="/quoreleads" element={<QuoreLeads />} />


            {/* OTP Component tabhi navigate hoga , when otp  is sent */}

            <Route path="/otp" element={  localStorage.getItem("emailSent") === "true" ? <OTPPage />: <Navigate to="/forgetPassword" replace /> } />
            <Route path="/updatePass" element= {<UpdatePassword/>} />
          </>
        )}

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/sign" element={userType === "admin" ? <Sign /> : <Navigate to="/" />} />
          <Route path="/dashboard" element={userType === "admin" ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/userProfile" element={<UserProfile onLogout={handleLogout} />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/edit-user/:userId" element={<EditUser />} />
          <Route path="/add-leads" element={<CombinedLeadForm />} />
          <Route path="/alerts-and-reminder-admin" element={<CombinedAlertReminder />} />
          <Route path="/leadsactivity" element={<LeadsActivity />} />
          <Route path="/user-leads" element={<UserLeads />} />
          <Route path="/compare-comments" element={<CompareComments />} />
          <Route path="/quore-comments" element={<QuoreComments />} />
          <Route path="/connect-social-media" element={<ConnectSocialMedia />} />
          <Route path="/user-settings" element={<UserSettings/>} />
          <Route path="/user-dashboard" element={<UserDashboard/>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
