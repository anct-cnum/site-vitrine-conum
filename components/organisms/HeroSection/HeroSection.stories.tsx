import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroSection from "./HeroSection";

const meta = {
  title: "Organisms/HeroSection",
  component: HeroSection,
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "hero-titre",
    image: {
      src: "/images/label-illustration.svg",
      alt: "",
    },
    titre: "Titre de la page",
    texte: "Un texte de présentation qui accompagne le titre de la page.",
  },
};

export const AvecCta: Story = {
  args: {
    ...Default.args,
    cta: {
      label: "En savoir plus",
      href: "#",
    },
  },
};

export const TitreAvantImage: Story = {
  args: {
    ...Default.args,
    position: "titre-image",
  },
};

export const TitreAvantImageAvecCta: Story = {
  args: {
    ...TitreAvantImage.args,
    cta: {
      label: "En savoir plus",
      href: "#",
    },
  },
};
