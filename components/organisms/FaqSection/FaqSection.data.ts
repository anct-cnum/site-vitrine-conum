export type Question = {
  question: string;
  reponse: string;
};

export const QUESTIONS: Question[] = [
  {
    question:
      "Si mon conseiller numérique quitte la structure, que devient le label ?",
    reponse:
      "Le label reste actif tant que la structure emploie au moins un conseiller numérique. Si le dernier conseiller numérique quitte la structure sans remplacement, le label est suspendu, sans suppression définitive. Il redevient actif dès qu'un nouveau conseiller numérique est recruté.",
  },
  {
    question: "Combien de temps le label est-il valide ?",
    reponse:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    question: "Est-ce que notre demande peut être refusée ?",
    reponse:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    question: "Le label a-t-il un coût pour ma structure ?",
    reponse:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    question: "Comment utiliser la marque Conseiller Numérique ?",
    reponse:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    question:
      "Que se passe-t-il si je ne réponds pas à la validation trimestrielle ?",
    reponse:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    question:
      "Ma structure n'a jamais eu de conseiller numérique. Puis-je demander le label ?",
    reponse:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];
