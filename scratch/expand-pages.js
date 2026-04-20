const fs = require('fs');
const path = require('path');

// Each page config: { path, title, tag, heroImg, tagline, sections[] }
const pages = [
  {
    path: 'src/app/about/profile/page.tsx',
    title: 'Company Profile',
    tag: 'About Us',
    tagline: 'India\'s leading Turnkey Electrical, Instrumentation, and Automation company delivering end-to-end solutions since 2008.',
    heroImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Who We Are', text: 'Adaptive Engineering Pvt. Ltd. (AEPL) is a technology-driven engineering company headquartered in Ahmedabad, Gujarat. Since its inception in 2008, AEPL has emerged as India\'s most trusted partner for Renewable Energy, PM-KUSUM, Water Infrastructure, and Industrial Automation solutions. With a 125,000+ sq. ft. manufacturing facility, 300+ skilled professionals, and 1000+ projects executed across India, we deliver mission-critical Turnkey E&I systems that power the nation\'s growth.', stats: [{ val: '16+', label: 'Years Experience' }, { val: '300+', label: 'Skilled Engineers' }, { val: '₹300Cr+', label: 'Market Share' }] },
      { type: 'grid4', heading: 'Core Competencies', items: [
        { icon: 'Zap', title: 'Turnkey E&I', desc: 'Complete Electrical & Instrumentation execution from design to commissioning for Solar, Water, and Industrial projects.' },
        { icon: 'Activity', title: 'IoT & SCADA', desc: 'In-house developed SolarWiz, WaterWiz, and MachineWiz IoT platforms with edge computing and cloud analytics.' },
        { icon: 'ShieldCheck', title: 'Panel Manufacturing', desc: 'IS/IEC certified LT/HT panels, MCC, PCC, ACDB, DCDB panels manufactured in our state-of-the-art facility.' },
        { icon: 'Cpu', title: 'Software & Analytics', desc: 'ReportWiz, CMS, AMS — proprietary software suite for automated reporting, asset tracking, and performance monitoring.' },
      ]},
      { type: 'timeline', heading: 'Our Growth Story', items: [
        { year: '2008', title: 'Foundation', desc: 'Established in Ahmedabad with a vision to provide quality engineering services.' },
        { year: '2012', title: 'Renewable Entry', desc: 'Executed first utility-scale solar SCADA project. Entered the renewable energy sector.' },
        { year: '2016', title: 'PM-KUSUM Pioneer', desc: 'Became one of the first companies to provide end-to-end RMS solutions under PM-KUSUM scheme.' },
        { year: '2020', title: 'IoT Platform Launch', desc: 'Launched SolarWiz, India\'s leading solar pump monitoring platform now monitoring 68GW+ of assets.' },
        { year: '2024', title: 'Infrastructure Expansion', desc: 'Expanded into Tunnel E&I, Data Centers, and Smart Manufacturing solutions.' },
      ]},
      { type: 'values', heading: 'Our Values', items: [
        { title: 'Innovation First', desc: 'We invest heavily in R&D to develop proprietary solutions that set industry benchmarks.' },
        { title: 'Client Success', desc: 'Every project is a partnership. We measure our success by the ROI we deliver to our clients.' },
        { title: 'Quality Obsession', desc: 'ISO 9001:2015 and ISO 45001:2018 certified. Zero-defect manufacturing is our standard.' },
        { title: 'Sustainability', desc: 'Our solutions directly contribute to India\'s clean energy transition and carbon reduction goals.' },
      ]},
    ]
  },
  {
    path: 'src/app/history/page.tsx',
    title: 'Our Journey',
    tag: 'History',
    tagline: 'From a small engineering firm to India\'s most trusted Turnkey E&I solutions provider — here is how we got here.',
    heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'timeline', heading: 'Milestones That Define Us', items: [
        { year: '2008', title: 'The Beginning', desc: 'Founded by industry veterans with decades of experience in electrical engineering. Started operations with a small team of 10 engineers in Ahmedabad.' },
        { year: '2010', title: 'First Major Contract', desc: 'Won our first utility-scale project — a 10MW solar plant SCADA integration for a leading EPC company in Gujarat.' },
        { year: '2012', title: 'Panel Manufacturing', desc: 'Established our own IS/IEC certified panel manufacturing facility. Began producing LT panels, MCC, and PCC systems in-house.' },
        { year: '2014', title: 'Water Infrastructure', desc: 'Entered the water treatment sector with SCADA solutions for municipal water supply systems. Executed control systems for 30+ pumping stations.' },
        { year: '2016', title: 'PM-KUSUM Pioneer', desc: 'Became one of the first companies in India to develop compliant Remote Monitoring Solutions (RMS) for the PM-KUSUM solar pump initiative.' },
        { year: '2018', title: 'SolarWiz Launch', desc: 'Launched our flagship IoT platform SolarWiz — a Store & Forward edge computing device with cloud analytics for solar pump monitoring.' },
        { year: '2020', title: '50GW Milestone', desc: 'Crossed 50GW of monitored renewable energy assets. Expanded team to 200+ engineers and opened regional offices.' },
        { year: '2022', title: 'Infrastructure Division', desc: 'Launched the Infrastructure division, executing Turnkey E&I for highway tunnels and data centers. Won contracts for India\'s longest tunnel projects.' },
        { year: '2024', title: 'Industry 4.0', desc: 'Expanded into Industrial Automation with MachineWiz platform. Achieved ₹300Cr+ market share with 300+ professionals and 1000+ completed projects.' },
      ]},
      { type: 'split', heading: 'The Vision Ahead', text: 'As India accelerates its clean energy transition and digital transformation, AEPL is positioned at the intersection of energy and technology. Our roadmap includes expanding into EV charging infrastructure, smart grid solutions, and AI-powered predictive maintenance. With a proven track record of innovation and execution, we are building the engineering backbone of India\'s future.', stats: [{ val: '1000+', label: 'Projects Completed' }, { val: '68GW+', label: 'Assets Monitored' }, { val: '500+', label: 'Plants Online' }] },
    ]
  },
  {
    path: 'src/app/renewable/unified/page.tsx',
    title: 'Unified Renewable Solution',
    tag: 'Renewable Energy',
    tagline: 'A single-vendor, end-to-end approach covering Design, Panels, SCADA, and Commissioning for solar parks.',
    heroImg: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'One Partner. Complete Execution.', text: 'Most solar projects involve 5-7 vendors for different components — panels, wiring, SCADA, switchgear, testing. This fragmentation leads to delays, finger-pointing, and compatibility issues. AEPL\'s Unified Renewable Solution eliminates this by providing a single point of responsibility for the entire E&I scope. From detailed engineering drawings to final grid synchronization, we handle everything in-house.', stats: [{ val: '40%', label: 'Faster Execution' }, { val: '100%', label: 'In-House Capability' }, { val: '0', label: 'Compatibility Issues' }] },
      { type: 'grid4', heading: 'What\'s Included', items: [
        { icon: 'Zap', title: 'Detailed Engineering', desc: 'Complete SLD, cable schedule, earthing design, lightning protection, and GA drawings using E-TAP and AutoCAD Electrical.' },
        { icon: 'ShieldCheck', title: 'Panel Manufacturing', desc: 'In-house manufactured LT/HT panels, ACDB, DCDB, MCC, and PCC with IS/IEC type-tested designs.' },
        { icon: 'Activity', title: 'SCADA Integration', desc: 'SolarWiz IoT gateway with real-time monitoring, automated reporting, and cloud-based analytics dashboard.' },
        { icon: 'Award', title: 'Testing & Commissioning', desc: 'End-to-end T&C including relay testing, protection coordination, and grid synchronization support.' },
      ]},
      { type: 'process', heading: 'Our Execution Methodology', items: [
        { title: 'Survey & Design', desc: 'Site survey, soil testing, and complete electrical design with simulation-backed cable sizing.' },
        { title: 'Manufacturing', desc: 'Panels and assemblies manufactured in our 125,000 sq ft facility with strict QA/QC protocols.' },
        { title: 'Installation', desc: 'On-site cable laying, termination, earthing, and equipment erection by trained field teams.' },
        { title: 'Go-Live', desc: 'Testing, commissioning, grid synchronization, and handover with 24/7 monitoring activation.' },
      ]},
    ]
  },
  {
    path: 'src/app/renewable/panels/page.tsx',
    title: 'Electrical Panels',
    tag: 'Renewable Energy',
    tagline: 'IS/IEC certified LT & HT panel manufacturing for solar, industrial, and infrastructure applications.',
    heroImg: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Engineered for Reliability', text: 'Our 125,000 sq ft manufacturing facility produces a comprehensive range of electrical panels designed for demanding environments. Every panel undergoes rigorous type testing and quality assurance before dispatch. We manufacture LT Panels (up to 6300A), HT Panels (up to 33kV), ACDB/DCDB for solar applications, MCC, PCC, APFC, and custom control panels — all complying with IS/IEC standards.', stats: [{ val: '125k', label: 'Sq Ft Facility' }, { val: '10k+', label: 'Panels Delivered' }, { val: 'IS/IEC', label: 'Type Tested' }] },
      { type: 'grid4', heading: 'Panel Range', items: [
        { icon: 'Zap', title: 'LT Panels', desc: 'PCC, MCC, APFC, Bus Duct, and custom control panels rated up to 6300A for industrial and utility applications.' },
        { icon: 'ShieldCheck', title: 'HT Panels', desc: '11kV and 33kV VCB panels, Ring Main Units (RMU), and metering panels for substation applications.' },
        { icon: 'Activity', title: 'Solar Panels', desc: 'ACDB, DCDB, String Combiner Boxes, Inverter Duty Panels with IP65 protection for harsh outdoor environments.' },
        { icon: 'Cpu', title: 'Automation Panels', desc: 'PLC panels, VFD panels, relay protection panels, and SCADA interface panels with pre-loaded configurations.' },
      ]},
      { type: 'features', heading: 'Manufacturing Excellence', items: [
        'Computerized sheet metal fabrication with CNC punching and powder coating',
        'In-house busbar bending and silver-plated copper connections',
        'NABL accredited testing laboratory for type testing',
        'Full traceability with barcode-based component tracking',
        'Dedicated R&D team for custom panel engineering',
        'Copper busbar capacity from 200A to 6300A',
      ]},
    ]
  },
  {
    path: 'src/app/renewable/turnkey/page.tsx',
    title: 'Turnkey E&I Solutions',
    tag: 'Renewable Energy',
    tagline: 'Complete Electrical & Instrumentation execution from BOQ to Commissioning across solar parks.',
    heroImg: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'From Blueprint to Megawatts', text: 'Turnkey E&I is our core strength. We take complete ownership of the electrical and instrumentation scope for solar power plants — from detailed engineering to final grid injection. Our teams have executed projects ranging from 1MW rooftop installations to 200MW utility-scale parks across multiple Indian states.', stats: [{ val: '200MW', label: 'Largest Single Project' }, { val: '15+', label: 'States Covered' }, { val: '99.5%', label: 'On-Time Delivery' }] },
      { type: 'grid4', heading: 'Scope of Work', items: [
        { icon: 'Zap', title: 'Cable Engineering', desc: 'DC & AC cable laying and termination including MV/HV cable jointing, trenching, and cable tray installation.' },
        { icon: 'ShieldCheck', title: 'Earthing & Lightning', desc: 'Complete earthing grid design and installation with chemical earthing, earth pits, and lightning arrestors.' },
        { icon: 'Activity', title: 'Switchyard Works', desc: 'Transformer erection, CT/PT installation, isolator mounting, and complete switchyard bus assembly.' },
        { icon: 'Cpu', title: 'Protection & Metering', desc: 'Numerical relay setting, protection coordination, ABT metering, and grid interface compliance.' },
      ]},
      { type: 'features', heading: 'Why Choose AEPL for Turnkey E&I?', items: [
        'Single point of responsibility reducing project management overhead by 60%',
        'In-house panel manufacturing eliminates vendor dependency and delivery delays',
        'Integrated SCADA commissioning with our SolarWiz platform for instant monitoring',
        'Experienced field team with 50+ simultaneous site execution capability',
        'Dedicated project managers with real-time progress tracking dashboards',
        'Post-commissioning O&M support and remote diagnostics',
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/iot-scada/page.tsx',
    title: 'IoT SCADA (SolarWiz RMS)',
    tag: 'PM-KUSUM',
    tagline: 'Edge-computing Remote Monitoring System with Store & Forward for 100% data capture in rural India.',
    heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Smart Monitoring for Solar Pumps', text: 'SolarWiz is AEPL\'s flagship IoT platform designed specifically for PM-KUSUM solar pump monitoring. Built for the harsh realities of rural India — intermittent connectivity, extreme temperatures, and remote locations — SolarWiz uses edge computing with Store & Forward technology to ensure 100% data capture even when network is unavailable.', stats: [{ val: '68GW+', label: 'Assets Monitored' }, { val: '99.9%', label: 'Data Capture Rate' }, { val: '500+', label: 'Plants Online' }] },
      { type: 'grid4', heading: 'Key Features', items: [
        { icon: 'Cpu', title: 'Edge Computing', desc: 'On-device data processing with intelligent Store & Forward. Data is captured locally and synced when connectivity resumes — zero data loss.' },
        { icon: 'Activity', title: 'Real-Time Dashboard', desc: 'Live monitoring of pump flow rate, pressure, voltage, current, energy generation, and water discharge with configurable alerts.' },
        { icon: 'ShieldCheck', title: 'MNRE Compliant', desc: 'Fully compliant with MNRE guidelines for PM-KUSUM Remote Monitoring. Tested and approved by multiple State Nodal Agencies.' },
        { icon: 'Zap', title: 'Multi-Protocol Support', desc: 'Supports Modbus RTU/TCP, MQTT, HTTP, and IEC protocols. Compatible with all major VFD makes — INVT, Fuji, Delta, ABB.' },
      ]},
      { type: 'features', heading: 'Technical Specifications', items: [
        'ARM Cortex processor with 4G/LTE + WiFi + RS485 connectivity',
        'Industrial grade operating temperature: -20°C to +70°C',
        'IP65 rated enclosure with DIN rail mounting option',
        'Built-in GPS for geotagging and anti-theft tracking',
        'OTA firmware updates for remote maintenance',
        'Supports up to 32 Modbus slave devices per gateway',
        'Local data storage: 90 days of 1-minute interval data',
        'Cloud: AWS/Azure hosted with MeitY compliance',
      ]},
      { type: 'process', heading: 'How It Works', items: [
        { title: 'Sense', desc: 'Sensors and meters capture pump performance — flow, pressure, energy, ambient conditions.' },
        { title: 'Process', desc: 'Edge device processes raw data locally, calculates derived parameters, and applies alerts.' },
        { title: 'Transmit', desc: 'Data is transmitted to cloud via 4G. If offline, stored locally and synced later.' },
        { title: 'Visualize', desc: 'State agencies and developers view data on CMS dashboard with automated reports.' },
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/reportwiz/page.tsx',
    title: 'ReportWiz',
    tag: 'PM-KUSUM',
    tagline: 'Automated JMR generation, performance analytics, and compliance reporting for renewable energy portfolios.',
    heroImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Reports That Generate Themselves', text: 'ReportWiz is AEPL\'s proprietary reporting engine that transforms raw energy data into structured, compliance-ready reports. From automated Joint Meter Readings (JMR) to Performance Ratio calculations and subsidy claim documentation — ReportWiz eliminates manual effort and ensures 100% accuracy for state agency submissions.', stats: [{ val: '90%', label: 'Time Saved' }, { val: '100%', label: 'Accuracy' }, { val: '24hr', label: 'Report Delivery' }] },
      { type: 'grid4', heading: 'Report Types', items: [
        { icon: 'Zap', title: 'JMR Reports', desc: 'Auto-generated Joint Meter Readings with tamper-proof data trails, calculated from actual inverter and meter telemetry.' },
        { icon: 'Activity', title: 'Performance Analytics', desc: 'PR, CUF, specific yield, degradation analysis, and inverter-level comparison reports with industry benchmarks.' },
        { icon: 'ShieldCheck', title: 'Compliance Reports', desc: 'Pre-formatted reports compliant with MNRE, SNA, and DISCOM requirements for subsidy release and grid compliance.' },
        { icon: 'Cpu', title: 'Custom Dashboards', desc: 'White-labeled reports with your branding. Configurable KPIs, date ranges, and export formats (PDF, Excel, CSV).' },
      ]},
      { type: 'features', heading: 'Why Teams Love ReportWiz', items: [
        'Automated daily, weekly, and monthly report generation on schedule',
        'Email and WhatsApp delivery to configurable distribution lists',
        'Historical data comparison with year-over-year trend analysis',
        'Anomaly detection flags underperforming assets automatically',
        'Role-based access — different views for developers, agencies, and O&M teams',
        'API integration for feeding data into existing ERP/BI systems',
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/cms/page.tsx',
    title: 'Central Monitoring System',
    tag: 'PM-KUSUM',
    tagline: 'Unified portfolio dashboard for State Agencies and Developers managing thousands of solar installations.',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Command Center for Solar Portfolios', text: 'When you\'re managing 10,000+ solar pumps spread across an entire state, you need more than spreadsheets. Our CMS provides a unified, real-time dashboard that aggregates data from every SolarWiz device in the field. State Nodal Agencies use it to track scheme progress. Developers use it to optimize O&M. And DISCOMs use it to verify grid injection data.', stats: [{ val: '10k+', label: 'Pumps Managed' }, { val: 'Real-time', label: 'Data Refresh' }, { val: '99.9%', label: 'Platform Uptime' }] },
      { type: 'grid4', heading: 'Dashboard Modules', items: [
        { icon: 'Activity', title: 'Live Fleet View', desc: 'Interactive map showing every pump with color-coded status — Online (green), Offline (red), Maintenance (yellow).' },
        { icon: 'Zap', title: 'Portfolio Analytics', desc: 'Aggregate energy generation, water pumped, CO₂ offset, and financial savings across the entire fleet.' },
        { icon: 'ShieldCheck', title: 'Fault Diagnostics', desc: 'Remote fault identification distinguishing pump failures vs. grid issues vs. communication drops with root-cause analysis.' },
        { icon: 'Cpu', title: 'Subsidy Tracking', desc: 'Track JMR submission status, subsidy release pipeline, and pending verification by district for complete financial visibility.' },
      ]},
      { type: 'features', heading: 'Technical Capabilities', items: [
        'Multi-tenant architecture — single platform serves agencies, developers, and O&M teams',
        'Role-Based Access Control (RBAC) with district, block, and village level permissions',
        'Integrated GIS mapping with satellite imagery overlay for site verification',
        'Automated alert escalation with SMS, email, and WhatsApp notifications',
        'API endpoints for data federation with MNRE National Portal',
        'MeitY-compliant cloud hosting with disaster recovery and daily backups',
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/ams/page.tsx',
    title: 'Asset Management System',
    tag: 'PM-KUSUM',
    tagline: 'Work order management, inventory tracking, and preventive maintenance scheduling for field operations.',
    heroImg: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Manage Every Asset, Every Ticket', text: 'Maintaining thousands of solar installations across remote locations requires military-grade logistics. Our AMS digitizes the entire O&M workflow — from fault detection to technician dispatch, spare parts tracking, and resolution confirmation. It integrates directly with CMS for automatic ticket creation when anomalies are detected.', stats: [{ val: '70%', label: 'Faster Resolution' }, { val: '0', label: 'Missed Tickets' }, { val: 'Auto', label: 'Spare Tracking' }] },
      { type: 'grid4', heading: 'AMS Modules', items: [
        { icon: 'Activity', title: 'Work Order Engine', desc: 'Auto-generated and manual work orders with priority levels, SLA tracking, and escalation workflows.' },
        { icon: 'Zap', title: 'Technician App', desc: 'Mobile app for field technicians with GPS check-in, photo evidence, digital checklists, and offline mode.' },
        { icon: 'ShieldCheck', title: 'Inventory Management', desc: 'Track spare parts across warehouses and field vehicles. Auto-reorder when stock falls below threshold.' },
        { icon: 'Cpu', title: 'Preventive Maintenance', desc: 'Calendar-based and condition-based PM scheduling. Auto-generate PM work orders based on running hours or degradation.' },
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/ht-panel/page.tsx',
    title: 'HT Panel Solutions',
    tag: 'PM-KUSUM',
    tagline: '11kV and 33kV Vacuum Circuit Breaker panels for solar substations and grid interconnection points.',
    heroImg: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'High Voltage. High Reliability.', text: 'Our HT panels are engineered for the demanding requirements of solar substations and grid interconnection. Available in 11kV and 33kV ratings with Vacuum Circuit Breakers (VCB), these panels provide reliable protection and switching for utility-scale renewable energy installations. Every panel is type-tested to IS/IEC standards and comes with comprehensive factory acceptance testing.', stats: [{ val: '33kV', label: 'Max Voltage' }, { val: 'IS/IEC', label: 'Type Tested' }, { val: '25kA', label: 'Fault Rating' }] },
      { type: 'grid4', heading: 'Panel Configurations', items: [
        { icon: 'Zap', title: '11kV VCB Panels', desc: 'Indoor and outdoor type with ratings up to 1250A and 25kA fault level. Available in fixed and drawout configurations.' },
        { icon: 'ShieldCheck', title: '33kV VCB Panels', desc: 'For main receiving substations with motorized racking, CT/PT metering, and numerical protection relays.' },
        { icon: 'Activity', title: 'Ring Main Units', desc: 'Compact SF6/Vacuum RMU for distribution networks with load break switches and fuse combinations.' },
        { icon: 'Cpu', title: 'Metering Panels', desc: 'ABT-compliant metering panels with CT/PT chambers, energy meters, and communication interfaces for SLDC.' },
      ]},
      { type: 'features', heading: 'Quality Standards', items: [
        'Type tested as per IS 12729 / IEC 62271 standards',
        'Internal Arc Classification (IAC) tested for operator safety',
        'Motorized and spring-charged closing mechanisms',
        'Built-in current and voltage transformers',
        'Numerical protection relays with event recording',
        'CPRI test certificates available for all configurations',
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/acdb-panels/page.tsx',
    title: 'ACDB Panel Solutions',
    tag: 'PM-KUSUM',
    tagline: 'IP65 rated AC Distribution Boards for solar pump connections with surge protection and isolation.',
    heroImg: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Built for the Field', text: 'Our ACDB panels are purpose-built for PM-KUSUM solar pump installations. Designed to withstand India\'s harshest environmental conditions — scorching deserts, coastal humidity, and monsoon rains — these IP65 rated panels provide reliable AC distribution between the solar inverter and the pump controller. Available for 800V and 415V systems with integrated surge protection.', stats: [{ val: 'IP65', label: 'Protection Rating' }, { val: '800V', label: 'Max Voltage' }, { val: '50k+', label: 'Units Delivered' }] },
      { type: 'grid4', heading: 'ACDB Features', items: [
        { icon: 'ShieldCheck', title: 'Surge Protection', desc: 'Type 1+2 SPD with MOV technology for protection against lightning and switching surges up to 40kA.' },
        { icon: 'Zap', title: 'Isolation Switch', desc: 'Rotary isolator with padlockable handle for safe maintenance and compliance with electrical safety standards.' },
        { icon: 'Activity', title: 'Energy Metering', desc: 'Optional integrated energy meter with RS485 Modbus output for connection to SolarWiz IoT gateway.' },
        { icon: 'Cpu', title: 'Weatherproof Design', desc: 'FRP/CRCA enclosure with anti-corrosion coating, UV-resistant gaskets, and sealed cable glands.' },
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/wms/page.tsx',
    title: 'Weather Monitoring System',
    tag: 'PM-KUSUM',
    tagline: 'Industrial-grade environmental sensors for accurate Performance Ratio calculation and yield assessment.',
    heroImg: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Precision Weather Intelligence', text: 'Accurate Performance Ratio (PR) calculation requires precise environmental data. Our Weather Monitoring System provides industrial-grade measurements of Global Horizontal Irradiance (GHI), Global Tilted Irradiance (GTI), module temperature, ambient temperature, wind speed, and humidity. Without accurate weather data, you cannot determine whether underperformance is due to equipment issues or environmental conditions.', stats: [{ val: '±2%', label: 'Irradiance Accuracy' }, { val: '6', label: 'Sensor Parameters' }, { val: 'IEC 61724', label: 'Compliant' }] },
      { type: 'grid4', heading: 'Sensor Suite', items: [
        { icon: 'Activity', title: 'Pyranometer', desc: 'Secondary standard pyranometer for GHI measurement. Reference cell for GTI. Both calibrated with NABL traceability.' },
        { icon: 'Zap', title: 'Temperature Sensors', desc: 'PT100 RTD sensors for module back-surface temperature and ambient temperature with ±0.3°C accuracy.' },
        { icon: 'ShieldCheck', title: 'Wind Sensor', desc: 'Ultrasonic anemometer for wind speed and direction measurement. No moving parts — maintenance-free operation.' },
        { icon: 'Cpu', title: 'Data Logger', desc: 'Campbell Scientific compatible logger with 1-second sampling, 1-minute averaging, and Modbus/MQTT output.' },
      ]},
      { type: 'features', heading: 'Installation Standards', items: [
        'Mounting structures as per IEC 61724 guidelines for PV monitoring',
        'Calibration certificates with NABL accreditation traceability',
        'Anti-soiling coating on pyranometer domes for reduced maintenance',
        'Lightning protection with dedicated earth pit for weather station',
        'Direct integration with SolarWiz for automated PR calculation',
        'Annual recalibration service available with on-site replacement',
      ]},
    ]
  },
  {
    path: 'src/app/pm-kusum/telemetry/page.tsx',
    title: 'Telemetry System',
    tag: 'PM-KUSUM',
    tagline: 'Real-time grid data transmission to SLDC/RLDC via RTU ensuring regulatory compliance and grid visibility.',
    heroImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Grid Visibility, Guaranteed', text: 'For grid-connected solar plants, real-time data transmission to the State Load Despatch Centre (SLDC) and Regional Load Despatch Centre (RLDC) is mandatory. Our Telemetry System provides IEC 60870-5-104 and DNP3 compliant data communication through dedicated RTUs, ensuring your plant remains visible to grid operators and avoids penalties for non-compliance.', stats: [{ val: 'IEC 104', label: 'Protocol Support' }, { val: '99.9%', label: 'Data Availability' }, { val: 'SLDC/RLDC', label: 'Direct Link' }] },
      { type: 'grid4', heading: 'System Components', items: [
        { icon: 'Cpu', title: 'Remote Terminal Unit', desc: 'Industrial RTU with IEC 60870-5-104, DNP3, and Modbus protocols. Dual communication channels for redundancy.' },
        { icon: 'Activity', title: 'Signal Conditioning', desc: 'Analog (4-20mA, 0-10V) and digital signal acquisition from CTs, PTs, energy meters, and weather stations.' },
        { icon: 'ShieldCheck', title: 'Communication', desc: 'Dedicated fiber optic or leased line connection to SLDC. Backup 4G cellular channel for failover.' },
        { icon: 'Zap', title: 'Cyber Security', desc: 'CERC cyber security guidelines compliant with encrypted communication, access control, and audit logging.' },
      ]},
      { type: 'features', heading: 'Data Points Transmitted', items: [
        'Active Power (MW), Reactive Power (MVAR), Power Factor',
        'Bus voltage and frequency at point of interconnection',
        'Breaker status, tap position, and alarm conditions',
        'Cumulative energy generation (MWh) for scheduling',
        'Weather data: irradiance, wind speed, and temperature',
        'Equipment health: transformer temperature, cooling status',
      ]},
    ]
  },
  {
    path: 'src/app/infrastructure/tunnel/page.tsx',
    title: 'Tunnel Infrastructure',
    tag: 'Infrastructure',
    tagline: 'Comprehensive Turnkey E&I and SCADA solutions for India\'s most critical highway and railway tunnel projects.',
    heroImg: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Engineering India\'s Lifelines', text: 'Modern tunnels are complex ecosystems requiring intelligent electrical, ventilation, and safety systems operating in perfect harmony. AEPL provides complete Turnkey E&I execution for highway and railway tunnels — from power distribution and adaptive lighting to ventilation control, fire safety integration, and centralized SCADA. Our systems ensure the safety of millions of commuters daily.', stats: [{ val: '5+', label: 'Major Tunnels' }, { val: '24/7', label: 'SCADA Monitoring' }, { val: '0', label: 'Safety Incidents' }] },
      { type: 'grid4', heading: 'Tunnel Systems', items: [
        { icon: 'Zap', title: 'Adaptive Lighting', desc: 'L20 luminance-based dimming with transition zones. Dynamic control based on external ambient light for driver safety and energy savings.' },
        { icon: 'Activity', title: 'Ventilation Control', desc: 'Jet fan sequencing with CO/NO₂ sensor integration. Automated smoke extraction during fire events with cross-passage pressurization.' },
        { icon: 'ShieldCheck', title: 'Fire Safety', desc: 'Fire detection loops, deluge systems, hydrant network, and emergency PA/VA system integrated with tunnel SCADA.' },
        { icon: 'Cpu', title: 'Centralized SCADA', desc: 'Unified control room bringing power, lighting, ventilation, CCTV, VMS, and emergency systems under single monitoring platform.' },
      ]},
      { type: 'features', heading: 'Additional Systems', items: [
        'Power distribution with dual-feed redundancy and automatic changeover',
        'CCTV and Video Analytics for incident detection and traffic monitoring',
        'Variable Message Signs (VMS) and lane control signals',
        'SOS call stations with direct control room communication',
        'Height detection and over-dimension vehicle warning systems',
        'Environmental monitoring: visibility, temperature, air quality',
        'UPS and emergency lighting with 3-hour battery backup',
        'Access control and intrusion detection for cross passages',
      ]},
    ]
  },
  {
    path: 'src/app/infrastructure/data-center/page.tsx',
    title: 'Data Center Infrastructure',
    tag: 'Infrastructure',
    tagline: 'Mission-critical electrical distribution, precision cooling, and DCIM solutions for Tier III+ facilities.',
    heroImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Zero Downtime Architecture', text: 'In a connected world, data centers are the backbone of every digital business. A single minute of downtime can cost millions. AEPL designs and builds electrical infrastructure that meets Tier III and Tier IV availability standards — from redundant power distribution and precision cooling to comprehensive DCIM solutions that give operators complete visibility into their facility.', stats: [{ val: '99.999%', label: 'Target Uptime' }, { val: 'Tier III+', label: 'Compliance' }, { val: '<1.4', label: 'PUE Achieved' }] },
      { type: 'grid4', heading: 'Infrastructure Solutions', items: [
        { icon: 'Zap', title: 'Critical Power', desc: 'UPS, DRUPS, STS, ATS design and installation with 2N and 2(N+1) redundancy architectures for zero transfer time.' },
        { icon: 'Activity', title: 'Power Distribution', desc: 'Medium voltage switchgear, transformer substations, busway systems, and intelligent PDUs with per-outlet monitoring.' },
        { icon: 'ShieldCheck', title: 'Precision Cooling', desc: 'CRAC/CRAH design, hot/cold aisle containment, in-row cooling, and free cooling economizer integration.' },
        { icon: 'Cpu', title: 'DCIM Platform', desc: 'Real-time PUE monitoring, thermal mapping, capacity planning, and predictive analytics for proactive management.' },
      ]},
      { type: 'features', heading: 'Engineering Standards', items: [
        'Electrical design compliant with TIA-942, EN 50600, and Uptime Institute guidelines',
        'Arc flash analysis and selective coordination studies using ETAP',
        'Integrated BMS/EMS for energy management and optimization',
        'Fire suppression: NOVEC 1230/FM200 clean agent systems',
        'Structured cabling: Cat6A/Fiber with comprehensive labeling and documentation',
        'Commissioning: Integrated Systems Testing (IST) methodology',
        'Environmental monitoring: temperature, humidity, water leak, particulate',
        'Physical security: biometric access, CCTV, and mantrap integration',
      ]},
    ]
  },
  {
    path: 'src/app/infrastructure/automation/page.tsx',
    title: 'Industrial Automation',
    tag: 'Infrastructure',
    tagline: 'PLC, SCADA, DCS, and IoT integration for intelligent manufacturing and process optimization.',
    heroImg: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80',
    sections: [
      { type: 'split', heading: 'Industry 4.0, Delivered', text: 'The factory of the future is connected, intelligent, and self-optimizing. AEPL brings Industry 4.0 to the shop floor with end-to-end automation solutions — from PLC programming and HMI design to enterprise SCADA and MES integration. We work with all major platforms including Siemens, Rockwell, Schneider, and ABB, ensuring vendor-agnostic solutions that grow with your operations.', stats: [{ val: '30%', label: 'OEE Improvement' }, { val: '50+', label: 'Plants Automated' }, { val: '24/7', label: 'Remote Monitoring' }] },
      { type: 'grid4', heading: 'Automation Services', items: [
        { icon: 'Cpu', title: 'PLC Programming', desc: 'Ladder, ST, FBD, SFC programming for Siemens S7, Allen Bradley, Schneider M340/M580, and ABB AC500 platforms.' },
        { icon: 'Activity', title: 'SCADA & HMI', desc: 'WinCC, FactoryTalk, Ignition, and Wonderware implementations with custom dashboards, trending, and alarming.' },
        { icon: 'Zap', title: 'Drive Systems', desc: 'VFD selection, programming, and commissioning for pumps, conveyors, mixers, and centrifuges with energy optimization.' },
        { icon: 'ShieldCheck', title: 'MachineWiz IoT', desc: 'Our proprietary IoT platform for machine monitoring — OEE tracking, vibration analysis, and predictive maintenance.' },
      ]},
      { type: 'features', heading: 'Industry Applications', items: [
        'Pharmaceutical: Batch process control with 21 CFR Part 11 compliance',
        'Cement: Kiln optimization, raw mill automation, and packing plant control',
        'Water Treatment: WTP/ETP/STP automation with chemical dosing and SCADA',
        'Food & Beverage: Clean-in-place (CIP), pasteurization, and recipe management',
        'Textile: Dyeing machine automation, boiler control, and effluent treatment',
        'Oil & Gas: Pipeline SCADA, tank farm automation, and safety instrumented systems',
      ]},
    ]
  },
];

// Template generator
function generatePage(config) {
  const imports = `import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "${config.title} | Adaptive Engineering",
  description: "${config.tagline.replace(/'/g, "\\'")}",
};
`;

  let jsx = `
export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="${config.heroImg}" alt="${config.title} Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              ${config.tag}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              ${config.title.replace(/&/g, '&amp;')}
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              ${config.tagline.replace(/'/g, "&apos;").replace(/&(?!amp;|apos;)/g, '&amp;')}
            </p>
          </SectionWrapper>
        </div>
      </section>
`;

  let sectionIndex = 0;
  for (const section of config.sections) {
    const isLight = sectionIndex % 2 === 0;
    
    if (section.type === 'split') {
      jsx += `
      {/* ${section.heading} */}
      <section className="${isLight ? 'py-24 bg-white rounded-t-[40px] relative z-20 -mt-10' : 'py-24 bg-transparent relative z-10'}">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-6 font-heading">${section.heading}</h2>
                <p className="text-lg ${isLight ? 'text-slate-600' : 'text-gray-400'} leading-relaxed font-medium mb-8">
                  ${section.text.replace(/'/g, "&apos;").replace(/&(?!amp;|apos;)/g, '&amp;')}
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 ${isLight ? 'bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border border-teal-100 shadow-xl' : 'bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm'} relative overflow-hidden">
                <div className="grid grid-cols-${section.stats.length === 2 ? '2' : '3'} gap-8 relative z-10">
                  ${section.stats.map(s => `<div>
                    <div className="text-4xl font-black ${isLight ? 'text-slate-900' : 'text-white'} mb-1">${s.val}</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">${s.label}</div>
                  </div>`).join('\n                  ')}
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>
`;
    }

    if (section.type === 'grid4') {
      const iconMap = { 'Zap': 'Zap', 'Activity': 'Activity', 'ShieldCheck': 'ShieldCheck', 'Cpu': 'Cpu', 'Award': 'Award' };
      jsx += `
      {/* ${section.heading} */}
      <section className="${isLight ? 'py-24 bg-white relative z-20' : 'py-32 bg-transparent text-white relative z-10'}">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold ${isLight ? 'text-slate-900' : 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400'} font-heading mb-4">${section.heading}</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${section.items.map((item, i) => `<SectionWrapper delay={${i * 0.1}}>
              <div className="${isLight ? 'p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-xl' : 'p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl'} transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 ${isLight ? 'bg-teal-100' : 'bg-primary/20'} rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <${item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'} leading-tight">${item.title}</h3>
                <p className="text-sm ${isLight ? 'text-slate-500' : 'text-gray-400'} leading-relaxed group-hover:${isLight ? 'text-slate-700' : 'text-gray-300'} transition-colors flex-grow">
                  ${item.desc.replace(/'/g, "&apos;").replace(/&(?!amp;|apos;)/g, '&amp;')}
                </p>
              </div>
            </SectionWrapper>`).join('\n            ')}
          </div>
        </div>
      </section>
`;
    }

    if (section.type === 'features') {
      jsx += `
      {/* ${section.heading} */}
      <section className="${isLight ? 'py-24 bg-white relative z-20' : 'py-24 bg-slate-900 border-t border-white/5 relative z-20'}">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <h2 className="text-4xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-6 font-heading">${section.heading}</h2>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="${isLight ? 'bg-slate-50 rounded-3xl p-10 border border-slate-100' : 'bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-sm'}">
                <ul className="space-y-5">
                  ${section.items.map(item => `<li className="flex items-start gap-4 ${isLight ? 'text-slate-700' : 'text-gray-300'}">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">${item.replace(/'/g, "&apos;").replace(/&(?!amp;|apos;)/g, '&amp;')}</span>
                  </li>`).join('\n                  ')}
                </ul>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>
`;
    }

    if (section.type === 'process') {
      jsx += `
      {/* ${section.heading} */}
      <section className="${isLight ? 'py-24 bg-white text-slate-900 relative z-20' : 'py-24 bg-transparent relative z-10'}">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-4 font-heading">${section.heading}</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-primary/30 -z-0"></div>
            ${section.items.map((step, i) => `<SectionWrapper delay={${i * 0.1}}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 ${isLight ? 'bg-white border-4 border-slate-50' : 'bg-slate-800 border-4 border-slate-700'} rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">${i + 1}</span>
                </div>
                <h3 className="text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-2">${step.title}</h3>
                <p className="text-sm ${isLight ? 'text-slate-500' : 'text-gray-400'} leading-relaxed px-4">${step.desc.replace(/'/g, "&apos;").replace(/&(?!amp;|apos;)/g, '&amp;')}</p>
              </div>
            </SectionWrapper>`).join('\n            ')}
          </div>
        </div>
      </section>
`;
    }

    if (section.type === 'timeline') {
      jsx += `
      {/* ${section.heading} */}
      <section className="${isLight ? 'py-24 bg-white rounded-t-[40px] relative z-20 -mt-10' : 'py-24 bg-transparent relative z-10'}">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-4 font-heading">${section.heading}</h2>
            </SectionWrapper>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 ${isLight ? 'bg-teal-200' : 'bg-white/10'}"></div>
            <div className="space-y-12">
              ${section.items.map((item, i) => `<SectionWrapper delay={${i * 0.08}}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full ${isLight ? 'bg-primary text-white' : 'bg-primary text-white'} flex items-center justify-center text-xs font-black shadow-lg">${item.year.slice(-2)}</div>
                  <div className="${isLight ? 'bg-slate-50 border border-slate-100' : 'bg-white/5 border border-white/10'} rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">${item.year}</div>
                    <h3 className="text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-2">${item.title}</h3>
                    <p className="${isLight ? 'text-slate-600' : 'text-gray-400'} leading-relaxed">${item.desc.replace(/'/g, "&apos;").replace(/&(?!amp;|apos;)/g, '&amp;')}</p>
                  </div>
                </div>
              </SectionWrapper>`).join('\n              ')}
            </div>
          </div>
        </div>
      </section>
`;
    }

    if (section.type === 'values') {
      jsx += `
      {/* ${section.heading} */}
      <section className="${isLight ? 'py-24 bg-white relative z-20' : 'py-24 bg-slate-900 relative z-20'}">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-4 font-heading">${section.heading}</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${section.items.map((item, i) => `<SectionWrapper delay={${i * 0.1}}>
              <div className="${isLight ? 'p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100' : 'p-8 bg-white/5 border border-white/10 rounded-2xl'} h-full hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-3">${item.title}</h3>
                <p className="text-sm ${isLight ? 'text-slate-600' : 'text-gray-400'} leading-relaxed">${item.desc.replace(/'/g, "&apos;").replace(/&(?!amp;|apos;)/g, '&amp;')}</p>
              </div>
            </SectionWrapper>`).join('\n            ')}
          </div>
        </div>
      </section>
`;
    }

    sectionIndex++;
  }

  // CTA section
  jsx += `
      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in ${config.title.replace(/&/g, '&amp;')}?</h2>
            <p className="text-gray-400 mb-8 text-lg">Let our experts help you find the right solution for your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
`;

  return imports + jsx;
}

// Generate all pages
pages.forEach(config => {
  const fullPath = path.join(__dirname, '..', config.path);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const content = generatePage(config);
  fs.writeFileSync(fullPath, content);
  console.log(`✅ Generated ${config.path} (${content.split('\n').length} lines)`);
});

console.log('\n🎉 All pages generated!');
