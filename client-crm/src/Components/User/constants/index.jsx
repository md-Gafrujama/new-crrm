import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";


export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/user-dashboard",
            },
            {
                label: "My Profile",
                icon: ChartColumn,
                path: "/userProfile",
            },
        ],
    },
    {
        title: "Leads",
        links: [
            {
                label: "All Leads",
                icon: Users,
                path: "/user-leads",
            },
            {
                label: "Add Leads",
                icon: UserCheck,
                path: "/add-leads",
            }
        ],
    },
    {
        title: "Social Media",
        links: [
            {
                label: "Connect",
                icon: Package,
                path: "/connect-social-media",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Real Time Tracking",
                icon: Package,
                path: "/real-time-tracking",
            },
            {
                label: "Alerts And Remainder",
                icon: PackagePlus,
                path: "/alerts-and-reminder-admin",
            },
            {
                label: "Reports",
                icon: ShoppingBag,
                path: "/reports",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/user-settings",
            }
        ],
    },
];


