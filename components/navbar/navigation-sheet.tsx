import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
import { ThemeToggle } from "../theme-toggle";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <IconMenu2 size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <ThemeToggle />
        </div>
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};
