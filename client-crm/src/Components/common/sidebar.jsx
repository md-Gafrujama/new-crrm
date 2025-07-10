// import { forwardRef } from "react";
// import { NavLink } from "react-router-dom";

// import { navbarLinks } from "../constants";

// import { cn } from "../utils/cn";

// import PropTypes from "prop-types";

// export const Sidebar = forwardRef(({ collapsed }, ref) => {
//     return (
//         <aside
//             ref={ref}
//             className={cn(
//                 // "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
//                  "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700",
//                 collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
//                 collapsed ? "max-md:-left-full" : "max-md:left-0",
//             )}
//         >
//             <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
//                 {navbarLinks.map((navbarLink) => (
//   <nav
//     key={navbarLink.title}
//     className={cn(
//       "sidebar-group",
//       collapsed && "md:items-center"
//     )}
//   >
//     {/* Group Title - Lighter color and left-aligned */}
//     <p className={cn(
//       "text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 text-left",
//       collapsed && "md:hidden"
//     )}>
//       {navbarLink.title}
//     </p>

//     {/* Links with icon and label in same row */}
//     <div className="space-y-1">
//       {navbarLink.links.map((link) => (
//         <NavLink
//           key={link.label}
//           to={link.path}
//           className={({ isActive }) => cn(
//             "flex items-center px-3 py-2 rounded-md transition-colors",
//             "hover:bg-[#ff8633] hover:text-[white]",
//             isActive ? "bg-gray-100 dark:bg-slate-800 font-medium" : "",
//             collapsed && "md:justify-center md:px-2 md:w-[45px]"
//           )}
//         >
//           <link.icon
//             size={20}
//             className="flex-shrink-0 text-gray-600"
//           />
//           {!collapsed && (
//             <span className="ml-3 text-gray-700  whitespace-nowrap">
//               {link.label}
//             </span>
//           )}
//         </NavLink>
//       ))}
//     </div>
//   </nav>
// ))}
//             </div>
//         </aside>
//     );
// });

// Sidebar.displayName = "Sidebar";

// Sidebar.propTypes = {
//     collapsed: PropTypes.bool,
// };












import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react"; // Import the icons

import { navbarLinks } from "../../constants";
import { cn } from "../../utils/cn";
import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed, setCollapsed }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0",
            )}
        >
            {/* Collapse/Expand Button */}
            <div className="flex justify-end p-3">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {collapsed ? (
                        <ChevronsRight className="h-5 w-5 text-gray-600" />
                    ) : (
                        <ChevronsLeft className="h-5 w-5 text-gray-600" />
                    )}
                </button>
            </div>

            <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden px-3 pb-3 [scrollbar-width:_thin]">
                {navbarLinks.map((navbarLink) => (
                    <nav
                        key={navbarLink.title}
                        className={cn(
                            "sidebar-group",
                            collapsed && "md:items-center"
                        )}
                    >
                        {/* Group Title - Lighter color and left-aligned */}
                        <p className={cn(
                            "text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 text-left",
                            collapsed && "md:hidden"
                        )}>
                            {navbarLink.title}
                        </p>

                        {/* Links with icon and label in same row */}
                        <div className="space-y-1">
                            {navbarLink.links.map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={link.path}
                                    className={({ isActive }) => cn(
                                        "flex items-center px-3 py-2 rounded-md transition-colors",
                                        "hover:bg-[#ff8633] hover:text-[white]",
                                        isActive ? "bg-gray-100 dark:bg-slate-800 font-medium" : "",
                                        collapsed && "md:justify-center md:px-2 md:w-[45px]"
                                    )}
                                >
                                    <link.icon
                                        size={20}
                                        className="flex-shrink-0 text-gray-600"
                                    />
                                    {!collapsed && (
                                        <span className="ml-3 text-gray-700 whitespace-nowrap">
                                            {link.label}
                                        </span>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func.isRequired, // Add prop type for setCollapsed
};
