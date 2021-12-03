import Poster from "./clases/clasePoster.js";

const urlPoster = document.getElementById("url").value;

const nombrePoster = document.getElementById("nombre").value;

const imprimir = document.getElementById("submit");
 
const galeria = document.getElementById("galeria");


const html = new Poster("https://www.loopeando.com/wp-content/uploads/2016/11/html5-1320x743.jpg", "HTML");

const crearImg = (html) => {
    

    console.log(`
    
      <img src=${html.getUrl()} class="card" alt=${html.getNombre}>
      <h2>${html.getNombre()}</h2>

    `)
}
    
crearImg(html)
