# Contre-audit Arya Access #1 — état avant/après

Suivi des points relevés par le contre-audit RGAA 4.1 d'Arya Access (grille `grille_conformite_RGAA_4.1_ARYA.ods`, échantillon mis à jour P01→P10). Capturé en direct sur la prod (`conseiller-numerique.gouv.fr` et `candidature.conseiller-numerique.gouv.fr`) le 19/10/2026, avant tout déploiement des correctifs.

Légende : **NC** = non-conformité relevée par le contre-audit · **Remarque** = point d'attention sur un critère déjà jugé conforme (facultatif).

---

## site-vitrine-conum

### 1.2 — Logo décoratif non ignoré, Accueil (NC mineur — déjà corrigé, PR #38)

**Avant (prod) :** `<img src=".../logo-conseiller-numerique...svg" alt="Conseillers numériques France Services">`, pas de `aria-hidden`.
![avant](avant-1.2-logo-accueil.png)

**Après (vérifié en local sur la branche) :** `alt=""` + `aria-hidden="true"`.
![après](apres-1.2-logo-accueil.png)

**Après en prod :** _à vérifier après déploiement._

---

### 8.9 — Lien "Demander le label" non masqué pour les technologies d'assistance (remarque sur critère conforme)

**Avant (prod) :** le composant `Header` (DSFR) génère un `<li>` par élément de `quickAccessItems`. La classe `tmpLabelHidden` (`display:none !important`) est posée sur le `<a>` "Demander le label", pas sur le `<li>` englobant — contrairement au lien de nav "Le label" où `tmpLabelHidden` est bien sur le `<li>` (`fr-nav__item tmpLabelHidden`). Le `<li>` du header reste donc dans la liste (`display:flex`/`list-item`), ce qui peut être compté par certaines technologies d'assistance même si son contenu est invisible.
![avant](avant-8.9-header-li-label.png)

**Après :** _à corriger._

---

### 3.2 — Contraste du hero à largeur intermédiaire (remarque sur critère conforme)

**Avant (prod) :** non reproduit. Testé à 1100, 1250, 1281, 1300px (avec et sans simulation RGAA de l'espacement de texte) : les images décoratives (`hero-decor-gauche.svg` / `hero-decor-droite.svg`, 299px de large, visibles à partir de 80em/1280px) gardent une marge confortable (>150px) avec le bloc de texte centré (`max-width: 45rem`), aucun chevauchement ni perte de contraste observés.
![avant](avant-3.2-contraste-1300px.png)

**Conclusion :** point probablement déjà résolu par un correctif antérieur (dimensions fixes → min/max, #7) ou lié à un rendu spécifique au poste de l'auditeur. Pas de correctif de code prévu ; à signaler tel quel à l'auditeur pour qu'il confirme sur sa repasse.

---

### 6.1 — Lien "En savoir plus" peu explicite (remarque sur critère conforme), Accueil

**Avant (prod) :** texte visible "En savoir plus", complété par un texte `sr-only` (" sur comment devenir conseiller numérique") donnant un nom accessible déjà explicite : *"En savoir plus sur comment devenir conseiller numérique"*. Conforme techniquement (statut C), l'auditeur suggère de rendre le texte **visible** lui-même plus explicite.
![avant](avant-6.1-en-savoir-plus.png)

**Après :** _à corriger (texte visible → "Devenir conseiller numérique")._

---

### 6.1 — Liens "Garanties" peu explicites (remarque sur critère conforme), CGU

**Avant (prod) :** dans le tableau "Sous-traitants de la plateforme", les liens de la colonne Garanties affichent l'URL brute comme texte (ex. "clever-cloud.com/en/security", "fr.sendinblue.com/rgpd", "scalingo.com/fr", "pix.fr/politique-protection-donnees-personnelles-app").
![avant](avant-6.1-cgu-garanties.png)

**Après :** _à corriger (texte "Voir les garanties de [partenaire]")._

---

## site-vitrine (formulaire de candidature conseiller)

### 11.2 — Format de date manquant dans l'étiquette (NC majeur, partiel — déjà corrigé, PR #360)

**Avant (prod) :** étiquette du champ date sans indication de format.
![avant](avant-11.2-candidature-date-format.png)

**Après (vérifié en local) :** "... Format : 10/10/2010." ajouté au texte d'aide.
![après](apres-11.2-candidature-date-format.png)

**Après en prod :** _à vérifier après déploiement._

---

### 11.13 — Autocomplete manquant sur "Lieu d'habitation" (NC mineur, partiel — déjà corrigé, PR #360)

**Avant (prod) :** `autoComplete="off"` sur le champ `lieuHabitation`.
![avant](avant-11.13-candidature-lieu-habitation.png)

**Après (vérifié en local) :** `autoComplete="postal-code"`.

**Après en prod :** _à vérifier après déploiement._

---

### 9.1 — Blocs de formulaire structurés en `<fieldset><legend>` au lieu de titres (NC majeur, nouveau)

**Avant (prod) :** les 4 sections du formulaire ("Vos informations de contact", "Votre situation et expérience", "Votre disponibilité", "Votre motivation") sont des `<legend>` de `<fieldset>`, pas des titres de niveau 2.
![avant](avant-9.1-9.2-10.10-12.6-candidature-sidebar.png)

**Après :** _à corriger._

---

### 9.2 — Balise `<main>` manquante (NC mineur, nouveau)

**Avant (prod) :** `document.querySelector('main')` → `null`, le corps de la page n'est contenu dans aucune balise `<main>`.

**Après :** _à corriger._

---

### 10.10 — `aria-current="page"` au lieu de `"location"` sur l'ancre active du sommaire (NC mineur, nouveau)

**Avant (prod) :** l'ancre active du sommaire latéral porte `aria-current="page"`.

**Après :** _à corriger (`aria-current="location"`)._

---

### 12.6 — `role="navigation"` manquant sur le `<nav>` du sommaire (NC mineur, nouveau)

**Avant (prod) :** le `<nav class="fr-sidemenu" aria-label="Sommaire">` n'a pas d'attribut `role="navigation"` explicite (seul le rôle implicite HTML5 est présent). Le `<nav>` du menu principal (`fr-nav`), lui, a déjà `role="navigation"` explicite.

**Après :** _à corriger._

---

## Hors périmètre (rappel)

- **2.2** et **8.9** (captcha Cloudflare Turnstile — titre "Widget", texte "Succès !" en `<span>`) : exclus, widget tiers non modifiable de notre côté.
