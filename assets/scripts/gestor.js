const db = firebase.firestore();

const tableFarmacias = document.querySelector(".table-gestores");

const renderGestor = (doc) => {
  const tr = `<tr>
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
                <button class="dropdown-item"
                    onclick="">
                    Remover
                </button>
            </div>
        </div>
    </td>
</tr>`;
  tableFarmacias.insertAdjacentHTML('beforeend', tr);
};

db.collectionGroup("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
      renderGestor(doc);
    });
  });