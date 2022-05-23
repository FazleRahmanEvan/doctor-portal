// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.React_APP_APPID ,
  authDomain:process.env.React_APP_APIKEY ,
  projectId:process.env.React_APP_AUTHDOMAIN ,
  storageBucket:process.env.React_APP_PROJECTID ,
  messagingSenderId:process.env.React_APP_STORAGEBUCKET ,
  appId:process.env.React_APP_MESSAGINGSENDERID ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;