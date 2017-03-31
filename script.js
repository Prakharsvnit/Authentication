var config = {
    apiKey: "AIzaSyCedYu450YSgHDVoWqNUGjE6bn0EqULe10",
    authDomain: "authentication-3f25e.firebaseapp.com",
    databaseURL: "https://authentication-3f25e.firebaseio.com",
    projectId: "authentication-3f25e",
    storageBucket: "authentication-3f25e.appspot.com",
    messagingSenderId: "208790233713"
  };
  firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignIn() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}