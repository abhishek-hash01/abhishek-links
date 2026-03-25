import React from 'react';
import Link from 'next/link';

interface QuickLinkButtonProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  isExternal?: boolean;
}

export function QuickLinkButton({ href, icon, title, subtitle, isExternal = true }: QuickLinkButtonProps) {
  const content = (
    <div className="group relative flex items-center p-4 w-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-teal-light group-hover:-translate-y-0.5">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-slate-50 text-slate-600 rounded-xl group-hover:bg-brand-teal-light group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="ml-4 flex-1 text-left">
        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-brand-teal-dark transition-colors duration-300">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-slate-500 mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 text-slate-300 group-hover:text-brand-teal transition-transform duration-300 group-hover:translate-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-2xl">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block w-full outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-2xl">
      {content}
    </Link>
  );
}
