
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDoyK7RO4hLDsAS7YLKgaW9kLql95aHD9E",
  authDomain: "chhif-database.firebaseapp.com",
  projectId: "chhif-database",
  storageBucket: "chhif-database.firebasestorage.app",
  messagingSenderId: "98533078449",
  appId: "1:98533078449:web:e644e8f98d1162ebcf3990"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
