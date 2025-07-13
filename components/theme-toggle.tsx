"use client";

import { IconBrightness, IconBrightnessOff } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  const animatedThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get button position for animation origin
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      // Convert to percentages for mask positioning
      const xPercent = (x / window.innerWidth) * 100;
      const yPercent = (y / window.innerHeight) * 100;
      
      // Set CSS custom properties for animation origin
      document.documentElement.style.setProperty('--theme-toggle-x', `${xPercent}%`);
      document.documentElement.style.setProperty('--theme-toggle-y', `${yPercent}%`);
    }

    // Start the view transition
    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  const cycleTheme = () => {
    if (theme === "light") {
      animatedThemeToggle();
    } else if (theme === "dark") {
      animatedThemeToggle();
    } else {
      // Handle system theme or any other theme
      setTheme("light");
    }
  };

  const getIcon = () => {
    switch (resolvedTheme) {
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
      ref={buttonRef}
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