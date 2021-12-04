import Poster from "./clases/clasePoster.js";
const galeria = document.getElementById("galeria");

//function que imprime Poster

function dinamico (imagen)  {
  const div = document.createElement("div");
  div.innerHTML = `
  
 <img src="${imagen.getUrl()}"/>

 <h2>${imagen.getNombre()}</h2>

  `
  galeria.appendChild(div);
}

const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const target = e.target;
  const poster = new Poster(target.url.value, target.nombre.value);
  
  dinamico(poster);
})