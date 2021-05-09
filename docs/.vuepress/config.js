module.exports = {
    base: '/opqqq-plugin-press/',
    title: 'opqqq-plugin',
    description: '基于 opqqq 的插件使用说明',
    port: 9527,
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/logo.png'
        }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/react-toastify@7.0.3/dist/ReactToastify.min.css'
        }
      ]
    ],
    plugins: [
      ['@vuepress/back-to-top'],
      [
        'vuepress-plugin-zooming',
        {
          selector: '.my-img',
          delay: 1000
        },
      ]
    ],
    themeConfig: {
      sidebar: 'auto',
      nav: [
        { text: '主页', link: '/' },
        { text: '从零开始', link: '/guide/manual' },
        { text: '了解基础', link: '/guide/guide' },
        {
          text: '插件说明',
          items: [
            { text: '自定义表情包', link: '/iotqq/image-custom' },
            { text: '关注早晚安', link: '/iotqq/good-morning' },
            { text: 'Vtuber / Pcr / 原神 运势', link: '/iotqq/vtuber-fortune' },
            { text: '可以爬了吗', link: '/iotqq/throw-creep' },
            { text: 'Strings 签到', link: '/iotqq/sign-in' },
            { text: '5000 兆元字体生成器', link: '/iotqq/5000-choyen' }
          ]
        },
        { text: '其他', link: '/other/other' },
        { text: '加入我们', link: '/other/join' },
        { text: 'GitHub', link: 'https://github.com/opq-osc/opqqq-plugin' }
      ],
      lastUpdated: '上次更新',
      smoothScroll: true,
      search: false
  }
}

