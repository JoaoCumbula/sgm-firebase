const db = firebase.firestore();

const categoria = document.getElementById("categoria");
const farmacia = document.getElementById("farmacia");
const gestor = document.getElementById("gestor");
const produto = document.getElementById("produto");

db.collectionGroup("farmacia").get().then(snap => {
   let size = snap.size;
  console.log("The size is = "+size);
  farmacia.innerHTML = size;
});

db.collectionGroup("usuario").get().then(snap => {
  let size = snap.size;
 console.log("The size is = "+size);
 gestor.innerHTML = size;
});

db.collectionGroup("categoria").get().then(snap => {
  let size = snap.size;
 console.log("The size is = "+size);
 categoria.innerHTML = size;
});

db.collectionGroup("produto").get().then(snap => {
  let size = snap.size;
 console.log("The size is = "+size);
 produto.innerHTML = size;
});

