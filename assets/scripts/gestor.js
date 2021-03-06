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
                    href="edit-gestor.html?data-id=${doc.id}">Editar
                    Farmacias</a>
                <button class="btn btn-delete dropdown-item">
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
    removeUser(doc.data().nome);
    e.preventDefault();
    db.collection("farmacia")
      .doc(doc.data().farmacia)
      .collection("usuario")
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        window.location.href = "list-gestor.html";
      });
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
