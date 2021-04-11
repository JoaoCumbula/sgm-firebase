const db = firebase.firestore();

const tableFarmacias = document.querySelector(".table-produtos");

const renderFarmacia = (doc) => {
  const tr = `<tr data-id="${doc.id}">
  <td>${doc.data().nome}</td>
  <td>${doc.data().categoria}</td>
  <td>${doc.data().descricao}</td>
  <td>${doc.data().dosagem}</td>
  <td>${doc.data().quantidade}</td>
  <td>${doc.data().preco}</td>
  <td>${doc.data().quantidade*doc.data().preco}</td>

  <td>
      <div class="dropdown mo-mb-2" style="text-align: center">
          <button class="btn btn-secondary dropdown-toggle" type="button"
              id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Editar
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="edit-Produto.html">Editar
                  Farmacias</a>
              <button class="btn btn-delete dropdown-item">
                  Remover
              </button>
          </div>
      </div>
  </td>
</tr>`;
  tableFarmacias.insertAdjacentHTML("beforeend", tr);

  //Clikc to delete Farmacia
  const btnDelete = document.querySelector(`[data-id="${doc.id}"] .btn-delete`);
  btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    db.collection("categoria")
      .doc(doc.data().categoria)
      .collection("produto")
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        window.location.href = "list-produto.html";
      });
    const alert = (document.getElementById("alertmsg").style.display = "block");
  });
};

db.collectionGroup("produto").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderFarmacia(doc);
  });
});
