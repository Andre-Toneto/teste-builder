import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { pt } from 'vuetify/locale'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: 'pt',
      messages: { pt },
    },
    theme: {
      defaultTheme: 'light'
    }
  })
  app.vueApp.use(vuetify)
})
