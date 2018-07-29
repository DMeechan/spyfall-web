import Vue from 'vue';
import 'bulma/css/bulma.css';

import App from './App.vue';

import './components';
import './assets/scss/app.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
