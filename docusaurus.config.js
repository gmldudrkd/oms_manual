// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IIC OMS DOCS',
  tagline: 'IIC OMS 운영 매뉴얼 — 주문, 출고, 반품, 교환, 재고 관리를 위한 통합 가이드',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  future: {
    v4: true,
  },

  url: 'https://gmldudrkd.github.io',
  baseUrl: '/oms_manual/',

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
          exclude: [
            'intro.md',
            'how-to/channel-management.md',
            'how-to/dashboard.md',
            'how-to/exchange-approve-reject-shipment.md',
            'how-to/inventory-search-filter-adjust.md',
            'how-to/order-search-filter-download.md',
            'how-to/reshipment-management.md',
            'how-to/return-approve-reject-refund.md',
            'how-to/shipment-tracking.md',
            'how-to/store-pickup-management.md',
            'reference/brands-channels.md',
            'reference/error-messages.md',
            'reference/field-definitions.md',
            'use-cases/**',
          ],
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
        title: 'OMS 매뉴얼',
        logo: {
          alt: 'IIC OMS Logo',
          src: 'img/iic-logo.png',
          style: { height: '32px' },
        },
        items: [
          {
            to: '/docs/migration/GM_CA',
            position: 'left',
            label: 'Migration',
          },
          {
            to: '/docs/changelog/26-03-25',
            position: 'left',
            label: 'Changelog',
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
            title: 'Migration',
            items: [
              {
                label: '26.05.07 Core Operations',
                to: '/docs/migration/GM_CA',
              },
              {
                label: '26.05.11 New Features',
                to: '/docs/migration/GM_US',
              },
            ],
          },
          {
            title: '더 보기',
            items: [
              {
                label: '변경 이력',
                to: '/docs/changelog/26-03-25',
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
