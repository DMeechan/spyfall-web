import Vue from 'vue';

import VueFire from 'vuefire';
import { firebase } from '@firebase/app';
import '@firebase/firestore';

import config from '../../private/firebase-credentials';
if (typeof config === 'undefined')
  throw new Error('firebase.js | credentials are invalid: ', config);

let output;

if (firebase.apps.length) {
  console.error(
    'firebase.js | Whoops, it looks like a Firebase app has already been initialized'
  );
  console.error('firebase.js | Exiting out to avoid re-initialization errors');
  output = null;
} else {
  console.log(
    'firebase.js | Initializing Firebase app with credentials: ',
    config
  );
  Vue.use(VueFire);

  const firebaseApp = firebase.initializeApp(config);
  const firestore = firebaseApp.firestore();

  firestore.settings({
    timestampsInSnapshots: true,
  });

  output = firebaseApp.firestore();

  // Enabling the timestampsInSnapshots setting
  // (which is now required)
  // Means you need to convert timestamps into Dates
  // When getting snapshots from Firestore

  // Example:
  // const timestamp = snapshot.get('created_at');
  // const date = timestamp.toDate();
}

export default output;
