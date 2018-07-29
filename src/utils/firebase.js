import { firebase } from '@firebase/app';
import '@firebase/firestore';
import config from '../../private/firebase-credentials';

console.log('config: ', config);

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();
