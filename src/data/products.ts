import { Product } from "../types";
import agricultureLabImg from "../assets/images/agriculture_lab_1785501912082.jpg";
import computerLabImg from "../assets/images/computer_lab_1785501924155.jpg";

export const products: Product[] = [
  {
    id: "prod-manikin",
    title: "Advanced Medical Simulation Manikin",
    category: "Medical & Healthcare",
    description: "Highly detailed clinical manikin for nursing training, CPR, intubation, patient positioning, and wound care simulation.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-obd",
    title: "OBD-II Smart Automotive Diagnostic Scanner",
    category: "Automotive",
    description: "Advanced vehicle computer scanner with live graphing, sensor analysis, error code clearing, and multi-protocol vehicle support.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-mg-set",
    title: "AC/DC Motor Generator (MG) Trainer Set",
    category: "Electrical",
    description: "Industrial machine training bench with coupling, digital tachometer, load configurations, and safety terminals.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-dso",
    title: "100MHz Digital Storage Oscilloscope (DSO)",
    category: "Electronics",
    description: "High-resolution 4-channel signal analyzer with FFT, pattern triggering, and USB data interface for electronics labs.",
    image: "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-soil-npk",
    title: "Digital Soil & Water NPK Testing Station",
    category: "Agriculture",
    description: "Portable agricultural spectrophotometer kit for accurate estimation of Soil Nitrogen, Phosphorus, Potassium, and pH.",
    image: agricultureLabImg
  },
  {
    id: "prod-smartboard",
    title: "75-inch UHD Smart Classroom Interactive Panel",
    category: "Computer & Classroom",
    description: "Touch-sensitive smartboard with built-in Android/Windows dual OS, screen-sharing, and interactive whiteboard applications.",
    image: computerLabImg
  },
  {
    id: "prod-sewing",
    title: "Industrial High-Speed Lockstitch Sewing Machine",
    category: "Apparel & Garment",
    description: "Direct-drive heavy duty stitching machine with auto-thread trimming, speed adjustment, and ergonomic workbench setup.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-splicer",
    title: "Automatic Optical Fiber Fusion Splicer",
    category: "Telecom",
    description: "6-motor core alignment splicing machine with heating unit, high tensile strength test, and fiber core microscopic view.",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-solar-pv",
    title: "Solar PV Photovoltaic Technical Trainer Rig",
    category: "Solar & Renewable",
    description: "Grid-interactive solar training console with MPPT controllers, inverter load, dynamic battery banks, and solar irradiance meters.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-pipe-threader",
    title: "Heavy-Duty Electric Pipe Threading Machine",
    category: "Plumbing",
    description: "Automatic high-torque threading, cutting, and deburring machine for 1/2\" to 2\" steel and GI plumbing conduits.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-vacuum",
    title: "Industrial Chamber Vacuum Sealer",
    category: "Food Processing",
    description: "Heavy duty FSSAI-compliant vacuum packing machine for dry and liquid culinary items, pickles, pulses, and grain storage.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "prod-camera-rig",
    title: "4K Broadcast DSLR Media Production Package",
    category: "Media & Studio",
    description: "Professional camera rig with variable lenses, fluid-head tripod, wireless lavalier microphone kit, and cold-shoe mounts.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=400"
  }
];
