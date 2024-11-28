import app from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1XbJIstRHZ8sDjX5AYZP0HxKPnATxWTM",
  authDomain: "biblioteca-702df.firebaseapp.com",
  projectId: "biblioteca-702df",
  storageBucket: "biblioteca-702df.firebasestorage.app",
  messagingSenderId: "183837884273",
  appId: "1:183837884273:web:77efeb5c866dffb7dc80d0",
  measurementId: "G-79681250VG"
};


// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()
const storage = app.storage()

export { db, auth, storage }