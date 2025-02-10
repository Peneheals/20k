// const securityHeaders = [
//   {
//     key: 'Content-Security-Policy',
//     value: `\
//       default-src 'self' 'unsafe-eval';\
//       font-src fonts.gstatic.com fonts.googleapis.com;\
//       style-src 'self' 'unsafe-inline' fonts.googleapis.com;\
//       img-src 'self' data: www.googletagmanager.com;\
//       script-src 'self' 'unsafe-eval' 'unsafe-inline';\
//     `
//   }
// ]

module.exports = {
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ]
  // },
  images: {
    domains: ['media.graphcms.com', 'mobil.20k.hu', 'media.20k.hu'],
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    const permanents = [
      ['/gyik.html', '/gyik'],
      ['/jelentkezz.html', '/jelentkezz'],
      ['/koordinator.html', '/koordinator'],
      ['/kik-vagyunk.html', '/kik-vagyunk'],
      ['/tamogatas.html', '/tamogatas'],
      ['/suti-szabalyzat.html', '/suti-szabalyzat'],
      ['/adatvedelem.html', '/adatvedelem'],
      ['/feliratkozas-visszaigazolas.html', '/feliratkozas-visszaigazolas'],
    ]

    return permanents.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
