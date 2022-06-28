// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf-5wgUUG_8nEQv--NYk6RAee4_0hGZqE",
  authDomain: "online-shop-543a4.firebaseapp.com",
  projectId: "online-shop-543a4",
  storageBucket: "online-shop-543a4.appspot.com",
  messagingSenderId: "1070224139707",
  appId: "1:1070224139707:web:f09bc06cfaaa2bf51b109e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
