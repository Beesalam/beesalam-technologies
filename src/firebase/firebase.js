import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCK-e5d5VyxwBI-nv51Vc86wwqb1aha4fY",
  authDomain: "beesalam-technologies.firebaseapp.com",
  projectId: "beesalam-technologies",
  storageBucket: "beesalam-technologies.firebasestorage.app",
  messagingSenderId: "286978965294",
  appId: "1:286978965294:web:66deb909faeac691acc4bf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;