import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { simpleBlogPlugin } from './blog-plugin.js'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Prompt Guide 101',
  description: 'The Prompt Guide project is an initiative to create a comprehensive and standardized guide for writing prompts for AI systems. The project aims to provide clear and consistent instructions, rules, and examples for prompt creators, as well as best practices and tips for improving the quality and effectiveness of prompts. The project also seeks to foster a community of prompt enthusiasts who can share their feedback, ideas, and challenges with each other. The Prompt Guide project is a valuable resource for anyone who wants to learn more about prompt writing or enhance their skills in this domain.',

  theme: defaultTheme({
    logo: '/prompt-guide.jpg',

    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Prompt Examples',
        link: '/prompt-examples/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
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
      '/prompt-examples/': [
        {
          title: 'Prompts Examples',
          collapsable: false,
          children: [
            'autonomous-vehicles-and-robotics',
            'climate-change-and-environmental-sciences',
            'content-generation',
            'cybersecurity',
            'data-analytics-and-business-intelligence',
            'e-commerce-and-customer-support',
            'education-and-e-learning',
            'financial-services',
            'healthCare-and-medical-research',
            'nlp',
          ]
        }
      ],
    }
  }),

  plugins: [
    simpleBlogPlugin({
      // only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // getting article info
      getInfo: ({ frontmatter, title }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt: frontmatter.excerpt || '',
      }),

      category: ['category', 'tag'],

      type: [
        {
          key: 'article',
          // remove archive articles
          filter: (page) => !page.frontmatter.archive,

          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
        },
      ],
    }),
  ],

  bundler: viteBundler(),
})
