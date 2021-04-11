const db = firebase.firestore();

const optionList = document.querySelector(".option-list");
const multipleList = document.querySelector(".select2-multiple");
const addProduto = document.querySelector(".form");

addProduto.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("categoria")
    .doc(addProduto.categoria.value)
    .collection("produto")
    .add({
      nome: addProduto.nome.value,
      categoria: addProduto.categoria.value,
      farmacia: addProduto.farmacia.value,
      descricao: addProduto.descricao.value,
      dosagem: addProduto.dosagem.value,
      quantidade: addProduto.quantidade.value,
      preco: addProduto.preco.value,
    });
    clearFields();
  const alert = (document.getElementById("alertmsg").style.display = "block");
});

const renderListCategoria = (doc) => {
  const tr = `<select class="form-control option-list" name="farmacia" id="farmacia" required>
    <option selected disabled hidden>
        Selecione uma opção
    </option>
    <option value="${doc.data().nome}">${doc.data().nome}</option>
</select>`;
  optionList.insertAdjacentHTML("beforeend", tr);
};

const renderListFarmacia = (doc) => {
  const tr = `<option value="${doc.data().nome}">${doc.data().nome}</option>`;
  multipleList.insertAdjacentHTML("beforeend", tr);
};

db.collectionGroup("categoria").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderListCategoria(doc);
  });
});
db.collectionGroup("farmacia").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderListFarmacia(doc);
  });
});

function clearFields() {
  addProduto.nome.value = "";
  addProduto.categoria.value = "";
  addProduto.farmacia.value = "";
  addProduto.descricao.value = "";
  addProduto.dosagem.value = "";
  addProduto.quantidade.value = "";
  addProduto.preco.value = "";
}
