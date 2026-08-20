import type { CSSProperties, ReactNode } from "react";
import styles from "./ListePicto.module.scss";

type Item = {
  icone: string | ReactNode;
  titre: string;
  texte: string;
};

type ListePictoProps = {
  items: Item[];
  espacement?: string;
};

export default function ListePicto({ items, espacement }: ListePictoProps) {
  return (
    <ul
      className={styles.liste}
      style={{ "--espacement-item": espacement } as CSSProperties}
    >
      {items.map((item) => (
        <li key={item.titre} className={styles.item}>
          {typeof item.icone === "string" ? (
            <img
              src={item.icone}
              alt=""
              aria-hidden="true"
              className={styles.icone}
            />
          ) : (
            <span aria-hidden="true" className={styles.iconeComposant}>
              {item.icone}
            </span>
          )}
          <div>
            <h3 className={styles.itemTitre}>{item.titre}</h3>
            <p className={styles.itemTexte}>{item.texte}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
