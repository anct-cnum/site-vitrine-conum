import styles from "./ListePicto.module.scss";

type Item = {
  icone: string;
  titre: string;
  texte: string;
};

type ListePictoProps = {
  items: Item[];
};

export default function ListePicto({ items }: ListePictoProps) {
  return (
    <ul className={styles.liste}>
      {items.map((item) => (
        <li key={item.titre} className={styles.item}>
          <img
            src={item.icone}
            alt=""
            aria-hidden="true"
            className={styles.icone}
          />
          <div>
            <h3 className={styles.itemTitre}>{item.titre}</h3>
            <p className={styles.itemTexte}>{item.texte}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
