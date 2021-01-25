module.exports = {
  title: '笔记',
  description: '川的个人前端笔记',
  head: [
    ['link',
      { rel: 'icon', href: '/icon.png' }
    ],
  ],
  themeConfig: {
    logo: '/icon.png', 
    nav: [
      { text: '首页', link: '/' },
      {
        text: '笔记',      
        ariaLabel: '笔记',   
        items: [
          { text: 'js', link: '/docs/js/' },
          { text: 'css', link: '/docs/css/' },
          { text: 'vue', link: '/docs/vue/' },
          { text: 'react', link: '/docs/react/' },
          { text: 'html', link: '/docs/html/' },
        ]
      },
      { text: 'Github', link: 'https://github.com/liuchuan95' },
    ],
    sidebar: {
      '/docs/js/': [
        {
          title: '原型',   
          collapsable: false,
          sidebarDepth: 1,   
          children: [
            ['./', 'js'],  
            ['原型2.md', '原型2']
          ]
        },
      ],
      '/docs/html/': [
        {
          title: 'html',   
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['./', 'html'],
          ]
        },
      ],
    }
  }
}