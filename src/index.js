import pageSetup from "./page-setup";
import entreesSetup from "./entrees";
import mainMealsSetup from "./main-meals";
import dessertsSetup from "./desserts";

const content = document.getElementById("content");
content.replaceChildren();
pageSetup();
entreesSetup();

let entreesButton = document.getElementById("entrees-button");
let mainMealsButton = document.getElementById("main-meals-button");
let dessertsButton = document.getElementById("desserts-button");

const resetPage = () => {
  content.replaceChildren();
  pageSetup();
  entreesButton = document.getElementById("entrees-button");
  mainMealsButton = document.getElementById("main-meals-button");
  dessertsButton = document.getElementById("desserts-button");
  entreesButton.addEventListener("click", () => {
    resetPage();
    entreesSetup();
  });
  mainMealsButton.addEventListener("click", () => {
    resetPage();
    mainMealsSetup();
  });
  dessertsButton.addEventListener("click", () => {
    resetPage();
    dessertsSetup();
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
dessertsButton.addEventListener("click", () => {
  resetPage();
  dessertsSetup();
});
