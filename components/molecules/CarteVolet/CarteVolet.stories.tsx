import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CarteVolet from "./CarteVolet";

const meta = {
  title: "Molecules/CarteVolet",
  component: CarteVolet,
} satisfies Meta<typeof CarteVolet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    entete: "Formation initiale",
    titre: "Se former avant la prise de poste",
    texte:
      "Une formation préparant à l’obtention du titre professionnel Médiateur numérique, dispensée par des organismes de formation partenaires du dispositif.",
    couleurFond: "--background-contrast-brown-opera",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "20rem" }}>
        <Story />
      </div>
    ),
  ],
};
