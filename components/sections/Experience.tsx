"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, GraduationCap } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="min-h-screen py-20 px-6 bg-background relative overflow-hidden">
            {/* Track Map Background decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white">
                    <path d="M10,50 Q20,20 40,50 T80,50" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-16">
                    <span className="text-papaya font-mono text-sm tracking-widest uppercase mb-2 block">Career Strategy</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Timeline <span className="text-zinc-600">&</span> Education
                    </h2>
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
                    {/* Timeline: EPITA (Current) -> Freelance -> RGIS */}

                    {/* 1. EPITA (Education) - Ongoing */}
                    {RESUME_DATA.education.map((edu, i) => (
                        <TimelineItem
                            key={`edu-${i}`}
                            title={edu.school}
                            subtitle={edu.degree}
                            date={`${edu.start} - ${edu.end}`}
                            icon={<GraduationCap className="w-4 h-4" />}
                        >
                            <p className="text-muted-foreground leading-relaxed">
                                Key courses : Algorithms, Data Structures, Networking, Systems Programming, Methodologies (Agile, Scrum), Microservices, Software Security Principles, SQL and NoSQL databases.
                            </p>
                            {edu.badges.length > 0 && (
                                <div className="flex gap-2 mt-4">
                                    {edu.badges.map(b => (
                                        <Badge key={b} variant="secondary" className="text-xs bg-white/5">{b}</Badge>
                                    ))}
                                </div>
                            )}
                        </TimelineItem>
                    ))}

                    {/* 2. RGIS (Work) */}
                    {RESUME_DATA.work.filter(w => w.company !== "Freelance").map((role, i) => (
                        <TimelineItem
                            key={`work-rgis-${i}`}
                            title={role.title}
                            subtitle={role.company}
                            date={`${role.start} - ${role.end}`}
                            icon={<Building className="w-4 h-4" />}
                            isWork
                        >
                            <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                            {role.badges.length > 0 && (
                                <div className="flex gap-2 mt-4">
                                    {role.badges.map(b => (
                                        <Badge key={b} variant="secondary" className="text-xs bg-white/5">{b}</Badge>
                                    ))}
                                </div>
                            )}
                        </TimelineItem>
                    ))}

                    {/* 3. Freelance (Work) */}
                    {RESUME_DATA.work.filter(w => w.company === "Freelance").map((role, i) => (
                        <TimelineItem
                            key={`work-freelance-${i}`}
                            title={role.title}
                            subtitle={role.company}
                            date={`${role.start} - ${role.end}`}
                            icon={<Building className="w-4 h-4" />}
                            isWork
                        >
                            <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                            {role.badges.length > 0 && (
                                <div className="flex gap-2 mt-4">
                                    {role.badges.map(b => (
                                        <Badge key={b} variant="secondary" className="text-xs bg-white/5">{b}</Badge>
                                    ))}
                                </div>
                            )}
                        </TimelineItem>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ title, subtitle, date, icon, children, isWork }: { title: string, subtitle: string, date: string, icon: any, children?: React.ReactNode, isWork?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12 group"
        >
            {/* Dot */}
            <div className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full border-2 ${isWork ? 'border-papaya bg-papaya' : 'border-zinc-500 bg-background'} group-hover:scale-125 transition-transform`} />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <span className="font-mono text-xs text-papaya uppercase">{date}</span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm font-medium uppercase tracking-wide">
                {icon}
                <span>{subtitle}</span>
            </div>

            <div className="p-6 rounded-xl bg-card/30 border border-white/5 hover:border-white/10 transition-colors">
                {children || <span className="text-muted-foreground italic text-sm">Completed Education Program</span>}
            </div>
        </motion.div>
    )
}
