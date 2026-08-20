import type { Metadata } from "next";
import FormationContinueSection from "@/components/organisms/FormationContinueSection/FormationContinueSection";
import FormationInitialeSection from "@/components/organisms/FormationInitialeSection/FormationInitialeSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OffresFormationSection from "@/components/organisms/OffresFormationSection/OffresFormationSection";

export const metadata: Metadata = {
  title: "Formation des Conseillers Numériques",
  description:
    "Découvrez l'offre de formation des conseillers numériques : formation initiale, formation continue, modalités d'inscription et organismes partenaires.",
  alternates: {
    canonical: "/formation",
  },
  openGraph: {
    title: "Formation des Conseillers Numériques",
    description:
      "Découvrez l'offre de formation des conseillers numériques : formation initiale, formation continue, modalités d'inscription et organismes partenaires.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function FormationPage() {
  return (
    <main id="content">
      <HeroSection
        id="label-hero-titre"
        image={{ src: "/images/formation-illustration.svg", alt: "" }}
        titre="Formation des conseillers numériques"
        texte="Au cœur du dispositif, la formation des conseillers numériques est financé par l’état et participe à la professionnalisation de la filière de l’inclusion numérique en donnant accès à un titre professionnel."
        position="image-titre"
      />
      <OffresFormationSection />
      <FormationInitialeSection />
      <FormationContinueSection />
    </main>
  );
}
