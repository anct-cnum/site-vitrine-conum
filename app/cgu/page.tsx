import CarteTexte from "@/components/organisms/CarteTexte/CarteTexte";
import Table from "@codegouvfr/react-dsfr/Table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Conditions générales d’utilisation et données personnelles — Conseiller Numérique",
  description:
    "Version accessible des conditions générales d’utilisation et de la notice de traitement des données personnelles de la plateforme Conseiller Numérique France Services.",
  alternates: {
    canonical: "/cgu",
  },
  openGraph: {
    title:
      "Conditions générales d’utilisation et données personnelles — Conseiller Numérique",
    description:
      "Version accessible des conditions générales d’utilisation et de la notice de traitement des données personnelles de la plateforme Conseiller Numérique France Services.",
    locale: "fr_FR",
    type: "website",
  },
};

const DUREES_CONSERVATION = [
  [
    "Données relatives aux personnes postulant au poste de conseiller numérique",
    "30 mois à compter de la réception du mail de confirmation",
  ],
  [
    "Données relatives aux membres, personnels ou agents des structures",
    "30 mois à compter de la réception du mail de confirmation",
  ],
  [
    "Données d’hébergeur",
    "1 an, conformément au décret n°2011-219 du 25 février 2011.",
  ],
  [
    "Cookies",
    "Dès le retrait du consentement ou dans un délai de 13 mois, conformément aux recommandations de la CNIL",
  ],
];

const SOUS_TRAITANTS = [
  [
    "CleverCloud",
    "France",
    "Hébergement",
    <a
      key="cc"
      className="fr-link"
      href="https://www.clever-cloud.com/en/security"
      target="_blank"
      rel="noopener noreferrer"
    >
      clever-cloud.com/en/security
      <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
    </a>,
  ],
  [
    "SendingBlue",
    "France",
    "Envoi d’e-mails",
    <a
      key="sb"
      className="fr-link"
      href="https://fr.sendinblue.com/rgpd/"
      target="_blank"
      rel="noopener noreferrer"
    >
      fr.sendinblue.com/rgpd
      <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
    </a>,
  ],
  [
    "Scalingo",
    "France",
    "Hébergeur",
    <a
      key="sc"
      className="fr-link"
      href="https://scalingo.com/fr"
      target="_blank"
      rel="noopener noreferrer"
    >
      scalingo.com/fr
      <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
    </a>,
  ],
  [
    "Pix",
    "France",
    "Réalisation du test de certification et communication de l’identifiant du certificat",
    <a
      key="pix"
      className="fr-link"
      href="https://pix.fr/politique-protection-donnees-personnelles-app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      pix.fr/politique-protection-donnees-personnelles-app
      <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
    </a>,
  ],
];

export default function CguPage() {
  return (
    <main id="content" tabIndex={-1}>
      <CarteTexte titleId="cgu-title">
        <h1 id="cgu-title" className="titre-h2">
          Conditions générales d’utilisation et données personnelles
        </h1>
        <p>
          Version accessible du document{" "}
          <a
            className="fr-link"
            href="/documents/CGU-Données_personnellesConseiller_Numérique.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Conditions générales d’utilisation et données personnelles »
            au format PDF
            <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
          </a>
          , applicable à la plateforme « Conseiller Numérique France
          Services ». Dernière mise à jour : 27/06/2022.
        </p>

        <h2 className="titre-h2 fr-mt-4w">
          Conditions générales d’utilisation « Conseiller Numérique France
          Services »
        </h2>
        <p>
          Les présentes conditions générales d’utilisation (dites « CGU »)
          fixent le cadre juridique de « Conseiller Numérique France
          Services » et définissent les conditions d’accès et d’utilisation
          des services par l’Utilisateur.
        </p>

        <section aria-labelledby="cgu-champ-application-title" className="fr-mb-4w">
          <h3 id="cgu-champ-application-title" className="fr-h6">
            Champ d’application
          </h3>
          <p>
            La plateforme est d’accès libre et gratuit à tout Utilisateur. La
            simple visite de la Plateforme suppose l’acceptation par tout
            Utilisateur des présentes CGU.
          </p>
        </section>

        <section aria-labelledby="cgu-objet-title" className="fr-mb-4w">
          <h3 id="cgu-objet-title" className="fr-h6">
            Objet
          </h3>
          <p>
            La plateforme présente le programme « Conseiller numérique France
            Services » qui vise à participer à la transformation numérique de
            la société française. Elle est à l’initiative de l’Agence
            Nationale de la Cohésion des Territoires, et a pour objet la mise
            en relation des personnes souhaitant devenir Conseiller numérique
            France Services avec les structures qui les emploient.
          </p>
        </section>

        <section aria-labelledby="cgu-utilisation-title" className="fr-mb-4w">
          <h3 id="cgu-utilisation-title" className="fr-h6">
            Utilisation de la plateforme
          </h3>

          <h4 className="fr-text--lg fr-mb-1w">Information</h4>
          <p>
            La plateforme permet notamment d’informer les Utilisateurs à
            propos du métier de « Conseiller numérique » et des organismes ou
            structures susceptibles de recruter de tels profils. Elle apporte
            également des informations relatives à la formation et à la
            relation de travail lié au métier.
          </p>
          <p>
            Lors de l’utilisation de la plateforme, l’Utilisateur s’engage à
            fournir des informations sincères et exactes permettant la mise
            en relation avec les organismes numériques qui en ont le besoin.
          </p>
          <p>
            L’éditeur se réserve la possibilité de supprimer ou suspendre
            pour une période donnée l’accès à la Plateforme pour un
            utilisateur, en cas de violation des présentes règles
            d’utilisation ou s’il estime que l’usage de la Plateforme porte
            préjudice à son image ou ne correspond pas aux exigences de
            sécurité.
          </p>

          <h4 className="fr-text--lg fr-mb-1w">Fonctionnalités</h4>
          <p>
            <em>Inscription</em>
          </p>
          <p>
            La plateforme permet aux personnes qui le souhaitent de
            candidater en vue de devenir « Conseiller numérique France
            Services » auprès d’organismes menant des projets d’inclusion
            numérique. Les candidats sont également invités le cas échéant, à
            suivre un parcours d’évaluation et de certification des
            compétences numériques, proposé par notre partenaire{" "}
            <a
              className="fr-link"
              href="https://pix.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pix
              <span className="fr-sr-only">
                {" "}
                (ouvre une nouvelle fenêtre)
              </span>
            </a>
            .
          </p>
          <p>
            La plateforme permet aux structures, personnes morales de droit
            public ou privées, d’entrer en contact avec des candidats
            susceptibles de devenir « Conseiller numérique France Services ».
            Ces recrutements sont subventionnés par l’État.
          </p>
          <p>
            Les informations professionnelles des utilisateurs dans le cadre
            de leur rôle de Conseiller Numérique sont mises à disposition du
            public, au travers notamment d’une cartographie recensant
            l’ensemble des Conseillers Numériques, en support numérique ou
            papier. Il s’agit notamment des noms, prénoms, adresses mail et
            numéros de téléphone des Conseillers Numériques.
          </p>
          <p>
            Les Conseillers Numériques peuvent à tout moment exercer leur
            droit d’opposition, pour plus d’informations veuillez vous
            référer à la politique de confidentialité.
          </p>
          <p>
            Les adresses mail professionnelles créées lors de l’inscription
            sont également transmises à « RDV solidarité » à fin de mettre à
            disposition des Conseillers Numérique un outil de prise de
            rendez-vous.
          </p>
          <p>
            <em>Mise en relation</em>
          </p>
          <p>
            Sur la base des informations fournies par l’utilisateur, et le
            cas échéant de la certification obtenue, le Candidat est mis en
            relation avec les Structures susceptibles de le recruter. Cette
            mise en relation ne saurait aucunement être qualifiée de décision
            administrative.
          </p>
        </section>

        <section
          aria-labelledby="cgu-responsabilites-title"
          className="fr-mb-4w"
        >
          <h3 id="cgu-responsabilites-title" className="fr-h6">
            Responsabilités
          </h3>

          <h4 className="fr-text--lg fr-mb-1w">
            L’éditeur de la plateforme « Conseiller Numérique France
            Services »
          </h4>
          <p>
            Les sources des informations diffusées sur le site sont réputées
            fiables mais le site ne garantit pas qu’il soit exempt de
            défauts, d’erreurs ou d’omissions.
          </p>
          <p>
            Tout évènement dû à un cas de force majeur ayant pour conséquence
            un dysfonctionnement de la Plateforme et sous réserve de toute
            interruption ou modification en cas de maintenance, n’engage pas
            la responsabilité de « Conseiller Numérique France Services ».
          </p>
          <p>
            L’éditeur s’engage à la sécurisation de la Plateforme, notamment
            en prenant toutes les mesures nécessaires permettant de garantir
            la sécurité et la confidentialité des informations fournies.
          </p>
          <p>
            L’éditeur fournit les moyens nécessaires et raisonnables pour
            assurer un accès continu, sans contrepartie financière, à la
            Plateforme. Il se réserve la liberté de faire évoluer, de
            modifier ou de suspendre, sans préavis, la plateforme pour des
            raisons de maintenance ou pour tout autre motif jugé nécessaire.
          </p>
          <p>
            Ce site peut mettre à disposition des liens pouvant orienter
            l’Utilisateur vers des sites réalisés par des tiers. Ces tiers
            sont les seuls responsables du contenu publié par leur soin.
            L’équipe n’a aucun contrôle sur le contenu de ces sites. Ces
            contenus ne sauraient engager la responsabilité de
            l’administration.
          </p>

          <h4 className="fr-text--lg fr-mb-1w">L’Utilisateur</h4>
          <p>
            Toute information transmise par l’Utilisateur est de sa seule
            responsabilité. Il est rappelé que toute personne procédant à une
            fausse déclaration pour elle-même ou pour autrui s’expose,
            notamment, aux sanctions prévues à l’article 441-1 du code pénal,
            prévoyant des peines pouvant aller jusqu’à trois ans
            d’emprisonnement et 45 000 euros d’amende.
          </p>
          <p>
            L’Utilisateur s’engage à ne pas mettre en ligne de contenus ou
            informations contraires aux dispositions légales et
            réglementaires en vigueur.
          </p>
          <p>
            Le contenu de l’Utilisateur peut être à tout moment et pour
            n’importe quelle raison supprimé ou modifié par le site, sans
            préavis.
          </p>
        </section>

        <section aria-labelledby="cgu-maj-title" className="fr-mb-4w">
          <h3 id="cgu-maj-title" className="fr-h6">
            Mise à jour des conditions d’utilisation
          </h3>
          <p>
            Les termes des présentes conditions d’utilisation peuvent être
            amendés à tout moment, sans préavis, en fonction des
            modifications apportées à la plateforme, de l’évolution de la
            législation ou pour tout autre motif jugé nécessaire.
          </p>
        </section>

        <hr className="fr-hr fr-my-4w" />

        <h2 className="titre-h2 fr-mt-4w">
          Données personnelles « Conseiller Numérique France Services »
        </h2>

        <section
          aria-labelledby="dp-responsable-traitement-title"
          className="fr-mb-4w"
        >
          <h3 id="dp-responsable-traitement-title" className="fr-h6">
            Responsable de traitement
          </h3>
          <p>
            Le responsable de traitement est <strong>l’Agence Nationale de
            la Cohésion des Territoires, ci-après dénommée « ANCT »,
            établissement public de l’État</strong> créé par la loi n°
            2019-753 du 22 juillet 2019 et en application du décret
            n°2019-1190 du 18 novembre 2019, sise au 20 avenue de Ségur –
            TSA 10717 – 75334 PARIS CEDEX 07, <strong>représentée par
            Monsieur Yves LE BRETON</strong>, Directeur général.
          </p>
          <p>
            Le délégué à la protection des données est Mme Anne Gaillard,
            ANCT, 20 avenue de Ségur – TSA 10717 – 75334 PARIS CEDEX 07.
            L’adresse mail de contact est :{" "}
            <a className="fr-link" href="mailto:dpo@anct.gouv.fr">
              dpo@anct.gouv.fr
            </a>
          </p>
        </section>

        <section
          aria-labelledby="dp-donnees-traitees-title"
          className="fr-mb-4w"
        >
          <h3 id="dp-donnees-traitees-title" className="fr-h6">
            Données personnelles traitées
          </h3>
          <p>La plateforme peut traiter les données à caractère personnel suivantes :</p>
          <ul>
            <li>
              Données relatives aux personnes postulant au poste de
              conseiller numérique (nom, prénom, situation socio-économique,
              diplôme, adresse e-mail, numéro de téléphone)
            </li>
            <li>
              Données relatives aux membres, personnels ou agents des
              structures (nom, prénom, fonction, adresse e-mail, téléphone)
            </li>
            <li>Données d’hébergeur ou de connexion ;</li>
            <li>Cookies (pour plus d’informations, voir la section Cookies ci-dessous).</li>
          </ul>
        </section>

        <section aria-labelledby="dp-finalites-title" className="fr-mb-4w">
          <h3 id="dp-finalites-title" className="fr-h6">
            Finalités des traitements
          </h3>
          <p>
            La plateforme « Conseiller Numérique » vise à participer à la
            transformation numérique en permettant le recrutement de
            personnes dans le cadre du programme de transformation, notamment
            en :
          </p>
          <ul>
            <li>
              Permettant la mise en relation entre les personnes souhaitant
              devenir conseiller numérique et les organismes souhaitant les
              recruter ;
            </li>
            <li>
              Accompagnant les usagers dans la maîtrise des bases du
              numérique (prise en main des équipements informatiques, envoi,
              réception et gestion de courriel ; apprentissage des bases du
              traitement de texte ; installation et utilisation des
              applications utiles sur le smartphone) ;
            </li>
            <li>
              Permettant aux usagers formés d’être contactés par des
              organismes et de les informer au regard de leur situation,
              disponibilité et mobilité ;
            </li>
          </ul>
          <p>
            La mise en relation des différents Utilisateurs de la plateforme
            est assurée par un traitement algorithmique. Ainsi pour apparier
            un candidat à une structure susceptible de recruter, nous
            utilisons notamment :
          </p>
          <ul>
            <li>
              Les données du candidat : situation (demandeur d’emploi, en
              emploi, en formation), code postal, distance maximum (mobilité
              géographique), date de disponibilité ;
            </li>
            <li>
              Les données de la structure accueillante : statut (structure
              publique ou privée), date de début de la mission, code postal.
            </li>
          </ul>
          <p>
            Dès lors, candidats et structures sont mis en relation lorsque la
            date de disponibilité du candidat est inférieure à la date de
            début de la mission indiquée par la structure, et que la
            mobilité géographique du candidat correspond à la localisation
            de la structure.
          </p>
          <p>
            Ainsi, nous mettons en contact candidats et structure au travers
            de la plateforme, grâce à un algorithme de mise en relation
            servant d’outil d’aide à la décision. Cet algorithme utilise des
            critères clairs et objectifs. Cette mise en relation ne saurait
            aucunement être qualifiée de décision administrative.
          </p>
          <p>
            Ces données sont strictement nécessaires et proportionnées pour
            la réalisation de la mission de la Plateforme.
          </p>
        </section>

        <section aria-labelledby="dp-bases-juridiques-title" className="fr-mb-4w">
          <h3 id="dp-bases-juridiques-title" className="fr-h6">
            Bases juridiques des traitements de données
          </h3>
          <p>Les données traitées par la plateforme ont plusieurs fondements juridiques :</p>
          <ul>
            <li>
              L’obligation légale à laquelle est soumise le responsable de
              traitements au sens de l’article 6-c du RGPD ;
            </li>
            <li>
              L’exécution d’une mission d’intérêt public ou relevant de
              l’exercice de l’autorité publique dont est investi le
              responsable de traitement au sens de l’article 6-e du RGPD.
            </li>
          </ul>
          <p>Ces fondements sont précisés ci-dessous :</p>

          <h4 className="fr-text--lg fr-mb-1w">
            a) Données relatives aux personnes postulant au poste de
            conseiller numérique France Services
          </h4>
          <p>
            Ce traitement est nécessaire à l’exécution d’une mission
            d’intérêt public ou relevant de l’exercice de l’autorité publique
            dont est investi le responsable de traitement au sens de
            l’article 6-e du règlement (UE) 2016/679 du Parlement européen et
            du Conseil du 27 avril 2016 relatif à la protection des personnes
            physiques à l’égard du traitement des données à caractère
            personnel et à la libre circulation de ces données.
          </p>
          <p>
            Cette mission d’intérêt public est notamment posée par le décret
            n°2019-1190 du 18 novembre 2019 relatif à l’Agence nationale de
            la cohésion des territoires.
          </p>

          <h4 className="fr-text--lg fr-mb-1w">
            b) Données relatives aux membres, personnels ou agents des
            structures
          </h4>
          <p>
            Ce traitement est nécessaire à l’exécution d’une mission
            d’intérêt public ou relevant de l’exercice de l’autorité publique
            dont est investi le responsable de traitement au sens de
            l’article 6-e du règlement (UE) 2016/679 du Parlement européen et
            du Conseil du 27 avril 2016 relatif à la protection des personnes
            physiques à l’égard du traitement des données à caractère
            personnel et à la libre circulation de ces données.
          </p>
          <p>
            Cette mission d’intérêt public est notamment posée par le décret
            n°2019-1190 du 18 novembre 2019 relatif à l’Agence nationale de
            la cohésion des territoires.
          </p>

          <h4 className="fr-text--lg fr-mb-1w">c) Données d’hébergeur ou de connexion</h4>
          <p>
            Ce traitement est nécessaire au respect d’une obligation légale à
            laquelle le responsable de traitement est soumis au sens de
            l’article 6-c du Règlement (UE) 2016/679 du Parlement européen et
            du Conseil du 27 avril 2016 relatif à la protection des personnes
            physiques à l’égard du traitement des données à caractère
            personnel et à la libre circulation de ces données.
          </p>
          <p>
            L’obligation légale est posée par la loi LCEN n° 2004-575 du 21
            juin 2004 pour la confiance dans l’économie numérique et par les
            articles 1 et 3 du décret n°2011-219 du 25 février 2011.
          </p>

          <h4 className="fr-text--lg fr-mb-1w">d) Cookies</h4>
          <p>
            En application de l’article 5(3) de la directive 2002/58/CE
            modifiée concernant le traitement des données à caractère
            personnel et la protection de la vie privée dans le secteur des
            communications électroniques, transposée à l’article 82 de la loi
            n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers
            et aux libertés, les traceurs ou cookies suivent deux régimes
            distincts.
          </p>
          <p>
            Les cookies strictement nécessaires au service, ceux de
            publicité non personnalisée ou n’ayant pas pour finalité
            exclusive de faciliter la communication par voie électronique
            sont dispensés de consentement préalable au titre de l’article 82
            de la loi n°78-17 du 6 janvier 1978.
          </p>
          <p>
            Les autres cookies n’étant pas strictement nécessaires au service
            ou n’ayant pas pour finalité exclusive de faciliter la
            communication par voie électronique doivent être consentis par
            l’utilisateur.
          </p>
          <p>
            Ce consentement de la personne concernée pour une ou plusieurs
            finalités spécifiques constitue une base légale au sens du RGPD
            et doit être entendu au sens de l’article 6-a du Règlement (UE)
            2016/679 du Parlement européen et du Conseil du 27 avril 2016
            relatif à la protection des personnes physiques à l’égard du
            traitement des données à caractère personnel et à la libre
            circulation de ces données.
          </p>
        </section>

        <section aria-labelledby="dp-duree-title" className="fr-mb-4w">
          <h3 id="dp-duree-title" className="fr-h6">
            Durée de conservation des traitements de données
          </h3>
          <Table
            caption="Durée de conservation des traitements de données"
            headers={["Types de données", "Durée de conservation"]}
            data={DUREES_CONSERVATION}
            bordered
          />
          <p>
            Passés ces délais de conservation, l’ANCT s’engage à supprimer
            définitivement les données des personnes concernées.
          </p>
        </section>

        <section aria-labelledby="dp-securite-title" className="fr-mb-4w">
          <h3 id="dp-securite-title" className="fr-h6">
            Sécurité et confidentialité
          </h3>
          <p>
            Les données personnelles sont traitées dans des conditions
            sécurisées, selon les moyens actuels de la technique, dans le
            respect des dispositions relatives à la protection de la vie
            privée.
          </p>
        </section>

        <section aria-labelledby="dp-droits-title" className="fr-mb-4w">
          <h3 id="dp-droits-title" className="fr-h6">
            Droits des personnes concernées
          </h3>
          <p>
            Vous disposez des droits suivants concernant vos données à
            caractère personnel :
          </p>
          <ul>
            <li>Droit d’information et droit d’accès aux données ;</li>
            <li>Droit de rectification et le cas échéant de suppression des données ;</li>
            <li>Droit d’opposition au traitement ;</li>
            <li>Droit au retrait du consentement en matière de cookies uniquement.</li>
          </ul>
          <p>
            Pour les exercer, faites-nous parvenir une demande en précisant
            la date et l’heure précise de la requête — ces éléments sont
            indispensables pour nous permettre de retrouver votre recherche —
            à l’adresse suivante :
          </p>
          <p>
            <strong>Par voie numérique :</strong>{" "}
            <a className="fr-link" href="mailto:dpo@anct.gouv.fr">
              dpo@anct.gouv.fr
            </a>
          </p>
          <p>
            <strong>Par voie postale :</strong>
            <br />
            ANCT
            <br />
            20 avenue de Ségur - TSA 10717
            <br />
            75334 Paris Cedex 07
          </p>
          <p>
            En raison de l’obligation de sécurité et de confidentialité dans
            le traitement des données à caractère personnel qui incombe au
            responsable de traitement, votre demande ne sera traitée que si
            vous apportez la preuve de votre identité.
          </p>
          <p>
            Vous avez la possibilité de vous opposer à un traitement de vos
            données personnelles. Pour vous aider dans votre démarche, la
            CNIL propose des modèles de courrier sur{" "}
            <a
              className="fr-link"
              href="https://www.cnil.fr/fr/modeles/courrier"
              target="_blank"
              rel="noopener noreferrer"
            >
              cnil.fr
              <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
            </a>
            .
          </p>
          <p>
            Le responsable de traitement s’engage à répondre dans un délai
            raisonnable qui ne saurait dépasser 1 mois à compter de la
            réception de votre demande.
          </p>
        </section>

        <section aria-labelledby="dp-destinataires-title" className="fr-mb-4w">
          <h3 id="dp-destinataires-title" className="fr-h6">
            Destinataires
          </h3>
          <p>
            Les données collectées et les demandes, ou dossiers réalisés
            depuis la Plateforme sont traitées par les seules personnes
            juridiquement habilitées à connaître des informations traitées.
          </p>
          <p>
            L’ANCT veille à ne fournir des accès qu’aux seules personnes
            juridiquement habilitées à connaître des informations traitées.
          </p>
          <p>
            Dans le cadre de l’exécution des missions de Conseiller
            Numérique, l’outil de prise de rendez-vous « RDV solidarité » est
            mis à disposition. Pour ce faire, les adresses mail
            professionnelles créées lors de l’inscription sont transmises à
            « RDV solidarité ».
          </p>
        </section>

        <section aria-labelledby="dp-sous-traitants-title" className="fr-mb-4w">
          <h3 id="dp-sous-traitants-title" className="fr-h6">
            Sous-traitants
          </h3>
          <p>
            Certaines des données sont envoyées à des sous-traitants pour
            réaliser certaines missions. Le responsable de traitement s’est
            assuré de la mise en œuvre par ses sous-traitants de garanties
            adéquates et du respect de conditions strictes de
            confidentialité, d’usage et de protection des données.
          </p>
          <Table
            caption="Sous-traitants de la plateforme"
            headers={[
              "Partenaire",
              "Pays destinataire",
              "Traitement réalisé",
              "Garanties",
            ]}
            data={SOUS_TRAITANTS}
            bordered
          />
          <p>
            Conseiller Numérique France Services est partenaire de{" "}
            <a
              className="fr-link"
              href="https://pix.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pix
              <span className="fr-sr-only">
                {" "}
                (ouvre une nouvelle fenêtre)
              </span>
            </a>
            , afin que le cas échéant, la candidature de l’Utilisateur soit
            accompagnée de la certification issue du parcours Pix et obtenu
            la certification.
          </p>
          <p>
            Le partenariat est mis en place dans le cadre de la bonne
            exécution de la mission de service public dont est chargé
            Conseiller Numérique France Services, et aux fins de vérification
            des compétences numériques du candidat.
          </p>
          <p>
            De ce fait, les candidats seront invités, par mail, lors de leur
            inscription sur Conseiller Numérique France Services, à procéder
            à la certification Pix.
          </p>
          <p>
            Pour toute question relative à la protection des données avec
            notre partenaire Pix, nous vous invitons également à vous
            informer de{" "}
            <a
              className="fr-link"
              href="https://pix.fr/politique-protection-donnees-personnelles-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              leur politique de protection des données
              <span className="fr-sr-only">
                {" "}
                (ouvre une nouvelle fenêtre)
              </span>
            </a>
            , ou de contacter leur délégué à la protection des données à
            cette adresse :{" "}
            <a className="fr-link" href="mailto:dpd@pix.fr">
              dpd@pix.fr
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="dp-cookies-title" className="fr-mb-4w">
          <h3 id="dp-cookies-title" className="fr-h6">
            Cookies
          </h3>
          <p>
            Un cookie est un fichier déposé sur votre terminal lors de la
            visite d’un site. Il a pour but de collecter des informations
            relatives à votre navigation et de vous adresser des services
            adaptés à votre terminal (ordinateur, mobile ou tablette).
          </p>
          <p>
            Le site dépose des cookies de mesure d’audience (nombre de
            visites, pages consultées), respectant les conditions
            d’exemption du consentement de l’internaute définies par la
            recommandation « Cookies » de la Commission nationale
            informatique et libertés (CNIL). Cela signifie, notamment, que
            ces cookies ne servent qu’à la production de statistiques
            anonymes et ne permettent pas de suivre la navigation de
            l’internaute sur d’autres sites.
          </p>
          <p>
            À tout moment, vous pouvez refuser l’utilisation des cookies et
            désactiver le dépôt sur votre ordinateur en utilisant la fonction
            dédiée de votre navigateur (fonction disponible notamment sur
            Microsoft Internet Explorer 11, Google Chrome, Mozilla Firefox,
            Apple Safari et Opera).
          </p>
          <p>
            Pour aller plus loin, vous pouvez consulter les fiches proposées
            par la Commission Nationale de l’Informatique et des Libertés
            (CNIL) :
          </p>
          <ul>
            <li>
              <a
                className="fr-link"
                href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies &amp; traceurs : que dit la loi ?
                <span className="fr-sr-only">
                  {" "}
                  (ouvre une nouvelle fenêtre)
                </span>
              </a>
            </li>
            <li>
              <a
                className="fr-link"
                href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies : les outils pour les maîtriser
                <span className="fr-sr-only">
                  {" "}
                  (ouvre une nouvelle fenêtre)
                </span>
              </a>
            </li>
          </ul>
        </section>
      </CarteTexte>
    </main>
  );
}
