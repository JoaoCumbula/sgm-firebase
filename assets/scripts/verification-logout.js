// [START auth_state_listener]

const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      var uid = user.uid;
      
    } else {
      console.log("Not logged in");
      window.location.href = "pages-login.html";
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