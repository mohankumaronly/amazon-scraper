import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="h-20 lg:h-16 flex items-center justify-center text-slate-400 text-xs lg:text-sm shrink-0 border-t border-slate-100 bg-[#F9FAFB] px-6 text-center">
      <div className="flex items-center gap-1.5">
        <Copyright className="w-3.5 h-3.5" />
        <span>2026 AmzFlow Scraper. Built for efficiency.</span>
      </div>
    </footer>
  );
};

export default Footer;