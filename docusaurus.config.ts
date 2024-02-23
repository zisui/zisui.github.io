import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zisui.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zisui', // Usually your GitHub org/user name.
  projectName: 'zisui.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/zisui/zisui.github.io', // 地址无效
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/zisui/zisui.github.io', // 地址无效
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        hashed: true,
        language: ['zh', 'en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: {
    editUrl: 'https://github.com/zisui/zisui.github.io/blob/master/', //编辑页面 地址
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: true,   //在用户开始向下滚动页面时，自动隐藏导航栏，当用户向上滚动时再显示它。
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
          label: '文档',
        },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/zisui',
          position: 'right',
          'aria-label': 'GitHub repository',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'document',
          items: [
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
  } satisfies Preset.ThemeConfig,

};

export default config;
