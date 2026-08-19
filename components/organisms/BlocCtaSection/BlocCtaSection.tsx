import { fr } from "@codegouvfr/react-dsfr";
import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./BlocCtaSection.module.scss";

type BlocCtaSectionProps = {
  id: string;
  titre: string;
  description: string[];
  ctaLabel: string;
  ctaHref: string;
  img: { src: string; alt: string };
  position?: "gauche" | "droite";
  couleurFond?: string;
  imgTailleFixe?: boolean;
};

export default function BlocCtaSection({
  id,
  titre,
  description,
  ctaLabel,
  ctaHref,
  img,
  position = "droite",
  couleurFond,
  imgTailleFixe = false,
}: BlocCtaSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={styles.section}
      style={
        couleurFond ? { backgroundColor: `var(${couleurFond})` } : undefined
      }
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <div
          className={`${styles.grille} ${position === "gauche" ? styles.inverse : ""} ${fr.cx("fr-grid-row", "fr-grid-row--middle")}`}
        >
          <div
            className={`${styles.colonneContenu} ${fr.cx("fr-col-12", "fr-col-md-5")}`}
          >
            <h2 id={id} className={styles.titre}>
              {titre}
            </h2>
            {description.map((paragraphe) => (
              <p key={paragraphe} className={styles.texte}>
                {paragraphe}
              </p>
            ))}
            <div>
              <Button
                linkProps={{
                  href: ctaHref,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }}
              >
                {ctaLabel}
                <span className="fr-sr-only">
                  {" "}
                  (ouvre une nouvelle fenêtre)
                </span>
              </Button>
            </div>
          </div>

          <div
            className={`${styles.colonneImage} ${fr.cx("fr-col-12", "fr-col-md-6")}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`${styles.img} ${imgTailleFixe ? styles.imgTailleFixe : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
