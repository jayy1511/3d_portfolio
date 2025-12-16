"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger to work with Lenis
gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Lenis is handled by ReactLenis, but we need to link GSAP ScrollTrigger
        // The Lenis React component handles the rAF loop internally
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
