
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Assuming these exist from init, if not I'll just use sans
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { cn } from "@/lib/utils";

import { DRSProvider } from "@/components/providers/DRSContext";

// If Geist fonts are available, use them. Otherwise standard sans.
// We'll trust next/font/google is set up by create-next-app

import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Jay PATEL | AI Engineer",
  description: "F1-inspired developer portfolio. High-performance AI systems and workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden selection:bg-papaya selection:text-papaya-foreground",
          "cursor-default"
        )}
      >
        <DRSProvider>
          <SmoothScroll>
            <div className="relative min-h-screen flex flex-col">
              {/* Global Overlay Effects - Scanlines & Vignette */}
              <div className="fixed inset-0 z-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />

              {/* Main Content */}
              <main className="flex-1 flex flex-col">
                {children}
              </main>

              <CommandMenu />
            </div>
          </SmoothScroll>
        </DRSProvider>
        <Analytics />
      </body>
    </html>
  );
}
