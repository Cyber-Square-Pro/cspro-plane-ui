import { Layout, CheckCircle, BarChart2, Columns4Icon, Bell,LayoutGrid, BaggageClaimIcon, CopyPlus, UserPlus, Users, UserRoundPlus, Calendar, CalendarClock, CalendarDays } from "lucide-react";

export const OnboardingRouteList = [
    {
        icon: LayoutGrid,
        label: 'Dashboard',
        href: '/'
    },
    {
        icon: BarChart2,
        label: 'Analytics',
        href: 'analytics'
    },
    {
        icon: BaggageClaimIcon,
        label: 'Projects',
        href: 'projects'
    },
    
    {
        icon: CheckCircle,
        label: 'All Issues',
        href: 'issues'
    },
    {
        icon: Bell,
        label: 'Notifications',
        href: 'notification'
    }
]

export const AttendanceRouteList = [
    {

        icon: CopyPlus,
        label: 'AddTeam',
        href: '/team/add'
    },
    {
        icon: Users,
        label: 'View Team',
        href: '/team/view'
    },
    {
     
        icon: UserRoundPlus,
        label: 'Add Member',
        href: 'member/add'
    },
    {
      
        icon: CalendarClock,
        label: 'Add Attendance',
        href: '/attendance/add'
    },
    
    {
      
        icon: CalendarDays,
        label: 'View Attendance',
        href: '/attendance'
    },
   
]
 



  