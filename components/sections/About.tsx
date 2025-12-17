"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Code2, MapPin, Calendar, Database } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(
            leftColRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top center",
                },
            }
        );

        gsap.fromTo(
            rightColRef.current,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top center",
                },
            }
        );
    }, []);

    return (
        <section id="about" ref={sectionRef} className="min-h-screen relative flex items-center justify-center py-20 px-6 overflow-hidden">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 border-l border-t border-white/5 rounded-tl-3xl" />
                <div className="absolute bottom-20 right-10 w-64 h-64 border-r border-b border-white/5 rounded-br-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-papaya/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Column: Driver Stats / Photo (Broadcast Style) */}
                <div ref={leftColRef} className="lg:col-span-5 relative">
                    <div className="relative border border-white/10 bg-black/40 backdrop-blur-md p-2">
                        {/* Corner Markers */}
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-papaya" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-papaya" />

                        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                            <img
                                src={RESUME_DATA.avatarUrl}
                                alt={RESUME_DATA.name}
                                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            {/* Name Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-papaya text-black hover:bg-papaya font-bold px-1 rounded-sm text-[10px]">FRA</Badge>
                                    <span className="text-xs font-mono text-white/60 tracking-widest">{RESUME_DATA.initials}</span>
                                </div>
                                <h2 className="text-4xl font-black italic uppercase leading-none tracking-tighter">
                                    {RESUME_DATA.name.split(" ")[0]}
                                    <span className="block text-stroke text-transparent stroke-white">{RESUME_DATA.name.split(" ")[1]}</span>
                                </h2>
                            </div>
                        </div>

                        {/* Stat Bar Below Photo */}
                        <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-white/5">
                            <div className="p-3 text-center">
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">XP Years</div>
                                <div className="text-xl font-bold font-mono">02</div>
                            </div>
                            <div className="p-3 text-center">
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Projects</div>
                                <div className="text-xl font-bold font-mono">{RESUME_DATA.projects.length}</div>
                            </div>
                            <div className="p-3 text-center">
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Status</div>
                                <div className="text-xl font-bold text-green-500 font-mono">ON</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Bio & Details (Technical Readout) */}
                <div ref={rightColRef} className="lg:col-span-7 space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-12 bg-papaya" />
                            <span className="text-papaya font-mono text-sm tracking-[0.2em] uppercase">Driver Profile</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
                            Engineering <br />
                            <span className="text-zinc-500">Precision & Speed.</span>
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {RESUME_DATA.about}
                        </p>
                    </div>

                    {/* Technical Chips Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded border border-white/10 bg-white/5 hover:border-papaya/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-papaya">
                                <Code2 className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Core Engine</span>
                            </div>
                            <p className="text-sm text-zinc-400">Next.js, React.js, Python, Node.js, TypeScript</p>
                        </div>
                        <div className="p-4 rounded border border-white/10 bg-white/5 hover:border-papaya/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-papaya">
                                <Database className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Data Systems</span>
                            </div>
                            <p className="text-sm text-zinc-400">PostgreSQL, MongoDB, Redis, Neo4j</p>
                        </div>
                        <div className="p-4 rounded border border-white/10 bg-white/5 hover:border-papaya/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-papaya">
                                <User className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Team Radio</span>
                            </div>
                            <p className="text-sm text-zinc-400">Curious, Adaptable, Fast Learner, Creative</p>
                        </div>
                        <div className="p-4 rounded border border-white/10 bg-white/5 hover:border-papaya/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-papaya">
                                <MapPin className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Base</span>
                            </div>
                            <p className="text-sm text-zinc-400">{RESUME_DATA.location}</p>
                        </div>
                    </div>

                    {/* Signature / ID */}
                    <div className="flex justify-between items-end border-t border-white/10 pt-6">
                        <div>
                            <span className="text-[10px] text-zinc-600 uppercase block mb-1">License ID</span>
                            <span className="font-mono text-xl tracking-widest text-zinc-400">JP-8377-04</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] text-zinc-600 uppercase block mb-1">Availability</span>
                            <span className="text-papaya font-bold">OPEN FOR 2026</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
    return (
        <div className="p-4 rounded-lg bg-card/50 border border-white/5 hover:border-papaya/50 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-md bg-white/5 group-hover:scale-110 transition-transform">{icon}</div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
            </div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground">{sub}</div>
        </div>
    )
}
