import { fr } from "@codegouvfr/react-dsfr";
import styles from "./FormationInitialeSection.module.scss";

const ID_TITRE = "formation-initiale-titre";

export default function FormationInitialeSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`${styles.section} ${fr.cx("fr-pt-5w", "fr-pb-5w", "fr-pt-md-8w", "fr-pb-md-10w")}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <div className={styles.contenu}>
          <h2 id={ID_TITRE} className={`titre-h2 ${fr.cx("fr-mb-3w")}`}>
            Formation initiale
          </h2>
          <p className={`texte-body ${styles.texte} ${fr.cx("fr-mb-7w")}`}>
            Cette formation obligatoire dans le cadre du dispositif, est
            proposée à tout nouveau conseiller numérique entrant dans le
            dispositif. Adaptée à votre profil et votre expérience, elle vous
            permet d’acquérir les compétences nécessaires à l’exercice de vos
            fonctions.
          </p>

          <h3 className={`${styles.sousTitre} ${fr.cx("fr-mb-3w")}`}>
            Passage du CCP1
          </h3>
          <p className={`${styles.texteFonce} ${fr.cx("fr-mb-3w")}`}>
            Le passage du CCP1 du titre professionnel de médiateur numérique est
            la première étape de votre formation initiale. Pour cela, un
            parcours de formation en 175h uniquement vous est proposé selon
            votre profil et votre expérience. Les inscriptions ont lieu
            directement auprès de votre organisme de formation, qui vous
            recontactera pour définir avec vous le parcours le plus adapté et
            vous proposer un calendrier de formation.
          </p>
          <p
            className={`${styles.texteFonce} ${fr.cx("fr-text--bold", "fr-mb-3w")}`}
          >
            Inscriptions métropole : {""}
            <a
              href="https://fabrikmediationnumerique.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lien}
            >
              fabrikmediationnumerique.org
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>
          </p>
          <p
            className={`${styles.texteFonce} ${fr.cx("fr-text--bold", "fr-mb-3w")}`}
          >
            Inscriptions Outre-mer : {""}
            <a
              href="https://francilin.fillout.com/t/4fxb7jUa9gus"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lien}
            >
              accéder au formulaire
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>{" "}
          </p>

          <div
            className={`${styles.blocInscription} ${fr.cx("fr-py-4v", "fr-px-8v", "fr-mb-7w")}`}
          >
            <div className={styles.blocInscriptionTexte}>
              <p className={fr.cx("fr-m-0", "fr-text--bold")}>
                Les inscriptions s’effectuent directement sur la plateforme des
                organismes de formation « La Fabrik de la médiation numérique »
                :
              </p>
              <ol className={fr.cx("fr-m-0")}>
                <li>
                  Je clique sur « Inscription » et je réponds au questionnaire ;
                </li>
                <li>j’effectue le test de positionnement ;</li>
                <li>j’entre en formation.</li>
              </ol>
            </div>
            <img
              src="/images/formation-initiale-illustration.svg"
              alt=""
              className={styles.blocInscriptionImage}
            />
          </div>

          <h3 className={`${styles.titreNoir} ${fr.cx("fr-mb-3w")}`}>
            Les modules complémentaires
          </h3>
          <p className={`${styles.texteFonce} ${fr.cx("fr-mb-3w")}`}>
            Afin de vous permettre de personnaliser votre parcours, deux modules
            complémentaires de 7h ou 14h sont proposés au choix parmi 19
            thématiques.
          </p>
          <p
            className={`${styles.texteFonce} ${fr.cx("fr-text--bold", "fr-mb-3w")}`}
          >
            Les modalités d’inscription vous seront prochainement communiquées.
          </p>
          <p className={`${styles.texteFonce} ${fr.cx("fr-mb-0")}`}>
            <span className={fr.cx("fr-text--bold")}>
              Pour toute question sur les modules complémentaires :
            </span>{" "}
            <a
              href="https://aide.conseiller-numerique.gouv.fr/fr/article/formation-initiale-le-parcours-de-formation-14ryxwt/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lien}
            >
              je consulte la FAQ Formation
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
