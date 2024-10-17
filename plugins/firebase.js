import { initializeApp } from '@firebase/app';
import { getFunctions } from '@firebase/functions';
import firebaseConfig from '../firebase.json';

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export { app, functions };