"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect } from "react";

const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

declare global {
  interface Window {
    _paq?: unknown[][];
  }
}

function push(args: unknown[]) {
  (window._paq = window._paq ?? []).push(args);
}

function SuiviClicDemandeLabel() {
  useEffect(() => {
    const surClic = (evenement: MouseEvent) => {
      const lien = (evenement.target as Element | null)?.closest(
        'a[href*="connexion-label"]',
      );
      if (lien) {
        push(["trackEvent", "CTA", "Clic", "Demander le label"]);
      }
    };
    document.addEventListener("click", surClic);
    return () => document.removeEventListener("click", surClic);
  }, []);

  return null;
}

function SuiviDesPages() {
  const pathname = usePathname();
  const searchParams = useSearchParams().toString();

  useEffect(() => {
    push(["setCustomUrl", window.location.href]);
    push(["setDocumentTitle", document.title]);
    push(["trackPageView"]);
  }, [pathname, searchParams]);

  return null;
}

export default function Matomo() {
  if (!matomoUrl || !matomoSiteId) {
    return null;
  }

  return (
    <>
      <Script id="matomo-init">
        {`
          var _paq = window._paq = window._paq || [];
          _paq.push(["disableCookies"]);
          _paq.push(["enableLinkTracking"]);
          _paq.push(["setTrackerUrl", "${matomoUrl}/matomo.php"]);
          _paq.push(["setSiteId", "${matomoSiteId}"]);
        `}
      </Script>
      <Script src={`${matomoUrl}/matomo.js`} strategy="lazyOnload" />
      <Suspense fallback={null}>
        <SuiviDesPages />
      </Suspense>
      <SuiviClicDemandeLabel />
    </>
  );
}
