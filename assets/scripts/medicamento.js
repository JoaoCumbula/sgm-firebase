const db = firebase.firestore();

const tableFarmacias = document.querySelector(".table-medicamentos");

const renderFarmacia = (doc) => {
  const tr = `<tr>
  <td>${doc.data().nome}</td>
  <td>${doc.data().categoria}</td>
  <td>${doc.data().descricao}</td>
  <td>${doc.data().dosagem}</td>
  <td>${doc.data().quantidade}</td>
  <td>${doc.data().valor}</td>
  <td>${doc.data().quantidade*doc.data().valor}</td>

  <td>
      <div class="dropdown mo-mb-2" style="text-align: center">
          <button class="btn btn-secondary dropdown-toggle" type="button"
              id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Editar
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="edit-medicamento.html">Editar
                  Farmacias</a>
              <button class="dropdown-item" onclick="">
                  Remover
              </button>
          </div>
      </div>
  </td>
</tr>`;
  tableFarmacias.insertAdjacentHTML("beforeend", tr);
};

db.collectionGroup("medicamento").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderFarmacia(doc);
  });
});
