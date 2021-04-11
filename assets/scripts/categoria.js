const db = firebase.firestore();

const tableCategorias = document.querySelector(".table-categorias");

const renderCategoria = (doc) => {
  const tr = `<tr data-id="${doc.id}">
    <td>${doc.data().nome}</td>
    <td>
        <div class="dropdown mo-mb-2" style="text-align: center">
            <button class="btn btn-secondary dropdown-toggle" type="button"
                id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Editar
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item"
                    href="edit-categoria.html?data-id=${doc.id}">Editar
                    Farmacias</a>
                <button class="btn btn-delete dropdown-item">
                    Remover
                </button>
            </div>
        </div>
    </td>
</tr>`;
  tableCategorias.insertAdjacentHTML("beforeend", tr);

  //Clikc to delete Categoria
  const btnDelete = document.querySelector(`[data-id="${doc.id}"] .btn-delete`);
  btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    db.collection("categoria")
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        window.location.href="list-categoria.html";
        const alert = (document.getElementById("alertmsg").style.display = "block");
      });
  });
};

db.collectionGroup("categoria").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderCategoria(doc);
  });
});
