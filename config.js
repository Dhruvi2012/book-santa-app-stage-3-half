import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCTKZOBi0RJNjU1IWgd-ySqPRyPlt5gVjg",
  authDomain: "book-santa-app-9934c.firebaseapp.com",
  projectId: "book-santa-app-9934c",
  storageBucket: "book-santa-app-9934c.appspot.com",
  messagingSenderId: "77115652167",
  appId: "1:77115652167:web:e91c7bab0b698e31cb5962"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
