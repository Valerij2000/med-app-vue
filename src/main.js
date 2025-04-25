import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BlogPost from './components/BlogPost.vue'

import './assets/main.scss'

const app = createApp(App)

// Global registration
app.component('BlogPost', BlogPost)

app.use(createPinia())
app.use(router)

app.mount('#app')
