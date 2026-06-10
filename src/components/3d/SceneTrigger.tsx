"use client";

/**
 * SceneTrigger — formerly controlled the 3D particle background.
 * Now a no-op; the background uses a static globe image instead.
 * Kept as a stub so existing page imports don't break.
 */
interface SceneTriggerProps {
    variant: string;
    color: string;
    speed?: number;
}

export default function SceneTrigger(_props: SceneTriggerProps) {
    return null;
}
