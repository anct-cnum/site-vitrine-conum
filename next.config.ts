import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    redirects() {
      return [
        {
          source: '/carte',
          destination: 'https://cartographie.societenumerique.gouv.fr',
          permanent: true,
        },
      ]
    },
};

export default nextConfig;
