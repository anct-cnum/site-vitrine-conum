import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import StructureCategorieSection from "./StructureCategorieSection";

const meta = {
  title: "Organisms/StructureCategorieSection",
  component: StructureCategorieSection,
} satisfies Meta<typeof StructureCategorieSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
