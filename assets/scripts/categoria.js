const db = firebase.firestore();

const tableCategorias = document.querySelector(".table-categorias");

const renderCategoria = (doc) => {
  const tr = `<tr>
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
                    href="edit-farmacia.html">Editar
                    Farmacias</a>
                <button class="dropdown-item"
                    onclick="">
                    Remover
                </button>
            </div>
        </div>
    </td>
</tr>`;
  tableCategorias.insertAdjacentHTML('beforeend', tr);
};

db.collectionGroup("categoria")
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderCategoria(doc);
    });
  });