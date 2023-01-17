import pageSetup from "./page-setup";
import entreesSetup from "./entrees";
import mainMealsSetup from "./main-meals";

const content = document.getElementById("content");
content.replaceChildren();
pageSetup();
entreesSetup();

let entreesButton = document.getElementById("entrees-button");
let mainMealsButton = document.getElementById("main-meals-button");
let desertsButton = document.getElementById("deserts-button");

const resetPage = () => {
  content.replaceChildren();
  pageSetup();
  entreesButton = document.getElementById("entrees-button");
  mainMealsButton = document.getElementById("main-meals-button");
  desertsButton = document.getElementById("deserts-button");
  entreesButton.addEventListener("click", () => {
    resetPage();
    entreesSetup();
  });
  mainMealsButton.addEventListener("click", () => {
    resetPage();
    mainMealsSetup();
  });
};

entreesButton.addEventListener("click", () => {
  resetPage();
  entreesSetup();
});
mainMealsButton.addEventListener("click", () => {
  resetPage();
  mainMealsSetup();
});
