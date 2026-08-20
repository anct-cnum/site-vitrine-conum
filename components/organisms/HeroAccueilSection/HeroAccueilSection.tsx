import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import Image from "next/image";
import styles from "./HeroAccueilSection.module.scss";
import logoDispositif from "@/public/images/logo-conseiller-numerique.svg";
import illustrationMobile from "@/public/images/hero/hero-photo-mobile.svg";

const ID_TITRE = "hero-accueil-titre";

export default function HeroAccueilSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`${styles.banniere} ${fr.cx("fr-pt-5w", "fr-pb-5w", "fr-pt-md-6w", "fr-pb-md-8w")}`}
    >
      <div
        className={`${styles.contenu} ${fr.cx("fr-container", "fr-px-4w", "fr-px-md-0")}`}
      >
        <Image
          src={logoDispositif}
          alt="Conseillers numériques France Services"
          className={styles.logo}
          priority
          height={128}
        />
        <h1
          id={ID_TITRE}
          className={`titre-h1 ${styles.titre} ${fr.cx("fr-m-0")}`}
        >
          Les conseillers numériques m'accompagnent vers l'autonomie numérique
        </h1>
        <p className={`${styles.accroche} ${fr.cx("fr-m-0")}`}>
          Les conseillers numériques accompagnent chaque jour les Français
          pour gagner en autonomie dans leurs usages du numérique :{" "}
          <span className={fr.cx("fr-text--bold")}>
            4,5 millions d'accompagnements
          </span>{" "}
          ont déjà été réalisés dans le cadre de ce dispositif.
        </p>
        <Button
          priority="primary"
          linkProps={{
            href: "https://cartographie.societenumerique.gouv.fr/?dispositif_programmes_nationaux=Conseillers+num%C3%A9riques&mtm_campaign=siteconum",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        >
          Trouver un conseiller numérique
          <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
        </Button>
        <Image
          src={illustrationMobile}
          alt=""
          aria-hidden="true"
          className={styles.illustrationMobile}
        />
      </div>
    </section>
  );
}
