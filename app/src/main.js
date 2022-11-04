import { createApp } from "vue";
import App from './App.vue'

import FlDesign from './packages'

let vm = createApp(App)
vm.use(FlDesign)
vm.mount('#app')