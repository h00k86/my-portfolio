// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔥 Configurazione Firebase (prendi questi dati dalla console Firebase)
const firebaseConfig = {
  projectId: "h00k86",

};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


console.log("Firestore inizializzato correttamente:", db);

export { db };
