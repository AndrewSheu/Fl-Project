import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

require('materialize-css/dist/css/materialize.css')

require('materialize-css/dist/js/materialize.js')
  window.axios = axios


createApp(App).mount('#app')
