const showHeroBtn = document.getElementById("show-information-about-heros");
const selectNumberOfFilm = document.getElementById("select-number-of-film");
const heroTabe = document.getElementById("hero-table");
const showPlanetsBtn = document.getElementById("show-planets");
const planetsBlock = document.getElementById("planets-block");
const goToTheNextPageBtn = document.getElementById("nextPage");

const addRowsToHeroTable = ({ name, birth_year, gender }) => {
  const row = document.createElement("TR");
  heroTabe.append(row);
  row.classList.add("tr");
  const tableDataArray = [];
  const tdTagsInRow=3;
  for (let i = 0; i < tdTagsInRow; i++) {
    tableDataArray.push(document.createElement("TD"));
    tableDataArray[i].classList.add("td");
  }
  tableDataArray[0].textContent = name;
  tableDataArray[1].textContent = birth_year;
  tableDataArray[2].textContent = gender;
  tableDataArray.map((td) => row.append(td));
};

function getHeroFromChosenFilm(hero, chosenFilm) {
  for (let i = 0; i < hero.films.length; i++) {
    const pathArray = hero.films[i].toString().split("/");
    if (pathArray[5] === chosenFilm) {
      return true;
    }
  }
  return false;
}

let i = 0;
const createParagraphsForPlanets = ({ name }) => {
  const p = document.createElement("P");
  p.classList.add("planet-paragraph");
  p.innerHTML = name;
  planetsBlock.append(p);
  localStorage.setItem(`planet${i}`, JSON.stringify(name));
  i++;
};

showHeroBtn.addEventListener("click",async function () {
  const res=await fetch("https://swapi.dev/api/people");
  const data=await res.json();
  const herosFromChosenFilm = data.results.reduce(
    (heroFromChosenFilm, hero) => {
      if (getHeroFromChosenFilm(hero, selectNumberOfFilm.value)) {
        heroFromChosenFilm.push(hero);
      }
      return heroFromChosenFilm;
    },
    []
  );
  heroTabe.innerHTML = "";
  herosFromChosenFilm.map((hero) => addRowsToHeroTable(hero));
});

showPlanetsBtn.addEventListener("click",async function () {
  const res=await fetch("https://swapi.dev/api/planets");
  const data=await res.json();
  planetsBlock.innerHTML = "";
  await data.results.map((planet) => createParagraphsForPlanets(planet))
});

goToTheNextPageBtn.addEventListener("click", function () {
  window.location.href = "html/planets.html";
});
