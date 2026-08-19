import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProgrammeSection from "./ProgrammeSection";

const meta = {
  title: "Organisms/ProgrammeSection",
  component: ProgrammeSection,
} satisfies Meta<typeof ProgrammeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
