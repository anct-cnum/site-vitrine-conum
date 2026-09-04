import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import CarteEtape from "@/components/molecules/CarteEtape/CarteEtape";
import styles from "./RecrutementSection.module.scss";
import { ETAPES } from "./RecrutementSection.data";

const ID_TITRE = "candidature-titre";

export default function RecrutementSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`${styles.section} ${fr.cx("fr-pt-5w", "fr-pb-5w", "fr-pt-md-8w", "fr-pb-md-10w")}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <h2 id={ID_TITRE} className={`titre-h2 ${fr.cx("fr-mb-3w")}`}>
          Le recrutement en 5 étapes
        </h2>
        <p className={`texte-body ${styles.sousTexte} ${fr.cx("fr-mb-5w")}`}>
          Vous candidatez sur la plateforme nationale dédiée. Le système met
          votre profil en relation avec les structures d'accueil dont les
          besoins correspondent à vos attentes.
        </p>
        <ol
          className={`${styles.liste} ${fr.cx("fr-raw-list", "fr-p-0", "fr-m-0")}`}
        >
          {ETAPES.map((etape, index) => (
            <li key={etape.titre}>
              <CarteEtape
                numero={index + 1}
                titre={etape.titre}
                texte={etape.texte}
              />
            </li>
          ))}
        </ol>
        <Button
          priority="primary"
          className={fr.cx("fr-mt-5w")}
          linkProps={{
            href: "https://candidature.conseiller-numerique.gouv.fr/candidature-conseiller",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        >
          Je postule
          <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
        </Button>
      </div>
    </section>
  );
}
