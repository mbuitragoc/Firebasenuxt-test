// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOReCr6KiqmSpteDtR2AVpDH88PghyHD8",
  authDomain: "nuxt3-firebase-test-395dc.firebaseapp.com",
  projectId: "nuxt3-firebase-test-395dc",
  storageBucket: "nuxt3-firebase-test-395dc.appspot.com",
  messagingSenderId: "344408288642",
  appId: "1:344408288642:web:2e68fe784c1f1c53cdb39b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);
