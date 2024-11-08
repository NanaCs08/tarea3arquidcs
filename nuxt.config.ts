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
        { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css' },
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' } // Añade Bootstrap
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
