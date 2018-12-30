import * as firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyCFku1g1AQDfQKTh0ahGX08s504yYXCYSc",
    authDomain: "photowall-92841.firebaseapp.com",
    databaseURL: "https://photowall-92841.firebaseio.com",
    projectId: "photowall-92841",
    storageBucket: "photowall-92841.appspot.com",
    messagingSenderId: "1064211574316"
};

firebase.initializeApp(config);

const database = firebase.database();

export {database};
