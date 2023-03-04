import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDZt2cDht3N1klDZzq_4BPWpMcsdOS0Ars",
  authDomain: "mutualride-c7529.firebaseapp.com",
  projectId: "mutualride-c7529",
  storageBucket: "mutualride-c7529.appspot.com",
  messagingSenderId: "277400908128",
  appId: "1:277400908128:web:0aec0aed603ccaa3ed6e05",
  measurementId: "G-SH6J136Y8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
