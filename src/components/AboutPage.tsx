import React from "react";
import {
  CheckCircle, Landmark, Building2, Wrench, Settings, ShieldCheck, Phone,
  Mail, MapPin, ExternalLink, ArrowRight, Award, Compass, HelpCircle,
  FileText, Users, Lightbulb, Target, Eye, HeartHandshake, History, MessageSquare,
  Sparkles, Layers
} from "lucide-react";
import { companyConfig } from "../data/companyConfig";

interface AboutPageProps {
  setView: (view: string) => void;
  openEnquiryModal: () => void;
  setActiveLabByName?: (labName: string) => void;
}

export default function AboutPage({ setView, openEnquiryModal, setActiveLabByName }: AboutPageProps) {
  const {
    companyInfo,
    aboutContent,
    expertise,
    turnkeyDescription,
    services,
    industrySolutions,
    experienceAndReach,
    esteemedClients,
    whyChooseUs,
    mission,
    vision,
    commitment,
    legacy,
    ctaSection
  } = companyConfig;

  // Json-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "description": aboutContent.subHeading,
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.svg`,
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "75, Shradhanand Marg",
        "addressLocality": "Delhi",
        "postalCode": "110006",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "A-202, Sector 63",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.phone,
      "contactType": "customer service",
      "email": companyInfo.email,
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  };

  const handleCtaClick = (action: string) => {
    if (action === "enquiry") {
      openEnquiryModal();
    } else {
      setView(action);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <article className="animate-in fade-in duration-200 bg-[#F5F7F6]">
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================================
          SECTION 1: ABOUT US HERO BANNER
          ========================================================================= */}
      <section id="about-hero" className="relative bg-[#303033] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#DDE8E3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#303033] via-[#222225] to-[#166A5B]/80" />
        <div className="absolute -top-12 -right-12 h-80 w-80 bg-[#33C98C]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ECFAF4]/10 border border-[#33C98C]/30 px-3.5 py-1 text-xs font-mono font-bold text-[#9EDB45] tracking-widest uppercase backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F8D61D]" />
            <span>Turnkey Skill Infrastructure Partner</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-white leading-tight">
            {aboutContent.mainHeading}
          </h1>

          <p className="text-[#9EDB45] text-sm sm:text-base md:text-lg max-w-3xl font-display font-bold leading-relaxed">
            {aboutContent.subHeading}
          </p>

          <p className="text-[#D6D6D6] text-xs sm:text-sm max-w-3xl leading-relaxed font-sans pt-1">
            Manufacturing, Distribution and setting up complete technical training equipment, laboratory machinery, simulators, and specialized furniture for educational and vocational institutions across India.
          </p>

          {/* Quick Breadcrumb/SEO metadata */}
          <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[11px] font-mono text-[#A0A0A0] uppercase">
            <span>Home</span>
            <span>&bull;</span>
            <span className="text-[#33C98C] font-bold">About Us</span>
            <span>&bull;</span>
            <span>Pan-India Turnkey Solutions</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* =========================================================================
            SECTION 2: COMPANY INTRODUCTION
            ========================================================================= */}
        <section id="company-introduction" className="bg-white rounded-2xl border border-[#DDE8E3] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="border-l-4 border-[#33C98C] pl-4 space-y-1">
            <span className="text-xs font-mono font-bold text-[#2CC2A5] uppercase tracking-wider">Official Profile</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#303033]">
              Who We Are
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#5B5B5D] leading-relaxed font-sans">
            {aboutContent.introParagraphs.map((para, idx) => (
              <p key={idx} className="text-justify sm:text-left">
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#DDE8E3]">
            <div className="bg-[#ECFAF4] p-4 rounded-xl border border-[#2CC2A5]/30 space-y-1">
              <div className="text-xs font-bold font-display uppercase text-[#303033] flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#33C98C]" />
                <span>Turnkey Provider</span>
              </div>
              <p className="text-[11px] text-[#5B5B5D]">End-to-end laboratory and training infrastructure setup.</p>
            </div>

            <div className="bg-[#ECFAF4] p-4 rounded-xl border border-[#2CC2A5]/30 space-y-1">
              <div className="text-xs font-bold font-display uppercase text-[#303033] flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#33C98C]" />
                <span>Customised BOQs</span>
              </div>
              <p className="text-[11px] text-[#5B5B5D]">Tailored setups matching approved institutional requirements.</p>
            </div>

            <div className="bg-[#ECFAF4] p-4 rounded-xl border border-[#2CC2A5]/30 space-y-1">
              <div className="text-xs font-bold font-display uppercase text-[#303033] flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#33C98C]" />
                <span>Multi-Sector Supply</span>
              </div>
              <p className="text-[11px] text-[#5B5B5D]">Covering 24+ technical &amp; vocational training sectors.</p>
            </div>

            <div className="bg-[#ECFAF4] p-4 rounded-xl border border-[#2CC2A5]/30 space-y-1">
              <div className="text-xs font-bold font-display uppercase text-[#303033] flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#33C98C]" />
                <span>Pan-India Network</span>
              </div>
              <p className="text-[11px] text-[#5B5B5D]">Supply, installation &amp; commissioning across all states.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: OUR EXPERTISE
            ========================================================================= */}
        <section id="our-expertise" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DDE8E3] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-l-4 border-[#33C98C] pl-4 space-y-1">
              <span className="text-xs font-mono font-bold text-[#2CC2A5] uppercase tracking-wider">Target Beneficiaries</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#303033]">
                {expertise.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#5B5B5D] leading-relaxed font-sans">
              Bhartiya Skills LLP specialises in designing and executing modern laboratory infrastructure tailored for diverse institutional sectors across India:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.institutions.map((inst, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F5F7F6] border border-[#DDE8E3] text-xs font-semibold text-[#303033]">
                  <div className="h-2 w-2 rounded-full bg-[#33C98C] flex-shrink-0" />
                  <span>{inst}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#DDE8E3] p-4 shadow-sm overflow-hidden h-full flex flex-col justify-between">
            <div className="aspect-video lg:aspect-square w-full rounded-xl overflow-hidden bg-[#F5F7F6] relative">
              <img
                src={expertise.image}
                alt="Vocational Training Centre"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#303033]/80 via-transparent to-transparent p-4 flex items-end">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#9EDB45] tracking-wider">Institutional Standard</span>
                  <h3 className="text-xs sm:text-sm font-bold uppercase font-display leading-tight">
                    Modern Technical &amp; Vocational Training Environment
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: TURNKEY PROJECT DESCRIPTION
            ========================================================================= */}
        <section id="turnkey-project-description" className="bg-[#ECFAF4] rounded-2xl border border-[#2CC2A5] p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#303033] text-[#9EDB45] flex items-center justify-center font-bold font-display flex-shrink-0">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#2CC2A5] uppercase tracking-wider">Comprehensive Execution</span>
              <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#303033]">
                Turnkey Laboratory &amp; Training Centre Setup
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#303033] leading-relaxed font-sans font-medium">
            {turnkeyDescription}
          </p>
        </section>

        {/* =========================================================================
            SECTION 5: OUR SERVICES (12 ICON CARDS)
            ========================================================================= */}
        <section id="our-services" className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
              End-To-End Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#303033]">
              Our Services
            </h2>
            <p className="text-[#5B5B5D] text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Complete solutions covering every stage of technical and skill development laboratory projects across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#DDE8E3] p-5 shadow-xs hover:border-[#33C98C] hover:bg-[#ECFAF4] transition-all duration-200 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-lg bg-[#EAF9F7] border border-[#2CC2A5] text-[#33C98C] font-mono text-xs font-bold flex items-center justify-center">
                    {String(service.id).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold font-display uppercase text-xs sm:text-sm text-[#303033] leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: TECHNICAL AND VOCATIONAL LABORATORY SOLUTIONS (24 CARDS)
            ========================================================================= */}
        <section id="industry-solutions" className="bg-white rounded-2xl border border-[#DDE8E3] p-6 sm:p-8 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#DDE8E3] pb-4">
            <div className="border-l-4 border-[#33C98C] pl-4 space-y-1">
              <span className="text-xs font-mono font-bold text-[#2CC2A5] uppercase tracking-wider">Institutional Portfolios</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#303033]">
                Technical and Vocational Laboratory Solutions
              </h2>
            </div>
            <button
              onClick={() => { setView("solutions"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-[#33C98C] hover:text-[#2AAA76] font-bold font-display uppercase text-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {industrySolutions.map((lab) => (
              <div
                key={lab.id}
                className="border border-[#DDE8E3] bg-[#F5F7F6] rounded-xl p-4 space-y-3 flex flex-col justify-between hover:border-[#33C98C] hover:bg-[#ECFAF4] transition-all"
              >
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono font-bold text-[#2CC2A5] uppercase tracking-wider">
                    Laboratory Category
                  </div>
                  <h3 className="font-bold font-display uppercase text-xs sm:text-sm text-[#303033] leading-snug">
                    {lab.name}
                  </h3>
                  <p className="text-[#5B5B5D] text-xs leading-relaxed font-sans">
                    {lab.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#DDE8E3]/60">
                  <button
                    onClick={() => {
                      if (setActiveLabByName) {
                        setActiveLabByName(lab.name);
                      } else {
                        setView("solutions");
                      }
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full text-center rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display text-[11px] py-1.5 uppercase tracking-wider cursor-pointer transition-colors shadow-xs"
                  >
                    View Lab Solutions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: OUR EXPERIENCE AND REACH (EDITABLE PLACEHOLDERS & ADMIN NOTES)
            ========================================================================= */}
        <section id="experience-and-reach" className="space-y-6">
          <div className="bg-[#303033] text-white rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
            <div className="border-b border-[#4B4B4D] pb-4">
              <span className="text-xs font-mono font-bold text-[#9EDB45] uppercase tracking-widest">Track Record &amp; Outreach</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white mt-1">
                {experienceAndReach.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#D6D6D6] leading-relaxed font-sans">
              {experienceAndReach.paragraph}
            </p>

            {experienceAndReach.showStatsSection && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {experienceAndReach.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/20 p-4 rounded-xl text-center space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-[#9EDB45]">{stat.number}</div>
                    <div className="text-[10px] font-bold font-display uppercase text-[#D6D6D6] tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: WHY CHOOSE US
            ========================================================================= */}
        <section id="why-choose-us" className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-block">
              Core Differentiators
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#303033]">
              {whyChooseUs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {whyChooseUs.points.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#DDE8E3] p-4 shadow-xs flex items-start gap-3 hover:border-[#33C98C] hover:bg-[#ECFAF4] transition-all"
              >
                <div className="h-6 w-6 rounded-full bg-[#ECFAF4] border border-[#2CC2A5] text-[#33C98C] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-xs font-bold font-display uppercase text-[#303033] leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 10, 11, 12: MISSION, VISION & COMMITMENT
            ========================================================================= */}
        <section id="mission-vision-commitment" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white rounded-2xl border border-[#DDE8E3] p-6 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#ECFAF4] border border-[#2CC2A5] text-[#33C98C] flex items-center justify-center font-bold">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#303033]">
                {mission.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5B5B5D] leading-relaxed font-sans">
                {mission.content}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl border border-[#DDE8E3] p-6 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#ECFAF4] border border-[#2CC2A5] text-[#33C98C] flex items-center justify-center font-bold">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#303033]">
                {vision.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5B5B5D] leading-relaxed font-sans">
                {vision.content}
              </p>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-white rounded-2xl border border-[#DDE8E3] p-6 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-[#ECFAF4] border border-[#2CC2A5] text-[#33C98C] flex items-center justify-center font-bold">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#303033]">
              {commitment.title}
            </h2>
            <ul className="space-y-2 text-xs text-[#5B5B5D] font-sans">
              {commitment.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#33C98C] font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* =========================================================================
            SECTION 14: OFFICE AND CONTACT INFORMATION
            ========================================================================= */}
        <section id="contact-info" className="bg-white rounded-2xl border border-[#DDE8E3] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-l-4 border-[#33C98C] pl-4 space-y-1">
            <span className="text-xs font-mono font-bold text-[#2CC2A5] uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#303033]">
              Office &amp; Contact Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold font-display uppercase text-[#303033]">
                <Building2 className="h-4 w-4 text-[#33C98C]" />
                <span>Head Office</span>
              </div>
              <p className="text-xs text-[#5B5B5D] font-sans leading-relaxed">
                {companyInfo.headOffice}
              </p>
            </div>

            <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold font-display uppercase text-[#303033]">
                <Building2 className="h-4 w-4 text-[#33C98C]" />
                <span>Branch Office</span>
              </div>
              <p className="text-xs text-[#5B5B5D] font-sans leading-relaxed">
                {companyInfo.branchOffice}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE8E3]">
            <div className="space-y-1 text-xs text-[#5B5B5D]">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#33C98C]" />
                <span className="font-bold text-[#303033]">Email:</span>
                <a href={`mailto:${companyInfo.email}`} className="text-[#33C98C] font-mono font-bold hover:underline">{companyInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#33C98C]" />
                <span className="font-bold text-[#303033]">Contact Phone:</span>
                <a href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-[#303033] font-mono font-bold hover:underline">{companyInfo.phone}</a>
              </div>
            </div>

            {/* Interactive Direct Communication Action Buttons */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 bg-[#F8D61D] hover:bg-[#E6C40D] text-[#303033] font-bold font-display text-xs uppercase px-4 py-2 rounded-lg shadow-xs transition-colors"
              >
                <Phone className="h-3.5 w-3.5" /> Call Now
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-1.5 bg-[#33C98C] hover:bg-[#2AAA76] text-white font-bold font-display text-xs uppercase px-4 py-2 rounded-lg shadow-xs transition-colors"
              >
                <Mail className="h-3.5 w-3.5" /> Send Email
              </a>

              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold font-display text-xs uppercase px-4 py-2 rounded-lg shadow-xs transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5" /> WhatsApp
              </a>

              <a
                href="https://maps.google.com/?q=75+Shradhanand+Marg+Delhi+110006"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#303033] hover:bg-[#1A1A1C] text-white font-bold font-display text-xs uppercase px-4 py-2 rounded-lg shadow-xs transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-[#F8D61D]" /> Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 15: PROJECT ENQUIRY CALL-TO-ACTION (CTA)
            ========================================================================= */}
        <section id="about-cta" className="bg-[#303033] text-white rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#303033] via-[#166A5B] to-[#303033]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display uppercase tracking-tight text-white leading-tight">
              {ctaSection.heading}
            </h2>
            <p className="text-[#D6D6D6] text-xs sm:text-sm font-sans leading-relaxed">
              {ctaSection.subheading}
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {ctaSection.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCtaClick(btn.action)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold font-display uppercase tracking-wider cursor-pointer transition-all shadow-md ${
                    btn.primary
                      ? "bg-[#33C98C] hover:bg-[#2AAA76] text-white border border-[#33C98C]"
                      : "bg-white/10 hover:bg-white text-white hover:text-[#303033] border border-white/30 backdrop-blur-xs"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
