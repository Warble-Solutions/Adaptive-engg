import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
console.log("DB URL inside seed:", process.env.DATABASE_URL ? "Loaded" : "NOT LOADED");

async function main() {
  const { prisma } = await import('./lib/prisma');

  const caseStudies = [
    {
      title: "Liquid Milk Processing",
      slug: "liquid-milk-processing-lmp",
      thumbnailUrl: "/imgs/case-studies/1-liquid-milk-processing-lmp.png",
      pdfUrl: "/case-studies/Case-Study-1-Liquid-Milk-Processing-LMP.pdf",
      description: "Comprehensive Turnkey electrical, automation, and process engineering for a state-of-the-art liquid milk processing facility.",
      category: "Water & Process"
    },
    {
      title: "Hydropneumatic Booster Pump",
      slug: "hydropneumatic",
      thumbnailUrl: "/imgs/case-studies/2-hydropneumatic.png",
      pdfUrl: "/case-studies/Case-Study-2-Hydropneumatic.pdf",
      description: "Advanced PLC-based control and monitoring for high-efficiency hydropneumatic pumping systems in industrial installations.",
      category: "Water & Process"
    },
    {
      title: "Water Treatment Plant",
      slug: "water-treatment-plant-wtp",
      thumbnailUrl: "/imgs/case-studies/3-water-treatment-plant.png",
      pdfUrl: "/case-studies/Case-Study-3-Water-Treatment-Plant.pdf",
      description: "Design and deployment of centralized SCADA and field instruments for a massive municipal water treatment facility.",
      category: "Water & Process"
    },
    {
      title: "Energy Management System",
      slug: "energy-mangement-system-ems",
      thumbnailUrl: "/imgs/case-studies/4-energy-mangement-system-ems.png",
      pdfUrl: "/case-studies/Case-Study-4-Energy-Mangement-System-EMS.pdf",
      description: "Real-time energy monitoring, load balancing, and power analytics for multi-site heavy manufacturing facilities.",
      category: "Industrial Automation"
    },
    {
      title: "Master PPC",
      slug: "master-ppc",
      thumbnailUrl: "/imgs/case-studies/master-ppc-v1.png",
      pdfUrl: "/case-studies/Master-PPC-V1.pdf",
      description: "Grid-compliant high-speed active/reactive power regulation, ramp-rate control, and frequency correction systems for large-scale utility solar/hybrid plants.",
      category: "Renewable Energy"
    },
    {
      title: "Floating Solar",
      slug: "floating-solar",
      thumbnailUrl: "/imgs/case-studies/5-floating-solar.png",
      pdfUrl: "/case-studies/Case-Study-5-FLOATING-SOLAR_Final.pdf",
      description: "Engineering design, power evacuation, and SCADA monitoring for megawatt-scale floating reservoir solar systems.",
      category: "Renewable Energy"
    },
    {
      title: "Water Supply Schemes",
      slug: "water-supply-schemes",
      thumbnailUrl: "/imgs/case-studies/7-water-supply-schemes.png",
      pdfUrl: "/case-studies/Case-Study-7-Water-Supply-Schemes_Final.pdf",
      description: "Instrumentation, telemetry, and remote monitoring setup for widespread clean water distribution networks.",
      category: "Water & Process"
    },
    {
      title: "Chuhrat Bypass Tunnel",
      slug: "chuhrat-bypass-tunnel-rewa-sidhi",
      thumbnailUrl: "/imgs/case-studies/tunnel-1st-march-2025.png",
      pdfUrl: "/case-studies/Tunnel-Case-study-1st-March-2025.pdf",
      description: "Life safety automation systems including jet fan controls, toxic gas monitoring, and SCADA override for transport tunnels.",
      category: "Infrastructure"
    },
    {
      title: "IoT SCADA System for PM KUSUM",
      slug: "iot-scada-system-for-pm-kusum",
      thumbnailUrl: "/imgs/case-studies/iot-scada-system-for-pm-kusum.png",
      pdfUrl: "/case-studies/Case-Study_IoT-SCADA-system-for-PM-Kusum.pdf",
      description: "Compliant cloud-based controller monitoring for solar agricultural pumps matching PM-KUSUM regulatory directives.",
      category: "PM-KUSUM"
    },
    {
      title: "Khavda Hybrid Plant",
      slug: "khavda-hybrid-plant",
      thumbnailUrl: "/imgs/case-studies/khavda-hybrid-plant.png",
      pdfUrl: "/case-studies/Case-Study_Khavda-Hybrid-Plant.pdf",
      description: "High-capacity E&I substation layout, grid synchronization, and analytics for the Khavda hybrid solar-wind complex.",
      category: "Renewable Energy"
    }
  ];

  const brochures = [
    {
      title: "AEPL 3-Fold Brochure",
      slug: "aepl-3-fold-brochure",
      thumbnailUrl: "/imgs/brochures/aepl-3-fold-brochure.png",
      pdfUrl: "/brochures/AEPL_3-Fold-Brochure-final-design.pdf",
      category: "SCADA & Automation"
    },
    {
      title: "AMC Program Brochure",
      slug: "amc-program-brochure",
      thumbnailUrl: "/imgs/brochures/amc-program-brochure.png",
      pdfUrl: "/brochures/AMC-Program-_5th-June-2023-1.pdf",
      category: "SCADA & Automation"
    },
    {
      title: "Adaptive Corporate Flyer",
      slug: "adaptive-corporate-flyer",
      thumbnailUrl: "/imgs/brochures/adaptive-corporate-flyer.png",
      pdfUrl: "/brochures/Adaptive-Flyer.pdf",
      category: "SCADA & Automation"
    },
    {
      title: "Advanced Analytics Brochure",
      slug: "advanced-analytics-brochure",
      thumbnailUrl: "/imgs/brochures/advanced-analytics-brochure.png",
      pdfUrl: "/brochures/Advanced analytics_Brochure.pdf",
      category: "Unified Platform"
    },
    {
      title: "AssetWiz Asset Management",
      slug: "assetwiz-asset-management",
      thumbnailUrl: "/imgs/brochures/assetwiz-asset-management.png",
      pdfUrl: "/brochures/AssetWiz-1.pdf",
      category: "Unified Platform"
    },
    {
      title: "Central Monitoring System (CMS)",
      slug: "central-monitoring-system-cms",
      thumbnailUrl: "/imgs/brochures/central-monitoring-system-cms.png",
      pdfUrl: "/brochures/CMS_Brochure.pdf",
      category: "Unified Platform"
    },
    {
      title: "Solar LT Panels",
      slug: "solar-lt-panels",
      thumbnailUrl: "/imgs/brochures/solar-lt-panels.png",
      pdfUrl: "/brochures/LT-Panels-_-Brochure_Final_D2.pdf",
      category: "HT/LT Panels"
    },
    {
      title: "Power Plant Controller (PPC)",
      slug: "power-plant-controller-ppc",
      thumbnailUrl: "/imgs/brochures/master-ppc-v1.png",
      pdfUrl: "/brochures/Master-PPC-V1.pdf",
      category: "Renewable Energy"
    },
    {
      title: "Plant SCADA Solutions",
      slug: "plant-scada-solutions",
      thumbnailUrl: "/imgs/brochures/plant-scada-solutions.png",
      pdfUrl: "/brochures/Plant-SCADA-.pdf",
      category: "SCADA & Automation"
    },
    {
      title: "Renewable Energy Solutions",
      slug: "renewable-energy-solutions",
      thumbnailUrl: "/imgs/brochures/renewable-energy-solutions.png",
      pdfUrl: "/brochures/Renewable-Energy-Solutions.pdf",
      category: "Renewable Energy"
    },
    {
      title: "SCADA Solutions Brochure",
      slug: "scada-brochure",
      thumbnailUrl: "/imgs/brochures/scada-brochure.png",
      pdfUrl: "/brochures/SCADA_Brochure.pdf",
      category: "SCADA & Automation"
    },
    {
      title: "SolarWiz IoT SCADA",
      slug: "solarwiz-iot-scada",
      thumbnailUrl: "/imgs/brochures/solarwiz-iot-scada.png",
      pdfUrl: "/brochures/Solarwiz-Brochure_19062025.pdf",
      category: "PM-KUSUM"
    },
    {
      title: "Tunnel Brochure",
      slug: "tunnel-brochure",
      thumbnailUrl: "/imgs/brochures/tunnel-brochure.png",
      pdfUrl: "/brochures/Tunnel-Brochure.pdf",
      category: "Infrastructure"
    },
    {
      title: "WaterWiz Water SCADA Platform",
      slug: "waterwiz-water-scada-platform",
      thumbnailUrl: "/imgs/brochures/waterwiz-water-scada-platform.png",
      pdfUrl: "/brochures/WaterWiz-Brochure_Version-1.pdf",
      category: "Water Solutions"
    },
    {
      title: "Asset Management System (AMS)",
      slug: "ams",
      thumbnailUrl: "/imgs/brochures/ams.png",
      pdfUrl: "/brochures/ams.pdf",
      category: "Unified Platform"
    },
    {
      title: "Energy Management System (EMS)",
      slug: "ems",
      thumbnailUrl: "/imgs/brochures/ems.png",
      pdfUrl: "/brochures/ems.pdf",
      category: "Renewable Energy"
    },
    {
      title: "HT/LT Panels & Switchgears",
      slug: "ht",
      thumbnailUrl: "/imgs/brochures/ht.png",
      pdfUrl: "/brochures/ht.pdf",
      category: "HT/LT Panels"
    },
    {
      title: "Solar Solutions Brochure",
      slug: "solar",
      thumbnailUrl: "/imgs/brochures/solar.png",
      pdfUrl: "/brochures/solar.pdf",
      category: "Renewable Energy"
    },
    {
      title: "Sustainable Infrastructure Solutions",
      slug: "sustainable",
      thumbnailUrl: "/imgs/brochures/sustainable.png",
      pdfUrl: "/brochures/sustainable.pdf",
      category: "Renewable Energy"
    }
  ];

  console.log("Cleaning old data...");
  await prisma.caseStudy.deleteMany();
  await prisma.brochure.deleteMany();

  console.log("Inserting Case Studies...");
  for (let i = 0; i < caseStudies.length; i++) {
    await prisma.caseStudy.create({
      data: {
        ...caseStudies[i],
        sortOrder: i
      }
    });
  }

  console.log("Inserting Brochures...");
  for (let i = 0; i < brochures.length; i++) {
    await prisma.brochure.create({
      data: {
        ...brochures[i],
        sortOrder: i
      }
    });
  }

  console.log("Upserting General Application Job...");
  await prisma.job.upsert({
    where: { id: "general-application" },
    update: {
      title: "General Application",
      slug: "general-application",
      location: "Ahmedabad, India",
      department: "General",
      type: "Full-time",
      description: "General candidature database for future openings.",
      requirements: "Any relevant degree or experience in engineering, automation, software, or support roles.",
      isActive: true
    },
    create: {
      id: "general-application",
      title: "General Application",
      slug: "general-application",
      location: "Ahmedabad, India",
      department: "General",
      type: "Full-time",
      description: "General candidature database for future openings.",
      requirements: "Any relevant degree or experience in engineering, automation, software, or support roles.",
      isActive: true
    }
  });

  console.log("Done!");
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    const { prisma } = await import('./lib/prisma');
    await prisma.$disconnect()
  })
