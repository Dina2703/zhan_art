// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK8oMcGSVHLJx4IwYQ7ojYNFqZc8b_1RM",
  authDomain: "zhan-artwork.firebaseapp.com",
  projectId: "zhan-artwork",
  storageBucket: "zhan-artwork.appspot.com",
  messagingSenderId: "887293335215",
  appId: "1:887293335215:web:9455bfe8db8becdac9265a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
