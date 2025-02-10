// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const fs = require('fs');const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tiếng đức miễn phí',
  tagline: 'Deutsch.vn',
  favicon: 'img/avt.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de', // Ngôn ngữ mặc định
    locales: ['vi', 'de'], // Thêm tiếng Việt và tiếng Đức
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
      },
    },
  },  

  plugins: [require.resolve('docusaurus-lunr-search')],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0, // Đặt giá trị 0 để ẩn hoàn toàn sidebar
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // announcementBar: {
      //   id: 'announcementBar-v3.2', // Increment on change
      //   content: `🎉️ <b>Khai giảng khoá học Python chứng khoán K9 từ 8/12/2024 <a target="_blank" href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan/"></a></b>. Đăng ký ngay! 🥳️`,
      // },

      // announcementBar: {
      //   id: 'image_banner', // Any value that will identify this message.
      //   content:
      //     '<a href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan"><img src="https://vnstocks.com/img/python_chung_khoan_banner.png" alt="Banner" class="announcement-bar-image" /></a>',
      //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
      //   textColor: '#091E42', // Defaults to `#000`.
      //   isCloseable: true, // Defaults to `true`.
      // },

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Deutsch.vn',
        logo: {
          alt: 'Deutsch.vn Logo',
          src: 'img/avt.png',
        },
        items: [
          {
            to: '/docs/a1niveau',
            position: 'left',
            label: 'A1 Niveau',
            activeBaseRegex: `/docs/a1niveau/intro`,
          },
          {
            to: '/docs/a2niveau',
            position: 'left',
            label: 'A2 Niveau',
            activeBaseRegex: `/docs/a2niveau/intro`,
          },
          {
            to: '/docs/b1niveau',
            position: 'left',
            label: 'B1 Niveau',
            activeBaseRegex: `/docs/b1niveau/intro`,
          },
          {
            to: '/docs/b2niveau',
            position: 'left',
            label: 'B2 Niveau',
            activeBaseRegex: `/docs/b2niveau/intro`,
          },
          // {
          //   to: '/docs/intro',
          //   position: 'left',
          //   label: 'Tutorial',
          //   activeBaseRegex: `/docs/intro`,
          // },
          // {to: '/blog', 
          //   label: 'Blog', 
          //   position: 'left',
          //   activeBaseRegex: `/blog`,
          // },
          
          {
            href: 'https://facebook.com/yourpage',
            position: 'right',
            className: 'navbar-icon fab fa-facebook-f',
            'aria-label': 'Facebook',
          },
          {
            href: 'https://youtube.com/yourchannel',
            position: 'right',
            className: 'navbar-icon fab fa-youtube',
            'aria-label': 'YouTube',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Giới thiệu',
            items: [
              // {
              //   label: 'Giới thiệu',
              //   to: 'https://learn-anything.vn/gioi-thieu',
              // },
              // // {
              // //   label: 'Blog',
              // //   to: '/blog',
              // // },
              // {
              //   label: 'Tài trợ dự án',
              //   href: 'https://github.com/sponsors/thinh-vu',
              // },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
