import type { Metadata } from "next";
import AccompagnementsSection from "@/components/organisms/AccompagnementsSection/AccompagnementsSection";
import BlocCtaSection from "@/components/organisms/BlocCtaSection/BlocCtaSection";
import FaqSection from "@/components/organisms/FaqSection/FaqSection";
import HeroAccueilSection from "@/components/organisms/HeroAccueilSection/HeroAccueilSection";
import OrientationSection from "@/components/organisms/OrientationSection/OrientationSection";
import RessourcesSection from "@/components/organisms/RessourcesSection/RessourcesSection";

export const metadata: Metadata = {
  title: "Conseiller Numérique — Accompagnement et autonomie numérique",
  description:
    "Découvrez les services des conseillers numériques, trouvez un accompagnement près de chez vous et informez-vous sur le Label Conseiller Numérique.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Conseiller Numérique — Accompagnement et autonomie numérique",
    description:
      "Découvrez les services des conseillers numériques, trouvez un accompagnement près de chez vous et informez-vous sur le Label Conseiller Numérique.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <main id="content">
      <HeroAccueilSection />
      <AccompagnementsSection />
      <OrientationSection />
      <BlocCtaSection
        id="dispositif-devient-label-titre"
        titre="Le dispositif devient un label"
        description={[
          "Depuis 2021, le dispositif Conseiller numérique a permis le déploiement partout en France d'un réseau de plusieurs milliers de médiateurs numériques professionnels.",
          "En 2026, le dispositif évolue et se transforme en un label porté par les structures accueillant des médiateurs numériques. Ce label permet de bénéficier gratuitement de parcours de formation continue, d'outils professionnels performants et d'une animation nationale riche.",
        ]}
        ctaLabel="Demander le label conseiller numérique"
        ctaHref="https://mon.inclusion-numerique.anct.gouv.fr/connexion-label"
        img={{
          src: "/images/label-illustration.svg",
          alt: "",
        }}
        position="gauche"
      />
      <BlocCtaSection
        id="devenir-conseiller-numérique-titre"
        titre="Vous souhaitez devenir conseiller numérique ?"
        description={[
          "Le conseiller numérique accompagne les Français dans leurs usages du numérique au quotidien. Le recrutement passe par des structures conventionnées (collectivités, associations, médiathèques, …)",
        ]}
        ctaLabel="En savoir plus"
        ctaHref="/devenir-conseiller"
        img={{
          src: "/images/devenir-conseiller-illustration.svg",
          alt: "",
        }}
        position="droite"
        couleurFond="--background-contrast-brown-opera"
        imgTailleFixe
        ctaExterne={false}
      />
      <FaqSection />
      <RessourcesSection />
    </main>
  );
}
