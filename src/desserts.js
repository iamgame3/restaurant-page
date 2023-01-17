import meatPlatterPicSrc from "./imgs/desserts/meat-platter.png";
import pulledPorkPicSrc from "./imgs/desserts/pulled-pork.jpeg";

const dessertsSetup = () => {
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

  // Create meat platter section and add it to the menu
  const meatPlatter = document.createElement("div");
  const meatPlatterTitle = document.createElement("h1");
  const meatPlatterDescription = document.createElement("p");
  const meatPlatterPic = new Image();
  meatPlatter.classList.add("menu-choice");
  meatPlatterTitle.textContent = "Meat Platter ($10.99)";
  meatPlatterTitle.classList.add("food-name");
  meatPlatter.appendChild(meatPlatterTitle);
  meatPlatterDescription.textContent =
    "Our meat platter is a selection of premium cured meats, perfect for sharing with friends and family. The platter includes a variety of meats such as prosciutto, salami, and pepperoni, all carefully curated for optimal flavor. Served with a variety of olives and cheese, it's the perfect way to end a meal. The meats are sliced thin to bring out the rich, bold flavors.";
  meatPlatterDescription.classList.add("food-description");
  meatPlatter.appendChild(meatPlatterDescription);
  meatPlatterPic.src = meatPlatterPicSrc;
  meatPlatterPic.classList.add("food-picture");
  meatPlatterPic.setAttribute(
    "alt",
    "Wooden dish covered with sliced meat and a small bowl with olives and cheese."
  );
  meatPlatter.appendChild(meatPlatterPic);
  menuChoices.appendChild(meatPlatter);

  // Create pulled pork section and add it to the menu
  const pulledPork = document.createElement("div");
  const pulledPorkTitle = document.createElement("h1");
  const pulledPorkDescription = document.createElement("p");
  const pulledPorkPic = new Image();
  pulledPork.classList.add("menu-choice");
  pulledPorkTitle.textContent = "BBQ Pulled Pork ($11.99)";
  pulledPorkTitle.classList.add("food-name");
  pulledPork.appendChild(pulledPorkTitle);
  pulledPorkDescription.textContent =
    "Our BBQ pulled pork is slow-cooked to perfection and smothered in a sweet and spicy homemade barbecue sauce. The pork is tender and juicy, with a smoky flavor that is enhanced by the sauce. The barbecue sauce is made with a blend of tomato sauce, brown sugar, vinegar, and spices, that gives it a balance of sweetness and heat. Perfect to end off a meat-filled meal, this dish is sure to satisfy any BBQ lover's craving.";
  pulledPorkDescription.classList.add("food-description");
  pulledPork.appendChild(pulledPorkDescription);
  pulledPorkPic.src = pulledPorkPicSrc;
  pulledPorkPic.classList.add("food-picture");
  pulledPorkPic.setAttribute("alt", "Close up of pulled pork.");
  pulledPork.appendChild(pulledPorkPic);
  menuChoices.appendChild(pulledPork);
};

export default dessertsSetup;
