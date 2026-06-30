module.exports = {
  title: 'Kari Dev Docs',
  tagline: 'Learn. Build. Mentor.',
  url: 'https://docs.karidev.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kari-dev',
  projectName: 'knowledge-hub',
  themeConfig: {
    navbar: {
      title: 'Kari Dev',
      logo: { alt: 'Kari Dev Logo', src: 'img/logo.svg' },
      items: [
        { to: '/docs/beginner/getting-started', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/community', label: 'Community', position: 'left' },
        { href: 'https://github.com/kari-dev/knowledge-hub', label: 'GitHub', position: 'right' },
      ],
    },
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['bash', 'python', 'java', 'json'],
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'karidev',
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kari-dev/knowledge-hub/edit/main/',
      },
      blog: { showReadingTime: true },
      theme: { customCss: require.resolve('./src/css/custom.css') },
    }],
  ],
};
