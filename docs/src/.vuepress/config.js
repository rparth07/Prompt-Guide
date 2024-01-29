const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Prompt Guide',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Prompt Examples',
        link: '/prompt examples/'
      },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'chapter-1',
            'chapter-2',
            'chapter-3',
            'chapter-4',
            'chapter-5',
            'chapter-6',
            'chapter-7',
            'chapter-8',
            'chapter-9',
            'chapter-10',
            'appendix',
          ]
        }
      ],
      '/prompt examples/': [
        {
          title: 'Prompts',
          collapsable: false,
          children: [
            // '',
            'Autonomous Vehicles and Robotics',
            'Climate Change and Environmental Sciences',
            'Content Generation',
            'Cybersecurity',
            'Data Analytics and Business Intelligence',
            'E-commerce and Customer Support',
            'Education and E-Learning',
            'Financial Services',
            'HealthCare and Medical Research',
            'NLP',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
