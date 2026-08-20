import { fr } from "@codegouvfr/react-dsfr";
import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./BlocTexteImageSection.module.scss";

type BlocTexteImageSectionProps = {
  id: string;
  titre: string;
  description: string[];
  ctaLabel?: string;
  ctaHref?: string;
  img: { src: string; alt: string };
  position?: "gauche" | "droite";
  couleurFond?: string;
  imgTailleFixe?: boolean;
  imageFlexible?: boolean;
  titreUneLigne?: boolean;
  ctaExterne?: boolean;
};

export default function BlocTexteImageSection({
  id,
  titre,
  description,
  ctaLabel,
  ctaHref,
  img,
  position = "droite",
  couleurFond,
  imgTailleFixe = false,
  imageFlexible = false,
  titreUneLigne = false,
  ctaExterne = true,
}: BlocTexteImageSectionProps) {
  const cta = ctaLabel && ctaHref ? { label: ctaLabel, href: ctaHref } : null;

  return (
    <section
      aria-labelledby={id}
      className={`section-mobile ${styles.section}`}
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
            <h2
              id={id}
              className={`titre-h2 ${styles.titre} ${titreUneLigne ? styles.titreUneLigne : ""}`}
            >
              {titre}
            </h2>
            {description.map((paragraphe) => (
              <p
                key={paragraphe}
                className={`texte-body ${styles.texte} ${fr.cx("fr-text--regular")}`}
              >
                {paragraphe}
              </p>
            ))}
            {cta && (
              <div>
                <Button
                  linkProps={
                    ctaExterne
                      ? {
                          href: cta.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { href: cta.href }
                  }
                >
                  {cta.label}
                  {ctaExterne && (
                    <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
                  )}
                </Button>
              </div>
            )}
          </div>

          <div
            className={`${styles.colonneImage} ${imageFlexible ? styles.colonneImageFlexible : ""} ${fr.cx("fr-col-12", "fr-col-md-6")}`}
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
