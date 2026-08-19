import { fr } from "@codegouvfr/react-dsfr";
import CarteOrientation from "@/components/molecules/CarteOrientation/CarteOrientation";
import styles from "./OrientationSection.module.scss";

const ID_TITRE = "orientation-titre";

export default function OrientationSection() {
  return (
    <section
      aria-labelledby={ID_TITRE}
      className={`section-mobile ${styles.section}`}
    >
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <h2 id={ID_TITRE} className={`titre-h2 ${styles.titre}`}>
          Conseiller numérique ou conseiller France services ?
        </h2>
        <p className={`${styles.texteIntro} ${fr.cx("fr-text--sm")}`}>
          Les deux métiers sont complémentaires. Voici comment les distinguer
          pour savoir vers qui vous tourner.
        </p>

        <div
          className={fr.cx("fr-grid-row", "fr-grid-row--gutters", "fr-mt-4w")}
        >
          <div className={fr.cx("fr-col-12", "fr-col-md-6")}>
            <CarteOrientation
              logo="/images/logo-conseiller-numerique.svg"
              titre="Le conseiller numérique"
              description="Pour vous rendre autonome et faire seul."
              questionsReponses={[
                {
                  question: "👉 Pour quoi faire ?",
                  reponse: "Apprendre à utiliser le numérique au quotidien.",
                },
                {
                  question: "👉 Sur quel sujet ?",
                  reponse:
                    "utiliser son smartphone, sa tablette, son ordinateur, protéger ses données personnelles, maitriser les réseaux sociaux, suivre la scolarité de ses enfants, etc.",
                },
                {
                  question: "👉 Comment ?",
                  reponse:
                    "En atelier collectif ou en accompagnement individuel.",
                },
              ]}
              ctaLabel="Trouver un conseiller numérique"
              ctaHref="https://cartographie.societenumerique.gouv.fr/?dispositif_programmes_nationaux=Conseillers+num%C3%A9riques&mtm_campaign=siteconum"
            />
          </div>

          <div className={fr.cx("fr-col-12", "fr-col-md-6")}>
            <CarteOrientation
              logo="/images/logo-france-services.svg"
              titre="Le conseiller France services"
              description="Pour résoudre un besoin administratif immédiat."
              questionsReponses={[
                {
                  question: "👉 Pour quoi faire ?",
                  reponse:
                    "Être accompagné pour réaliser une démarche administrative en ligne",
                },
                {
                  question: "👉 Sur quel sujet ?",
                  reponse:
                    "12 partenaires nationaux : impôts, CAF, France Travail, Assurance maladie, retraite, MSA, La Poste, Chèque énergie, France Rénov', France Titres, URSSAF, Point Justice.",
                },
                {
                  question: "👉 Comment ?",
                  reponse: "En aide ponctuelle et individuelle, sur place.",
                },
              ]}
              ctaLabel="Trouver maison France services"
              ctaHref="https://www.france-services.gouv.fr/#edit-address"
              sansBordureLogo
            />
          </div>
        </div>
      </div>
    </section>
  );
}
