"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ArrowDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LapTimer } from "@/components/ui/LapTimer";
import { Ignition } from "@/components/ui/Ignition";
import HeroScene from "@/components/3d/HeroScene"; // Default import
import { useDRS } from "@/components/providers/DRSContext";
import { RESUME_DATA } from "@/lib/data";

export function Hero() {
    const [loading, setLoading] = useState(true);
    const { isDRSEnabled, toggleDRS } = useDRS();
    const textContainer = useRef<HTMLDivElement>(null);
    const bottomBar = useRef<HTMLDivElement>(null);

    const handleIgnitionComplete = () => {
        setLoading(false);

        // Animate content in
        const tl = gsap.timeline();

        tl.fromTo(
            textContainer.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        ).fromTo(
            bottomBar.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.5"
        );
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-background">
            {/* Ignition Sequence Overlay */}
            {loading && <Ignition onComplete={handleIgnitionComplete} />}

            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas gl={{ antialias: false, powerPreference: "high-performance" }} dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <HeroScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* UI Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 pointer-events-none">
                {/* Top Bar */}
                <div className="flex justify-between items-start pointer-events-auto">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold tracking-tighter">
                            PORTFOLIO
                            <span className="text-papaya">.</span>
                        </h1>
                        <Badge variant="outline" className="w-fit border-papaya/50 text-papaya bg-papaya/10">
                            SEEKING AI APPRENTICESHIP - OCT 2026
                        </Badge>
                    </div>

                    <LapTimer />
                </div>

                {/* Center Text */}
                <div ref={textContainer} className="flex flex-col gap-4 max-w-4xl mt-auto mb-auto opacity-0 pointer-events-auto">
                    {/* Developer Name Tag */}
                    <div className="inline-flex flex-col gap-1 mb-2">
                        <span className="text-xl md:text-5xl font-bold uppercase tracking-[0.3em] text-white/90">
                            {RESUME_DATA.name}
                        </span>
                        <div className="h-[3px] w-32 bg-papaya" />
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                            Software
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white">
                            Engineer
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-mono">
                        {RESUME_DATA.summary}
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Button
                            size="lg"
                            className="bg-papaya text-black hover:bg-papaya/80 font-bold rounded-none skew-x-[-10deg]"
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <div className="skew-x-[10deg]">ENTER GARAGE</div>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 hover:bg-white/10 rounded-none skew-x-[-10deg]"
                            onClick={() => window.open(RESUME_DATA.contact.social[0].url, "_blank")}
                        >
                            <div className="skew-x-[10deg]">GITHUB TELEMETRY</div>
                        </Button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div ref={bottomBar} className="flex justify-between items-end opacity-0 pointer-events-auto">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-muted-foreground uppercase">Mode</span>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "h-6 px-2 text-xs border border-transparent transition-all",
                                        !isDRSEnabled && "border-green-500/50 text-green-500 bg-green-500/10"
                                    )}
                                    onClick={() => isDRSEnabled && toggleDRS()}
                                >
                                    CRUISE
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "h-6 px-2 text-xs border border-transparent transition-all",
                                        isDRSEnabled && "border-papaya text-papaya bg-papaya/10 shadow-[0_0_10px_rgba(255,128,0,0.3)] animate-pulse"
                                    )}
                                    onClick={() => !isDRSEnabled && toggleDRS()}
                                >
                                    <Zap className="w-3 h-3 mr-1" />
                                    DRS OPEN
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col items-end animate-bounce">
                        <span className="text-[10px] text-muted-foreground mb-2">SCROLL TO START</span>
                        <ArrowDown className="text-papaya w-4 h-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
