import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BlocTexteImageSection from "./BlocTexteImageSection";

const meta = {
  title: "Organisms/BlocTexteImageSection",
  component: BlocTexteImageSection,
} satisfies Meta<typeof BlocTexteImageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "dispositif-devient-label-titre",
    titre: "Le dispositif devient un label",
    description: [
      "Depuis 2021, le dispositif Conseiller numérique a permis le déploiement partout en France d'un réseau de plusieurs milliers de médiateurs numériques professionnels.",
      "En 2026, le dispositif évolue et se transforme en un label porté par les structures accueillant des médiateurs numériques. Ce label permet de bénéficier gratuitement de parcours de formation continue, d'outils professionnels performants et d'une animation nationale riche.",
    ],
    ctaLabel: "Demander le label conseiller numérique",
    ctaHref: "https://mon.inclusion-numerique.anct.gouv.fr/connexion-label",
    img: {
      src: "/images/label-illustration.svg",
      alt: "",
    },
    position: "gauche",
  },
};

export const AvecFondEtImageTailleFixe: Story = {
  args: {
    id: "devenir-conseiller-numerique-titre",
    titre: "Vous souhaitez devenir conseiller numérique ?",
    description: [
      "Le conseiller numérique accompagne les Français dans leurs usages du numérique au quotidien. Le recrutement passe par des structures conventionnées (collectivités, associations, médiathèques, …)",
    ],
    ctaLabel: "En savoir plus",
    ctaHref: "/devenir-conseiller",
    img: {
      src: "/images/devenir-conseiller-illustration.svg",
      alt: "",
    },
    position: "droite",
    couleurFond: "--background-contrast-brown-opera",
    imgTailleFixe: true,
  },
};
