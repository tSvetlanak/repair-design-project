/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar FirstButtonSc = document.getElementById(\"btn-1\");\nvar SecondButtonSc = document.getElementById(\"btn-2\");\nFirstButtonSc.addEventListener(\"click\", funcSc, {\n  passive: true\n}, false);\nSecondButtonSc.addEventListener(\"click\", funcSc, {\n  passive: true\n}, false);\nvar FirstButtonFc = document.getElementById(\"button-1\");\nvar SecondButtonFc = document.getElementById(\"button-2\");\nFirstButtonFc.addEventListener(\"click\", funcFc, {\n  passive: true\n}, false);\nSecondButtonFc.addEventListener(\"click\", funcFc, {\n  passive: true\n}, false);\n\nfunction funcFc() {\n  var contentFc = document.getElementById(\"sliderfc\");\n\n  switch (contentFc.className) {\n    case \"slider__fouth-container first-slid\":\n      contentFc.className = \"slider__fouth-container second-slid\";\n      break;\n\n    case \"slider__fouth-container second-slid\":\n      contentFc.className = \"slider__fouth-container third-slid\";\n      break;\n\n    case \"slider__fouth-container third-slid\":\n      contentFc.className = \"slider__fouth-container first-slid\";\n      break;\n      return contentFc.className;\n  }\n}\n\nfunction funcSc() {\n  var contentsc = document.getElementById(\"slidersc\");\n\n  switch (contentsc.className) {\n    case \"second-container__slider first-slid\":\n      contentsc.className = \"second-container__slider second-slid\";\n      break;\n\n    case \"second-container__slider second-slid\":\n      contentsc.className = \"second-container__slider third-slid\";\n      break;\n\n    case \"second-container__slider third-slid\":\n      contentsc.className = \"second-container__slider first-slid\";\n      break;\n      console.log(contentsc.className);\n      return contentsc.className;\n  }\n}\n\nfunction findVideos() {\n  var video = document.querySelector('.video');\n  setupVideo(video);\n}\n\nfunction setupVideo(vid) {\n  var link = vid.querySelector('.video__link');\n  var button = vid.querySelector('.video__button');\n  var id = 'sD5ZxmbbOeU';\n  vid.addEventListener('click', function () {\n    var iframe = createIframe(id);\n    vid.appendChild(iframe);\n    link.remove();\n    button.remove();\n  });\n  link.removeAttribute('href');\n  vid.classList.add('video--enabled');\n}\n\nfunction createIframe(id) {\n  var iframe = document.createElement('iframe');\n  iframe.setAttribute('allowfullscreen', '');\n  iframe.setAttribute('src', generateURL('sD5ZxmbbOeU'));\n  iframe.classList.add('video__media');\n  return iframe;\n}\n\nfunction generateURL(id) {\n  var query = '?rel=0&showinfo=0&autoplay=1';\n  return 'https://www.youtube.com/embed/' + id + query;\n}\n\nfindVideos();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });