// FIREBASE CONFIG
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB79umJ7cjWlG_7-YswI-U3shHwW5iHEjw",
  authDomain: "timoraah.firebaseapp.com",
  databaseURL:
    "https://timoraah-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "timoraah",
  storageBucket: "timoraah.appspot.com",
  messagingSenderId: "1022526719741",
  appId: "1:1022526719741:web:3d7d87e9808a538ad9a094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";

// const db = getDatabase();
const db = getFirestore();

// References

let cust_name = document.getElementById("cust_name");
let cust_quote = document.getElementById("cust_quote");
let cust_time = document.getElementById("cust_time");
let cust_star = document.getElementById("cust_star");

let addBtn = document.getElementById("add_review");
console.log(cust_name.value);

function clearForm() {
  cust_name.value = "";
  cust_quote.value = "";
  cust_star.value = "";
  cust_time.value = "";
}

// Using firestore
async function AddReviewToFirestore(e) {
  e.preventDefault();
  console.log("clicked");
  console.log(cust_name.value);
  try {
    const docRef = await addDoc(collection(db, "review"), {
      Name: cust_name.value,
      Quote: cust_quote.value,
      Star: cust_star.value,
      Time: cust_time.value,
    });
    console.log("Document written with ID: ", docRef.id);
    clearForm();
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error");
  }

}

addBtn.addEventListener("click", AddReviewToFirestore);

// @TODO
// 1. Pricing