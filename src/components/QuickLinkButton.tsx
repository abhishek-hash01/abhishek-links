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
    <div className="group relative flex items-center p-4 w-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md hover:border-white/80 rounded-2xl transition-all duration-300">
      <div className="relative flex-shrink-0 flex items-center justify-center w-12 h-12 bg-white text-slate-500 rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-slate-100/80 group-hover:bg-brand-teal-light/10 group-hover:text-brand-teal group-hover:border-brand-teal-light/20 transition-all duration-300">
        {icon}
      </div>
      <div className="relative ml-4 flex-1 text-left">
        <h3 className="text-[17px] font-semibold text-slate-800 transition-colors duration-300">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[13px] text-slate-500 mt-0.5 font-medium transition-colors duration-300">
            {subtitle}
          </p>
        )}
      </div>
      <div className="relative flex-shrink-0 text-slate-300 group-hover:text-brand-teal/70 transition-transform duration-300 group-hover:translate-x-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-2xl transform transition-transform active:scale-[0.98] duration-200">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block w-full outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-2xl transform transition-transform active:scale-[0.98] duration-200">
      {content}
    </Link>
  );
}
