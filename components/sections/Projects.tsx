"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Zap } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Projects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <section id="projects" className="min-h-screen py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-papaya font-mono text-sm tracking-widest uppercase mb-2 block">The Garage</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            Projects <span className="text-stroke text-transparent stroke-white">Specs</span>
                        </h2>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="h-[1px] w-20 bg-papaya hidden md:block" />
                        <span className="text-muted-foreground font-mono text-xs">EST. 2022 - PRESENT</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {RESUME_DATA.projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            isHovered={hoveredProject === project.title}
                            onHover={setHoveredProject}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, isHovered, onHover }: { project: any, index: number, isHovered: boolean, onHover: (id: string | null) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
                "group relative flex flex-col justify-between h-[400px] bg-card/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-papaya/50 transition-all duration-500",
                // Grid spanning logic if needed, for now regular grid
                index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
            )}
            onMouseEnter={() => onHover(project.title)}
            onMouseLeave={() => onHover(null)}
            onClick={() => project.link?.href && window.open(project.link.href, "_blank")}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                {/* If we had images we would use next/image here. Using a gradient fallback for now or the parsed image if valid path */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                {/* Abstract tech pattern background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            </div>

            {/* Content */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-black/50 border-white/20 text-xs font-mono">
                        SPEC-{index + 1}00
                    </Badge>
                    {project.demo && (
                        <Badge variant="default" className="bg-green-500/10 text-green-500 border border-green-500/20 animate-pulse">
                            LIVE
                        </Badge>
                    )}
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold uppercase tracking-tight flex items-center gap-2">
                            {project.title}
                            <ArrowUpRight className={cn("w-6 h-6 text-papaya transition-transform duration-300", isHovered ? "translate-x-1 -translate-y-1" : "")} />
                        </h3>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed max-w-md">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech: string) => (
                            <span key={tech} className="px-2 py-1 text-[10px] uppercase font-bold text-zinc-400 bg-white/5 rounded-sm border border-white/5">
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 4 && (
                            <span className="px-2 py-1 text-[10px] uppercase font-bold text-zinc-500">
                                +{project.techStack.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Telemetry/Impact section - Reveals on hover */}
                    <div className="h-[1px] w-full bg-white/10" />

                    <div className="flex items-center gap-2 text-xs font-mono text-papaya">
                        <Zap className="w-3 h-3" />
                        <span>IMPACT: {project.impact ? "HIGH PERFORMANCE" : "OPTIMIZED"}</span>
                    </div>
                </div>
            </div>

            {/* Hover Highlight */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-tr from-papaya/10 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none",
                isHovered ? "opacity-100" : ""
            )} />
        </motion.div>
    );
}
