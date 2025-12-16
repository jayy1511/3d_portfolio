"use client";

import React, { createContext, useContext, useState } from "react";

type DRSContextType = {
    isDRSEnabled: boolean;
    toggleDRS: () => void;
};

const DRSContext = createContext<DRSContextType | undefined>(undefined);

export function DRSProvider({ children }: { children: React.ReactNode }) {
    const [isDRSEnabled, setIsDRSEnabled] = useState(false); // Default OFF for performance

    const toggleDRS = () => {
        setIsDRSEnabled((prev) => !prev);
    };

    return (
        <DRSContext.Provider value={{ isDRSEnabled, toggleDRS }}>
            {children}
        </DRSContext.Provider>
    );
}

export function useDRS() {
    const context = useContext(DRSContext);
    if (context === undefined) {
        throw new Error("useDRS must be used within a DRSProvider");
    }
    return context;
}
