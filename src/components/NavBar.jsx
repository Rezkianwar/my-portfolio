import React from "react";

import {
  IconCodeCircle2,
  IconHome,
  IconMail,
  IconStar,
} from "@tabler/icons-react";
import { FileCode2Icon, SquareChartGanttIcon } from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Services",
      icon: (
        <IconCodeCircle2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Projects",
      icon: (
        <FileCode2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Resume",
      icon: (
        <SquareChartGanttIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "Testimonials",
      icon: (
        <IconStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#testimonials",
    },

    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="fixed md:left-[50%] md:translate-x-[-50%] left-[360px] bottom-[100px] z-[110]">
      <FloatingDock items={links} />
    </div>
  );
}
