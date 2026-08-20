import { fr } from "@codegouvfr/react-dsfr";
import styles from "./FormationContinueSection.module.scss";

const ID_TITRE = "formation-continue-titre";

export default function FormationContinueSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={fr.cx("fr-pt-5w", "fr-pb-5w", "fr-pt-md-8w", "fr-pb-md-10w")}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <div className={styles.contenu}>
          <h2 id={ID_TITRE} className={`titre-h2 ${fr.cx("fr-mb-3w")}`}>
            La formation continue des conseillers numériques
          </h2>

          <p className={`${styles.texte} ${fr.cx("fr-mb-3w")}`}>
            Depuis 2024, les conseillers numériques ont accès à un catalogue de{" "}
            <strong>19 modules de formation thématiques</strong> courts, leur
            permettant de renforcer leurs compétences selon leurs missions et
            besoins. Ces modules abordent des sujets variés tels que la
            parentalité numérique, la cybersécurité, l’intelligence
            artificielle, l’accompagnement des publics en situation de handicap
            ou encore le numérique responsable.
          </p>

          <p className={`${styles.texte} ${fr.cx("fr-mb-3w")}`}>
            L’État prend en charge{" "}
            <strong>
              un module obligatoire par conseiller et par année civile
            </strong>
            . Les conseillers admis en formation initiale après 2024 doivent
            suivre <strong>deux modules thématiques</strong> au cours de l’année
            suivant leur entrée dans le dispositif.
          </p>

          <p className={`${styles.texte} ${fr.cx("fr-mb-3w")}`}>
            <strong>
              Pour en savoir plus sur les règles de suivi de la formation
              continue, consulter :{" "}
            </strong>
            <a
              href="https://aide.conseiller-numerique.gouv.fr/fr/article/formation-continue-obligatoire-combien-de-modules-thematiques-doit-suivre-un-conseiller-numerique-1e3zehu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lien}
            >
              cet article de notre FAQ
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>{" "}
          </p>

          <p className={`${styles.texte} ${fr.cx("fr-mb-3w")}`}>
            L’organisation de cette offre est assurée au niveau national par{" "}
            <a
              href="https://lamednum.coop/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lien}
            >
              La Mednum
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>{" "}
            , en collaboration avec des organismes de formation régionaux
            partenaires.
          </p>

          <p className={`${styles.texte} ${fr.cx("fr-mb-3w")}`}>
            <strong>Inscriptions : </strong>
            <a
              href="https://lamednum.coop/formation/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lien}
            >
              https://lamednum.coop/formation/
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>{" "}
          </p>

          <p className={`${styles.texte} ${fr.cx("fr-mb-3w")}`}>
            Si vous souhaitez suivre le module Aidants Connect, le calendrier
            des sessions vous sera partagé une fois l’habilitation de votre
            structure obtenue. Vous pouvez entamer les démarches avant la
            réception de votre convocation pour la préparation au CCP1, mais
            devrez attendre cette convocation pour vous inscrire à une session
            de formation.
          </p>

          <p
            className={`${styles.texte} ${styles.paragrapheEtendu} ${fr.cx("fr-mb-0")}`}
          >
            <strong>Pour obtenir l’habilitation Aidants Connect : </strong>
            <a
              href="https://aidantsconnect.beta.gouv.fr/habilitation"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lien}
            >
              https://aidantsconnect.beta.gouv.fr/habilitation
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
