"use client";

import { useEffect, useState } from "react";

export default function MatomoOptOut() {
  const [refus, setRefus] = useState(false);

  useEffect(() => {
    const _paq = (window._paq = window._paq ?? []);
    _paq.push([
      function (this: { isUserOptedOut(): boolean }) {
        setRefus(this.isUserOptedOut());
      },
    ]);
  }, []);

  const basculer = (refuser: boolean) => {
    setRefus(refuser);
    const _paq = (window._paq = window._paq ?? []);
    _paq.push([refuser ? "optUserOut" : "forgetUserOptOut"]);
  };

  return (
    <div className="fr-checkbox-group">
      <input
        type="checkbox"
        id="matomo-opt-out"
        checked={refus}
        onChange={(e) => basculer(e.target.checked)}
      />
      <label className="fr-label" htmlFor="matomo-opt-out">
        Je refuse que mes données de navigation soient collectées par la mesure
        d'audience
      </label>
    </div>
  );
}
