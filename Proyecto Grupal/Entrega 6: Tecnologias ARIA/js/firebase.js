// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8_kImmpVsI23bq__uXV77waGbgeLsFM",
  authDomain: "practica-5-grupo-2.firebaseapp.com",
  projectId: "practica-5-grupo-2",
  storageBucket: "practica-5-grupo-2.appspot.com",
  messagingSenderId: "416795634734",
  appId: "1:416795634734:web:9351c072bc996985cb83bf"
};

const app = initializeApp(firebaseConfig);
const myDataBase = getFirestore();

const saveUser = (gmail, pwd) => {
  addDoc(collection(myDataBase, 'users'), {
    gmail: gmail,
    password: pwd
  });
}

btn.onclick = function () {
  saveUser(email.value, password.value)
}
