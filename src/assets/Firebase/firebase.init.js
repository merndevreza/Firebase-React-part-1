// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoyHyLg8ul0b-RVSk5fieoeSUlYJ6jBZM",
  authDomain: "first-firebase-project-19cb0.firebaseapp.com",
  projectId: "first-firebase-project-19cb0",
  storageBucket: "first-firebase-project-19cb0.appspot.com",
  messagingSenderId: "608966941862",
  appId: "1:608966941862:web:ad71a8c1befcf793f4a867",
  measurementId: "G-1BDZ1RVKBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;