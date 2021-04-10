const db = firebase.firestore();

const tableFarmacias = document.querySelector(".table-farmacias");

const renderFarmacia = (doc) => {
  const tr = `<tr>
    <td>${doc.data().nome}</td>
    <td>${doc.data().telefone1}</td>
    <td>${doc.data().telefone2}</td>
    <td>${doc.data().endereco}</td>
    
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
                <button class="dropdown-item" onclick="removerFarm()">
                    Remover
                </button>
            </div>
        </div>
    </td>
</tr>`;
  tableFarmacias.insertAdjacentHTML("beforeend", tr);
};

db.collectionGroup("farmacia").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderFarmacia(doc);
  });
});

//Click to Delete Farmacia

function removerFarm() {
  const modalShow = document.querySelector(".add-modal");
    modalShow.classList.add("bs-example-modal")
}
