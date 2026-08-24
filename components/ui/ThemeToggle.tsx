'use client';
import { useTheme } from '@/components/layout/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2.5 rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
      ) : (
        <Sun className="w-4 h-4 text-amber-500" />
      )}
    </button>
  );
}
