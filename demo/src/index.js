import Vue from 'vue'
import App from '../../src/App.vue'
import '../../src/components'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
