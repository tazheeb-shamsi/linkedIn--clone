import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyC2BJAG8ZeJ59Jsq8W6Sx7dh24WvryL4cI",
    authDomain: "linkedin-clone-ee1cf.firebaseapp.com",
    projectId: "linkedin-clone-ee1cf",
    storageBucket: "linkedin-clone-ee1cf.appspot.com",
    messagingSenderId: "374073825702",
    appId: "1:374073825702:web:8669d993c08dbca389d767"
  };


    const firebaseApp = firebase.initializeApp(firebaseConfig)
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();

    export { auth, provider, storage};
    export default db;