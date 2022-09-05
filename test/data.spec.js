import { expect } from "@jest/globals";
import {
  films,
  filterDate,
  filterScore,
  filterDirectors,
  filterProducers,
  sortingFilms,
} from "../src/data.js";

describe("filterDate", () => {
  it("is a function", () => {
    expect(typeof filterDate).toBe("function");
  });

  it("Debería retornar Castle in the Sky para año de estreno 1986", () => {
    let mockData = [
      { release_date: "ana" },
      { release_date: "ana" },
      { release_date: "abril" },
      { release_date: "1986" },
    ];
    let mockResult = [{ release_date: "ana" }, { release_date: "ana" }];

    expect(filterDate("ana", mockData)).toStrictEqual(mockResult);
  });
});

describe("filterScore", () => {
  it("is a function", () => {
    expect(typeof filterScore).toBe("function");
  });

  it("Debería retornar Castle in the Sky para puntuación de 95", () => {
    expect(filterScore("95")).toContain(films[0]);
  });
});

describe("filterDirectors", () => {
  it("is a function", () => {
    expect(typeof filterDirectors).toBe("function");
  });

  it("Debería retornar Castle in the Sky para director Hayao Miyazaki", () => {
    expect(filterDirectors("Hayao Miyazaki")).toContain(films[0]);
  });

  it("Debería retornar Films para Todos", () => {
    expect(filterDirectors("All")).toBe(films);
  });
});

describe(" filterProducers", () => {
  it("is a function", () => {
    expect(typeof filterProducers).toBe("function");
  });

  it("Debería retornar Castle in the Sky para productor Isao Takahata", () => {
    expect(filterProducers("Isao Takahata")).toContain(films[0]);
  });

  it("Debería retornar Films para Todos", () => {
    expect(filterProducers("All")).toBe(films);
  });
});

describe("sortingFilms", () => {
  it("is a function", () => {
    expect(typeof sortingFilms).toBe("function");
  });

  let mockDataSort = [
    { title: "sandia" },
    { title: "plátano" },
    { title: "manzana" },
    { title: "pitahaya" },
    { title: "arándanos" },
  ];
  let mockResultAZ = [
    { title: "arándanos" },
    { title: "manzana" },
    { title: "pitahaya" },
    { title: "plátano" },
    { title: "sandia" },
  ];
  let mockResultZA = [
    { title: "sandia" },
    { title: "plátano" },
    { title: "pitahaya" },
    { title: "manzana" },
    { title: "arándanos" },
  ];

  it("Debería retornar un arreglo ordenado de la A a la Z", () => {
    expect(sortingFilms(mockDataSort, "A to Z")).toStrictEqual(mockResultAZ);
  });
  it("Deberia retornar un arreglo ordenado de la Z a la A", () => {
    expect(sortingFilms(mockDataSort, "Z to A")).toStrictEqual(mockResultZA);
  });

  it("Deberia retornar las peliculas retornadas por default", () => {
    expect(sortingFilms(mockDataSort, "default")).toStrictEqual(mockDataSort);
  });
});
