import burgerPicSrc from "./imgs/main-meals/triple-burger.jpg";
import steakPicSrc from "./imgs/main-meals/steak.jpeg";
import hamPicSrc from "./imgs/main-meals/ham.jpg";
import chickenPicSrc from "./imgs/main-meals/chicken.jpg";
import lobsterPicSrc from "./imgs/main-meals/lobster-tails.jpg";

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

  // Create burger section and add it to the menu
  const burger = document.createElement("div");
  const burgerTitle = document.createElement("h1");
  const burgerDescription = document.createElement("p");
  const burgerPic = new Image();
  burger.classList.add("menu-choice");
  burgerTitle.textContent = "Triple Patty Burger ($20.99)";
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

  // Create steak section and add it to the menu
  const steak = document.createElement("div");
  const steakTitle = document.createElement("h1");
  const steakDescription = document.createElement("p");
  const steakPic = new Image();
  steak.classList.add("menu-choice");
  steakTitle.textContent = "10 Oz. Ribeye Steak ($27.99)";
  steakTitle.classList.add("food-name");
  steak.appendChild(steakTitle);
  steakDescription.textContent =
    "Our 10 oz ribeye steak is cut from the most flavorful part of the beef. The steak is seasoned with a blend of spices, and grilled to your desired temperature. The meat is juicy, tender, and full of flavor. Served with a side of sautéed vegetables, mashed potatoes or roasted potatoes. The steak is finished with a sprinkle of coarse sea salt and fresh cracked pepper for a perfect balance of flavor. Perfect for a special occasion or a casual dinner, this steak is sure to satisfy any meat lover's craving.";
  steakDescription.classList.add("food-description");
  steak.appendChild(steakDescription);
  steakPic.src = steakPicSrc;
  steakPic.classList.add("food-picture");
  steakPic.setAttribute(
    "alt",
    "Juicy grilled ribeye steak on top of a wooden cutting board with various vegetables in the background."
  );
  steak.appendChild(steakPic);
  menuChoices.appendChild(steak);

  // Create ham section and add it to the menu
  const ham = document.createElement("div");
  const hamTitle = document.createElement("h1");
  const hamDescription = document.createElement("p");
  const hamPic = new Image();
  ham.classList.add("menu-choice");
  hamTitle.textContent = "Honey Mustard Glazed Ham ($24.99)";
  hamTitle.classList.add("food-name");
  ham.appendChild(hamTitle);
  hamDescription.textContent =
    "Our baked ham is slow-cooked to perfection, and glazed with a sweet and tangy honey mustard sauce. The ham is made from high-quality pork and is juicy, tender, and full of flavor. The honey mustard glaze is made from a blend of honey, Dijon mustard, brown sugar and spices, that complements the natural sweetness of the ham. Served with a side of roasted potatoes and seasonal vegetables. This traditional dish is perfect for any occasion, from a family dinner to a holiday gathering.";
  hamDescription.classList.add("food-description");
  ham.appendChild(hamDescription);
  hamPic.src = hamPicSrc;
  hamPic.classList.add("food-picture");
  hamPic.setAttribute(
    "alt",
    "Sliced baked ham in a bowl with vegetables in the background."
  );
  ham.appendChild(hamPic);
  menuChoices.appendChild(ham);

  // Create chicken section and add it to the menu
  const chicken = document.createElement("div");
  const chickenTitle = document.createElement("h1");
  const chickenDescription = document.createElement("p");
  const chickenPic = new Image();
  chicken.classList.add("menu-choice");
  chickenTitle.textContent = "Creamy Chicken Marsala ($25.99)";
  chickenTitle.classList.add("food-name");
  chicken.appendChild(chickenTitle);
  chickenDescription.textContent =
    "Our chicken marsala is a classic Italian dish made with tender chicken breast that is sautéed and then simmered in a rich Marsala sauce with mushrooms. The chicken is cooked until tender and juicy, and the sauce is thickened to a perfect consistency. The earthy and rich flavor of mushrooms perfectly balances the sweetness of marsala sauce. Served with a side of roasted potatoes or mashed potatoes, it's a perfect comfort food. The dish is finished with a sprinkle of chopped parsley and Parmesan chunks, adding freshness and color to the plate. Perfect for a special occasion or a casual dinner, this dish is sure to satisfy any chicken lover's craving.";
  chickenDescription.classList.add("food-description");
  chicken.appendChild(chickenDescription);
  chickenPic.src = chickenPicSrc;
  chickenPic.classList.add("food-picture");
  chickenPic.setAttribute(
    "alt",
    "Close up of chicken breast topped with sauce, Parmesan cheese, and mushrooms with vegtables in the background."
  );
  chicken.appendChild(chickenPic);
  menuChoices.appendChild(chicken);

  // Create lobster tails section and add it to the menu
  const lobster = document.createElement("div");
  const lobsterTitle = document.createElement("h1");
  const lobsterDescription = document.createElement("p");
  const lobsterPic = new Image();
  lobster.classList.add("menu-choice");
  lobsterTitle.textContent =
    "Triple Lobster Tails With Butter And Lemon ($32.99)";
  lobsterTitle.classList.add("food-name");
  lobster.appendChild(lobsterTitle);
  lobsterDescription.textContent =
    "Our succulent lobster tails are steamed to perfection and served with a side of butter and lemon. The meat is sweet, tender and succulent, with a delicate flavor that is enhanced by the butter and lemon. The lobster tails are split in half and served with the meat exposed, making it easy to access and enjoy. The lobster tails are served with a side of lemon wedges and butter, so you can adjust the flavors to your liking. Perfect for a special occasion or a romantic dinner, this dish is sure to impress.";
  lobsterDescription.classList.add("food-description");
  lobster.appendChild(lobsterDescription);
  lobsterPic.src = lobsterPicSrc;
  lobsterPic.classList.add("food-picture");
  lobsterPic.setAttribute(
    "alt",
    "Close up of three lobster tails loaded with butter and lemon along with lemon halves scattered around the tails."
  );
  lobster.appendChild(lobsterPic);
  menuChoices.appendChild(lobster);
};

export default mainMealsSetup;
