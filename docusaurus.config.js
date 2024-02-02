// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://zisui.github.io',

  baseUrl: '/',

  onBrokenLinks: 'throw',

  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.

  // If you aren't using GitHub pages, you don't need these.

  organizationName: 'zisui', // Usually your GitHub org/user name.

  projectName: 'zisui.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/zisui/zisui.github.io',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/zisui/zisui.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        hashed: true,
        language: ['zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light', // 默认白昼主题，可配置dark模式
      },
      docs: {
        sidebar: {                             // 侧边栏
          hideable: true,
        },
      },
      // announcementBar: {                       // 顶部公告配置
      //   id: 'notice',
      //   content: '滚动的公告～',
      //   backgroundColor: '#2160fd',
      //   textColor: '#ffffff',
      //   isCloseable: true,
      // },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'document',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/zisui/zisui.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'document',
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
              {
                label: 'docusaurus',
                href: 'https://docusaurus.io/zh-CN',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zisui/zisui.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
