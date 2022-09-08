// estas funciones son de ejemplo
import data from "./data/ghibli/ghibli.js";
export const { films } = data;
/*deconstruccion, extrayendo films del objeto data del archivo ghibli.js */
export const posters = films.map(function (x) {
  /*                             object    */
  return `
  <div class="poster">
  <h2> ${x.title} </h2>
  <h3> ${x.release_date} </h3>
    <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
  </div>`;
});

/*release date function to export */
/* esta función utiliza un .filter, que se aplica al arreglo films, donde esta toda la data,
y se le pide que devuelva un arreglo nuevo ya filtrado.
donde la condicion es que regrese el objeto, si corresponde la fecha con el año que se le paso a la funcion
 este valor year se toma desde el main, de let releaseValue = date.value; 
es decir, se toma como referencia el valor que el usuario ha puesto en el input de fecha de estreno*/

export function filterDate(year, films) {
  const releaseArray = films.filter(function (film) {
    return film.release_date === year;
    /* checando si release_date es igual al input value, o sea el año, cuando coincida, se agregara al nuevo arreglo
    sino coincide, entonces no se agrega*/
  });
  return releaseArray; /*retornando nuevo arreglo */
}
//console.log(filterDate("1986"));

export function filterScore(score) {
  const scoreArray = films.filter(function (film) {
    return film.rt_score === score;
  });
  return scoreArray;
}

export function filterDirectors(director) {
  if (director === "All") {
    return films;
  } else {
    const directorsArray = films.filter((film) => film.director === director);
    //Función filtro, tiene elementos a iterar, arrow function y la condición a cumplir para que filtre.
    return directorsArray;
  }
}

export function filterProducers(producer) {
  if (producer === "All") {
    return films;
  } else {
    const producersArray = films.filter(function (film) {
      return film.producer === producer;
    });
    return producersArray;
  }
}

export function sortingFilms(films, orderOption) {
  const filmsCopy = [...films];
  if (orderOption === "default") {
    return films;
  } else if (orderOption === "A to Z") {
    return filmsCopy.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
    });
  } else if (orderOption === "Z to A") {
    return filmsCopy.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
    });
  }
}