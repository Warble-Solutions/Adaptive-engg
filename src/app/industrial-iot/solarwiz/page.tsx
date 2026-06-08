import SolarWizClient from "./SolarWizClient";

export const metadata = {
  title: "SolarWiz - Renewable Telemetry & Analytics | Adaptive Engineering",
  description: "SolarWiz — AEPL's Central Monitoring Portal combining SolarEdge IoT hardware and SolarPro cloud software for remote monitoring and advanced telemetry of renewable energy plants.",
};

export default function Page() {
  return <SolarWizClient />;
}
