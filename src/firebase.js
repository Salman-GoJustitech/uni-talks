import * as firebase from 'firebase';
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDoFhVwAx4cYngh96KNDY7RjQCKB9SuOzE",
    authDomain: "uni-talks.firebaseapp.com",
    databaseURL: "https://uni-talks.firebaseio.com",
    projectId: "uni-talks",
    storageBucket: "uni-talks.appspot.com",
    messagingSenderId: "56556087798",
    appId: "1:56556087798:web:7d510019da467ab550ffd7",
    measurementId: "G-RSC283PWF6"
};

firebase.initializeApp(config);

export default firebase;