import { useTheme } from "../../hooks/use-theme";
import React, { useEffect, useState } from 'react';
import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";


export const Header = ({ collapsed, setCollapsed,}) => {
    const { theme, setTheme } = useTheme();
    console.log('Current theme in Header:', theme);
    const toggleTheme = () => {
        console.log('Toggling theme from:', theme);
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const navigate = useNavigate();

useEffect(() => {
    const handleStorageChange = () => {
        setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
        setUserType(localStorage.getItem("userType"));
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Initialize state once
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
    navigate('/login', { replace: true });
     window.location.reload();
};
    return (
     <header className={`fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between px-4 shadow-md transition-colors duration-200 ${
    theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
  }`}>
    <div className="flex-1">
</div>
    
    {/* Right side container */}
    <div className="flex flex-1 items-center justify-end gap-4">
        {/* Search input */}
        <div className="hidden md:flex items-center w-full max-w-[300px]">
            <div className="input flex items-center w-full border border-gray-300 rounded-lg p-2 ">
                <Search
                    size={20}
                    className="text-slate-300"
                />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50 px-2"
                />
            </div>
        </div>
        
        {/* Theme toggle and logout buttons */}
        <div className="flex items-center gap-x-3">
            <button
                className="btn-ghost size-10"
                onClick={toggleTheme}
            >
            {theme === 'dark' ? (
                    <Sun size={20} className="text-yellow-300" />
                ) : (
                    <Moon size={20} className="text-slate-700" />
                )}
            </button>
            
            <button
                onClick={handleLogout}
                className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
                Logout
            </button>
        </div>
    </div>
</header>


    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};
