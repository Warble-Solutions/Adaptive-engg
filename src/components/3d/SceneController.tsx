"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScene } from "@/context/SceneContext";

export default function SceneController() {
    const pathname = usePathname();
    const { setScene } = useScene();

    useEffect(() => {
        // Determine variant based on route
        if (pathname === "/about") {
            setScene({
                primaryColor: "#049A89", // Sky Blue
                secondaryColor: "#0B1120",
                speed: 0.5,
                variant: "wind", // Wind Turbine
            });
        } else if (pathname === "/renewable" || pathname.startsWith("/renewable/")) {
            setScene({
                primaryColor: "#EAB308", // Sun Yellow
                secondaryColor: "#0B1120",
                speed: 0.4,
                variant: "solar", // Solar Array
            });
        } else if (pathname === "/ppc" || pathname.includes("storage")) {
            setScene({
                primaryColor: "#10B981", // Emerald Green
                secondaryColor: "#064E3B",
                speed: 1,
                variant: "battery", // Battery Stack
            });
        } else if (pathname === "/pm-kusum" || pathname.includes("kusum")) {
            setScene({
                primaryColor: "#049A89", // Water/Sky like color for the wave
                secondaryColor: "#0B1120",
                speed: 0.5,
                variant: "wave", // Original Wave/Plane
            });
        } else {
            // Default: Home, Contact
            setScene({
                primaryColor: "#049A89", // Default Teal
                secondaryColor: "#0B1120",
                speed: 1,
                variant: "logo", // AEPL Sunburst Logo
            });
        }
    }, [pathname, setScene]);

    return null;
}
