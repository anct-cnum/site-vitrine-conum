import { fr } from "@codegouvfr/react-dsfr";
import ListePicto from "@/components/molecules/ListePicto/ListePicto";
import styles from "./ConditionsLabelSection.module.scss";
import { CONDITIONS } from "./ConditionsLabelSection.data";

const ID_TITRE = "conditions-label-titre";

export default function ConditionsLabelSection() {
  return (
    <section aria-labelledby={ID_TITRE} className={styles.section}>
      <div className={styles.colonneImage}>
        <img
          src="/images/condition-label-illustration.svg"
          alt=""
          className={styles.image}
        />
      </div>
      <div
        className={`${styles.colonneContenu} ${fr.cx("fr-py-5w", "fr-px-3w", "fr-py-md-7w", "fr-px-md-13w")}`}
      >
        <div className={styles.contenu}>
          <h2 id={ID_TITRE} className={`titre-h2 ${styles.titre}`}>
            Les 3 conditions pour obtenir le label
          </h2>
          <p className={`texte-body ${styles.sousTitre}`}>
            Le label repose sur trois engagements pris par la structure.
          </p>
          <ListePicto items={CONDITIONS} />
        </div>
      </div>
    </section>
  );
}
