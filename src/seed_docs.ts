import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
console.log("DB URL inside seed:", process.env.DATABASE_URL ? "Loaded" : "NOT LOADED");

async function main() {
  const { prisma } = await import('./lib/prisma');
  const caseStudies = [
    { title: "Liquid Milk Processing", slug: "liquid-milk-processing-lmp", pdfUrl: "https://adaptive-engg.com/liquid-milk-processing-lmp/" },
    { title: "Hydropneumatic Booster Pump", slug: "hydropneumatic", pdfUrl: "https://adaptive-engg.com/hydropneumatic/" },
    { title: "Water Treatment Plant", slug: "water-treatment-plant-wtp", pdfUrl: "https://adaptive-engg.com/water-treatment-plant-wtp/" },
    { title: "Energy Management System", slug: "energy-mangement-system-ems", pdfUrl: "https://adaptive-engg.com/energy-mangement-system-ems/" },
    { title: "Master PPC", slug: "master-ppc", pdfUrl: "https://adaptive-engg.com/master-ppc/" },
    { title: "Floating Solar", slug: "floating-solar", pdfUrl: "https://adaptive-engg.com/floating-solar/" },
    { title: "Water Supply Schemes", slug: "water-supply-schemes", pdfUrl: "https://adaptive-engg.com/water-supply-schemes/" },
    { title: "Chuhrat Bypass Tunnel", slug: "chuhrat-bypass-tunnel-rewa-sidhi", pdfUrl: "https://adaptive-engg.com/chuhrat-bypass-tunnel-rewa-sidhi/" },
    { title: "IoT SCADA System for PM KUSUM", slug: "iot-scada-system-for-pm-kusum", pdfUrl: "https://adaptive-engg.com/iot-scada-system-for-pm-kusum/" },
    { title: "Khavda Hybrid Plant", slug: "khavda-hybrid-plant", pdfUrl: "https://adaptive-engg.com/khavda-hybrid-plant/" }
  ];

  const brochures = [
    { title: "AMC Brochure", slug: "amc-brochure", pdfUrl: "https://adaptive-engg.com/amc-brochure/" },
    { title: "AssetWiz", slug: "assetwiz", pdfUrl: "https://adaptive-engg.com/assetwiz/" },
    { title: "PM KUSUM", slug: "pm-kusum", pdfUrl: "https://adaptive-engg.com/pm_kusum/" },
    { title: "Tunnel Solutions", slug: "tunnel-solutions", pdfUrl: "https://adaptive-engg.com/tunnel-solutions/" },
    { title: "Renewable Energy Solutions", slug: "renewable-energy-solutions", pdfUrl: "https://adaptive-engg.com/renewable-energy-solutions/" },
    { title: "APEL 3 Fold Brochure", slug: "apel-3-fold-brochure", pdfUrl: "https://adaptive-engg.com/apel-3-fold-brochure/" },
    { title: "Solar LT Panels", slug: "solar-lt-panels-brochure", pdfUrl: "https://adaptive-engg.com/solar-lt-panels-brochure/" },
    { title: "WaterWiz", slug: "waterwiz-brochure", pdfUrl: "https://adaptive-engg.com/waterwiz-brochure/" },
    { title: "Power Plant Controller", slug: "power-plant-controller-brochure", pdfUrl: "https://adaptive-engg.com/power-plant-controller-brochure/" },
    { title: "Plant SCADA", slug: "plant-scada-brochure", pdfUrl: "https://adaptive-engg.com/plant-scada-brochure/" },
    { title: "Central Monitoring System", slug: "central-monitoring-system-brochure", pdfUrl: "https://adaptive-engg.com/central-monitoring-system-brochure/" },
    { title: "Solar Solutions", slug: "solar-solutions-blochure", pdfUrl: "https://adaptive-engg.com/solar-solutions-blochure/" },
    { title: "Substation Automation", slug: "substation-automation", pdfUrl: "https://adaptive-engg.com/substation-automation/" },
    { title: "HT/LT Panels", slug: "ht-lt-panels-brochure", pdfUrl: "https://adaptive-engg.com/ht-lt-panels-brochure/" },
    { title: "Asset Management System", slug: "asset-management-system-brochure", pdfUrl: "https://adaptive-engg.com/asset-management-system-brochure/" },
    { title: "EMS - BESS", slug: "energy-management-system-ems-bess", pdfUrl: "https://adaptive-engg.com/energy-management-system-ems-bess/" },
    { title: "SolarWiz (IoT SCADA)", slug: "solarwiz-iot-scada", pdfUrl: "https://adaptive-engg.com/solarwiz-iot-scada/" }
  ];

  console.log("Cleaning old data...");
  await prisma.caseStudy.deleteMany();
  await prisma.brochure.deleteMany();

  console.log("Inserting Case Studies...");
  for (let i = 0; i < caseStudies.length; i++) {
    await prisma.caseStudy.create({
      data: {
        ...caseStudies[i],
        thumbnailUrl: "",
        sortOrder: i
      }
    });
  }

  console.log("Inserting Brochures...");
  for (let i = 0; i < brochures.length; i++) {
    await prisma.brochure.create({
      data: {
        ...brochures[i],
        thumbnailUrl: "",
        sortOrder: i
      }
    });
  }

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
