// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT6hBQKxLiY_mYdkn3oH_15EZ_MG7Fi_8",
  authDomain: "nadeem-1d3a8.firebaseapp.com",
  projectId: "nadeem-1d3a8",
  storageBucket: "nadeem-1d3a8.appspot.com",
  messagingSenderId: "175915775315",
  appId: "1:175915775315:web:6f569f2b41e9fcb37a9da6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
