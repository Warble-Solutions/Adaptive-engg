"use client";

import { motion } from "framer-motion";
import { useScene, SceneVariant } from "@/context/SceneContext";

interface SceneTriggerProps {
    variant: SceneVariant;
    color: string;
    speed?: number;
}

export default function SceneTrigger({ variant, color, speed = 1 }: SceneTriggerProps) {
    const { setScene } = useScene();

    return (
        <motion.div
            onViewportEnter={() => {
                console.log("Switching Scene to:", variant);
                setScene({
                    variant,
                    primaryColor: color,
                    secondaryColor: "#0B1120",
                    speed
                });
            }}
            viewport={{ margin: "-40% 0px -40% 0px" }} // Trigger when element is in the middle 20% of screen
            className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        />
    );
}
