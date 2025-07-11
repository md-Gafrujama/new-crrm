// import { forwardRef, useState,useEffect  } from "react";
// import { NavLink } from "react-router-dom";
// import { ChevronsLeft, ChevronsRight, ChevronDown, ChevronUp,Menu } from "lucide-react";
// import { navbarLinks } from "../../constants";
// import { cn } from "../../utils/cn";
// import PropTypes from "prop-types";
// import { useTheme } from "../../hooks/use-theme";
// import { Bell, Search, Moon, Sun } from "lucide-react";

// export const Sidebar = forwardRef(({ collapsed, setCollapsed }, ref) => {
//     const { theme } = useTheme();
//     console.log('Sidebar received props:', { collapsed, setCollapsed });
//     const [expandedSections, setExpandedSections] = useState(
//         navbarLinks.reduce((acc, section) => {
//             acc[section.title] = true;
//             return acc;
//         }, {})
//     );

//     const toggleSection = (title) => {
//         setExpandedSections(prev => ({
//             ...prev,
//             [title]: !prev[title]
//         }));
//     };

//     return (
//         <aside
//             ref={ref}
//             className={cn(
//                 "fixed z-[100] flex h-full flex-col overflow-x-hidden border-r bg-white shadow-lg transition-all duration-300 ease-in-out dark:border-slate-700 dark:bg-slate-900",
//                 collapsed ? "md:w-20" : "md:w-64",
//                 collapsed ? "max-md:-left-full" : "max-md:left-0 w-64",
//                 theme === 'dark' ? 'border-slate-700' : 'border-slate-200'
//             )}
//         >
//             {/* Collapse/Expand Button */}
//             <div className="flex items-center p-4">
//                 {!collapsed && (
//                     <h2 className="text-xl font-bold text-gray-800 dark:text-white flex-grow">
//                         Dashboard
//                     </h2>
//                 )}
//                 <button
//                     onClick={() => setCollapsed(!collapsed)}
//                     className={cn(
//                         "rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-700",
//                         collapsed ? "mx-auto" : ""
//                     )}
//                     aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
//                 >
//                     {collapsed ? (
//                         <ChevronsRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//                     ) : (
//                         <ChevronsLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//                     )}
//                 </button>
//             </div>

//             <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto overflow-x-hidden px-3 pb-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
//                 {navbarLinks.map((navbarLink) => (
//                     <nav
//                         key={navbarLink.title}
//                         className={cn(
//                             "sidebar-group",
//                             collapsed && "md:items-center"
//                         )}
//                     >
//                         {/* Group Title with Toggle */}
//                         {!collapsed && (
//                             <div
//                                 className="flex items-center justify-between mb-2 cursor-pointer"
//                                 onClick={() => toggleSection(navbarLink.title)}
//                             >
//                                 <p className="text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
//                                     {navbarLink.title}
//                                 </p>
//                                 {expandedSections[navbarLink.title] ? (
//                                     <ChevronUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
//                                 ) : (
//                                     <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
//                                 )}
//                             </div>
//                         )}

//                         {/* Links - Only show if section is expanded */}
//                         {expandedSections[navbarLink.title] && (
//                             <div className="space-y-1">
//                                 {navbarLink.links.map((link) => (
//                                     <NavLink
//                                         key={link.label}
//                                         to={link.path}
//                                         className={({ isActive }) => cn(
//                                             "group flex items-center rounded-lg px-3 py-3 transition-all",
//                                             "hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600",
//                                             isActive
//                                                 ? "bg-orange-100 font-medium text-orange-600 dark:bg-slate-800 dark:text-orange-400"
//                                                 : "text-gray-700 dark:text-gray-300",
//                                             collapsed && "md:justify-center md:px-2"
//                                         )}
//                                     >
//                                         <link.icon
//                                             size={20}
//                                             className={cn(
//                                                 "flex-shrink-0 transition-colors",
//                                                 collapsed ? "group-hover:text-white" : ""
//                                             )}
//                                         />
//                                         {!collapsed && (
//                                             <span className="ml-3 whitespace-nowrap">
//                                                 {link.label}
//                                             </span>
//                                         )}
//                                     </NavLink>
//                                 ))}
//                             </div>
//                         )}
//                     </nav>
//                 ))}
//             </div>
//         </aside>
//     );
// });

// Sidebar.displayName = "Sidebar";

// Sidebar.propTypes = {
//     collapsed: PropTypes.bool,
//     setCollapsed: PropTypes.func.isRequired,
// };

// export const Header = ({onToggleSidebar,onLogout }) => {
//     const { theme, setTheme } = useTheme();

//     return (
//         <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between bg-white/80 px-6 shadow-sm backdrop-blur-md transition-colors dark:bg-slate-900/80">
//             <div className="flex items-center gap-4">
//                  <button
//                     onClick={onToggleSidebar}
//                     className="md:hidden rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-700"
//                 >
//                     <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//                 </button>
//             </div>

//             <div className="flex flex-1 items-center justify-end gap-6">
//                 {/* Search input */}
//                 <div className="hidden md:flex items-center w-full max-w-md">
//                     <div className="relative flex w-full items-center">
//                         <Search
//                             size={18}
//                             className="absolute left-3 text-gray-400"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:border-orange-500 dark:focus:ring-orange-900/50"
//                         />
//                     </div>
//                 </div>

//                 {/* Notification and theme toggle */}
//                 <div className="flex items-center gap-4">
//                     <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700">
//                         <Bell size={20} />
//                         <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange-500"></span>
//                     </button>

//                     <button
//                         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//                         className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700"
//                     >
//                      {theme === 'dark' ? (
//                                          <Sun size={20} className="text-yellow-300" />
//                                      ) : (
//                                          <Moon size={20} className="text-slate-700" />
//                                      )}
//                     </button>

//                     <button
//                         onClick={onLogout}
//                         className="hidden sm:inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
//                     >
//                         Logout
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// Header.propTypes = {
//     collapsed: PropTypes.bool,
//     setCollapsed: PropTypes.func,
//     onToggleSidebar: PropTypes.func.isRequired,
//     onLogout: PropTypes.func.isRequired,
// };

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { navbarLinks } from "../../constants";
import { cn } from "../../utils/cn";
import PropTypes from "prop-types";
import { useTheme } from "../../hooks/use-theme";

export const Sidebar = ({ isOpen, onClose, children }) => {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState(
    navbarLinks.reduce((acc, section) => {
      acc[section.title] = true;
      return acc;
    }, {})
  );

  // Auto-expand all sections when sidebar is expanded
  useEffect(() => {
    if (!collapsed) {
      setExpandedSections(
        navbarLinks.reduce((acc, section) => {
          acc[section.title] = true;
          return acc;
        }, {})
      );
    }
  }, [collapsed]);

  // Close mobile sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  // Handle escape key to close mobile sidebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (title) => {
    if (!collapsed) {
      setExpandedSections((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    }
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed z-[100] flex h-full flex-col border-r bg-white shadow-lg transition-all duration-300 ease-in-out dark:border-slate-700 dark:bg-slate-900",

          theme === "dark" ? "border-slate-900" : "border-slate-200"
        )}
        style={{ top: "64px" }} // Below the header
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Mobile Header with Close Button */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-700"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Desktop Collapse/Expand Button */}
        <div className="hidden md:flex items-center p-1">
          {!collapsed && (
            <h2 className="text-xl font-bold text-gray-800 dark:text-white flex-grow">
              Menu
            </h2>
          )}
          <button
            onClick={toggleCollapse}
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

        {/* Navigation Links */}
        <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto overflow-x-hidden px-3 pb-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
          {navbarLinks.map((navbarLink) => (
            <nav
              key={navbarLink.title}
              className={cn("sidebar-group", collapsed && "md:items-center")}
            >
              {/* Group Title with Toggle - Hidden when collapsed on desktop */}
              {(!collapsed || window.innerWidth < 768) && (
                <div
                  className="flex items-center justify-between mb-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => toggleSection(navbarLink.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleSection(navbarLink.title);
                    }
                  }}
                  aria-expanded={expandedSections[navbarLink.title]}
                  aria-controls={`section-${navbarLink.title}`}
                >
                  <p className="text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {navbarLink.title}
                  </p>
                  {/* Show arrows on both mobile and desktop when not collapsed */}
                  {(!collapsed || window.innerWidth < 768) && (
                    <div
                      className={cn(
                        "transition-transform",
                        collapsed ? "md:hidden" : "" // Only hide on desktop when collapsed
                      )}
                    >
                      {expandedSections[navbarLink.title] ? (
                        <ChevronUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      )}
                    </div>
                  )}
                </div>
              )}
              {/* Links - Show all when collapsed (icons only) or when section is expanded */}
              {(collapsed ||
                expandedSections[navbarLink.title] ||
                window.innerWidth < 768) && (
                <div className="space-y-1" id={`section-${navbarLink.title}`}>
                  {navbarLink.links.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "group flex items-center rounded-lg px-3 py-3 transition-all relative",
                          "hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600",
                          "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
                          isActive
                            ? "bg-orange-100 font-medium text-orange-600 dark:bg-slate-800 dark:text-orange-400"
                            : "text-gray-700 dark:text-gray-300",
                          collapsed && "md:justify-center md:px-2"
                        )
                      }
                      onClick={() => {
                        // Close mobile sidebar when link is clicked
                        if (window.innerWidth < 768) {
                          onClose();
                        }
                      }}
                      title={collapsed ? link.label : ""}
                      aria-label={link.label}
                    >
                      <link.icon
                        size={20}
                        className={cn(
                          "flex-shrink-0 transition-colors",
                          collapsed ? "group-hover:text-white" : ""
                        )}
                      />
                      {/* Show labels on mobile always, on desktop only when not collapsed */}
                      {(!collapsed || window.innerWidth < 768) && (
                        <span className="ml-3 whitespace-nowrap">
                          {link.label}
                        </span>
                      )}

                      {/* Tooltip for collapsed state on desktop only */}
                      {collapsed && window.innerWidth >= 768 && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                          {link.label}
                        </div>
                      )}
                    </NavLink>
                  ))}
                </div>
              )}
            </nav>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-300 min-h-screen pt-16 bg-slate-100 dark:bg-slate-950",
          // Desktop: adjust margin based on sidebar state
          collapsed ? "md:ml-20" : "md:ml-64",
          // Mobile: no margin adjustment
          "ml-0"
        )}
      >
        <div className="p-6">{children}</div>
      </main>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

// Custom Hook for Sidebar State Management
export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  };
};
