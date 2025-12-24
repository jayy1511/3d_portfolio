"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
    return (
        <section className="py-20 px-6 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div>
                        <span className="text-papaya font-mono text-sm tracking-widest uppercase mb-2 block">
                            Super License
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                            Certifications
                        </h2>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="h-[1px] w-20 bg-papaya hidden md:block" />
                        <span className="text-muted-foreground font-mono text-xs">FIA GRADE A</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {RESUME_DATA.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card/20 border border-white/5 hover:border-papaya/30 transition-colors rounded-lg overflow-hidden flex flex-col group"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-white/5 rounded-md text-papaya group-hover:bg-papaya group-hover:text-black transition-colors">
                                        <BadgeCheck className="w-6 h-6" />
                                    </div>
                                    <Badge variant="outline" className="border-white/10 font-mono text-[10px]">
                                        {cert.year || "2024"}
                                    </Badge>
                                </div>

                                <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-papaya transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {cert.issuer}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-xs text-zinc-400 hover:text-white"
                                        onClick={() => window.open(cert.link, "_blank")}
                                    >
                                        View Credential <ExternalLink className="w-3 h-3 ml-1" />
                                    </Button>
                                </div>
                            </div>

                            {/* Decorative Bottom Strip */}
                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-papaya/50 to-transparent opacity-30" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
