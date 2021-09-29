const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Flarum Documentation',
  tagline: 'Forums made simple.',
  url: 'https://flarum.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'flarum',
  projectName: 'flarum',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'it', 'tr', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
      it: {
        label: 'Italiano',
      },
      tr: {
        label: 'Türkçe',
      },
      zh: {
        label: '简体中文',
      }
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          editUrl: 'https://github.com/flarum/docs/tree/master',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Flarum Docs Logo',
          src: 'img/logo-docs.svg',
        },
        items: [
          {
            to: 'intro',
            label: 'Guide',
            position: 'right',
            activeBaseRegex: `docs\/[^\/]+`,
          },
          {
            to: 'extend',
            label: 'Extend',
            position: 'right',
            activeBaseRegex: `extend`,
          },
          {
            to: 'internal',
            label: 'Internal',
            position: 'right',
            activeBaseRegex: `internal`,
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Flarum. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
