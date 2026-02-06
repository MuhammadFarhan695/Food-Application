import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    getDocs,
    updateDoc,
    addDoc,
    query,
    where,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyALQK0BoOq1ifhfId-uxqdTnK9GQwcu9uo",
    authDomain: "lazzat-point-4df9c.firebaseapp.com",
    projectId: "lazzat-point-4df9c",
    storageBucket: "lazzat-point-4df9c.appspot.com",
    messagingSenderId: "833905732596",
    appId: "1:833905732596:web:0f2a738ec9f23651aea7a1"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export {
      auth,
      db,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      onAuthStateChanged,
      signOut,
      doc,
      setDoc,
      getDoc,
      collection,
      getDocs,
      updateDoc,
      addDoc,
      query,
      where,
      deleteDoc,
  }