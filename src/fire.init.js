
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9Nmyil2Q5QIzK3ubfU97oQbYabD7-bhE",
  authDomain: "men-collection-23753.firebaseapp.com",
  projectId: "men-collection-23753",
  storageBucket: "men-collection-23753.appspot.com",
  messagingSenderId: "513375129856",
  appId: "1:513375129856:web:8fd19591f2f6d07c1e63e5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app) ; 
export default auth