import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
  id: string;
  image: { src: string; alt: string };
  titre: string;
  texte?: string;
  cta?: { label: string; href: string; externe?: boolean };
  position?: "image-titre" | "titre-image";
};

export default function HeroSection({
  id,
  image,
  titre,
  texte,
  cta,
  position = "image-titre",
}: HeroSectionProps) {
  const imageElement = (
    <img src={image.src} alt={image.alt} className={styles.image} />
  );

  const titreElement = (
    <h1 id={id} className={`titre-h1 ${styles.titre} ${fr.cx("fr-mb-0")}`}>
      {titre}
    </h1>
  );

  return (
    <section
      aria-labelledby={id}
      className={`section-mobile ${styles.section}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <div className={styles.contenu}>
          {position === "image-titre" ? (
            <>
              {imageElement}
              {titreElement}
            </>
          ) : (
            <>
              {titreElement}
              {imageElement}
            </>
          )}
          {texte && <p className={styles.texte}>{texte}</p>}
          {cta && (
            <Button
              priority="primary"
              linkProps={
                cta.externe === false
                  ? { href: cta.href }
                  : {
                      href: cta.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
              }
            >
              {cta.label}
              {cta.externe !== false && (
                <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
