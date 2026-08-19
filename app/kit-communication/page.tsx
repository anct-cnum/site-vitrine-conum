import type { Metadata } from "next";
import DocumentsSection from "@/components/organisms/DocumentsSection/DocumentsSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";

export const metadata: Metadata = {
  title: "Kit de communication — Label Conseiller Numérique",
  description:
    "Téléchargez la charte graphique, les logos et les supports officiels du Label Conseiller Numérique.",
  openGraph: {
    title: "Kit de communication — Label Conseiller Numérique",
    description:
      "Téléchargez la charte graphique, les logos et les supports officiels du Label Conseiller Numérique.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function KitCommunicationPage() {
  return (
    <main id="content">
      <HeroSection
        id="kit-communication-hero-titre"
        image={{ src: "/images/pictos/document.svg", alt: "" }}
        titre="Kit de communication"
        texte="Vous déployez des actions dans le cadre du label Conseiller numérique ? Un kit a été spécialement conçu pour valoriser le dispositif sur vos différents canaux de communication."
        position="image-titre"
      />
      <DocumentsSection />
    </main>
  );
}
