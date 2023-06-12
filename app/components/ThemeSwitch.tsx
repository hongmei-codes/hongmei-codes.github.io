"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  MdOutlineLightMode,
  MdOutlineDesktopMac,
  MdOutlineDarkMode,
} from "react-icons/md";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2">
      <button
        className="p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-200/20"
        onClick={() => setTheme("light")}
      >
        <MdOutlineLightMode
          className={theme === "light" ? "text-primary" : "text-slate-400"}
        />
      </button>
      <button
        className="p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-200/20"
        onClick={() => setTheme("system")}
      >
        <MdOutlineDesktopMac
          className={theme === "system" ? "text-primary" : "text-slate-400"}
        />
      </button>
      <button
        className="p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-200/20"
        onClick={() => setTheme("dark")}
      >
        <MdOutlineDarkMode
          className={theme === "dark" ? "text-primary" : "text-slate-400"}
        />
      </button>
    </div>
  );
}
