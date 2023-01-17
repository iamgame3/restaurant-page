// Create function to make the initial page
const pageSetup = () => {
  // Select the content div which contains all of the page's contents
  const content = document.getElementById("content");

  // Create the header and add it to the page
  const header = document.createElement("div");
  header.textContent = "Meat Eater's Diner";
  header.classList.add("header");
  content.appendChild(header);

  // Create menu section selection and add it to the menu
  const sectionSelection = document.createElement("div");
  sectionSelection.classList.add("section-selection");
  content.appendChild(sectionSelection);

  // Create menu selection buttons and add them to the section selection
  const entreesButton = document.createElement("button");
  const mainMealsButton = document.createElement("button");
  const dessertsButton = document.createElement("button");
  entreesButton.setAttribute("id", "entrees-button");
  mainMealsButton.setAttribute("id", "main-meals-button");
  dessertsButton.setAttribute("id", "desserts-button");
  entreesButton.textContent = "Entrées";
  mainMealsButton.textContent = "Main Meals";
  dessertsButton.textContent = "Desserts";
  const menuButtons = [entreesButton, mainMealsButton, dessertsButton];
  menuButtons.forEach((button) => {
    button.classList.add("section-button");
    button.classList.add("secton-button:active");
    sectionSelection.appendChild(button);
  });
};

export default pageSetup;
