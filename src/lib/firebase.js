import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYQAifZRjx0v8CiDSOjYGbOoS8H1xEkYI",
  authDomain: "bayan-cc143.firebaseapp.com",
  projectId: "bayan-cc143",
  storageBucket: "bayan-cc143.firebasestorage.app",
  messagingSenderId: "1003922207807",
  appId: "1:1003922207807:web:6336b50131426d1ce0f48a",
  measurementId: "G-P4J94CDNWC",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, auth, analytics };
