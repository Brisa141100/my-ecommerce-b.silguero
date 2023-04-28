import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCitiKy-izJ9aWV4oOQqNMAjy1rQqj7MPs",
  authDomain: "myecommerce-bs.firebaseapp.com",
  projectId: "myecommerce-bs",
  storageBucket: "myecommerce-bs.appspot.com",
  messagingSenderId: "154421856044",
  appId: "1:154421856044:web:27de9e0d65606287a54e89",
  measurementId: "G-DNBFMN983X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);