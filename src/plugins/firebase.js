import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAc_prmgBk1PTmDCZxo53-pCcP3CfObOSc',
  authDomain: 'vue-contact-9e8e1.firebaseapp.com',
  databaseURL: 'https://vue-contact-9e8e1.firebaseio.com',
  projectId: 'vue-contact-9e8e1',
  storageBucket: 'vue-contact-9e8e1.appspot.com',
  messagingSenderId: '1097947779942',
  appId: '1:1097947779942:web:f07305f61859c3d6356ea7',
  measurementId: 'G-97HVKJ8ZZ7',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export default db;
