import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDaaC5Sig9tNH5obPNdrIhsiDKlr6Wiw78",
  authDomain: "attendance-smit-bb46a.firebaseapp.com",
  projectId: "attendance-smit-bb46a",
  storageBucket: "attendance-smit-bb46a.appspot.com",
  messagingSenderId: "421970070235",
  appId: "1:421970070235:web:999ac083ead158f5541afe"
};

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
