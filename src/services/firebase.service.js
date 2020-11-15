import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config/config.json'

const app = firebase.initializeApp(config.firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;