"use client";

import "./EnTete.scss";
import Button from "@codegouvfr/react-dsfr/Button";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { usePathname } from "next/navigation";

export default function EnTete() {
  const pathname = usePathname();

  return (
    <Header
      brandTop={
        <>
          RÉPUBLIQUE
          <br />
          FRANÇAISE
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil - Conseiller numérique",
      }}
      serviceTitle={
        <>
          CONSEILLER
          <br />
          NUMERIQUE
        </>
      }
      operatorLogo={{
        orientation: "horizontal",
        imgUrl: "/images/logo-conseiller-numerique.svg",
        alt: "Conseiller numérique",
      }}
      quickAccessItems={[
        <Button
          iconId="fr-icon-question-answer-line"
          priority="tertiary"
          linkProps={{
            href: "https://aide.conseiller-numerique.gouv.fr/fr/",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        >
          J'ai une question{" "}
          <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
        </Button>,
        <Button
          priority="primary"
          className="header-btn-primary"
          linkProps={{
            href: "https://mon.inclusion-numerique.anct.gouv.fr/connexion-label",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        >
          Demander le label
          <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
        </Button>,
      ]}
      navigation={[
        {
          text: "Accueil",
          linkProps: { href: "/" },
          isActive: pathname === "/",
        },
        {
          text: "Le label",
          linkProps: { href: "/label" },
          isActive: pathname === "/label",
        },
        {
          text: "Devenir conseiller numérique",
          linkProps: { href: "/candidature-conseiller" },
          isActive: pathname === "/candidature-conseiller",
        },
        {
          text: "Formation",
          linkProps: { href: "/formation" },
          isActive: pathname === "/formation",
        },
        {
          text: (
            <>
              La cartographie
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </>
          ),
          linkProps: {
            href: "https://cartographie.societenumerique.gouv.fr/?dispositif_programmes_nationaux=Conseillers+num%C3%A9riques&mtm_campaign=siteconum",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        {
          text: "Kit de communication",
          linkProps: { href: "/kit-communication" },
          isActive: pathname === "/kit-communication",
        },
      ]}
    />
  );
}
