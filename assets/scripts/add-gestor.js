const db = firebase.firestore();

const optionList = document.querySelector(".option-list");
const addGestor = document.querySelector(".form");

addGestor.addEventListener("submit", (e) => {
  e.preventDefault();
  if(validate()){
  db.collection("farmacia")
    .doc(addGestor.farmacia.value)
    .collection("usuario")
    .add({
      nome: addGestor.name.value,
      telefone: addGestor.phone1.value,
      endereco: addGestor.address.value,
      password: addGestor.password.value,
      farmacia: addGestor.farmacia.value,
    });
  createUser();
  clearFields();
  const alert = (document.getElementById("alertmsg").style.display = "block");
  }
});

const renderListGestor = (doc) => {
  const tr = `<option value="${doc.data().nome}">${doc.data().nome}</option>`;
  optionList.insertAdjacentHTML("beforeend", tr);
};

db.collectionGroup("farmacia").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderListGestor(doc);
  });
});

function clearFields() {
  addGestor.name.value = "";
  addGestor.phone1.value = "";
  addGestor.address.value = "";
  addGestor.password.value = "";
  addGestor.password2.value = "";
  addGestor.farmacia.value = "";
}

function createUser() {
  const email = addGestor.name.value;
  const password = addGestor.password.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

function validate(){
  if(addGestor.password.value != addGestor.password2.value){
    alert("Password não correspondem");
      return false;
  }
  return true;
}
