import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FormationContinueSection from "./FormationContinueSection";

const meta = {
  title: "Organisms/FormationContinueSection",
  component: FormationContinueSection,
} satisfies Meta<typeof FormationContinueSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
