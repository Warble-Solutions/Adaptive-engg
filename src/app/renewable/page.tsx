import SceneTrigger from "@/components/3d/SceneTrigger";
import RenewablePageClient from "./RenewablePageClient";

export const metadata = {
  title: "Renewable Energy Solutions | Adaptive Engineering",
  description: "Complete utility-scale power value chain solutions. In-house design and manufacturing of HT/LT control panels, SCADA & PPC software, and turnkey electrical infrastructure construction.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      <RenewablePageClient />
    </div>
  );
}
