import { fr } from "@codegouvfr/react-dsfr";
import styles from "./CarteOrientation.module.scss";
import { Button } from "@codegouvfr/react-dsfr/Button";

type QuestionReponse = { question: string; reponse: string };

type CarteOrientationProps = {
  logo: string;
  titre: string;
  description: string;
  questionsReponses: QuestionReponse[];
  ctaLabel: string;
  ctaHref: string;
  sansBordureLogo?: boolean;
};

export default function CarteOrientation({
  logo,
  titre,
  description,
  questionsReponses,
  ctaLabel,
  ctaHref,
  sansBordureLogo,
}: CarteOrientationProps) {
  return (
    <article className={styles.carte}>
      <div
        className={`${styles.logoCarre} ${sansBordureLogo ? styles.sansBordure : ""} ${fr.cx("fr-mb-4w")}`}
      >
        <img src={logo} alt="" aria-hidden="true" className={styles.logo} />
      </div>

      <h3 className={`${styles.titre} ${fr.cx("fr-h4", "fr-mb-0")}`}>
        {titre}
      </h3>
      <p className={`${styles.description} ${fr.cx("fr-text--sm")}`}>
        {description}
      </p>

      <dl className={`${styles.questionsReponses} ${fr.cx("fr-pl-0")}`}>
        {questionsReponses.map((qr) => (
          <div key={qr.question} className={fr.cx("fr-mb-2w")}>
            <dt
              className={fr.cx(
                "fr-text--md",
                "fr-text--bold",
                "fr-mb-0",
                "fr-pb-1w",
              )}
            >
              {qr.question}
            </dt>
            <dd
              className={fr.cx(
                "fr-text--md",
                "fr-text--regular",
                "fr-m-0",
                "fr-pl-0",
              )}
            >
              {qr.reponse}
            </dd>
          </div>
        ))}
      </dl>

      <div className={styles.pied}>
        <Button
          linkProps={{
            href: ctaHref,
            target: "_blank",
            rel: "noopener noreferrer",
          }}
          priority="secondary"
        >
          {ctaLabel}
          <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
        </Button>
      </div>
    </article>
  );
}
