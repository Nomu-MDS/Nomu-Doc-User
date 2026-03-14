// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    async function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  title: 'Nomu',
  tagline: 'Guide d\'utilisation de la plateforme Nomu.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.nomu.app',
  baseUrl: '/',

  organizationName: 'nomu',
  projectName: 'nomu-doc-user',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  headTags: [
    // Roca — Adobe Typekit (même kit que Nomu-Web)
    {
      tagName: 'link',
      attributes: {rel: 'stylesheet', href: 'https://use.typekit.net/jcd0iqo.css'},
    },
    // Poppins + Space Mono — Google Fonts
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Mono:wght@400;700&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Nomu',
          src: 'img/Nomu_logo_cream.svg',
          href: '/',
          width: 90,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: "Guide d'utilisation",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Bienvenue', to: '/docs/intro'},
              {label: 'Premiers pas', to: '/docs/guide/02-premiers-pas'},
              {label: 'Messagerie & Réservations', to: '/docs/guide/05-messagerie'},
              {label: 'Sécurité', to: '/docs/guide/07-securite'},
            ],
          },
          {
            title: 'Nomu',
            items: [
              {label: 'Application web', href: 'https://app.nomu.charlesremy.dev'},
              {label: 'Support', href: 'mailto:support@nomu.app'},
            ],
          },
          {
            title: 'Télécharger',
            items: [
              {
                html: `<a href="https://github.com/Nomu-MDS" target="_blank" rel="noopener" aria-label="App Store">
                  <img src="/img/Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg" alt="Télécharger sur l'App Store" style="width:130px;height:auto;opacity:0.85;display:block;margin-bottom:8px" />
                </a>`,
              },
              {
                html: `<a href="https://files.charlesremy.dev/nomu/application-946064ee-a7c3-4a5b-bcf0-7595b932650e.apk" target="_blank" rel="noopener" aria-label="Google Play">
                  <img src="/img/Google_Play_Store_badge_FR.svg" alt="Disponible sur Google Play" style="width:130px;height:auto;opacity:0.85;display:block" />
                </a>`,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Nomu`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
