"use client";

import { IconBrightness, IconBrightnessOff } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" className="rounded-full shadow-none" size="icon">
        <IconBrightness size={20} />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <IconBrightness size={20} />;
      case "dark":
        return <IconBrightnessOff size={20} />;
      default:
        return <IconBrightness size={20} />;
    }
  };

  return (
    <Button
      variant="outline"
      className="rounded-full shadow-none cursor-pointer"
      size="icon"
      onClick={cycleTheme}
      aria-label="Toggle theme"
    >
      {getIcon()}
    </Button>
  );
}