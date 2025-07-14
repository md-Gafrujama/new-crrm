import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";


export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
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
                icon: UserCheck,
                path: "/add-leads-as-admin",
            }
        ],
    },
    {
        title: "External Data",
        links: [
            {
                label: "Quoreb2b",
                icon: Package,
                path: "/quore-comments",
            },
            {
                label: "CompareBazar",
                icon: PackagePlus,
                path: "/compare-comments",
            }
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
                path: "/settings",
            }
        ],
    },
];


