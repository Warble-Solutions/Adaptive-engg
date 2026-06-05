import SceneTrigger from "@/components/3d/SceneTrigger";
import AutomationPageClient from "./AutomationPageClient";

export const metadata = {
  title: "Industrial Automation | Adaptive Engineering",
  description: "Industry 4.0 PLC, SCADA, DCS, and IoT integration for intelligent manufacturing.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      <AutomationPageClient />
    </div>
  );
}
