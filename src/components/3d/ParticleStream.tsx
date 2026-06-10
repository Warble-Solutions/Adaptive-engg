"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function ParticleStream() {
    const pathname = usePathname();

    if (pathname?.startsWith("/admin")) {
        return null;
    }

    return (
        <div className="fixed inset-0 -z-10 bg-dark pointer-events-none overflow-hidden">
            {/* Ambient gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-[#071a16]" />

            {/* Globe image — slow spin, anchored bottom-right, fully visible */}
            <div className="absolute bottom-[5%] right-[5%] w-[min(75vw,750px)] h-[min(75vw,750px)] animate-globe-spin">
                <Image
                    src="/logos/adaptive globe.png"
                    alt=""
                    fill
                    className="object-contain opacity-[0.06] select-none"
                    sizes="750px"
                    priority
                    aria-hidden="true"
                />
            </div>

            {/* Secondary ghost globe — top-left, counter-rotate for depth */}
            <div className="absolute top-[5%] left-[5%] w-[min(55vw,550px)] h-[min(55vw,550px)] animate-globe-spin-reverse">
                <Image
                    src="/logos/adaptive globe.png"
                    alt=""
                    fill
                    className="object-contain opacity-[0.03] select-none blur-[1px]"
                    sizes="550px"
                    aria-hidden="true"
                />
            </div>

            {/* Subtle radial glow at center-right */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
        </div>
    );
}
