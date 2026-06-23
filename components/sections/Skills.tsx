"use client";

import { RESUME_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Skills() {
    const categories = [
        { name: "Backend", skills: RESUME_DATA.skills.backend },
        { name: "Systems / Cloud", skills: RESUME_DATA.skills.systems },
        { name: "AI / GenAI", skills: RESUME_DATA.skills.ai },
        { name: "Data", skills: RESUME_DATA.skills.data },
        { name: "Frontend", skills: RESUME_DATA.skills.frontend },
        { name: "Concepts", skills: RESUME_DATA.skills.concepts },
    ];

    return (
        <section id="skills" className="min-h-screen py-20 px-6 bg-zinc-950/50 relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <span className="text-papaya font-mono text-sm tracking-widest uppercase mb-2 block">Telemetry Analysis</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Technical <span className="text-stroke text-transparent stroke-zinc-500">Performance</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <SkillGroup key={cat.name} category={cat.name} skills={cat.skills} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillGroup({ category, skills, index }: { category: string, skills: readonly string[] | string[], index: number }) {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-white/10 bg-card/20 backdrop-blur-sm"
        >
            <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-papaya" />
                {category}
            </h3>
            <div className="space-y-4">
                {skills.map((skill, i) => (
                    <div key={skill} className="group">
                        <div className="flex justify-between text-xs font-mono uppercase mb-1">
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                            <span className="text-papaya opacity-0 group-hover:opacity-100 transition-opacity">100%</span>
                        </div>
                        {/* RPM Gauge Bar */}
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden flex gap-[2px]">
                            {[...Array(10)].map((_, barI) => (
                                <motion.div
                                    key={barI}
                                    initial={{ opacity: 0.2 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: (index * 0.1) + (i * 0.05) + (barI * 0.05) }}
                                    className={cn(
                                        "flex-1 rounded-sm",
                                        barI > 7 ? "bg-red-500" : barI > 5 ? "bg-papaya" : "bg-zinc-500",
                                        "group-hover:brightness-150 transition-all"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
