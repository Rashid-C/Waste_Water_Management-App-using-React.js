import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "books-app-dbb72.firebaseapp.com",
  projectId: "books-app-dbb72",
  storageBucket: "books-app-dbb72.appspot.com",
  messagingSenderId: "244251816624",
  appId: "1:244251816624:web:d4ca78cb4580c6f95bc175",
};


export const app = initializeApp(firebaseConfig);
