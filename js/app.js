/* ++++++++++++ Initialize Firebase ++++++++++ */
var config = {
  apiKey: "AIzaSyAVrb2b-QUH1A1X9XL8tgZSC-sLcXMHAGw",
  authDomain: "proyecto-red-social-36a84.firebaseapp.com",
  databaseURL: "https://proyecto-red-social-36a84.firebaseio.com",
  projectId: "proyecto-red-social-36a84",
  storageBucket: "proyecto-red-social-36a84.appspot.com",
  messagingSenderId: "150769749617"
};
firebase.initializeApp(config);

$("#btnGoogle").click(function () {
  authGoogle();

});

 function authGoogle () {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
})
.catch(function(error) {
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
