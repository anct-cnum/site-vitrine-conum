# Rapport de corrections RGAA — Conseiller Numérique (site vitrine)

Suivi des corrections apportées suite à l'audit RGAA 4.1.2 réalisé par Arya Access (21/09/2026). Chaque section correspond à un ticket du board MIN/SEPT et à sa PR associée.

Sommaire :
- [#7 — Dimensions fixes ConditionsLabelSection (RGAA 10.12)](#7--dimensions-fixes-conditionslabelsection-rgaa-1012)

---

## #7 — Dimensions fixes ConditionsLabelSection (RGAA 10.12)

**Ticket :** [#7](https://github.com/anct-cnum/site-vitrine-conum/issues/7) · **PR :** [#17](https://github.com/anct-cnum/site-vitrine-conum/pull/17) (fusionnée) · **Sévérité :** Bloquant

### Constat
`ConditionsLabelSection.module.scss` utilisait `height: 41rem` (section) et `width: 32rem` (bloc texte) fixes. Avec les propriétés d'espacement de texte RGAA (line-height, letter-spacing, word-spacing) redéfinies par l'utilisateur, le contenu débordait de la boîte : titre tronqué, dernier item coupé.

### Correctif
- `height: 41rem` → `min-height: 41rem`
- `width: 32rem` → `width: 100%; max-width: 32rem`

### Captures

**Avant correctif (reconstitué), espacement de texte RGAA appliqué — bug reproduit :**

![Avant fix](issue-7/3-avant-fix-avec-espacement-rgaa-BUG.png)

**Après correctif, rendu normal — identique au design original :**

![Après fix rendu normal](issue-7/1-apres-fix-rendu-normal.png)

**Après correctif, espacement de texte RGAA appliqué — plus de troncature :**

![Après fix avec espacement RGAA](issue-7/2-apres-fix-avec-espacement-rgaa.png)

---
