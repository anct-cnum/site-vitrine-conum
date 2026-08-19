import { fr } from "@codegouvfr/react-dsfr";
import CarteAccompagnement from "@/components/molecules/CarteAccompagnement/CarteAccompagnement";
import styles from "./AccompagnementsSection.module.scss";
import {
  AVANTAGES_PARTICULIERS,
  AVANTAGES_PME_ASSOCIATIONS,
} from "./AccompagnementsSection.data";

const ID_TITRE = "accompagnement-titre";

export default function AccompagnementsSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`section-mobile ${styles.section}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <h2 id={ID_TITRE} className={`titre-h2 ${styles.titre}`}>
          En me formant auprès d'un conseiller numérique, je deviens autonome
        </h2>
        <p className={`${styles.intro} ${fr.cx("fr-text--lg")}`}>
          Les conseillers numériques accompagnent tous les publics. Chaque
          accompagnement est adapté à vos besoins, en rendez-vous individuel ou
          en atelier collectif.
        </p>

        <h3
          className={`${styles.sousTitre} ${fr.cx("fr-mt-6w", "fr-mb-4w", "fr-h4")}`}
        >
          Pour les particuliers
        </h3>
        <div className={`${styles.grille} ${fr.cx("fr-grid-row")}`}>
          {AVANTAGES_PARTICULIERS.map((avantage) => (
            <div key={avantage.desc} className={styles.colonne}>
              <CarteAccompagnement
                desc={avantage.desc}
                picto={avantage.picto}
              />
            </div>
          ))}
        </div>

        <h3
          className={`${styles.sousTitre} ${fr.cx("fr-mt-6w", "fr-mb-4w", "fr-h4")}`}
        >
          Pour PME et associations
        </h3>
        <div className={`${styles.grille} ${fr.cx("fr-grid-row")}`}>
          {AVANTAGES_PME_ASSOCIATIONS.map((avantage) => (
            <div key={avantage.desc} className={styles.colonne}>
              <CarteAccompagnement
                desc={avantage.desc}
                picto={avantage.picto}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
