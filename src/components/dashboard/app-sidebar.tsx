'use client';

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { BookOpen, LayoutDashboard, Settings, User } from 'lucide-react';
import { LearnscapeIcon } from '../icons';

export function AppSidebar() {
  return (
    <>
      <SidebarHeader>
        <div className="inline-flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <LearnscapeIcon className="size-6 shrink-0" />
          <p className="font-headline font-semibold text-lg text-primary truncate group-data-[collapsible=icon]:hidden">
            Learnscape
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Dashboard" isActive>
              <LayoutDashboard />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Courses">
              <BookOpen />
              <span>Courses</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Profile">
              <User />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
