const db = firebase.firestore();

const addCategoria = document.querySelector(".form");

addCategoria.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("categoria").doc(addCategoria.nome.value).set({
    nome: addCategoria.nome.value,
  });
  addCategoria.nome.value = "";
  const alert = (document.getElementById("alertmsg").style.display = "block");
});
