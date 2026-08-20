import type { ReactNode } from "react";
import styles from "./CarteTexte.module.scss";

type CarteTexteProps = {
  titleId: string;
  as?: "article" | "div";
  children: ReactNode;
};

export default function CarteTexte({
  titleId,
  as: HtmlTag = "article",
  children,
}: CarteTexteProps) {
  return (
    <div className={styles.conteneur}>
      <HtmlTag aria-labelledby={titleId} className={styles.carte}>
        {children}
      </HtmlTag>
    </div>
  );
}
