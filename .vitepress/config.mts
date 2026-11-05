import { defineConfig } from 'vitepress'

// The deploy workflow sets DOCS_BASE so one config serves both a fork
// preview (served under /<repo-name>/) and production at hydrapool.org
// (served at /).
const base = process.env.DOCS_BASE || '/'

const title = 'Hydrapool'
const description = 'Open source Bitcoin mining pool software'

export default defineConfig({
  title,
  description,

  base,
  cleanUrls: true,
  lastUpdated: true,

  srcExclude: ['README.md', 'AGENTS.md', 'CONTRIBUTING.md', 'node_modules/**'],

  // Dev-server only: Vite blocks requests addressed to hostnames it
  // does not know. To review the dev server from another machine by
  // name, list the names in DEV_ALLOWED_HOSTS, comma separated:
  // DEV_ALLOWED_HOSTS=myhost just dev
  vite: {
    server: {
      allowedHosts: (process.env.DEV_ALLOWED_HOSTS || '')
        .split(',')
        .filter(Boolean)
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }],
    // Social link previews. og:image requires an absolute URL, so it
    // points at production even in a fork preview.
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://hydrapool.org/og-card.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  themeConfig: {
    logo: '/hydra-mark.png',

    // The docs are organized by Diataxis (https://diataxis.fr):
    // tutorial, how-to guides, reference, explanation. Keep each page
    // in one mode; link across modes instead of mixing them.
    nav: [
      { text: 'Start', link: '/tutorial/name-the-pool' },
      { text: 'How-to', link: '/howto/run-with-docker' },
      { text: 'Reference', link: '/reference/public-instances' },
      { text: 'Explanation', link: '/explanation/why-hydrapool' },
      { text: 'Community', link: '/community' }
    ],

    sidebar: [
      {
        text: 'Tutorial',
        items: [
          { text: 'Name the Pool', link: '/tutorial/name-the-pool' }
        ]
      },
      {
        text: 'How-to Guides',
        items: [
          { text: 'Run with Docker', link: '/howto/run-with-docker' },
          { text: 'Point a Miner', link: '/howto/point-a-miner' },
          { text: 'Export Share Records', link: '/howto/export-shares' },
          { text: 'Build from Source', link: '/howto/build-from-source' },
          { text: 'Example Server Pictures', link: '/howto/example-server' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Public Instances', link: '/reference/public-instances' },
          { text: 'Config File', link: '/reference/config' },
          { text: 'Share API', link: '/reference/share-api' },
          { text: 'Hardware', link: '/reference/hardware' },
          { text: 'Hardware Catalog', link: '/reference/hardware-catalog' }
        ]
      },
      {
        text: 'Explanation',
        items: [
          { text: 'Why Hydrapool', link: '/explanation/why-hydrapool' },
          { text: 'Two Ledgers', link: '/explanation/two-ledgers' },
          { text: 'What a Check Can Show', link: '/explanation/what-a-check-can-show' },
          { text: 'Where Hydrapool Is Today', link: '/explanation/status' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Community and Contributing', link: '/community' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/256foundation/hydrapool' }
    ],

    footer: {
      message:
        'A 256 Foundation project. Licensed AGPL-3.0. ' +
        'This site is <a href="https://github.com/256foundation/Hydra-Pool-website">open to contributions on GitHub</a>.',
      copyright:
        'Copyright Hydrapool contributors' +
        `<a class="foundation-mark" href="https://256foundation.org" aria-label="256 Foundation">` +
        `<img class="light-logo" src="${base}256-foundation-light.png" alt="">` +
        `<img class="dark-logo" src="${base}256-foundation-dark.png" alt=""></a>`
    },

    search: {
      provider: 'local'
    },

    outline: { level: [2, 3] },

    editLink: {
      pattern:
        'https://github.com/256foundation/Hydra-Pool-website/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
