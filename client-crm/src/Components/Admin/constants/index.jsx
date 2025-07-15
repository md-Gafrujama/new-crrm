import { ChartColumn, Building2,LayoutDashboard, FileText,Radar,BellPlus,FilePlus,NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";


export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: LayoutDashboard,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "All users",
                icon: Users,
                path: "/users",
            },
            {
                label: "Add user",
                icon: UserPlus,
                path: "/sign",
            },
            {
                label: "Leads Activity",
                icon: UserCheck,
                path: "/leadsactivity",
            },
            {
                label: "Add Leads",
                icon: FilePlus,
                path: "/add-leads",
            }
        ],
    },
    {
        title: "External Data",
        links: [
            {
                label: "Quoreb2b",
                icon: Building2,
                path: "/quore-comments",
            },
            {
                label: "CompareBazar",
                icon: Building2,
                path: "/compare-comments",
            }
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Real Time Tracking",
                icon: Radar,
                path: "/real-time-tracking",
            },
            {
                label: "Alerts And Remainder",
                icon: BellPlus,
                path: "/alerts-and-reminder-admin",
            },
            {
                label: "Reports",
                icon: FileText,
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
                path: "/settings",
            }
        ],
    },
];


