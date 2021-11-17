import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCLEhOFH3tRfRT0uKbuO9ns7cyaSfih_3s",
    authDomain: "colimafc-f57e6.firebaseapp.com",
    projectId: "colimafc-f57e6",
    storageBucket: "colimafc-f57e6.appspot.com",
    messagingSenderId: "613712632512",
    appId: "1:613712632512:web:0f2e7c788658b398ebeb25"
  };

const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
const storage = fb.storage();

export {db,storage};
