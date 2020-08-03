module.exports = {
    base: '/iotqq-plugin-press/',
    title: 'iotqq-plugin',
    description: '基于 iotqq 的插件使用说明',
    port: 9527,
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/logo.png'
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
        { text: '了解基础', link: '/guide/guide' },
        {
          text: '插件说明',
          items: [
            { text: '自定义表情包', link: '/iotqq/image-custom' },
            { text: '关注早晚安', link: '/iotqq/good-morning' }
          ]
        },
        { text: '其他', link: '/other/other' },
        { text: 'GitHub', link: 'https://github.com/fz6m/iotqq-plugin' }
      ],
      lastUpdated: '上次更新',
      smoothScroll: true,
      search: false
  }
}

