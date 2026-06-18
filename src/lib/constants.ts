// ============================================================
// COMPANY-WIDE STATS — Single source of truth
// Update values here and they propagate across all pages.
// ============================================================

export const COMPANY_STATS = {
  yearsExperience: { value: 17, suffix: "+", label: "Years Experience" },
  manpower: { value: 300, suffix: "+", label: "Manpower" },
  scadaInstalled: { value: 1000, suffix: "+", label: "SCADA Installed", formatted: "1,000+" },
  manufacturingFacility: { value: 125000, suffix: "+sq.ft.", label: "Manufacturing Facility", formatted: "1,25,000+sq.ft." },
  electricalPanels: { value: 10000, suffix: "+", label: "Electrical Panel Supplied", formatted: "10,000+" },
  satisfiedCustomers: { value: 500, suffix: "+", label: "Satisfied Customers" },
  installedBase: { value: 68, suffix: "GW+", label: "Installed Base" },
} as const;

export const PPC_STATS = {
  yearsExperience: { value: 17, suffix: "+", label: "Years Experience" },
  ppcProjects: { value: 200, suffix: "+", label: "PPC Projects Executed Across India" },
  installedBase: { value: 68, suffix: "GW+", label: "Installed Base" },
  responseTime: { value: "<200", suffix: "ms", label: "Real-time Response to Grid Events" },
  renewableCapacity: { value: 40, suffix: "GW+", label: "Renewable Capacity Under Active Control" },
  hybridProjects: { value: 8, suffix: "GW+", label: "Hybrid Projects" },
  hybridInstalled: { value: 10, suffix: "+", label: "Hybrid PPC Installed" },
} as const;

export const KUSUM_STATS = {
  yearsExperience: { value: 17, suffix: "+", label: "Years of Experience" },
  installedBase: { value: 68, suffix: "GW+", label: "Installed Base" },
  ppcSolar: { value: 8, suffix: "GW+", label: "PPC Solar" },
  statesOfIndia: { value: 19, suffix: "+", label: "States of India Benefiting" },
  satisfiedCustomers: { value: 100, suffix: "+", label: "Satisfied Customers" },
} as const;

export const TUNNEL_STATS = {
  twinTubeRoad: { value: 2.5, suffix: "Km", label: "Twin Tube Road Tunnel" },
  transformer: { value: 1000, suffix: "KVA", label: "Transformer with HT Sub Station", formatted: "1,000" },
  ledLights: { value: 1500, suffix: "+", label: "LED Lights Installed", formatted: "1,500+" },
  remoteIoPanels: { value: 15, suffix: "+", label: "Remote I/O Panels Installed" },
} as const;

export const WATER_STATS = {
  yearsExperience: { value: 17, suffix: "+", label: "Years Experience" },
  mldTreatedWater: { value: 400, suffix: "+", label: "MLD Treated Water" },
  supplySchemes: { value: 50, suffix: "+", label: "Water Supply Schemes" },
  overheadTanks: { value: 1500, suffix: "+", label: "Over Head Tanks (OHT)", formatted: "1,500+" },
  mldTreatedSewage: { value: 300, suffix: "+", label: "MLD Treated Sewage" },
  pumpingStationsConnected: { value: 10, suffix: "+", label: "Pumping Stations Connected" },
  mldEffluentTreated: { value: 20, suffix: "+", label: "MLD Effluent Treated" },
  statesCovered: { value: 10, suffix: "+", label: "States Covered" },
  irrigationPumpingStations: { value: 20, suffix: "+", label: "Irrigation Pumping Stations" },
} as const;

export const AUTOMATION_STATS = {
  yearsExperience: { value: 17, suffix: "+", label: "Years of Experience" },
  scadaInstalled: { value: 1000, suffix: "+", label: "SCADA System Installed" },
  systemsPerYear: { value: 3500, suffix: "+", label: "Systems Per Year" },
  scadaTags: { value: 1000000, suffix: "", label: "SCADA tags in a single project", formatted: "10 Lakh" },
  redundantSystems: { value: 50, suffix: "+", label: "Hot Redundant Systems Commissioned per Year" },
} as const;

export const GOVERNMENT_APPROVALS_WATER = [
  "GWSSB (Gujarat)",
  "MPJNM (Madhya Pradesh)",
  "MPUDC (Madhya Pradesh)",
  "MPUADD (Madhya Pradesh)",
  "UPJNM (Uttar Pradesh)",
  "RWS&S (Odisha)",
  "JICA Assisted (Assam)",
] as const;

export const WATER_SOLUTIONS = [
  { href: "/infrastructure/water/wtp", abbr: "WTP", label: "Water Supply & WTP", desc: "End-to-end E&I and SCADA solutions for Water Supply Schemes and Water Treatment Plants." },
  { href: "/infrastructure/water/stp", abbr: "STP", label: "Sewage Treatment Plant", desc: "Turn-key Electrical, Instrumentation and Automation Solutions for the Waste Water industry." },
  { href: "/infrastructure/water/etp", abbr: "ETP", label: "Effluent Treatment Plant", desc: "Optimized process control and SCADA architecture for MBR and RO technologies." },
  { href: "/infrastructure/water/lift-irrigation", abbr: "Lift", label: "Lift Irrigation", desc: "Complete E&I packages for pump houses with advanced SCADA and energy management." },
  { href: "/infrastructure/water/micro-irrigation", abbr: "Micro", label: "Micro Irrigation", desc: "Tailor-made Outlet Management Systems (OMS) for precise water distribution." },
  { href: "/infrastructure/water/centralized-scada", abbr: "SCADA", label: "Centralized SCADA", desc: "Highly reliable, scalable software architecture for centralized water monitoring." },
] as const;

