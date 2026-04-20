import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

function stripWpShortcodes(content: string) {
  // Simple regex to strip visual composer tags
  return content
    .replace(/\[\/?vc_[^\]]+\]/g, "") // Remove [vc_row], [/vc_column_text], etc
    .replace(/\[\/?et_pb[^\]]+\]/g, "") 
    .replace(/\n\s*\n/g, "\n\n") // Collapse blank lines
    .trim();
}

async function fetchRealBlogs() {
  console.log("Fetching real blogs from old WordPress API...");
  try {
    const res = await fetch("https://adaptive-engg.com/wp-json/wp/v2/posts?per_page=5&_embed");
    const posts = await res.json();

    if (!Array.isArray(posts)) return;

    for (const post of posts) {
      const title = post.title.rendered.replace(/&#8211;/g, "-").replace(/&#8217;/g, "'");
      const slug = post.slug;
      
      // Clean up the Wordpress content
      let rawContent = post.content.rendered;
      let cleanedContent = stripWpShortcodes(rawContent);
      
      // Extract excerpt if not present
      let excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").replace(/\[.*?\]/g, "").trim();

      let thumbnailUrl = "";
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        thumbnailUrl = post._embedded['wp:featuredmedia'][0].source_url;
      }

      // Upsert into DB
      await prisma.blogPost.upsert({
        where: { slug: slug },
        update: {},
        create: {
          title,
          slug,
          content: `<p>${cleanedContent.replace(/\n/g, "<br/>")}</p>`,
          excerpt: excerpt.substring(0, 150) + "...",
          thumbnailUrl,
          isPublished: true,
          createdAt: new Date(post.date),
          updatedAt: new Date(post.modified),
        }
      });
      console.log(`✅ Seeded Blog: ${title}`);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
}

async function seedJobs() {
  console.log("Seeding authentic job postings...");
  const jobs = [
    {
      title: "Electrical Draftsman",
      slug: "electrical-draftsman",
      location: "Ahmedabad, India",
      department: "Engineering",
      type: "Full-time",
      description: "We are looking for an experienced Electrical Draftsman to prepare detailed electrical diagrams and schematics for renewable energy and water treatment projects. Proficiency in AutoCAD Electrical is a must.",
      requirements: "- Diploma in Electrical Engineering\n- 2-4 years of experience in AutoCAD Electrical\n- Knowledge of control panel wiring diagrams\n- Familiarity with IEC standards",
      isActive: true,
    },
    {
      title: "Executive Engineer – Electrical Design",
      slug: "executive-engineer-electrical-design",
      location: "Ahmedabad, India",
      department: "Engineering",
      type: "Full-time",
      description: "Seeking a passionate Electrical Design Engineer to design complex electrical systems for Tunnel infrastructure and Data Centers. You will work closely with the project execution team.",
      requirements: "- B.E. / B.Tech in Electrical Engineering\n- 5+ years of design experience for infrastructure projects\n- Expertise in E-TAP, Dialux, and AutoCAD\n- Proven track record of handling projects over 10Cr",
      isActive: true,
    },
    {
      title: "SCADA / Automation Engineer",
      slug: "scada-automation-engineer",
      location: "Multiple Locations (India)",
      department: "Industrial Automation",
      type: "Full-time",
      description: "Lead the programming and commissioning of Centralized SCADA Systems for our IoT platforms (SolarWiz, WaterWiz, MachineWiz). Experience with major PLC brands required.",
      requirements: "- B.E. / B.Tech in Instrumentation / Electronics\n- 3-5 years experience programming PLC/SCADA (Siemens, Rockwell, Wonderware)\n- Previous experience with PM-KUSUM projects is a strong plus\n- Willingness to travel to project sites",
      isActive: true,
    }
  ];

  for (const job of jobs) {
    await prisma.job.upsert({
      where: { slug: job.slug },
      update: {},
      create: job
    });
    console.log(`✅ Seeded Job: ${job.title}`);
  }
}

async function seedBrochures() {
  console.log("Seeding brochures...");
  const brochures = [
    {
      title: "Corporate Profile 2024",
      slug: "corporate-profile-2024",
      thumbnailUrl: "/imgs/og-image.jpg",
      pdfUrl: "https://adaptive-engg.com/dummy.pdf",
      category: "Corporate",
      sortOrder: 1
    },
    {
      title: "Unified Renewable Solution Breakdown",
      slug: "unified-renewable-solution-breakdown",
      thumbnailUrl: "/imgs/case-studies/2.png",
      pdfUrl: "https://adaptive-engg.com/dummy.pdf",
      category: "Renewable Energy",
      sortOrder: 2
    },
    {
      title: "Water Treatment Systems (WTP & ETP) Overview",
      slug: "water-treatment-systems-overview",
      thumbnailUrl: "/imgs/case-studies/4.png",
      pdfUrl: "https://adaptive-engg.com/dummy.pdf",
      category: "Water/Waste Water",
      sortOrder: 3
    }
  ];

  for (const doc of brochures) {
    await prisma.brochure.upsert({
      where: { slug: doc.slug },
      update: {},
      create: doc
    });
    console.log(`✅ Seeded Brochure: ${doc.title}`);
  }
}

async function seedCaseStudies() {
  console.log("Seeding case studies...");
  const caseStudies = [
    {
      title: "100MW Solar Plant SCADA Integration",
      slug: "100mw-solar-plant-scada",
      thumbnailUrl: "/imgs/case-studies/2.png",
      pdfUrl: "https://adaptive-engg.com/dummy.pdf",
      description: "Complete control and SCADA integration for a 100MW solar park in Gujarat using our SolarWiz platform, leading to 15% better fault detection.",
      category: "Renewable Energy",
      sortOrder: 1
    },
    {
      title: "Centralized SCADA for City Water Supply",
      slug: "centralized-scada-city-water-supply",
      thumbnailUrl: "/imgs/case-studies/4.png",
      pdfUrl: "https://adaptive-engg.com/dummy.pdf",
      description: "Automated network of 30+ pumping stations bringing clean water to over 2 Million residents with 0% downtime.",
      category: "Water / Waste Water",
      sortOrder: 2
    },
    {
      title: "Ventilation & Lighting Control for Highway Tunnel",
      slug: "tunnel-ventilation-lighting-control",
      thumbnailUrl: "/imgs/case-studies/3.png",
      pdfUrl: "https://adaptive-engg.com/dummy.pdf",
      description: "Designed and executed the Turnkey E&I panels for one of India's longest highway tunnels incorporating intelligent dimming and hazard protocols.",
      category: "Infrastructure",
      sortOrder: 3
    }
  ];

  for (const doc of caseStudies) {
    await prisma.caseStudy.upsert({
      where: { slug: doc.slug },
      update: {},
      create: doc
    });
    console.log(`✅ Seeded Case Study: ${doc.title}`);
  }
}

async function main() {
  await fetchRealBlogs();
  await seedJobs();
  await seedBrochures();
  await seedCaseStudies();
  console.log("🎉 All content seeded successfully!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
