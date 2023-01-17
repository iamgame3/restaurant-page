/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/desserts.js":
/*!*************************!*\
  !*** ./src/desserts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_desserts_meat_platter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/desserts/meat-platter.png */ "./src/imgs/desserts/meat-platter.png");
/* harmony import */ var _imgs_desserts_pulled_pork_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/desserts/pulled-pork.jpeg */ "./src/imgs/desserts/pulled-pork.jpeg");



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
  meatPlatterPic.src = _imgs_desserts_meat_platter_png__WEBPACK_IMPORTED_MODULE_0__;
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
  pulledPorkPic.src = _imgs_desserts_pulled_pork_jpeg__WEBPACK_IMPORTED_MODULE_1__;
  pulledPorkPic.classList.add("food-picture");
  pulledPorkPic.setAttribute("alt", "Close up of pulled pork.");
  pulledPork.appendChild(pulledPorkPic);
  menuChoices.appendChild(pulledPork);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dessertsSetup);


/***/ }),

/***/ "./src/entrees.js":
/*!************************!*\
  !*** ./src/entrees.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_entrees_chicken_skewer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/entrees/chicken-skewer.jpg */ "./src/imgs/entrees/chicken-skewer.jpg");
/* harmony import */ var _imgs_entrees_meatballs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/entrees/meatballs.jpg */ "./src/imgs/entrees/meatballs.jpg");
/* harmony import */ var _imgs_entrees_calamari_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/entrees/calamari.png */ "./src/imgs/entrees/calamari.png");




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
  chickenSkewerPic.src = _imgs_entrees_chicken_skewer_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
  meatballsPic.src = _imgs_entrees_meatballs_jpg__WEBPACK_IMPORTED_MODULE_1__;
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
  calamariPic.src = _imgs_entrees_calamari_png__WEBPACK_IMPORTED_MODULE_2__;
  calamariPic.classList.add("food-picture");
  calamariPic.setAttribute(
    "alt",
    "Small plate of calamari rings with a lemon slice and a small container of mayonnaise on the side."
  );
  calamari.appendChild(calamariPic);
  menuChoices.appendChild(calamari);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entreesSetup);


/***/ }),

/***/ "./src/main-meals.js":
/*!***************************!*\
  !*** ./src/main-meals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_main_meals_triple_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/main-meals/triple-burger.jpg */ "./src/imgs/main-meals/triple-burger.jpg");
/* harmony import */ var _imgs_main_meals_steak_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/main-meals/steak.jpeg */ "./src/imgs/main-meals/steak.jpeg");
/* harmony import */ var _imgs_main_meals_ham_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/main-meals/ham.jpg */ "./src/imgs/main-meals/ham.jpg");
/* harmony import */ var _imgs_main_meals_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/main-meals/chicken.jpg */ "./src/imgs/main-meals/chicken.jpg");
/* harmony import */ var _imgs_main_meals_lobster_tails_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/main-meals/lobster-tails.jpg */ "./src/imgs/main-meals/lobster-tails.jpg");






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
  burgerPic.src = _imgs_main_meals_triple_burger_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
  steakPic.src = _imgs_main_meals_steak_jpeg__WEBPACK_IMPORTED_MODULE_1__;
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
  hamPic.src = _imgs_main_meals_ham_jpg__WEBPACK_IMPORTED_MODULE_2__;
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
  chickenPic.src = _imgs_main_meals_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__;
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
  lobsterPic.src = _imgs_main_meals_lobster_tails_jpg__WEBPACK_IMPORTED_MODULE_4__;
  lobsterPic.classList.add("food-picture");
  lobsterPic.setAttribute(
    "alt",
    "Close up of three lobster tails loaded with butter and lemon along with lemon halves scattered around the tails."
  );
  lobster.appendChild(lobsterPic);
  menuChoices.appendChild(lobster);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainMealsSetup);


/***/ }),

/***/ "./src/page-setup.js":
/*!***************************!*\
  !*** ./src/page-setup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageSetup);


/***/ }),

/***/ "./src/imgs/desserts/meat-platter.png":
/*!********************************************!*\
  !*** ./src/imgs/desserts/meat-platter.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de9f87ff52d6522c761a.png";

/***/ }),

/***/ "./src/imgs/desserts/pulled-pork.jpeg":
/*!********************************************!*\
  !*** ./src/imgs/desserts/pulled-pork.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "768d3e4a812cdc3d392e.jpeg";

/***/ }),

/***/ "./src/imgs/entrees/calamari.png":
/*!***************************************!*\
  !*** ./src/imgs/entrees/calamari.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f227626d065ce4f1ac3.png";

/***/ }),

/***/ "./src/imgs/entrees/chicken-skewer.jpg":
/*!*********************************************!*\
  !*** ./src/imgs/entrees/chicken-skewer.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f2858e35d25fe10b2b9.jpg";

/***/ }),

/***/ "./src/imgs/entrees/meatballs.jpg":
/*!****************************************!*\
  !*** ./src/imgs/entrees/meatballs.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66c896250386f87011af.jpg";

/***/ }),

/***/ "./src/imgs/main-meals/chicken.jpg":
/*!*****************************************!*\
  !*** ./src/imgs/main-meals/chicken.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed69f4d40301ec255d53.jpg";

/***/ }),

/***/ "./src/imgs/main-meals/ham.jpg":
/*!*************************************!*\
  !*** ./src/imgs/main-meals/ham.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af8251428188a39ec71f.jpg";

/***/ }),

/***/ "./src/imgs/main-meals/lobster-tails.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/main-meals/lobster-tails.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9ece409df0c94cbdef3.jpg";

/***/ }),

/***/ "./src/imgs/main-meals/steak.jpeg":
/*!****************************************!*\
  !*** ./src/imgs/main-meals/steak.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b03f2e7fbecd4198b993.jpeg";

/***/ }),

/***/ "./src/imgs/main-meals/triple-burger.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/main-meals/triple-burger.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23dfc18e14a29e2aed2a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-setup */ "./src/page-setup.js");
/* harmony import */ var _entrees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrees */ "./src/entrees.js");
/* harmony import */ var _main_meals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-meals */ "./src/main-meals.js");
/* harmony import */ var _desserts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desserts */ "./src/desserts.js");





const content = document.getElementById("content");
content.replaceChildren();
(0,_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_entrees__WEBPACK_IMPORTED_MODULE_1__["default"])();

let entreesButton = document.getElementById("entrees-button");
let mainMealsButton = document.getElementById("main-meals-button");
let dessertsButton = document.getElementById("desserts-button");

const resetPage = () => {
  content.replaceChildren();
  (0,_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
  entreesButton = document.getElementById("entrees-button");
  mainMealsButton = document.getElementById("main-meals-button");
  dessertsButton = document.getElementById("desserts-button");
  entreesButton.addEventListener("click", () => {
    resetPage();
    (0,_entrees__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  mainMealsButton.addEventListener("click", () => {
    resetPage();
    (0,_main_meals__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  dessertsButton.addEventListener("click", () => {
    resetPage();
    (0,_desserts__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
};

entreesButton.addEventListener("click", () => {
  resetPage();
  (0,_entrees__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
mainMealsButton.addEventListener("click", () => {
  resetPage();
  (0,_main_meals__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
dessertsButton.addEventListener("click", () => {
  resetPage();
  (0,_desserts__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ0Q7O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0REFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHVDO0FBQ1Q7QUFDRjs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZEQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRm1DO0FBQ1I7QUFDTDtBQUNRO0FBQ007O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrREFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3REFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEk5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEN6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnFDO0FBQ0E7QUFDSztBQUNIOztBQUV2QztBQUNBO0FBQ0EsdURBQVM7QUFDVCxvREFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBWTtBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksdURBQWM7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHFEQUFhO0FBQ2pCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxvREFBWTtBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSx1REFBYztBQUNoQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUscURBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Rlc3NlcnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbnRyZWVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLW1lYWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLXNldHVwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lYXRQbGF0dGVyUGljU3JjIGZyb20gXCIuL2ltZ3MvZGVzc2VydHMvbWVhdC1wbGF0dGVyLnBuZ1wiO1xuaW1wb3J0IHB1bGxlZFBvcmtQaWNTcmMgZnJvbSBcIi4vaW1ncy9kZXNzZXJ0cy9wdWxsZWQtcG9yay5qcGVnXCI7XG5cbmNvbnN0IGRlc3NlcnRzU2V0dXAgPSAoKSA9PiB7XG4gIC8vIFNlbGVjdCB0aGUgY29udGVudCBkaXYgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBwYWdlJ3MgY29udGVudHNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIG1lbnUgYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvLyBDcmVhdGUgbWVudSBjaG9pY2VzIGRpdiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IG1lbnVDaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNob2ljZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlc1wiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51Q2hvaWNlcyk7XG5cbiAgLy8gQ3JlYXRlIG1lYXQgcGxhdHRlciBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgbWVhdFBsYXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZWF0UGxhdHRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBtZWF0UGxhdHRlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1lYXRQbGF0dGVyUGljID0gbmV3IEltYWdlKCk7XG4gIG1lYXRQbGF0dGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgbWVhdFBsYXR0ZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVhdCBQbGF0dGVyICgkMTAuOTkpXCI7XG4gIG1lYXRQbGF0dGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgbWVhdFBsYXR0ZXIuYXBwZW5kQ2hpbGQobWVhdFBsYXR0ZXJUaXRsZSk7XG4gIG1lYXRQbGF0dGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIG1lYXQgcGxhdHRlciBpcyBhIHNlbGVjdGlvbiBvZiBwcmVtaXVtIGN1cmVkIG1lYXRzLCBwZXJmZWN0IGZvciBzaGFyaW5nIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LiBUaGUgcGxhdHRlciBpbmNsdWRlcyBhIHZhcmlldHkgb2YgbWVhdHMgc3VjaCBhcyBwcm9zY2l1dHRvLCBzYWxhbWksIGFuZCBwZXBwZXJvbmksIGFsbCBjYXJlZnVsbHkgY3VyYXRlZCBmb3Igb3B0aW1hbCBmbGF2b3IuIFNlcnZlZCB3aXRoIGEgdmFyaWV0eSBvZiBvbGl2ZXMgYW5kIGNoZWVzZSwgaXQncyB0aGUgcGVyZmVjdCB3YXkgdG8gZW5kIGEgbWVhbC4gVGhlIG1lYXRzIGFyZSBzbGljZWQgdGhpbiB0byBicmluZyBvdXQgdGhlIHJpY2gsIGJvbGQgZmxhdm9ycy5cIjtcbiAgbWVhdFBsYXR0ZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgbWVhdFBsYXR0ZXIuYXBwZW5kQ2hpbGQobWVhdFBsYXR0ZXJEZXNjcmlwdGlvbik7XG4gIG1lYXRQbGF0dGVyUGljLnNyYyA9IG1lYXRQbGF0dGVyUGljU3JjO1xuICBtZWF0UGxhdHRlclBpYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICBtZWF0UGxhdHRlclBpYy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIldvb2RlbiBkaXNoIGNvdmVyZWQgd2l0aCBzbGljZWQgbWVhdCBhbmQgYSBzbWFsbCBib3dsIHdpdGggb2xpdmVzIGFuZCBjaGVlc2UuXCJcbiAgKTtcbiAgbWVhdFBsYXR0ZXIuYXBwZW5kQ2hpbGQobWVhdFBsYXR0ZXJQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChtZWF0UGxhdHRlcik7XG5cbiAgLy8gQ3JlYXRlIHB1bGxlZCBwb3JrIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBwdWxsZWRQb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHVsbGVkUG9ya1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBwdWxsZWRQb3JrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcHVsbGVkUG9ya1BpYyA9IG5ldyBJbWFnZSgpO1xuICBwdWxsZWRQb3JrLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgcHVsbGVkUG9ya1RpdGxlLnRleHRDb250ZW50ID0gXCJCQlEgUHVsbGVkIFBvcmsgKCQxMS45OSlcIjtcbiAgcHVsbGVkUG9ya1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIHB1bGxlZFBvcmsuYXBwZW5kQ2hpbGQocHVsbGVkUG9ya1RpdGxlKTtcbiAgcHVsbGVkUG9ya0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBCQlEgcHVsbGVkIHBvcmsgaXMgc2xvdy1jb29rZWQgdG8gcGVyZmVjdGlvbiBhbmQgc21vdGhlcmVkIGluIGEgc3dlZXQgYW5kIHNwaWN5IGhvbWVtYWRlIGJhcmJlY3VlIHNhdWNlLiBUaGUgcG9yayBpcyB0ZW5kZXIgYW5kIGp1aWN5LCB3aXRoIGEgc21va3kgZmxhdm9yIHRoYXQgaXMgZW5oYW5jZWQgYnkgdGhlIHNhdWNlLiBUaGUgYmFyYmVjdWUgc2F1Y2UgaXMgbWFkZSB3aXRoIGEgYmxlbmQgb2YgdG9tYXRvIHNhdWNlLCBicm93biBzdWdhciwgdmluZWdhciwgYW5kIHNwaWNlcywgdGhhdCBnaXZlcyBpdCBhIGJhbGFuY2Ugb2Ygc3dlZXRuZXNzIGFuZCBoZWF0LiBQZXJmZWN0IHRvIGVuZCBvZmYgYSBtZWF0LWZpbGxlZCBtZWFsLCB0aGlzIGRpc2ggaXMgc3VyZSB0byBzYXRpc2Z5IGFueSBCQlEgbG92ZXIncyBjcmF2aW5nLlwiO1xuICBwdWxsZWRQb3JrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIHB1bGxlZFBvcmsuYXBwZW5kQ2hpbGQocHVsbGVkUG9ya0Rlc2NyaXB0aW9uKTtcbiAgcHVsbGVkUG9ya1BpYy5zcmMgPSBwdWxsZWRQb3JrUGljU3JjO1xuICBwdWxsZWRQb3JrUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIHB1bGxlZFBvcmtQaWMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQ2xvc2UgdXAgb2YgcHVsbGVkIHBvcmsuXCIpO1xuICBwdWxsZWRQb3JrLmFwcGVuZENoaWxkKHB1bGxlZFBvcmtQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChwdWxsZWRQb3JrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlc3NlcnRzU2V0dXA7XG4iLCJpbXBvcnQgY2hpY2tlblNrZXdlclBpY1NyYyBmcm9tIFwiLi9pbWdzL2VudHJlZXMvY2hpY2tlbi1za2V3ZXIuanBnXCI7XG5pbXBvcnQgbWVhdGJhbGxzUGljU3JjIGZyb20gXCIuL2ltZ3MvZW50cmVlcy9tZWF0YmFsbHMuanBnXCI7XG5pbXBvcnQgY2FsYW1hcmlQaWNTcmMgZnJvbSBcIi4vaW1ncy9lbnRyZWVzL2NhbGFtYXJpLnBuZ1wiO1xuXG5jb25zdCBlbnRyZWVzU2V0dXAgPSAoKSA9PiB7XG4gIC8vIFNlbGVjdCB0aGUgY29udGVudCBkaXYgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBwYWdlJ3MgY29udGVudHNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIG1lbnUgYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvLyBDcmVhdGUgbWVudSBjaG9pY2VzIGRpdiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IG1lbnVDaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNob2ljZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlc1wiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51Q2hvaWNlcyk7XG5cbiAgLy8gQ3JlYXRlIGNoaWNrZW4gc2tld2VyIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBjaGlja2VuU2tld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2hpY2tlblNrZXdlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBjaGlja2VuU2tld2VyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2hpY2tlblNrZXdlclBpYyA9IG5ldyBJbWFnZSgpO1xuICBjaGlja2VuU2tld2VyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgY2hpY2tlblNrZXdlclRpdGxlLnRleHRDb250ZW50ID0gXCIyIEJha2VkIENoaWNrZW4gU2tld2VycyAoJDkuOTkpXCI7XG4gIGNoaWNrZW5Ta2V3ZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBjaGlja2VuU2tld2VyLmFwcGVuZENoaWxkKGNoaWNrZW5Ta2V3ZXJUaXRsZSk7XG4gIGNoaWNrZW5Ta2V3ZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJJbmR1bGdlIGluIG91ciBtb3V0aC13YXRlcmluZyBjaGlja2VuIHNrZXdlcnMsIG1hcmluYXRlZCBpbiBhIGJsZW5kIG9mIHNwaWNlcyBhbmQgaGVyYnMgZm9yIG1heGltdW0gZmxhdm9yLiBCYWtlZCB0byBhIGdvbGRlbiBicm93biBhbmQgc2VydmVkIGhvdCBvdXQgdGhlIG92ZW4uIFRoZXNlIHNrZXdlcnMgYXJlIGp1aWN5IGFuZCB0ZW5kZXIsIHBlcmZlY3QgZm9yIGFueSBtZWF0IGxvdmVyLiBQZXJmZWN0IGFzIGFuIGFwcGV0aXplciwgdGhlc2Ugc2tld2VycyB3aWxsIGxlYXZlIHlvdSB3YW50aW5nIG1vcmUuXCI7XG4gIGNoaWNrZW5Ta2V3ZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgY2hpY2tlblNrZXdlci5hcHBlbmRDaGlsZChjaGlja2VuU2tld2VyRGVzY3JpcHRpb24pO1xuICBjaGlja2VuU2tld2VyUGljLnNyYyA9IGNoaWNrZW5Ta2V3ZXJQaWNTcmM7XG4gIGNoaWNrZW5Ta2V3ZXJQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgY2hpY2tlblNrZXdlclBpYy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIkZpdmUgY2hpY2tlbiBza2V3ZXJzIGxhaWQgb3V0IGFjcm9zcyBhIGJha2luZyBzaGVldC5cIlxuICApO1xuICBjaGlja2VuU2tld2VyLmFwcGVuZENoaWxkKGNoaWNrZW5Ta2V3ZXJQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChjaGlja2VuU2tld2VyKTtcblxuICAvLyBDcmVhdGUgbWVhdGJhbGxzIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBtZWF0YmFsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZWF0YmFsbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbWVhdGJhbGxzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbWVhdGJhbGxzUGljID0gbmV3IEltYWdlKCk7XG4gIG1lYXRiYWxscy5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIG1lYXRiYWxsc1RpdGxlLnRleHRDb250ZW50ID0gXCI1IFBjLiBKdW1ibyBNZWF0YmFsbHMgKCQxMi45OSlcIjtcbiAgbWVhdGJhbGxzVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgbWVhdGJhbGxzLmFwcGVuZENoaWxkKG1lYXRiYWxsc1RpdGxlKTtcbiAgbWVhdGJhbGxzRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIGhvbWVtYWRlIG1lYXRiYWxscyBhcmUgbWFkZSB3aXRoIGEgYmxlbmQgb2YgZ3JvdW5kIGJlZWYgYW5kIHBvcmssIHNlYXNvbmVkIHRvIHBlcmZlY3Rpb24gYW5kIGNvb2tlZCB0byB0ZW5kZXIsIGp1aWN5IHBlcmZlY3Rpb24uIFRoZXkgYXJlIHNpbW1lcmVkIGluIGEgcmljaCwgZmxhdm9yZnVsIG1hcmluYXJhIHNhdWNlIG1hZGUgd2l0aCBjcnVzaGVkIHRvbWF0b2VzLCBvbmlvbnMsIGdhcmxpYywgYW5kIEl0YWxpYW4gaGVyYnMuIFRoZXNlIG1lYXRiYWxscyBhcmUgdGhlIHBlcmZlY3QgY29tZm9ydCBmb29kLiBBIHNwcmlua2xlIG9mIGdyYXRlZCBQYXJtZXNhbiBjaGVlc2UgYWRkcyBhbiBleHRyYSBsYXllciBvZiBmbGF2b3IuIFBlcmZlY3QgYXMgYSBwYXJ0eSBhcHBldGl6ZXIsIHRoZXNlIG1lYXRiYWxscyBhcmUgc3VyZSB0byBwbGVhc2UuIFRoZXkgYXJlIGdsdXRlbi1mcmVlLCBwZXJmZWN0IGZvciB0aG9zZSB3aG8gbG9va2luZyBmb3IgZ2x1dGVuLWZyZWUgb3B0aW9ucy5cIjtcbiAgbWVhdGJhbGxzRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIG1lYXRiYWxscy5hcHBlbmRDaGlsZChtZWF0YmFsbHNEZXNjcmlwdGlvbik7XG4gIG1lYXRiYWxsc1BpYy5zcmMgPSBtZWF0YmFsbHNQaWNTcmM7XG4gIG1lYXRiYWxsc1BpYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICBtZWF0YmFsbHNQaWMuc2V0QXR0cmlidXRlKFxuICAgIFwiYWx0XCIsXG4gICAgXCJQbGF0ZSBvZiBsYXJnZSBtZWF0YmFsbHMgdG93ZXJlZCBvbiB0b3Agb2YgZWFjaCBvdGhlciBjb3ZlcmVkIGluIG1hcmluYXJhIHNhdWNlIGFuZCBzcHJpbmtsZWQgd2l0aCBQYXJtZXNhbiBjaGVlc2UuXCJcbiAgKTtcbiAgbWVhdGJhbGxzLmFwcGVuZENoaWxkKG1lYXRiYWxsc1BpYyk7XG4gIG1lbnVDaG9pY2VzLmFwcGVuZENoaWxkKG1lYXRiYWxscyk7XG5cbiAgLy8gQ3JlYXRlIGNhbGFtYXJpIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBjYWxhbWFyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhbGFtYXJpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGNhbGFtYXJpRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2FsYW1hcmlQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgY2FsYW1hcmkuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBjYWxhbWFyaVRpdGxlLnRleHRDb250ZW50ID0gXCJDcmlzcHkgQ2FsYW1hcmkgKCQ3Ljk5KVwiO1xuICBjYWxhbWFyaVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGNhbGFtYXJpLmFwcGVuZENoaWxkKGNhbGFtYXJpVGl0bGUpO1xuICBjYWxhbWFyaURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBjcmlzcHkgZnJpZWQgY2FsYW1hcmkgaXMgbWFkZSB3aXRoIGZyZXNoLCB0ZW5kZXIgc3F1aWQgdGhhdCdzIGJlZW4gbGlnaHRseSBkdXN0ZWQgd2l0aCBmbG91ciBhbmQgc3BpY2VzIGJlZm9yZSBiZWluZyBmcmllZCB0byBhIGdvbGRlbiBicm93bi4gVGhlIGNhbGFtYXJpIGlzIHNlcnZlZCB3aXRoIGEgdGFuZ3kgbGVtb24gYWlvbGkgbWFkZSB3aXRoIGZyZXNoIGxlbW9uIGp1aWNlLCBnYXJsaWMsIGFuZCBtYXlvIHRoYXQgY29tcGxpbWVudHMgdGhlIGNhbGFtYXJpJ3MgZGVsaWNhdGUgZmxhdm9yLiBUaGUgY2FsYW1hcmkgaXMgY3Jpc3B5IG9uIHRoZSBvdXRzaWRlIGFuZCB0ZW5kZXIgb24gdGhlIGluc2lkZS4gVGhlIHNwcmlua2xlIG9mIGxlbW9uIHplc3Qgb24gdG9wIGFkZCBhIG5pY2UgZnJlc2huZXNzIGFuZCBiYWxhbmNlIHRvIHRoZSBkaXNoLiBJdCdzIGEgY2xhc3NpYyBmYXZvcml0ZSBmb3Igc2VhZm9vZCBsb3ZlcnMuXCI7XG4gIGNhbGFtYXJpRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGNhbGFtYXJpLmFwcGVuZENoaWxkKGNhbGFtYXJpRGVzY3JpcHRpb24pO1xuICBjYWxhbWFyaVBpYy5zcmMgPSBjYWxhbWFyaVBpY1NyYztcbiAgY2FsYW1hcmlQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgY2FsYW1hcmlQaWMuc2V0QXR0cmlidXRlKFxuICAgIFwiYWx0XCIsXG4gICAgXCJTbWFsbCBwbGF0ZSBvZiBjYWxhbWFyaSByaW5ncyB3aXRoIGEgbGVtb24gc2xpY2UgYW5kIGEgc21hbGwgY29udGFpbmVyIG9mIG1heW9ubmFpc2Ugb24gdGhlIHNpZGUuXCJcbiAgKTtcbiAgY2FsYW1hcmkuYXBwZW5kQ2hpbGQoY2FsYW1hcmlQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChjYWxhbWFyaSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbnRyZWVzU2V0dXA7XG4iLCJpbXBvcnQgYnVyZ2VyUGljU3JjIGZyb20gXCIuL2ltZ3MvbWFpbi1tZWFscy90cmlwbGUtYnVyZ2VyLmpwZ1wiO1xuaW1wb3J0IHN0ZWFrUGljU3JjIGZyb20gXCIuL2ltZ3MvbWFpbi1tZWFscy9zdGVhay5qcGVnXCI7XG5pbXBvcnQgaGFtUGljU3JjIGZyb20gXCIuL2ltZ3MvbWFpbi1tZWFscy9oYW0uanBnXCI7XG5pbXBvcnQgY2hpY2tlblBpY1NyYyBmcm9tIFwiLi9pbWdzL21haW4tbWVhbHMvY2hpY2tlbi5qcGdcIjtcbmltcG9ydCBsb2JzdGVyUGljU3JjIGZyb20gXCIuL2ltZ3MvbWFpbi1tZWFscy9sb2JzdGVyLXRhaWxzLmpwZ1wiO1xuXG5jb25zdCBtYWluTWVhbHNTZXR1cCA9ICgpID0+IHtcbiAgLy8gU2VsZWN0IHRoZSBjb250ZW50IGRpdiB3aGljaCBjb250YWlucyBhbGwgb2YgdGhlIHBhZ2UncyBjb250ZW50c1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vIENyZWF0ZSB0aGUgbWVudSBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIC8vIENyZWF0ZSBtZW51IGNob2ljZXMgZGl2IGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgbWVudUNob2ljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q2hvaWNlcy5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VzXCIpO1xuICBtZW51LmFwcGVuZENoaWxkKG1lbnVDaG9pY2VzKTtcblxuICAvLyBDcmVhdGUgYnVyZ2VyIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidXJnZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgYnVyZ2VyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYnVyZ2VyUGljID0gbmV3IEltYWdlKCk7XG4gIGJ1cmdlci5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIGJ1cmdlclRpdGxlLnRleHRDb250ZW50ID0gXCJUcmlwbGUgUGF0dHkgQnVyZ2VyICgkMjAuOTkpXCI7XG4gIGJ1cmdlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGJ1cmdlci5hcHBlbmRDaGlsZChidXJnZXJUaXRsZSk7XG4gIGJ1cmdlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIlRocmVlIGp1aWN5IGJlZWYgcGF0dGllcyBzdGFja2VkIGhpZ2ggb24gYSB0b2FzdGVkIGJ1biwgdG9wcGVkIHdpdGggYmFjb24sIHBpY2tsZXMsIGNhcmFtZWxpc2VkIG9uaW9uLCBjaGVlZGFyIGNoZWVzZSwgYW5kIG91ciBzcGVjaWFsIGNhcm5pdm9yZSBzYXVjZS4gU2VydmVkIHdpdGggYSBzaWRlIG9mIGNyaXNweSBmcmllcy4gUGVyZmVjdCBmb3IgdGhlIG1lYXQgbG92ZXIgd2hvIHdhbnRzIHRvIHRha2UgdGhlaXIgYnVyZ2VyIGdhbWUgdG8gdGhlIG5leHQgbGV2ZWwuXCI7XG4gIGJ1cmdlckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBidXJnZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyRGVzY3JpcHRpb24pO1xuICBidXJnZXJQaWMuc3JjID0gYnVyZ2VyUGljU3JjO1xuICBidXJnZXJQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgYnVyZ2VyUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiVGFsbCBidXJnZXIgd2l0aCB0aHJlZSBwYXR0aWVzLCBwaWNrbGUgc2xpY2VzLCBiYWNvbiwgc3BlY2lhbCBzYXVjZSwgYW5kIG9vemluZyB3aXRoIGNoZWRkYXIgY2hlZXNlLlwiXG4gICk7XG4gIGJ1cmdlci5hcHBlbmRDaGlsZChidXJnZXJQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChidXJnZXIpO1xuXG4gIC8vIENyZWF0ZSBzdGVhayBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3Qgc3RlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdGVha1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzdGVha0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHN0ZWFrUGljID0gbmV3IEltYWdlKCk7XG4gIHN0ZWFrLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgc3RlYWtUaXRsZS50ZXh0Q29udGVudCA9IFwiMTAgT3ouIFJpYmV5ZSBTdGVhayAoJDI3Ljk5KVwiO1xuICBzdGVha1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIHN0ZWFrLmFwcGVuZENoaWxkKHN0ZWFrVGl0bGUpO1xuICBzdGVha0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciAxMCBveiByaWJleWUgc3RlYWsgaXMgY3V0IGZyb20gdGhlIG1vc3QgZmxhdm9yZnVsIHBhcnQgb2YgdGhlIGJlZWYuIFRoZSBzdGVhayBpcyBzZWFzb25lZCB3aXRoIGEgYmxlbmQgb2Ygc3BpY2VzLCBhbmQgZ3JpbGxlZCB0byB5b3VyIGRlc2lyZWQgdGVtcGVyYXR1cmUuIFRoZSBtZWF0IGlzIGp1aWN5LCB0ZW5kZXIsIGFuZCBmdWxsIG9mIGZsYXZvci4gU2VydmVkIHdpdGggYSBzaWRlIG9mIHNhdXTDqWVkIHZlZ2V0YWJsZXMsIG1hc2hlZCBwb3RhdG9lcyBvciByb2FzdGVkIHBvdGF0b2VzLiBUaGUgc3RlYWsgaXMgZmluaXNoZWQgd2l0aCBhIHNwcmlua2xlIG9mIGNvYXJzZSBzZWEgc2FsdCBhbmQgZnJlc2ggY3JhY2tlZCBwZXBwZXIgZm9yIGEgcGVyZmVjdCBiYWxhbmNlIG9mIGZsYXZvci4gUGVyZmVjdCBmb3IgYSBzcGVjaWFsIG9jY2FzaW9uIG9yIGEgY2FzdWFsIGRpbm5lciwgdGhpcyBzdGVhayBpcyBzdXJlIHRvIHNhdGlzZnkgYW55IG1lYXQgbG92ZXIncyBjcmF2aW5nLlwiO1xuICBzdGVha0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBzdGVhay5hcHBlbmRDaGlsZChzdGVha0Rlc2NyaXB0aW9uKTtcbiAgc3RlYWtQaWMuc3JjID0gc3RlYWtQaWNTcmM7XG4gIHN0ZWFrUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIHN0ZWFrUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiSnVpY3kgZ3JpbGxlZCByaWJleWUgc3RlYWsgb24gdG9wIG9mIGEgd29vZGVuIGN1dHRpbmcgYm9hcmQgd2l0aCB2YXJpb3VzIHZlZ2V0YWJsZXMgaW4gdGhlIGJhY2tncm91bmQuXCJcbiAgKTtcbiAgc3RlYWsuYXBwZW5kQ2hpbGQoc3RlYWtQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChzdGVhayk7XG5cbiAgLy8gQ3JlYXRlIGhhbSBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgaGFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGFtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGhhbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGhhbVBpYyA9IG5ldyBJbWFnZSgpO1xuICBoYW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBoYW1UaXRsZS50ZXh0Q29udGVudCA9IFwiSG9uZXkgTXVzdGFyZCBHbGF6ZWQgSGFtICgkMjQuOTkpXCI7XG4gIGhhbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGhhbS5hcHBlbmRDaGlsZChoYW1UaXRsZSk7XG4gIGhhbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBiYWtlZCBoYW0gaXMgc2xvdy1jb29rZWQgdG8gcGVyZmVjdGlvbiwgYW5kIGdsYXplZCB3aXRoIGEgc3dlZXQgYW5kIHRhbmd5IGhvbmV5IG11c3RhcmQgc2F1Y2UuIFRoZSBoYW0gaXMgbWFkZSBmcm9tIGhpZ2gtcXVhbGl0eSBwb3JrIGFuZCBpcyBqdWljeSwgdGVuZGVyLCBhbmQgZnVsbCBvZiBmbGF2b3IuIFRoZSBob25leSBtdXN0YXJkIGdsYXplIGlzIG1hZGUgZnJvbSBhIGJsZW5kIG9mIGhvbmV5LCBEaWpvbiBtdXN0YXJkLCBicm93biBzdWdhciBhbmQgc3BpY2VzLCB0aGF0IGNvbXBsZW1lbnRzIHRoZSBuYXR1cmFsIHN3ZWV0bmVzcyBvZiB0aGUgaGFtLiBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygcm9hc3RlZCBwb3RhdG9lcyBhbmQgc2Vhc29uYWwgdmVnZXRhYmxlcy4gVGhpcyB0cmFkaXRpb25hbCBkaXNoIGlzIHBlcmZlY3QgZm9yIGFueSBvY2Nhc2lvbiwgZnJvbSBhIGZhbWlseSBkaW5uZXIgdG8gYSBob2xpZGF5IGdhdGhlcmluZy5cIjtcbiAgaGFtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGhhbS5hcHBlbmRDaGlsZChoYW1EZXNjcmlwdGlvbik7XG4gIGhhbVBpYy5zcmMgPSBoYW1QaWNTcmM7XG4gIGhhbVBpYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICBoYW1QaWMuc2V0QXR0cmlidXRlKFxuICAgIFwiYWx0XCIsXG4gICAgXCJTbGljZWQgYmFrZWQgaGFtIGluIGEgYm93bCB3aXRoIHZlZ2V0YWJsZXMgaW4gdGhlIGJhY2tncm91bmQuXCJcbiAgKTtcbiAgaGFtLmFwcGVuZENoaWxkKGhhbVBpYyk7XG4gIG1lbnVDaG9pY2VzLmFwcGVuZENoaWxkKGhhbSk7XG5cbiAgLy8gQ3JlYXRlIGNoaWNrZW4gc2VjdGlvbiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IGNoaWNrZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjaGlja2VuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGNoaWNrZW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjaGlja2VuUGljID0gbmV3IEltYWdlKCk7XG4gIGNoaWNrZW4uY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBjaGlja2VuVGl0bGUudGV4dENvbnRlbnQgPSBcIkNyZWFteSBDaGlja2VuIE1hcnNhbGEgKCQyNS45OSlcIjtcbiAgY2hpY2tlblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGNoaWNrZW4uYXBwZW5kQ2hpbGQoY2hpY2tlblRpdGxlKTtcbiAgY2hpY2tlbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBjaGlja2VuIG1hcnNhbGEgaXMgYSBjbGFzc2ljIEl0YWxpYW4gZGlzaCBtYWRlIHdpdGggdGVuZGVyIGNoaWNrZW4gYnJlYXN0IHRoYXQgaXMgc2F1dMOpZWQgYW5kIHRoZW4gc2ltbWVyZWQgaW4gYSByaWNoIE1hcnNhbGEgc2F1Y2Ugd2l0aCBtdXNocm9vbXMuIFRoZSBjaGlja2VuIGlzIGNvb2tlZCB1bnRpbCB0ZW5kZXIgYW5kIGp1aWN5LCBhbmQgdGhlIHNhdWNlIGlzIHRoaWNrZW5lZCB0byBhIHBlcmZlY3QgY29uc2lzdGVuY3kuIFRoZSBlYXJ0aHkgYW5kIHJpY2ggZmxhdm9yIG9mIG11c2hyb29tcyBwZXJmZWN0bHkgYmFsYW5jZXMgdGhlIHN3ZWV0bmVzcyBvZiBtYXJzYWxhIHNhdWNlLiBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygcm9hc3RlZCBwb3RhdG9lcyBvciBtYXNoZWQgcG90YXRvZXMsIGl0J3MgYSBwZXJmZWN0IGNvbWZvcnQgZm9vZC4gVGhlIGRpc2ggaXMgZmluaXNoZWQgd2l0aCBhIHNwcmlua2xlIG9mIGNob3BwZWQgcGFyc2xleSBhbmQgUGFybWVzYW4gY2h1bmtzLCBhZGRpbmcgZnJlc2huZXNzIGFuZCBjb2xvciB0byB0aGUgcGxhdGUuIFBlcmZlY3QgZm9yIGEgc3BlY2lhbCBvY2Nhc2lvbiBvciBhIGNhc3VhbCBkaW5uZXIsIHRoaXMgZGlzaCBpcyBzdXJlIHRvIHNhdGlzZnkgYW55IGNoaWNrZW4gbG92ZXIncyBjcmF2aW5nLlwiO1xuICBjaGlja2VuRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGNoaWNrZW4uYXBwZW5kQ2hpbGQoY2hpY2tlbkRlc2NyaXB0aW9uKTtcbiAgY2hpY2tlblBpYy5zcmMgPSBjaGlja2VuUGljU3JjO1xuICBjaGlja2VuUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIGNoaWNrZW5QaWMuc2V0QXR0cmlidXRlKFxuICAgIFwiYWx0XCIsXG4gICAgXCJDbG9zZSB1cCBvZiBjaGlja2VuIGJyZWFzdCB0b3BwZWQgd2l0aCBzYXVjZSwgUGFybWVzYW4gY2hlZXNlLCBhbmQgbXVzaHJvb21zIHdpdGggdmVndGFibGVzIGluIHRoZSBiYWNrZ3JvdW5kLlwiXG4gICk7XG4gIGNoaWNrZW4uYXBwZW5kQ2hpbGQoY2hpY2tlblBpYyk7XG4gIG1lbnVDaG9pY2VzLmFwcGVuZENoaWxkKGNoaWNrZW4pO1xuXG4gIC8vIENyZWF0ZSBsb2JzdGVyIHRhaWxzIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBsb2JzdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9ic3RlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBsb2JzdGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbG9ic3RlclBpYyA9IG5ldyBJbWFnZSgpO1xuICBsb2JzdGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgbG9ic3RlclRpdGxlLnRleHRDb250ZW50ID1cbiAgICBcIlRyaXBsZSBMb2JzdGVyIFRhaWxzIFdpdGggQnV0dGVyIEFuZCBMZW1vbiAoJDMyLjk5KVwiO1xuICBsb2JzdGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgbG9ic3Rlci5hcHBlbmRDaGlsZChsb2JzdGVyVGl0bGUpO1xuICBsb2JzdGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIHN1Y2N1bGVudCBsb2JzdGVyIHRhaWxzIGFyZSBzdGVhbWVkIHRvIHBlcmZlY3Rpb24gYW5kIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBidXR0ZXIgYW5kIGxlbW9uLiBUaGUgbWVhdCBpcyBzd2VldCwgdGVuZGVyIGFuZCBzdWNjdWxlbnQsIHdpdGggYSBkZWxpY2F0ZSBmbGF2b3IgdGhhdCBpcyBlbmhhbmNlZCBieSB0aGUgYnV0dGVyIGFuZCBsZW1vbi4gVGhlIGxvYnN0ZXIgdGFpbHMgYXJlIHNwbGl0IGluIGhhbGYgYW5kIHNlcnZlZCB3aXRoIHRoZSBtZWF0IGV4cG9zZWQsIG1ha2luZyBpdCBlYXN5IHRvIGFjY2VzcyBhbmQgZW5qb3kuIFRoZSBsb2JzdGVyIHRhaWxzIGFyZSBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgbGVtb24gd2VkZ2VzIGFuZCBidXR0ZXIsIHNvIHlvdSBjYW4gYWRqdXN0IHRoZSBmbGF2b3JzIHRvIHlvdXIgbGlraW5nLiBQZXJmZWN0IGZvciBhIHNwZWNpYWwgb2NjYXNpb24gb3IgYSByb21hbnRpYyBkaW5uZXIsIHRoaXMgZGlzaCBpcyBzdXJlIHRvIGltcHJlc3MuXCI7XG4gIGxvYnN0ZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgbG9ic3Rlci5hcHBlbmRDaGlsZChsb2JzdGVyRGVzY3JpcHRpb24pO1xuICBsb2JzdGVyUGljLnNyYyA9IGxvYnN0ZXJQaWNTcmM7XG4gIGxvYnN0ZXJQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgbG9ic3RlclBpYy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIkNsb3NlIHVwIG9mIHRocmVlIGxvYnN0ZXIgdGFpbHMgbG9hZGVkIHdpdGggYnV0dGVyIGFuZCBsZW1vbiBhbG9uZyB3aXRoIGxlbW9uIGhhbHZlcyBzY2F0dGVyZWQgYXJvdW5kIHRoZSB0YWlscy5cIlxuICApO1xuICBsb2JzdGVyLmFwcGVuZENoaWxkKGxvYnN0ZXJQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChsb2JzdGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5NZWFsc1NldHVwO1xuIiwiLy8gQ3JlYXRlIGZ1bmN0aW9uIHRvIG1ha2UgdGhlIGluaXRpYWwgcGFnZVxuY29uc3QgcGFnZVNldHVwID0gKCkgPT4ge1xuICAvLyBTZWxlY3QgdGhlIGNvbnRlbnQgZGl2IHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgcGFnZSdzIGNvbnRlbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIHRoZSBoZWFkZXIgYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lYXQgRWF0ZXIncyBEaW5lclwiO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIENyZWF0ZSBtZW51IHNlY3Rpb24gc2VsZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3Qgc2VjdGlvblNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY3Rpb25TZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tc2VsZWN0aW9uXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb25TZWxlY3Rpb24pO1xuXG4gIC8vIENyZWF0ZSBtZW51IHNlbGVjdGlvbiBidXR0b25zIGFuZCBhZGQgdGhlbSB0byB0aGUgc2VjdGlvbiBzZWxlY3Rpb25cbiAgY29uc3QgZW50cmVlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG1haW5NZWFsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRlc3NlcnRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cmVlc0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVudHJlZXMtYnV0dG9uXCIpO1xuICBtYWluTWVhbHNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLW1lYWxzLWJ1dHRvblwiKTtcbiAgZGVzc2VydHNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNzZXJ0cy1idXR0b25cIik7XG4gIGVudHJlZXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkVudHLDqWVzXCI7XG4gIG1haW5NZWFsc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiTWFpbiBNZWFsc1wiO1xuICBkZXNzZXJ0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcbiAgY29uc3QgbWVudUJ1dHRvbnMgPSBbZW50cmVlc0J1dHRvbiwgbWFpbk1lYWxzQnV0dG9uLCBkZXNzZXJ0c0J1dHRvbl07XG4gIG1lbnVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1idXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0b24tYnV0dG9uOmFjdGl2ZVwiKTtcbiAgICBzZWN0aW9uU2VsZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVNldHVwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHBhZ2VTZXR1cCBmcm9tIFwiLi9wYWdlLXNldHVwXCI7XG5pbXBvcnQgZW50cmVlc1NldHVwIGZyb20gXCIuL2VudHJlZXNcIjtcbmltcG9ydCBtYWluTWVhbHNTZXR1cCBmcm9tIFwiLi9tYWluLW1lYWxzXCI7XG5pbXBvcnQgZGVzc2VydHNTZXR1cCBmcm9tIFwiLi9kZXNzZXJ0c1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbnBhZ2VTZXR1cCgpO1xuZW50cmVlc1NldHVwKCk7XG5cbmxldCBlbnRyZWVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRyZWVzLWJ1dHRvblwiKTtcbmxldCBtYWluTWVhbHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVhbHMtYnV0dG9uXCIpO1xubGV0IGRlc3NlcnRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzZXJ0cy1idXR0b25cIik7XG5cbmNvbnN0IHJlc2V0UGFnZSA9ICgpID0+IHtcbiAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcGFnZVNldHVwKCk7XG4gIGVudHJlZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudHJlZXMtYnV0dG9uXCIpO1xuICBtYWluTWVhbHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVhbHMtYnV0dG9uXCIpO1xuICBkZXNzZXJ0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc2VydHMtYnV0dG9uXCIpO1xuICBlbnRyZWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVzZXRQYWdlKCk7XG4gICAgZW50cmVlc1NldHVwKCk7XG4gIH0pO1xuICBtYWluTWVhbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFBhZ2UoKTtcbiAgICBtYWluTWVhbHNTZXR1cCgpO1xuICB9KTtcbiAgZGVzc2VydHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFBhZ2UoKTtcbiAgICBkZXNzZXJ0c1NldHVwKCk7XG4gIH0pO1xufTtcblxuZW50cmVlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldFBhZ2UoKTtcbiAgZW50cmVlc1NldHVwKCk7XG59KTtcbm1haW5NZWFsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldFBhZ2UoKTtcbiAgbWFpbk1lYWxzU2V0dXAoKTtcbn0pO1xuZGVzc2VydHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVzZXRQYWdlKCk7XG4gIGRlc3NlcnRzU2V0dXAoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9