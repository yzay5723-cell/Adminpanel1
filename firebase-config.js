// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAovCxbbiu9AbzR6HDJneCL8vOGPm02n4",
  authDomain: "test-f1b7a.firebaseapp.com",
  databaseURL: "https://test-f1b7a-default-rtdb.firebaseio.com",
  projectId: "test-f1b7a",
  storageBucket: "test-f1b7a.firebasestorage.app",
  messagingSenderId: "987586572474",
  appId: "1:987586572474:web:26be1d8fe5396a5aeed283",
  measurementId: "G-SLY18M6TZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
