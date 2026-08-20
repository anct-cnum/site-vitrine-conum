import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import CarteEtape from "@/components/molecules/CarteEtape/CarteEtape";
import styles from "./ObtentionLabelSection.module.scss";
import { ETAPES } from "./ObtentionLabelSection.data";

const ID_TITRE = "obtention-label-titre";

export default function ObtentionLabelSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`section-mobile ${styles.section}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <img
          src="/images/logo-conseiller-numerique-2.svg"
          alt=""
          aria-hidden="true"
          className={styles.icone}
        />
        <h2 id={ID_TITRE} className={`titre-h2 ${fr.cx("fr-mb-7w")}`}>
          Comment obtenir le label en 5 minutes
        </h2>
        <ol className={`${styles.liste} ${fr.cx("fr-raw-list")}`}>
          {ETAPES.map((etape, index) => (
            <li key={etape.titre} className={styles.item}>
              <CarteEtape
                numero={index + 1}
                titre={etape.titre}
                texte={etape.texte}
                orientation="verticale"
              />
              {index < ETAPES.length - 1 && (
                <span aria-hidden="true" className={styles.trait}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="1"
                    viewBox="0 0 27 1"
                    fill="none"
                    className={styles.traitSvg}
                  >
                    <path d="M0 0.5H26.5" stroke="#6A6AF4" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
        <Button
          priority="primary"
          className={fr.cx("fr-mt-7w")}
          linkProps={{
            href: "https://mon.inclusion-numerique.anct.gouv.fr/connexion-label",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        >
          Demander le label conseiller numérique
          <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
        </Button>
      </div>
    </section>
  );
}
