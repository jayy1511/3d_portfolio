"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function Ignition({ onComplete }: { onComplete: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lightsRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete: onComplete
                });
            }
        });

        const lights = lightsRef.current?.children;
        if (!lights) return;

        // Reset
        gsap.set(lights, { backgroundColor: "#333" });

        // Sequence
        tl.to(textRef.current, { opacity: 1, duration: 0.5 })
            .to(lights[0], { backgroundColor: "#FF0000", duration: 0.1 }, "+=0.2") // Light 1 Red
            .to(lights[1], { backgroundColor: "#FF0000", duration: 0.1 }, "+=0.4") // Light 2 Red
            .to(lights[2], { backgroundColor: "#FF0000", duration: 0.1 }, "+=0.4") // Light 3 Red
            .to(lights[3], { backgroundColor: "#FF0000", duration: 0.1 }, "+=0.4") // Light 4 Red
            .to(lights[4], { backgroundColor: "#FF0000", duration: 0.1 }, "+=0.4") // Light 5 Red
            .to(lights, { backgroundColor: "#00FF00", duration: 0.1 }, "+=0.5")   // ALL GREEN
            .to(textRef.current, { opacity: 0, duration: 0.1 }, "<")
            .add(() => {
                if (textRef.current) {
                    textRef.current.innerText = "GO GO GO";
                    textRef.current.style.color = "#00FF00";
                }
            })
            .to(textRef.current, { opacity: 1, duration: 0.1 });

    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-8"
        >
            <div ref={lightsRef} className="flex gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        className="w-12 h-12 rounded-full border-4 border-zinc-800 bg-zinc-900 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    />
                ))}
            </div>
            <div
                ref={textRef}
                className="font-mono text-xl tracking-widest font-bold text-muted-foreground"
            >
                INITIALIZING...
            </div>
        </div>
    );
}
