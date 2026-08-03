export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  logoUrl?: string;
  badgeBg?: string;
  badgeTextColor?: string;
}

export const brandPartners: BrandPartner[] = [
  {
    id: "usha",
    name: "USHA",
    category: "Sewing & Fashion Tech",
    logoUrl: "/brands/usha.svg",
    badgeBg: "bg-red-50 border-red-200",
    badgeTextColor: "text-red-700",
  },
  {
    id: "anchor",
    name: "Anchor",
    category: "Electrical & Wiring",
    logoUrl: "/brands/anchor.svg",
    badgeBg: "bg-blue-50 border-blue-200",
    badgeTextColor: "text-blue-700",
  },
  {
    id: "brother",
    name: "Brother",
    category: "Craft & Garment Tech",
    logoUrl: "/brands/brother.svg",
    badgeBg: "bg-sky-50 border-sky-200",
    badgeTextColor: "text-sky-800",
  },
  {
    id: "singer",
    name: "Singer",
    category: "Textile & Machinery",
    logoUrl: "/brands/singer.svg",
    badgeBg: "bg-rose-50 border-rose-200",
    badgeTextColor: "text-rose-700",
  },
  {
    id: "crompton",
    name: "Crompton",
    category: "Electrical & Power",
    logoUrl: "/brands/crompton.svg",
    badgeBg: "bg-emerald-50 border-emerald-200",
    badgeTextColor: "text-emerald-800",
  },
  {
    id: "dr-morepen",
    name: "Dr. Morepen",
    category: "Health & Diagnostic Tech",
    logoUrl: "/brands/dr-morepen.svg",
    badgeBg: "bg-indigo-50 border-indigo-200",
    badgeTextColor: "text-indigo-800",
  },
];
