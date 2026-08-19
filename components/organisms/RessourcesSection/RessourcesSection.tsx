import { fr } from "@codegouvfr/react-dsfr";
import Tile from "@codegouvfr/react-dsfr/Tile";
import styles from "./RessourcesSection.module.scss";
import { RESSOURCES } from "./RessourcesSection.data";

const ID_TITRE = "ressources-reseau-titre";

export default function RessourcesSection() {
  return (
    <section aria-labelledby={ID_TITRE} className={styles.section}>
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <img
          src="/images/ressources-illustration.svg"
          alt=""
          aria-hidden="true"
          className={styles.illustration}
        />
        <h2 id={ID_TITRE} className={styles.titre}>
          Ressources du réseau
        </h2>
        <p className={styles.texte}>
          Les outils et ressources accessibles aux conseillers numériques et aux
          structures labellisées.
        </p>
        <div className={`${styles.grille} ${fr.cx("fr-grid-row")}`}>
          {RESSOURCES.map((ressource) => (
            <div
              key={ressource.titre}
              className={`${styles.colonne} ${fr.cx("fr-col-12", "fr-col-md-4")}`}
            >
              <Tile
                title={ressource.titre}
                desc={ressource.description}
                imageUrl={ressource.icone}
                imageAlt=""
                noBorder
                detail={
                  <a
                    href={ressource.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.lien}
                  >
                    Découvrir
                    <span className="fr-sr-only">
                      {" "}
                      (ouvre une nouvelle fenêtre)
                    </span>
                  </a>
                }
                classes={{
                  root: styles.tile,
                  content: styles.tileContenu,
                  title: styles.tileTitre,
                  desc: styles.tileTexte,
                  img: styles.tileIcon,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
