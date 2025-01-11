import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCw0mSHyiJo67gaT19UN0-GgtDL-v-wNPY",
  authDomain: "red-website-d46b9.firebaseapp.com",
  projectId: "red-website-d46b9",
  storageBucket: "red-website-d46b9.firebasestorage.app",
  messagingSenderId: "671248093892",
  appId: "1:671248093892:web:6e28eb687de6c81a6e2f91",
  measurementId: "G-4P8E8HKQBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
