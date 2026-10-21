import CarteTexte from "@/components/organisms/CarteTexte/CarteTexte";
import CallOut from "@codegouvfr/react-dsfr/CallOut";
import Highlight from "@codegouvfr/react-dsfr/Highlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Déclaration d'accessibilité — Conseiller Numérique",
  description: "Déclaration d'accessibilité du site Conseiller Numérique",
  alternates: {
    canonical: "/accessibilite",
  },
  openGraph: {
    title: "Déclaration d'accessibilité — Conseiller Numérique",
    description: "Déclaration d'accessibilité du site Conseiller Numérique",
    locale: "fr_FR",
    type: "website",
  },
};

const CRITERES_NON_CONFORMES = [
  "2.2 — Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?",
  "8.9 — Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?",
];

const PAGES_VERIFIEES = [
  { label: "Accueil", href: "https://conseiller-numerique.gouv.fr/" },
  {
    label: "Devenir conseiller numérique",
    href: "https://conseiller-numerique.gouv.fr/devenir-conseiller",
  },
  {
    label: "Formation",
    href: "https://conseiller-numerique.gouv.fr/formation",
  },
  { label: "Label", href: "https://conseiller-numerique.gouv.fr/label" },
  {
    label: "Candidature",
    href: "https://candidature.conseiller-numerique.gouv.fr/candidature-conseiller",
  },
  {
    label: "Mentions légales",
    href: "https://conseiller-numerique.gouv.fr/mentions-legales",
  },
  { label: "CGU", href: "https://conseiller-numerique.gouv.fr/cgu" },
  {
    label: "Accessibilité",
    href: "https://conseiller-numerique.gouv.fr/accessibilite",
  },
  {
    label: "Plan du site",
    href: "https://conseiller-numerique.gouv.fr/plan-du-site",
  },
];

export default function AccessibilitePage() {
  return (
    <main id="content" role="main" tabIndex={-1}>
      <CarteTexte titleId="declaration-accessibilite-title">
        <h1 id="declaration-accessibilite-title" className="titre-h2">
          Déclaration d’accessibilité
        </h1>

        <p>Établie le 25 septembre 2026, mise à jour le 20 octobre 2026.</p>
        <p>
          L’Agence nationale de la cohésion des territoires s’engage à rendre
          son service accessible, conformément à l’article 47 de la loi n°
          2005-102 du 11 février 2005.
        </p>
        <p>
          À cette fin, nous mettons en œuvre la stratégie et les actions
          suivantes :
        </p>
        <ul>
          <li>
            <a
              href="https://docs.numerique.gouv.fr/docs/b8f7f83e-56cd-489f-a474-55ec325a2ba6/"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-link"
            >
              Schéma pluriannuel
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>
          </li>
          <li>
            <a
              href="https://docs.numerique.gouv.fr/docs/b8f7f83e-56cd-489f-a474-55ec325a2ba6/"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-link"
            >
              Plan 2025
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>
          </li>
          <li>
            <a
              href="https://docs.numerique.gouv.fr/docs/b8f7f83e-56cd-489f-a474-55ec325a2ba6/"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-link"
            >
              Bilan 2024
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>
          </li>
        </ul>
        <p>
          Cette déclaration d’accessibilité s’applique à{" "}
          <a href="/" className="fr-link">
            https://conseiller-numerique.gouv.fr
          </a>
          .
        </p>

        <section className="fr-mb-4w">
          <CallOut
            title="État de conformité"
            titleAs="h2"
            colorVariant="brown-caramel"
            classes={{ title: "fr-h6" }}
          >
            <strong>https://conseiller-numerique.gouv.fr</strong> est{" "}
            <strong>partiellement conforme</strong> avec le{" "}
            <abbr title="Référentiel général d'amélioration de l'accessibilité">
              RGAA
            </abbr>{" "}
            version 4.1.2, en raison des non-conformités énumérées
            ci-dessous.
          </CallOut>
        </section>

        <section
          aria-labelledby="resultats-tests-title"
          className="fr-mb-4w"
        >
          <h2 id="resultats-tests-title" className="fr-h6">
            Résultats des tests
          </h2>
          <p>
            L’audit de conformité, réalisé par Arya Access en septembre 2026,
            et le contre-audit, réalisé en octobre 2026, révèlent que sur
            l’échantillon du site audité{" "}
            <strong>96,49 % des critères du RGAA version 4.1.2</strong> sont
            respectés. Le taux moyen de conformité est de{" "}
            <strong>99,59 %</strong>.
          </p>
          <ul>
            <li>Nombre de critères applicables : 57</li>
            <li>Nombre de critères conformes : 55</li>
            <li>Nombre de critères non conformes : 2</li>
          </ul>
        </section>

        <section
          aria-labelledby="contenus-non-accessibles-title"
          className="fr-mb-4w"
        >
          <h2 id="contenus-non-accessibles-title" className="fr-h6">
            Contenus non accessibles
          </h2>
          <p>
            Les contenus listés ci-dessous ne sont pas accessibles pour les
            raisons suivantes.
          </p>
          <h3 className="fr-text--lg fr-mb-1w">Non conformité au RGAA</h3>
          <p>
            Malgré nos efforts, certains contenus restent inaccessibles.
            Liste des critères non conformes identifiés par l’audit :
          </p>
          <ul>
            {CRITERES_NON_CONFORMES.map((critere) => (
              <li key={critere}>{critere}</li>
            ))}
          </ul>
          <h3 className="fr-text--lg fr-mb-1w">
            Contenus non soumis à l’obligation d’accessibilité
          </h3>
          <ul>
            <li>
              Les fichiers disponibles dans des formats bureautiques publiés
              avant le 23 septembre 2018.
            </li>
            <li>
              Les contenus de tiers qui ne sont ni financés ni développés par
              l’organisme concerné et qui ne sont pas sous son contrôle.
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="etablissement-declaration-title"
          className="fr-mb-4w"
        >
          <h2 id="etablissement-declaration-title" className="fr-h6">
            Établissement de cette déclaration d’accessibilité
          </h2>
          <p>
            Cette déclaration a été établie le 25 septembre 2026 et mise à
            jour le 20 octobre 2026.
          </p>

          <h3 className="fr-text--lg fr-mb-1w">Environnement de test</h3>
          <p>
            Les vérifications de restitution ont été effectuées sur la base
            des combinaisons suivantes :
          </p>
          <ul>
            <li>NVDA 2026, Firefox 156</li>
            <li>Jaws 2025, Firefox 156</li>
            <li>VoiceOver, Safari</li>
          </ul>

          <h3 className="fr-text--lg fr-mb-1w">Technologies utilisées</h3>
          <p>
            L’accessibilité de conseiller-numerique.gouv.fr s’appuie sur les
            technologies suivantes :
          </p>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h3 className="fr-text--lg fr-mb-1w">
            Outils utilisés pour l’évaluation
          </h3>
          <ul>
            <li>WCAG Contrast checker (extension)</li>
            <li>Web Developer (extension)</li>
            <li>Headings Map (extension)</li>
            <li>Outils de développement du navigateur</li>
          </ul>

          <h3 className="fr-text--lg fr-mb-1w">
            Pages du site ayant fait l’objet de la vérification de conformité
          </h3>
          <ul>
            {PAGES_VERIFIEES.map((page) => (
              <li key={page.href}>{page.label}</li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="amelioration-contact-title"
          className="fr-mb-4w"
        >
          <h2 id="amelioration-contact-title" className="fr-h6">
            Amélioration et contact
          </h2>
          <p>
            Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
            pouvez contacter le responsable de conseiller-numerique.gouv.fr pour
            être orienté vers une alternative accessible ou obtenir le contenu
            sous une autre forme.
          </p>
          <Highlight className="fr-mb-3w" bodyAs="div">
            <ul className="fr-mb-0">
              <li>
                <strong>E-mail :</strong>{" "}
                <a
                  className="fr-link"
                  href="mailto:societe.numerique@anct.gouv.fr"
                >
                  societe.numerique@anct.gouv.fr
                </a>
              </li>
              <li>
                <strong>Adresse :</strong> 20 avenue de Ségur, 75007 Paris
              </li>
            </ul>
          </Highlight>
          <p>Nous essayons de répondre dans les 2 jours ouvrés.</p>
        </section>

        <section aria-labelledby="voie-recours-title" className="fr-mb-4w">
          <h2 id="voie-recours-title" className="fr-h6">
            Voie de recours
          </h2>
          <p>
            Cette procédure est à utiliser dans le cas suivant : vous avez
            signalé au responsable du site internet un défaut d’accessibilité
            qui vous empêche d’accéder à un contenu ou à un des services du
            portail et vous n’avez pas obtenu de réponse satisfaisante.
          </p>
          <p>Vous pouvez :</p>
          <ul>
            <li>
              Écrire un message au{" "}
              <a
                href="https://formulaire.defenseurdesdroits.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="fr-link"
              >
                Défenseur des droits
                <span className="fr-sr-only">
                  {" "}
                  (ouvre une nouvelle fenêtre)
                </span>
              </a>
            </li>
            <li>
              Contacter{" "}
              <a
                href="https://www.defenseurdesdroits.fr/saisir/delegues"
                target="_blank"
                rel="noopener noreferrer"
                className="fr-link"
              >
                le délégué du Défenseur des droits dans votre région
                <span className="fr-sr-only">
                  {" "}
                  (ouvre une nouvelle fenêtre)
                </span>
              </a>
            </li>
            <li>
              Envoyer un courrier par la poste (gratuit, ne pas mettre de
              timbre) :
              <br />
              Défenseur des droits
              <br />
              Libre réponse 71120 75342 Paris CEDEX 07
            </li>
          </ul>
        </section>

        <hr className="fr-hr" />
        <p className="fr-text--sm">
          Cette déclaration d’accessibilité a été créée le 25 septembre 2026
          grâce au{" "}
          <a
            href="https://betagouv.github.io/a11y-generateur-declaration/#create"
            target="_blank"
            rel="noopener noreferrer"
            className="fr-link"
          >
            Générateur de Déclaration d’Accessibilité
            <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
          </a>
          , sur la base de l’audit RGAA 4.1.2 réalisé par Arya Access le 21
          septembre 2026, et mise à jour le 20 octobre 2026 sur la base du
          contre-audit réalisé en octobre 2026.
        </p>
      </CarteTexte>
    </main>
  );
}
