const returnToThePreviousPage = document.getElementById("previous-page");
const planets = document.getElementById("planets");

returnToThePreviousPage.addEventListener("click", function () {
  window.location.href = "../index.html";
});

const addPlannetToThePage = (name) => {
  const p = document.createElement("P");
  p.classList.add("planet-paragraph");
  p.textContent = name;
  planets.append(p);
};

window.addEventListener("load", function (event) {
  planets.innerHTML = "";
  const planetsArr = [];
  let i = 0;
  while (true) {
    if (localStorage.getItem(`planet${i}`) === null) break;
    const notParsedPlanet = localStorage.getItem(`planet${i}`);
    const planet = JSON.parse(notParsedPlanet);
    planetsArr.push(planet);
    addPlannetToThePage(planet);
    i++;
  }
});
