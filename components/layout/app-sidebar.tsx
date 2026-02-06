"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AlignVerticalDistributeStart, Calendar } from "lucide-react";
// import AppIcon from "@/components/AppIcon";
import { ComponentProps } from "react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Events",
      url: "/events",
      icon: AlignVerticalDistributeStart,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
    },
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                {/* <AppIcon /> */}
                <span className="text-base font-semibold">BeThere.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
