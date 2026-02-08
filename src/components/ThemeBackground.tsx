"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Grainient from "./Grainient";

export default function ThemeBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 w-full h-full bg-background" />
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 -z-10 w-full h-full transition-colors duration-500">
      <Grainient
        color1={isDark ? "#333333" : "#f8fafc"}
        color2={isDark ? "#000000" : "#ffffff"}
        color3={isDark ? "#1a1a1a" : "#f1f5f9"}
        grainAmount={isDark ? 0.15 : 0.05}
        zoom={1.2}
        className="opacity-100 dark:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
}
