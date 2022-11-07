
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC4bddBPE8IsGPqM7qgOjSicKaIQhGeab8",
    authDomain: "agroinformatica3004.firebaseapp.com",
    projectId: "agroinformatica3004",
    storageBucket: "agroinformatica3004.appspot.com",
    messagingSenderId: "95259945848",
    appId: "1:95259945848:web:0152f50508011e559ef68d",
    measurementId: "G-BFKZ2QZMZ8"
  };

// iniciar firebase

const baseDatos = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveTask = (title, description) => {
    console.log(title,description)
}

export const getUsers = () => getDocs(collection(db, 'usuarios'))