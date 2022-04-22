
import { initializeApp } from "firebase/app";
import  { getAuth } from    "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2ZyEIuFAzZvnyP7A53_NZKEy2pEr0hQE",
  authDomain: "millestone-blog.firebaseapp.com",
  databaseURL: "https://millestone-blog-default-rtdb.firebaseio.com",
  projectId: "millestone-blog",
  storageBucket: "millestone-blog.appspot.com",
  messagingSenderId: "675901837903",
  appId: "1:675901837903:web:e3c6dd285ed2d698f9503a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);