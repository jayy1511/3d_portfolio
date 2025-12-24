"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Github,
    Linkedin,
    Mail,
    FileCode,
    Home,
    Flag,
    Gauge
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { RESUME_DATA } from "@/lib/data"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm p-2 rounded-md border border-border/50 hidden md:flex">
                <span className="text-[10px]">CMD+K</span>
                <span>Command Menu</span>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="bg-background/95 backdrop-blur-md border-carbon/50">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Navigation">
                        <CommandItem onSelect={() => runCommand(() => window.location.href = "#home")}>
                            <Home className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.href = "#about")}>
                            <User className="mr-2 h-4 w-4" />
                            <span>Driver Profile</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.href = "#projects")}>
                            <FileCode className="mr-2 h-4 w-4" />
                            <span>Garage (Projects)</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.href = "#experience")}>
                            <Gauge className="mr-2 h-4 w-4" />
                            <span>Telemetry (Experience)</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.href = "#contact")}>
                            <Flag className="mr-2 h-4 w-4" />
                            <span>Finish Line</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Links">
                        <CommandItem onSelect={() => runCommand(() => window.open(RESUME_DATA.contact.social[0].url, "_blank"))}>
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.open(RESUME_DATA.contact.social[1].url, "_blank"))}>
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>LinkedIn</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.href = `mailto:${RESUME_DATA.contact.email}`)}>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
