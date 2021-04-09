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

firebase
  .firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

firebase
  .firestore()
  .disableNetwork()
  .then(() => {
    // Do offline actions
    // ...
  });

firebase
  .firestore()
  .enableNetwork()
  .then(() => {
    // Do online actions
    // ...
  });
