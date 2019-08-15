import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3fduhL9_5HtemDYrg4xkuQssMJSZub_Y",
    authDomain: "crwn-db-54950.firebaseapp.com",
    databaseURL: "https://crwn-db-54950.firebaseio.com",
    projectId: "crwn-db-54950",
    storageBucket: "",
    messagingSenderId: "79288176606",
    appId: "1:79288176606:web:82394d881e25762b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;