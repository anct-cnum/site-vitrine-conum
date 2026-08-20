import type { ReactNode } from "react";
import { fr } from "@codegouvfr/react-dsfr";
import styles from "./CarteCategorie.module.scss";

type CarteCategorieProps = {
  picto: string | ReactNode;
  titre: string;
  texte: string;
};

export default function CarteCategorie({
  picto,
  titre,
  texte,
}: CarteCategorieProps) {
  return (
    <div className={`${styles.carte} ${fr.cx("fr-p-8v")}`}>
      {typeof picto === "string" ? (
        <img src={picto} alt="" aria-hidden="true" className={styles.picto} />
      ) : (
        <span aria-hidden="true" className={styles.pictoComposant}>
          {picto}
        </span>
      )}
      <div>
        <h3 className={`${styles.titre} ${fr.cx("fr-m-0", "fr-text--bold")}`}>
          {titre}
        </h3>
        <p className={`${styles.texte} ${fr.cx("fr-m-0")}`}>{texte}</p>
      </div>
    </div>
  );
}
