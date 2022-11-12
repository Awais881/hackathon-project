import "./index.css"
import { initializeApp} from "firebase/app"
import {db} from './firebase';
import {
  getFirestore, collection,
  addDoc, getDocs, doc,
  onSnapshot, query, serverTimestamp,
  orderBy, deleteDoc, updateDoc

} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaaC5Sig9tNH5obPNdrIhsiDKlr6Wiw78",
  authDomain: "attendance-smit-bb46a.firebaseapp.com",
  projectId: "attendance-smit-bb46a",
  storageBucket: "attendance-smit-bb46a.appspot.com",
  messagingSenderId: "421970070235",
  appId: "1:421970070235:web:999ac083ead158f5541afe"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


function  Dashboard() {




    return (
    <>
      This Home age
    </>
    );
    
}
export default Dashboard;