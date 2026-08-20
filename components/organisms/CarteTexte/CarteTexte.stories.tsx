import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CarteTexte from "./CarteTexte";

const meta = {
  title: "Organisms/CarteTexte",
  component: CarteTexte,
} satisfies Meta<typeof CarteTexte>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleId: "titre-exemple",
    children: (
      <>
        <h2 id="titre-exemple">Titre de section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
  },
};
