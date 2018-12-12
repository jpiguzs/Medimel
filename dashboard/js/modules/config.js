
 function iniciar() 
 {
  var config = {
    apiKey: "AIzaSyCs-qqaS6BOI_wk4GSoekSijU2Ji73I8e0",
    authDomain: "medimel-aa4e1.firebaseapp.com",
    databaseURL: "https://medimel-aa4e1.firebaseio.com",
    projectId: "medimel-aa4e1",
    storageBucket: "medimel-aa4e1.appspot.com",
    messagingSenderId: "1091712323041"
  };
 firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('entre');
   // window.location="dashboard";

  } else {
    // No user is signed in.
    console.log('no entre');
    window.location="../";
  }
  //hola ="hola";


});
   // body...
 }// Initialize Firebase
 function cerrar() {
  firebase.delete();
   // body...
 }
  