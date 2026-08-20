import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CarteCategorie from "./CarteCategorie";

const meta = {
  title: "Molecules/CarteCategorie",
  component: CarteCategorie,
} satisfies Meta<typeof CarteCategorie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    picto: "/images/pictos/document.svg",
    titre: "Lorem ipsum dolor sit amet",
    texte:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "20rem" }}>
        <Story />
      </div>
    ),
  ],
};
