// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJlEMeaDXhGRe7AFdeUd-_dHrTKd75Ah4",
  authDomain: "prueba-8358a.firebaseapp.com",
  databaseURL: "https://prueba-8358a.firebaseio.com",
  projectId: "prueba-8358a",
  storageBucket: "prueba-8358a.appspot.com",
  messagingSenderId: "876058746890"
};

firebase.initializeApp(config);

var user = null;

var $logGoo = $('#logGoo');

$logGoo.on('click', googleLog);

function googleLog(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase  
    .auth()
    .signInWithPopup(provider)
    .then(function(result){
      user = result.user;
      console.log(user);
    })
}