import Vue from 'vue';

import VueFire from 'vuefire';
import {
  firebase
} from '@firebase/app';
import '@firebase/firestore';

import config from '../../private/firebase-credentials';
if (typeof config === 'undefined') throw new Error('firebase.js | credentials are invalid: ', config);

let output;

if (firebase.apps.length) {
  console.error('firebase.js | Whoops, it looks like a Firebase app has already been initialized');
  console.error('firebase.js | Exiting out to avoid re-initialization errors');
  output = null;

} else {
  console.log('firebase.js | Initializing Firebase app with credentials: ', config);
  Vue.use(VueFire);
  const firebaseApp = firebase.initializeApp(config);

  output = firebaseApp.firestore();
}

export default output;