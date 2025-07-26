import { Share2,Radar,FileText,BellPlus,LayoutDashboard,UserCircle,List,FilePlus,Settings,} from "lucide-react";


export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: LayoutDashboard,
                path: "/user-dashboard",
            },
            {
                label: "My Profile",
                icon: UserCircle,
                path: "/userProfile",
            },
        ],
    },
    {
        title: "Leads",
        links: [
            {
                label: "Add Leads",
                icon: List,
                path: "/user-leads",
            }
        ],
    },
    {
        title: "Social Media",
        links: [
            {
                label: "Connect",
                icon: Share2,
                path: "/connect-social-media",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Real Time Tracking",
                icon: Radar,
                path: "/realtime-tracking",
            },
            {
                label: "Alerts And Remainder",
                icon: BellPlus,
                path: "/add-alerts-and-reminder",
            },
            {
                label: "Reports",
                icon: FileText,
                path: "/user-report",
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


