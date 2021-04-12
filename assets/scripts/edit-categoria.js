const db = firebase.firestore();
const editCategoria1 = document.querySelector(".form");

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let data_id = getParameterByName("data-id");
//console.log(data_id);
db.collection("categoria")
  .doc(data_id)
  .get()
  .then((snapshot) => {
    let categoria = snapshot.data();
    console.log(categoria.nome);
    editCategoria1.nome.value = categoria.nome;
  });

editCategoria1.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("categoria")
    .doc(data_id)
    .update({
      nome: editCategoria1.nome.value,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
    const alert = (document.getElementById("alertmsg").style.display = "block");
    window.location.href = "list-categoria.html"
});
