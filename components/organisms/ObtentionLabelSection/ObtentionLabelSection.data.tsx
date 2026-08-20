import type { ReactNode } from "react";

export type Etape = {
  titre: string;
  texte: ReactNode;
};

export const ETAPES: Etape[] = [
  {
    titre: "Je me connecte",
    texte: (
      <>
        Connexion à <strong>Mon Inclusion Numérique</strong>, ou création de
        compte avec le SIRET de ma structure.
      </>
    ),
  },
  {
    titre: "Je vérifie les informations",
    texte:
      "Le formulaire est pré-rempli à partir des données déjà connues sur ma structure et mes conseillers numériques.",
  },
  {
    titre: "Je confirme mon éligibilité",
    texte:
      "Attestation sur l'honneur couvrant les trois conditions du label : qualification, activité, gratuité.",
  },
  {
    titre: "Mon label est actif",
    texte:
      "Je retrouve mon statut dans mon tableau de bord. Je confirme mon activité chaque trimestre par un simple clic dans un mail.",
  },
];
