export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  pdfUrl: string;
  description: string | null;
  category: string | null;
  sortOrder: number;
}

export const staticCaseStudies: CaseStudy[] = [
  {
    id: "static-cs-1",
    title: "Liquid Milk Processing (LMP) Case Study",
    slug: "liquid-milk-processing-lmp",
    thumbnailUrl: "/imgs/case-studies/1-liquid-milk-processing-lmp.png",
    pdfUrl: "/case-studies/Case-Study-1-Liquid-Milk-Processing-LMP.pdf",
    description: "Comprehensive Turnkey electrical, automation, and process engineering for a state-of-the-art liquid milk processing facility.",
    category: "Water & Process",
    sortOrder: 1
  },
  {
    id: "static-cs-2",
    title: "Hydropneumatic Systems Integration",
    slug: "hydropneumatic-systems-integration",
    thumbnailUrl: "/imgs/case-studies/2-hydropneumatic.png",
    pdfUrl: "/case-studies/Case-Study-2-Hydropneumatic.pdf",
    description: "Advanced PLC-based control and monitoring for high-efficiency hydropneumatic pumping systems in industrial installations.",
    category: "Water & Process",
    sortOrder: 2
  },
  {
    id: "static-cs-3",
    title: "Water Treatment Plant (WTP) Automation",
    slug: "water-treatment-plant-wtp-automation",
    thumbnailUrl: "/imgs/case-studies/3-water-treatment-plant.png",
    pdfUrl: "/case-studies/Case-Study-3-Water-Treatment-Plant.pdf",
    description: "Design and deployment of centralized SCADA and field instruments for a massive municipal water treatment facility.",
    category: "Water & Process",
    sortOrder: 3
  },
  {
    id: "static-cs-4",
    title: "Energy Management System (EMS)",
    slug: "energy-management-system-ems",
    thumbnailUrl: "/imgs/case-studies/4-energy-mangement-system-ems.png",
    pdfUrl: "/case-studies/Case-Study-4-Energy-Mangement-System-EMS.pdf",
    description: "Real-time energy monitoring, load balancing, and power analytics for multi-site heavy manufacturing facilities.",
    category: "Industrial Automation",
    sortOrder: 4
  },
  {
    id: "static-cs-5",
    title: "Master Power Plant Controller (PPC) Case Study",
    slug: "master-ppc-case-study",
    thumbnailUrl: "/imgs/case-studies/master-ppc-v1.png",
    pdfUrl: "/case-studies/Master-PPC-V1.pdf",
    description: "Grid-compliant high-speed active/reactive power regulation, ramp-rate control, and frequency correction systems for large-scale utility solar/hybrid plants.",
    category: "Renewable Energy",
    sortOrder: 5
  },
  {
    id: "static-cs-6",
    title: "Floating Solar PV Installation",
    slug: "floating-solar-pv-installation",
    thumbnailUrl: "/imgs/case-studies/5-floating-solar.png",
    pdfUrl: "/case-studies/Case-Study-5-FLOATING-SOLAR_Final.pdf",
    description: "Engineering design, power evacuation, and SCADA monitoring for megawatt-scale floating reservoir solar systems.",
    category: "Renewable Energy",
    sortOrder: 6
  },
  {
    id: "static-cs-7",
    title: "Rural Water Supply Schemes",
    slug: "rural-water-supply-schemes",
    thumbnailUrl: "/imgs/case-studies/7-water-supply-schemes.png",
    pdfUrl: "/case-studies/Case-Study-7-Water-Supply-Schemes_Final.pdf",
    description: "Instrumentation, telemetry, and remote monitoring setup for widespread clean water distribution networks.",
    category: "Water & Process",
    sortOrder: 7
  },
  {
    id: "static-cs-8",
    title: "Highway Tunnel Ventilation & Control Systems",
    slug: "highway-tunnel-ventilation-control-systems",
    thumbnailUrl: "/imgs/case-studies/tunnel-1st-march-2025.png",
    pdfUrl: "/case-studies/Tunnel-Case-study-1st-March-2025.pdf",
    description: "Life safety automation systems including jet fan controls, toxic gas monitoring, and SCADA override for transport tunnels.",
    category: "Infrastructure",
    sortOrder: 8
  },
  {
    id: "static-cs-9",
    title: "IoT SCADA System for PM-KUSUM",
    slug: "iot-scada-system-for-pm-kusum",
    thumbnailUrl: "/imgs/case-studies/iot-scada-system-for-pm-kusum.png",
    pdfUrl: "/case-studies/Case-Study_IoT-SCADA-system-for-PM-Kusum.pdf",
    description: "Compliant cloud-based controller monitoring for solar agricultural pumps matching PM-KUSUM regulatory directives.",
    category: "PM-KUSUM",
    sortOrder: 9
  },
  {
    id: "static-cs-10",
    title: "Khavda Hybrid Renewable Energy Plant",
    slug: "khavda-hybrid-renewable-energy-plant",
    thumbnailUrl: "/imgs/case-studies/khavda-hybrid-plant.png",
    pdfUrl: "/case-studies/Case-Study_Khavda-Hybrid-Plant.pdf",
    description: "High-capacity E&I substation layout, grid synchronization, and analytics for the Khavda hybrid solar-wind complex.",
    category: "Renewable Energy",
    sortOrder: 10
  }
];
