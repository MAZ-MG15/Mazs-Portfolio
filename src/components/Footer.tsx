export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border-subtle relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-text-secondary uppercase tracking-[1px]">
          &copy; {new Date().getFullYear()} Mohammed Muaaz. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/mohammed-muaaz-1706a32a2" target="_blank" rel="noopener noreferrer" className="text-[12px] uppercase tracking-[1px] text-text-secondary hover:text-gold transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
