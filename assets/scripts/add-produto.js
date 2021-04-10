const db = firebase.firestore();

const optionList = document.querySelector(".option-list");
const addCategoria = document.querySelector(".form");

addCategoria.addEventListener("sumbit", e => {
    e.preventDefault()
    db.collection("categoria").add({
        
    })
})

const renderList = (doc) => {
  const tr = `<select class="form-control option-list" name="farmacia" id="farmacia" required>
    <option selected disabled hidden>
        Selecione uma opção
    </option>
    <option value="CT">${doc.data().nome}</option>
</select>`;
  optionList.insertAdjacentHTML("beforeend", tr);
};

db.collectionGroup("farmacia").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderList(doc);
  });
});