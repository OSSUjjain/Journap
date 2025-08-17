// src/components/nav-journaps.tsx

"use client";

import {
  Bell,
  Book,
  FileSearch,
  Map,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Roadmaps", href: "/dashboard", icon: Map },
  { title: "Search", href: "/search", icon: FileSearch },
  { title: "Courses", href: "/courses", icon: Book },
  { title: "Notifications", href: "/notifications", icon: Bell },
];

export function NavJournap() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 px-2 mt-4">
      <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider px-2">
        Journap
      </h3>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.title} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium",
                  "hover:bg-gray-100 transition-colors",
                  isActive ? "text-gray-800 nav-active-border" : "text-gray-600"
                )} //make the journap section nav button a separate component
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}