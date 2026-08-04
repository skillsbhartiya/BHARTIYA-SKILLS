import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { labSolutions } from "../data/labSolutions";
import { LabSolution } from "../types";

interface SEOHeadProps {
  currentView?: string;
  activeLab?: LabSolution | null;
  activeProjectFilter?: string;
  activeProductCategory?: string;
  searchQuery?: string;
}

const BASE_URL = "https://engineeringinstrument.com";

const VIEW_SEO_MAP: Record<string, { title: string; description: string; path: string; keywords: string }> = {
  home: {
    title: "Bhartiya Skills LLP | Turnkey Laboratory & Skill Development Solutions India",
    description: "Bhartiya Skills LLP plans, supplies, installs, and commissions turnkey laboratory setups, ITI workshops, nursing college labs, and vocational infrastructure across India.",
    path: "/",
    keywords: "turnkey laboratory setup India, skill development equipment, ITI lab tools, nursing college lab equipment, Atal Tinkering Lab setup, PM Vishwakarma workshop equipment, Bhartiya Skills LLP Noida",
  },
  about: {
    title: "About Us | Bhartiya Skills LLP - Vocational & Educational Lab Infrastructure",
    description: "Discover Bhartiya Skills LLP - ISO 9001:2015 certified, MSME registered turnkey laboratory setup provider for government ITIs, skill missions, polytechnics, and colleges.",
    path: "/about",
    keywords: "about Bhartiya Skills LLP, laboratory setup company Noida, vocational equipment supplier India, MSME certified lab infrastructure",
  },
  solutions: {
    title: "Complete Laboratory Setup Solutions | 16+ Vocational & Technical Trades",
    description: "Explore 16+ comprehensive laboratory setups for Medical, Automotive, Electrical, Electronics, Agriculture, Computer, Solar, Apparel, and Plumbing trades.",
    path: "/solutions",
    keywords: "vocational laboratory setups, ITI lab categories, nursing simulation lab setup, electrical trainer bench, automotive engine overhaul rig",
  },
  specialized: {
    title: "Nursing, ATL & ITI Laboratory Setups | Specialized Technical Labs",
    description: "Turnkey setups for Paramedical & Nursing labs, Atal Tinkering Robotics Labs (ATL), and ITI trade modernizations custom-designed to course syllabi.",
    path: "/specialized",
    keywords: "nursing lab mannequin supplier, Atal Tinkering Lab robotics kit, ITI modernization tools, PM Vishwakarma equipment",
  },
  industries: {
    title: "Industries We Serve | ITIs, Govt Skill Missions, Colleges & Schools",
    description: "Bhartiya Skills LLP equips Central & State Govt departments, Skill Missions, Govt & Private ITIs, Engineering colleges, Polytechnics, and Nursing institutes.",
    path: "/industries",
    keywords: "government skill mission procurement, ITI equipment tender supplier, polytechnic lab setup, nursing college lab equipment supplier India",
  },
  projects: {
    title: "Turnkey Projects Portfolio | Completed Government & Institutional Labs",
    description: "View our portfolio of completed turnkey laboratory setups, government ITI modernizations, PM Vishwakarma workshops, and institutional contracts across India.",
    path: "/projects",
    keywords: "completed lab setup projects, government turnkey tenders India, ITI lab installation portfolio, pan-India laboratory logistics",
  },
  products: {
    title: "Vocational & ITI Equipment Catalog | Technical Training Rigs & Machinery",
    description: "Exhaustive product catalog of technical training equipment, electrical workbenches, automotive engine cut-sections, nursing mannequins, and ESD tables.",
    path: "/products",
    keywords: "vocational training equipment catalog, electrical lab bench, automotive cut section engine, nursing simulation mannequin, ESD workbench supplier",
  },
  gallery: {
    title: "Installation & Workshop Gallery | Vocational Labs Across India",
    description: "Real photographs of commissioned vocational workshops, interactive electrical panels, smart classrooms, and student training sessions installed across India.",
    path: "/gallery",
    keywords: "laboratory installation gallery, ITI workshop photos, technical equipment photos, vocational lab setup showcase",
  },
  enquiry: {
    title: "Submit Technical Requisition | Institutional Quotations & Layouts",
    description: "Submit institutional lab requirements, BOQ specifications, and layout consultation requests. Receive swift quotations from Bhartiya Skills LLP.",
    path: "/enquiry",
    keywords: "request lab quotation, BOQ procurement enquiry, laboratory layout planning request, institutional tender quotation",
  },
  contact: {
    title: "Contact Us | Bhartiya Skills LLP Noida, UP - Regional Support Desk",
    description: "Contact Bhartiya Skills LLP in Sector 63, Noida, UP. Call +91 8860346363 or email skillsbhartiya@gmail.com for technical inquiries and office visits.",
    path: "/contact",
    keywords: "Bhartiya Skills LLP address Noida, contact Bhartiya Skills, technical lab support desk phone number",
  },
  "404": {
    title: "Page Not Found (404) | Bhartiya Skills LLP",
    description: "The requested page could not be found. Explore turnkey laboratory setup solutions, equipment catalogs, or contact Bhartiya Skills LLP support.",
    path: "/404",
    keywords: "404 page not found, Bhartiya Skills LLP",
  },
};

const MAIN_FAQS = [
  { q: "What types of laboratories does Bhartiya Skills LLP set up?", a: "We provide complete turnkey laboratory setup solutions for over 16 categories, including Medical, Healthcare, Automotive, Electrical, Electronics, Agriculture, Computer Labs, Apparel/Garment, Beautician, Telecom, Solar Energy, Food Processing, Media, and Plumbing trades." },
  { q: "Do you provide complete turnkey laboratory solutions?", a: "Yes, we handle the entire project lifecycle, including requirement assessment, site surveys, custom AutoCAD floor planning, equipment supply, on-site installation, machinery commissioning, standard SOP documentation, faculty training, and after-sales warranty services." },
  { q: "Do you execute projects across India?", a: "Absolutely. Bhartiya Skills LLP operates a comprehensive pan-India supply-chain and mobilization network. We have successfully executed laboratory setups and institutional infrastructure modernizations in almost every Indian state and UT." },
  { q: "Do you support institutional procurement?", a: "Yes, we have deep expertise in institutional procurement. We support government departments, ITIs, state skill missions, and polytechnics by providing technically aligned BOQs, compliance authorizations, and custom layout support." },
  { q: "Can laboratories be customized according to a BOQ?", a: "Yes, all our laboratory configurations are fully modular and customizable. We can custom-align our product supplies, machinery dimensions, and workstation counts to match your exact requisition specification document or pre-drafted Bill of Quantities." },
  { q: "Do you manufacture customized equipment?", a: "Yes, we maintain robust workshop capabilities to custom-engineer technical learning setups, automobile cut-section engine rigs, mock hotel reception panels, and high-load electrical control consoles tailored to specialized syllabi." },
  { q: "Do you provide installation and commissioning?", a: "Yes, on-site installation, mechanical rigging, floor anchoring, utility wiring, and full system commissioning are integral parts of our turnkey contract delivery." },
  { q: "Do you provide faculty and operator training?", a: "Yes. After completing setup and commissioning, our senior training engineers host comprehensive hands-on instruction sessions for local faculty, demonstrating instrument calibration, emergency shutdowns, and curriculum execution." },
  { q: "Can you supply laboratory furniture?", a: "Yes, we manufacture and supply specialized, heavy-duty industrial furniture, including anti-static (ESD) laboratory workbenches, heavy-duty steel toolboards, stainless steel chemical tables, ward beds, and ergonomically balanced seating." }
];

export default function SEOHead({
  currentView: customView,
  activeLab,
  activeProjectFilter,
  activeProductCategory,
  searchQuery,
}: SEOHeadProps) {
  const location = useLocation();
  const pathView = location.pathname.split("/")[1]?.toLowerCase();
  const viewKey = customView || pathView || "home";

  useEffect(() => {
    // 1. Determine SEO metadata for current state
    let seo = VIEW_SEO_MAP[viewKey] || VIEW_SEO_MAP["home"];
    let cleanPathName = location.pathname;
    if (cleanPathName === "") cleanPathName = "/";
    let canonicalUrl = `${BASE_URL}${cleanPathName}`;
    let pageTitle = seo.title;
    let pageDesc = seo.description;

    if (activeLab) {
      pageTitle = `${activeLab.name} Setup | Turnkey Laboratory Solutions | Bhartiya Skills LLP`;
      pageDesc = `Turnkey ${activeLab.name} setup by Bhartiya Skills LLP. ${activeLab.shortDesc} Includes equipment, layout, installation & training across India.`;
      canonicalUrl = `${BASE_URL}/solutions/${activeLab.id}`;
    } else if (viewKey === "products" && activeProductCategory && activeProductCategory !== "All") {
      pageTitle = `${activeProductCategory} Equipment Catalog | Bhartiya Skills LLP`;
      pageDesc = `Browse ${activeProductCategory} training tools, machinery, and equipment supplied by Bhartiya Skills LLP for ITIs, polytechnics, and colleges in India.`;
    } else if (viewKey === "projects" && activeProjectFilter && activeProjectFilter !== "All") {
      pageTitle = `${activeProjectFilter} Laboratory Projects | Bhartiya Skills LLP Portfolio`;
      pageDesc = `Completed ${activeProjectFilter} lab setups and government institutional modernization projects executed by Bhartiya Skills LLP.`;
    }

    if (searchQuery && searchQuery.trim().length > 0) {
      pageTitle = `Search Results for "${searchQuery}" | Bhartiya Skills LLP`;
    }

    // Update document title
    document.title = pageTitle;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set or create canonical link tag
    const setCanonicalTag = (url: string) => {
      let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
      }
      element.setAttribute("href", url);
    };

    // Update meta tags
    setMetaTag('meta[name="description"]', 'name', 'description', pageDesc);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', seo.keywords);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', pageDesc);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Bhartiya Skills LLP');
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', `${BASE_URL}/logo.svg`);

    // Twitter Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', pageDesc);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', `${BASE_URL}/logo.svg`);

    // Canonical
    setCanonicalTag(canonicalUrl);

    // 2. Structured Data (JSON-LD)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Bhartiya Skills LLP",
      "legalName": "Bhartiya Skills LLP",
      "url": BASE_URL,
      "logo": `${BASE_URL}/logo.svg`,
      "email": "skillsbhartiya@gmail.com",
      "telephone": "+91 8860346363",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "J-09, Sector 63",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.google.com/maps/place/Bhartiya+Skills+LLP"
      ],
      "knowsAbout": [
        "Turnkey Laboratory Setup",
        "Vocational Skill Development Infrastructure",
        "ITI Equipment Supply",
        "Nursing College Laboratory Setup",
        "Atal Tinkering Lab Setup",
        "Government Institutional Procurement"
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      "name": "Bhartiya Skills LLP",
      "image": `${BASE_URL}/logo.svg`,
      "telephone": "+91 8860346363",
      "email": "skillsbhartiya@gmail.com",
      "url": BASE_URL,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "J-09, Sector 63",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6248507,
        "longitude": 77.3873898
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    };

    // BreadcrumbList Schema
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      }
    ];

    if (viewKey !== "home") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": seo.title.split("|")[0].trim(),
        "item": canonicalUrl
      });
    }

    if (activeLab) {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": activeLab.name,
        "item": canonicalUrl
      });
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": MAIN_FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    // Active Lab Solution Item Schema (if active)
    let labSolutionSchema = null;
    if (activeLab) {
      labSolutionSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": activeLab.name,
        "description": activeLab.shortDesc,
        "provider": {
          "@type": "Organization",
          "name": "Bhartiya Skills LLP"
        },
        "areaServed": "IN",
        "serviceType": "Turnkey Laboratory Setup & Commissioning"
      };
    }

    // Inject or update JSON-LD scripts in head
    const updateJsonLdScript = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    updateJsonLdScript("jsonld-org", organizationSchema);
    updateJsonLdScript("jsonld-localbusiness", localBusinessSchema);
    updateJsonLdScript("jsonld-breadcrumb", breadcrumbSchema);
    updateJsonLdScript("jsonld-faq", faqSchema);

    if (labSolutionSchema) {
      updateJsonLdScript("jsonld-service", labSolutionSchema);
    } else {
      const existingService = document.getElementById("jsonld-service");
      if (existingService) existingService.remove();
    }

  }, [location.pathname, viewKey, activeLab, activeProjectFilter, activeProductCategory, searchQuery]);

  return null;
}
