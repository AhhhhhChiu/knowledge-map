import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "knowledge-map",
  description: "My knowledge map of computer science",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Network', link: '/network/index' },
    ],

    sidebar: [
      {
        text: 'Network',
        items: [
          { text: 'Application Layer', link: '/network/application-layer/index' },
          { text: 'Transport Layer', link: '/network/transport-layer/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AhhhhhChiu/knowledge-map' }
    ]
  }
})
