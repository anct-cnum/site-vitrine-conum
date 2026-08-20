import type { ReactNode } from "react";
import type { OrganismeFormation } from "@/components/molecules/CarteVolet/CarteVolet";

export type Formation = {
  entete: string;
  titre: string;
  texte: ReactNode;
  couleurFond: string;
  organismesFormation: OrganismeFormation[];
};

export const FORMATIONS: Formation[] = [
  {
    entete: "FORMATION INITIALE",
    titre: "Acquérir les fondamentaux du métier de médiateur numérique",
    texte: (
      <>
        Une formation préparant à l’obtention du{" "}
        <strong>titre professionnel Médiateur numérique</strong>, dispensée par
        des organismes de formation partenaires du dispositif.
      </>
    ),
    couleurFond: "--background-contrast-brown-opera",
    organismesFormation: [
      { nom: "La Fabrik", zone: "en France métropolitaine" },
      { nom: "Francil’In", zone: "en outre-mer" },
    ],
  },
  {
    entete: "FORMATION CONTINUE",
    titre: "Renforcer ses compétences selon ses besoins professionnels",
    texte: (
      <>
        Un parcours sur mesure grâce à un catalogue de{" "}
        <strong>19 modules thématiques courts (7h ou 14h)</strong>
      </>
    ),
    couleurFond: "--background-contrast-blue-france",
    organismesFormation: [{ nom: "La Mednum", zone: "" }],
  },
];
