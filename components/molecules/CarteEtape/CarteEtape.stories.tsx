import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CarteEtape from "./CarteEtape";

const meta = {
  title: "Molecules/CarteEtape",
  component: CarteEtape,
} satisfies Meta<typeof CarteEtape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontale: Story = {
  args: {
    numero: 1,
    titre: "La sélection",
    texte:
      "Candidat au poste de conseiller et structure d’accueil : inscrivez-vous sur la plateforme, rencontrez-vous et contractualisez.",
  },
};

export const Verticale: Story = {
  args: {
    ...Horizontale.args,
    orientation: "verticale",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "16rem" }}>
        <Story />
      </div>
    ),
  ],
};
