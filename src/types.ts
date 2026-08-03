export interface LabSolution {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  targetInstitutions: string[];
  majorTrainingAreas: string[];
  equipmentCategories: string[];
  furnitureRequirements: string[];
  safetyEquipment: string[];
  installationServices: string[];
  customOptions: string[];
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  category: string;
  scope: string;
  year: string;
  image: string;
}

export interface EnquirySubmission {
  fullName: string;
  organisationName: string;
  designation: string;
  email: string;
  mobile: string;
  whatsapp: string;
  state: string;
  city: string;
  organisationType: string;
  requiredLab: string;
  numberOfLabs: number;
  budget: string;
  timeline: string;
  isGovernmentProject: boolean;
  tenderRef?: string;
  description: string;
}
