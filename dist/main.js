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
/* harmony import */ var _page_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-setup */ "./src/page-setup.js");
/* harmony import */ var _imgs_entrees_chicken_skewer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/entrees/chicken-skewer.jpg */ "./src/imgs/entrees/chicken-skewer.jpg");
/* harmony import */ var _imgs_entrees_meatballs_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/entrees/meatballs.jpg */ "./src/imgs/entrees/meatballs.jpg");
/* harmony import */ var _imgs_entrees_calamari_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/entrees/calamari.png */ "./src/imgs/entrees/calamari.png");





// Get initial page set up
_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"];

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
  chickenSkewerPic.src = _imgs_entrees_chicken_skewer_jpg__WEBPACK_IMPORTED_MODULE_1__;
  chickenSkewerPic.classList.add("food-picture");
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
  meatballsPic.src = _imgs_entrees_meatballs_jpg__WEBPACK_IMPORTED_MODULE_2__;
  meatballsPic.classList.add("food-picture");
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
  calamariPic.src = _imgs_entrees_calamari_png__WEBPACK_IMPORTED_MODULE_3__;
  calamariPic.classList.add("food-picture");
  calamari.appendChild(calamariPic);
  menuChoices.appendChild(calamari);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entreesSetup());


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageSetup());


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
/* harmony import */ var _entrees_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrees.js */ "./src/entrees.js");


_entrees_js__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDK0I7QUFDVDtBQUNGOztBQUV6RDtBQUNBLG1EQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2REFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9CM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2Z3Qzs7QUFFeEMsbURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZW50cmVlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1zZXR1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWdlU2V0dXAgZnJvbSBcIi4vcGFnZS1zZXR1cFwiO1xuaW1wb3J0IGNoaWNrZW5Ta2V3ZXJQaWNTcmMgZnJvbSBcIi4vaW1ncy9lbnRyZWVzL2NoaWNrZW4tc2tld2VyLmpwZ1wiO1xuaW1wb3J0IG1lYXRiYWxsc1BpY1NyYyBmcm9tIFwiLi9pbWdzL2VudHJlZXMvbWVhdGJhbGxzLmpwZ1wiO1xuaW1wb3J0IGNhbGFtYXJpUGljU3JjIGZyb20gXCIuL2ltZ3MvZW50cmVlcy9jYWxhbWFyaS5wbmdcIjtcblxuLy8gR2V0IGluaXRpYWwgcGFnZSBzZXQgdXBcbnBhZ2VTZXR1cDtcblxuY29uc3QgZW50cmVlc1NldHVwID0gKCkgPT4ge1xuICAvLyBTZWxlY3QgdGhlIGNvbnRlbnQgZGl2IHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgcGFnZSdzIGNvbnRlbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtZW51IGFuZCBhZGQgaXQgdG8gdGhlIHBhZ2VcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgLy8gQ3JlYXRlIG1lbnUgY2hvaWNlcyBkaXYgYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBtZW51Q2hvaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDaG9pY2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNob2ljZXNcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNob2ljZXMpO1xuXG4gIC8vIENyZWF0ZSBjaGlja2VuIHNrZXdlciBzZWN0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIG1lbnVcbiAgY29uc3QgY2hpY2tlblNrZXdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoaWNrZW5Ta2V3ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgY2hpY2tlblNrZXdlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNoaWNrZW5Ta2V3ZXJQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgY2hpY2tlblNrZXdlci5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIGNoaWNrZW5Ta2V3ZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiMiBCYWtlZCBDaGlja2VuIFNrZXdlcnMgKCQ5Ljk5KVwiO1xuICBjaGlja2VuU2tld2VyVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgY2hpY2tlblNrZXdlci5hcHBlbmRDaGlsZChjaGlja2VuU2tld2VyVGl0bGUpO1xuICBjaGlja2VuU2tld2VyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiSW5kdWxnZSBpbiBvdXIgbW91dGgtd2F0ZXJpbmcgY2hpY2tlbiBza2V3ZXJzLCBtYXJpbmF0ZWQgaW4gYSBibGVuZCBvZiBzcGljZXMgYW5kIGhlcmJzIGZvciBtYXhpbXVtIGZsYXZvci4gQmFrZWQgdG8gYSBnb2xkZW4gYnJvd24gYW5kIHNlcnZlZCBob3Qgb3V0IHRoZSBvdmVuLiBUaGVzZSBza2V3ZXJzIGFyZSBqdWljeSBhbmQgdGVuZGVyLCBwZXJmZWN0IGZvciBhbnkgbWVhdCBsb3Zlci4gUGVyZmVjdCBhcyBhbiBhcHBldGl6ZXIsIHRoZXNlIHNrZXdlcnMgd2lsbCBsZWF2ZSB5b3Ugd2FudGluZyBtb3JlLlwiO1xuICBjaGlja2VuU2tld2VyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGNoaWNrZW5Ta2V3ZXIuYXBwZW5kQ2hpbGQoY2hpY2tlblNrZXdlckRlc2NyaXB0aW9uKTtcbiAgY2hpY2tlblNrZXdlclBpYy5zcmMgPSBjaGlja2VuU2tld2VyUGljU3JjO1xuICBjaGlja2VuU2tld2VyUGljLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG4gIGNoaWNrZW5Ta2V3ZXIuYXBwZW5kQ2hpbGQoY2hpY2tlblNrZXdlclBpYyk7XG4gIG1lbnVDaG9pY2VzLmFwcGVuZENoaWxkKGNoaWNrZW5Ta2V3ZXIpO1xuICAvLyBDcmVhdGUgbWVhdGJhbGxzIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBtZWF0YmFsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZWF0YmFsbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbWVhdGJhbGxzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbWVhdGJhbGxzUGljID0gbmV3IEltYWdlKCk7XG4gIG1lYXRiYWxscy5jbGFzc0xpc3QuYWRkKFwibWVudS1jaG9pY2VcIik7XG4gIG1lYXRiYWxsc1RpdGxlLnRleHRDb250ZW50ID0gXCI1IFBjLiBKdW1ibyBNZWF0YmFsbHMgKCQxMi45OSlcIjtcbiAgbWVhdGJhbGxzVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgbWVhdGJhbGxzLmFwcGVuZENoaWxkKG1lYXRiYWxsc1RpdGxlKTtcbiAgbWVhdGJhbGxzRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIGhvbWVtYWRlIG1lYXRiYWxscyBhcmUgbWFkZSB3aXRoIGEgYmxlbmQgb2YgZ3JvdW5kIGJlZWYgYW5kIHBvcmssIHNlYXNvbmVkIHRvIHBlcmZlY3Rpb24gYW5kIGNvb2tlZCB0byB0ZW5kZXIsIGp1aWN5IHBlcmZlY3Rpb24uIFRoZXkgYXJlIHNpbW1lcmVkIGluIGEgcmljaCwgZmxhdm9yZnVsIG1hcmluYXJhIHNhdWNlIG1hZGUgd2l0aCBjcnVzaGVkIHRvbWF0b2VzLCBvbmlvbnMsIGdhcmxpYywgYW5kIEl0YWxpYW4gaGVyYnMuIFRoZXNlIG1lYXRiYWxscyBhcmUgdGhlIHBlcmZlY3QgY29tZm9ydCBmb29kLiBBIHNwcmlua2xlIG9mIGdyYXRlZCBQYXJtZXNhbiBjaGVlc2UgYWRkcyBhbiBleHRyYSBsYXllciBvZiBmbGF2b3IuIFBlcmZlY3QgYXMgYSBwYXJ0eSBhcHBldGl6ZXIsIHRoZXNlIG1lYXRiYWxscyBhcmUgc3VyZSB0byBwbGVhc2UuIFRoZXkgYXJlIGdsdXRlbi1mcmVlLCBwZXJmZWN0IGZvciB0aG9zZSB3aG8gbG9va2luZyBmb3IgZ2x1dGVuLWZyZWUgb3B0aW9ucy5cIjtcbiAgbWVhdGJhbGxzRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIG1lYXRiYWxscy5hcHBlbmRDaGlsZChtZWF0YmFsbHNEZXNjcmlwdGlvbik7XG4gIG1lYXRiYWxsc1BpYy5zcmMgPSBtZWF0YmFsbHNQaWNTcmM7XG4gIG1lYXRiYWxsc1BpYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICBtZWF0YmFsbHMuYXBwZW5kQ2hpbGQobWVhdGJhbGxzUGljKTtcbiAgbWVudUNob2ljZXMuYXBwZW5kQ2hpbGQobWVhdGJhbGxzKTtcbiAgLy8gQ3JlYXRlIGNhbGFtYXJpIHNlY3Rpb24gYW5kIGFkZCBpdCB0byB0aGUgbWVudVxuICBjb25zdCBjYWxhbWFyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhbGFtYXJpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGNhbGFtYXJpRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2FsYW1hcmlQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgY2FsYW1hcmkuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2hvaWNlXCIpO1xuICBjYWxhbWFyaVRpdGxlLnRleHRDb250ZW50ID0gXCJDcmlzcHkgQ2FsYW1hcmkgKCQ3Ljk5KVwiO1xuICBjYWxhbWFyaVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGNhbGFtYXJpLmFwcGVuZENoaWxkKGNhbGFtYXJpVGl0bGUpO1xuICBjYWxhbWFyaURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBjcmlzcHkgZnJpZWQgY2FsYW1hcmkgaXMgbWFkZSB3aXRoIGZyZXNoLCB0ZW5kZXIgc3F1aWQgdGhhdCdzIGJlZW4gbGlnaHRseSBkdXN0ZWQgd2l0aCBmbG91ciBhbmQgc3BpY2VzIGJlZm9yZSBiZWluZyBmcmllZCB0byBhIGdvbGRlbiBicm93bi4gVGhlIGNhbGFtYXJpIGlzIHNlcnZlZCB3aXRoIGEgdGFuZ3kgbGVtb24gYWlvbGkgbWFkZSB3aXRoIGZyZXNoIGxlbW9uIGp1aWNlLCBnYXJsaWMsIGFuZCBtYXlvIHRoYXQgY29tcGxpbWVudHMgdGhlIGNhbGFtYXJpJ3MgZGVsaWNhdGUgZmxhdm9yLiBUaGUgY2FsYW1hcmkgaXMgY3Jpc3B5IG9uIHRoZSBvdXRzaWRlIGFuZCB0ZW5kZXIgb24gdGhlIGluc2lkZS4gVGhlIHNwcmlua2xlIG9mIGxlbW9uIHplc3Qgb24gdG9wIGFkZCBhIG5pY2UgZnJlc2huZXNzIGFuZCBiYWxhbmNlIHRvIHRoZSBkaXNoLiBJdCdzIGEgY2xhc3NpYyBmYXZvcml0ZSBmb3Igc2VhZm9vZCBsb3ZlcnMuXCI7XG4gIGNhbGFtYXJpRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGNhbGFtYXJpLmFwcGVuZENoaWxkKGNhbGFtYXJpRGVzY3JpcHRpb24pO1xuICBjYWxhbWFyaVBpYy5zcmMgPSBjYWxhbWFyaVBpY1NyYztcbiAgY2FsYW1hcmlQaWMuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgY2FsYW1hcmkuYXBwZW5kQ2hpbGQoY2FsYW1hcmlQaWMpO1xuICBtZW51Q2hvaWNlcy5hcHBlbmRDaGlsZChjYWxhbWFyaSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbnRyZWVzU2V0dXAoKTtcbiIsIi8vIENyZWF0ZSBmdW5jdGlvbiB0byBtYWtlIHRoZSBpbml0aWFsIHBhZ2VcbmNvbnN0IHBhZ2VTZXR1cCA9ICgpID0+IHtcbiAgLy8gU2VsZWN0IHRoZSBjb250ZW50IGRpdiB3aGljaCBjb250YWlucyBhbGwgb2YgdGhlIHBhZ2UncyBjb250ZW50c1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vIENyZWF0ZSB0aGUgaGVhZGVyIGFuZCBhZGQgaXQgdG8gdGhlIHBhZ2VcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNZWF0IEVhdGVyJ3MgRGluZXJcIjtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyBDcmVhdGUgbWVudSBzZWN0aW9uIHNlbGVjdGlvbiBhbmQgYWRkIGl0IHRvIHRoZSBtZW51XG4gIGNvbnN0IHNlY3Rpb25TZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWN0aW9uU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLXNlbGVjdGlvblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uU2VsZWN0aW9uKTtcblxuICAvLyBDcmVhdGUgbWVudSBzZWxlY3Rpb24gYnV0dG9ucyBhbmQgYWRkIHRoZW0gdG8gdGhlIHNlY3Rpb24gc2VsZWN0aW9uXG4gIGNvbnN0IGVudHJlZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBtYWluTWVhbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZXNlcnRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cmVlc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRW50csOpZXNcIjtcbiAgbWFpbk1lYWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJNYWluIE1lYWxzXCI7XG4gIGRlc2VydHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlc2VydHNcIjtcbiAgY29uc3QgbWVudUJ1dHRvbnMgPSBbZW50cmVlc0J1dHRvbiwgbWFpbk1lYWxzQnV0dG9uLCBkZXNlcnRzQnV0dG9uXTtcbiAgbWVudUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlY3Rvbi1idXR0b246YWN0aXZlXCIpO1xuICAgIHNlY3Rpb25TZWxlY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlU2V0dXAoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBlbnRyZWVzU2V0dXAgZnJvbSBcIi4vZW50cmVlcy5qc1wiO1xuXG5lbnRyZWVzU2V0dXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=