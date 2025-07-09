"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { scrollToSection } from "@/lib/utils";


export const NavMenu = ({ className, ...props }: NavigationMenuProps) => (
  <NavigationMenu
    className={cn("data-[orientation=vertical]:items-start", className)}
    {...props}
  >
    <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <button
            onClick={() => scrollToSection('about')}
            className="text-inherit bg-transparent border-none cursor-pointer p-0"
          >
            About
          </button>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-inherit bg-transparent border-none cursor-pointer p-0"
          >
            Experience
          </button>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-inherit bg-transparent border-none cursor-pointer p-0"
          >
            Projects
          </button>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
