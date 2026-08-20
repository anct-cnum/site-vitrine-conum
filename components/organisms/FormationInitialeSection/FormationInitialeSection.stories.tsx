import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FormationInitialeSection from "./FormationInitialeSection";

const meta = {
  title: "Organisms/FormationInitialeSection",
  component: FormationInitialeSection,
} satisfies Meta<typeof FormationInitialeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
