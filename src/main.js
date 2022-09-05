/* import dentro de llaves cuando no es default */
import {
  posters,
  filterDate,
  filterScore,
  filterDirectors,
  filterProducers,
  sortingFilms,
  films,
} from "./data.js";

const postersContainer = document.querySelector(".posters");
/*SPANS */
const datesValues = document.getElementById("rangeValue");
/*guardando etiqueda span de release date, que permite mostrar el valor al que el usuario cambia
segun el valor que reciba...  */
const scoreValues = document.getElementById("rangeScore");
//console.log(date.value);

/* INPUTS */
const date = document.getElementById("dates");

/*guardando input donde el usuario buscara la fecha de estreno */
const directorsInput = document.getElementById("select-directors");

const producersInput = document.getElementById("select-producers");

const score = document.getElementById("movieScore");
/* guardando input de puntajes */

const inputOrder = document.getElementById("select-order");

/* release date function */
/*agregando un event listener a el input de fecha de estreno*/
date.addEventListener("input", (e) => {
  /* guardando el valor que el usuario elige en el input de fecha de estreno */
  let releaseValue = e.target.value;
  /* aqui, estamos haciendo que el valor que esta dentro de etiqueta span, cambie, segun el valor que reciba el input*/
  datesValues.innerHTML = releaseValue;
  /* pasando parametro del input, a la función de filterDate de data.js */
  let filteredByDate = filterDate(releaseValue, films);
  /* pidiendo que muestre solo las imagenes que corresponde al arreglo filtrado, 
 al contenedor donde se muestran todas las imagenes para esto-..
  aplicamos un .map a nuestro arreglo ya filtrado, pidiendo que devuelva por cada objeto 
  un div donde esten dentro el poster asi como la fecha */
  if (filteredByDate.length === 0) {
    postersContainer.innerHTML = `
    <div class= "noFoundMessage"> 
      <h2>Oops! =( try another one</h2>
      <img class="noFound-image" src="./images/totoroNotFoundMsg.gif" alt="no-found" srcset=""/>
    </div>`;
  } else {
    postersContainer.innerHTML = filteredByDate
      .map(function (x) {
        return `
    <div class="poster">
    <h2> ${x.title} </h2>
    <h3> ${x.release_date} </h3>
      <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
    </div>`;
      })
      .join("");
  }
}); /* add event listener de date, cierra aquí */

directorsInput.addEventListener("input", (e) => {
  let directorsValue = e.target.value;
  let filteredByDirectors = filterDirectors(directorsValue);
  postersContainer.innerHTML = filteredByDirectors
    .map(function (x) {
      return `
    <div class="poster">
    <h2> ${x.title} </h2>
    <h3> ${x.release_date} </h3>
      <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
    </div>
    `;
    })
    .join("");
});

producersInput.addEventListener("input", (e) => {
  let producersValue = e.target.value;
  let filteredByProducers = filterProducers(producersValue);
  postersContainer.innerHTML = filteredByProducers
    .map(function (x) {
      return `
    <div class="poster">
    <h2> ${x.title} </h2>
    <h3> ${x.release_date} </h3>
      <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
    </div>
    `;
    })
    .join("");
});

/* score function */
score.addEventListener("input", (e) => {
  let scoreValue = e.target.value;
  scoreValues.innerHTML = scoreValue;
  let filteredByScore = filterScore(scoreValue);
  if (filteredByScore.length === 0) {
    postersContainer.innerHTML = postersContainer.innerHTML = `
    <div class= "noFoundMessage"> 
      <h2>Oops! =( try another one</h2>
      <img
      class="noFound-image"
      src="./images/totoroNotFoundMsg.gif"
      alt="no-found"
      srcset=""
    />
    </div>`;
  } else {
    postersContainer.innerHTML = filteredByScore
      .map(function (x) {
        return `
    <div class="poster">
    <h2> ${x.title} </h2>
    <h3> ${x.release_date} </h3>
      <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
    </div>`;
      })
      .join("");
  }
});
inputOrder.addEventListener("input", (e) => {
  let orderOptionValue = e.target.value;
  let sortedByOrder = sortingFilms(films, orderOptionValue);
  postersContainer.innerHTML = sortedByOrder
    .map(function (x) {
      return `
    <div class="poster">
    <h2> ${x.title} </h2>
    <h3> ${x.release_date} </h3>
      <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
    </div>
    `;
    })
    .join("");
});
postersContainer.innerHTML = posters.join("");