import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCSo6XYvYzdfDS2HAr6rdvqBMxjYFbg6C4",
    authDomain: "platform-66a13.firebaseapp.com",
    databaseURL: "https://platform-66a13.firebaseio.com",
    projectId: "platform-66a13",
    storageBucket: "gs://platform-66a13.appspot.com/",
    messagingSenderId: "580887770244"
};
firebase.initializeApp(config);

export default firebase;