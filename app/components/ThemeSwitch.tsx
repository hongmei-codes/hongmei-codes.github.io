"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      the current theme is: {theme}
      <div>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")} className="text-primary">
          Dark
        </button>
      </div>
    </>
  );
}
