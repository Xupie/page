"use client"

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

// https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false); 
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input 
        type="checkbox"
        className="opacity-0 peer"
        checked={theme === "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />        
      <span 
      className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
      ></span>
    </label>
  )
}