import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAktbkCrQ_vwkGpyxrrNnyVQBUHUjAn2fE",
  authDomain: "projectbreak3-220eb.firebaseapp.com",
  projectId: "projectbreak3-220eb",
  storageBucket: "projectbreak3-220eb.firebasestorage.app",
  messagingSenderId: "752104323081",
  appId: "1:752104323081:web:83e962dfac1f66d38620d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);