"use client";

import { motion } from "framer-motion";
import { X, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ProjectDetailProps {
    project: any;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
    if (!project) return null;

    return (
        <div className={cn("fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8", !isOpen && "pointer-events-none")}>
            {/* Backdrop */}
            <motion.div
                data-lenis-prevent="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                data-lenis-prevent="true"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95, y: isOpen ? 0 : 20 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                className={cn(
                    "relative w-full max-w-5xl md:h-[85vh] h-[90vh] bg-zinc-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col",
                    !isOpen && "pointer-events-none"
                )}
            >
                {/* Header / Telemetry Bar */}
                <div className="flex items-start md:items-center justify-between p-4 md:p-6 border-b border-white/10 bg-black/40 shrink-0">
                    <div className="flex flex-col gap-1 pr-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white leading-none">
                                {project.title}
                            </h2>
                            {project.demo && (
                                <Badge className="w-fit bg-green-500/10 text-green-500 border-green-500/20 animate-pulse text-[10px] md:text-xs">
                                    LIVE SYSTEM
                                </Badge>
                            )}
                        </div>
                        <span className="text-[10px] md:text-xs font-mono text-muted-foreground tracking-widest uppercase">
                            PROJECT TELEMETRY // SPEC-SHEET
                        </span>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="rounded-full hover:bg-white/10 hover:text-papaya transition-colors -mr-2 -mt-2 md:mr-0 md:mt-0"
                    >
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-3">
                    {/* Left Column: context & visuals (if any) */}
                    <div className="lg:col-span-2 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden h-full">
                        <ScrollArea className="flex-1 h-full">
                            <div className="p-4 md:p-8 space-y-6 md:space-y-8 pb-20 md:pb-8">
                                {/* Description */}
                                <div>
                                    <h3 className="text-xs md:text-sm font-bold text-papaya uppercase tracking-widest mb-2 md:mb-3 flex items-center gap-2">
                                        <Layers className="w-3 h-3 md:w-4 md:h-4" /> Mission Brief
                                    </h3>
                                    <p className="text-sm md:text-lg text-zinc-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Key Features Grid */}
                                {project.keyFeatures && (
                                    <div>
                                        <h3 className="text-xs md:text-sm font-bold text-papaya uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> Core Systems
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                            {project.keyFeatures.map((feature: string, idx: number) => (
                                                <div key={idx} className="flex items-center md:items-start gap-3 p-2 md:p-3 rounded-lg bg-white/5 border border-white/5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-papaya mt-1.5 shrink-0" />
                                                    <span className="text-xs md:text-sm text-zinc-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Engineering Deep Dive */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.challenges && (
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4" /> Challenges
                                            </h3>
                                            <p className="text-sm text-zinc-400 leading-relaxed bg-red-500/5 p-4 rounded-lg border border-red-500/10">
                                                {project.challenges}
                                            </p>
                                        </div>
                                    )}
                                    {project.solutions && (
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                                <Lightbulb className="w-4 h-4" /> Solution
                                            </h3>
                                            <p className="text-sm text-zinc-400 leading-relaxed bg-blue-500/5 p-4 rounded-lg border border-blue-500/10">
                                                {project.solutions}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Learnings */}
                                {project.learnings && (
                                    <div className="bg-zinc-900/50 p-4 rounded-lg border border-white/5">
                                        <span className="text-xs font-mono text-muted-foreground uppercase mb-2 block">
                                            // RACE DEBRIEF (LEARNINGS)
                                        </span>
                                        <p className="text-sm text-zinc-300 italic">
                                            "{project.learnings}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="bg-zinc-900/30 flex flex-col h-full">
                        <ScrollArea className="flex-1">
                            <div className="p-6 space-y-8">
                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                        Tech Configuration
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech: string) => (
                                            <Badge key={tech} variant="secondary" className="bg-white/10 text-zinc-200 hover:bg-white/20 transition-colors">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact */}
                                {project.impact && (
                                    <div>
                                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                            Performance Impact
                                        </h3>
                                        <div className="p-4 rounded-lg border border-papaya/20 bg-papaya/5 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-papaya/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                            <p className="relative text-sm text-papaya font-medium leading-relaxed">
                                                {project.impact}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>

                        {/* Action Buttons Footer */}
                        <div className="p-6 border-t border-white/10 bg-black/20 space-y-3 mt-auto">
                            {project.link && (
                                <Button
                                    className="w-full bg-white text-black hover:bg-zinc-200 font-bold"
                                    size="lg"
                                    onClick={() => window.open(project.link.href, "_blank")}
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    Review Codebase
                                </Button>
                            )}
                            {project.demo && (
                                <Button
                                    variant="outline"
                                    className="w-full border-white/10 hover:bg-white/5 text-white"
                                    size="lg"
                                    onClick={() => window.open(project.demo.href, "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Launch Demo
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
