# site-vitrine-conum

Site vitrine Conseiller numérique 2026.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + TypeScript
- [DSFR](https://www.systeme-de-design.gouv.fr/) via [@codegouvfr/react-dsfr](https://github.com/codegouvfr/react-dsfr)
- [Storybook 10](https://storybook.js.org/) (`@storybook/nextjs-vite`) avec addon-a11y (RGAA)
- Contenu géré directement dans le code (pas de CMS)

## Prérequis

- [Devbox](https://www.jetify.com/devbox) (fournit Node.js et installe les dépendances automatiquement)

## Démarrage

```bash
devbox shell     # installe Node.js + dépendances npm
npm run dev      # http://localhost:3000
```

## Commandes

| Commande                  | Description                            |
| ------------------------- | -------------------------------------- |
| `npm run dev`             | Serveur de développement               |
| `npm run build`           | Build de production                    |
| `npm run start`           | Serveur de production                  |
| `npm run lint`            | ESLint                                 |
| `npm test`                | Tests des stories + accessibilité (axe) |
| `npm run test:watch`      | Tests en mode watch                    |
| `npm run storybook`       | Storybook (http://localhost:6006)      |
| `npm run build-storybook` | Build statique de Storybook            |

## Architecture

Les composants suivent l'approche **atomic design**, avec les stories Storybook
colocalisées :

```
app/                    # Pages et layout Next.js (App Router)
  dsfr-bootstrap/       # Intégration react-dsfr (provider, head, thème)
components/
  atoms/                # Composants de base (ex. Button)
  molecules/            # Assemblages simples d'atoms
  organisms/            # Sections complètes (header, footer…)
  templates/            # Squelettes de pages
```

## Accessibilité (RGAA)

Chaque story Storybook est automatiquement testée avec
[axe-core](https://github.com/dequelabs/axe-core) via l'addon a11y
(mode `error` dans `.storybook/preview.tsx`) : toute violation détectée fait
échouer `npm test`. Les violations sont aussi visibles dans l'onglet
« Accessibility » de l'UI Storybook.

Les tests automatiques ne couvrent qu'une partie du RGAA : un audit manuel
(navigation clavier, lecteur d'écran, contenus) reste nécessaire.

## DSFR

- L'intégration suit le [setup officiel Next.js App Router](https://react-dsfr.codegouv.studio/) de react-dsfr.
- Les scripts `predev`/`prebuild` (`only-include-used-icons`) n'embarquent que les icônes réellement utilisées.
- Dans Storybook, le DSFR est initialisé via `.storybook/preview.tsx`.

## Notes sur les versions

Toutes les dépendances sont maintenues en dernière version, à deux exceptions près :

- **ESLint 9** : `eslint-config-next` n'est pas encore compatible ESLint 10
- **TypeScript 6** : typescript-eslint ne supporte pas encore TypeScript 7
