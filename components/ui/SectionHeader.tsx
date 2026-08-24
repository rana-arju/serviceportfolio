import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 max-w-3xl ${centered ? 'text-center mx-auto' : ''}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
