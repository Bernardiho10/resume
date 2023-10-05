// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { projectData } from "./data/projectData";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaqUOxKc2SZa7X87WIlanz4W1g4rKxC-M",
  authDomain: "portfolio-ce9f1.firebaseapp.com",
  projectId: "portfolio-ce9f1",
  storageBucket: "portfolio-ce9f1.appspot.com",
  messagingSenderId: "466787844147",
  appId: "1:466787844147:web:4f95a86a67b4454be26346",
  measurementId: "G-2E2Y0JKTZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// This code adds projects to my resume database in firebase
// only use when you have new projects and images to add
// projectData.forEach(async (projectData, index) => {
//   try {
//     const docRef = await addDoc(collection(db, "projects"), projectData);
//     console.log(`Document ${index + 1} added with ID: ${docRef.id}`);
//   } catch (error) {
//     console.error(`Error adding document ${index + 1}:`, error);
//   }
// });

export default db;
