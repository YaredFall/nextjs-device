"use client";

import { useDevice } from "nextjs-device";

export function DeviceDemo() {
    const device = useDevice();
    return <pre>{JSON.stringify(device, null, 2)}</pre>;
}
