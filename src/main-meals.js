import burgerPicSrc from "./imgs/main-meals/triple-burger.jpg";

const mainMealsSetup = () => {
  // Select the content div which contains all of the page's contents
  const content = document.getElementById("content");

  // Create the menu and add it to the page
  const menu = document.createElement("div");
  menu.classList.add("menu");
  content.appendChild(menu);

  // Create menu choices div and add it to the menu
  const menuChoices = document.createElement("div");
  menuChoices.classList.add("menu-choices");
  menu.appendChild(menuChoices);

  // Create chicken skewer section and add it to the menu
  const burger = document.createElement("div");
  const burgerTitle = document.createElement("h1");
  const burgerDescription = document.createElement("p");
  const burgerPic = new Image();
  burger.classList.add("menu-choice");
  burgerTitle.textContent = "Triple Beef Burger ($17.99)";
  burgerTitle.classList.add("food-name");
  burger.appendChild(burgerTitle);
  burgerDescription.textContent =
    "Three juicy beef patties stacked high on a toasted bun, topped with bacon, pickles, caramelised onion, cheedar cheese, and our special carnivore sauce. Served with a side of crispy fries. Perfect for the meat lover who wants to take their burger game to the next level.";
  burgerDescription.classList.add("food-description");
  burger.appendChild(burgerDescription);
  burgerPic.src = burgerPicSrc;
  burgerPic.classList.add("food-picture");
  burgerPic.setAttribute(
    "alt",
    "Tall burger with three patties, pickle slices, bacon, special sauce, and oozing with cheddar cheese."
  );
  burger.appendChild(burgerPic);
  menuChoices.appendChild(burger);
};

export default mainMealsSetup;
