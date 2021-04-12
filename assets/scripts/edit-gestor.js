const db = firebase.firestore();
const editGestor = document.querySelector(".form");

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
db.collection("farmacia").doc("Ntomi").collection("usuario")
  .doc(data_id)
  .get()
  .then((snapshot) => {
    let gestor = snapshot.data();
    console.log(gestor.nome);
    editGestor.name.value = gestor.nome;
    editGestor.phone1.value = gestor.telefone;
    editGestor.address.value = gestor.endereco;
  });

editGestor.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("usuario")
    .doc(data_id)
    .update({
      nome: editGestor.name.value,
      telefone: editGestor.phone1.value,
      endereco: addGestor.address.value,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
  const alert = (document.getElementById("alertmsg").style.display = "block");
  window.location.href = "list-gestor.html";
});
