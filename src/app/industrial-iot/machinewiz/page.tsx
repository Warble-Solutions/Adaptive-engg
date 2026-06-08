import MachineWizClient from "./MachineWizClient";

export const metadata = {
  title: "MachineWiz - ML-Powered Factory Analytics | Adaptive Engineering",
  description: "MachineWiz — AEPL's shop floor intelligence suite for production logging, condition monitoring, predictive maintenance, and ML-powered OEE analytics.",
};

export default function Page() {
  return <MachineWizClient />;
}
