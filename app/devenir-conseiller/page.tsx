import type { Metadata } from "next";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import ProgrammeSection from "@/components/organisms/ProgrammeSection/ProgrammeSection";
import RecrutementSection from "@/components/organisms/RecrutementSection/RecrutementSection";

export const metadata: Metadata = {
  title: "Devenir Conseiller numérique — Parcours, formation et candidature",
  description:
    "Découvrez comment devenir Conseiller numérique : candidature, sélection, formation et prise de poste au sein d’une structure d’accueil.",
  alternates: {
    canonical: "/devenir-conseiller",
  },
  openGraph: {
    title: "Devenir Conseiller numérique — Parcours, formation et candidature",
    description:
      "Découvrez comment devenir Conseiller numérique : candidature, sélection, formation et prise de poste au sein d’une structure d’accueil.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function DevenirConseillerPage() {
  return (
    <main id="content">
      <HeroSection
        id="devenir-conseiller-hero-titre"
        image={{ src: "/images/pictos/good-work.svg", alt: "" }}
        titre="Devenir Conseiller numérique"
        texte="Rejoignez le mouvement des médiateurs de l’inclusion numérique. Formé puis employé par une structure locale, vous créez et animez des ateliers pour aider vos concitoyens à utiliser le numérique avec confiance."
        position="image-titre"
      />
      <ProgrammeSection />
      <RecrutementSection />
    </main>
  );
}
