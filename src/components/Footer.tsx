import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Award, ShieldAlert } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  setView?: (view: string) => void;
  openEnquiryModal?: () => void;
}

export default function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#303033] text-[#D6D6D6] border-t border-[#4B4B4D]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          {/* Logo inside clean white container badge */}
          <Link 
            to="/"
            className="bg-white p-2.5 rounded-lg border border-[#DDE8E3] inline-block shadow-sm cursor-pointer"
            onClick={handleNavClick}
          >
            <Logo size="md" variant="default" />
          </Link>

          <p className="text-xs text-[#D6D6D6] leading-relaxed">
            Bhartiya Skills LLP is a premier Indian turnkey laboratory setup, vocational training infrastructure, and educational equipment provider serving institutions nationwide.
          </p>
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#9EDB45] font-display uppercase tracking-wider font-bold">
              <Award className="h-3.5 w-3.5 text-[#F8D61D] flex-shrink-0" />
              <span>GST, LLP &amp; Udyam Registered</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#9EDB45] font-display uppercase tracking-wider font-bold">
              <ShieldAlert className="h-3.5 w-3.5 text-[#F8D61D] flex-shrink-0" />
              <span>NCVT and BOQ Compliant</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#9EDB45] border-l-4 border-[#33C98C] pl-2.5 mb-4 font-display">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wide font-display">
            <li>
              <Link to="/" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                Home Overview
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                About Our Company
              </Link>
            </li>
            <li>
              <Link to="/solutions" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                Laboratory Setup Solutions
              </Link>
            </li>
            <li>
              <Link to="/specialized" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block font-bold text-[#9EDB45]">
                Nursing, ATL &amp; ITI Trade Labs
              </Link>
            </li>
            <li>
              <Link to="/industries" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                Industries We Serve
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick} className="hover:text-[#33C98C] text-white hover:translate-x-1 transition-all text-left cursor-pointer inline-block">
                Contact &amp; Support Details
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#9EDB45] border-l-4 border-[#33C98C] pl-2.5 mb-4 font-display">
            Key Lab Setup Sol.
          </h4>
          <ul className="space-y-2 text-xs text-[#D6D6D6]">
            <li>Medical &amp; Healthcare Laboratory</li>
            <li>Automotive Diagnostic Workshop</li>
            <li>Electrical Machines &amp; Power Lab</li>
            <li>Electronics, PCB &amp; IoT Laboratory</li>
            <li>Solar &amp; Green Energy Simulator Lab</li>
            <li>Agriculture, Farming &amp; Soil Testing</li>
            <li>Apparel, Tailoring &amp; Fashion Designing</li>
            <li>Plumbing Installation Lab</li>
          </ul>
        </div>

        {/* Contact and Newsletter */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#9EDB45] border-l-4 border-[#33C98C] pl-2.5 mb-4 font-display">
            Our Address
          </h4>
          <ul className="space-y-3 text-xs text-[#D6D6D6]">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-[#F8D61D] flex-shrink-0 mt-0.5" />
              <span>
                Bhartiya Skills LLP,<br />
                J-09, Sector 63,<br />
                Noida, Uttar Pradesh
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-[#F8D61D] flex-shrink-0" />
              <a href="tel:+918860346363" className="hover:text-[#33C98C] font-mono font-bold text-white">+91 8860346363</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[#F8D61D] flex-shrink-0" />
              <a href="mailto:skillsbhartiya@gmail.com" className="hover:text-[#33C98C] font-mono font-bold text-white">skillsbhartiya@gmail.com</a>
            </li>
          </ul>


        </div>
      </div>

      {/* Corporate Tagline Statement */}
      <div className="border-t border-[#4B4B4D] bg-[#222225] py-4 text-center text-xs text-[#D6D6D6] px-4 italic">
        &ldquo;Bhartiya Skills LLP &ndash; Turnkey Laboratory, Vocational Training and Skill Development Infrastructure Solutions Across India.&rdquo;
      </div>

      {/* Bottom Legal Panel */}
      <div className="border-t border-[#4B4B4D] bg-[#1A1A1C] py-6 text-center text-[10px] text-[#A0A0A0] font-display">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="uppercase tracking-wider font-medium">
            &copy; {currentYear} Bhartiya Skills LLP. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[#D6D6D6] font-bold uppercase tracking-wider text-[9px]">
            <span className="hover:text-[#33C98C] cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-[#33C98C] cursor-pointer">Terms &amp; Conditions</span>
            <span>&bull;</span>
            <span className="hover:text-[#33C98C] cursor-pointer">Refund &amp; Cancellation Policy</span>
            <span>&bull;</span>
            <span className="hover:text-[#33C98C] cursor-pointer">Shipping Policy</span>
            <span>&bull;</span>
            <span className="hover:text-[#33C98C] cursor-pointer">Disclaimer</span>
            <span>&bull;</span>
            <span className="hover:text-[#33C98C] cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
