"use client";

import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function NextUIProviders({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
