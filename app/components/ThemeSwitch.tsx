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
        className="p-2 rounded-lg hover:bg-slate-300/50 dark:hover:bg-slate-300/20"
        onClick={() => setTheme("light")}
      >
        <MdOutlineLightMode
          size={24}
          className={theme === "light" ? "text-primary" : "text-slate-400"}
        />
      </button>
      <button
        className="p-2 rounded-lg hover:bg-slate-300/50 dark:hover:bg-slate-300/20"
        onClick={() => setTheme("system")}
      >
        <MdOutlineDesktopMac
          size={24}
          className={theme === "system" ? "text-primary" : "text-slate-400"}
        />
      </button>
      <button
        className="p-2 rounded-lg hover:bg-slate-300/50 dark:hover:bg-slate-300/20"
        onClick={() => setTheme("dark")}
      >
        <MdOutlineDarkMode
          size={24}
          className={theme === "dark" ? "text-primary" : "text-slate-400"}
        />
      </button>
    </div>
  );
}
