export default {
  modules: ['@nuxt/content'],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css' }
      ],
      script: [
        {
          src: 'https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js',
          async: true,
          defer: true
        }
      ]
    }
  }
};
