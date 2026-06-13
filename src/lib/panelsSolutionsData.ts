export interface SpecificationItem {
  label: string;
  value: string;
}

export interface PanelSolution {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  specifications: SpecificationItem[];
  details: string[];
  imageUrl: string;
}

export const panelsSolutionsData: Record<string, PanelSolution> = {
  "ht-panel": {
    slug: "ht-panel",
    title: "High Tension (HT) Panel",
    subtitle: "VCB Panel up to 33KV/11KV",
    imageUrl: "/panels/HT-Panel.webp",
    description: "High Tension (HT) panels are designed for both indoor and outdoor applications, mostly used in electrical substations for controlling and distributing high-voltage electricity flow safely. We follow strict industry parameters to deliver superior quality and reliability.",
    features: [
      "Designed for indoor and outdoor applications",
      "Mainly deployed in substations to control high-voltage electricity flow",
      "Manufactured under strict adherence to international electrical parameters",
      "High-durability structures engineered for demanding grid environments"
    ],
    specifications: [
      { label: "Voltage Rating", value: "Up to 33KV / 11KV" },
      { label: "Panel Type", value: "Vacuum Circuit Breaker (VCB) / Load Break Switch (LBS) / Ring Main Unit (RMU)" },
      { label: "Insulation Medium", value: "Air insulated / SF6 Gas insulated" },
      { label: "Application", value: "Substation control & power distribution" }
    ],
    details: [
      "Other solutions in our HT Panel range comprise VCB, LBS, RMU, and SF6 Circuit Breakers."
    ]
  },
  "pcc": {
    slug: "pcc",
    title: "Power Control Centre (PCC) Panel",
    subtitle: "415/440V - 65KA - 6300A",
    imageUrl: "/panels/PCC-Panel.webp",
    description: "Our Power Control Centre (PCC) Panels are designed to cater to diverse and complex system requirements across heavy industries, commercial townships, and large plants. The design assures highest reliability in operation, ease of maintenance, and complete flexibility, allowing you to control and distribute the whole power supply of a plant from a single place.",
    features: [
      "Centralized control of the entire power supply from one place",
      "Assures highest reliability in operation and complete flexibility",
      "Low maintenance requirements and robust, long-term service",
      "Designed for efficient and safe bulk power distribution"
    ],
    specifications: [
      { label: "Voltage Rating", value: "415V / 440V" },
      { label: "Short Circuit Rating", value: "65KA" },
      { label: "Current Rating", value: "Up to 6300A" },
      { label: "Application", value: "Main power distribution for Plants, Buildings, Industries, and Townships" }
    ],
    details: [
      "Our customized PCC panels have added enormous value to our clients by ensuring uninterrupted power flow with minimal downtime."
    ]
  },
  "mcc": {
    slug: "mcc",
    title: "Motor Control Centre (MCC) Panel",
    subtitle: "415/440V - 65KA - 4000A",
    imageUrl: "/panels/MCC-Panel.webp",
    description: "We are leading manufacturers and suppliers of customized Motor Control Centre (MCC) Panels. Designed as per the latest applicable engineering standards, our MCC panels offer a modular construction with a wide choice of compartment sizes. They provide comprehensive safety and protection for electric motors.",
    features: [
      "Modular construction with highly customizable compartment sizes",
      "Designed fully compliant with the latest global engineering standards",
      "Reliable protection against overload, short circuits, and single phasing",
      "Supports advanced protection options including earth faults and reverse power"
    ],
    specifications: [
      { label: "Voltage Rating", value: "415V / 440V" },
      { label: "Short Circuit Rating", value: "65KA" },
      { label: "Current Rating", value: "Up to 4000A" },
      { label: "Built-in Protections", value: "Earth Fault, Reverse Power, Under Load, Over/Under Voltage" }
    ],
    details: [
      "Our MCC panels ensure complete protection against electrical faults while keeping motor systems running at peak operational capacity."
    ]
  },
  "intelligent-mcc": {
    slug: "intelligent-mcc",
    title: "Intelligent Motor Control Centre (IMCC) Panel",
    subtitle: "Smart Diagnostic & Networked Motor Control",
    imageUrl: "/panels/IMCC.webp",
    description: "Our state-of-the-art, intelligent MCC design integrates directly with the control system (PLC/SCADA), allowing direct access to strong diagnostic data during commissioning and operations. This simplifies troubleshooting down the line, improves runtime, and reduces operating costs.",
    features: [
      "Seamless integration with central PLC/SCADA control systems",
      "Direct access to detailed motor diagnostics and operation data",
      "Simplifies commissioning and troubleshooting procedures",
      "Supports proactive asset protection and predictive maintenance workflows"
    ],
    specifications: [
      { label: "System Integration", value: "Modbus / Profibus / Ethernet communication" },
      { label: "Key Benefits", value: "Predictive maintenance, increased efficiency, cost-effective operations" },
      { label: "Alerting", value: "Automated tripping alerts and fault profiling" },
      { label: "Application", value: "Continuous process plants, critical manufacturing, smart utilities" }
    ],
    details: [
      "IMCC panels help in predictive maintenance, increasing efficiency, reducing downtime, and enabling automated tripping alerts."
    ]
  },
  "apfc": {
    slug: "apfc",
    title: "Automatic Power Factor Correction (APFC) Panel",
    subtitle: "Optimize Efficiency & Power Factor Correction",
    imageUrl: "/panels/APFC-Panel.webp",
    description: "Our APFC Panels symbolize premium quality and grid compliance. They automatically monitor and correct reactive power to maintain a near-unity power factor. This reduces power losses, minimizes electricity billing penalties, and lowers line harmonics.",
    features: [
      "Automatically maintains a near-unity power factor",
      "Reduces the risk of operational issues and power harmonics",
      "Improves system efficiency by reducing losses",
      "Delivers fast, real-time responses to dynamic reactive load variations"
    ],
    specifications: [
      { label: "Target Power Factor", value: "Unity (1.0) / Near-Unity" },
      { label: "Current Ratings", value: "Available in different current and KVAR ratings" },
      { label: "Controller", value: "Automatic Microprocessor-based APFC relay" },
      { label: "Application", value: "Commercial buildings, heavy industries, utility grid interfaces" }
    ],
    details: [
      "By optimizing the power factor, our APFC panels reduce demand charges and prevent reactive power surcharges on utility bills."
    ]
  },
  "pdb-ldb": {
    slug: "pdb-ldb",
    title: "PDB / LDB Panel",
    subtitle: "Power & Lighting Distribution Boards",
    imageUrl: "/panels/PDBLDB-Panels.webp",
    description: "We offer a wide range of customized Power Distribution Boards (PDB) and Lighting Distribution Boards (LDB). These are designed to allocate electrical power safely to different sections of an industry, large commercial buildings, or infrastructure sites, providing reliable fault protection and control.",
    features: [
      "Safe power allocation to various sections of industries and high-rises",
      "Provides robust fault protection and monitoring of different electrical systems",
      "Supports flexible operations from multiple incoming power sources",
      "Customized design layouts to meet specific end-user specifications"
    ],
    specifications: [
      { label: "Panel Type", value: "PDB (Power Distribution) / LDB (Lighting Distribution)" },
      { label: "Source Input", value: "Dual incomer / Generator changeover options" },
      { label: "Serviceability", value: "Easy access doors, standardized circuit labeling" },
      { label: "Reliability", value: "Assured service with lesser maintenance" }
    ],
    details: [
      "We add enormous value to our clients' operations with our robust engineering, standardized layout, and assured service."
    ]
  },
  "soft-starter-vfd": {
    slug: "soft-starter-vfd",
    title: "Soft Starter and VFD Panel",
    subtitle: "Variable Frequency Drive & Soft Starter Panels",
    imageUrl: "/panels/Soft-Starter-and-VFD-Panel.webp",
    description: "Our customized VFD panels for constant torque and variable torque applications reduce operating costs and improve overall productivity. With over 500+ successful installations across multiple sectors, these panels deliver smooth motor acceleration, speed control, and protection.",
    features: [
      "Fully adjustable speed control and dynamic torque regulation",
      "Delivers smooth motion profiles ideal for applications like elevators and escalators",
      "Reduces thermal and mechanical stress on motors, bearings, and belts",
      "Includes built-in self-diagnostics and fieldbus communication capabilities"
    ],
    specifications: [
      { label: "Installed Base", value: "500+ panels successfully running" },
      { label: "Primary Applications", value: "Pumping, Tube Mills, Paper Mills, Extruders, Rolling Mills" },
      { label: "Control Modes", value: "V/F control, Sensorless Vector Control, Closed-loop control" },
      { label: "Key Benefit", value: "Substantial reduction in energy consumption and starting current spikes" }
    ],
    details: [
      "These panels are engineered to protect motor windings from voltage transients while maximizing process throughput."
    ]
  },
  "plc": {
    slug: "plc",
    title: "PLC Panel",
    subtitle: "Programmable Logic Controller Panels",
    imageUrl: "/panels/PLC-Panels.webp",
    description: "We are one of India’s leading PLC Panel manufacturers with decades of experience in designing custom PLC control cabinets and programming automation logic. We offer a complete range of PLC systems including hot-standby redundancy, SIL-rated safety systems, and flameproof options.",
    features: [
      "Hot-Standby and Redundancy options for high-availability systems",
      "SIL Safety PLC systems available for critical emergency shutdown services",
      "Flameproof and Explosion-proof enclosures for hazardous area classifications",
      "Decades of experience in programming and system configuration"
    ],
    specifications: [
      { label: "Hardware Support", value: "High-end CPUs, analog & digital I/O redundancy" },
      { label: "Compliance & Safety", value: "SIL (Safety Integrity Level) compliant options" },
      { label: "Testing Facility", value: "Complete Factory Acceptance Test (FAT) facility on-site" },
      { label: "Enclosures", value: "Flameproof (Ex-d) / Weather-proof / Explosion-proof" }
    ],
    details: [
      "Our PLC panels are appreciated for easy troubleshooting, faster response times, and straightforward site commissioning support."
    ]
  },
  "acdb": {
    slug: "acdb",
    title: "AC/DB Panel",
    subtitle: "AC Distribution Boards for Solar & Pumping",
    imageUrl: "/panels/ACDB-Panels.webp",
    description: "Our AC Distribution Boards (ACDB) are designed to distribute alternating current safely. Consistently delivered by our team of experts, these boards are customized for client specifications including indoor (IP52) and outdoor floor standing, wall mounting, or stand mounting options. They protect solar and pump appliances from electrical damage.",
    features: [
      "Custom mounting configurations: wall, stand, floor standing (IP52/IP65)",
      "Comes equipped with surge protection devices (SPD) to block transients",
      "Protects appliances from phase imbalances and high voltage spikes",
      "Provides isolation and short circuit protection using MCCBs/MCBs/fuses"
    ],
    specifications: [
      { label: "Ingress Protection", value: "IP52 (Indoor) / IP54, IP65 (Outdoor)" },
      { label: "Built-in Protections", value: "Surge Protection (SPD), Overcurrent, Short Circuit" },
      { label: "Switchgear", value: "MCCB / Fuse / Isolator / MCB selection" },
      { label: "Applications", value: "Solar power plants, agricultural pump controls, industrial circuits" }
    ],
    details: [
      "Our ACDB panels safeguard sensitive control hardware against sudden voltage surges and grid variations."
    ]
  },
  "automation": {
    slug: "automation",
    title: "Automation Panel",
    subtitle: "Designing, Engineering, and Commissioning Solutions",
    imageUrl: "/panels/Automation-Panels.webp",
    description: "We offer complete Panel Solutions for Automation and Control Systems that include Designing, Engineering, Manufacturing, and Commissioning Assistance. Our premises feature a state-of-the-art testing facility where we conduct Factory Acceptance Tests (FAT) using simulation equipment, ensuring complete reliability before dispatch.",
    features: [
      "Fully compliant with international engineering and layout standards",
      "Built-in protection against power spikes, transients, and voltage drops",
      "Completely dust-proof constructions to survive harsh industrial environments",
      "Unique intuitive layout facilitating easy installation and maintenance"
    ],
    specifications: [
      { label: "Enclosure Type", value: "Dust-proof, double-door options, custom RAL powder coat" },
      { label: "Testing Protocol", value: "Full Factory Acceptance Test (FAT) simulation before dispatch" },
      { label: "Scope", value: "End-to-end (Designing, Engineering, Manufacturing, Commissioning)" },
      { label: "Grid Interface", value: "Smart gateways, SCADA Modbus/Ethernet links" }
    ],
    details: [
      "Every automation cabinet is designed for easy installation and maintenance, with clean wiring routes and labeled components."
    ]
  }
};
