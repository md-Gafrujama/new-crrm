import { useTheme } from "../../hooks/use-theme";

import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";


import PropTypes from "prop-types";

export const Header = ({ collapsed, setCollapsed, onLogout  }) => {
    const { theme, setTheme } = useTheme();

    return (
    //   <header className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
   <header className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors">

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
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <Sun
                    size={20}
                    className="dark:hidden"
                />
                <Moon
                    size={20}
                    className="hidden dark:block"
                />
            </button>
            
            <button
                onClick={onLogout}
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
