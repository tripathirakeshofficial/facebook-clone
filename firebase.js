import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZLMNaJejg5rOrnyzx-UQnu_9coUwNMkk",
  authDomain: "facebook-clone-267d7.firebaseapp.com",
  projectId: "facebook-clone-267d7",
  storageBucket: "facebook-clone-267d7.appspot.com",
  messagingSenderId: "693429701459",
  appId: "1:693429701459:web:94734ff717afae43e42fa6",
  measurementId: "G-HKJ2HVZ03T",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
