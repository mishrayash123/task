import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3XcuQcKY1uFwqPxYsr7Fl1kJrBFVI2Vo",
  authDomain: "profile-c2f87.firebaseapp.com",
  projectId: "profile-c2f87",
  storageBucket: "profile-c2f87.appspot.com",
  messagingSenderId: "1029209016746",
  appId: "1:1029209016746:web:b7e093c25e4b8f488203d3",
  measurementId: "G-NNYJ72DDLJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth(app);

export {auth,db};