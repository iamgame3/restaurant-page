// Create function to make the initial page
const pageSetup = () => {
  // Select the content div which contains all of the page's contents
  const content = document.getElementById("content");

  // Create the header and add it to the page
  const header = document.createElement("div");
  header.textContent = "Meat Eater's Diner";
  header.classList.add("header");
  content.appendChild(header);

  // Create the menu and add it to the page
  const menu = document.createElement("div");
  menu.classList.add("menu");
  content.appendChild(menu);

  // Create menu section selection and add it to the menu
  const sectionSelection = document.createElement("div");
  sectionSelection.classList.add("section-selection");
  menu.appendChild(sectionSelection);

  // Create menu selection buttons and add them to the section selection
  const entreesButton = document.createElement("button");
  const mainMealsButton = document.createElement("button");
  const desertsButton = document.createElement("button");
  entreesButton.textContent = "Entrées";
  mainMealsButton.textContent = "Main Meals";
  desertsButton.textContent = "Deserts";
  const menuButtons = [entreesButton, mainMealsButton, desertsButton];
  menuButtons.forEach((button) => {
    button.classList.add("section-button");
    button.classList.add("secton-button:active");
    sectionSelection.appendChild(button);
  });
};

export default pageSetup();
