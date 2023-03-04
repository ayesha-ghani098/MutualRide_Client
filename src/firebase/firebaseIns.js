import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyARAnXsQLNzeE44fDk96eqzuSAuW3Bio_8",
  authDomain: "beautifulfyp-6eca0.firebaseapp.com",
  databaseURL: "https://beautifulfyp-6eca0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "beautifulfyp-6eca0",
  storageBucket: "beautifulfyp-6eca0.appspot.com",
  messagingSenderId: "423400004949",
  appId: "1:423400004949:web:4222f86e672c3396f4a3dc",
  measurementId: "G-PLYQ9CW1JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
