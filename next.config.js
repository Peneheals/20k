/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

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

module.exports = nextConfig
