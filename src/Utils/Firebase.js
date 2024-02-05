// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtGj4v9bOP7ukEQxXM0sfpoOIULME6rB4",
  authDomain: "netflixgptapp123.firebaseapp.com",
  projectId: "netflixgptapp123",
  storageBucket: "netflixgptapp123.appspot.com",
  messagingSenderId: "1075061782036",
  appId: "1:1075061782036:web:0c10f715b810abc4185901",
  measurementId: "G-H1HZFS90GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();