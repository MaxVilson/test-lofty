import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import Vuelidate from 'vuelidate';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
