export type DocumentTelechargeable = {
  titre: string;
  texte: string;
  fichier?: {
    label: string;
    details: string;
    href: string;
  };
};

export const DOCUMENTS: DocumentTelechargeable[] = [
  {
    titre: "Orthographe",
    texte:
      "On écrit : « Conseiller numérique », majuscule au terme « Conseiller » uniquement pour désigner le dispositif ; on utilise l’acronyme « Conum ». On écrit « les conseillers numériques » en minuscules pour désigner les personnes. ",
  },
  {
    titre: "Charte graphique",
    texte:
      "Ce document détaille les consignes d’utilisation du logo Conseiller numérique et ses cas d’usages pour la production de supports de communication en lien avec le dispositif :",
    fichier: {
      label: "Télécharger la charte graphique Conseiller numérique",
      details: "PDF – 61,88 Ko",
      href: "#",
    },
  },
  {
    titre: "Logotypes",
    texte:
      "À destination des usagers, cette plaquette explicative présente le dispositif et les missions des conseillers numériques de manière synthétique. Il s’agit d’un format A4 recto verso imprimable. Les coordonnées (structure, et conseiller) sont personnalisables via un encart situé en quatrième de couverture.",
    fichier: {
      label: "Télécharger les logos",
      details: "PDF – 1 Mo",
      href: "#",
    },
  },
  {
    titre: "Supports de communication",
    texte:
      "À destination des usagers, cette plaquette explicative présente le dispositif et les missions des conseillers numériques de manière synthétique. Il s’agit d’un format A4 recto verso imprimable. Les coordonnées (structure, et conseiller) sont personnalisables via un encart situé en quatrième de couverture.",
    fichier: {
      label: "Télécharger les modèles",
      details: "PDF – 1 Mo",
      href: "#",
    },
  },
];
