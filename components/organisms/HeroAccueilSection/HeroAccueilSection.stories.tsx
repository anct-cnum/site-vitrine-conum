import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroAccueilSection from "./HeroAccueilSection";

const meta = {
  title: "Organisms/HeroAccueilSection",
  component: HeroAccueilSection,
} satisfies Meta<typeof HeroAccueilSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
