import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log('Created');
  },
  mounted() {
    console.log('Mounted');
  },
}).$mount('#app');
