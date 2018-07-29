import Vue from 'vue';
import 'bulma/css/bulma.css';

import App from './App.vue';

import './components';
import './assets/scss/app.scss';
import './registerServiceWorker';
import router from './router';

Vue.config.ignoredElements = [
  'frosted-glass',
  'frosted-glass-container',
];


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
