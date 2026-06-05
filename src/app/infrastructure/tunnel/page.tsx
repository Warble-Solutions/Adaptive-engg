import SceneTrigger from "@/components/3d/SceneTrigger";
import TunnelPageClient from "./TunnelPageClient";

export const metadata = {
 title: "Tunnel Infrastructure | Electrical & Automation | Adaptive Engineering",
 description: "Expert Turn-Key Electrical, Instrumentation and Automation Solutions for Road, Railway and Metro Tunnels.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
 <TunnelPageClient />
 </div>
 );
}
