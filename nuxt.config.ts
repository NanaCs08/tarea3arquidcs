import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
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
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: '/css/normalize.css' },
        { rel: 'stylesheet', href: '/css/skeleton.css' },
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }
      ],
      script: [
        { src: 'https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js', async: true }
      ]
    }
  }
});
