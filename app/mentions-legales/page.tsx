import CarteTexte from "@/components/organisms/CarteTexte/CarteTexte";

export default function MentionsLegalesPage() {
  return (
    <main id="content">
      <CarteTexte titleId="mentions-title">
        <h1 id="mentions-title" className="titre-h2">
          Mentions légales
        </h1>

        <section aria-labelledby="editeur-title" className="fr-mb-4w">
          <h2 id="editeur-title" className="fr-h6">
            Éditeur de la plateforme
          </h2>
          <p>
            <strong>
              <a className="fr-link" href="/">
                conseiller-numerique.gouv.fr
              </a>
            </strong>{" "}
            est édité au sein de l'Agence nationale de la cohésion des
            territoires (ANCT) située :
          </p>
          <address className="fr-mb-3w">
            <div>20 avenue de Ségur</div>
            <div>75007 Paris</div>
            <div>France</div>
          </address>
          <p>
            <strong>Téléphone :</strong>{" "}
            <a className="fr-link" href="tel:+33185586000">
              01 85 58 60 00
            </a>
          </p>
        </section>

        <section aria-labelledby="directeur-title" className="fr-mb-4w">
          <h2 id="directeur-title" className="fr-h6">
            Directeur de la publication
          </h2>
          <p>
            Le directeur de publication est Monsieur{" "}
            <strong>Henri PREVOST</strong>, Directeur général de l'ANCT.
          </p>
        </section>

        <section aria-labelledby="hebergeur-title" className="fr-mb-4w">
          <h2 id="hebergeur-title" className="fr-h6">
            Hébergement de la plateforme
          </h2>
          <p>La plateforme est hébergée par :</p>
          <address className="fr-mb-3w">
            <div>
              <strong>Scalingo</strong>
            </div>
            <div>9 rue de la Kruteneau</div>
            <div>67000 Strasbourg</div>
            <div>France</div>
          </address>
        </section>

        <section aria-labelledby="accessibilite-title" className="fr-mb-4w">
          <h3 className="fr-text--md fr-mt-3w" id="accessibilite-title">
            Signaler un dysfonctionnement
          </h3>
          <p>
            Si vous rencontrez un défaut d'accessibilité vous empêchant
            d'accéder à un contenu ou une fonctionnalité du site, merci de nous
            en faire part :{" "}
            <a className="fr-link" href="mailto:societe.numerique@anct.gouv.fr">
              societe.numerique@anct.gouv.fr
            </a>
          </p>
          <p>
            Si vous n'obtenez pas de réponse rapide de notre part, vous êtes en
            droit de faire parvenir vos doléances ou une demande de saisine au
            Défenseur des droits.
          </p>
        </section>
      </CarteTexte>
    </main>
  );
}
