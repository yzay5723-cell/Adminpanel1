// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
            apiKey: "AIzaSyBVBGxymgXruVJnkyKvRpMBIF2ogTV6WsM",
            authDomain: "daily-visa-myanmar.firebaseapp.com",
            projectId: "daily-visa-myanmar",
            storageBucket: "daily-visa-myanmar.firebasestorage.app",
            messagingSenderId: "687023213072",
            appId: "1:687023213072:web:44af3f08417754301d9895",
            measurementId: "G-C6YLRNQ0MM"
        };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };