

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {router} from './router'

const app = createApp(App)
console.log(router)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)
app.mount('#app')