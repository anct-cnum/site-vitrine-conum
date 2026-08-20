import type { ReactNode } from "react";
import { fr } from "@codegouvfr/react-dsfr";
import styles from "./CarteEtape.module.scss";

type CarteEtapeProps = {
  numero: number;
  titre: string;
  texte: ReactNode;
  orientation?: "horizontale" | "verticale";
};

export default function CarteEtape({
  numero,
  titre,
  texte,
  orientation = "horizontale",
}: CarteEtapeProps) {
  return (
    <div
      className={`${styles.carte} ${orientation === "verticale" ? styles.verticale : styles.horizontale}`}
    >
      <span
        className={`${styles.numero} ${fr.cx("fr-text--bold")}`}
        aria-hidden="true"
      >
        {numero}
      </span>
      <div>
        <h3 className={`${styles.titre} ${fr.cx("fr-text--bold")}`}>{titre}</h3>
        <p className={styles.texte}>{texte}</p>
      </div>
    </div>
  );
}
