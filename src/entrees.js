import chickenSkewerPicSrc from "./imgs/entrees/chicken-skewer.jpg";
import meatballsPicSrc from "./imgs/entrees/meatballs.jpg";
import calamariPicSrc from "./imgs/entrees/calamari.png";

const entreesSetup = () => {
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
  const chickenSkewer = document.createElement("div");
  const chickenSkewerTitle = document.createElement("h1");
  const chickenSkewerDescription = document.createElement("p");
  const chickenSkewerPic = new Image();
  chickenSkewer.classList.add("menu-choice");
  chickenSkewerTitle.textContent = "2 Baked Chicken Skewers ($9.99)";
  chickenSkewerTitle.classList.add("food-name");
  chickenSkewer.appendChild(chickenSkewerTitle);
  chickenSkewerDescription.textContent =
    "Indulge in our mouth-watering chicken skewers, marinated in a blend of spices and herbs for maximum flavor. Baked to a golden brown and served hot out the oven. These skewers are juicy and tender, perfect for any meat lover. Perfect as an appetizer, these skewers will leave you wanting more.";
  chickenSkewerDescription.classList.add("food-description");
  chickenSkewer.appendChild(chickenSkewerDescription);
  chickenSkewerPic.src = chickenSkewerPicSrc;
  chickenSkewerPic.classList.add("food-picture");
  chickenSkewerPic.setAttribute(
    "alt",
    "Five chicken skewers laid out across a baking sheet."
  );
  chickenSkewer.appendChild(chickenSkewerPic);
  menuChoices.appendChild(chickenSkewer);
  // Create meatballs section and add it to the menu
  const meatballs = document.createElement("div");
  const meatballsTitle = document.createElement("h1");
  const meatballsDescription = document.createElement("p");
  const meatballsPic = new Image();
  meatballs.classList.add("menu-choice");
  meatballsTitle.textContent = "5 Pc. Jumbo Meatballs ($12.99)";
  meatballsTitle.classList.add("food-name");
  meatballs.appendChild(meatballsTitle);
  meatballsDescription.textContent =
    "Our homemade meatballs are made with a blend of ground beef and pork, seasoned to perfection and cooked to tender, juicy perfection. They are simmered in a rich, flavorful marinara sauce made with crushed tomatoes, onions, garlic, and Italian herbs. These meatballs are the perfect comfort food. A sprinkle of grated Parmesan cheese adds an extra layer of flavor. Perfect as a party appetizer, these meatballs are sure to please. They are gluten-free, perfect for those who looking for gluten-free options.";
  meatballsDescription.classList.add("food-description");
  meatballs.appendChild(meatballsDescription);
  meatballsPic.src = meatballsPicSrc;
  meatballsPic.classList.add("food-picture");
  meatballsPic.setAttribute(
    "alt",
    "Plate of large meatballs towered on top of each other covered in marinara sauce and sprinkled with Parmesan cheese."
  );
  meatballs.appendChild(meatballsPic);
  menuChoices.appendChild(meatballs);
  // Create calamari section and add it to the menu
  const calamari = document.createElement("div");
  const calamariTitle = document.createElement("h1");
  const calamariDescription = document.createElement("p");
  const calamariPic = new Image();
  calamari.classList.add("menu-choice");
  calamariTitle.textContent = "Crispy Calamari ($7.99)";
  calamariTitle.classList.add("food-name");
  calamari.appendChild(calamariTitle);
  calamariDescription.textContent =
    "Our crispy fried calamari is made with fresh, tender squid that's been lightly dusted with flour and spices before being fried to a golden brown. The calamari is served with a tangy lemon aioli made with fresh lemon juice, garlic, and mayo that compliments the calamari's delicate flavor. The calamari is crispy on the outside and tender on the inside. The sprinkle of lemon zest on top add a nice freshness and balance to the dish. It's a classic favorite for seafood lovers.";
  calamariDescription.classList.add("food-description");
  calamari.appendChild(calamariDescription);
  calamariPic.src = calamariPicSrc;
  calamariPic.classList.add("food-picture");
  calamariPic.setAttribute(
    "alt",
    "Small plate of calamari rings with a lemon slice and a small container of mayonnaise on the side."
  );
  calamari.appendChild(calamariPic);
  menuChoices.appendChild(calamari);
};

export default entreesSetup;
