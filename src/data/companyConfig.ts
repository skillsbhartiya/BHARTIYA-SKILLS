export interface CompanyConfig {
  companyInfo: {
    name: string;
    tagline: string;
    headOffice: string;
    branchOffice: string;
    registeredOffice: string;
    email: string;
    alternateEmail: string;
    phone: string;
    alternatePhone: string;
    whatsapp: string;
  };
  aboutContent: {
    mainHeading: string;
    subHeading: string;
    introParagraphs: string[];
  };
  expertise: {
    title: string;
    institutions: string[];
    image: string;
  };
  turnkeyDescription: string;
  services: {
    id: number;
    title: string;
    description: string;
  }[];
  industrySolutions: {
    id: string;
    name: string;
    description: string;
  }[];
  experienceAndReach: {
    title: string;
    paragraph: string;
    isStatsVerified: boolean; // Set to true once statistics are officially verified
    showStatsSection: boolean;
    adminNote: string;
    stats: {
      number: string;
      label: string;
    }[];
  };
  esteemedClients: {
    title: string;
    showClientsSection: boolean;
    adminNote: string;
    clients: {
      id: string;
      name: string;
      category?: string;
      verified: boolean;
    }[];
  };
  whyChooseUs: {
    title: string;
    points: string[];
  };
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
  commitment: {
    title: string;
    points: string[];
  };
  legacy: {
    title: string;
    showLegacySection: boolean;
    isLegacyYearConfirmed: boolean; // Set to true once establishment year (1973 vs 1993) is confirmed
    confirmedYearPlaceholder: string;
    paragraph: string;
    adminNote: string;
  };
  ctaSection: {
    heading: string;
    subheading: string;
    buttons: {
      label: string;
      action: string;
      primary?: boolean;
    }[];
  };
}

export const companyConfig: CompanyConfig = {
  companyInfo: {
    name: "Bhartiya Skills LLP",
    tagline: "Turnkey Laboratory, Technical Education and Skill Development Solutions Across India",
    headOffice: "Bhartiya Skills LLP, J-09, Sector 63, Noida, Uttar Pradesh",
    branchOffice: "Bhartiya Skills LLP, J-09, Sector 63, Noida, Uttar Pradesh",
    registeredOffice: "Bhartiya Skills LLP, J-09, Sector 63, Noida, Uttar Pradesh",
    email: "bhartiyaskills@gmail.com",
    alternateEmail: "skillsbhartiya@gmail.com",
    phone: "+91 8860346363",
    alternatePhone: "+91 8860346363",
    whatsapp: "918860346363",
  },

  aboutContent: {
    mainHeading: "About Bhartiya Skills LLP",
    subHeading: "Turnkey Laboratory, Technical Education and Skill Development Solutions Across India",
    introParagraphs: [
      "Bhartiya Skills LLP is a manufacturer, distributor and turnkey solution provider of technical training tools, laboratory equipment, machinery, simulators, furniture and complete skill-development infrastructure.",
      "The company provides end-to-end solutions for technical education, vocational training and skill-development institutions across India. Its product portfolio includes equipment and machinery for Electrical, Electronics, Welding, Automotive, Mechanical, Refrigeration, Medical, Food Processing and various other technical and vocational training sectors.",
      "Bhartiya Skills LLP manufactures, sources and supplies training equipment for government projects, engineering colleges, Industrial Training Institutes, polytechnic colleges, skill-development centres, vocational training centres and Common Facility Centres.",
      "The company provides customised solutions according to institutional requirements, approved BOQs, tender specifications, applicable training standards and project needs."
    ]
  },

  expertise: {
    title: "Our Expertise",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    institutions: [
      "Engineering Colleges",
      "Industrial Training Institutes (ITIs)",
      "Polytechnic Colleges",
      "Skill Development Centres",
      "Vocational Training Centres",
      "Common Facility Centres",
      "Government Training Institutions",
      "Schools, Colleges and Universities",
      "Medical and Nursing Institutions",
      "Corporate and CSR Skill Development Projects"
    ]
  },

  turnkeyDescription: "We undertake complete laboratory and training-centre setup projects, beginning with requirement assessment and laboratory planning, followed by the supply of tools, equipment, machinery, simulators and furniture. Our services also include installation, commissioning, demonstration, technical training, project documentation and the final development of a functional and professional training environment.",

  services: [
    {
      id: 1,
      title: "Complete Training Centre Setup",
      description: "End-to-end development of technical, vocational and skill-development training centres."
    },
    {
      id: 2,
      title: "Laboratory Planning and Layout",
      description: "Customised laboratory planning according to the available space, course requirements and approved BOQ."
    },
    {
      id: 3,
      title: "Tools, Equipment and Machinery Supply",
      description: "Supply of technical tools, machines, laboratory instruments, simulators and training equipment."
    },
    {
      id: 4,
      title: "Laboratory Furniture",
      description: "Supply and installation of workbenches, storage units, tables, demonstration units and customised laboratory furniture."
    },
    {
      id: 5,
      title: "Installation and Commissioning",
      description: "Professional installation, testing and commissioning of equipment and complete laboratory infrastructure."
    },
    {
      id: 6,
      title: "Customised Laboratory Development",
      description: "Laboratory solutions customised according to tender specifications, institutional requirements and training objectives."
    },
    {
      id: 7,
      title: "Technical Learning Material",
      description: "Supply of charts, models, manuals, demonstration systems and other technical learning materials."
    },
    {
      id: 8,
      title: "Demonstration and Training",
      description: "Equipment demonstration and training sessions for trainers, instructors, operators and institutional staff."
    },
    {
      id: 9,
      title: "Project Execution and Management",
      description: "Management of complete project activities, including supply, logistics, installation and project completion."
    },
    {
      id: 10,
      title: "After-Sales Support",
      description: "Technical assistance and support after the completion of the project."
    },
    {
      id: 11,
      title: "Pan-India Project Execution",
      description: "Supply, installation and project execution services across India."
    },
    {
      id: 12,
      title: "Government Tender Support",
      description: "Support for projects based on approved technical specifications, BOQs and tender requirements."
    }
  ],

  industrySolutions: [
    { id: "medical", name: "Medical Lab Setup", description: "Comprehensive healthcare and paramedical training setups with diagnostic models and simulators." },
    { id: "healthcare", name: "Healthcare Training Labs", description: "Clinical practice labs, nursing simulators, and medical observation equipment." },
    { id: "beauty", name: "Beauty and Wellness Labs", description: "Modern salon, cosmetology, and wellness skill training workstations and tools." },
    { id: "mechanical", name: "Fitter and Mechanical Labs", description: "Precision machining tools, lathe benches, grinding machines, and mechanical toolkits." },
    { id: "sewing", name: "Sewing Technology Labs", description: "Industrial sewing machines, cutting tables, and garment construction setups." },
    { id: "apparel", name: "Apparel and Garment Labs", description: "Textile inspection tools, fashion design workstations, and pattern-making kits." },
    { id: "safety", name: "Industrial Safety Labs", description: "Occupational safety gear, firefighting demonstration rigs, and hazard training units." },
    { id: "electrical", name: "Electrical Labs", description: "Transformer test benches, motor-generator sets, electrical wiring panels, and power labs." },
    { id: "electronics", name: "Electronics Labs", description: "PCB fabrication workbenches, CROs, signal generators, IoT and micro-controller rigs." },
    { id: "automotive", name: "Automotive Training Labs", description: "Cut-section working engine models, brake/transmission rigs, and auto-electrical panels." },
    { id: "welding", name: "Welding Labs", description: "SMAW, MIG/TIG welding booths, fume extractors, and VR welding simulators." },
    { id: "hvac", name: "Refrigeration & Air-Conditioning Labs", description: "HVAC cut-section trainers, gas charging rigs, and climate control simulators." },
    { id: "food", name: "Food Processing Labs", description: "Food testing instruments, preservation processing units, and quality analysis tools." },
    { id: "agriculture", name: "Agriculture Labs", description: "Soil testing kits, irrigation equipment models, and seed quality analysis tools." },
    { id: "computer", name: "Computer Labs", description: "IT networking racks, modern student computer desks, and smart classroom setups." },
    { id: "telecom", name: "Telecom Labs", description: "Optical fiber splicing kits, RF communication trainers, and mobile repair setups." },
    { id: "solar", name: "Solar & Renewable Energy Labs", description: "Rooftop solar PV installation trainers, wind energy simulators, and battery banks." },
    { id: "hospitality", name: "Tourism & Hospitality Labs", description: "Front office reception desks, housekeeping setups, and commercial kitchen rigs." },
    { id: "retail", name: "Retail Labs", description: "POS billing counters, barcode scanner setups, and retail merchandising displays." },
    { id: "media", name: "Media Labs", description: "Audio-visual recording studio rigs, broadcasting consoles, and editing suites." },
    { id: "plumbing", name: "Plumbing Labs", description: "Pipe threading workbenches, hydraulic pump rigs, and sanitary fitting demonstration walls." },
    { id: "simulator", name: "Simulator-Based Training Equipment", description: "Virtual heavy machinery, driving, and process-control simulation equipment." },
    { id: "washing", name: "Automatic Washing Machine Simulators", description: "Appliance repair testing benches and diagnostic fault simulation panels." },
    { id: "skill-centre", name: "Skill Development & Technical Training Centres", description: "Integrated multi-trade infrastructure setups for government skill missions." }
  ],

  experienceAndReach: {
    title: "Our Experience and Reach",
    paragraph: "Bhartiya Skills LLP serves a specialised institutional market and executes technical education and skill-development projects across India. According to the company presentation, the organisation has supported the setup of more than 1,100 technical education institutes and more than 2,000 vocational and skill-development centres, including centres associated with programmes such as DDU-GKY, PMKK, PMKVY and UPSDM.",
    isStatsVerified: true, // Flag for admin verification of claims
    showStatsSection: true,
    adminNote: "Note for Admin: Numerical claims of 1,100 technical education institutes and 2,000 vocational centres require verification before public publishing. Toggle isStatsVerified in companyConfig.ts to confirm.",
    stats: [
      { number: "1,100+", label: "Technical Education Institutes Supported" },
      { number: "2,000+", label: "Vocational & Skill Development Centres" },
      { number: "Pan-India", label: "Project Execution Coverage" },
      { number: "24+", label: "Technical & Vocational Sectors" }
    ]
  },

  esteemedClients: {
    title: "Some of Our Esteemed Clients",
    showClientsSection: false,
    adminNote: "Note for Admin: Client names listed below are editable placeholders. Do not display unverified client logos without approval.",
    clients: [
      { id: "iit", name: "Indian Institutes of Technology", category: "Higher Education", verified: false },
      { id: "dseu", name: "Delhi Skill and Entrepreneurship University", category: "Skill University", verified: false },
      { id: "biada", name: "Bihar Industrial Area Development Authority", category: "Government Body", verified: false },
      { id: "jmi", name: "Jamia Millia Islamia University", category: "Central University", verified: false },
      { id: "strc", name: "State Staff Training and Research Centre, Aliganj, Lucknow", category: "State Institution", verified: false },
      { id: "jspl", name: "Jindal Steel and Power Limited", category: "Corporate CSR", verified: false },
      { id: "army", name: "Indian Army", category: "Defense & Training", verified: false },
      { id: "maruti", name: "Maruti Suzuki India", category: "Automotive Industry", verified: false },
      { id: "tata", name: "Tata Motors", category: "Automotive Industry", verified: false },
      { id: "db", name: "Dainik Bhaskar", category: "Corporate CSR", verified: false },
      { id: "amity", name: "Amity University", category: "Private University", verified: false },
      { id: "jaypee", name: "Jaypee University", category: "Private University", verified: false },
      { id: "adani", name: "Adani Skill Development Centre", category: "Corporate CSR", verified: false },
      { id: "quess", name: "Quess Corp Limited", category: "Skill Partner", verified: false },
      { id: "ica", name: "ICA Edu Skills", category: "Vocational Partner", verified: false },
      { id: "centum", name: "Centum Work Skills", category: "Skill Partner", verified: false },
      { id: "bml", name: "BML Munjal University", category: "Higher Education", verified: false },
      { id: "dpsa", name: "Delhi Police Skills Academy", category: "Government Academy", verified: false },
      { id: "ilfs", name: "IL&FS", category: "Infrastructure & Skills", verified: false },
      { id: "iti", name: "Government ITIs across India", category: "Vocational Institutions", verified: false }
    ]
  },

  whyChooseUs: {
    title: "Why Choose Bhartiya Skills LLP?",
    points: [
      "Complete turnkey project execution",
      "Technical and vocational training expertise",
      "Wide range of tools, machinery and equipment",
      "Customised laboratory solutions",
      "Government and institutional project support",
      "Pan-India supply and installation",
      "Training and equipment demonstrations",
      "Single-source project solution",
      "Quality-focused products",
      "Reliable technical support",
      "Laboratory furniture and infrastructure",
      "Experience across multiple industry sectors"
    ]
  },

  mission: {
    title: "Our Mission",
    content: "Our mission is to strengthen technical and vocational education in India by providing modern, industry-relevant and practical training infrastructure. We aim to help institutions create effective learning environments where students and trainees can develop practical skills and become employment-ready."
  },

  vision: {
    title: "Our Vision",
    content: "Our vision is to become a trusted pan-India partner for turnkey laboratory setups, skill-development centres, technical training equipment and educational infrastructure. We aim to support government organisations, educational institutions and private training providers with reliable, scalable and customised training solutions."
  },

  commitment: {
    title: "Our Commitment",
    points: [
      "Delivering quality technical training solutions",
      "Understanding every institution’s specific requirements",
      "Completing projects professionally and efficiently",
      "Providing installation and commissioning support",
      "Supporting trainers through demonstrations and training",
      "Maintaining long-term client relationships",
      "Contributing to India’s skill-development ecosystem",
      "Providing dependable after-sales support"
    ]
  },

  legacy: {
    title: "Our Legacy",
    showLegacySection: false,
    isLegacyYearConfirmed: false, // Set to true once confirmed
    confirmedYearPlaceholder: "1993",
    paragraph: "Bhartiya Skills LLP is associated with Rama Electric & Machinery Stores.",
    adminNote: "Note for Admin: Company presentation references two establishment years (1973 and 1993). Neither year is published automatically until marked as confirmed."
  },

  ctaSection: {
    heading: "Planning a Laboratory or Training Centre?",
    subheading: "Share your project requirement, approved BOQ or tender document with our team to receive a customised technical proposal.",
    buttons: [
      { label: "Request an Enquiry Form", action: "enquiry", primary: true },
      { label: "Submit Your BOQ", action: "contact" },
      { label: "Speak With Our Project Team", action: "contact" },
      { label: "Explore Lab Solutions", action: "solutions" }
    ]
  }
};
