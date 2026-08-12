import { useState } from "react";
import {
  HeartPulse,
  Bot,
  Wrench,
  Zap,
  Settings,
  Truck,
  Flame,
  CheckCircle2,
  ShieldCheck,
  Send,
  FileText,
  ChevronRight,
  Sparkles,
  Layers,
  Cpu,
  Download,
  BookOpen,
  Package
} from "lucide-react";

interface SpecializedLabsProps {
  onOpenEnquiry: (preselectedSubject?: string) => void;
}

export default function SpecializedLabs({ onOpenEnquiry }: SpecializedLabsProps) {
  const [activeTab, setActiveTab] = useState<"nursing" | "atl" | "iti">("nursing");
  const [activeItiTrade, setActiveItiTrade] = useState<"electrician" | "fitter" | "diesel" | "mmv">("electrician");

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Section Header */}
      <div className="bg-[#303033] text-white rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
          <Wrench className="h-64 w-64 text-white" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#9EDB45]/20 border border-[#9EDB45]/40 text-[#9EDB45] text-xs font-sans font-semibold px-3.5 py-1 rounded-full uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            Specialized & Trade-Specific Lab Solutions
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white leading-tight">
            Nursing, ATL &amp; ITI Trade Laboratories
          </h1>
          <p className="text-xs sm:text-sm text-[#D6D6D6] leading-relaxed font-sans">
            Dedicated turnkey equipment specifications, tools, cut-section machinery, and diagnostic trainers compliant with INC (Indian Nursing Council), AIM (Atal Innovation Mission), and NCVT/DGT ITI Trade Syllabi across India.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry("Specialized Trade Labs")}
              className="rounded-md bg-[#33C98C] hover:bg-[#2AAA76] text-white px-5 py-2.5 text-xs font-bold font-display uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Request Custom BOQ &amp; Enquiry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-[#DDE8E3] pb-3">
        <button
          onClick={() => setActiveTab("nursing")}
          className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-display flex items-center gap-2.5 transition-all cursor-pointer ${
            activeTab === "nursing"
              ? "bg-[#303033] text-[#9EDB45] shadow-md border border-[#303033]"
              : "bg-white text-[#4B4B4D] hover:bg-[#ECFAF4] hover:text-[#33C98C] border border-[#DDE8E3]"
          }`}
        >
          <HeartPulse className="h-4 w-4 text-[#2CC2A5]" />
          <span>Nursing College Lab Equipment</span>
        </button>

        <button
          onClick={() => setActiveTab("atl")}
          className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-display flex items-center gap-2.5 transition-all cursor-pointer ${
            activeTab === "atl"
              ? "bg-[#303033] text-[#9EDB45] shadow-md border border-[#303033]"
              : "bg-white text-[#4B4B4D] hover:bg-[#ECFAF4] hover:text-[#33C98C] border border-[#DDE8E3]"
          }`}
        >
          <Bot className="h-4 w-4 text-[#2CC2A5]" />
          <span>ATL Lab Tools (Atal Tinkering Lab)</span>
        </button>

        <button
          onClick={() => setActiveTab("iti")}
          className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-display flex items-center gap-2.5 transition-all cursor-pointer ${
            activeTab === "iti"
              ? "bg-[#303033] text-[#9EDB45] shadow-md border border-[#303033]"
              : "bg-white text-[#4B4B4D] hover:bg-[#ECFAF4] hover:text-[#33C98C] border border-[#DDE8E3]"
          }`}
        >
          <Wrench className="h-4 w-4 text-[#2CC2A5]" />
          <span>ITI Tools, Equipment &amp; Machinery</span>
        </button>
      </div>

      {/* TAB CONTENT 1: NURSING COLLEGE LAB EQUIPMENT */}
      {activeTab === "nursing" && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="bg-white border border-[#DDE8E3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#DDE8E3] pb-4">
              <div>
                <span className="text-xs font-sans font-semibold text-[#2CC2A5] uppercase tracking-wide">
                  INC &amp; University Compliant
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase text-[#303033] mt-1">
                  Nursing College Laboratory Setup &amp; Manikins
                </h2>
                <p className="text-xs text-[#5B5B5D] mt-1">
                  Exhaustive range of clinical training manikins, anatomical models, diagnostic sets, and ward furniture for B.Sc Nursing, GNM, ANM, and Paramedical Institutes.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry("Nursing College Lab Equipment")}
                className="bg-[#ECFAF4] border border-[#33C98C] text-[#33C98C] hover:bg-[#33C98C] hover:text-white px-4 py-2 rounded-lg text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 flex-shrink-0"
              >
                <FileText className="h-4 w-4" />
                <span>Get Nursing Lab BOQ</span>
              </button>
            </div>

            {/* 5 Sub-Labs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lab 1 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#33C98C] text-white">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold font-display text-sm uppercase">1. Nursing Foundation Lab</h3>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Advanced Multipurpose Manikins:</strong> Full-body male/female patient care manikins with CPR feedback.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Injection &amp; IV Trainers:</strong> Venipuncture arms, IM injection pads, catheterization models.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Hospital Ward Setup:</strong> ICU beds with mattresses, overbed tables, dressing trolleys, medicine cabinets.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Diagnostics:</strong> BP instruments, stethoscopes, thermometers, otoscopes, pulse oximeters.</span>
                  </li>
                </ul>
              </div>

              {/* Lab 2 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#2CC2A5] text-white">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold font-display text-sm uppercase">2. Maternal &amp; Child Health (OBG)</h3>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Birthing Simulators:</strong> Advanced childbirth manikin with fetal delivery mechanism &amp; placenta model.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Neonatal Care Trainers:</strong> Infant CPR resuscitation manikin, baby warming unit simulator.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Palpation &amp; Episiotomy:</strong> Leopold maneuvers abdominal trainer, episiotomy suture trainers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Gynecological Models:</strong> Uterine development models, contraception demonstration kits.</span>
                  </li>
                </ul>
              </div>

              {/* Lab 3 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#303033] text-white">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold font-display text-sm uppercase">3. Community Health Nursing</h3>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Community Bags:</strong> Fully equipped canvas/leather bags with diagnostic gear &amp; dressing kits.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Sanitation Demonstration:</strong> Water purification cut-sections, latrine models, septic tank models.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Cold Chain Equipment:</strong> Vaccine carriers, ice-packs, temperature monitoring logs.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Family Welfare Models:</strong> Health charts, flipbooks, nutritional flashcards.</span>
                  </li>
                </ul>
              </div>

              {/* Lab 4 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#2AAA76] text-white">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold font-display text-sm uppercase">4. Pre-Clinical Science Lab</h3>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Life-Size Skeleton:</strong> 170cm flexible spine human skeleton with joint ligaments &amp; roller stand.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Anatomical Organ Models:</strong> Dissectable human heart, lungs, liver, kidney, brain, eye, ear models.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Microscopes &amp; Slides:</strong> Compound binocular microscopes (1000x), prepared pathology slide sets.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Laboratory Glassware:</strong> Beakers, test tubes, centrifuges, staining trays, microtome.</span>
                  </li>
                </ul>
              </div>

              {/* Lab 5 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#303033] text-white">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold font-display text-sm uppercase">5. Nutrition Laboratory</h3>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Stainless Steel Preparation Benches:</strong> Heavy-duty SS 304 food-grade preparation counters.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Cooking Appliances:</strong> Induction cooktops, microwave ovens, refrigerators, blenders.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Nutritional Replica Models:</strong> Synthetic food models showing caloric value, protein &amp; fats.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Measurement Tools:</strong> Digital dietary weighing scales, measuring cylinders, cutlery sets.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: ATL LAB TOOLS (ATAL TINKERING LAB) */}
      {activeTab === "atl" && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="bg-white border border-[#DDE8E3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#DDE8E3] pb-4">
              <div>
                <span className="text-xs font-sans font-semibold text-[#2CC2A5] uppercase tracking-wide">
                  NITI Aayog / AIM Compliant
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase text-[#303033] mt-1">
                  Atal Tinkering Lab (ATL) Equipment Packages
                </h2>
                <p className="text-xs text-[#5B5B5D] mt-1">
                  Standard STEM, Robotics, 3D Printing, Electronics, and DIY Toolkits curated for Schools &amp; Educational Institutions.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry("ATL Lab Tools (Atal Tinkering Lab)")}
                className="bg-[#ECFAF4] border border-[#33C98C] text-[#33C98C] hover:bg-[#33C98C] hover:text-white px-4 py-2 rounded-lg text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 flex-shrink-0"
              >
                <FileText className="h-4 w-4" />
                <span>Get ATL Lab BOQ</span>
              </button>
            </div>

            {/* 4 Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Package 1 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#33C98C] text-white">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-[#2CC2A5] uppercase">Package P1</span>
                    <h3 className="font-bold font-display text-sm uppercase">Electronics, Sensors &amp; Microcontrollers</h3>
                  </div>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Microcontrollers:</strong> Arduino Uno, Mega, Nano, Raspberry Pi 4, ESP32, NodeMCU WiFi boards.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Sensor Array:</strong> Ultrasonic, IR, Soil Moisture, PIR Motion, Gas (MQ2), Gyroscope (MPU6050), LDR, Humidity.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Actuators &amp; Drives:</strong> Servo Motors (SG90/MG996R), DC Gear Motors, Stepper Motors, L298N Drivers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Prototyping Essentials:</strong> Breadboards, Jumper Wires, Resistor kits, LEDs, Switches, Bluetooth HC-05 modules.</span>
                  </li>
                </ul>
              </div>

              {/* Package 2 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#303033] text-white">
                    <Layers className="h-4 w-4 text-[#9EDB45]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-[#2CC2A5] uppercase">Package P2</span>
                    <h3 className="font-bold font-display text-sm uppercase">3D Printers, Power Tools &amp; Prototyping</h3>
                  </div>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>3D Printer Setup:</strong> FDM High-Precision 3D Printer with PLA/ABS Filament spools in assorted colors.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Rotary Multi-Tools:</strong> Rotary drill/sander multi-tool with 100+ precision attachments.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Soldering Workstations:</strong> Temperature controlled soldering irons, desoldering pumps, fume extractors.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Hand Toolkits:</strong> Precision screwdrivers, combination pliers, wire strippers, utility knives, vernier calipers.</span>
                  </li>
                </ul>
              </div>

              {/* Package 3 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#2CC2A5] text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-[#2CC2A5] uppercase">Package P3</span>
                    <h3 className="font-bold font-display text-sm uppercase">STEM Robotics &amp; DIY Drone Kits</h3>
                  </div>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Modular Robotics Kits:</strong> DIY obstacle avoiding &amp; line follower robot chassis packs.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Drone DIY Kits:</strong> Quadcopter drone assembly kit with flight controller, ESCs &amp; remote transmitter.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>IoT Smart City Kit:</strong> Smart home, automated street light &amp; weather station DIY packs.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>AI &amp; Vision Modules:</strong> Camera modules for object detection &amp; basic machine learning exercises.</span>
                  </li>
                </ul>
              </div>

              {/* Package 4 */}
              <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-5 rounded-xl space-y-3 hover:border-[#33C98C] transition-colors">
                <div className="flex items-center gap-2.5 text-[#303033]">
                  <div className="p-2 rounded-lg bg-[#303033] text-white">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-[#2CC2A5] uppercase">Package P4</span>
                    <h3 className="font-bold font-display text-sm uppercase">Safety Gear, Benches &amp; Storage</h3>
                  </div>
                </div>
                <ul className="text-xs text-[#5B5B5D] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Safety Equipment:</strong> Protective eyewear goggles, first-aid box, heat-resistant soldering mats, fire extinguishers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Modular Storage:</strong> Multi-drawer component storage cabinets, pegboards, lockable cupboards.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>ATL Workstations:</strong> Heavy-duty hexagonal/rectangular STEM workbenches with power strips &amp; ESD mats.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#33C98C] flex-shrink-0 mt-0.5" />
                    <span><strong>Branding &amp; SOP Boards:</strong> ATL banner boards, safety rule charts, standard operating procedure boards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: ITI TOOLS, EQUIPMENT & MACHINERY */}
      {activeTab === "iti" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white border border-[#DDE8E3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#DDE8E3] pb-4">
              <div>
                <span className="text-xs font-sans font-semibold text-[#2CC2A5] uppercase tracking-wide">
                  NCVT / DGT ITI Standard Syllabi
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase text-[#303033] mt-1">
                  Industrial Training Institute (ITI) Trade Machinery &amp; Toolkits
                </h2>
                <p className="text-xs text-[#5B5B5D] mt-1">
                  Full-scale machinery, working engine cut-sections, testing benches, lathe machines, and hand tools for Government &amp; Private ITIs.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry(`ITI Lab Equipment - ${activeItiTrade.toUpperCase()} Trade`)}
                className="bg-[#ECFAF4] border border-[#33C98C] text-[#33C98C] hover:bg-[#33C98C] hover:text-white px-4 py-2 rounded-lg text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 flex-shrink-0"
              >
                <FileText className="h-4 w-4" />
                <span>Get ITI Trade BOQ</span>
              </button>
            </div>

            {/* ITI Sub-Trade Selection Tabs */}
            <div className="flex flex-wrap gap-2 bg-[#F5F7F6] p-2 rounded-xl border border-[#DDE8E3]">
              <button
                onClick={() => setActiveItiTrade("electrician")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase font-display flex items-center gap-2 transition-all cursor-pointer ${
                  activeItiTrade === "electrician"
                    ? "bg-[#33C98C] text-white shadow-sm"
                    : "text-[#4B4B4D] hover:bg-white hover:text-[#33C98C]"
                }`}
              >
                <Zap className="h-3.5 w-3.5" />
                <span>Electrician Trade</span>
              </button>

              <button
                onClick={() => setActiveItiTrade("fitter")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase font-display flex items-center gap-2 transition-all cursor-pointer ${
                  activeItiTrade === "fitter"
                    ? "bg-[#33C98C] text-white shadow-sm"
                    : "text-[#4B4B4D] hover:bg-white hover:text-[#33C98C]"
                }`}
              >
                <Wrench className="h-3.5 w-3.5" />
                <span>Fitter Trade</span>
              </button>

              <button
                onClick={() => setActiveItiTrade("diesel")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase font-display flex items-center gap-2 transition-all cursor-pointer ${
                  activeItiTrade === "diesel"
                    ? "bg-[#33C98C] text-white shadow-sm"
                    : "text-[#4B4B4D] hover:bg-white hover:text-[#33C98C]"
                }`}
              >
                <Flame className="h-3.5 w-3.5" />
                <span>Mechanic Diesel Trade</span>
              </button>

              <button
                onClick={() => setActiveItiTrade("mmv")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase font-display flex items-center gap-2 transition-all cursor-pointer ${
                  activeItiTrade === "mmv"
                    ? "bg-[#33C98C] text-white shadow-sm"
                    : "text-[#4B4B4D] hover:bg-white hover:text-[#33C98C]"
                }`}
              >
                <Truck className="h-3.5 w-3.5" />
                <span>Mechanic Motor Vehicle (MMV)</span>
              </button>
            </div>

            {/* ITI TRADE 1: ELECTRICIAN TRADE */}
            {activeItiTrade === "electrician" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-[#ECFAF4] border border-[#33C98C]/30 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold font-display uppercase text-sm text-[#303033]">
                      Electrician Trade - Complete Workshop &amp; Lab Machinery
                    </h3>
                    <p className="text-xs text-[#5B5B5D]">
                      Covers electrical machines, motor-generator sets, transformers, wiring boards, and testing meters as per NCVT ITI guidelines.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#33C98C]" />
                      Electrical Motors &amp; Generators
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• AC/DC Motor-Generator (MG) Set Trainer</li>
                      <li>• 3-Phase Squirrel Cage Induction Motor (3HP/5HP)</li>
                      <li>• DC Shunt Motor &amp; Series Motor Test Rig</li>
                      <li>• Single Phase AC Motors &amp; Universal Motor</li>
                      <li>• Motor Starter Bench (DOL, Star-Delta, Auto-Transformer, VFD)</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#33C98C]" />
                      Transformers &amp; Power Systems
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Single-Phase Transformer Trainer (1KVA)</li>
                      <li>• 3-Phase Transformer Trainer with Loading Arrangement</li>
                      <li>• Auto-Transformer (Variac) 1-Phase &amp; 3-Phase</li>
                      <li>• Industrial Control Panel &amp; Relay Protection Rig</li>
                      <li>• Solar Inverter &amp; Battery Storage Demonstration Board</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#33C98C]" />
                      Instruments &amp; Hand Tools
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Insulation Tester (Megger 500V/1000V Digital &amp; Hand)</li>
                      <li>• Earth Resistance Tester (3-Pole/4-Pole)</li>
                      <li>• Digital/Analog Multimeters, Clamp Meters, Wattmeters</li>
                      <li>• Insulated Pliers, Wire Strippers, Crimping Tools, Screwdrivers</li>
                      <li>• 15KV Insulated Rubber Matting &amp; LOTO Safety Kits</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ITI TRADE 2: FITTER TRADE */}
            {activeItiTrade === "fitter" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-[#ECFAF4] border border-[#33C98C]/30 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold font-display uppercase text-sm text-[#303033]">
                      Fitter Trade - Workshop Machinery &amp; Precision Bench Tools
                    </h3>
                    <p className="text-xs text-[#5B5B5D]">
                      Covers Lathe Machines, Drilling Machines, Power Hacksaws, Bench Vices, Marking Tables, and Precision Measuring Instruments.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-[#33C98C]" />
                      Heavy Workshop Machinery
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• All-Geared Precision Lathe Machine (4.5ft / 6ft Bed)</li>
                      <li>• Heavy-Duty Pillar Drilling Machine (20mm / 25mm Cap)</li>
                      <li>• Power Hacksaw / Motorized Band Saw Machine</li>
                      <li>• Double Ended Bench Grinder (8" Wheel)</li>
                      <li>• Motorized Hydraulic Press Machine (10 Ton)</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-[#33C98C]" />
                      Bench Work &amp; Marking Equipment
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Heavy-Duty Cast Steel Bench Vices (100mm, 125mm, 150mm)</li>
                      <li>• CI Marking Table (1000mm x 1000mm) with Stand</li>
                      <li>• Granite / CI Surface Plates, Angle Plates, V-Blocks</li>
                      <li>• Vernier Height Gauge (300mm), Vernier Bevel Protractor</li>
                      <li>• Scribers, Center Punches, Dot Punches, Dividers, Trammels</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-[#33C98C]" />
                      Precision Instruments &amp; Hand Tools
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Vernier Calipers (0-150mm, 0-300mm), Digital Calipers</li>
                      <li>• Outside &amp; Inside Micrometers (0-25mm, 25-50mm, 50-75mm)</li>
                      <li>• Dial Test Indicators with Magnetic Bases</li>
                      <li>• Hacksaw Frames, High-Speed Steel (HSS) Blades</li>
                      <li>• Bastard, Second Cut, &amp; Smooth Files, Tap &amp; Die Sets</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ITI TRADE 3: MECHANIC DIESEL TRADE */}
            {activeItiTrade === "diesel" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-[#ECFAF4] border border-[#33C98C]/30 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold font-display uppercase text-sm text-[#303033]">
                      Mechanic Diesel Trade - Engine Rigs, Fuel Pumps &amp; Testing Benches
                    </h3>
                    <p className="text-xs text-[#5B5B5D]">
                      Covers Turbocharged CRDI Diesel Engine Rigs, Fuel Injection Pump Test Benches, Cylinder Bore Gauges, and Overhauling Stands.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Flame className="h-4 w-4 text-[#33C98C]" />
                      Working Diesel Engines &amp; Cut-Sections
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• 4-Cylinder Turbocharged CRDI Diesel Engine Working Rig with Dashboard</li>
                      <li>• Cut-Section Model of 4-Stroke Multi-Cylinder Diesel Engine</li>
                      <li>• Cut-Section Model of Fuel Injection Pump (Inline &amp; Rotary)</li>
                      <li>• Cut-Section Model of Turbocharger &amp; Intercooler System</li>
                      <li>• Single Cylinder Diesel Engine Test Rig with Dynamometer</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Flame className="h-4 w-4 text-[#33C98C]" />
                      Testing &amp; Calibrating Equipment
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Fuel Injector Nozzle Testing &amp; Calibration Bench</li>
                      <li>• Diesel Engine Compression Pressure Tester Kit</li>
                      <li>• Cylinder Bore Gauge (50-160mm) &amp; Dial Gauge</li>
                      <li>• Valve Refacing Machine &amp; Valve Seat Grinding Tool</li>
                      <li>• Digital Laser Tachometer &amp; Exhaust Smoke Density Meter</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Flame className="h-4 w-4 text-[#33C98C]" />
                      Overhauling Tools &amp; Crane
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• 360-Degree Rotating Engine Overhauling Stand</li>
                      <li>• Cylinder Reboring &amp; Honing Tool Attachment</li>
                      <li>• Piston Ring Compressors, Ring Pliers, Valve Spring Compressors</li>
                      <li>• Click Type Torque Wrenches (10-200 Nm)</li>
                      <li>• Hydraulic Engine Hoist Crane (2 Ton Capacity)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ITI TRADE 4: MECHANIC MOTOR VEHICLE (MMV) TRADE */}
            {activeItiTrade === "mmv" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-[#ECFAF4] border border-[#33C98C]/30 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold font-display uppercase text-sm text-[#303033]">
                      Mechanic Motor Vehicle (MMV) Trade - Vehicle Chassis, OBD-II &amp; Lifts
                    </h3>
                    <p className="text-xs text-[#5B5B5D]">
                      Covers Full Vehicle Working Chassis Rigs, Gearbox Cut-Sections, Hydraulic Lifts, Tyre Changers, and OBD-II Scanners.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Truck className="h-4 w-4 text-[#33C98C]" />
                      Working Chassis &amp; Cut-Section Models
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Complete Working Vehicle Chassis Rig with Steering, Brakes &amp; Electricals</li>
                      <li>• Working Cut-Section Model of 5-Speed Manual Gearbox</li>
                      <li>• Cut-Section Model of Automatic Transmission &amp; Differential</li>
                      <li>• Hydraulic Brake Trainer with ABS Anti-lock Braking Simulator</li>
                      <li>• Power Steering Cut-Section Model (Rack &amp; Pinion)</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Truck className="h-4 w-4 text-[#33C98C]" />
                      Servicing &amp; Garage Machinery
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Two-Post Hydraulic Vehicle Hoist Lift (4 Ton Capacity)</li>
                      <li>• Automatic Wheel Balancer &amp; 3D Wheel Alignment Rig</li>
                      <li>• Automatic Tyre Changer Machine</li>
                      <li>• Multi-Brand OBD-II Diagnostic Scanner with Live Data</li>
                      <li>• Auto Electrical System &amp; Wiring Troubleshooting Rig</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F7F6] border border-[#DDE8E3] p-4 rounded-xl space-y-2">
                    <h4 className="font-bold font-display text-xs uppercase text-[#303033] flex items-center gap-2">
                      <Truck className="h-4 w-4 text-[#33C98C]" />
                      Workshop Tool Trolleys &amp; Air Compressor
                    </h4>
                    <ul className="text-xs text-[#5B5B5D] space-y-1.5 font-sans">
                      <li>• Multi-Drawer Tool Trolley with 150+ Mechanic Tools</li>
                      <li>• Industrial Air Compressor (3HP, 200L) with Pneumatic Impact Wrenches</li>
                      <li>• Pneumatic Waste Oil Collector &amp; Drain Extractor Unit</li>
                      <li>• Hydraulic Floor Jacks (3 Ton / 5 Ton) &amp; Heavy Jack Stands</li>
                      <li>• Battery Charger &amp; Jump Starter Unit (12V/24V)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
