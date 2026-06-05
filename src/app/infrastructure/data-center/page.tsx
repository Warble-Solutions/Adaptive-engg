import SceneTrigger from "@/components/3d/SceneTrigger";
import DataCenterPageClient from "./DataCenterPageClient";

export const metadata = {
  title: "Data Center Infrastructure | Adaptive Engineering",
  description: "Mission-critical electrical distribution, precision cooling, and DCIM solutions for Tier III+ facilities.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      <DataCenterPageClient />
    </div>
  );
}
