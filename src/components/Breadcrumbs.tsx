import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  currentView?: string;
  setView?: (view: string) => void;
  activeLabName?: string | null;
  onClearActiveLab?: () => void;
}

const VIEW_NAMES: Record<string, string> = {
  about: "About Us",
  solutions: "Lab Solutions",
  specialized: "Nursing, ATL & ITI Labs",
  industries: "Industries We Serve",
  projects: "Turnkey Projects",
  products: "Product Catalog",
  gallery: "Installation Gallery",
  enquiry: "Requisition Form",
  contact: "Contact Us",
  "404": "Page Not Found"
};

export default function Breadcrumbs({
  activeLabName,
  onClearActiveLab
}: BreadcrumbsProps) {
  const location = useLocation();
  const pathKey = location.pathname.split("/")[1]?.toLowerCase() || "";

  if (pathKey === "" && !activeLabName) {
    return null;
  }

  const displayName = VIEW_NAMES[pathKey] || (pathKey ? pathKey.charAt(0).toUpperCase() + pathKey.slice(1) : "");

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[#F5F7F6] border-b border-[#DDE8E3] py-2.5 px-4 sm:px-6 lg:px-8 font-sans text-xs text-[#5B5B5D]"
    >
      <div className="mx-auto max-w-7xl flex items-center flex-wrap gap-1.5">
        <Link
          to="/"
          onClick={() => {
            if (onClearActiveLab) onClearActiveLab();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-1 text-[#5B5B5D] hover:text-[#33C98C] font-semibold transition-colors"
        >
          <Home className="h-3.5 w-3.5 text-[#33C98C]" />
          <span>Home</span>
        </Link>

        {pathKey !== "" && (
          <>
            <ChevronRight className="h-3.5 w-3.5 text-[#A0A0A0]" />
            {activeLabName ? (
              <Link
                to={`/${pathKey}`}
                onClick={() => {
                  if (onClearActiveLab) onClearActiveLab();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-[#5B5B5D] hover:text-[#33C98C] font-semibold transition-colors"
              >
                {displayName}
              </Link>
            ) : (
              <span className="font-bold text-[#303033] font-display uppercase tracking-tight">
                {displayName}
              </span>
            )}
          </>
        )}

        {activeLabName && (
          <>
            <ChevronRight className="h-3.5 w-3.5 text-[#A0A0A0]" />
            <span className="font-bold text-[#303033] font-display uppercase tracking-tight">
              {activeLabName}
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
