# Rapport de corrections RGAA — Conseiller Numérique (site vitrine)

Suivi des corrections apportées suite à l'audit RGAA 4.1.2 réalisé par Arya Access (21/09/2026). Chaque section correspond à un ticket du board MIN/SEPT et à sa PR associée.

Sommaire :
- [#4 — Statut d'accessibilité en pied de page](#4--statut-daccessibilité-en-pied-de-page)
- [#5 — Déclaration d'accessibilité officielle (+ #12)](#5--déclaration-daccessibilité-officielle--12)
- [#6 — Schéma pluriannuel d'accessibilité](#6--schéma-pluriannuel-daccessibilité)
- [#7 — Dimensions fixes ConditionsLabelSection (RGAA 10.12)](#7--dimensions-fixes-conditionslabelsection-rgaa-1012)
- [#8 — Alternative HTML accessible aux CGU (RGAA 13.3)](#8--alternative-html-accessible-aux-cgu-rgaa-133)
- [#9 — Hiérarchie des titres Formation (RGAA 9.1)](#9--hiérarchie-des-titres-formation-rgaa-91)
- [#10 — Images décoratives + investigation Accueil (RGAA 1.2 / 8.9)](#10--images-décoratives--investigation-accueil-rgaa-12--89)
- [#11 — Lien explicite Formation (RGAA 6.1)](#11--lien-explicite-formation-rgaa-61)
- [#13 — Cohérence structurelle Plan du site (RGAA 9.2)](#13--cohérence-structurelle-plan-du-site-rgaa-92)
- [#14 — Rôles ARIA landmarks (RGAA 12.6)](#14--rôles-aria-landmarks-rgaa-126)

---

## #4 — Statut d'accessibilité en pied de page

**Ticket :** [#4](https://github.com/anct-cnum/site-vitrine-conum/issues/4) · **PR :** [#19](https://github.com/anct-cnum/site-vitrine-conum/pull/19)

### Constat
`PiedDePage.tsx` avait `STATUT_ACCESSIBILITE = "non compliant"` codé en dur.

### Correctif
`"non compliant"` → `"partially compliant"` (le site est partiellement conforme suite à l'audit).

---

## #5 — Déclaration d'accessibilité officielle (+ #12)

**Ticket :** [#5](https://github.com/anct-cnum/site-vitrine-conum/issues/5) et [#12](https://github.com/anct-cnum/site-vitrine-conum/issues/12) · **PR :** [#23](https://github.com/anct-cnum/site-vitrine-conum/pull/23)

### Constat
`/accessibilite` affichait un contenu placeholder ("non conforme", "Le site n'a encore pas été audité"). Le bloc "Amélioration et contact" listait l'e-mail/adresse en paragraphes distincts plutôt qu'en liste (RGAA 9.3, ticket #12).

### Correctif
- Publication de la déclaration officielle : 66,04 % des critères respectés (taux moyen 86,54 %), liste des 18 critères non conformes, environnement de test, technologies, outils, pages vérifiées.
- Conversion du bloc contact en `<ul>/<li>`.

### Vérification
Rendu contrôlé dans le navigateur : 18 critères affichés, un seul H1 visible (le second H1, masqué, appartient au sélecteur de thème DSFR — voir #9), aucune erreur console.

---

## #6 — Schéma pluriannuel d'accessibilité

**Ticket :** [#6](https://github.com/anct-cnum/site-vitrine-conum/issues/6) · **Pas de PR**

### Investigation
Un lien "Schéma pluriannuel" existe déjà sur `/accessibilite`, mais il est identique à deux autres entrées ("Plan 2025", "Bilan 2024") — impossible de vérifier son contenu réel (application JS `docs.numerique.gouv.fr`, non lisible par simple requête HTTP).

### Pourquoi aucune PR
Un schéma pluriannuel engage l'organisme sur 3 ans (budget, jalons, ressources) : contenu à produire par l'ANCT, pas un contenu à inventer côté code. Voir le commentaire détaillé sur le ticket.

---

## #7 — Dimensions fixes ConditionsLabelSection (RGAA 10.12)

**Ticket :** [#7](https://github.com/anct-cnum/site-vitrine-conum/issues/7) · **PR :** [#17](https://github.com/anct-cnum/site-vitrine-conum/pull/17) (fusionnée) · **Sévérité :** Bloquant

### Constat
`ConditionsLabelSection.module.scss` utilisait `height: 41rem` (section) et `width: 32rem` (bloc texte) fixes. Avec les propriétés d'espacement de texte RGAA (line-height, letter-spacing, word-spacing) redéfinies par l'utilisateur, le contenu débordait de la boîte : titre tronqué, dernier item coupé.

### Correctif
- `height: 41rem` → `min-height: 41rem`
- `width: 32rem` → `width: 100%; max-width: 32rem`

### Périmètre
Ce critère (10.12) concerne aussi un second exemple de l'audit sur la page **Candidature** (panneau récapitulatif "EN RÉSUMÉ"), hors périmètre de ce repo (sous-domaine externe). Signalé dans le ticket de relais [#15](https://github.com/anct-cnum/site-vitrine-conum/issues/15).

### Captures

**Avant correctif (reconstitué), espacement de texte RGAA appliqué — bug reproduit :**

![Avant fix](issue-7/3-avant-fix-avec-espacement-rgaa-BUG.png)

**Après correctif, rendu normal — identique au design original :**

![Après fix rendu normal](issue-7/1-apres-fix-rendu-normal.png)

**Après correctif, espacement de texte RGAA appliqué — plus de troncature :**

![Après fix avec espacement RGAA](issue-7/2-apres-fix-avec-espacement-rgaa.png)

---

## #8 — Alternative HTML accessible aux CGU (RGAA 13.3)

**Ticket :** [#8](https://github.com/anct-cnum/site-vitrine-conum/issues/8) · **PR :** [#25](https://github.com/anct-cnum/site-vitrine-conum/pull/25) · **Sévérité :** Bloquant

### Constat
`public/documents/CGU-Données_personnellesConseiller_Numérique.pdf` (10 pages) n'est pas balisé (`pdfinfo` : `Tagged: no`), sans structure de lecture pour les technologies d'assistance.

### Correctif
Nouvelle page `/cgu` retranscrivant fidèlement l'intégralité du PDF (CGU de la plateforme + notice de traitement des données personnelles) en HTML structuré : titres h1→h4 hiérarchisés, listes, 2 tableaux DSFR accessibles (durée de conservation, sous-traitants), liens explicites. Le PDF original reste disponible en téléchargement depuis cette page. Le lien en pied de page (auparavant direct vers le PDF) cible désormais `/cgu`.

### Vérification
Hiérarchie de titres testée dans le navigateur : h1→h2→h3→h4 cohérente sur les 26 titres de la page, aucun saut. 2 tableaux rendus correctement, aucune erreur console.

---

## #9 — Hiérarchie des titres Formation (RGAA 9.1)

**Ticket :** [#9](https://github.com/anct-cnum/site-vitrine-conum/issues/9) · **Pas de PR**

### Investigation
La hiérarchie des titres propres à la page `/formation` est correcte (h1→h2→h3, aucun saut). Un second `<h1>` ("Paramètres d'affichage") a été trouvé dans le DOM rendu — il appartient au sélecteur de thème du DSFR (`headerFooterDisplayItem`), présent sur toutes les pages du site, contenu dans une `<dialog>` native fermée (`visibility: hidden`). Les navigateurs excluent normalement un `<dialog>` fermé de l'arbre d'accessibilité ; un outil comme HeadingsMap (cité par l'auditeur) lit en revanche le DOM brut, ce qui explique probablement le signalement.

### Pourquoi aucune PR
Ce H1 vient du code interne de la librairie DSFR (`node_modules`), pas du code applicatif. Voir le commentaire détaillé sur le ticket pour la décision à prendre (accepter comme limitation connue vs. signaler au mainteneur DSFR).

---

## #10 — Images décoratives + investigation Accueil (RGAA 1.2 / 8.9)

**Ticket :** [#10](https://github.com/anct-cnum/site-vitrine-conum/issues/10) · **PR :** [#22](https://github.com/anct-cnum/site-vitrine-conum/pull/22)

### Constat
Plusieurs images décoratives (`alt=""`) sans `aria-hidden="true"` : `HeroSection`, `ConditionsLabelSection`, `FormationInitialeSection`, `ProgrammeSection`, et surtout `BlocTexteImageSection` — utilisé deux fois sur l'Accueil, identifié comme la cause la plus probable du signalement RGAA sur cette page (l'audit ne fournissait pas de capture précise).

### Correctif
Ajout de `aria-hidden="true"` (ou conditionnel `aria-hidden={alt === "" ? true : undefined}`) sur les 5 composants concernés.

### Correctif complémentaire (8.9 — texte structuré uniquement par un `<div>`)
Relecture du rapport d'audit (section 2.5.2) : le composant DSFR `Tile` (utilisé par `RessourcesSection`, 6 cartes sur l'Accueil) restitue sa prop `desc` dans un `<div class="fr-tile__desc">` sans balise `<p>`. Correctif : `desc={ressource.description}` → `desc={<p>{ressource.description}</p>}`. Vérifié dans le navigateur sur les 6 cartes.

---

## #11 — Lien explicite Formation (RGAA 6.1)

**Ticket :** [#11](https://github.com/anct-cnum/site-vitrine-conum/issues/11) · **PR :** [#21](https://github.com/anct-cnum/site-vitrine-conum/pull/21)

### Constat
Le lien "En savoir plus" (remplacement du titre REMN) ne permettait pas de comprendre sa destination hors contexte.

### Correctif
Ajout d'un texte `fr-sr-only` précisant la destination, sans changer le rendu visuel.

---

## #13 — Cohérence structurelle Plan du site (RGAA 9.2)

**Ticket :** [#13](https://github.com/anct-cnum/site-vitrine-conum/issues/13) · **PR :** [#24](https://github.com/anct-cnum/site-vitrine-conum/pull/24)

### Constat
`CarteTexte` (composant partagé) est utilisé avec `as="article"` par défaut partout, sauf Plan du site qui forçait `as="div"` sans raison apparente, perdant le landmark `<article>`.

### Correctif
Retrait de l'override `as="div"`.

---

## #14 — Rôles ARIA landmarks (RGAA 12.6)

**Ticket :** [#14](https://github.com/anct-cnum/site-vitrine-conum/issues/14) · **PR :** [#20](https://github.com/anct-cnum/site-vitrine-conum/pull/20)

### Investigation
Les `<nav>` du DSFR (Header, SkipLinks, Breadcrumb) ont déjà `role="navigation"` nativement — rien à corriger côté navigation. Aucune balise `<main>` n'avait de `role="main"` explicite.

### Correctif
Ajout de `role="main"` sur la balise `<main id="content">` des 10 pages du site.

---
