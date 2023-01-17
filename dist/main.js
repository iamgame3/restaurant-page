/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  const desertsButton = document.createElement("button");
  entreesButton.setAttribute("id", "entrees-button");
  mainMealsButton.setAttribute("id", "main-meals-button");
  desertsButton.setAttribute("id", "deserts-button");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageSetup);


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




const content = document.getElementById("content");
content.replaceChildren();
(0,_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_entrees__WEBPACK_IMPORTED_MODULE_1__["default"])();

let entreesButton = document.getElementById("entrees-button");
let mainMealsButton = document.getElementById("main-meals-button");
let desertsButton = document.getElementById("deserts-button");

const resetPage = () => {
  content.replaceChildren();
  (0,_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
  entreesButton = document.getElementById("entrees-button");
  mainMealsButton = document.getElementById("main-meals-button");
  desertsButton = document.getElementById("deserts-button");
  entreesButton.addEventListener("click", () => {
    resetPage();
    (0,_entrees__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  mainMealsButton.addEventListener("click", () => {
    resetPage();
    (0,_main_meals__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQztBQUNBO0FBQ0s7O0FBRTFDO0FBQ0E7QUFDQSx1REFBUztBQUNULG9EQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFZO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEVBQUUsb0RBQVk7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsdURBQWM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbnRyZWVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLW1lYWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLXNldHVwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoaWNrZW5Ta2V3ZXJQaWNTcmMgZnJvbSBcIi4vaW1ncy9lbnRyZWVzL2NoaWNrZW4tc2tld2VyLmpwZ1wiO1xuaW1wb3J0IG1lYXRiYWxsc1BpY1NyYyBmcm9tIFwiLi9pbWdzL2VudHJlZXMvbWVhdGJhbGxzLmpwZ1wiO1xuaW1wb3J0IGNhbGFtYXJpUGljU3JjIGZyb20gXCIuL2ltZ3MvZW50cmVlcy9jYWxhbWFyaS5wbmdcIjtcblxuY29uc3QgZW50cmVlc1NldHVwID0gKCkgPT4ge1xuICAvLyBTZWxlY3QgdGhlIGNvbnRlbnQgZGl2IHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgcGFnZSdzIGNvbnRlbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtZW51IGFuZCBhZGQgaXQgdG8gdGhlIHBhZ2VcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgLy8gQ3JlYXRlIG1lbnUgY2hvaWNlcyBkaXYgYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBtZW51Q2hvaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDaG9pY2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZXNcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNob2ljZXMpO1xuXG4gIC8vIENyZWF0ZSBjaGlja2VuIHNrZXdlciBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgY2hpY2tlblNrZXdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoaWNrZW5Ta2V3ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgY2hpY2tlblNrZXdlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNoaWNrZW5Ta2V3ZXJQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgY2hpY2tlblNrZXdlci5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIGNoaWNrZW5Ta2V3ZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiMiBCYWtlZCBDaGlja2VuIFNrZXdlcnMgKCQ5Ljk5KVwiO1xuICBjaGlja2VuU2tld2VyVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgY2hpY2tlblNrZXdlci5hcHBlbmRDaGlsZChjaGlja2VuU2tld2VyVGl0bGUpO1xuICBjaGlja2VuU2tld2VyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiSW5kdWxnZSBpbiBvdXIgbW91dGgtd2F0ZXJpbmcgY2hpY2tlbiBza2V3ZXJzLCBtYXJpbmF0ZWQgaW4gYSBibGVuZCBvZiBzcGljZXMgYW5kIGhlcmJzIGZvciBtYXhpbXVtIGZsYXZvci4gQmFrZWQgdG8gYSBnb2xkZW4gYnJvd24gYW5kIHNlcnZlZCBob3Qgb3V0IHRoZSBvdmVuLiBUaGVzZSBza2V3ZXJzIGFyZSBqdWljeSBhbmQgdGVuZGVyLCBwZXJmZWN0IGZvciBhbnkgbWVhdCBsb3Zlci4gUGVyZmVjdCBhcyBhbiBhcHBldGl6ZXIsIHRoZXNlIHNrZXdlcnMgd2lsbCBsZWF2ZSB5b3Ugd2FudGluZyBtb3JlLlwiO1xuICBjaGlja2VuU2tld2VyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGNoaWNrZW5Ta2V3ZXIuYXBwZW5kQ2hpbGQoY2hpY2tlblNrZXdlckRlc2NyaXB0aW9uKTtcbiAgY2hpY2tlblNrZXdlclBpYy5zcmMgPSBjaGlja2VuU2tld2VyUGljU3JjO1xuICBjaGlja2VuU2tld2VyUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIGNoaWNrZW5Ta2V3ZXJQaWMuc2V0QXR0cmlidXRlKFxuICAgIFwiYWx0XCIsXG4gICAgXCJGaXZlIGNoaWNrZW4gc2tld2VycyBsYWlkIG91dCBhY3Jvc3MgYSBiYWtpbmcgc2hlZXQuXCJcbiAgKTtcbiAgY2hpY2tlblNrZXdlci5hcHBlbmRDaGlsZChjaGlja2VuU2tld2VyUGljKTtcbiAgbWVudUNob2ljZXMuYXBwZW5kQ2hpbGQoY2hpY2tlblNrZXdlcik7XG5cbiAgLy8gQ3JlYXRlIG1lYXRiYWxscyBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgbWVhdGJhbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVhdGJhbGxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG1lYXRiYWxsc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1lYXRiYWxsc1BpYyA9IG5ldyBJbWFnZSgpO1xuICBtZWF0YmFsbHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBtZWF0YmFsbHNUaXRsZS50ZXh0Q29udGVudCA9IFwiNSBQYy4gSnVtYm8gTWVhdGJhbGxzICgkMTIuOTkpXCI7XG4gIG1lYXRiYWxsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIG1lYXRiYWxscy5hcHBlbmRDaGlsZChtZWF0YmFsbHNUaXRsZSk7XG4gIG1lYXRiYWxsc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBob21lbWFkZSBtZWF0YmFsbHMgYXJlIG1hZGUgd2l0aCBhIGJsZW5kIG9mIGdyb3VuZCBiZWVmIGFuZCBwb3JrLCBzZWFzb25lZCB0byBwZXJmZWN0aW9uIGFuZCBjb29rZWQgdG8gdGVuZGVyLCBqdWljeSBwZXJmZWN0aW9uLiBUaGV5IGFyZSBzaW1tZXJlZCBpbiBhIHJpY2gsIGZsYXZvcmZ1bCBtYXJpbmFyYSBzYXVjZSBtYWRlIHdpdGggY3J1c2hlZCB0b21hdG9lcywgb25pb25zLCBnYXJsaWMsIGFuZCBJdGFsaWFuIGhlcmJzLiBUaGVzZSBtZWF0YmFsbHMgYXJlIHRoZSBwZXJmZWN0IGNvbWZvcnQgZm9vZC4gQSBzcHJpbmtsZSBvZiBncmF0ZWQgUGFybWVzYW4gY2hlZXNlIGFkZHMgYW4gZXh0cmEgbGF5ZXIgb2YgZmxhdm9yLiBQZXJmZWN0IGFzIGEgcGFydHkgYXBwZXRpemVyLCB0aGVzZSBtZWF0YmFsbHMgYXJlIHN1cmUgdG8gcGxlYXNlLiBUaGV5IGFyZSBnbHV0ZW4tZnJlZSwgcGVyZmVjdCBmb3IgdGhvc2Ugd2hvIGxvb2tpbmcgZm9yIGdsdXRlbi1mcmVlIG9wdGlvbnMuXCI7XG4gIG1lYXRiYWxsc0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBtZWF0YmFsbHMuYXBwZW5kQ2hpbGQobWVhdGJhbGxzRGVzY3JpcHRpb24pO1xuICBtZWF0YmFsbHNQaWMuc3JjID0gbWVhdGJhbGxzUGljU3JjO1xuICBtZWF0YmFsbHNQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgbWVhdGJhbGxzUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiUGxhdGUgb2YgbGFyZ2UgbWVhdGJhbGxzIHRvd2VyZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIgY292ZXJlZCBpbiBtYXJpbmFyYSBzYXVjZSBhbmQgc3ByaW5rbGVkIHdpdGggUGFybWVzYW4gY2hlZXNlLlwiXG4gICk7XG4gIG1lYXRiYWxscy5hcHBlbmRDaGlsZChtZWF0YmFsbHNQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChtZWF0YmFsbHMpO1xuXG4gIC8vIENyZWF0ZSBjYWxhbWFyaSBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgY2FsYW1hcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYWxhbWFyaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBjYWxhbWFyaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNhbGFtYXJpUGljID0gbmV3IEltYWdlKCk7XG4gIGNhbGFtYXJpLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgY2FsYW1hcmlUaXRsZS50ZXh0Q29udGVudCA9IFwiQ3Jpc3B5IENhbGFtYXJpICgkNy45OSlcIjtcbiAgY2FsYW1hcmlUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBjYWxhbWFyaS5hcHBlbmRDaGlsZChjYWxhbWFyaVRpdGxlKTtcbiAgY2FsYW1hcmlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJPdXIgY3Jpc3B5IGZyaWVkIGNhbGFtYXJpIGlzIG1hZGUgd2l0aCBmcmVzaCwgdGVuZGVyIHNxdWlkIHRoYXQncyBiZWVuIGxpZ2h0bHkgZHVzdGVkIHdpdGggZmxvdXIgYW5kIHNwaWNlcyBiZWZvcmUgYmVpbmcgZnJpZWQgdG8gYSBnb2xkZW4gYnJvd24uIFRoZSBjYWxhbWFyaSBpcyBzZXJ2ZWQgd2l0aCBhIHRhbmd5IGxlbW9uIGFpb2xpIG1hZGUgd2l0aCBmcmVzaCBsZW1vbiBqdWljZSwgZ2FybGljLCBhbmQgbWF5byB0aGF0IGNvbXBsaW1lbnRzIHRoZSBjYWxhbWFyaSdzIGRlbGljYXRlIGZsYXZvci4gVGhlIGNhbGFtYXJpIGlzIGNyaXNweSBvbiB0aGUgb3V0c2lkZSBhbmQgdGVuZGVyIG9uIHRoZSBpbnNpZGUuIFRoZSBzcHJpbmtsZSBvZiBsZW1vbiB6ZXN0IG9uIHRvcCBhZGQgYSBuaWNlIGZyZXNobmVzcyBhbmQgYmFsYW5jZSB0byB0aGUgZGlzaC4gSXQncyBhIGNsYXNzaWMgZmF2b3JpdGUgZm9yIHNlYWZvb2QgbG92ZXJzLlwiO1xuICBjYWxhbWFyaURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBjYWxhbWFyaS5hcHBlbmRDaGlsZChjYWxhbWFyaURlc2NyaXB0aW9uKTtcbiAgY2FsYW1hcmlQaWMuc3JjID0gY2FsYW1hcmlQaWNTcmM7XG4gIGNhbGFtYXJpUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIGNhbGFtYXJpUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiU21hbGwgcGxhdGUgb2YgY2FsYW1hcmkgcmluZ3Mgd2l0aCBhIGxlbW9uIHNsaWNlIGFuZCBhIHNtYWxsIGNvbnRhaW5lciBvZiBtYXlvbm5haXNlIG9uIHRoZSBzaWRlLlwiXG4gICk7XG4gIGNhbGFtYXJpLmFwcGVuZENoaWxkKGNhbGFtYXJpUGljKTtcbiAgbWVudUNob2ljZXMuYXBwZW5kQ2hpbGQoY2FsYW1hcmkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW50cmVlc1NldHVwO1xuIiwiaW1wb3J0IGJ1cmdlclBpY1NyYyBmcm9tIFwiLi9pbWdzL21haW4tbWVhbHMvdHJpcGxlLWJ1cmdlci5qcGdcIjtcbmltcG9ydCBzdGVha1BpY1NyYyBmcm9tIFwiLi9pbWdzL21haW4tbWVhbHMvc3RlYWsuanBlZ1wiO1xuaW1wb3J0IGhhbVBpY1NyYyBmcm9tIFwiLi9pbWdzL21haW4tbWVhbHMvaGFtLmpwZ1wiO1xuaW1wb3J0IGNoaWNrZW5QaWNTcmMgZnJvbSBcIi4vaW1ncy9tYWluLW1lYWxzL2NoaWNrZW4uanBnXCI7XG5pbXBvcnQgbG9ic3RlclBpY1NyYyBmcm9tIFwiLi9pbWdzL21haW4tbWVhbHMvbG9ic3Rlci10YWlscy5qcGdcIjtcblxuY29uc3QgbWFpbk1lYWxzU2V0dXAgPSAoKSA9PiB7XG4gIC8vIFNlbGVjdCB0aGUgY29udGVudCBkaXYgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBwYWdlJ3MgY29udGVudHNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIG1lbnUgYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvLyBDcmVhdGUgbWVudSBjaG9pY2VzIGRpdiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IG1lbnVDaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNob2ljZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlc1wiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51Q2hvaWNlcyk7XG5cbiAgLy8gQ3JlYXRlIGJ1cmdlciBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnVyZ2VyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGJ1cmdlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJ1cmdlclBpYyA9IG5ldyBJbWFnZSgpO1xuICBidXJnZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBidXJnZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVHJpcGxlIFBhdHR5IEJ1cmdlciAoJDIwLjk5KVwiO1xuICBidXJnZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBidXJnZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyVGl0bGUpO1xuICBidXJnZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJUaHJlZSBqdWljeSBiZWVmIHBhdHRpZXMgc3RhY2tlZCBoaWdoIG9uIGEgdG9hc3RlZCBidW4sIHRvcHBlZCB3aXRoIGJhY29uLCBwaWNrbGVzLCBjYXJhbWVsaXNlZCBvbmlvbiwgY2hlZWRhciBjaGVlc2UsIGFuZCBvdXIgc3BlY2lhbCBjYXJuaXZvcmUgc2F1Y2UuIFNlcnZlZCB3aXRoIGEgc2lkZSBvZiBjcmlzcHkgZnJpZXMuIFBlcmZlY3QgZm9yIHRoZSBtZWF0IGxvdmVyIHdobyB3YW50cyB0byB0YWtlIHRoZWlyIGJ1cmdlciBnYW1lIHRvIHRoZSBuZXh0IGxldmVsLlwiO1xuICBidXJnZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgYnVyZ2VyLmFwcGVuZENoaWxkKGJ1cmdlckRlc2NyaXB0aW9uKTtcbiAgYnVyZ2VyUGljLnNyYyA9IGJ1cmdlclBpY1NyYztcbiAgYnVyZ2VyUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIGJ1cmdlclBpYy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIlRhbGwgYnVyZ2VyIHdpdGggdGhyZWUgcGF0dGllcywgcGlja2xlIHNsaWNlcywgYmFjb24sIHNwZWNpYWwgc2F1Y2UsIGFuZCBvb3ppbmcgd2l0aCBjaGVkZGFyIGNoZWVzZS5cIlxuICApO1xuICBidXJnZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyUGljKTtcbiAgbWVudUNob2ljZXMuYXBwZW5kQ2hpbGQoYnVyZ2VyKTtcblxuICAvLyBDcmVhdGUgc3RlYWsgc2VjdGlvbiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IHN0ZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3RlYWtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc3RlYWtEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdGVha1BpYyA9IG5ldyBJbWFnZSgpO1xuICBzdGVhay5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIHN0ZWFrVGl0bGUudGV4dENvbnRlbnQgPSBcIjEwIE96LiBSaWJleWUgU3RlYWsgKCQyNy45OSlcIjtcbiAgc3RlYWtUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBzdGVhay5hcHBlbmRDaGlsZChzdGVha1RpdGxlKTtcbiAgc3RlYWtEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJPdXIgMTAgb3ogcmliZXllIHN0ZWFrIGlzIGN1dCBmcm9tIHRoZSBtb3N0IGZsYXZvcmZ1bCBwYXJ0IG9mIHRoZSBiZWVmLiBUaGUgc3RlYWsgaXMgc2Vhc29uZWQgd2l0aCBhIGJsZW5kIG9mIHNwaWNlcywgYW5kIGdyaWxsZWQgdG8geW91ciBkZXNpcmVkIHRlbXBlcmF0dXJlLiBUaGUgbWVhdCBpcyBqdWljeSwgdGVuZGVyLCBhbmQgZnVsbCBvZiBmbGF2b3IuIFNlcnZlZCB3aXRoIGEgc2lkZSBvZiBzYXV0w6llZCB2ZWdldGFibGVzLCBtYXNoZWQgcG90YXRvZXMgb3Igcm9hc3RlZCBwb3RhdG9lcy4gVGhlIHN0ZWFrIGlzIGZpbmlzaGVkIHdpdGggYSBzcHJpbmtsZSBvZiBjb2Fyc2Ugc2VhIHNhbHQgYW5kIGZyZXNoIGNyYWNrZWQgcGVwcGVyIGZvciBhIHBlcmZlY3QgYmFsYW5jZSBvZiBmbGF2b3IuIFBlcmZlY3QgZm9yIGEgc3BlY2lhbCBvY2Nhc2lvbiBvciBhIGNhc3VhbCBkaW5uZXIsIHRoaXMgc3RlYWsgaXMgc3VyZSB0byBzYXRpc2Z5IGFueSBtZWF0IGxvdmVyJ3MgY3JhdmluZy5cIjtcbiAgc3RlYWtEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgc3RlYWsuYXBwZW5kQ2hpbGQoc3RlYWtEZXNjcmlwdGlvbik7XG4gIHN0ZWFrUGljLnNyYyA9IHN0ZWFrUGljU3JjO1xuICBzdGVha1BpYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICBzdGVha1BpYy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIkp1aWN5IGdyaWxsZWQgcmliZXllIHN0ZWFrIG9uIHRvcCBvZiBhIHdvb2RlbiBjdXR0aW5nIGJvYXJkIHdpdGggdmFyaW91cyB2ZWdldGFibGVzIGluIHRoZSBiYWNrZ3JvdW5kLlwiXG4gICk7XG4gIHN0ZWFrLmFwcGVuZENoaWxkKHN0ZWFrUGljKTtcbiAgbWVudUNob2ljZXMuYXBwZW5kQ2hpbGQoc3RlYWspO1xuXG4gIC8vIENyZWF0ZSBoYW0gc2VjdGlvbiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IGhhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhhbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBoYW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBoYW1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgaGFtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgaGFtVGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbmV5IE11c3RhcmQgR2xhemVkIEhhbSAoJDI0Ljk5KVwiO1xuICBoYW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBoYW0uYXBwZW5kQ2hpbGQoaGFtVGl0bGUpO1xuICBoYW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJPdXIgYmFrZWQgaGFtIGlzIHNsb3ctY29va2VkIHRvIHBlcmZlY3Rpb24sIGFuZCBnbGF6ZWQgd2l0aCBhIHN3ZWV0IGFuZCB0YW5neSBob25leSBtdXN0YXJkIHNhdWNlLiBUaGUgaGFtIGlzIG1hZGUgZnJvbSBoaWdoLXF1YWxpdHkgcG9yayBhbmQgaXMganVpY3ksIHRlbmRlciwgYW5kIGZ1bGwgb2YgZmxhdm9yLiBUaGUgaG9uZXkgbXVzdGFyZCBnbGF6ZSBpcyBtYWRlIGZyb20gYSBibGVuZCBvZiBob25leSwgRGlqb24gbXVzdGFyZCwgYnJvd24gc3VnYXIgYW5kIHNwaWNlcywgdGhhdCBjb21wbGVtZW50cyB0aGUgbmF0dXJhbCBzd2VldG5lc3Mgb2YgdGhlIGhhbS4gU2VydmVkIHdpdGggYSBzaWRlIG9mIHJvYXN0ZWQgcG90YXRvZXMgYW5kIHNlYXNvbmFsIHZlZ2V0YWJsZXMuIFRoaXMgdHJhZGl0aW9uYWwgZGlzaCBpcyBwZXJmZWN0IGZvciBhbnkgb2NjYXNpb24sIGZyb20gYSBmYW1pbHkgZGlubmVyIHRvIGEgaG9saWRheSBnYXRoZXJpbmcuXCI7XG4gIGhhbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBoYW0uYXBwZW5kQ2hpbGQoaGFtRGVzY3JpcHRpb24pO1xuICBoYW1QaWMuc3JjID0gaGFtUGljU3JjO1xuICBoYW1QaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgaGFtUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiU2xpY2VkIGJha2VkIGhhbSBpbiBhIGJvd2wgd2l0aCB2ZWdldGFibGVzIGluIHRoZSBiYWNrZ3JvdW5kLlwiXG4gICk7XG4gIGhhbS5hcHBlbmRDaGlsZChoYW1QaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChoYW0pO1xuXG4gIC8vIENyZWF0ZSBjaGlja2VuIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBjaGlja2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2hpY2tlblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBjaGlja2VuRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2hpY2tlblBpYyA9IG5ldyBJbWFnZSgpO1xuICBjaGlja2VuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgY2hpY2tlblRpdGxlLnRleHRDb250ZW50ID0gXCJDcmVhbXkgQ2hpY2tlbiBNYXJzYWxhICgkMjUuOTkpXCI7XG4gIGNoaWNrZW5UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBjaGlja2VuLmFwcGVuZENoaWxkKGNoaWNrZW5UaXRsZSk7XG4gIGNoaWNrZW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJPdXIgY2hpY2tlbiBtYXJzYWxhIGlzIGEgY2xhc3NpYyBJdGFsaWFuIGRpc2ggbWFkZSB3aXRoIHRlbmRlciBjaGlja2VuIGJyZWFzdCB0aGF0IGlzIHNhdXTDqWVkIGFuZCB0aGVuIHNpbW1lcmVkIGluIGEgcmljaCBNYXJzYWxhIHNhdWNlIHdpdGggbXVzaHJvb21zLiBUaGUgY2hpY2tlbiBpcyBjb29rZWQgdW50aWwgdGVuZGVyIGFuZCBqdWljeSwgYW5kIHRoZSBzYXVjZSBpcyB0aGlja2VuZWQgdG8gYSBwZXJmZWN0IGNvbnNpc3RlbmN5LiBUaGUgZWFydGh5IGFuZCByaWNoIGZsYXZvciBvZiBtdXNocm9vbXMgcGVyZmVjdGx5IGJhbGFuY2VzIHRoZSBzd2VldG5lc3Mgb2YgbWFyc2FsYSBzYXVjZS4gU2VydmVkIHdpdGggYSBzaWRlIG9mIHJvYXN0ZWQgcG90YXRvZXMgb3IgbWFzaGVkIHBvdGF0b2VzLCBpdCdzIGEgcGVyZmVjdCBjb21mb3J0IGZvb2QuIFRoZSBkaXNoIGlzIGZpbmlzaGVkIHdpdGggYSBzcHJpbmtsZSBvZiBjaG9wcGVkIHBhcnNsZXkgYW5kIFBhcm1lc2FuIGNodW5rcywgYWRkaW5nIGZyZXNobmVzcyBhbmQgY29sb3IgdG8gdGhlIHBsYXRlLiBQZXJmZWN0IGZvciBhIHNwZWNpYWwgb2NjYXNpb24gb3IgYSBjYXN1YWwgZGlubmVyLCB0aGlzIGRpc2ggaXMgc3VyZSB0byBzYXRpc2Z5IGFueSBjaGlja2VuIGxvdmVyJ3MgY3JhdmluZy5cIjtcbiAgY2hpY2tlbkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBjaGlja2VuLmFwcGVuZENoaWxkKGNoaWNrZW5EZXNjcmlwdGlvbik7XG4gIGNoaWNrZW5QaWMuc3JjID0gY2hpY2tlblBpY1NyYztcbiAgY2hpY2tlblBpYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICBjaGlja2VuUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiQ2xvc2UgdXAgb2YgY2hpY2tlbiBicmVhc3QgdG9wcGVkIHdpdGggc2F1Y2UsIFBhcm1lc2FuIGNoZWVzZSwgYW5kIG11c2hyb29tcyB3aXRoIHZlZ3RhYmxlcyBpbiB0aGUgYmFja2dyb3VuZC5cIlxuICApO1xuICBjaGlja2VuLmFwcGVuZENoaWxkKGNoaWNrZW5QaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChjaGlja2VuKTtcblxuICAvLyBDcmVhdGUgbG9ic3RlciB0YWlscyBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgbG9ic3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvYnN0ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbG9ic3RlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGxvYnN0ZXJQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgbG9ic3Rlci5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIGxvYnN0ZXJUaXRsZS50ZXh0Q29udGVudCA9XG4gICAgXCJUcmlwbGUgTG9ic3RlciBUYWlscyBXaXRoIEJ1dHRlciBBbmQgTGVtb24gKCQzMi45OSlcIjtcbiAgbG9ic3RlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGxvYnN0ZXIuYXBwZW5kQ2hpbGQobG9ic3RlclRpdGxlKTtcbiAgbG9ic3RlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBzdWNjdWxlbnQgbG9ic3RlciB0YWlscyBhcmUgc3RlYW1lZCB0byBwZXJmZWN0aW9uIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgYnV0dGVyIGFuZCBsZW1vbi4gVGhlIG1lYXQgaXMgc3dlZXQsIHRlbmRlciBhbmQgc3VjY3VsZW50LCB3aXRoIGEgZGVsaWNhdGUgZmxhdm9yIHRoYXQgaXMgZW5oYW5jZWQgYnkgdGhlIGJ1dHRlciBhbmQgbGVtb24uIFRoZSBsb2JzdGVyIHRhaWxzIGFyZSBzcGxpdCBpbiBoYWxmIGFuZCBzZXJ2ZWQgd2l0aCB0aGUgbWVhdCBleHBvc2VkLCBtYWtpbmcgaXQgZWFzeSB0byBhY2Nlc3MgYW5kIGVuam95LiBUaGUgbG9ic3RlciB0YWlscyBhcmUgc2VydmVkIHdpdGggYSBzaWRlIG9mIGxlbW9uIHdlZGdlcyBhbmQgYnV0dGVyLCBzbyB5b3UgY2FuIGFkanVzdCB0aGUgZmxhdm9ycyB0byB5b3VyIGxpa2luZy4gUGVyZmVjdCBmb3IgYSBzcGVjaWFsIG9jY2FzaW9uIG9yIGEgcm9tYW50aWMgZGlubmVyLCB0aGlzIGRpc2ggaXMgc3VyZSB0byBpbXByZXNzLlwiO1xuICBsb2JzdGVyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGxvYnN0ZXIuYXBwZW5kQ2hpbGQobG9ic3RlckRlc2NyaXB0aW9uKTtcbiAgbG9ic3RlclBpYy5zcmMgPSBsb2JzdGVyUGljU3JjO1xuICBsb2JzdGVyUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIGxvYnN0ZXJQaWMuc2V0QXR0cmlidXRlKFxuICAgIFwiYWx0XCIsXG4gICAgXCJDbG9zZSB1cCBvZiB0aHJlZSBsb2JzdGVyIHRhaWxzIGxvYWRlZCB3aXRoIGJ1dHRlciBhbmQgbGVtb24gYWxvbmcgd2l0aCBsZW1vbiBoYWx2ZXMgc2NhdHRlcmVkIGFyb3VuZCB0aGUgdGFpbHMuXCJcbiAgKTtcbiAgbG9ic3Rlci5hcHBlbmRDaGlsZChsb2JzdGVyUGljKTtcbiAgbWVudUNob2ljZXMuYXBwZW5kQ2hpbGQobG9ic3Rlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluTWVhbHNTZXR1cDtcbiIsIi8vIENyZWF0ZSBmdW5jdGlvbiB0byBtYWtlIHRoZSBpbml0aWFsIHBhZ2VcbmNvbnN0IHBhZ2VTZXR1cCA9ICgpID0+IHtcbiAgLy8gU2VsZWN0IHRoZSBjb250ZW50IGRpdiB3aGljaCBjb250YWlucyBhbGwgb2YgdGhlIHBhZ2UncyBjb250ZW50c1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vIENyZWF0ZSB0aGUgaGVhZGVyIGFuZCBhZGQgaXQgdG8gdGhlIHBhZ2VcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNZWF0IEVhdGVyJ3MgRGluZXJcIjtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyBDcmVhdGUgbWVudSBzZWN0aW9uIHNlbGVjdGlvbiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IHNlY3Rpb25TZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWN0aW9uU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLXNlbGVjdGlvblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uU2VsZWN0aW9uKTtcblxuICAvLyBDcmVhdGUgbWVudSBzZWxlY3Rpb24gYnV0dG9ucyBhbmQgYWRkIHRoZW0gdG8gdGhlIHNlY3Rpb24gc2VsZWN0aW9uXG4gIGNvbnN0IGVudHJlZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBtYWluTWVhbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZXNlcnRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cmVlc0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVudHJlZXMtYnV0dG9uXCIpO1xuICBtYWluTWVhbHNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLW1lYWxzLWJ1dHRvblwiKTtcbiAgZGVzZXJ0c0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2VydHMtYnV0dG9uXCIpO1xuICBlbnRyZWVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJFbnRyw6llc1wiO1xuICBtYWluTWVhbHNCdXR0b24udGV4dENvbnRlbnQgPSBcIk1haW4gTWVhbHNcIjtcbiAgZGVzZXJ0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVzZXJ0c1wiO1xuICBjb25zdCBtZW51QnV0dG9ucyA9IFtlbnRyZWVzQnV0dG9uLCBtYWluTWVhbHNCdXR0b24sIGRlc2VydHNCdXR0b25dO1xuICBtZW51QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VjdG9uLWJ1dHRvbjphY3RpdmVcIik7XG4gICAgc2VjdGlvblNlbGVjdGlvbi5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VTZXR1cDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBwYWdlU2V0dXAgZnJvbSBcIi4vcGFnZS1zZXR1cFwiO1xuaW1wb3J0IGVudHJlZXNTZXR1cCBmcm9tIFwiLi9lbnRyZWVzXCI7XG5pbXBvcnQgbWFpbk1lYWxzU2V0dXAgZnJvbSBcIi4vbWFpbi1tZWFsc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbnBhZ2VTZXR1cCgpO1xuZW50cmVlc1NldHVwKCk7XG5cbmxldCBlbnRyZWVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRyZWVzLWJ1dHRvblwiKTtcbmxldCBtYWluTWVhbHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVhbHMtYnV0dG9uXCIpO1xubGV0IGRlc2VydHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2VydHMtYnV0dG9uXCIpO1xuXG5jb25zdCByZXNldFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHBhZ2VTZXR1cCgpO1xuICBlbnRyZWVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRyZWVzLWJ1dHRvblwiKTtcbiAgbWFpbk1lYWxzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW1lYWxzLWJ1dHRvblwiKTtcbiAgZGVzZXJ0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzZXJ0cy1idXR0b25cIik7XG4gIGVudHJlZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFBhZ2UoKTtcbiAgICBlbnRyZWVzU2V0dXAoKTtcbiAgfSk7XG4gIG1haW5NZWFsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0UGFnZSgpO1xuICAgIG1haW5NZWFsc1NldHVwKCk7XG4gIH0pO1xufTtcblxuZW50cmVlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldFBhZ2UoKTtcbiAgZW50cmVlc1NldHVwKCk7XG59KTtcbm1haW5NZWFsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldFBhZ2UoKTtcbiAgbWFpbk1lYWxzU2V0dXAoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9