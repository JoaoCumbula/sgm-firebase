const db = firebase.firestore();
const editCategoria1 = document.querySelector(".form");

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let data_id = getParameterByName('data-id');
console.log(data_id);


const renderCategoria = doc => {
        
    editCategoria1.nome.value = data_id;
}

editCategoria1.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("categoria").doc(data_id).set({
      nome: editCategoria1.nome.value,
    });
    editCategoria1.nome.value = "";
  });

db.collectionGroup("categoria")
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderCategoria(doc);
    });
  });



