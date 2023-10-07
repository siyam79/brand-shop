import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const fireBaseConfig = {
    apiKey: "AIzaSyAamirhFDoeAN9ZjecpTgsex4YL1tzs-0k",
    authDomain: "social-event-c5d78.firebaseapp.com",
    projectId: "social-event-c5d78",
    storageBucket: "social-event-c5d78.appspot.com",
    messagingSenderId: "761736755913",
    appId: "1:761736755913:web:fc54d30cc6b330bd496b18"
};

// Initialize Firebase
const app = initializeApp(fireBaseConfig);

export const auth = getAuth(app);


