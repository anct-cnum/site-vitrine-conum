import { fr } from "@codegouvfr/react-dsfr";
import styles from "./CarteAccompagnement.module.scss";

type CarteAccompagnementProps = {
  desc: string;
  picto: string;
};

export default function CarteAccompagnement({
  desc,
  picto,
}: CarteAccompagnementProps) {
  return (
    <div className={styles.carte}>
      <img src={picto} alt="" aria-hidden="true" className={styles.picto} />
      <p className={`${styles.description} ${fr.cx("fr-text--sm", "fr-mb-0")}`}>
        {desc}
      </p>
    </div>
  );
}
