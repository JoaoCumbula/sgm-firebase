const db = firebase.firestore();

const addFarmacia = document.querySelector(".form");

//CClick to submit farmacia
addFarmacia.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("farmacia").doc(addFarmacia.name.value).set({
    nome: addFarmacia.name.value,
    telefone1: addFarmacia.phone1.value,
    telefone2: addFarmacia.phone2.value,
    endereco: addFarmacia.address.value,
    cidade: addFarmacia.cidade.value,
  });
  clearFields();
  const alert = (document.getElementById("alertmsg").style.display = "block");
});

function clearFields() {
  addFarmacia.name.value = "";
  addFarmacia.phone1.value = "";
  addFarmacia.phone2.value = "";
  addFarmacia.address.value = "";
  addFarmacia.cidade.value = "";
}
