import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnP6n-Sh5LHzvMDONcR2OXbId7sDhpVo8",
  authDomain: "project-14-hrnet-17959.firebaseapp.com",
  projectId: "project-14-hrnet-17959",
  storageBucket: "project-14-hrnet-17959.appspot.com",
  messagingSenderId: "143469057726",
  appId: "1:143469057726:web:9cb5a07a87e3678227b0ef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
