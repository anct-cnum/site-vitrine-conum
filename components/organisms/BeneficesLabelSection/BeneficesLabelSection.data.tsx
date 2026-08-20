import type { ReactNode } from "react";
import SelfTraining from "@codegouvfr/react-dsfr/picto/SelfTraining";
import HumanCooperation from "@codegouvfr/react-dsfr/picto/HumanCooperation";
import Success from "@codegouvfr/react-dsfr/picto/Success";
import LocationOverseasFrance from "@codegouvfr/react-dsfr/picto/LocationOverseasFrance";
import PressCard from "@codegouvfr/react-dsfr/picto/PressCard";

export type Benefice = {
  icone: ReactNode;
  titre: string;
  texte: string;
};

export const BENEFICES: Benefice[] = [
  {
    icone: <Success fontSize="6rem" />,
    titre: "Formation financée",
    texte:
      "Un module de formation continue par an, financé par l'État, pour chaque médiateur numérique de votre structure.",
  },
  {
    icone: <LocationOverseasFrance fontSize="6rem" />,
    titre: "Visibilité",
    texte:
      "Un recensement de votre structure sur la cartographie nationale des lieux d'inclusion numérique, repérable par les citoyens, les travailleurs sociaux et les prescripteurs.",
  },
  {
    icone: <SelfTraining fontSize="6rem" />,
    titre: "Outils nationaux",
    texte:
      "Un accès à un outillage pensé pour soutenir les médiateurs numériques dans leur travail au quotidien : La Coop de la médiation numérique, Les Bases du numérique d'intérêt général, la cartographie nationale des lieux d'inclusion numérique",
  },
  {
    icone: <HumanCooperation fontSize="6rem" />,
    titre: "Communauté professionnelle",
    texte:
      "Un accès au réseau national des acteurs de la médiation numérique et à son animation : événements, entraide entre pairs, animation territoriale par les coordinateurs.",
  },
  {
    icone: <PressCard fontSize="6rem" />,
    titre: "Marque et identité visuelle",
    texte:
      "L’utilisation du nom « Conseiller Numérique » et du kit de communication national pour valoriser votre activité auprès de vos publics et partenaires.",
  },
];
