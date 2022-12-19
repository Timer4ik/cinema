import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import componentsUI from '@/components/UI'
import componentsLayout from '@/components/Layout'

const components = [...componentsUI, ...componentsLayout]

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});



app.use(router).mount('#app')