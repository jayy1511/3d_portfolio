"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function LapTimer({ className }: { className?: string }) {
    const [time, setTime] = useState(0);
    const startTime = useRef<number>(null);

    useEffect(() => {
        startTime.current = Date.now();

        // Update every 10ms for smooth millisecond display
        const interval = setInterval(() => {
            if (startTime.current) {
                setTime(Date.now() - startTime.current);
            }
        }, 32);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const millis = Math.floor((ms % 1000) / 10); // 2 digits

        return (
            <div className="flex items-baseline font-mono tracking-tighter tabular-nums gap-[2px]">
                <span className="text-muted-foreground w-[2ch] text-right">
                    {minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">:</span>
                <span className="text-foreground font-bold w-[2ch] text-right">
                    {seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-papaya text-xs self-end mb-[2px]">.</span>
                <span className="text-papaya w-[2ch] text-right">
                    {millis.toString().padStart(2, "0")}
                </span>
            </div>
        );
    };

    return (
        <div className={cn(
            "flex flex-col items-end gap-1 p-3 rounded-lg border border-border/50 bg-card/10 backdrop-blur-sm",
            className
        )}>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                Session Time
            </div>
            {formatTime(time)}

            {/* Decorative colored bar */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-papaya/50 to-transparent mt-1" />
        </div>
    );
}
