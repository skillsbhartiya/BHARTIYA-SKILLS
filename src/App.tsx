import React, { useState, useEffect } from "react";
import {
  Phone, Mail, MapPin, Landmark, Check, CheckCircle, Award, Sparkles,
  X, ArrowRight, Search, Filter,
  Lightbulb, Map, Cpu, BookOpen, Briefcase, HeartPulse, Compass, Wrench, Settings, Bot,
  Activity, FileText, ChevronRight, Eye, Send, Lock
} from "lucide-react";

import { labSolutions } from "./data/labSolutions";
import { products } from "./data/products";
import { portfolioProjects } from "./data/projects";
import AuthorisedDealerSection from "./components/AuthorisedDealerSection";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryForm from "./components/EnquiryForm";
import LabDetailsModal from "./components/LabDetailsModal";
import AboutPage from "./components/AboutPage";
import SpecializedLabs from "./components/SpecializedLabs";
import TestimonialsSection from "./components/TestimonialsSection";
import SEOHead from "./components/SEOHead";
import Breadcrumbs from "./components/Breadcrumbs";
import { LabSolution } from "./types";

export default function App() {
  const getInitialView = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const v = params.get("view");
      if (v && ["home", "about", "solutions", "specialized", "industries", "projects", "products", "gallery", "enquiry", "contact", "404"].includes(v)) {
        return v;
      }
    } catch {
      // ignore
    }
    return "home";
  };

  // Navigation & UI States
  const [currentView, setCurrentViewRaw] = useState(getInitialView);

  const setView = (newView: string) => {
    setCurrentViewRaw(newView);
    try {
      const url = new URL(window.location.href);
      if (newView === "home") {
        url.searchParams.delete("view");
      } else {
        url.searchParams.set("view", newView);
      }
      window.history.pushState({ view: newView }, "", url.toString());
    } catch {
      // Ignore in restricted sandboxes
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const v = params.get("view") || "home";
        setCurrentViewRaw(v);
      } catch {
        // ignore
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  const [activeLab, setActiveLab] = useState<LabSolution | null>(null);
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [productSearch, setProductSearch] = useState("");
  const [activeProductCategory, setActiveProductCategory] = useState("All");
  
  // Quick callback form state
  const [callbackForm, setCallbackForm] = useState({ name: "", phone: "", email: "", lab: "Medical Laboratory", message: "" });
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  // Gallery lightbox state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Cookie/Privacy Consent Banner state
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);

  // Floating action contact popup state
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Government Tender states
  const [tenderCode, setTenderCode] = useState("");
  const [tenderSubmitted, setTenderSubmitted] = useState(false);

  // Filter Categories for Portfolio
  const projectFilters = ["All", "Medical", "Automotive", "Electrical", "Agriculture", "Computer", "Apparel", "Beautician", "Solar", "Plumbing", "Government Projects", "Training Centres"];

  // Filter Categories for Products
  const productCategories = ["All", "Medical & Healthcare", "Automotive", "Electrical", "Electronics", "Agriculture", "Computer & Classroom", "Apparel & Garment", "Telecom", "Solar & Renewable", "Plumbing", "Food Processing", "Media & Studio"];

  // Handle callback requisition submission
  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackForm.name || !callbackForm.phone) {
      alert("Please fill in Name and Phone Number.");
      return;
    }
    setCallbackSuccess(true);
    setTimeout(() => {
      setCallbackSuccess(false);
      setCallbackForm({ name: "", phone: "", email: "", lab: "Medical Laboratory", message: "" });
    }, 5000);
  };

  // Pre-fill enquiry form with requested lab
  const handleRequestProposalForLab = () => {
    setView("enquiry");
    setActiveLab(null);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // Grid of Industries We Serve
  const industries = [
    { name: "Central Government Departments", icon: Landmark },
    { name: "State Government Departments", icon: Landmark },
    { name: "Skill Development Missions", icon: Compass },
    { name: "Government ITIs", icon: Wrench },
    { name: "Private ITIs", icon: Settings },
    { name: "Schools & Academies", icon: BookOpen },
    { name: "Engineering Colleges", icon: Cpu },
    { name: "Polytechnic Institutes", icon: Activity },
    { name: "Medical Colleges", icon: HeartPulse },
    { name: "Nursing Institutes", icon: HeartPulse },
    { name: "Vocational Training Centres", icon: Briefcase },
    { name: "NGOs & Foundations", icon: Lightbulb },
    { name: "CSR Organizations", icon: Award },
    { name: "Corporate Learning Centres", icon: CheckCircle }
  ];

  // Gallery Items
  const galleryItems = [
    { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400", title: "Paramedical Simulation Setup" },
    { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400", title: "Electrical Machine Calibrations" },
    { url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400", title: "Automotive Overhauling Stand" },
    { url: "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?auto=format&fit=crop&q=80&w=400", title: "Electronics PCB Fabrication Workbench" },
    { url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400", title: "Rooftop Solar Training Inverter Rack" },
    { url: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=400", title: "Agricultural Soil Chemistry Kit" },
    { url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=400", title: "Apparel Designing & Tailoring Assembly" },
    { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400", title: "Threading Pipe Hydraulics Training Bench" }
  ];

  // 12-Stage Turnkey Timeline
  const workflowStages = [
    { title: "Requirement Understanding", desc: "Detailed consulting to evaluate institutional trade scope, student strength, and certification guidelines." },
    { title: "Site Survey", desc: "Physical on-site layout dimensions mapping, evaluating electrical power capacities, water, and ventilation parameters." },
    { title: "Laboratory Planning", desc: "Drawing CAD layouts, earmarking heavy-machinery foundations, student workstations, and safety passages." },
    { title: "Technical Proposal", desc: "Drafting robust technical specifications, matching BIS/ISO markings, and creating comprehensive BOQs." },
    { title: "Equipment Selection", desc: "Sourcing premium caliber trainers, diagnostic setups, machines, and tools from verified manufacturing channels." },
    { title: "Custom Manufacturing", desc: "Developing customized technical rigs, mock cabins, and specialized testing benches in our workshop facilities." },
    { title: "Supply & Logistics", desc: "Secure packaging, safe transit logistics, and dispatching to institutional locations across India." },
    { title: "Installation", desc: "Surgical floor-mounting, anchoring, pneumatic air piping, high-load electrical cabling, and setup." },
    { title: "Testing & Commissioning", desc: "Running rigorous calibration checks, pressure testing lines, and verifying machinery operations." },
    { title: "Faculty & Staff Training", desc: "Hands-on technical demonstrations, handling diagnostic devices, and providing detailed manuals." },
    { title: "Project Documentation", desc: "Compilation of user catalogs, standard operating procedure (SOP) boards, and calibration certificates." },
    { title: "After-Sales Support", desc: "Guaranteed AMC support, swift spare replacement, and diagnostic troubleshooting assistance." }
  ];

  // FAQs
  const faqs = [
    { q: "What types of laboratories does Bhartiya Skills LLP set up?", a: "We provide complete turnkey laboratory setup solutions for over 16 categories, including Medical, Healthcare, Automotive, Electrical, Electronics, Agriculture, Computer Labs, Apparel/Garment, Beautician, Telecom, Solar Energy, Food Processing, Media, and Plumbing trades." },
    { q: "Do you provide complete turnkey laboratory solutions?", a: "Yes, we handle the entire project lifecycle, including requirement assessment, site surveys, custom AutoCAD floor planning, equipment supply, on-site installation, machinery commissioning, standard SOP documentation, faculty training, and after-sales warranty services." },
    { q: "Do you execute projects across India?", a: "Absolutely. Bhartiya Skills LLP operates a comprehensive pan-India supply-chain and mobilization network. We have successfully executed laboratory setups and institutional infrastructure modernizations in almost every Indian state and UT." },
    { q: "Do you support institutional procurement?", a: "Yes, we have deep expertise in institutional procurement. We support government departments, ITIs, state skill missions, and polytechnics by providing technically aligned BOQs, compliance authorizations, and custom layout support." },
    { q: "Can laboratories be customized according to a BOQ?", a: "Yes, all our laboratory configurations are fully modular and customizable. We can custom-align our product supplies, machinery dimensions, and workstation counts to match your exact requisition specification document or pre-drafted Bill of Quantities." },
    { q: "Do you manufacture customized equipment?", a: "Yes, we maintain robust workshop capabilities to custom-engineer technical learning setups, automobile cut-section engine rigs, mock hotel reception panels, and high-load electrical control consoles tailored to specialized syllabi." },
    { q: "Do you provide installation and commissioning?", a: "Yes, on-site installation, mechanical rigging, floor anchoring, utility wiring, and full system commissioning are integral parts of our turnkey contract delivery." },
    { q: "Do you provide faculty and operator training?", a: "Yes. After completing setup and commissioning, our senior training engineers host comprehensive hands-on instruction sessions for local faculty, demonstrating instrument calibration, emergency shutdowns, and curriculum execution." },
    { q: "Can you supply laboratory furniture?", a: "Yes, we manufacture and supply specialized, heavy-duty industrial furniture, including anti-static (ESD) laboratory workbenches, heavy-duty steel toolboards, stainless steel chemical tables, ward beds, and ergonomically balanced seating." },
    { q: "Do you provide after-sales service?", a: "Yes. We back all our turnkey setups with solid manufacturer warranties, annual maintenance contracts (AMCs), swift supply of original spare parts, and troubleshooting support." },
    { q: "Can you prepare a customized project proposal?", a: "Yes, you can request our technical consultants to draft a layout or customized preliminary technical BOQ proposal according to your institutional requirements." },
    { q: "How can an institution submit an enquiry?", a: "You can submit your detailed requirements using our secure multi-field Enquiry Form, call our project desk directly, or schedule a customized consultation through our on-site callback portal." }
  ];

  // Render the specific view requested
  const renderView = () => {
    switch (currentView) {
      case "about":
        return (
          <AboutPage
            setView={setView}
            openEnquiryModal={() => {
              setView("enquiry");
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            setActiveLabByName={(labName: string) => {
              const found = labSolutions.find((l) => l.name.toLowerCase().includes(labName.toLowerCase()));
              if (found) {
                setActiveLab(found);
              } else {
                setView("solutions");
              }
            }}
          />
        );

      case "specialized":
        return (
          <section className="py-12 bg-[#F5F7F6] animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SpecializedLabs
                onOpenEnquiry={(preselected) => {
                  setView("enquiry");
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
              />
            </div>
          </section>
        );

      case "solutions":
        return (
          <section className="py-12 bg-[#ECFAF4] animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Vocational &amp; Institutional Trades
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  Complete Laboratory Setup Solutions
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  Explore our exhaustive list of 16 laboratory setups. Clicking any solution opens the technical parameters, lists of equipment, target institutions, and custom options.
                </p>
              </div>

              {/* Lab categories grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {labSolutions.map((lab) => (
                  <div
                    key={lab.id}
                    className="group bg-white rounded-xl border border-[#DDE8E3] shadow-sm hover:border-[#33C98C] hover:bg-[#ECFAF4] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={lab.image}
                        alt={lab.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 right-2 bg-[#303033] text-white text-[10px] font-display font-bold uppercase px-2 py-0.5 rounded-md shadow-xs">
                        Turnkey Setup
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h4 className="font-bold font-display uppercase tracking-tight text-[#303033] text-xs sm:text-sm leading-tight">{lab.name}</h4>
                        <p className="text-[#5B5B5D] text-xs line-clamp-3 leading-relaxed font-sans">{lab.shortDesc}</p>
                      </div>
                      <div className="pt-4 mt-auto">
                        <button
                          onClick={() => setActiveLab(lab)}
                          className="w-full rounded-md bg-[#33C98C] hover:bg-[#2AAA76] py-2 text-xs font-bold font-display uppercase tracking-wider text-white transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                        >
                          <span>Explore Lab Parameters</span>
                          <ChevronRight className="h-3.5 w-3.5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "turnkey":
        return (
          <section className="py-12 bg-[#EAF9F7] animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Rigorous Execution Standards
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  End-to-End Turnkey Workflow
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  How Bhartiya Skills LLP translates institutional requirements into functional, safe, and fully standardized training setups across India.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
                {workflowStages.map((stage, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-[#DDE8E3] p-5 rounded-xl shadow-xs hover:border-[#33C98C] hover:shadow-md transition-all"
                  >
                    <div className="absolute top-4 right-4 text-xs font-bold text-[#2CC2A5] font-mono">
                      PHASE {index + 1}
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-[#33C98C] text-white font-bold font-display text-xs flex items-center justify-center shadow-xs mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4 className="font-bold font-display uppercase tracking-tight text-[#303033] text-sm">{stage.title}</h4>
                    <p className="text-[#5B5B5D] text-xs mt-2 leading-relaxed font-sans">{stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "products":
        const filteredProducts = products.filter((p) => {
          const matchesCategory = activeProductCategory === "All" || p.category === activeProductCategory;
          const matchesSearch = p.title.toLowerCase().includes(productSearch.toLowerCase()) || p.description.toLowerCase().includes(productSearch.toLowerCase());
          return matchesCategory && matchesSearch;
        });

        return (
          <section className="py-12 bg-[#F5F7F6] animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Equipments &amp; Tools Catalog
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  Educational &amp; Technical Products
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  Search through our catalog of vocational trainers, industrial machinery, and standard laboratory instruments. Prices are available upon quotation request.
                </p>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="bg-white p-4 rounded-xl border border-[#DDE8E3] shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#A0A0A0]" />
                    <input
                      type="text"
                      placeholder="Search machines, tools, manikins, trainers..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="w-full rounded-md border border-[#DDE8E3] bg-white pl-10 pr-4 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
                    />
                  </div>
                  <div className="flex items-center gap-1 bg-[#ECFAF4] px-3 py-1.5 rounded-md border border-[#2CC2A5] text-[#303033] text-xs font-bold font-display uppercase tracking-wider">
                    <Filter className="h-3.5 w-3.5 text-[#33C98C]" />
                    <span>Filter:</span>
                  </div>
                </div>

                {/* Categories badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {productCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveProductCategory(cat)}
                      className={`px-3 py-1.5 rounded-md text-[11px] font-bold font-display tracking-wider uppercase transition-all cursor-pointer ${
                        activeProductCategory === cat
                          ? "bg-[#33C98C] text-white border border-[#33C98C] shadow-xs"
                          : "bg-[#F5F7F6] text-[#5B5B5D] hover:bg-[#ECFAF4] border border-[#DDE8E3]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-xl border border-[#DDE8E3] overflow-hidden shadow-xs hover:border-[#33C98C] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="aspect-square bg-[#F5F7F6] relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#ECFAF4] border border-[#2CC2A5] text-[10px] text-[#2CC2A5] px-2.5 py-0.5 rounded-md font-bold font-display tracking-wider uppercase">
                        {p.category}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <h4 className="font-bold font-display text-[#303033] text-xs sm:text-sm tracking-tight leading-snug uppercase">{p.title}</h4>
                        <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">{p.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#DDE8E3] mt-auto">
                        <span className="text-[#5B5B5D] text-[10px] font-mono tracking-wider uppercase font-bold">Request Price</span>
                        <button
                          onClick={() => {
                            setCallbackForm((prev) => ({ ...prev, message: `Quotation request for: ${p.title} (${p.category})` }));
                            setView("enquiry");
                            window.scrollTo({ top: 300, behavior: "smooth" });
                          }}
                          className="rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display text-xs px-3.5 py-1.5 cursor-pointer transition-all uppercase shadow-xs"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "industries":
        return (
          <section className="py-12 bg-white animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Service Demographics
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  Who We Cooperate With
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  We supply standardized educational, medical, agricultural, and technical vocational learning tools to diverse private, CSR, and state-owned entities across India.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
                {industries.map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <div
                      key={idx}
                      className="border border-[#DDE8E3] bg-[#F5F7F6] p-5 rounded-xl flex items-center gap-4 hover:bg-[#ECFAF4] hover:border-[#33C98C] transition-all duration-200"
                    >
                      <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center text-[#33C98C] flex-shrink-0 border border-[#DDE8E3] shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold font-display uppercase tracking-tight text-[#303033] text-xs sm:text-sm leading-snug">{ind.name}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case "projects":
        const filteredProjects = portfolioProjects.filter((p) => activeProjectFilter === "All" || p.category === activeProjectFilter);

        return (
          <section className="py-12 bg-[#F5F7F6] animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Completed Turnkey Works
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  Our Execution Portfolio
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  Browse through some of the training laboratories and smart centers commissioned by our team for academic and Government institute of india .
                </p>
              </div>

              {/* Filters list */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveProjectFilter(filter)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer ${
                      activeProjectFilter === filter
                        ? "bg-[#33C98C] text-white border border-[#33C98C] shadow-xs"
                        : "bg-white text-[#5B5B5D] hover:bg-[#ECFAF4] border border-[#DDE8E3]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-xl border border-[#DDE8E3] shadow-xs overflow-hidden flex flex-col justify-between hover:border-[#33C98C] hover:shadow-md transition-all"
                  >
                    <div className="aspect-video relative overflow-hidden bg-[#F5F7F6]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 right-2 bg-[#303033] text-white text-[10px] px-2 py-0.5 rounded-md font-bold font-display uppercase tracking-wider">
                        Year: {p.year}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono tracking-wider font-bold text-[#2CC2A5] uppercase">
                          {p.location}
                        </span>
                        <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-sm leading-snug">{p.title}</h4>
                        <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">{p.scope}</p>
                      </div>
                      <div className="pt-4 border-t border-[#DDE8E3] mt-4 flex items-center justify-between">
                        <span className="text-[#5B5B5D] text-[10px] font-bold font-display uppercase tracking-wider">{p.category || "Turnkey Setup"}</span>
                        <button
                          onClick={() => {
                            setCallbackForm((prev) => ({ ...prev, message: `Inquiry regarding completed project: ${p.title} in ${p.location}` }));
                            setView("enquiry");
                            window.scrollTo({ top: 300, behavior: "smooth" });
                          }}
                          className="text-[#33C98C] hover:text-[#2AAA76] text-xs font-bold font-display uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                        >
                          <span>Request Case Details</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "gallery":
        return (
          <section className="py-12 bg-white animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Media Showcase
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  Installation Gallery
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  Snapshots of vocational workshops, machinery, interactive panels, smart classroom installations, and student training sessions commissioned across India.
                </p>
              </div>

              {/* Grid with Lightbox triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
                {galleryItems.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(img.url)}
                    className="group relative bg-[#F5F7F6] border border-[#DDE8E3] rounded-xl overflow-hidden shadow-xs hover:border-[#33C98C] hover:shadow-md transition-all cursor-pointer aspect-video sm:aspect-square"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#303033] via-[#303033]/80 to-transparent p-3 text-white">
                      <h4 className="font-bold font-display uppercase tracking-wide text-xs leading-tight">{img.title}</h4>
                      <p className="text-[10px] text-[#9EDB45] mt-1 uppercase font-mono tracking-wider font-bold">Click to view</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "enquiry":
        return (
          <section className="py-12 bg-[#F5F7F6] animate-in fade-in duration-200">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Technical Requisitions
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  Submit Project Requirements
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  Fill out our comprehensive institutional requisition form to request customized floor drawings, compliance paperwork, and direct project quotations.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="py-12 bg-white animate-in fade-in duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Connect With Support
                </span>
                <h1 className="text-3xl font-bold font-display tracking-tight uppercase text-[#303033]">
                  Contact Bhartiya Skills LLP
                </h1>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
                  Our regional engineers, layout planners, and technical coordinators are here to support your institutional setup requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact details card */}
                <div className="space-y-6">
                  <div className="border border-[#DDE8E3] shadow-md rounded-xl p-6 space-y-6 bg-[#F5F7F6]">
                    <h3 className="text-sm font-bold font-display uppercase tracking-wider text-[#303033] border-l-4 border-[#33C98C] pl-2">
                      Office &amp; Warehouse Locations
                    </h3>
                    
                    <div className="space-y-4 text-xs sm:text-sm text-[#5B5B5D] font-sans">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#303033]">Our Address &amp; Technical Center:</strong>
                          <p className="text-[#5B5B5D] text-xs mt-0.5">Bhartiya Skills LLP, J-09, Sector 63, Noida, Uttar Pradesh</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[#33C98C] flex-shrink-0" />
                        <div>
                          <strong className="text-[#303033]">Technical Support Desk:</strong>
                          <p className="text-[#5B5B5D] text-xs mt-0.5"><a href="tel:+918860346363" className="hover:text-[#33C98C] font-mono font-bold">+91 8860346363</a></p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-[#33C98C] flex-shrink-0" />
                        <div>
                          <strong className="text-[#303033]">Official Communication Email ID:</strong>
                          <p className="text-[#5B5B5D] text-xs mt-0.5"><a href="mailto:skillsbhartiya@gmail.com" className="hover:text-[#33C98C] font-mono font-bold">skillsbhartiya@gmail.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Embed Location */}
                  <div className="w-full rounded-xl bg-[#ECFAF4] border border-[#2CC2A5] overflow-hidden relative shadow-md flex flex-col items-center justify-center text-center">
                    <div className="w-full h-64 relative">
                      <iframe
                        src="https://maps.google.com/maps?q=28.6248507,77.3873898&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        title="Bhartiya Skills LLP Google Maps Location"
                      />
                      <a
                        href="https://www.google.com/maps/place/Bhartiya+Skills+LLP/@28.6248554,77.3848149,17z/data=!3m1!4b1!4m6!3m5!1s0x390cefeea87dd695:0xd60876bb826ccda7!8m2!3d28.6248507!4d77.3873898!16s%2Fg%2F11kh_rxs3n?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 bg-[#303033] hover:bg-[#1A1A1C] text-white text-xs font-bold font-display uppercase px-3 py-2 rounded-lg shadow-lg flex items-center gap-1.5 transition-all hover:scale-105 z-10"
                      >
                        <MapPin className="h-4 w-4 text-[#F8D61D]" />
                        Open in Google Maps
                      </a>
                    </div>
                    <div className="p-3.5 bg-[#ECFAF4] w-full border-t border-[#2CC2A5]/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-left px-4">
                      <div>
                        <h4 className="font-bold font-display uppercase text-[#303033] text-xs tracking-tight">Our Location</h4>
                        <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans font-medium">
                          Bhartiya Skills LLP, J-09, Sector 63, Noida, Uttar Pradesh
                        </p>
                      </div>
                      <a
                        href="https://www.google.com/maps/place/Bhartiya+Skills+LLP/@28.6248554,77.3848149,17z/data=!3m1!4b1!4m6!3m5!1s0x390cefeea87dd695:0xd60876bb826ccda7!8m2!3d28.6248507!4d77.3873898!16s%2Fg%2F11kh_rxs3n?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display text-xs uppercase px-3 py-1.5 rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick callback request */}
                <div className="bg-white border border-[#DDE8E3] shadow-xl rounded-xl p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold font-display uppercase tracking-wider text-[#303033]">
                      Request an Instant Project Callback
                    </h3>
                    <p className="text-xs text-[#5B5B5D] mt-1 font-sans">
                      Our regional technical estimators will call you back within 1 hour during standard office coordinates.
                    </p>
                  </div>

                  {callbackSuccess ? (
                    <div className="bg-[#ECFAF4] border border-[#2CC2A5] p-6 rounded-lg text-center space-y-2 animate-in fade-in duration-150">
                      <CheckCircle className="h-8 w-8 text-[#33C98C] mx-auto" />
                      <h4 className="font-bold font-display uppercase text-[#303033] text-xs">Callback Request Registered!</h4>
                      <p className="text-[#5B5B5D] text-[11px] font-sans">A regional technical supervisor has queued your number for priority outreach.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleCallbackSubmit} className="space-y-4 font-sans">
                      <div>
                        <label className="block text-[10px] font-bold font-display uppercase tracking-wider text-[#303033] mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={callbackForm.name}
                          onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                          placeholder="e.g. Dr. Anil Kumar"
                          className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold font-display uppercase tracking-wider text-[#303033] mb-1">Mobile Number</label>
                          <input
                            type="tel"
                            required
                            value={callbackForm.phone}
                            onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                            placeholder="10-digit mobile"
                            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold font-display uppercase tracking-wider text-[#303033] mb-1">Email ID</label>
                          <input
                            type="email"
                            value={callbackForm.email}
                            onChange={(e) => setCallbackForm({ ...callbackForm, email: e.target.value })}
                            placeholder="e.g. contact@college.in"
                            className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold font-display uppercase tracking-wider text-[#303033] mb-1">Requested Trade Setup</label>
                        <select
                          value={callbackForm.lab}
                          onChange={(e) => setCallbackForm({ ...callbackForm, lab: e.target.value })}
                          className="w-full rounded-md border border-[#DDE8E3] bg-white px-3 py-2 text-xs text-[#303033]"
                        >
                          <option value="Medical Laboratory">Medical Laboratory</option>
                          <option value="Automotive Laboratory">Automotive Laboratory</option>
                          <option value="Electrical Laboratory">Electrical Laboratory</option>
                          <option value="Solar Laboratory">Solar Laboratory</option>
                          <option value="Agriculture Laboratory">Agriculture Laboratory</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold font-display uppercase tracking-wider text-[#303033] mb-1">Requirement Brief</label>
                        <textarea
                          rows={3}
                          value={callbackForm.message}
                          onChange={(e) => setCallbackForm({ ...callbackForm, message: e.target.value })}
                          placeholder="e.g. We require NCVT electrician lab setups..."
                          className="w-full rounded-md border border-[#DDE8E3] bg-white px-3.5 py-2 text-xs text-[#303033] placeholder-[#A0A0A0]"
                        />
                      </div>
                      <button className="w-full rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all">
                        <Send className="h-3.5 w-3.5 text-white" />
                        <span>Request A Callback</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        );

      // Home / Full Landing Page
      default:
        return (
          <div className="space-y-16 py-0 animate-in fade-in duration-200">
            
            {/* 1. Hero Banner */}
            <section className="relative bg-[#303033] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#DDE8E3]">
              {/* Background gradient overlay & decorative light blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#303033]/95 via-[#303033]/90 to-[#2CC2A5]/70" />
              <div className="absolute top-0 right-0 h-96 w-96 bg-[#33C98C]/20 rounded-full blur-3xl animate-pulse" />

              <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Hero Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-mono font-bold text-[#9EDB45] tracking-wide uppercase backdrop-blur-xs">
                    <Sparkles className="h-3.5 w-3.5 text-[#F8D61D]" />
                    Pan-India Project Execution
                  </div>
                  <h1 className="text-3xl font-bold font-display tracking-tight uppercase sm:text-4xl lg:text-5xl leading-tight text-white">
                    Complete Turnkey Laboratory &amp; <span className="text-[#9EDB45]">Skill Development Solutions</span> Across India
                  </h1>
                  <p className="text-[#D6D6D6] text-xs sm:text-sm md:text-base max-w-xl leading-relaxed font-sans">
                    Bhartiya Skills LLP plans, supplies, installs, and commissions advanced laboratories, vocational training centres, technical equipment, machinery, tools, specialized furniture, and complete skill-development infrastructure for government and private institutions.
                  </p>
                  
                  <div className="flex flex-wrap gap-3.5 pt-2">
                    <button
                      onClick={() => setView("solutions")}
                      className="rounded-md bg-[#33C98C] hover:bg-[#2AAA76] px-6 py-3 text-xs font-bold font-display uppercase tracking-wider text-white transition-all shadow-md cursor-pointer"
                    >
                      Explore Our Lab Solutions
                    </button>
                    <button
                      onClick={() => setView("enquiry")}
                      className="rounded-md bg-white/10 border border-white/30 px-6 py-3 text-xs font-bold font-display uppercase tracking-wider text-white hover:bg-white hover:text-[#303033] transition-all shadow-xs cursor-pointer backdrop-blur-xs"
                    >
                      Request Quotation
                    </button>
                  </div>

                  <p className="text-[11px] font-mono font-bold text-[#D6D6D6] uppercase tracking-widest pt-4">
                    &ldquo;Serving Government Departments, ITIs, Colleges, Universities, Skill Centres and Institutional Projects Across India.&rdquo;
                  </p>
                </div>

                {/* Hero Illustration */}
                <div className="lg:col-span-5 relative">
                  <div className="aspect-video lg:aspect-square bg-white/10 rounded-xl overflow-hidden border border-white/20 shadow-2xl relative">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                      alt="Modern Training Lab"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#303033] via-transparent to-transparent" />
                  </div>
                </div>

              </div>
            </section>

            {/* 2. Trust and Statistics Section */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-[#ECFAF4] rounded-xl border border-[#2CC2A5] p-6 md:p-8 shadow-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold text-[#33C98C] sm:text-3xl">16+</div>
                  <div className="text-[10px] font-bold font-display text-[#303033] uppercase tracking-wider">Lab Categories</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold text-[#33C98C] sm:text-3xl">100%</div>
                  <div className="text-[10px] font-bold font-display text-[#303033] uppercase tracking-wider">Pan-India Logistic</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold font-display text-[#303033] sm:text-3xl uppercase">Turnkey</div>
                  <div className="text-[10px] font-bold font-display text-[#2CC2A5] uppercase tracking-wider">Project Execution</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold font-display text-[#303033] sm:text-3xl uppercase">ISO</div>
                  <div className="text-[10px] font-bold font-display text-[#2CC2A5] uppercase tracking-wider">Quality Audited</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold font-display text-[#303033] sm:text-3xl uppercase">Faculty</div>
                  <div className="text-[10px] font-bold font-display text-[#2CC2A5] uppercase tracking-wider">Training &amp; Setup</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold font-display text-[#303033] sm:text-3xl uppercase">Dedicated</div>
                  <div className="text-[10px] font-bold font-display text-[#2CC2A5] uppercase tracking-wider">Technical Support</div>
                </div>
              </div>
            </section>

            {/* 2.5 Specialized Labs Showcase (Nursing, ATL, ITI) */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-[#303033] rounded-2xl p-6 sm:p-10 text-white space-y-8 shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#9EDB45] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block mb-2">
                      Specialized Trade Focus
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                      Nursing, ATL &amp; ITI Trade Laboratories
                    </h2>
                    <p className="text-xs sm:text-sm text-[#D6D6D6] max-w-xl mt-1">
                      Turnkey solutions engineered for Nursing Colleges, Atal Tinkering Labs (ATL), and ITI Trades (Electrician, Fitter, Diesel Mechanic, Motor Vehicle).
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setView("specialized");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white px-5 py-2.5 text-xs font-bold font-display uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md flex-shrink-0"
                  >
                    <span>Explore Specialized Labs</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {/* Card 1: Nursing */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-[#9EDB45] text-xs font-bold uppercase font-mono">
                        <HeartPulse className="h-4 w-4" />
                        <span>INC Standard Compliant</span>
                      </div>
                      <h3 className="text-lg font-bold font-display uppercase text-white">Nursing College Lab Equipment</h3>
                      <p className="text-xs text-[#D6D6D6] font-sans leading-relaxed">
                        Nursing Foundation, MCH OBG Birthing Simulators, Community Bags, Pre-Clinical Skeletons &amp; Nutrition Labs for B.Sc &amp; GNM Nursing.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setView("specialized");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="mt-4 text-xs font-bold text-[#33C98C] hover:text-[#9EDB45] uppercase flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Nursing Labs</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Card 2: ATL */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-[#9EDB45] text-xs font-bold uppercase font-mono">
                        <Bot className="h-4 w-4" />
                        <span>NITI Aayog / AIM Packages</span>
                      </div>
                      <h3 className="text-lg font-bold font-display uppercase text-white">ATL Lab Tools (Atal Tinkering)</h3>
                      <p className="text-xs text-[#D6D6D6] font-sans leading-relaxed">
                        Package P1 (Sensors/Arduino), P2 (3D Printers/Tools), P3 (Robotics/Drones), and P4 (Safety &amp; Modular STEM Benches) for Schools.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setView("specialized");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="mt-4 text-xs font-bold text-[#33C98C] hover:text-[#9EDB45] uppercase flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore ATL Lab Tools</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Card 3: ITI */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-[#9EDB45] text-xs font-bold uppercase font-mono">
                        <Wrench className="h-4 w-4" />
                        <span>NCVT / DGT ITI Syllabi</span>
                      </div>
                      <h3 className="text-lg font-bold font-display uppercase text-white">ITI Tools, Equipment &amp; Machinery</h3>
                      <p className="text-xs text-[#D6D6D6] font-sans leading-relaxed">
                        Electrician (MG Sets/Motors), Fitter (Lathes/Drills), Diesel Mechanic (CRDI Engine Rigs), and MMV (Chassis/OBD-II Scanners).
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setView("specialized");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="mt-4 text-xs font-bold text-[#33C98C] hover:text-[#9EDB45] uppercase flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore ITI Trade Equipment</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. About Bhartiya Skills LLP */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Turnkey Laboratory &amp; Technical Infrastructure Solutions
                </span>
                <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                  Bhartiya Skills LLP
                </h2>
                <p className="text-[#5B5B5D] text-xs sm:text-sm leading-relaxed font-sans">
                  Bhartiya Skills LLP is a manufacturer, distributor and turnkey solution provider of technical training tools, laboratory equipment, machinery, simulators, furniture and complete skill-development infrastructure.
                </p>
                <p className="text-[#5B5B5D] text-xs sm:text-sm leading-relaxed font-sans">
                  We provide end-to-end laboratory and training-centre setup solutions for government institutions, ITIs, engineering colleges, polytechnic colleges, universities, vocational training centres and skill-development projects across India.
                </p>
                <p className="text-[#5B5B5D] text-xs sm:text-sm leading-relaxed font-sans">
                  Our services include requirement assessment, laboratory planning, equipment supply, installation, commissioning, technical demonstrations, training and after-sales support.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-sans">
                  <div className="flex gap-2 items-center text-xs font-semibold text-[#303033]">
                    <CheckCircle className="h-4 w-4 text-[#33C98C] flex-shrink-0" />
                    <span>Complete Turnkey Solutions</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs font-semibold text-[#303033]">
                    <CheckCircle className="h-4 w-4 text-[#33C98C] flex-shrink-0" />
                    <span>Pan-India Project Execution</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs font-semibold text-[#303033]">
                    <CheckCircle className="h-4 w-4 text-[#33C98C] flex-shrink-0" />
                    <span>Government and Institutional Projects</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs font-semibold text-[#303033]">
                    <CheckCircle className="h-4 w-4 text-[#33C98C] flex-shrink-0" />
                    <span>Equipment, Installation and Training</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setView("about")}
                    className="rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display tracking-wider py-2.5 px-5 text-xs uppercase cursor-pointer transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>Read More About Us</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden border border-[#DDE8E3] bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1517055729445-fa7d27394b48?auto=format&fit=crop&q=80&w=600"
                  alt="Bhartiya Skills Technical Laboratory Setup"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </section>

            {/* 4. Dedicated Lab Solutions Section */}
            <section className="bg-[#F5F7F6] py-12 border-y border-[#DDE8E3]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#DDE8E3] pb-5">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase">
                      Exhaustive Capabilities
                    </span>
                    <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                      Our Laboratory Setup Solutions
                    </h2>
                  </div>
                  <button
                    onClick={() => setView("solutions")}
                    className="text-[#33C98C] hover:text-[#2AAA76] font-bold font-display uppercase tracking-wider text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View All 16 Categories</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Display 14 Prominent categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {labSolutions.slice(0, 14).map((lab) => (
                    <div
                      key={lab.id}
                      className="group bg-white rounded-xl border border-[#DDE8E3] shadow-xs hover:border-[#33C98C] hover:bg-[#ECFAF4] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={lab.image}
                          alt={lab.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 right-2 bg-[#303033] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-xs">
                          Turnkey setup
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-xs sm:text-sm tracking-tight">{lab.name}</h4>
                          <p className="text-[#5B5B5D] text-xs line-clamp-3 leading-relaxed font-sans">{lab.shortDesc}</p>
                        </div>
                        <div className="pt-4 mt-auto">
                          <button
                            onClick={() => setActiveLab(lab)}
                            className="w-full rounded-md bg-[#33C98C] hover:bg-[#2AAA76] py-2 text-xs font-bold font-display uppercase tracking-wider text-white transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                          >
                            <span>View Lab Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Turnkey Project Solutions Workflow Timeline */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  From Planning To Delivery
                </span>
                <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                  End-to-End Turnkey Project Execution
                </h2>
                <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-md mx-auto font-sans">
                  We manage every stage of the project, helping institutions create functional, safe, modern, and industry-relevant training infrastructure.
                </p>
              </div>

              {/* Workflow timeline stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-2">
                {workflowStages.slice(0, 8).map((stage, idx) => (
                  <div
                    key={idx}
                    className="bg-[#EAF9F7] border border-[#2CC2A5] p-5 rounded-xl flex flex-col justify-between hover:bg-[#ECFAF4] transition-colors shadow-xs"
                  >
                    <div className="space-y-3">
                      <div className="h-7 w-7 rounded-md bg-[#303033] text-[#9EDB45] font-mono text-xs font-bold flex items-center justify-center">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-xs sm:text-sm tracking-tight leading-snug">{stage.title}</h4>
                      <p className="text-[#5B5B5D] text-[11px] leading-relaxed font-sans">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Government Project Solutions */}
            <section className="bg-[#303033] text-white py-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#9EDB45] uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                      Institutional Setup Experts
                    </span>
                    <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-white sm:text-3xl">
                      Government &amp; Institutional Project Expertise
                    </h2>
                    <p className="text-[#D6D6D6] text-xs sm:text-sm leading-relaxed font-sans">
                      Bhartiya Skills LLP possesses comprehensive expertise compiling specifications and supporting high-profile state projects. We align fully with national and central programs, supplying premium, certified tools to institutional projects.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                        <h4 className="text-xs font-bold font-display uppercase text-[#9EDB45]">ITI Modernisations</h4>
                        <p className="text-[#D6D6D6] text-[10px] mt-1 font-sans">Full compliance with state-wise upgrading and equipment authorizations.</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                        <h4 className="text-xs font-bold font-display uppercase text-[#9EDB45]">PM Vishwakarma</h4>
                        <p className="text-[#D6D6D6] text-[10px] mt-1 font-sans">Sourcing toolkits matching modern skill requirements.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white text-[#303033] rounded-xl p-6 md:p-8 space-y-4 shadow-xl">
                    <h4 className="text-sm font-bold font-display uppercase tracking-wider text-[#303033] flex items-center gap-1.5">
                      <Award className="h-5 w-5 text-[#33C98C]" />
                      <span>Verified BOQ &amp; Curriculum Compliance Support</span>
                    </h4>
                    <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">
                      Our technical solutions team is qualified to assist educational bodies with direct purchases or customized requirement preparation processes.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setView("contact")}
                        className="w-full rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display py-2.5 text-xs uppercase cursor-pointer transition-all shadow-md"
                      >
                        Contact Technical Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Industries We Serve */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Sectors We Cater
                </span>
                <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                  Industries &amp; Institutions We Serve
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {industries.slice(0, 7).map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <div
                      key={idx}
                      className="border border-[#DDE8E3] bg-[#F5F7F6] p-4 rounded-xl text-center space-y-2.5 flex flex-col items-center justify-center hover:bg-[#ECFAF4] hover:border-[#33C98C] transition-all duration-200 shadow-xs"
                    >
                      <div className="h-8 w-8 bg-white text-[#33C98C] rounded-lg flex items-center justify-center border border-[#DDE8E3]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-[10px] sm:text-xs leading-tight">{ind.name}</h4>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 8. Products and Equipment */}
            <section className="bg-[#ECFAF4] py-12 border-y border-[#2CC2A5]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                      Supplies Catalog
                    </span>
                    <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                      Featured Products &amp; Equipments
                    </h2>
                  </div>
                  <button
                    onClick={() => setView("products")}
                    className="text-[#33C98C] hover:text-[#2AAA76] font-bold font-display uppercase tracking-wider text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Product Catalog</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.slice(0, 4).map((p) => (
                    <div
                      key={p.id}
                      className="bg-white rounded-xl border border-[#DDE8E3] overflow-hidden shadow-xs hover:border-[#33C98C] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="aspect-square bg-[#F5F7F6]">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-xs sm:text-sm tracking-tight leading-snug line-clamp-2">{p.title}</h4>
                        <p className="text-[#5B5B5D] text-xs line-clamp-2 font-sans">{p.description}</p>
                        <button
                          onClick={() => {
                            setCallbackForm((prev) => ({ ...prev, message: `Quotation request for featured product: ${p.title}` }));
                            setView("enquiry");
                            window.scrollTo({ top: 300, behavior: "smooth" });
                          }}
                          className="w-full text-center rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display text-[11px] py-2 cursor-pointer transition-all uppercase shadow-xs"
                        >
                          Request Price
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. Why Choose Us Section */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Our Strongest Virtues
                </span>
                <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                  Why Choose Bhartiya Skills LLP?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                <div className="border border-[#DDE8E3] p-5 rounded-xl bg-white space-y-3 hover:border-[#33C98C] hover:bg-[#ECFAF4] transition-all shadow-xs">
                  <div className="h-8 w-8 bg-[#ECFAF4] text-[#33C98C] border border-[#2CC2A5] rounded-lg flex items-center justify-center font-bold font-display text-sm">✓</div>
                  <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-sm tracking-tight">Complete Turnkey Project Capability</h4>
                  <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">From on-site floor calculations and utility mapping to complete physical assembly, calibrations, and training.</p>
                </div>
                <div className="border border-[#DDE8E3] p-5 rounded-xl bg-white space-y-3 hover:border-[#33C98C] hover:bg-[#ECFAF4] transition-all shadow-xs">
                  <div className="h-8 w-8 bg-[#ECFAF4] text-[#33C98C] border border-[#2CC2A5] rounded-lg flex items-center justify-center font-bold font-display text-sm">✓</div>
                  <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-sm tracking-tight">16+ Technical Lab Categories</h4>
                  <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">Covering exhaustive medical, automobile diagnostic, electrical, apparel, and solar setups compliant with BIS guides.</p>
                </div>
                <div className="border border-[#DDE8E3] p-5 rounded-xl bg-white space-y-3 hover:border-[#33C98C] hover:bg-[#ECFAF4] transition-all shadow-xs">
                  <div className="h-8 w-8 bg-[#ECFAF4] text-[#33C98C] border border-[#2CC2A5] rounded-lg flex items-center justify-center font-bold font-display text-sm">✓</div>
                  <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-sm tracking-tight">Pan-India Project Logistics</h4>
                  <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">Mobilizing installation equipment, specialized trainers, and diagnostic setups to any block, town, or city in India.</p>
                </div>
              </div>
            </section>

            {/* Authorised Dealer & Trusted Brand Partners Section */}
            <AuthorisedDealerSection
              onExploreProducts={() => {
                setView("solutions");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onRequestQuotation={() => {
                setView("enquiry");
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
            />

            {/* 10. Featured Projects Portfolio Section */}
            <section className="bg-[#F5F7F6] py-12 border-y border-[#DDE8E3]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                      Execution Gallery
                    </span>
                    <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                      Featured Installations
                    </h2>
                  </div>
                  <button
                    onClick={() => setView("projects")}
                    className="text-[#33C98C] hover:text-[#2AAA76] font-bold font-display uppercase tracking-wider text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Project Portfolio</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {portfolioProjects.slice(0, 3).map((p) => (
                    <div
                      key={p.id}
                      className="bg-white rounded-xl border border-[#DDE8E3] overflow-hidden shadow-xs hover:border-[#33C98C] hover:shadow-md transition-colors flex flex-col justify-between"
                    >
                      <div className="aspect-video relative overflow-hidden bg-[#F5F7F6]">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono font-bold text-[#2CC2A5] uppercase">{p.location}</span>
                          <h4 className="font-bold font-display uppercase tracking-wide text-[#303033] text-xs sm:text-sm tracking-tight leading-snug line-clamp-1">{p.title}</h4>
                          <p className="text-[#5B5B5D] text-xs line-clamp-2 leading-relaxed font-sans">{p.scope}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 11. Photo and Video Gallery */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#DDE8E3] pb-5">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                    On-Site Snapshots
                  </span>
                  <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                    Laboratory Installations &amp; Workspaces
                  </h2>
                </div>
                <button
                  onClick={() => setView("gallery")}
                  className="text-[#33C98C] hover:text-[#2AAA76] font-bold font-display uppercase tracking-wider text-xs flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Explore Media Album</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.slice(0, 4).map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(img.url)}
                    className="group relative bg-[#F5F7F6] border border-[#DDE8E3] rounded-xl overflow-hidden shadow-xs cursor-pointer aspect-square hover:border-[#33C98C] transition-colors"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#303033] via-[#303033]/80 to-transparent p-3 text-white">
                      <h4 className="font-bold font-display uppercase text-[10px] leading-tight text-white">{img.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 12. Testimonials Section */}
            <TestimonialsSection />

            {/* 13. Certifications and Compliance Section */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#5B5B5D]">
                Our Corporate Registrations &amp; Compliance Status
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-[#303033]">
                <span className="bg-[#F5F7F6] px-3.5 py-1.5 rounded-md border border-[#DDE8E3] uppercase tracking-wider text-[10px]">GST Registered Enterprise</span>
                <span className="bg-[#F5F7F6] px-3.5 py-1.5 rounded-md border border-[#DDE8E3] uppercase tracking-wider text-[10px]">LLP Identification Active</span>
                <span className="bg-[#F5F7F6] px-3.5 py-1.5 rounded-md border border-[#DDE8E3] uppercase tracking-wider text-[10px]">Verified Udyam MSME</span>
                <span className="bg-[#F5F7F6] px-3.5 py-1.5 rounded-md border border-[#DDE8E3] uppercase tracking-wider text-[10px]">ISO 9001:2015 Compliant</span>
              </div>
            </section>

            {/* 14. Frequently Asked Questions */}
            <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 pb-12 sm:pb-16">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
                  Resolving Common Queries
                </span>
                <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.slice(0, 6).map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-[#DDE8E3] rounded-xl bg-white p-4 [&_summary::-webkit-details-marker]:hidden transition-all shadow-xs"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold font-display uppercase text-xs sm:text-sm text-[#303033] select-none">
                      <span>{faq.q}</span>
                      <span className="text-[#33C98C] group-open:rotate-45 transition-transform duration-200 text-lg leading-none">+</span>
                    </summary>
                    <p className="text-[#5B5B5D] text-xs sm:text-sm mt-3 leading-relaxed border-t border-[#DDE8E3] pt-3 font-sans">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>



          </div>
        );

      case "404":
        return (
          <section className="py-20 bg-white animate-in fade-in duration-200 min-h-[60vh] flex items-center justify-center">
            <div className="mx-auto max-w-2xl px-4 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#ECFAF4] text-[#33C98C] border border-[#2CC2A5]">
                <span className="font-display font-black text-3xl">404</span>
              </div>
              <h1 className="text-3xl font-bold font-display uppercase tracking-tight text-[#303033]">
                Page Not Found
              </h1>
              <p className="text-[#5B5B5D] text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
                The page or laboratory solution you are looking for might have been moved, renamed, or is temporarily unavailable.
              </p>
              
              <div className="max-w-md mx-auto relative pt-2">
                <input
                  type="text"
                  placeholder="Search laboratory solutions or equipment..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setView("products");
                    }
                  }}
                  className="w-full rounded-xl border border-[#DDE8E3] bg-[#F5F7F6] pl-10 pr-24 py-3 text-xs text-[#303033] focus:outline-none focus:border-[#33C98C]"
                />
                <Search className="absolute left-3.5 top-5 h-4 w-4 text-[#A0A0A0]" />
                <button
                  onClick={() => setView("products")}
                  className="absolute right-2 top-3 rounded-lg bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display text-xs uppercase px-3.5 py-1.5 transition-colors cursor-pointer"
                >
                  Search
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => setView("home")}
                  className="rounded-lg bg-[#303033] hover:bg-[#1A1A1C] text-white font-bold font-display text-xs uppercase px-5 py-2.5 transition-all shadow-sm cursor-pointer"
                >
                  Return to Homepage
                </button>
                <button
                  onClick={() => setView("solutions")}
                  className="rounded-lg bg-[#ECFAF4] hover:bg-[#DDE8E3] text-[#303033] font-bold font-display text-xs uppercase px-5 py-2.5 border border-[#DDE8E3] transition-all cursor-pointer"
                >
                  Browse Lab Solutions
                </button>
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#5B5B5D] flex flex-col justify-between">
      {/* Dynamic SEO Head & Schema.org JSON-LD Manager */}
      <SEOHead
        currentView={currentView}
        activeLab={activeLab}
        activeProjectFilter={activeProjectFilter}
        activeProductCategory={activeProductCategory}
        searchQuery={productSearch}
      />

      {/* Sticky Navigation Header */}
      <Header
        currentView={currentView}
        setView={setView}
        openEnquiryModal={() => {
          setView("enquiry");
          window.scrollTo({ top: 300, behavior: "smooth" });
        }}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        currentView={currentView}
        setView={setView}
        activeLabName={activeLab ? activeLab.name : null}
        onClearActiveLab={() => setActiveLab(null)}
      />

      {/* Main Viewport Content */}
      <main className="flex-1 bg-transparent">
        {renderView()}
      </main>

      {/* Corporate Massive Footer */}
      <Footer
        setView={setView}
        openEnquiryModal={() => {
          setView("enquiry");
          window.scrollTo({ top: 300, behavior: "smooth" });
        }}
      />

      {/* 18. Floating Action Rail */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
        {/* Contact Numbers Popover */}
        {showContactPopup && (
          <div className="mb-1 w-72 rounded-2xl border border-[#DDE8E3] bg-white p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between border-b border-[#DDE8E3] pb-2.5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8D61D] text-[#303033]">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <h4 className="font-bold font-display text-xs uppercase tracking-wider text-[#303033]">
                  Contact Numbers
                </h4>
              </div>
              <button
                onClick={() => setShowContactPopup(false)}
                className="rounded-full p-1 text-[#5B5B5D] hover:bg-[#F5F7F6] hover:text-[#303033] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 space-y-2.5">
              <div className="rounded-xl bg-[#F5F7F6] p-2.5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#2CC2A5]">Direct Phone &amp; WhatsApp</p>
                  <p className="text-xs font-bold text-[#303033] font-mono">+91 88603 46363</p>
                </div>
                <a
                  href="tel:+918860346363"
                  className="rounded-lg bg-[#33C98C] px-3 py-1 text-[10px] font-bold font-display uppercase text-white hover:bg-[#2AAA76] transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="pt-1 text-center">
                <p className="text-[10px] text-[#5B5B5D]">Email: <span className="font-medium text-[#303033]">bhartiyaskills@gmail.com</span></p>
              </div>
            </div>
          </div>
        )}

        {/* 1st Icon: Direct Call & Show Contact Numbers */}
        <button
          onClick={() => setShowContactPopup((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8D61D] text-[#303033] hover:bg-[#E6C40D] shadow-xl transition-all hover:scale-110 cursor-pointer"
          title="View Contact Numbers"
        >
          <Phone className="h-5 w-5" />
        </button>

        {/* 2nd Icon: WhatsApp */}
        <a
          href="https://wa.me/918860346363?text=Hello%20Bhartiya%20Skills%20LLP%2C%20I%20have%20an%20enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:scale-110 cursor-pointer"
          title="Chat on WhatsApp (+91 88603 46363)"
        >
          <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>

      {/* 19. Individual Laboratory Details Overlay Modal */}
      {activeLab && (
        <LabDetailsModal
          lab={activeLab}
          onClose={() => setActiveLab(null)}
          onRequestProposal={handleRequestProposalForLab}
        />
      )}

      {/* 20. Photo lightbox modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white p-2 rounded-md bg-[#303033] hover:bg-black transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged setup snapshot"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain border border-white/20"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* 21. Dynamic Cookie / Privacy Consent Banner */}
      {!cookieConsentAccepted && (
        <div className="fixed bottom-6 left-6 z-40 max-w-sm rounded-xl border border-[#DDE8E3] bg-white p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-300 font-sans">
          <div className="flex gap-3 items-start">
            <Lock className="h-5 w-5 text-[#33C98C] flex-shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-2">
              <h4 className="font-bold font-display uppercase text-[#303033] text-xs leading-none">Privacy &amp; Cookie Consent</h4>
              <p className="text-[#5B5B5D] text-[10px] leading-relaxed">
                Bhartiya Skills LLP uses cookies to calibrate on-site layouts, remember preselected trade configurations, and optimize project requisition workflows.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setCookieConsentAccepted(true)}
                  className="rounded-md bg-[#33C98C] text-white hover:bg-[#2AAA76] px-3 py-1 text-[10px] font-bold font-display uppercase transition-colors cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setCookieConsentAccepted(true)}
                  className="rounded-md text-[#5B5B5D] hover:text-[#303033] px-2.5 py-1 text-[10px] font-medium"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
