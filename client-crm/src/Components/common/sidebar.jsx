
import { forwardRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronsLeft, ChevronsRight, ChevronDown, ChevronUp } from "lucide-react";
import { navbarLinks } from "../../constants";
import { cn } from "../../utils/cn";
import PropTypes from "prop-types";
import { useTheme } from "../../hooks/use-theme";
import { Bell, Search, Moon, Sun } from "lucide-react";

export const Sidebar = forwardRef(({ collapsed, setCollapsed }, ref) => {
    const { theme } = useTheme();
    const [expandedSections, setExpandedSections] = useState(
        navbarLinks.reduce((acc, section) => {
            acc[section.title] = true;
            return acc;
        }, {})
    );

    const toggleSection = (title) => {
        setExpandedSections(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full flex-col overflow-x-hidden border-r bg-white shadow-lg transition-all duration-300 ease-in-out dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "md:w-20" : "md:w-64",
                collapsed ? "max-md:-left-full" : "max-md:left-0 w-64",
                theme === 'dark' ? 'border-slate-700' : 'border-slate-200'
            )}
        >
            {/* Collapse/Expand Button */}
            <div className="flex items-center p-4">
                {!collapsed && (
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white flex-grow">
                        Dashboard
                    </h2>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={cn(
                        "rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-700",
                        collapsed ? "mx-auto" : ""
                    )}
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {collapsed ? (
                        <ChevronsRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    ) : (
                        <ChevronsLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto overflow-x-hidden px-3 pb-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
                {navbarLinks.map((navbarLink) => (
                    <nav
                        key={navbarLink.title}
                        className={cn(
                            "sidebar-group",
                            collapsed && "md:items-center"
                        )}
                    >
                        {/* Group Title with Toggle */}
                        {!collapsed && (
                            <div 
                                className="flex items-center justify-between mb-2 cursor-pointer"
                                onClick={() => toggleSection(navbarLink.title)}
                            >
                                <p className="text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    {navbarLink.title}
                                </p>
                                {expandedSections[navbarLink.title] ? (
                                    <ChevronUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                ) : (
                                    <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                )}
                            </div>
                        )}

                        {/* Links - Only show if section is expanded */}
                        {expandedSections[navbarLink.title] && (
                            <div className="space-y-1">
                                {navbarLink.links.map((link) => (
                                    <NavLink
                                        key={link.label}
                                        to={link.path}
                                        className={({ isActive }) => cn(
                                            "group flex items-center rounded-lg px-3 py-3 transition-all",
                                            "hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600",
                                            isActive 
                                                ? "bg-orange-100 font-medium text-orange-600 dark:bg-slate-800 dark:text-orange-400" 
                                                : "text-gray-700 dark:text-gray-300",
                                            collapsed && "md:justify-center md:px-2"
                                        )}
                                    >
                                        <link.icon
                                            size={20}
                                            className={cn(
                                                "flex-shrink-0 transition-colors",
                                                collapsed ? "group-hover:text-white" : ""
                                            )}
                                        />
                                        {!collapsed && (
                                            <span className="ml-3 whitespace-nowrap">
                                                {link.label}
                                            </span>
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func.isRequired,
};

export const Header = ({ collapsed, setCollapsed, onLogout }) => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between bg-white/80 px-6 shadow-sm backdrop-blur-md transition-colors dark:bg-slate-900/80">
            <div className="flex items-center gap-4">
                {/* Mobile menu button would go here */}
            </div>
            
            <div className="flex flex-1 items-center justify-end gap-6">
                {/* Search input */}
                <div className="hidden md:flex items-center w-full max-w-md">
                    <div className="relative flex w-full items-center">
                        <Search
                            size={18}
                            className="absolute left-3 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:border-orange-500 dark:focus:ring-orange-900/50"
                        />
                    </div>
                </div>
                
                {/* Notification and theme toggle */}
                <div className="flex items-center gap-4">
                    <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700">
                        <Bell size={20} />
                        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange-500"></span>
                    </button>
                    
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700"
                    >
                        {theme === 'light' ? (
                            <Moon size={20} />
                        ) : (
                            <Sun size={20} />
                        )}
                    </button>
                    
                    <button
                        onClick={onLogout}
                        className="hidden sm:inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
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
    onLogout: PropTypes.func.isRequired,
};