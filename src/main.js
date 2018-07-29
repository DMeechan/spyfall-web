import Vue from 'vue';
import VueFirestore from 'vue-firestore';

import 'bulma/css/bulma.css';
import App from './App.vue';

import './components';
import './assets/scss/app.scss';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueFirestore);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
