import CarteTexte from "@/components/organisms/CarteTexte/CarteTexte";
import CallOut from "@codegouvfr/react-dsfr/CallOut";
import Highlight from "@codegouvfr/react-dsfr/Highlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Déclaration d'acessibilité — Conseiller Numérique",
  description: "Déclaration d'accessibilité du site Conseiller Numérique",
  alternates: {
    canonical: "/accessibilite",
  },
  openGraph: {
    title: "Déclaration d'acessibilité — Conseiller Numérique",
    description: "Déclaration d'accessibilité du site Conseiller Numérique",
    locale: "fr_FR",
    type: "website",
  },
};

export default function AccessibilitePage() {
  return (
    <main id="content">
      <CarteTexte titleId="declaration-accessibilite-title">
        <h1 id="declaration-accessibilite-title" className="titre-h2">
          Déclaration d'accessibilité
        </h1>

        <p>Établie le 20 août 2026.</p>
        <p>
          L'Agence nationale de la cohésion des territoires s'engage à rendre
          son service accessible, conformément à l'article 47 de la loi n°
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
          Cette déclaration d'accessibilité s'applique à{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="fr-link"
          >
            https://conseiller-numerique.gouv.fr
            <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
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
            <strong>non conforme</strong> avec le{" "}
            <abbr title="Référentiel général d'amélioration de l'accessibilité">
              RGAA
            </abbr>
            . Le site n'a encore pas été audité.
          </CallOut>
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
          <h3 className="fr-text--lg fr-mb-1w">Non conformité</h3>
          <p>Malgré nos efforts, certains contenus sont inaccessibles</p>
        </section>

        <section
          aria-labelledby="etablissement-declaration-title"
          className="fr-mb-4w"
        >
          <h2 id="etablissement-declaration-title" className="fr-h6">
            Établissement de cette déclaration d'accessibilité
          </h2>
          <p>Cette déclaration a été établie le 20 août 2026.</p>
          <h3 className="fr-text--lg fr-mb-1w">Technologies utilisées</h3>
          <p>
            L'accessibilité de conseiller-numerique.gouv.fr s'appuie sur les
            technologies suivantes :
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
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
            Si vous n'arrivez pas à accéder à un contenu ou à un service, vous
            pouvez contacter le responsable de conseiller-numerique.gouv.fr pour
            être orienté vers une alternative accessible ou obtenir le contenu
            sous une autre forme.
          </p>
          <Highlight className="fr-mb-3w" bodyAs="div">
            <p className="fr-mb-0">
              <strong>E-mail :</strong>{" "}
              <a
                className="fr-link"
                href="mailto:societe.numerique@anct.gouv.fr"
              >
                societe.numerique@anct.gouv.fr
              </a>
            </p>
            <p className="fr-mb-0">
              <strong>Adresse :</strong> 20 avenue de Ségur, 75007 Paris
            </p>
          </Highlight>
          <p>Nous essayons de répondre dans les 2 jours ouvrés.</p>
        </section>

        <section aria-labelledby="voie-recours-title" className="fr-mb-4w">
          <h2 id="voie-recours-title" className="fr-h6">
            Voie de recours
          </h2>
          <p>
            Cette procédure est à utiliser dans le cas suivant : vous avez
            signalé au responsable du site internet un défaut d'accessibilité
            qui vous empêche d'accéder à un contenu ou à un des services du
            portail et vous n'avez pas obtenu de réponse satisfaisante.
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
          Cette déclaration d'accessibilité a été créé le 20 août 2026 grâce au{" "}
          <a
            href="https://betagouv.github.io/a11y-generateur-declaration/#create"
            target="_blank"
            rel="noopener noreferrer"
            className="fr-link"
          >
            Générateur de Déclaration d'Accessibilité
            <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
          </a>
          .
        </p>
      </CarteTexte>
    </main>
  );
}
