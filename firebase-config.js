// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVwu1s3leBma6aHJWOOp8IuO_qGrBI8c",
  authDomain: "zamakonke-5a8f7.firebaseapp.com",
  projectId: "zamakonke-5a8f7",
  storageBucket: "zamakonke-5a8f7.appspot.com",
  messagingSenderId: "558603091608",
  appId: "1:558603091608:web:2cc79a5e123a2af1be9aed",
  measurementId: "G-1BH8PWQ3MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);