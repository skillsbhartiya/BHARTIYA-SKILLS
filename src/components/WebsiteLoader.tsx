import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";

export default function WebsiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    // Ensure minimum display time of 750ms for a smooth, high-quality experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    // After fade-out transition completes (300ms), remove from DOM and restore scroll
    const fadeTimer = setTimeout(() => {
      setShouldRender(false);
      document.body.style.overflow = "";
    }, 1050);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-300 ease-out p-4 select-none ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Loading Bhartiya Skills LLP"
    >
      <div className="flex flex-col items-center justify-center space-y-6 max-w-sm w-full text-center">
        {/* Official Bhartiya Skills LLP Logo */}
        <div className="animate-in fade-in zoom-in-95 duration-500 scale-105">
          <Logo size="xl" variant="default" />
        </div>

        {/* Animated Brand Color Loading Bar */}
        <div className="w-52 h-1.5 bg-[#F5F7F6] border border-[#DDE8E3] rounded-full overflow-hidden relative shadow-inner">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-[#2CC2A5] via-[#33C98C] via-[#9EDB45] to-[#F8D61D] animate-loader-bar" />
        </div>

        {/* Brand Accent Pulse Dots */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="h-2.5 w-2.5 rounded-full bg-[#33C98C] animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2CC2A5] animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="h-2.5 w-2.5 rounded-full bg-[#9EDB45] animate-bounce" style={{ animationDelay: "300ms" }} />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F8D61D] animate-bounce" style={{ animationDelay: "450ms" }} />
        </div>

        {/* Loading Subtitle */}
        <div className="space-y-1">
          <p className="text-xs font-bold font-display uppercase tracking-widest text-[#303033]">
            Preparing Your Experience
          </p>
          <p className="text-[11px] font-sans tracking-wide text-[#2CC2A5] uppercase font-bold">
            Bhartiya Skills LLP
          </p>
        </div>
      </div>
    </div>
  );
}
