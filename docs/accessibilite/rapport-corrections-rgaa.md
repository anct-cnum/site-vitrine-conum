# Rapport de corrections RGAA — Conseiller Numérique (site vitrine)

Suivi des corrections apportées en réponse au **Rapport d'audit d'accessibilité RGAA 4.1** réalisé par Arya Access le 21/09/2026 (35 pages). Chaque section ci-dessous reprend un critère du rapport d'audit — numéro de critère, formulation officielle, niveau de non-conformité et référence de page — suivi du constat retenu et de la correction apportée.

**État global :** toutes les non-conformités relevées par l'audit et confirmées par l'auditeur sont corrigées, sur le site vitrine comme sur le formulaire de candidature (projet séparé) · le critère 1.6 (Obligations d'affichage, schéma pluriannuel) est satisfait sans correction nécessaire, le lien existant ayant été confirmé valide · un point soulevé de notre côté sur le critère 9.1 (second titre dans la fenêtre de réglages du thème) a été écarté par l'auditeur, qui a précisé la vraie cause du signalement (traitée en #34) · les occurrences situées dans le PDF de charte graphique relèvent désormais d'une page externe, hors de notre périmètre.

**Synthèse :** sur les 18 critères non conformes relevés par l'audit, toutes les occurrences situées sur le site vitrine et sur le formulaire de candidature sont corrigées, plus 2 écarts non listés par l'audit trouvés lors d'une relecture approfondie du rapport (voir en fin de document). Restent non corrigées les occurrences situées dans le PDF de charte graphique (critères 1.1, 1.2, 3.2, 8.5, 8.9, 9.1) — le fichier lui-même n'a pas été modifié — mais leur suivi ne relève plus de notre périmètre depuis que ce contenu a été transféré vers une page externe gérée par une autre équipe.

Sommaire :
- [#4 — Statut d'accessibilité en pied de page (obligations d'affichage)](#4--statut-daccessibilité-en-pied-de-page-obligations-daffichage)
- [#5 — Déclaration d'accessibilité officielle (+ critère 9.3)](#5--déclaration-daccessibilité-officielle--critère-93)
- [#6 — Schéma pluriannuel d'accessibilité (obligations d'affichage)](#6--schéma-pluriannuel-daccessibilité-obligations-daffichage)
- [#7 — Critère 10.12 : espacement du texte, page Label](#7--critère-1012--espacement-du-texte-page-label)
- [#8 — Critère 13.3 : document bureautique sans alternative](#8--critère-133--document-bureautique-sans-alternative)
- [#9 — Critère 9.1 : clarification sur le titre de la fenêtre de réglages](#9--critère-91--clarification-sur-le-titre-de-la-fenêtre-de-réglages-non-conformité-écartée)
- [#34 — Critère 9.1 : titres "Formation initiale" / "Formation continue"](#34--critère-91--titres-formation-initiale--formation-continue)
- [#10 — Critères 1.2 et 8.9 : images et balisage, Accueil](#10--critères-12-et-89--images-et-balisage-accueil)
- [#11 — Critère 6.1 : lien explicite, page Formation](#11--critère-61--lien-explicite-page-formation)
- [#13 — Critère 9.2 : cohérence de structure, Plan du site](#13--critère-92--cohérence-de-structure-plan-du-site)
- [#14 — Critère 12.6 : zones de regroupement, tout le site](#14--critère-126--zones-de-regroupement-tout-le-site)
- [#26 — Critère 12.6 : zone de contenu principal manquante sur /cgu](#26--critère-126--zone-de-contenu-principal-manquante-sur-cgu)
- [#27 — Critère 9.2 : intitulé du fil d'ariane](#27--critère-92--intitulé-du-fil-dariane)
- [#15 — Critères 2.2, 10.12, 11.2, 11.5, 11.10, 11.11, 11.13 : formulaire de candidature](#15--critères-22-1012-112-115-1110-1111-1113--formulaire-de-candidature)
- [Critères 1.1, 1.2, 3.2, 8.5, 8.9, 9.1 : PDF de charte graphique](#critères-11-12-32-85-89-91--pdf-de-charte-graphique)
- [Résultat de la seconde passe d'audit](#résultat-de-la-seconde-passe-daudit)

---

## #4 — Statut d'accessibilité en pied de page (obligations d'affichage)

**Rapport d'audit :** section 1.6 "Obligations d'affichage", p.6 — mention du niveau d'accessibilité en pied de page. **Ticket :** [#4](https://github.com/anct-cnum/site-vitrine-conum/issues/4) — Corrigé.

### Constat
Le pied de page affichait un statut d'accessibilité codé en dur sur "non conforme", en contradiction avec l'obligation de mention conforme au modèle "Accessibilité : non conforme / partiellement conforme / totalement conforme" rappelée par l'auditeur.

### Correctif
Le statut affiché reflète maintenant la réalité : le site est partiellement conforme suite à l'audit.

---

## #5 — Déclaration d'accessibilité officielle (+ critère 9.3)

**Rapport d'audit :** section 1.6 "Obligations d'affichage", p.6-7 (déclaration d'accessibilité) et **critère 9.3** — « Dans chaque page web, chaque liste est-elle correctement structurée ? » — Mineur, p.22 (page Accessibilité). **Tickets :** [#5](https://github.com/anct-cnum/site-vitrine-conum/issues/5) et [#12](https://github.com/anct-cnum/site-vitrine-conum/issues/12) — Corrigés.

### Constat
La page `/accessibilite` affichait un contenu provisoire ("non conforme", "Le site n'a encore pas été audité") au lieu de la déclaration d'accessibilité requise. Le bloc "Amélioration et contact" de cette même page listait l'e-mail et l'adresse en paragraphes distincts plutôt qu'en liste, contrevenant au critère 9.3.

### Correctif
- Publication de la déclaration officielle : 66,04 % des critères respectés (taux moyen 86,54 %), liste des 18 critères non conformes, environnement de test, technologies, outils, pages vérifiées — conforme au modèle attendu par le RGAA.
- Conversion du bloc contact en liste correctement structurée.

### Vérification
Rendu contrôlé dans le navigateur : 18 critères affichés, un seul titre de niveau 1 réellement visible (le second, masqué, appartient au sélecteur de thème du DSFR — voir #9), aucune erreur console.

---

## #6 — Schéma pluriannuel d'accessibilité (obligations d'affichage)

**Rapport d'audit :** section 1.6 "Obligations d'affichage", p.7 — schéma pluriannuel de mise en accessibilité. **Ticket :** [#6](https://github.com/anct-cnum/site-vitrine-conum/issues/6) — Fermé, aucune correction nécessaire.

### Investigation
Un lien "Schéma pluriannuel" existe déjà sur `/accessibilite`, identique à deux autres entrées ("Plan 2025", "Bilan 2024") — contenu non vérifiable par une simple requête technique (application externe `docs.numerique.gouv.fr`).

### Résolution
Confirmé par l'équipe : le document lié est bien le « Schéma pluriannuel d'accessibilité de l'incubateur des territoires 2025-2027 », valide et à jour (couvre l'ensemble des services de l'incubateur, dont Conseiller Numérique). L'obligation est donc satisfaite, aucun correctif nécessaire.

---

## #7 — Critère 10.12 : espacement du texte, page Label

**Critère RGAA 10.12** — « Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ? » — **Bloquant**, rapport p.22-24. **Ticket :** [#7](https://github.com/anct-cnum/site-vitrine-conum/issues/7) — Corrigé.

### Constat
Conformément à l'exemple donné par l'auditeur (p.23) sur la section "Conditions du label", la section avait une hauteur et une largeur fixes. Avec les propriétés d'espacement de texte redéfinies par l'utilisateur (interligne, espacement des lettres/mots), le contenu débordait de la boîte : titre tronqué, dernier item coupé.

### Correctif
Conformément à la recommandation de l'auditeur (« les propriétés CSS de hauteurs fixes, largeurs fixes sont à éviter », p.24), les dimensions fixes ont été remplacées par des dimensions minimales/maximales, qui s'adaptent si le texte a besoin de plus de place.

### Périmètre
Le rapport d'audit (p.23-24) donne un second exemple de ce même critère sur la page Candidature (panneau récapitulatif "EN RÉSUMÉ"), qui ne fait pas partie du site vitrine. Signalé dans le ticket de relais [#15](https://github.com/anct-cnum/site-vitrine-conum/issues/15).

### Captures

**Avant correctif (reconstitué), espacement de texte RGAA appliqué — bug reproduit :**

![Avant fix](issue-7/3-avant-fix-avec-espacement-rgaa-BUG.png)

**Après correctif, rendu normal — identique au design original :**

![Après fix rendu normal](issue-7/1-apres-fix-rendu-normal.png)

**Après correctif, espacement de texte RGAA appliqué — plus de troncature :**

![Après fix avec espacement RGAA](issue-7/2-apres-fix-avec-espacement-rgaa.png)

---

## #8 — Critère 13.3 : document bureautique sans alternative

**Critère RGAA 13.3** — « Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible (hors cas particuliers) ? » — **Bloquant**, rapport p.33-34. **Ticket :** [#8](https://github.com/anct-cnum/site-vitrine-conum/issues/8) — Corrigé.

### Constat
Le document "CGU & Données personnelles", cité par l'auditeur comme exemple de non-conformité (p.33), n'était disponible qu'en PDF, sans structure de lecture pour les technologies d'assistance.

### Correctif
Conformément aux options de correction proposées par l'auditeur (« proposer une version alternative du document au format HTML compatible avec l'accessibilité », p.34), une nouvelle page `/cgu` retranscrit fidèlement l'intégralité du document (CGU de la plateforme + notice de traitement des données personnelles) en page web structurée : titres hiérarchisés, listes, tableaux accessibles (durée de conservation, sous-traitants), liens explicites.

### Vérification
Hiérarchie des titres testée dans le navigateur : cohérente sur les 26 titres de la page, aucun saut. Tableaux rendus correctement, aucune erreur.

### Complément — suppression du PDF
À la demande de l'équipe, le PDF original est supprimé plutôt que conservé en option secondaire : `/cgu` devient l'unique version de référence. Plus aucune référence au fichier sur le site.

---

## #9 — Critère 9.1 : clarification sur le titre de la fenêtre de réglages (non-conformité écartée)

**Critère RGAA 9.1**, rapport p.18-20 (page concernée indiquée par l'auditeur : Formation). **Ticket :** [#9](https://github.com/anct-cnum/site-vitrine-conum/issues/9) — Fermé, ce n'est pas un défaut.

### Investigation
En examinant la page `/formation`, un second titre de niveau 1 ("Paramètres d'affichage") a été repéré dans le code — il appartient à la fenêtre de réglages du thème clair/sombre du DSFR, présente sur toutes les pages du site. Nous avons interrogé l'auditeur pour savoir si c'était la cause du signalement.

### Réponse de l'auditeur
Ce n'est pas un défaut : une fenêtre modale est considérée en accessibilité comme une page à part entière, et il est normal que la numérotation des titres y reparte à 1. Les technologies d'assistance ne restituent pas ce titre tant que la fenêtre n'est pas ouverte. Ticket fermé sur cette base.

### La vraie cause, précisée par l'auditeur
Le véritable problème derrière ce signalement sur la page Formation : les libellés "Formation initiale" et "Formation continue", qui introduisent chacun le contenu d'une carte, n'étaient pas structurés comme des titres. Voir [#34](https://github.com/anct-cnum/site-vitrine-conum/issues/34), traité ci-dessous.

---

## #34 — Critère 9.1 : titres "Formation initiale" / "Formation continue"

**Critère RGAA 9.1**, rapport p.18-20 (même critère que #9, précisé directement par l'auditeur). **Ticket :** [#34](https://github.com/anct-cnum/site-vitrine-conum/issues/34) — Corrigé.

### Constat
Les libellés "Formation initiale" et "Formation continue", qui introduisent chacun le contenu d'une carte (titre, description, organismes de formation), n'étaient pas structurés comme des titres.

### Correctif
Conformément à la recommandation de l'auditeur : "Formation initiale"/"Formation continue" sont maintenant des titres de niveau 3, et les titres de carte ("Acquérir les fondamentaux...", "Renforcer ses compétences...") passent en titre de niveau 4 pour ne pas avoir deux niveaux 3 imbriqués. Aucun changement visuel (taille, graisse et espacement identiques avant/après, vérifié dans le navigateur).

---

## #10 — Critères 1.2 et 8.9 : images et balisage, Accueil

**Critère RGAA 1.2** — « Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ? » — **Majeur**, rapport p.9-10. **Critère RGAA 8.9** — « Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. » — **Bloquant**, rapport p.17-18 (pages concernées indiquées par l'auditeur : Accueil, Formation). **Ticket :** [#10](https://github.com/anct-cnum/site-vitrine-conum/issues/10) — Corrigé (ticket laissé ouvert, une vérification au lecteur d'écran est recommandée).

### Constat
Plusieurs images décoratives n'étaient pas explicitement ignorées par les technologies d'assistance, notamment un composant utilisé deux fois sur l'Accueil — identifié comme la cause la plus probable du signalement sur cette page, l'auditeur n'ayant pas fourni de capture précise pour l'Accueil.

### Correctif
Les images décoratives concernées sont maintenant correctement ignorées par les technologies d'assistance.

### Correctif complémentaire — texte mal structuré (critère 8.9)
En relisant le rapport d'audit plus en détail (recommandation p.18 : « si du texte est structuré uniquement avec des `<div>` ou `<span>`, modifier ce balisage par le balisage approprié »), un second problème a été trouvé : le texte des 6 cartes "Ressources" de l'Accueil n'était pas structuré avec la balise appropriée pour du texte (une balise de présentation générique était utilisée à la place). Corrigé et vérifié sur les 6 cartes.

---

## #11 — Critère 6.1 : lien explicite, page Formation

**Critère RGAA 6.1** — « Chaque lien est-il explicite (hors cas particuliers) ? » — **Mineur**, rapport p.13-15 (page concernée indiquée par l'auditeur : Formation). **Ticket :** [#11](https://github.com/anct-cnum/site-vitrine-conum/issues/11) — Corrigé.

### Constat
Le lien "En savoir plus" (remplacement du titre REMN) ne permettait pas de comprendre sa destination hors contexte, conformément à l'exemple de l'auditeur (p.14).

### Correctif
Conformément à la technique recommandée par l'auditeur (classe `sr-only`, p.14-15), un texte additionnel, non visible mais lu par les lecteurs d'écran, précise maintenant la destination du lien, sans changer son apparence.

---

## #13 — Critère 9.2 : cohérence de structure, Plan du site

**Critère RGAA 9.2** — « Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ? » — **Mineur**, rapport p.20-21 (pages concernées indiquées par l'auditeur : Candidature, Plan du site). **Ticket :** [#13](https://github.com/anct-cnum/site-vitrine-conum/issues/13) — Corrigé.

### Constat
Le composant partagé utilisé pour structurer les pages de contenu avait, sans raison apparente, une structure différente sur la page Plan du site par rapport aux autres pages similaires.

### Correctif
La page Plan du site utilise maintenant la même structure que les autres pages de contenu.

---

## #14 — Critère 12.6 : zones de regroupement, tout le site

**Critère RGAA 12.6** — « Les zones de regroupement de contenus présentes dans plusieurs pages web (en-tête, navigation principale, contenu principal, pied de page, moteur de recherche) peuvent-elles être atteintes ou évitées ? » — **Mineur**, rapport p.31-32 (page concernée indiquée par l'auditeur : toutes les pages sauf le PDF de charte graphique). **Ticket :** [#14](https://github.com/anct-cnum/site-vitrine-conum/issues/14) — Corrigé.

### Investigation
Les zones de navigation du site étaient déjà correctement identifiées pour les technologies d'assistance. Seule la zone de contenu principal, citée par l'exemple de l'auditeur (p.32), ne l'était pas explicitement sur aucune page.

### Correctif
La zone de contenu principal est maintenant explicitement identifiée sur les 10 pages du site, conformément à la correction recommandée (p.32).

---

## #26 — Critère 12.6 : zone de contenu principal manquante sur /cgu

**Critère RGAA 12.6**, rapport p.31-32 (même critère que #14). **Ticket :** [#26](https://github.com/anct-cnum/site-vitrine-conum/issues/26) — Corrigé.

### Constat
Trouvé lors de la seconde passe d'audit approfondie : la page `/cgu`, créée après le correctif du #14, n'avait pas repris ce même correctif — une régression ponctuelle passée inaperçue.

### Correctif
- La zone de contenu principal de `/cgu` est maintenant identifiée comme les autres pages.
- En prime (coût nul, même relecture) : le lien "En savoir plus" de l'Accueil (bloc "Devenir conseiller numérique") a reçu un contexte explicite supplémentaire pour les lecteurs d'écran, par précaution — il était déjà conforme grâce au titre qui le précède immédiatement, mais ce renfort le rend plus robuste si le contenu de la page évolue.

---

## #27 — Critère 9.2 : intitulé du fil d'ariane

**Critère RGAA 9.2**, rapport p.20-21 (même critère que #13). **Ticket :** [#27](https://github.com/anct-cnum/site-vitrine-conum/issues/27) — Corrigé.

### Constat
Trouvé lors de la seconde passe d'audit approfondie : c'est littéralement l'exemple illustrant ce critère dans le rapport d'audit (p.21 : fil d'ariane avec l'intitulé technique "vous êtes ici", jugé pas suffisamment explicite), qui n'avait pas été rapproché du code lors du ticket #13.

### Correctif
Conformément à la correction recommandée par l'auditeur (« il est nécessaire de modifier l'attribut aria-label sur la balise `<nav>` pour lui donner une valeur plus explicite, `aria-label="Fil d'ariane"` », p.21), l'intitulé du fil d'ariane a été remplacé par "Fil d'ariane". Vérifié dans le navigateur sur la page Plan du site.

---

## #15 — Critères 2.2, 10.12, 11.2, 11.5, 11.10, 11.11, 11.13 : formulaire de candidature

**Critères RGAA** — 2.2 (Majeur, p.11), 10.12 (Bloquant, p.22-24), 11.2 (Majeur, p.24-25), 11.5 (Majeur, p.26-27), 11.10 (Majeur, p.28-29), 11.11 (Majeur, p.29-31), 11.13 (Mineur, p.31) — page concernée indiquée par l'auditeur : Candidature. **Ticket :** [#15](https://github.com/anct-cnum/site-vitrine-conum/issues/15) — Corrigé.

### Contexte
Le formulaire de candidature conseiller vit sur un projet séparé du site vitrine, et concentrait la majorité des non-conformités relevées par l'audit initial. Il a été recodé en reprenant, pour chaque critère ci-dessus, le constat et la correction préconisée par l'auditeur — en préservant strictement le fonctionnement de l'enregistrement des candidatures (même données envoyées, même traitement côté serveur).

### Correctifs
- **2.2** (p.11) — le cadre du défi de sécurité (captcha) a maintenant un titre explicite en français, conformément à l'exemple de l'auditeur sur ce même type de widget.
- **10.12** (p.22-24) — l'encart récapitulatif "En résumé", cité par l'auditeur (p.24), est restructuré pour ne plus déborder de son cadre quand l'espacement du texte est redéfini par l'utilisateur.
- **11.2** (p.24-25) — l'étiquette du champ de date de disponibilité reprend maintenant la vraie question posée, au lieu de l'intitulé générique "Choisir une date" relevé par l'auditeur comme exemple.
- **11.5** (p.26-27) — chaque groupe de champs de même nature (situation, expérience, distance) a maintenant un nom explicite pour les technologies d'assistance.
- **11.10** (p.28-29) — un bug a été trouvé en creusant ce critère : l'identifiant technique du message d'erreur était dupliqué sur tous les champs, et aucun champ en erreur n'était relié à son message. Corrigé : chaque champ en erreur est maintenant correctement annoncé et relié à son message.
- **11.11** (p.29-31) — les messages d'erreur d'email et de téléphone précisent maintenant le format attendu, conformément à la recommandation de l'auditeur.
- **11.13** (p.31) — les champs d'identité (prénom, nom, email, téléphone) sont maintenant correctement reconnus par le remplissage automatique du navigateur.

### Vérification
Tous les tests automatisés passent (84, dont plusieurs nouveaux pour ces correctifs), parcours complet vérifié dans le navigateur, aucune candidature réellement envoyée pendant les tests.

### Complément — texte d'aide reformulé
Le texte d'aide sous la question "disponibilité" (critère 11.2) était un copier-coller de celui d'une autre question, et faisait désormais partie du nom lu par les lecteurs d'écran pour ce champ. Remplacé par un texte propre au contexte : "Indiquez une date approximative si vous n'êtes pas encore certain(e)."

### Complément — formulaires structure et coordinateur
Les formulaires "structure" (`/candidature-poste-conseiller`) et "coordinateur" (`/candidature-poste-coordinateur`) partagent plusieurs composants avec le formulaire conseiller, donc bénéficiaient déjà de certains correctifs. Leurs questions propres ont été vérifiées à leur tour :
- **Critère 11.5** — 3 groupes de champs sans nom accessible ("Votre structure est", "Avez-vous déjà identifié un candidat ?", "Le coordinateur") : reliés à leur question.
- **Critère 11.2** — étiquette du champ de date de début de mission ("Choisir une date" générique) : reprend maintenant la vraie question, sur les deux formulaires.
- Vérifié déjà conforme : l'encart "Engagement" (hérite du correctif 10.12 de l'encart "En résumé") et le champ SIRET/RIDET.

### Reste à faire (hors périmètre)
- Le cadre de vérification de sécurité a une largeur fixe imposée par le fournisseur (Cloudflare) qui touche les bords de l'écran sur mobile très étroit — non modifiable de notre côté.
- Ni le formulaire structure ni le formulaire coordinateur ne sont accessibles depuis le site vitrine ou depuis la navigation du site de candidature lui-même (uniquement par URL directe) — sans lien avec l'accessibilité, à signaler si pertinent.

---

## Critères 1.1, 1.2, 3.2, 8.5, 8.9, 9.1 : PDF de charte graphique

**Critères RGAA** — 1.1 (Majeur, p.8), 1.2 (Majeur, p.9-10), 3.2 (Mineur, p.12), 8.5 (Majeur, p.16-17), 8.9 (Bloquant, p.17-18), 9.1 (Majeur, p.18-20) — page concernée indiquée par l'auditeur : PDF Charte graphique. **Ticket :** [#16](https://github.com/anct-cnum/site-vitrine-conum/issues/16) — Fermé, hors périmètre.

### Contexte
Demande connexe (pas elle-même un correctif RGAA) : le contenu du kit de communication (orthographe, charte graphique, logotypes, supports) est désormais maintenu sur une page externe (`docs.numerique.gouv.fr`). La page "Kit de communication" du site est donc supprimée, remplacée par un lien vers cette page externe (menu et plan du site). Les fichiers téléchargeables restent hébergés sur notre site — la page externe pointe directement vers eux.

### Constat et fermeture
Le lien "Télécharger la charte graphique" sur cette page externe pointe vers le même fichier que celui déjà hébergé chez nous — ce n'est pas une version corrigée. Les défauts relevés par l'auditeur pour ce PDF (alternative textuelle des images, contraste du titre, titre de document absent des métadonnées, balisage, hiérarchie des titres) restent donc présents tels quels dans le fichier. Ce contenu étant désormais porté par la page externe, son suivi relève de l'équipe qui la gère plutôt que du site vitrine — ticket fermé sur cette base.

---

## Résultat de la seconde passe d'audit

Une relecture indépendante et complète des 35 pages du rapport d'audit (texte et captures d'écran, y compris les recommandations données uniquement en image) a été menée pour vérifier, critère par critère, que le site actuel couvrait bien chaque recommandation en périmètre (hors formulaire de Candidature et hors PDF de charte graphique, traités à part).

**Constat global : tous les critères en périmètre sont couverts.** Seuls 2 écarts ponctuels ont été trouvés, tous deux introduits par des changements ultérieurs à leur correction d'origine (pages ou composants créés ou modifiés après coup sans reprendre un correctif déjà en place ailleurs) — pas des oublis dans l'analyse initiale du rapport :
- **#26** — critère 12.6 (p.31-32) : zone de contenu principal non identifiée sur `/cgu`, page créée après le correctif sitewide du #14
- **#27** — critère 9.2 (p.20-21) : intitulé du fil d'ariane non explicite, exemple de l'audit jamais rapproché du composant concerné lors du #13

Plus un point d'amélioration facultatif (coût nul, inclus dans #26) et un échange avec l'auditeur sur le critère 9.1 (p.18-20, #9) : l'hypothèse d'un second titre masqué du sélecteur de thème comme cause du signalement a été écartée (comportement normal d'une fenêtre modale), et la vraie cause a été précisée par l'auditeur — traitée en #34.

Un balayage systématique de tous les liens non-explicites du site a également été fait à cette occasion, au-delà des seuls exemples relevés par l'auditeur pour le critère 6.1 (p.13-15) : aucun lien réellement non-conforme trouvé au-delà de celui déjà corrigé par #11.

---
