import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJaq6AAnVSk2P7keM6oLoVcJk86WWWbj8",
    authDomain: "catch-of-the-day-93e8c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-93e8c-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());


export {firebaseApp};

export default base;
