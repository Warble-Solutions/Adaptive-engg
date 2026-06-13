import SceneTrigger from "@/components/3d/SceneTrigger";
import InfrastructurePageClient from "./InfrastructurePageClient";

export const metadata = {
  title: "Infrastructure Solutions | Tunnels, Data Centers & Automation | Adaptive Engineering",
  description: "State-of-the-art E&I and automation solutions for critical infrastructure. In-house design and turnkey electrical systems for Road/Rail Tunnels, Tier III/IV Data Centers, and heavy industrial automation.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      <InfrastructurePageClient />
    </div>
  );
}
