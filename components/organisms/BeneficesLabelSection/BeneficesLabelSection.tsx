import { fr } from "@codegouvfr/react-dsfr";
import ListePicto from "@/components/molecules/ListePicto/ListePicto";
import styles from "./BeneficesLabelSection.module.scss";
import { BENEFICES } from "./BeneficesLabelSection.data";

const ID_TITRE = "benefices-label-titre";

export default function BeneficesLabelSection() {
  return (
    <section aria-labelledby={ID_TITRE} className={styles.section}>
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <h2 id={ID_TITRE} className={`titre-h2 ${fr.cx("fr-mb-5w")}`}>
          Ce que le label apporte à votre structure
        </h2>
        <div className={styles.carre}>
          <ListePicto items={BENEFICES} espacement="1.5rem" />
        </div>
      </div>
    </section>
  );
}
