"use client";

import { createConsentManagement } from "@codegouvfr/react-dsfr/consentManagement";

export const {
  ConsentBannerAndConsentManagement,
  FooterConsentManagementItem,
  FooterPersonalDataPolicyItem,
  useConsent,
} = createConsentManagement({
  finalityDescription: () => ({
    analytics: {
      title: "Mesure d'audience",
      description: "Nous utilisons Matomo pour mesurer l'audience du site.",
    },
  }),
  personalDataPolicyLinkProps: {
    href: "/mentions-legales",
  },
});
