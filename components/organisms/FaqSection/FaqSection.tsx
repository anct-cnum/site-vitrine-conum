import { fr } from "@codegouvfr/react-dsfr";
import Accordion from "@codegouvfr/react-dsfr/Accordion";
import styles from "./FaqSection.module.scss";
import { QUESTIONS } from "./FaqSection.data";

const ID_TITRE = "faq-titre";

export default function FaqSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`section-mobile ${styles.section} tmpLabelHidden`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <h2
          id={ID_TITRE}
          className={`titre-h2 ${styles.titre} ${fr.cx("fr-mb-6w")}`}
        >
          Questions fréquentes
        </h2>
        <div className={`${styles.groupe} ${fr.cx("fr-accordions-group")}`}>
          {QUESTIONS.map((q, index) => (
            <Accordion
              key={q.question}
              label={q.question}
              titleAs="h3"
              defaultExpanded={index === 0}
            >
              {q.reponse}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
