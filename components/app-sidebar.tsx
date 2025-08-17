// src/components/app-sidebar.tsx

"use client";

import {
  LifeBuoy,
  LogOutIcon,
  Send,
} from "lucide-react";

import { Sidebar, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { UpgradeCard } from "./dashboard/upgradeCard"; // Assuming you have moved this here
import { NavUser } from "./nav-user";
import { NavJournap } from "./nav-journap";
import { NavVortexAi } from "./nav-vortex-ai";
import { NavSecondary } from "./nav-secondary";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Replace the old data object with your new structure if needed
  const userData = {
    name: "Username605",
    email: "user12345@gmail.com",
    avatar: "/avatars/user.jpg",
  };

  const secondaryNavItems = [
    { title: "Support", url: "#", icon: LifeBuoy }, // Replace with your actual icons
    { title: "Feedback", url: "#", icon: Send },
  ];

  return (
    <Sidebar variant="inset" {...props}>
      <NavUser user={userData} />
      <SidebarContent>
        <NavJournap />
        <NavVortexAi />
        <NavSecondary items={secondaryNavItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="mt-auto p-4">
        <UpgradeCard />
        <Button variant={"secondary"} className="w-full mt-4">
          <LogOutIcon className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}