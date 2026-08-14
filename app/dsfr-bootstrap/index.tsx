"use client";

import Link from "next/link";
import {
  DsfrProviderBase,
  StartDsfrOnHydration,
  type DsfrProviderProps,
} from "@codegouvfr/react-dsfr/next-app-router";

import { defaultColorScheme } from "./defaultColorScheme";

declare module "@codegouvfr/react-dsfr/next-app-router" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

export function DsfrProvider(props: DsfrProviderProps) {
  return (
    <DsfrProviderBase
      Link={Link}
      defaultColorScheme={defaultColorScheme}
      {...props}
    />
  );
}

export { StartDsfrOnHydration };
