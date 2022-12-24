import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useGlobalComponents } from './router/utils'

const app = createApp(App)
useGlobalComponents(app)

app.use(router).mount('#app')

