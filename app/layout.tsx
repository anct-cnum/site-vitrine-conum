import "@codegouvfr/react-dsfr/main.css";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { DsfrProvider, StartDsfrOnHydration } from "./dsfr-bootstrap";
import {
  DsfrHead,
  getHtmlAttributes,
} from "./dsfr-bootstrap/server-only-index";
import EnTete from "@/components/organisms/EnTete/EnTete";
import Matomo from "./matomo";
import PiedDePage from "@/components/organisms/PiedDePage/PiedDePage";

export const metadata: Metadata = {
  title: "Conseiller numérique",
  description: "Site vitrine Conseiller numérique 2026",
  metadataBase: new URL("https://conseiller-numerique.gouv.fr/"),
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
        <DsfrProvider lang={lang}>
          <EnTete />
          {children}
          <PiedDePage />
        </DsfrProvider>
        <Matomo />
      </body>
    </html>
  );
}
