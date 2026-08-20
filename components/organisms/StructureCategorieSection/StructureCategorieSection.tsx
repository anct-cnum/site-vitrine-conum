import { fr } from "@codegouvfr/react-dsfr";
import CarteCategorie from "@/components/molecules/CarteCategorie/CarteCategorie";
import styles from "./StructureCategorieSection.module.scss";
import { CATEGORIES } from "./StructureCategorieSection.data";

const ID_TITRE = "structure-categorie-titre";

export default function StructureCategorieSection() {
  return (
    <section aria-labelledby={ID_TITRE} className={styles.section}>
      <div className={`${styles.conteneur} ${fr.cx("fr-container")}`}>
        <div className={styles.contenu}>
          <h2 id={ID_TITRE} className={`titre-h2 ${fr.cx("fr-mb-5w")}`}>
            Pour quelles structures
          </h2>
          <p className={`texte-body ${styles.texte}`}>
            Le label s'adresse aujourd'hui aux structures qui emploient ou ont
            employé un conseiller numérique dans le cadre du dispositif,
            qu'elles soient publiques ou privées.
          </p>
          <div
            className={`${styles.grille} ${fr.cx("fr-mt-5w", "fr-mb-5w")}`}
          >
            {CATEGORIES.map((categorie) => (
              <CarteCategorie
                key={categorie.titre}
                picto={categorie.picto}
                titre={categorie.titre}
                texte={categorie.texte}
              />
            ))}
          </div>
          <p className={`texte-body ${styles.texte}`}>
            Votre structure n'a pas bénéficié du dispositif Conseiller Numérique
            ? L'ouverture du label à toutes les structures de médiation
            numérique est prévue dans un second temps.
          </p>
        </div>
      </div>
    </section>
  );
}
