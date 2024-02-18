import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLYEoChSkA6AFQnE_LB1uo0SqJTp8RKLc",
  authDomain: "reflected-alpha-388713.firebaseapp.com",
  projectId: "reflected-alpha-388713",
  storageBucket: "reflected-alpha-388713.appspot.com",
  messagingSenderId: "500134438975",
  appId: "1:500134438975:web:ee53a01d2fc4967ed7f08a",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
