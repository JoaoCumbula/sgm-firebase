(function () {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAUpgVrxSIYhspPLw4IbQzFjnHTTMImwuo",
    authDomain: "farmacinha-af53a.firebaseapp.com",
    projectId: "farmacinha-af53a",
    storageBucket: "farmacinha-af53a.appspot.com",
    messagingSenderId: "324044558280",
    appId: "1:324044558280:web:8f64f9b2cf52a94ff2fafd",
    measurementId: "G-F5RKPNC3FN",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
})();

const auth = firebase.auth();

function signUpWithEmailPassword() {  
  const user = document.getElementById("username").value;
  const senha = document.getElementById("userpassword").value;
  let message = "Usuário ou senha Incorreta";
  auth
    .signInWithEmailAndPassword(user, senha)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("sucesso");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("password errado");
    });
}

  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      var uid = user.uid;
      
    } else {
      console.log("Not logged in");
    }
  });

function signOut() {
  // [START auth_sign_out]
  auth
    .signOut()
    .then(() => {
      window.location.href = "pages-login.html";
    })
    .catch((error) => {});
}
