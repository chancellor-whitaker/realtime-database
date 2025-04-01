import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { createRoot } from "react-dom/client";

import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { StrictMode } from "react";

import App from "./App.jsx";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://my-first-project-ff552-default-rtdb.firebaseio.com/",
  storageBucket: "my-first-project-ff552.firebasestorage.app",
  authDomain: "my-first-project-ff552.firebaseapp.com",
  appId: "1:543485844406:web:c45d51cbde25ce6af33f17",
  apiKey: "AIzaSyBvOhch12rclyYBd5oG0yHCOsVAlTpA2LE",
  projectId: "my-first-project-ff552",
  messagingSenderId: "543485844406",
  measurementId: "G-61NVJ5J70Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
