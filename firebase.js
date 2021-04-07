import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3wEmownBgGueCfFrioRYtsp4Fl0VJaDc",
    authDomain: "bki-test-6622b.firebaseapp.com",
    databaseURL: "https://bki-test-6622b-default-rtdb.firebaseio.com",
    projectId: "bki-test-6622b",
    storageBucket: "bki-test-6622b.appspot.com",
    messagingSenderId: "107714913369",
    appId: "1:107714913369:web:72c3bfd3c6b3232cae3d48"
});

var db = firebaseApp.firestore();

export default { db };

///firebase.initializeApp(firebaseConfig);
///
///firebase.firestore();
///
///export default firebase;