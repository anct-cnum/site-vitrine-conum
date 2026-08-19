import { fr } from "@codegouvfr/react-dsfr";
import ListePicto from "@/components/molecules/ListePicto/ListePicto";
import styles from "./ProgrammeSection.module.scss";
import { ITEMS } from "./ProgrammeSection.data";

const ID_TITRE = "programme-titre";

export default function ProgrammeSection() {
  return (
    <section aria-labelledby={ID_TITRE} className={styles.section}>
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <div
          className={`${styles.grille} ${fr.cx("fr-grid-row", "fr-grid-row--middle")}`}
        >
          <div
            className={`${styles.colonneContenu} ${fr.cx("fr-col-12", "fr-col-md-6")}`}
          >
            <h2
              id={ID_TITRE}
              className={`titre-h2 ${styles.titre} ${fr.cx("fr-mb-5w")}`}
            >
              Le programme en 3 étapes
            </h2>
            <ListePicto items={ITEMS} />
          </div>

          <div
            className={`${styles.colonneImage} ${fr.cx("fr-col-12", "fr-col-md-6")}`}
          >
            <img
              src="/images/devenir-conseiller-illustration.svg"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
