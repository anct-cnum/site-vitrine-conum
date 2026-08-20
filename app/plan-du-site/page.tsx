import { fr } from "@codegouvfr/react-dsfr";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import CarteTexte from "@/components/organisms/CarteTexte/CarteTexte";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan du site — Conseiller Numérique",
  description: "Plan du site Conseiller Numérique",
  alternates: {
    canonical: "/plan-du-site",
  },
  openGraph: {
    title: "Plan du site — Conseiller Numérique",
    description: "Plan du site Conseiller Numérique",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PlanDuSitePage() {
  return (
    <main id="content">
      <div className={fr.cx("fr-container")}>
        <Breadcrumb
          currentPageLabel="Plan du site"
          homeLinkProps={{ href: "/" }}
          segments={[]}
        />
      </div>

      <CarteTexte titleId="plan-du-site-title" as="div">
        <h1 id="plan-du-site-title" className="titre-h2">
          Plan du site
        </h1>

        <ul className={fr.cx("fr-mb-6v")}>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/label">Label Conseiller numérique</a>
          </li>
          <li>
            <a href="/devenir-conseiller">Devenir Conseiller numérique</a>
          </li>
          <li>
            <a href="/formation">Formation des conseillers numériques</a>
          </li>
          <li>
            <a href="/kit-communication">Kit de communication</a>
          </li>
          <li>
            <a href="/mentions-legales">Mentions légales</a>
          </li>
          <li>
            <a href="/accessibilite">Déclaration d'accessibilité</a>
          </li>
          <li>
            <a href="/plan-du-site">Plan du site</a>
          </li>
        </ul>
      </CarteTexte>
    </main>
  );
}
