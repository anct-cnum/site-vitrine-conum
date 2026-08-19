import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ListePicto from "./ListePicto";

const meta = {
  title: "Molecules/ListePicto",
  component: ListePicto,
} satisfies Meta<typeof ListePicto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        icone: "/images/pictos/shake-hands.svg",
        titre: "La sélection",
        texte:
          "Candidat au poste de conseiller et structure d’accueil : inscrivez-vous sur la plateforme, rencontrez-vous et contractualisez.",
      },
      {
        icone: "/images/pictos/school.svg",
        titre: "La formation",
        texte:
          "Bénéficiez d'une formation au sein d'un organise agréé proche de chez vous ou en distanciel.",
      },
      {
        icone: "/images/pictos/team.svg",
        titre: "L’activité",
        texte:
          "Une fois formé, animez des ateliers d’initiation au numérique près de chez vous.",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "32rem" }}>
        <Story />
      </div>
    ),
  ],
};
