module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  themeConfig: {
    docsDir: 'docs',
    repo: 'ImpressGroup/vuepress',
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}