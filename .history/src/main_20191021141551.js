import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const checkParentIframe = () => {

};

const addParentListeners = () => {

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
