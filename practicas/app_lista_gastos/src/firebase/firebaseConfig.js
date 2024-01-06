// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.RRACT_APP_APIKEY,
  authDomain:process.env.RRACT_APP_AUTHDOMAIN,
  projectId:process.env.RRACT_APP_PROJECTID,
  storageBucket:process.env.RRACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.RRACT_APP_MESSAGINGSENDERID,
  appId:process.env.RRACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

export {auth,db};