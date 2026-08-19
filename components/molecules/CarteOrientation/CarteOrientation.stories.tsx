import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CarteOrientation from "./CarteOrientation";

const meta = {
  title: "Molecules/CarteOrientation",
  component: CarteOrientation,
} satisfies Meta<typeof CarteOrientation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: "/images/logo-conseiller-numerique.svg",
    titre: "Le conseiller numérique",
    description: "Pour vous rendre autonome et faire seul.",
    questionsReponses: [
      {
        question: "👉 Pour quoi faire ?",
        reponse: "Apprendre à utiliser le numérique au quotidien.",
      },
      {
        question: "👉 Sur quel sujet ?",
        reponse:
          "utiliser son smartphone, sa tablette, son ordinateur, protéger ses données personnelles, maitriser les réseaux sociaux, suivre la scolarité de ses enfants, etc.",
      },
      {
        question: "👉 Comment ?",
        reponse: "En atelier collectif ou en accompagnement individuel.",
      },
    ],
    ctaLabel: "Trouver un conseiller numérique",
    ctaHref:
      "https://cartographie.societenumerique.gouv.fr/?dispositif_programmes_nationaux=Conseillers+num%C3%A9riques&mtm_campaign=siteconum",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "24rem" }}>
        <Story />
      </div>
    ),
  ],
};
