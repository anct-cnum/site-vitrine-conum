"use client";

import { usePathname } from "next/navigation";
import { SkipLinks as DsfrSkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";

const skipLinksByPath = {
  "/": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder aux questions fréquentes",
      anchor: "#faq-titre",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],

  "/label": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder aux conditions du label",
      anchor: "#conditions-label-titre",
    },
    {
      label: "Accéder aux questions fréquentes",
      anchor: "#faq-titre",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],

  "/devenir-conseiller": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder à la candidature",
      anchor: "#candidature-titre",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],

  "/formation": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder à la formation initiale",
      anchor: "#formation-initiale-titre",
    },
    {
      label: "Accéder à la formation continue",
      anchor: "#formation-continue-titre",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],
  "/kit-communication": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder aux téléchargements",
      anchor: "#documents-titre",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],

  "/plan-du-site": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],

  "/mentions-legales": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],

  "/accessibilite": [
    {
      label: "Accéder au contenu",
      anchor: "#content",
    },
    {
      label: "Accéder au menu",
      anchor: "#header-menu-modal-fr-header",
    },
    {
      label: "Accéder au pied de page",
      anchor: "#fr-footer",
    },
  ],
};

const defaultSkipLinks = [
  {
    label: "Accéder au contenu",
    anchor: "#content",
  },
  {
    label: "Accéder au menu",
    anchor: "#header-menu-modal-fr-header",
  },
  {
    label: "Accéder au pied de page",
    anchor: "#fr-footer",
  },
];

export default function SkipLinks() {
  const pathname = usePathname();

  const links =
    skipLinksByPath[pathname as keyof typeof skipLinksByPath] ??
    defaultSkipLinks;

  return <DsfrSkipLinks links={links} />;
}
