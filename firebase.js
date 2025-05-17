import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVjsiTMbEt6waEBu-s4FpvSlDlrBtIRR8",
  authDomain: "the-dream-chaser-project.firebaseapp.com",
  projectId: "the-dream-chaser-project",
  storageBucket: "the-dream-chaser-project.appspot.com",
  messagingSenderId: "163574465822",
  appId: "1:163574465822:web:07c19784b944f2778d350f",
  measurementId: "G-DDSY56CKBX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
