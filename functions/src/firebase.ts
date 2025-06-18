
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAyIkDjKkNLofxBMBKWMQfRM-ePVu-6vno",
  authDomain: "eco-earth-27eaa.firebaseapp.com",
  projectId: "eco-earth-27eaa",
  storageBucket: "eco-earth-27eaa.firebasestorage.app",
  messagingSenderId: "42867358995",
  appId: "1:42867358995:web:d9bb67f5c48fff02166ee6",
  measurementId: "G-MP4PYG9EHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
