export type EtapeProgramme = {
  icone: string;
  titre: string;
  texte: string;
};

export const ITEMS: EtapeProgramme[] = [
  {
    icone: "/images/pictos/shake-hands.svg",
    titre: "La sélection",
    texte:
      "Candidat au poste de conseiller et structure d’accueil : inscrivez-vous sur la plateforme, rencontrez-vous et contractualisez.",
  },
  {
    icone: "/images/pictos/school.svg",
    titre: "La formation",
    texte:
      "Bénéficiez d'une formation au sein d'un organisme agréé proche de chez vous ou en distanciel.",
  },
  {
    icone: "/images/pictos/team.svg",
    titre: "L’activité",
    texte:
      "Une fois formé, animez des ateliers d’initiation au numérique près de chez vous.",
  },
];
