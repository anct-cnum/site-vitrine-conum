import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CarteAccompagnement from "./CarteAccompagnement";

const meta = {
  title: "Molecules/CarteAccompagnement",
  component: CarteAccompagnement,
} satisfies Meta<typeof CarteAccompagnement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    desc: "Prendre en main un ordinateur, un téléphone ou une tablette",
    picto: "/images/pictos/mediation-numerique.svg",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "16rem" }}>
        <Story />
      </div>
    ),
  ],
};
