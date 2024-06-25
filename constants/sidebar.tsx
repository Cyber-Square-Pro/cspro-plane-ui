import { Layout, CheckCircle, BarChart2, Columns4Icon, Bell,LayoutGrid, BaggageClaimIcon } from "lucide-react";

export const RouteList = [
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
 
export const SettingsRouteList = [
    { 
        label: 'General',
        href: '/settings'
    },
    {
        label: 'Members',
        href: '/workspaces/projects/settings/members'
    },
    {
        label: 'Billing and Plans',
        href: '/settings/billing' 
    },
    { 
        label: 'Integrations', 
        href: '/settings/integrations' 
    },
    { 
        label: 'Imports',
        href: '/settings/imports' 
    },
    {
        label: 'Exports', 
        href: '/settings/exports' 
    },
    {
        label: 'Webhooks',
        href: '/settings/webhooks' 
    },
    { 
        label: 'API Tokens', 
        href: '/settings/api-tokens' 
    },
  ];