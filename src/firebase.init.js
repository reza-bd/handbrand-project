// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB95wgmpY7wdP2M4kiRAOrc1A_rDVemBfc",
  authDomain: "headbrands-shoe.firebaseapp.com",
  projectId: "headbrands-shoe",
  storageBucket: "headbrands-shoe.appspot.com",
  messagingSenderId: "1040694364137",
  appId: "1:1040694364137:web:f0c726ed8de7e1b8aa6d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;