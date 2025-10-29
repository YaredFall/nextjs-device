"use client";

import { createContext, useContext, type PropsWithChildren } from "react";
import type { Device } from "./types";

const DeviceContext = createContext<Device>(undefined!);

export function DeviceContextProvider({ value, children }: PropsWithChildren<{ value: Device }>) {
    return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
}

export function useDevice() {
    const context = useContext(DeviceContext);
    if (!context) throw new Error("[nextjs-device]: `useDevice` must be called inside `DeviceContextProvider`!");

    return context;
}
