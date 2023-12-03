import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import En from './locale/en.json'
import Ar from './locale/Ar.json'

import App from './App.vue'
import router from './router'
const app = createApp(App)

const i18n = createI18n({
    locale:"En",
    messages:{
        En:En,
        Ar:Ar,
    }

  })

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
