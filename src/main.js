import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueClickAway from "vue3-click-away";
import { useGlobalComponents } from './router/utils'

const app = createApp(App)
useGlobalComponents(app)

app
    .use(router)
    .use(VueClickAway)
    .mount('#app')

