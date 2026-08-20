import { fr } from "@codegouvfr/react-dsfr";
import CarteVolet from "@/components/molecules/CarteVolet/CarteVolet";
import styles from "./OffresFormationSection.module.scss";
import { FORMATIONS } from "./OffresFormationSection.data";
import Button from "@codegouvfr/react-dsfr/Button";

const ID_TITRE = "offres-formation-titre";

export default function OffresFormationSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={fr.cx("fr-pt-5w", "fr-pb-5w", "fr-pt-md-8w", "fr-pb-md-10w")}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <div className={styles.contenu}>
          <h2
            id={ID_TITRE}
            className={`titre-h2 ${styles.colonneTexte} ${fr.cx("fr-mb-5w")}`}
          >
            L’offre de formation à destination des conseillers numériques
          </h2>
          <p
            className={`texte-body ${styles.texte} ${styles.colonneTexte} ${fr.cx("fr-mb-0")}`}
          >
            L’offre de formation du dispositif Conseiller numérique se compose
            de deux volets complémentaires : la formation initiale et la
            formation continue. Les inscriptions s’effectuent directement sur
            les sites internet des organismes de formation.
          </p>

          <div className={`${styles.grilleVolets} ${fr.cx("fr-my-7w")}`}>
            {FORMATIONS.map((formation) => (
              <CarteVolet
                key={formation.entete}
                entete={formation.entete}
                titre={formation.titre}
                texte={formation.texte}
                couleurFond={formation.couleurFond}
                organismesFormation={formation.organismesFormation}
              />
            ))}
          </div>

          <p
            className={`texte-body ${styles.texte} ${styles.colonneTexte} ${fr.cx("fr-mb-0")}`}
          >
            Depuis le 13 juillet 2025, le titre professionnel « Médiateur
            numérique » remplace officiellement le titre « Responsable d’Espace
            de Médiation Numérique » (REMN).
          </p>
          <p
            className={`texte-body ${styles.texte} ${styles.colonneTexte} ${fr.cx("fr-mt-4v", "fr-mb-0")}`}
          >
            Créé en 2019, le titre REMN constituait la base de la formation
            des conseillers numériques dès le lancement du dispositif. La
            formation initiale préparait à l’obtention du CCP1 du titre REMN,
            et les conseillers pouvaient également suivre une formation
            menant à l’obtention du titre complet.
          </p>
          <div className={styles.colonneTexte}>
            <Button priority="secondary" className={fr.cx("fr-mt-4v")}>
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
