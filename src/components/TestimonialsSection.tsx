import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Pause, Play, CheckCircle2 } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  location: string;
  category: string;
  rating: number;
  avatarInitial: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    quote: "The engineering workshop cut-section engine rigs and battery trainers commissioned by Bhartiya Skills LLP matched our NCVT syllabus benchmarks perfectly. Their staff handover and technical training were exceptionally detailed.",
    author: "Rajesh K. Sharma",
    role: "Principal Coordinator",
    institution: "Government ITI",
    location: "Maharashtra",
    category: "Automotive & Mechanical",
    rating: 5,
    avatarInitial: "R"
  },
  {
    id: "test-2",
    quote: "Successfully completed the modernization of our nursing training laboratory. The clinical manikins, simulated ICU beds, and emergency rescue models provided by them are highly durable and well-calibrated.",
    author: "Dr. Sunita Deshmukh",
    role: "Head of Paramedical Dept",
    institution: "State University",
    location: "Uttar Pradesh",
    category: "Nursing & Healthcare",
    rating: 5,
    avatarInitial: "S"
  },
  {
    id: "test-3",
    quote: "We procured digital soil testing station kits and micro-drip irrigation models for our agricultural college. The precision of the spectrophotometer equipment and comprehensive operating manuals exceeded our expectations.",
    author: "Prof. Harpreet Singh",
    role: "Dean of Agri Engineering",
    institution: "State Agricultural University",
    location: "Punjab",
    category: "Agriculture & Soil Tech",
    rating: 5,
    avatarInitial: "H"
  },
  {
    id: "test-4",
    quote: "Turnkey computer laboratory setup was executed within record time. 60 high-performance workstations, centralized server infrastructure, interactive smartboards, and ergonomic IT lab furniture were delivered error-free.",
    author: "Vikram R. Patel",
    role: "Director of Skill Development",
    institution: "Government Polytechnic",
    location: "Gujarat",
    category: "Computer & Smart Classrooms",
    rating: 5,
    avatarInitial: "V"
  },
  {
    id: "test-5",
    quote: "The Atal Tinkering Lab (ATL) setup including 3D printers, DIY robotics packages, and safety SOP boards was installed flawlessly. Students are actively engaging in hands-on innovation projects daily.",
    author: "Meenakshi Sundaram",
    role: "ATL In-Charge & Mentor",
    institution: "Kendriya Vidyalaya / Model School",
    location: "Rajasthan",
    category: "Atal Tinkering Labs (ATL)",
    rating: 5,
    avatarInitial: "M"
  },
  {
    id: "test-6",
    quote: "Their electrical drives, PLC automation rigs, and industrial wiring panels are built with authentic commercial-grade switchgear. The safety interlocks ensure high student safety during practical sessions.",
    author: "Anand Murthy",
    role: "General Manager - Technical Training",
    institution: "State Skill Development Center",
    location: "Karnataka",
    category: "Electrical & Automation",
    rating: 5,
    avatarInitial: "A"
  },
  {
    id: "test-7",
    quote: "From custom AutoCAD layout designing to physical equipment commissioning, Bhartiya Skills LLP handled our mechanical hydraulics and pneumatics lab turnkey project with complete professionalism.",
    author: "Er. M. Thanikachalam",
    role: "Workshop Superintendent",
    institution: "Degree Engineering College",
    location: "Tamil Nadu",
    category: "Mechanical & Hydraulics",
    rating: 5,
    avatarInitial: "T"
  },
  {
    id: "test-8",
    quote: "Heavy-duty industrial sewing machinery, cutting tables, and fashion designing workstations were installed seamlessly. The equipment meets all NCVT apparel trade standards for institutional training.",
    author: "Pooja V. Verma",
    role: "Department Lead - Apparel Trade",
    institution: "Vocational Training Institute",
    location: "Madhya Pradesh",
    category: "Fashion Technology & Sewing",
    rating: 5,
    avatarInitial: "P"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic slide from right to left every 3.5 seconds
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-[#ECFAF4] border-y border-[#2CC2A5] py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#2CC2A5]/30 pb-6">
          <div className="text-center sm:text-left space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-white px-3.5 py-1 rounded-full border border-[#2CC2A5]/30 inline-block shadow-xs">
              Institutional Feedback
            </span>
            <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
              Verified Customer Testimonials
            </h2>
            <p className="text-[#5B5B5D] text-xs font-sans max-w-xl">
              Trusted by Government ITIs, Polytechnic Colleges, Engineering Universities, and Skill Training Centers across India.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-[#DDE8E3] shadow-xs">
            <button
              onClick={togglePlay}
              className="p-2 rounded-lg text-[#5B5B5D] hover:text-[#33C98C] hover:bg-[#F5F7F6] transition-colors cursor-pointer"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            <div className="h-4 w-[1px] bg-[#DDE8E3]" />

            <button
              onClick={handlePrev}
              className="p-2 rounded-lg text-[#303033] hover:text-[#33C98C] hover:bg-[#F5F7F6] transition-colors cursor-pointer"
              title="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="text-xs font-mono font-bold text-[#303033] px-1">
              {currentIndex + 1} / {testimonialsData.length}
            </span>

            <button
              onClick={handleNext}
              className="p-2 rounded-lg text-[#303033] hover:text-[#33C98C] hover:bg-[#F5F7F6] transition-colors cursor-pointer"
              title="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Continuous Automatic Right-to-Left Sliding Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Animated Slider Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((item) => (
              <div 
                key={item.id} 
                className="w-full flex-shrink-0 px-2 sm:px-4"
              >
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DDE8E3] shadow-md hover:border-[#33C98C] transition-all relative flex flex-col justify-between max-w-4xl mx-auto space-y-6">
                  
                  {/* Category & Verified Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F5F7F6] pb-4">
                    <span className="text-[11px] font-mono font-bold text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-md border border-[#2CC2A5]/20">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#33C98C] text-[11px] font-bold font-mono uppercase">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Verified Procurement</span>
                    </div>
                  </div>

                  {/* Quote content */}
                  <div className="relative space-y-3">
                    <Quote className="h-8 w-8 text-[#33C98C]/20 absolute -top-2 -left-2 rotate-180" />
                    <p className="text-[#303033] text-sm sm:text-base leading-relaxed italic font-sans relative z-10 pl-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Rating & Author details */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#F5F7F6]">
                    <div className="flex items-center gap-3.5">
                      <div className="h-11 w-11 rounded-full bg-[#ECFAF4] border-2 border-[#33C98C] flex items-center justify-center font-bold font-display text-[#33C98C] text-base uppercase shadow-xs">
                        {item.avatarInitial}
                      </div>
                      <div>
                        <h4 className="font-bold font-display uppercase text-[#303033] text-sm leading-tight">
                          {item.author}
                        </h4>
                        <p className="text-[#33C98C] font-semibold text-xs mt-0.5">
                          {item.role}
                        </p>
                        <p className="text-[#5B5B5D] text-[11px] uppercase font-mono mt-0.5">
                          {item.institution}, {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 bg-[#F5F7F6] px-3 py-1.5 rounded-lg border border-[#DDE8E3]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                      ))}
                      <span className="text-xs font-mono font-bold text-[#303033] ml-1">5.0</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx 
                  ? "w-8 bg-[#33C98C]" 
                  : "w-2.5 bg-[#DDE8E3] hover:bg-[#33C98C]/50"
              }`}
              title={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Extra Ticker Marquee Preview Bar below */}
        <div className="pt-4 border-t border-[#2CC2A5]/20 overflow-hidden">
          <div className="flex items-center gap-2 mb-3 justify-center text-xs font-mono font-bold uppercase text-[#5B5B5D]">
            <span>Recent Institutional Supply Locations</span>
          </div>
          <div className="relative w-full overflow-hidden whitespace-nowrap mask-gradient">
            <div className="inline-flex animate-marquee space-x-6 text-xs font-medium text-[#303033]">
              {testimonialsData.concat(testimonialsData).map((t, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx % testimonialsData.length)}
                  className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#DDE8E3] cursor-pointer hover:border-[#33C98C] transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-[#33C98C]" />
                  <span className="font-bold font-display uppercase text-[11px]">{t.institution}</span>
                  <span className="text-[#5B5B5D] text-[10px] font-mono">({t.location})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
