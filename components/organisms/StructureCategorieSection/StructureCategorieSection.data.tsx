import type { ReactNode } from "react";
import CityHall from "@codegouvfr/react-dsfr/picto/CityHall";
import House from "@codegouvfr/react-dsfr/picto/House";

export type Categorie = {
  picto: string | ReactNode;
  titre: string;
  texte: string;
};

export const CATEGORIES: Categorie[] = [
  {
    picto: <CityHall fontSize="4rem" />,
    titre: "Structures publiques",
    texte:
      "Collectivités territoriales, établissements publics, CCAS et CIAS, espaces France Services, bibliothèques et médiathèques, maisons de services au public.",
  },
  {
    picto: <House fontSize="4rem" />,
    titre: "Structures privées et ESS",
    texte:
      "Associations, centres sociaux, structures de l'économie sociale et solidaire, coopératives, indépendants portés par une coopérative d'activité et d'emploi.",
  },
];
