import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";

export default function PiedDePage() {
  const STATUT_ACCESSIBILITE = "non compliant" as const;
  return (
    <Footer
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
      accessibility={STATUT_ACCESSIBILITE}
      accessibilityLinkProps={{
        href: "/accessibilite",
      }}
      contentDescription={
        <>
          Conseiller Numérique rassemble les professionnels et les structures
          qui accompagnent les Français vers l'autonomie dans leurs usages du
          numérique au quotidien. Il est édité par l'
          <a
            href="https://anct.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agence nationale de la cohésion des territoires.
            <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
          </a>
        </>
      }
      operatorLogo={{
        alt: "Agence Nationale de la Cohésion des Territoires - Société numérique",
        imgUrl: "/images/logo-ANCT.svg",
        orientation: "horizontal",
      }}
      bottomItems={[
        {
          text: "Mentions légales",
          linkProps: { href: "/mentions-legales" },
        },
        {
          text: "Données personnelles",
          linkProps: { href: "/donnees-personnelles" },
        },
        {
          text: "Plan du site",
          linkProps: { href: "/plan-du-site" },
        },
        headerFooterDisplayItem,
      ]}
    />
  );
}
