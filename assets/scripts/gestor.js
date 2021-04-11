const db = firebase.firestore();

const tableFarmacias = document.querySelector(".table-gestores");

const renderGestor = (doc) => {
  const tr = `<tr data-id="${doc.id}">
    <td>${doc.data().nome}</td>
    <td>${doc.data().telefone}</td>
    <td>${doc.data().endereco}</td>
    <td>${doc.data().farmacia}</td>
    
    <td>
        <div class="dropdown mo-mb-2" style="text-align: center">
            <button class="btn btn-secondary dropdown-toggle" type="button"
                id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Editar
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item"
                    href="edit-gestor.html">Editar
                    Farmacias</a>
                <button class="btn btn-delete dropdown-item"
                    onclick="">
                    Remover
                </button>
            </div>
        </div>
    </td>
</tr>`;
  tableFarmacias.insertAdjacentHTML("beforeend", tr);

  //Clikc to delete Gestor
  const btnDelete = document.querySelector(`[data-id="${doc.id}"] .btn-delete`);
  btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    db.collection("farmacia")
      .doc(doc.data().farmacia)
      .collection("usuario")
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        window.location.href = "list-gestor.html";
      });
    //  reautenticar();
    removeUser(doc.data().nome);
    const alert = (document.getElementById("alertmsg").style.display = "block");
  });
};

db.collectionGroup("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      renderGestor(doc);
    });
  });

function reautenticar() {
  let user = firebase.auth().currentUser;

  var email=prompt("Enter your Email");
  var password=prompt("Enter your Password");
  
  var credential = firebase.auth.EmailAuthProvider.credential(email, password);;

  user
    .reauthenticateWithCredential(credential)
    .then(function () {
      // User re-authenticated.
    })
    .catch(function (error) {
      // An error happened.
    });
}

function removeUser(nome) {
  nome = firebase.auth().currentUser;

  nome
    .delete()
    .then(function () {
      console.log("user deleted");
    })
    .catch(function (error) {
      console.log("erro");
    });
}
