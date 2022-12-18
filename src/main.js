import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FieldComponent from "@/components/form/FieldComponent.vue"

const app = createApp(App)

app.component("FieldComponent",FieldComponent)

app.use(router).mount('#app')