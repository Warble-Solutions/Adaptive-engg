import SceneTrigger from "@/components/3d/SceneTrigger";
import GalleryPageClient from "./GalleryPageClient";

export const metadata = {
  title: "Media Gallery | Adaptive Engineering",
  description: "Explore photos of our state-of-the-art manufacturing facility, execution of solar & water projects, exhibition booths, and corporate milestones.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-950">
      <SceneTrigger variant="wave" color="#0da08a" speed={0.5} />
      <GalleryPageClient />
    </div>
  );
}
