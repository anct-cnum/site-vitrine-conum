import type { Metadata } from "next";
import BeneficesLabelSection from "@/components/organisms/BeneficesLabelSection/BeneficesLabelSection";
import BlocTexteImageSection from "@/components/organisms/BlocTexteImageSection/BlocTexteImageSection";
import ConditionsLabelSection from "@/components/organisms/ConditionsLabelSection/ConditionsLabelSection";
import FaqSection from "@/components/organisms/FaqSection/FaqSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import ObtentionLabelSection from "@/components/organisms/ObtentionLabelSection/ObtentionLabelSection";
import StructureCategorieSection from "@/components/organisms/StructureCategorieSection/StructureCategorieSection";

export const metadata: Metadata = {
  title: "Label Conseiller Numérique — Conditions et demande de labellisation",
  description:
    "Découvrez le Label Conseiller Numérique, ses avantages, les structures éligibles et les conditions pour obtenir cette reconnaissance nationale.",
  alternates: {
    canonical: "/label",
  },
  openGraph: {
    title:
      "Label Conseiller Numérique — Conditions et demande de labellisation",
    description:
      "Découvrez le Label Conseiller Numérique, ses avantages, les structures éligibles et les conditions pour obtenir cette reconnaissance nationale.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function LabelPage() {
  return (
    <main id="content">
      <HeroSection
        id="label-hero-titre"
        image={{ src: "/images/label-illustration-2.svg", alt: "" }}
        titre="Le label Conseiller Numérique"
        texte="Une reconnaissance nationale pour les structures qui emploient des médiateurs numériques accompagnant gratuitement les Français dans leurs usages numériques."
        position="image-titre"
        cta={{
          label: "Demander le label conseiller numérique",
          href: "https://mon.inclusion-numerique.anct.gouv.fr/connexion-label",
          externe: true,
        }}
      />
      <BlocTexteImageSection
        id="dispositif-label-titre"
        titre="Le dispositif devient un label"
        description={[
          <strong key="intro">
            Depuis 2021, le plan France Relance a financé la formation et
            l'activité de près de 4 000 conseillers numériques partout en
            France. Cette première phase touche à sa fin.
          </strong>,
          "Pour capitaliser sur ces investissements et pérenniser la qualité du service proposé par les conseillers numériques, le dispositif devient un label porté par les structures. Il reprend la marque, les exigences et la promesse de service public du dispositif d'origine. Seul évolue le modèle de financement.",
          "Dans un premier temps, le label est proposé aux structures qui emploient ou ont employé un conseiller numérique dans le cadre du dispositif. Il s'ouvrira ensuite aux autres structures de médiation numérique qui remplissent les conditions.",
        ]}
        img={{
          src: "/images/label-photo-illustration.svg",
          alt: "",
        }}
        position="droite"
        imageFlexible
        titreUneLigne
      />
      <BeneficesLabelSection />
      <StructureCategorieSection />
      <ConditionsLabelSection />
      <ObtentionLabelSection />
      <FaqSection />
    </main>
  );
}
