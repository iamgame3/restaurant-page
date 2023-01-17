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
  burgerPic.src = _imgs_main_meals_triple_burger_jpg__WEBPACK_IMPORTED_MODULE_0__;
  burgerPic.classList.add("food-picture");
  burgerPic.setAttribute(
    "alt",
    "Tall burger with three patties, pickle slices, bacon, special sauce, and oozing with cheddar cheese."
  );
  burger.appendChild(burgerPic);
  menuChoices.appendChild(burger);
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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRTtBQUNUO0FBQ0Y7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2REFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZtQzs7QUFFL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtEQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2QzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQztBQUNBO0FBQ0s7O0FBRTFDO0FBQ0E7QUFDQSx1REFBUztBQUNULG9EQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VudHJlZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tbWVhbHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Utc2V0dXAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hpY2tlblNrZXdlclBpY1NyYyBmcm9tIFwiLi9pbWdzL2VudHJlZXMvY2hpY2tlbi1za2V3ZXIuanBnXCI7XG5pbXBvcnQgbWVhdGJhbGxzUGljU3JjIGZyb20gXCIuL2ltZ3MvZW50cmVlcy9tZWF0YmFsbHMuanBnXCI7XG5pbXBvcnQgY2FsYW1hcmlQaWNTcmMgZnJvbSBcIi4vaW1ncy9lbnRyZWVzL2NhbGFtYXJpLnBuZ1wiO1xuXG5jb25zdCBlbnRyZWVzU2V0dXAgPSAoKSA9PiB7XG4gIC8vIFNlbGVjdCB0aGUgY29udGVudCBkaXYgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBwYWdlJ3MgY29udGVudHNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIG1lbnUgYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvLyBDcmVhdGUgbWVudSBjaG9pY2VzIGRpdiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IG1lbnVDaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNob2ljZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlc1wiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51Q2hvaWNlcyk7XG5cbiAgLy8gQ3JlYXRlIGNoaWNrZW4gc2tld2VyIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBjaGlja2VuU2tld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2hpY2tlblNrZXdlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBjaGlja2VuU2tld2VyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2hpY2tlblNrZXdlclBpYyA9IG5ldyBJbWFnZSgpO1xuICBjaGlja2VuU2tld2VyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZVwiKTtcbiAgY2hpY2tlblNrZXdlclRpdGxlLnRleHRDb250ZW50ID0gXCIyIEJha2VkIENoaWNrZW4gU2tld2VycyAoJDkuOTkpXCI7XG4gIGNoaWNrZW5Ta2V3ZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBjaGlja2VuU2tld2VyLmFwcGVuZENoaWxkKGNoaWNrZW5Ta2V3ZXJUaXRsZSk7XG4gIGNoaWNrZW5Ta2V3ZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJJbmR1bGdlIGluIG91ciBtb3V0aC13YXRlcmluZyBjaGlja2VuIHNrZXdlcnMsIG1hcmluYXRlZCBpbiBhIGJsZW5kIG9mIHNwaWNlcyBhbmQgaGVyYnMgZm9yIG1heGltdW0gZmxhdm9yLiBCYWtlZCB0byBhIGdvbGRlbiBicm93biBhbmQgc2VydmVkIGhvdCBvdXQgdGhlIG92ZW4uIFRoZXNlIHNrZXdlcnMgYXJlIGp1aWN5IGFuZCB0ZW5kZXIsIHBlcmZlY3QgZm9yIGFueSBtZWF0IGxvdmVyLiBQZXJmZWN0IGFzIGFuIGFwcGV0aXplciwgdGhlc2Ugc2tld2VycyB3aWxsIGxlYXZlIHlvdSB3YW50aW5nIG1vcmUuXCI7XG4gIGNoaWNrZW5Ta2V3ZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgY2hpY2tlblNrZXdlci5hcHBlbmRDaGlsZChjaGlja2VuU2tld2VyRGVzY3JpcHRpb24pO1xuICBjaGlja2VuU2tld2VyUGljLnNyYyA9IGNoaWNrZW5Ta2V3ZXJQaWNTcmM7XG4gIGNoaWNrZW5Ta2V3ZXJQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgY2hpY2tlblNrZXdlclBpYy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIkZpdmUgY2hpY2tlbiBza2V3ZXJzIGxhaWQgb3V0IGFjcm9zcyBhIGJha2luZyBzaGVldC5cIlxuICApO1xuICBjaGlja2VuU2tld2VyLmFwcGVuZENoaWxkKGNoaWNrZW5Ta2V3ZXJQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChjaGlja2VuU2tld2VyKTtcbiAgLy8gQ3JlYXRlIG1lYXRiYWxscyBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgbWVhdGJhbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVhdGJhbGxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG1lYXRiYWxsc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1lYXRiYWxsc1BpYyA9IG5ldyBJbWFnZSgpO1xuICBtZWF0YmFsbHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBtZWF0YmFsbHNUaXRsZS50ZXh0Q29udGVudCA9IFwiNSBQYy4gSnVtYm8gTWVhdGJhbGxzICgkMTIuOTkpXCI7XG4gIG1lYXRiYWxsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIG1lYXRiYWxscy5hcHBlbmRDaGlsZChtZWF0YmFsbHNUaXRsZSk7XG4gIG1lYXRiYWxsc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBob21lbWFkZSBtZWF0YmFsbHMgYXJlIG1hZGUgd2l0aCBhIGJsZW5kIG9mIGdyb3VuZCBiZWVmIGFuZCBwb3JrLCBzZWFzb25lZCB0byBwZXJmZWN0aW9uIGFuZCBjb29rZWQgdG8gdGVuZGVyLCBqdWljeSBwZXJmZWN0aW9uLiBUaGV5IGFyZSBzaW1tZXJlZCBpbiBhIHJpY2gsIGZsYXZvcmZ1bCBtYXJpbmFyYSBzYXVjZSBtYWRlIHdpdGggY3J1c2hlZCB0b21hdG9lcywgb25pb25zLCBnYXJsaWMsIGFuZCBJdGFsaWFuIGhlcmJzLiBUaGVzZSBtZWF0YmFsbHMgYXJlIHRoZSBwZXJmZWN0IGNvbWZvcnQgZm9vZC4gQSBzcHJpbmtsZSBvZiBncmF0ZWQgUGFybWVzYW4gY2hlZXNlIGFkZHMgYW4gZXh0cmEgbGF5ZXIgb2YgZmxhdm9yLiBQZXJmZWN0IGFzIGEgcGFydHkgYXBwZXRpemVyLCB0aGVzZSBtZWF0YmFsbHMgYXJlIHN1cmUgdG8gcGxlYXNlLiBUaGV5IGFyZSBnbHV0ZW4tZnJlZSwgcGVyZmVjdCBmb3IgdGhvc2Ugd2hvIGxvb2tpbmcgZm9yIGdsdXRlbi1mcmVlIG9wdGlvbnMuXCI7XG4gIG1lYXRiYWxsc0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBtZWF0YmFsbHMuYXBwZW5kQ2hpbGQobWVhdGJhbGxzRGVzY3JpcHRpb24pO1xuICBtZWF0YmFsbHNQaWMuc3JjID0gbWVhdGJhbGxzUGljU3JjO1xuICBtZWF0YmFsbHNQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgbWVhdGJhbGxzUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiUGxhdGUgb2YgbGFyZ2UgbWVhdGJhbGxzIHRvd2VyZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIgY292ZXJlZCBpbiBtYXJpbmFyYSBzYXVjZSBhbmQgc3ByaW5rbGVkIHdpdGggUGFybWVzYW4gY2hlZXNlLlwiXG4gICk7XG4gIG1lYXRiYWxscy5hcHBlbmRDaGlsZChtZWF0YmFsbHNQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChtZWF0YmFsbHMpO1xuICAvLyBDcmVhdGUgY2FsYW1hcmkgc2VjdGlvbiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IGNhbGFtYXJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FsYW1hcmlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgY2FsYW1hcmlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjYWxhbWFyaVBpYyA9IG5ldyBJbWFnZSgpO1xuICBjYWxhbWFyaS5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIGNhbGFtYXJpVGl0bGUudGV4dENvbnRlbnQgPSBcIkNyaXNweSBDYWxhbWFyaSAoJDcuOTkpXCI7XG4gIGNhbGFtYXJpVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgY2FsYW1hcmkuYXBwZW5kQ2hpbGQoY2FsYW1hcmlUaXRsZSk7XG4gIGNhbGFtYXJpRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIGNyaXNweSBmcmllZCBjYWxhbWFyaSBpcyBtYWRlIHdpdGggZnJlc2gsIHRlbmRlciBzcXVpZCB0aGF0J3MgYmVlbiBsaWdodGx5IGR1c3RlZCB3aXRoIGZsb3VyIGFuZCBzcGljZXMgYmVmb3JlIGJlaW5nIGZyaWVkIHRvIGEgZ29sZGVuIGJyb3duLiBUaGUgY2FsYW1hcmkgaXMgc2VydmVkIHdpdGggYSB0YW5neSBsZW1vbiBhaW9saSBtYWRlIHdpdGggZnJlc2ggbGVtb24ganVpY2UsIGdhcmxpYywgYW5kIG1heW8gdGhhdCBjb21wbGltZW50cyB0aGUgY2FsYW1hcmkncyBkZWxpY2F0ZSBmbGF2b3IuIFRoZSBjYWxhbWFyaSBpcyBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHRlbmRlciBvbiB0aGUgaW5zaWRlLiBUaGUgc3ByaW5rbGUgb2YgbGVtb24gemVzdCBvbiB0b3AgYWRkIGEgbmljZSBmcmVzaG5lc3MgYW5kIGJhbGFuY2UgdG8gdGhlIGRpc2guIEl0J3MgYSBjbGFzc2ljIGZhdm9yaXRlIGZvciBzZWFmb29kIGxvdmVycy5cIjtcbiAgY2FsYW1hcmlEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgY2FsYW1hcmkuYXBwZW5kQ2hpbGQoY2FsYW1hcmlEZXNjcmlwdGlvbik7XG4gIGNhbGFtYXJpUGljLnNyYyA9IGNhbGFtYXJpUGljU3JjO1xuICBjYWxhbWFyaVBpYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICBjYWxhbWFyaVBpYy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIlNtYWxsIHBsYXRlIG9mIGNhbGFtYXJpIHJpbmdzIHdpdGggYSBsZW1vbiBzbGljZSBhbmQgYSBzbWFsbCBjb250YWluZXIgb2YgbWF5b25uYWlzZSBvbiB0aGUgc2lkZS5cIlxuICApO1xuICBjYWxhbWFyaS5hcHBlbmRDaGlsZChjYWxhbWFyaVBpYyk7XG4gIG1lbnVDaG9pY2VzLmFwcGVuZENoaWxkKGNhbGFtYXJpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVudHJlZXNTZXR1cDtcbiIsImltcG9ydCBidXJnZXJQaWNTcmMgZnJvbSBcIi4vaW1ncy9tYWluLW1lYWxzL3RyaXBsZS1idXJnZXIuanBnXCI7XG5cbmNvbnN0IG1haW5NZWFsc1NldHVwID0gKCkgPT4ge1xuICAvLyBTZWxlY3QgdGhlIGNvbnRlbnQgZGl2IHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgcGFnZSdzIGNvbnRlbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtZW51IGFuZCBhZGQgaXQgdG8gdGhlIHBhZ2VcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgLy8gQ3JlYXRlIG1lbnUgY2hvaWNlcyBkaXYgYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBtZW51Q2hvaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDaG9pY2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZXNcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNob2ljZXMpO1xuXG4gIC8vIENyZWF0ZSBjaGlja2VuIHNrZXdlciBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnVyZ2VyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGJ1cmdlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJ1cmdlclBpYyA9IG5ldyBJbWFnZSgpO1xuICBidXJnZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBidXJnZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVHJpcGxlIEJlZWYgQnVyZ2VyICgkMTcuOTkpXCI7XG4gIGJ1cmdlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGJ1cmdlci5hcHBlbmRDaGlsZChidXJnZXJUaXRsZSk7XG4gIGJ1cmdlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIlRocmVlIGp1aWN5IGJlZWYgcGF0dGllcyBzdGFja2VkIGhpZ2ggb24gYSB0b2FzdGVkIGJ1biwgdG9wcGVkIHdpdGggYmFjb24sIHBpY2tsZXMsIGNhcmFtZWxpc2VkIG9uaW9uLCBjaGVlZGFyIGNoZWVzZSwgYW5kIG91ciBzcGVjaWFsIGNhcm5pdm9yZSBzYXVjZS4gU2VydmVkIHdpdGggYSBzaWRlIG9mIGNyaXNweSBmcmllcy4gUGVyZmVjdCBmb3IgdGhlIG1lYXQgbG92ZXIgd2hvIHdhbnRzIHRvIHRha2UgdGhlaXIgYnVyZ2VyIGdhbWUgdG8gdGhlIG5leHQgbGV2ZWwuXCI7XG4gIGJ1cmdlckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xuICBidXJnZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyRGVzY3JpcHRpb24pO1xuICBidXJnZXJQaWMuc3JjID0gYnVyZ2VyUGljU3JjO1xuICBidXJnZXJQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgYnVyZ2VyUGljLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiVGFsbCBidXJnZXIgd2l0aCB0aHJlZSBwYXR0aWVzLCBwaWNrbGUgc2xpY2VzLCBiYWNvbiwgc3BlY2lhbCBzYXVjZSwgYW5kIG9vemluZyB3aXRoIGNoZWRkYXIgY2hlZXNlLlwiXG4gICk7XG4gIGJ1cmdlci5hcHBlbmRDaGlsZChidXJnZXJQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChidXJnZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbk1lYWxzU2V0dXA7XG4iLCIvLyBDcmVhdGUgZnVuY3Rpb24gdG8gbWFrZSB0aGUgaW5pdGlhbCBwYWdlXG5jb25zdCBwYWdlU2V0dXAgPSAoKSA9PiB7XG4gIC8vIFNlbGVjdCB0aGUgY29udGVudCBkaXYgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBwYWdlJ3MgY29udGVudHNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIGhlYWRlciBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVhdCBFYXRlcidzIERpbmVyXCI7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gQ3JlYXRlIG1lbnUgc2VjdGlvbiBzZWxlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBzZWN0aW9uU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VjdGlvblNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1zZWxlY3Rpb25cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvblNlbGVjdGlvbik7XG5cbiAgLy8gQ3JlYXRlIG1lbnUgc2VsZWN0aW9uIGJ1dHRvbnMgYW5kIGFkZCB0aGVtIHRvIHRoZSBzZWN0aW9uIHNlbGVjdGlvblxuICBjb25zdCBlbnRyZWVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWFpbk1lYWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZGVzZXJ0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVudHJlZXNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbnRyZWVzLWJ1dHRvblwiKTtcbiAgbWFpbk1lYWxzQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1tZWFscy1idXR0b25cIik7XG4gIGRlc2VydHNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNlcnRzLWJ1dHRvblwiKTtcbiAgZW50cmVlc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRW50csOpZXNcIjtcbiAgbWFpbk1lYWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJNYWluIE1lYWxzXCI7XG4gIGRlc2VydHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlc2VydHNcIjtcbiAgY29uc3QgbWVudUJ1dHRvbnMgPSBbZW50cmVlc0J1dHRvbiwgbWFpbk1lYWxzQnV0dG9uLCBkZXNlcnRzQnV0dG9uXTtcbiAgbWVudUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlY3Rvbi1idXR0b246YWN0aXZlXCIpO1xuICAgIHNlY3Rpb25TZWxlY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlU2V0dXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcGFnZVNldHVwIGZyb20gXCIuL3BhZ2Utc2V0dXBcIjtcbmltcG9ydCBlbnRyZWVzU2V0dXAgZnJvbSBcIi4vZW50cmVlc1wiO1xuaW1wb3J0IG1haW5NZWFsc1NldHVwIGZyb20gXCIuL21haW4tbWVhbHNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5wYWdlU2V0dXAoKTtcbmVudHJlZXNTZXR1cCgpO1xuXG5sZXQgZW50cmVlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50cmVlcy1idXR0b25cIik7XG5sZXQgbWFpbk1lYWxzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW1lYWxzLWJ1dHRvblwiKTtcbmxldCBkZXNlcnRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNlcnRzLWJ1dHRvblwiKTtcblxuY29uc3QgcmVzZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgcGFnZVNldHVwKCk7XG4gICAgZW50cmVlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50cmVlcy1idXR0b25cIik7XG4gICAgbWFpbk1lYWxzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW1lYWxzLWJ1dHRvblwiKTtcbiAgICBkZXNlcnRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNlcnRzLWJ1dHRvblwiKTtcbn1cblxuZW50cmVlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0UGFnZSgpO1xuICAgIGVudHJlZXNTZXR1cCgpO1xufSk7XG5tYWluTWVhbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFBhZ2UoKTtcbiAgICBtYWluTWVhbHNTZXR1cCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=