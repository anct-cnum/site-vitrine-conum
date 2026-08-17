import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PiedDePage from "./PiedDePage";

const meta = {
  title: "Organisms/PiedDePage",
  component: PiedDePage,

  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
    a11y: {
      config: {
        rules: [
          // Faux positif du contexte isolé : les boutons "Gestion des cookies" et
          // "Paramètres d'affichage" ont un aria-controls pointant vers des modales
          // (fr-consent-modal, fr-theme-modal) rendues dans le layout de l'app,
          // absentes de cette story. aria-controls est valide en production.
          { id: "aria-valid-attr-value", enabled: false },
        ],
      },
    },
  },
} satisfies Meta<typeof PiedDePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
