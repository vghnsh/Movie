import firebase from 'firebase';

var firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBl6yAThIoNC4NhPUKVly6H9kw3KrdjEJQ",
        authDomain: "movie-4a0d0.firebaseapp.com",
        databaseURL: "https://movie-4a0d0.firebaseio.com",
        projectId: "movie-4a0d0",
        storageBucket: "movie-4a0d0.appspot.com",
        messagingSenderId: "96312391724",
        appId: "1:96312391724:web:6ac55d3c185c24e352b989",
        measurementId: "G-V1H086QJGW"
      
  });


const auth= firebase.auth();
const db= firebaseApp.firestore();

export  {auth,db};