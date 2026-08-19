export type Ressource = {
  icone: string;
  titre: string;
  description: string;
  lien: string;
};

export const RESSOURCES: Ressource[] = [
  {
    icone: "/images/pictos/coop.svg",
    titre: "La Coop de la médiation numérique",
    description:
      "Pour piloter votre activité de conseiller numérique : suivi des accompagnements, comptes-rendus, indicateurs.",
    lien: "https://coop-numerique.anct.gouv.fr/",
  },
  {
    icone: "/images/pictos/bases.svg",
    titre: "Les Bases du numérique d'intérêt général",
    description:
      "La bibliothèque de ressources partagées : ateliers prêts à l'emploi, fiches méthode et supports créés par la communauté.",
    lien: "https://lesbases.anct.gouv.fr/",
  },
  {
    icone: "/images/pictos/carto.svg",
    titre: "Cartographie nationale des lieux d'inclusion numérique",
    description:
      "La carte et annuaire public des lieux de l'inclusion numérique partout en France, accessible à tous les usagers.",
    lien: "https://cartographie.societenumerique.gouv.fr/",
  },
  {
    icone: "/images/pictos/aidants.svg",
    titre: "Aidants Connect",
    description:
      "Pour réaliser des démarches en ligne à la place d’une personne, avec son autorisation, de façon sécurisée.",
    lien: "https://aidantsconnect.beta.gouv.fr/",
  },
  {
    icone: "/images/pictos/rdv.svg",
    titre: "RDV Service Public",
    description:
      "L'outil de prise de rendez-vous en ligne : vos usagers réservent leur créneau, votre agenda est centralisé, les rappels sont automatiques.",
    lien: "https://rdv.anct.gouv.fr/",
  },
  {
    icone: "/images/pictos/mattermost.svg",
    titre: "Mattermost",
    description:
      "L'espace d'échange du réseau : entraide entre pairs, questions terrain, annonces des coordinateurs et de l'ANCT.",
    lien: "https://discussion.conseiller-numerique.gouv.fr/signup_user_complete",
  },
];
