import type { ReactNode } from "react";
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
    <div className={styles.carte}>
      {typeof picto === "string" ? (
        <img src={picto} alt="" aria-hidden="true" className={styles.picto} />
      ) : (
        <span aria-hidden="true" className={styles.pictoComposant}>
          {picto}
        </span>
      )}
      <div>
        <h3 className={styles.titre}>{titre}</h3>
        <p className={styles.texte}>{texte}</p>
      </div>
    </div>
  );
}
