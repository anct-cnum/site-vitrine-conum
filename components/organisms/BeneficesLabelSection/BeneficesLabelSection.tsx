import { fr } from "@codegouvfr/react-dsfr";
import ListePicto from "@/components/molecules/ListePicto/ListePicto";
import styles from "./BeneficesLabelSection.module.scss";
import { BENEFICES } from "./BeneficesLabelSection.data";

const ID_TITRE = "benefices-label-titre";

export default function BeneficesLabelSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`${styles.section} ${fr.cx("fr-pt-5w", "fr-pb-5w", "fr-pt-md-8w", "fr-pb-md-10w")}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <h2 id={ID_TITRE} className={`titre-h2 ${fr.cx("fr-mb-5w")}`}>
          Ce que le label apporte à votre structure
        </h2>
        <div className={`${styles.carre} ${fr.cx("fr-py-5w", "fr-px-7w")}`}>
          <ListePicto items={BENEFICES} espacement="1.5rem" />
        </div>
      </div>
    </section>
  );
}
