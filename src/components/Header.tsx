import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Landmark } from "lucide-react";
import { Logo } from "./Logo";

interface HeaderProps {
  currentView?: string;
  setView?: (view: string) => void;
  openEnquiryModal: () => void;
}

export default function Header({ openEnquiryModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "solutions", label: "Lab Solutions", path: "/solutions" },
    { id: "specialized", label: "Nursing, ATL & ITI Labs", path: "/specialized" },
    { id: "industries", label: "Industries We Serve", path: "/industries" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact Us", path: "/contact" }
  ];

  const isLinkActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDE8E3] bg-white/95 backdrop-blur-md shadow-xs">
      {/* Top Banner for Government & Institutional readiness */}
      <div className="bg-[#ECFAF4] px-4 py-1.5 text-center text-[10px] font-bold tracking-widest text-[#303033] uppercase sm:text-xs border-b border-[#DDE8E3]">
        <span className="inline-flex items-center gap-1.5 font-display">
          <Landmark className="h-3.5 w-3.5 text-[#2CC2A5]" />
          Turnkey Laboratory Setup &amp; Vocational Infrastructure Provider Across India
        </span>
      </div>

      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo - Official Logo Component */}
        <Link 
          to="/" 
          className="flex items-center cursor-pointer py-1" 
          onClick={handleNavClick}
        >
          <Logo size="md" variant="default" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {menuItems.map((item) => {
            const active = isLinkActive(item.path);
            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={handleNavClick}
                className={`px-2.5 py-1.5 rounded-md text-xs font-bold tracking-wide uppercase transition-all duration-200 font-display cursor-pointer ${
                  active
                    ? "bg-[#ECFAF4] text-[#33C98C] border border-[#33C98C]"
                    : "text-[#4B4B4D] hover:text-[#33C98C] hover:bg-[#F5F7F6]"
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={() => {
              navigate("/enquiry");
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="rounded-md bg-[#33C98C] hover:bg-[#2AAA76] px-4 py-2 text-xs font-bold text-white transition-all shadow-md font-display uppercase tracking-wider cursor-pointer"
          >
            Request an Enquiry Form
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-[#DDE8E3] bg-[#F5F7F6] text-[#303033] hover:text-[#33C98C] transition-colors cursor-pointer"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="xl:hidden border-t border-[#DDE8E3] bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 px-4 py-3">
            {menuItems.map((item) => {
              const active = isLinkActive(item.path);
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider font-display flex items-center justify-between ${
                    active
                      ? "bg-[#ECFAF4] text-[#33C98C] font-black border border-[#33C98C]"
                      : "text-[#4B4B4D] hover:bg-[#F5F7F6] hover:text-[#33C98C]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                  </span>
                  {active && <div className="h-2 w-2 rounded-full bg-[#33C98C]" />}
                </NavLink>
              );
            })}
            <div className="pt-3 border-t border-[#DDE8E3] mt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/enquiry");
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className="w-full rounded-md bg-[#33C98C] px-3 py-2.5 text-xs font-bold text-white shadow-md text-center font-display uppercase tracking-wider cursor-pointer"
              >
                Request Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
