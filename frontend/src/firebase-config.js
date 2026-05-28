// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeiQ4iDOdepEAbXk_2E-v-O9IwUa1EQUY",
  authDomain: "furni-final-project.firebaseapp.com",
  projectId: "furni-final-project",
  storageBucket: "furni-final-project.appspot.com",
  messagingSenderId: "325945076414",
  appId: "1:325945076414:web:d012431f92d94879feccef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(app);
