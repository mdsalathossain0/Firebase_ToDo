
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKzF2TcAIxZYYBvDT8Th6wE8cqsmL-eco",
  authDomain: "todo-bfcdd.firebaseapp.com",
  projectId: "todo-bfcdd",
  storageBucket: "todo-bfcdd.firebasestorage.app",
  messagingSenderId: "167571273163",
  appId: "1:167571273163:web:f200fa5dcfb2bc07e3f24e"
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig