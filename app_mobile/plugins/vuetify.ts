import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { pt } from 'vuetify/locale'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    locale: {
      locale: 'pt',
      messages: { pt },
    },
  })
  app.vueApp.use(vuetify)
})