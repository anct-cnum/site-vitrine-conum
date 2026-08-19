import { fr } from "@codegouvfr/react-dsfr";
import Download from "@codegouvfr/react-dsfr/Download";
import styles from "./DocumentsSection.module.scss";
import { DOCUMENTS } from "./DocumentsSection.data";

const ID_TITRE = "documents-titre";

export default function DocumentsSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`section-mobile ${styles.section}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <h2 id={ID_TITRE} className="titre-h2">
          Charte institutionnelle, identité visuelle
        </h2>
        <ul className={styles.liste}>
          {DOCUMENTS.map((document) => (
            <li key={document.titre} className={styles.document}>
              <h3 className={styles.sousTitre}>{document.titre}</h3>
              <p className={`texte-body ${styles.texte}`}>{document.texte}</p>
              {document.fichier && (
                <Download
                  label={document.fichier.label}
                  details={document.fichier.details}
                  linkProps={{ href: document.fichier.href }}
                  classes={{ link: styles.lien }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
