// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
  // apiKey: "AIzaSyDupSAedigIjbuUwo08HmeredJgK0VK_t8",
  // authDomain: "moto-parts-62e64.firebaseapp.com",
  // projectId: "moto-parts-62e64",
  // storageBucket: "moto-parts-62e64.appspot.com",
  // messagingSenderId: "1042349067560",
  // appId: "1:1042349067560:web:6a54440bc1eef7be6f541d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig)

const auth = getAuth(app);
export default auth;