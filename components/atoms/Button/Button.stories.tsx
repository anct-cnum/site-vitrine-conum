import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@codegouvfr/react-dsfr/Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Bouton principal",
    priority: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Bouton secondaire",
    priority: "secondary",
  },
};
