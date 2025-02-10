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

  images: {
    domains: ['media.graphcms.com', 'mobil.20k.hu', 'media.20k.hu'],
    unoptimized: true,
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
