import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDROWEKsj2wDeLEBQVf2pVINpBPN2Xg_v4",
    authDomain: "sumix-14981.firebaseapp.com",
    databaseURL: "https://sumix-14981.firebaseio.com",
    projectId: "sumix-14981",
    storageBucket: "gs://sumix-14981.appspot.com/",
    messagingSenderId: "1010733778443"
};
firebase.initializeApp(config);

export default firebase;