import { X, CheckCircle, ArrowRight } from "lucide-react";
import { LabSolution } from "../types";

interface LabDetailsModalProps {
  lab: LabSolution;
  onClose: () => void;
  onRequestProposal: (labName: string) => void;
}

export default function LabDetailsModal({ lab, onClose, onRequestProposal }: LabDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-[#DDE8E3] animate-in zoom-in-95 duration-200">
        
        {/* Header banner */}
        <div className="bg-[#303033] text-white p-5 flex justify-between items-center relative border-b-2 border-[#33C98C]">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-wide text-[#9EDB45] uppercase bg-white/10 px-2 py-0.5 rounded-md">
              Lab Solution Category
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight uppercase text-white mt-1">
              {lab.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#33C98C] p-1 bg-white/10 hover:bg-white/20 transition-colors rounded-md cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Image & Targets */}
            <div className="space-y-4 md:col-span-1">
              <div className="aspect-video md:aspect-square rounded-lg border border-[#DDE8E3] overflow-hidden shadow-xs">
                <img
                  src={lab.image}
                  alt={`${lab.name} Turnkey Laboratory Setup`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Target institutions */}
              <div className="bg-[#ECFAF4] rounded-lg p-4 border border-[#2CC2A5]">
                <h4 className="text-xs font-display font-bold uppercase tracking-wide text-[#303033] mb-2">
                  Target Institutions
                </h4>
                <ul className="space-y-1.5">
                  {lab.targetInstitutions.map((inst, index) => (
                    <li key={index} className="text-[#5B5B5D] text-xs flex items-center gap-1.5 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#33C98C] flex-shrink-0" />
                      {inst}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Detailed Description & Equipment lists */}
            <div className="md:col-span-2 space-y-5">
              <div>
                <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[#5B5B5D]">Overview Description</h4>
                <p className="text-[#303033] text-xs sm:text-sm mt-1 leading-relaxed">
                  {lab.longDesc || lab.shortDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Major training areas */}
                <div className="space-y-2">
                  <h4 className="text-xs font-display font-bold uppercase tracking-wide text-[#303033] flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-[#33C98C]" />
                    <span>Primary Learning Areas</span>
                  </h4>
                  <ul className="space-y-1">
                    {lab.majorTrainingAreas.map((area, index) => (
                      <li key={index} className="text-[#5B5B5D] text-xs leading-relaxed">
                        &bull; {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Major equipment classes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-display font-bold uppercase tracking-wide text-[#303033] flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-[#33C98C]" />
                    <span>Key Equipment supplied</span>
                  </h4>
                  <ul className="space-y-1">
                    {lab.equipmentCategories.map((eq, index) => (
                      <li key={index} className="text-[#5B5B5D] text-xs leading-relaxed">
                        &bull; {eq}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Furniture, Safety, and Installation lists */}
              <div className="border-t border-[#DDE8E3] pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h5 className="text-xs font-display font-bold uppercase tracking-wider text-[#5B5B5D]">Workspace Furniture</h5>
                  <p className="text-[#303033] text-xs mt-1 leading-snug">
                    {lab.furnitureRequirements.join(", ")}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-display font-bold uppercase tracking-wider text-[#5B5B5D]">Safety &amp; Compliance</h5>
                  <p className="text-[#303033] text-xs mt-1 leading-snug">
                    {lab.safetyEquipment.join(", ")}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-display font-bold uppercase tracking-wider text-[#5B5B5D]">Setup Services</h5>
                  <p className="text-[#303033] text-xs mt-1 leading-snug">
                    {lab.installationServices?.slice(0, 3).join(", ") || "Layout Planning, Mounting, Calibrations"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-[#F5F7F6] p-4 border-t border-[#DDE8E3] flex items-center justify-end">
          <button
            onClick={() => onRequestProposal(lab.name)}
            className="flex items-center gap-1.5 bg-[#33C98C] hover:bg-[#2AAA76] text-white text-xs font-display font-bold uppercase tracking-wider px-4 py-2 transition-all cursor-pointer shadow-md rounded-md"
          >
            <span>Submit Requisition</span>
            <ArrowRight className="h-4 w-4 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
}
