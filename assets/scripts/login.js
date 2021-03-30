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
      const alert = document.getElementById("alertmsg").style.display = "block";
    });
}
