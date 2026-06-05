import SceneTrigger from "@/components/3d/SceneTrigger";
import PanelsPageClient from "./PanelsPageClient";

export const metadata = {
  title: "Electrical Panels & Power System Analysis | Adaptive Engineering",
  description: "IS/IEC certified LT & HT panel manufacturing and comprehensive electrical power system analysis for solar, industrial, and infrastructure applications.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      <PanelsPageClient />
    </div>
  );
}
