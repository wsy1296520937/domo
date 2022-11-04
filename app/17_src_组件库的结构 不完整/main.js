import { createApp } from "vue";
import App from './App.vue'

import Fluent from './packages'

let vm = createApp(App)

vm.use(Fluent)

vm.mount('#app')