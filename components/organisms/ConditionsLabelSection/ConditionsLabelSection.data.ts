export type Condition = {
  icone: string;
  titre: string;
  texte: string;
};

export const CONDITIONS: Condition[] = [
  {
    icone: "/images/pictos/award.svg",
    titre: "Un professionnel qualifié",
    texte:
      "La structure emploie au moins un professionnel de la médiation numérique (voir qualifications requises)",
  },
  {
    icone: "/images/pictos/team.svg",
    titre: "Une activité réelle de médiation",
    texte:
      "La médiation numérique représente une part significative du temps de travail des personne(s) concernée(s).",
  },
  {
    icone: "/images/pictos/shake-hands.svg",
    titre: "La gratuité pour le public",
    texte:
      "L'accompagnement est gratuit pour le bénéficiaire accompagné. La structure peut facturer des partenaires, employeurs ou intermédiaires, mais jamais la personne elle-même.",
  },
];
