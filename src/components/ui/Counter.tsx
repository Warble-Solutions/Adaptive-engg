"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
    value: number;
    direction?: "up" | "down";
    formatted?: boolean; // Whether to add commas
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}

export default function Counter({
    value,
    direction = "up",
    formatted = true,
    prefix = "",
    suffix = "",
    decimals = 0,
    className = "",
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 100,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [isInView, motionValue, direction, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                let text = latest.toFixed(decimals);
                if (formatted) {
                    // Add commas
                    const parts = text.split(".");
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    text = parts.join(".");
                }
                ref.current.textContent = `${prefix}${text}${suffix}`;
            }
        });

        return () => springValue.destroy();
    }, [springValue, decimals, formatted, prefix, suffix]);

    // Render the final value as initial content to avoid empty SSR + hydration mismatch
    const getInitialText = () => {
        let text = value.toFixed(decimals);
        if (formatted) {
            const parts = text.split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            text = parts.join(".");
        }
        return `${prefix}${text}${suffix}`;
    };

    return <span ref={ref} className={className} suppressHydrationWarning>{getInitialText()}</span>;
}
