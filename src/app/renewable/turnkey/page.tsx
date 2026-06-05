import SceneTrigger from "@/components/3d/SceneTrigger";
import TurnkeyPageClient from "./TurnkeyPageClient";

export const metadata = {
  title: "Turnkey E&I Execution | Electrical & Instrumentation | Adaptive Engineering",
  description: "Complete Electrical & Instrumentation mastery from precise engineering blueprints to final grid injection & commissioning.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      <TurnkeyPageClient />
    </div>
  );
}
