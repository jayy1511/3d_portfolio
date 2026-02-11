"use client";

import { useState } from "react";
import { RESUME_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Copy, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(RESUME_DATA.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="min-h-[80vh] flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden">
            {/* Checkered Flag Pattern Background */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[repeating-linear-gradient(45deg,#fff_0_10px,transparent_10px_20px)] opacity-5 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[repeating-linear-gradient(-45deg,#fff_0_10px,transparent_10px_20px)] opacity-5 pointer-events-none" />

            <div className="max-w-4xl w-full text-center relative z-10">
                <span className="text-papaya font-mono text-sm tracking-widest uppercase mb-6 block">Finish Line</span>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                    Get In <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Touch</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-12">
                    SWE Intern at Dassault Systèmes. Always open to connecting and collaborating.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Button
                        size="lg"
                        className="h-14 px-8 text-lg bg-papaya text-black hover:bg-papaya/90 rounded-full font-bold shadow-[0_0_20px_rgba(255,128,0,0.4)] hover:shadow-[0_0_40px_rgba(255,128,0,0.6)] transition-all"
                        onClick={() => window.location.href = `mailto:${RESUME_DATA.contact.email}`}
                    >
                        <Mail className="mr-2 w-5 h-5" />
                        Contact Me
                    </Button>

                    <div className="flex items-center gap-2 p-1 pl-4 pr-1 rounded-full bg-white/5 border border-white/10">
                        <span className="font-mono text-sm text-muted-foreground">{RESUME_DATA.contact.email}</span>
                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10" onClick={handleCopy}>
                            {copied ? <span className="text-green-500 font-bold">✓</span> : <Copy className="w-4 h-4" />}
                        </Button>
                    </div>
                </div>

                <div className="flex justify-center gap-8 mt-20">
                    {RESUME_DATA.contact.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-papaya transition-colors transform hover:scale-110 duration-300"
                        >
                            {social.name === "GitHub" && <Github className="w-8 h-8" />}
                            {social.name === "LinkedIn" && <Linkedin className="w-8 h-8" />}
                        </a>
                    ))}
                </div>

                <footer className="mt-32 text-xs text-muted-foreground font-mono">
                    © {new Date().getFullYear()} {RESUME_DATA.name} | BUILT WITH NEXT.JS & R3F | <span className="text-papaya">NO SPEED LIMITS</span>
                </footer>
            </div>
        </section>
    );
}
