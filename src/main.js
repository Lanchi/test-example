import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import utils from './utility';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log('Created hook');
    utils.checkParentIframe();

    utils.addParentListeners();

    utils.loadOfferFromApi();
  },
}).$mount('#app');
