


import "firebase/auth"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";

const  firebaseApp = initializeApp({
   apiKey: "AIzaSyAdrrACvOz9jBKL3p1D9wqvMyVb_g-HStA",
  authDomain: "capstone-tiq.firebaseapp.com",
  projectId: "capstone-tiq",
  storageBucket: "capstone-tiq.appspot.com",
  messagingSenderId: "600281040493",
  appId: "1:600281040493:web:abeeba44c167200e486164"
})

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export default  firebaseApp