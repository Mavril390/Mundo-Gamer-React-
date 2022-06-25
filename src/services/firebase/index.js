import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUTI45yN_azfq22uV0p0lR9tZllLLD2VU",
  authDomain: "mundo-gamer-7f72f.firebaseapp.com",
  projectId: "mundo-gamer-7f72f",
  storageBucket: "mundo-gamer-7f72f.appspot.com",
  messagingSenderId: "930892674305",
  appId: "1:930892674305:web:ae31a82ed0214f098ed700",
  measurementId: "G-325Z1X2S5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
