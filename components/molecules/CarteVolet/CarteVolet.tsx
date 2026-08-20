import type { CSSProperties, ReactNode } from "react";
import { fr } from "@codegouvfr/react-dsfr";
import styles from "./CarteVolet.module.scss";

export type OrganismeFormation = {
  nom: string;
  zone: string;
};

type CarteVoletProps = {
  entete: string;
  titre: string;
  texte: ReactNode;
  couleurFond: string;
  organismesFormation: OrganismeFormation[];
};

export default function CarteVolet({
  entete,
  titre,
  texte,
  couleurFond,
  organismesFormation,
}: CarteVoletProps) {
  return (
    <div
      className={styles.carte}
      style={{ "--couleur-fond": `var(${couleurFond})` } as CSSProperties}
    >
      <div
        className={`${styles.entete} ${fr.cx("fr-py-3v", "fr-px-6v", "fr-text--bold")}`}
      >
        {entete}
      </div>
      <div
        className={`${styles.contenu} ${fr.cx("fr-pt-6v", "fr-px-6v", "fr-pb-8v")}`}
      >
        <h3 className={`${styles.titre} ${fr.cx("fr-m-0", "fr-text--bold")}`}>
          {titre}
        </h3>
        <p className={fr.cx("fr-m-0")}>{texte}</p>
        <div>
          <p className={`${styles.organismesTitre} ${fr.cx("fr-m-0")}`}>
            Organismes de formation
          </p>
          <ul
            className={`${styles.organismesListe} ${fr.cx("fr-m-0", "fr-p-0")}`}
          >
            {organismesFormation.map((organisme) => (
              <li key={organisme.nom}>
                <strong>{organisme.nom}</strong> {organisme.zone}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
