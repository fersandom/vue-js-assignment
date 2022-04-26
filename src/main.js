import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import mainStore from './store/mainStore'

createApp(App).use(router).provide(mainStore).mount('#app')
