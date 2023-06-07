// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Z5XYdbHr7RPV3wcO_PXKOSeJtzzIqqI",
  authDomain: "e-comv2.firebaseapp.com",
  projectId: "e-comv2",
  storageBucket: "e-comv2.appspot.com",
  messagingSenderId: "5333753610",
  appId: "1:5333753610:web:81fdfb2f0c3df46439a4f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}