import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const checkParentIframe = () => {
  console.log('Checking parent Iframe');
};

const addParentListeners = () => {
  console.log('Adding listeners for parent messages');
};

const loadOfferFromApi = () => {
  console.log('Loading offer...');
};

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log('Created');
    checkParentIframe();

    addParentListeners();

    loadOfferFromApi();
  },
  mounted() {
    console.log('Mounted');
  },
}).$mount('#app');
