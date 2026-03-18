// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IIC OMS 매뉴얼',
  tagline: 'IIC OMS 운영 매뉴얼 — 주문, 출고, 반품, 교환, 재고 관리를 위한 통합 가이드',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'gmldudrkd',
  projectName: 'oms_manual',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: { label: '한국어' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/gmldudrkd/oms_manual/tree/main/',
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
      image: 'img/iic-logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'IIC OMS 매뉴얼',
        logo: {
          alt: 'IIC OMS Logo',
          src: 'img/iic-logo.png',
          style: { height: '32px' },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '문서',
          },
          {
            to: '/docs/tutorials/overview',
            label: '튜토리얼',
            position: 'left',
          },
          {
            to: '/docs/reference/status-codes',
            label: '레퍼런스',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/gmldudrkd/oms_manual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서',
            items: [
              {
                label: '시작하기',
                to: '/docs/',
              },
              {
                label: '튜토리얼',
                to: '/docs/tutorials/overview',
              },
              {
                label: '사용 가이드',
                to: '/docs/how-to/order-search-filter-download',
              },
            ],
          },
          {
            title: '레퍼런스',
            items: [
              {
                label: '상태 코드',
                to: '/docs/reference/status-codes',
              },
              {
                label: '필드 정의',
                to: '/docs/reference/field-definitions',
              },
              {
                label: '에러 메시지',
                to: '/docs/reference/error-messages',
              },
            ],
          },
          {
            title: '더 보기',
            items: [
              {
                label: '변경 이력',
                to: '/docs/ops/changelog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gmldudrkd/oms_manual',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IIC. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
