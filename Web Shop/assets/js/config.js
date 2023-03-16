// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_J6lJ8isYemIyUsAcKu9kEKgmRI0Gf4Q",
  authDomain: "ecommfinal-62e44.firebaseapp.com",
  projectId: "ecommfinal-62e44",
  databaseURL: "https://ecommfinal-62e44-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "ecommfinal-62e44.appspot.com",
  messagingSenderId: "734073653018",
  appId: "1:734073653018:web:b91177a39f70664cff0ea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app