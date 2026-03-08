// js/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyCsQSn8mYrOK1ZeEwmB9R2XG_a21x0B0pA",
  authDomain: "skillbarter-75434.firebaseapp.com",
  projectId: "skillbarter-75434",
  storageBucket: "skillbarter-75434.firebasestorage.app",
  messagingSenderId: "384821402750",
  appId: "1:384821402750:web:5975a440742d1d45de0c2f",
  measurementId: "G-VSFEDBRBKZ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();
