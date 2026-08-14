import "@codegouvfr/react-dsfr/main.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { DsfrProvider, StartDsfrOnHydration } from "./dsfr-bootstrap";
import { DsfrHead, getHtmlAttributes } from "./dsfr-bootstrap/server-only-index";

export const metadata: Metadata = {
  title: "Conseiller numérique",
  description: "Site vitrine Conseiller numérique 2026",
};

const lang = "fr";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html {...getHtmlAttributes({ lang })}>
      <head>
        <StartDsfrOnHydration />
        <DsfrHead />
      </head>
      <body>
        <DsfrProvider lang={lang}>{children}</DsfrProvider>
      </body>
    </html>
  );
}
