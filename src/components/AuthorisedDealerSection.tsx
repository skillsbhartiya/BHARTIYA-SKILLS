import { Plus, ShieldCheck } from "lucide-react";
import { brandPartners } from "../data/brandPartners";

interface AuthorisedDealerSectionProps {
  onExploreProducts: () => void;
  onRequestQuotation?: () => void;
}

export default function AuthorisedDealerSection({
  onExploreProducts,
}: AuthorisedDealerSectionProps) {
  // Duplicate array to enable 100% continuous seamless infinite marquee loop
  const marqueeItems = [...brandPartners, ...brandPartners];

  return (
    <section className="bg-white py-14 border-t border-[#DDE8E3] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2CC2A5] uppercase bg-[#ECFAF4] px-3 py-1 rounded-full border border-[#2CC2A5]/30 inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[#33C98C]" />
            Official Supply Network
          </span>
          <h2 className="text-2xl font-bold font-display tracking-tight uppercase text-[#303033] sm:text-3xl">
            Authorised Dealer &amp; Trusted Brand Partners
          </h2>
          <p className="text-[#5B5B5D] text-xs sm:text-sm leading-relaxed font-sans">
            We proudly supply products and solutions from India&apos;s and the world&apos;s most trusted brands.
          </p>
        </div>

        {/* Continuous Horizontal Logo Carousel */}
        <div className="relative w-full overflow-hidden py-4 group">
          {/* Subtle side fade gradient overlays for smooth visual entry/exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 min-w-max">
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="group/card w-40 sm:w-48 h-28 sm:h-32 bg-white rounded-xl border border-[#DDE8E3] shadow-xs hover:shadow-lg hover:border-[#33C98C] transition-all duration-300 flex items-center justify-center p-4 cursor-pointer flex-shrink-0 transform hover:-translate-y-1 select-none"
              >
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={`${brand.name} official logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-14 sm:max-h-16 max-w-[80%] object-contain transition-transform duration-300 group-hover/card:scale-105"
                    style={{ filter: "none", WebkitFilter: "none", opacity: 1 }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#303033] group-hover/card:text-[#33C98C] transition-colors">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}

            {/* Final Extra Card: "More Brands" */}
            <div
              onClick={onExploreProducts}
              className="group/card w-40 sm:w-48 h-28 sm:h-32 bg-[#F5F7F6] hover:bg-[#ECFAF4] rounded-xl border-2 border-dashed border-[#DDE8E3] hover:border-[#33C98C] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4 text-center cursor-pointer flex-shrink-0 transform hover:-translate-y-1"
            >
              <div className="h-9 w-9 rounded-full bg-white group-hover/card:bg-[#33C98C] border border-[#DDE8E3] group-hover/card:border-[#33C98C] flex items-center justify-center text-[#303033] group-hover/card:text-white transition-colors mb-1.5 shadow-xs">
                <Plus className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xs uppercase tracking-wide text-[#303033] group-hover/card:text-[#33C98C]">
                More Brands
              </span>
              <span className="text-[9px] text-[#5B5B5D] font-sans">
                National &amp; Global OEMs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
