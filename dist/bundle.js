/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 523:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 430:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/Subtract.f3c79327c83eefafffe8.svg";

/***/ }),

/***/ 609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/apple-touch-icon.png";

/***/ }),

/***/ 448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/favicon-16x16.png";

/***/ }),

/***/ 648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/favicon-32x32.png";

/***/ }),

/***/ 997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/site.webmanifest";

/***/ }),

/***/ 208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/home.01f181f2268ca34ab608.svg";

/***/ }),

/***/ 496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/location.04a7eb91ffe0944e4da8.svg";

/***/ }),

/***/ 814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/person.458a2b65b3aaff0fdffe.svg";

/***/ }),

/***/ 481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sofya-min.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(523);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(609), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(648), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(448), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(997), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(208), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(496), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(814), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(430), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(481), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = getUrl_default()(___HTML_LOADER_IMPORT_8___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"/> <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"/> <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"/> <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"/> <meta name=\"msapplication-TileColor\" content=\"#da532c\"/> <meta name=\"theme-color\" content=\"#ffffff\"/> <title>Sofya Pivovarova</title> </head> <body> <main class=\"container\"> <section class=\"section__about-blocks\"> <h1>Sofya Pivovarova</h1> <div class=\"info-blocks\"> <div class=\"info-block\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"location\"/> <p class=\"info-block__text-translucent\">Сurrent location</p> <p class=\"info-block__text-no-translucent\"> Moscow, Russia. Ready to relocate </p> </div> <div class=\"info-block\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"work-place\"/> <p class=\"info-block__text-translucent\">Сurrent place of work</p> <a class=\"info-block__text-no-translucent\">https://www.niisokb.ru</a> </div> <div class=\"info-block\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"person-info\"/> <p class=\"info-block__text-translucent\">Age</p> <p class=\"info-block__text-no-translucent\">26</p> </div> <div class=\"info-block\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"occupation\"/> <p class=\"info-block__text-translucent\">Occupation</p> <p class=\"info-block__text-no-translucent\">Frontend-developer</p> </div> </div> <div class=\"about__info\"> <h2>Tech</h2> <div> <p>JavaScript</p> <div class=\"progressbar\"> <span style=\"width:60%\"></span> </div> </div> <div> <p>Vue 3</p> <div class=\"progressbar\"> <span style=\"width:50%\"></span> </div> </div> <div> <p>Other resources</p> <div class=\"progressbar\"> <span style=\"width:65%\"></span> </div> </div> </div> </section> <section class=\"section__biography\"> <div class=\"about__info\"> <h2>Biography</h2> <p> Hello! I'm a frontend developer with 5 months of experience. My tech stack includes Vue.js, JavaScript, Pug, and SCSS. Currently, I'm the sole frontend developer on the project, responsible for preparing it for the upcoming release. I actively work on creating interfaces using Vue.js, ensuring high performance and responsiveness. I always adhere to modern standards and best practices. I continuously develop my skills and stay up-to-date with the latest trends in frontend development. </p> </div> <div class=\"about__info\"> <h2>Needs</h2> <ul> <li> I am attracted to interesting and complex projects that use a modern stack, have a great team, and everything is aimed at making the lives of users more interesting, easier, or solving important social and other problems. </li> <li> I strive for constant professional growth, actively improving my skills under the guidance of an experienced mentor and self-study. </li> </ul> </div> <div class=\"about__info\"> <h2>Pain points</h2> <p> After several months of diligently studying JS, I identified an area in which I needed a little more perseverance and strength: solving algorithmic problems. I would like to note that there is progress. And you can follow this progress in my GitHub <a href=\"https://github.com/spvvrv/codewars\">repository</a>. </p> </div> </section> <section class=\"section__photo\"> <div class=\"img-container\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Sofya Pivovarova\"/> <p class=\"text-quote\"> It’s important for me to grow with my project </p> </div> </section> </main> </body> </html> ";
// Exports
/* harmony default export */ const src = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/index.js

//включили слежку за изменениями в index.html

})();

/******/ })()
;