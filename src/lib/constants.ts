// ============================================================
// COMPANY-WIDE STATS — Single source of truth
// Update values here and they propagate across all pages.
// ============================================================

export const COMPANY_STATS = {
  yearsExperience: { value: 17, suffix: "+", label: "Years Experience" },
  manpower: { value: 300, suffix: "+", label: "Manpower" },
  scadaInstalled: { value: 1000, suffix: "+", label: "SCADA Installed", formatted: "1,000+" },
  manufacturingFacility: { value: 125000, suffix: "+", label: "Sq. Ft. Manufacturing Facility", formatted: "125,000+" },
  electricalPanels: { value: 10000, suffix: "+", label: "Electrical Panel Supplied", formatted: "10,000+" },
  satisfiedCustomers: { value: 500, suffix: "+", label: "Satisfied Customers" },
  installedBase: { value: 68, suffix: "GW+", label: "Installed Base" },
} as const;

export const PPC_STATS = {
  yearsExperience: { value: 16, suffix: "+", label: "Years Experience" },
  ppcProjects: { value: 200, suffix: "+", label: "PPC Projects Executed Across India" },
  installedBase: { value: 68, suffix: "GW+", label: "Installed Base" },
  responseTime: { value: "<200", suffix: " ms", label: "Real-time Response to Grid Events" },
  renewableCapacity: { value: 40, suffix: "GW+", label: "Renewable Capacity Under Active Control" },
} as const;

export const KUSUM_STATS = {
  yearsExperience: { value: 16, suffix: "+", label: "Years of Experience" },
  installedBase: { value: 68, suffix: " GW+", label: "Installed Base" },
  ppcSolar: { value: 8, suffix: " GW+", label: "PPC Solar" },
  statesOfIndia: { value: 19, suffix: "+", label: "States of India Benefiting" },
  satisfiedCustomers: { value: 100, suffix: "+", label: "Satisfied Customers" },
} as const;
