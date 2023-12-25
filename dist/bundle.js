/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */

.toastify {
    padding: 12px 20px;
    color: #ffffff;
    display: inline-block;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);
    background: linear-gradient(135deg, #73a5ff, #5477f5);
    position: fixed;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    max-width: calc(50% - 20px);
    z-index: 2147483647;
}

.toastify.on {
    opacity: 1;
}

.toast-close {
    background: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    opacity: 0.4;
    padding: 0 5px;
}

.toastify-right {
    right: 15px;
}

.toastify-left {
    left: 15px;
}

.toastify-top {
    top: -150px;
}

.toastify-bottom {
    bottom: -150px;
}

.toastify-rounded {
    border-radius: 25px;
}

.toastify-avatar {
    width: 1.5em;
    height: 1.5em;
    margin: -7px 5px;
    border-radius: 2px;
}

.toastify-center {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    max-width: fit-content;
    max-width: -moz-fit-content;
}

@media only screen and (max-width: 360px) {
    .toastify-right, .toastify-left {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        max-width: fit-content;
    }
}
`, "",{"version":3,"sources":["webpack://./node_modules/toastify-js/src/toastify.css"],"names":[],"mappings":"AAAA;;;;;;EAME;;AAEF;IACI,kBAAkB;IAClB,cAAc;IACd,qBAAqB;IACrB,uFAAuF;IACvF,6DAA6D;IAC7D,qDAAqD;IACrD,eAAe;IACf,UAAU;IACV,wDAAwD;IACxD,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,sBAAsB;IAC1B;AACJ","sourcesContent":["/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-screen-red : #ef4444;
    --main-screen-blue : #38bdf8;
    --main-screen-green : #4ade80;
    --main-screen-pink : #e879f9;

    --missed-hit-black : black;
    --ship-hit-gold : gold;
    --set-ship-gray : gray;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    margin : 0;
}

.main-screen-container {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-left-div {
    height: 100%;
    width: 50%;
    background-color: var(--main-screen-red);

    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap : 32px;
}

.main-right-div {
    height: 100%;
    width: 50%;
    background-color: var(--main-screen-blue);
    
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap : 32px;
}

.heading {
    font-size: 64px;
    font-weight: 700;
}

.button {
    outline: none;
    border: none;
    padding: 16px;
    font-weight: 700;
    transition: 500ms;
}

.main-left-button {
    background-color: var(--main-screen-red);
    border: 5px solid black;
    font-size: 16px;
}

.main-right-button {
    background-color: var(--main-screen-blue);
    border: 5px solid black;
    font-size: 16px;
}

.main-left-button:hover {
    background-color: black;
    color : var(--main-screen-red);
}

.main-right-button:hover {
    background-color: black;
    color : var(--main-screen-blue);
}

.board-div {
    width: 100%;
    height: 100vh;
    display: flex;
}

.active-player-div {
    display  :flex;
    flex-direction: column;
    align-items: center;
    width : 50%;
    height: 100%;
}

.opp-player-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 50%;
    height: 100%;
}

.active-player-board {
    display : grid;
    grid-template-columns: repeat(9,60px);
    grid-template-rows: repeat(9,60px);
    border: 1px solid #0a0a0a;
}

.active-player-grid-square {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    box-shadow: 0 0 0 1px #000;
}

.opp-player-board {
    display : grid;
    grid-template-columns: repeat(9,60px);
    grid-template-rows: repeat(9,60px);
    border: 1px solid #0a0a0a;
}

.opp-player-grid-square {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    box-shadow: 0 0 0 1px #000;
}

.win-container {
    height: 100vh;
    width: 100%;
    display : flex;
    flex-direction: columl;
    justify-content: center;
    align-items: center;
}

.move-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.move-board {
    display : grid;
    grid-template-columns: repeat(9,60px);
    grid-template-rows: repeat(9,60px);
    box-shadow: 0 0 0 1px #000;
}

.move-player-grid-square {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    box-shadow: 0 0 0 1px #000;
}

.confirm-button {
    border : 5px solid black;
    font-weight: 700;
    transition: 500ms;
}

.confirm-button:hover {
    border: 5px solid #fafafa;
    color: #fafafa;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4BAA4B;IAC5B,6BAA6B;IAC7B,4BAA4B;;IAE5B,0BAA0B;IAC1B,sBAAsB;IACtB,sBAAsB;IACtB,mJAAmJ;AACvJ;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,wCAAwC;;IAExC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,yCAAyC;;IAEzC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB","sourcesContent":[":root {\n    --main-screen-red : #ef4444;\n    --main-screen-blue : #38bdf8;\n    --main-screen-green : #4ade80;\n    --main-screen-pink : #e879f9;\n\n    --missed-hit-black : black;\n    --ship-hit-gold : gold;\n    --set-ship-gray : gray;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    margin : 0;\n}\n\n.main-screen-container {\n    height: 100vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main-left-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-red);\n\n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.main-right-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-blue);\n    \n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.heading {\n    font-size: 64px;\n    font-weight: 700;\n}\n\n.button {\n    outline: none;\n    border: none;\n    padding: 16px;\n    font-weight: 700;\n    transition: 500ms;\n}\n\n.main-left-button {\n    background-color: var(--main-screen-red);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-right-button {\n    background-color: var(--main-screen-blue);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-left-button:hover {\n    background-color: black;\n    color : var(--main-screen-red);\n}\n\n.main-right-button:hover {\n    background-color: black;\n    color : var(--main-screen-blue);\n}\n\n.board-div {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n}\n\n.active-player-div {\n    display  :flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.opp-player-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.active-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.active-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.opp-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.opp-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.win-container {\n    height: 100vh;\n    width: 100%;\n    display : flex;\n    flex-direction: columl;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-container {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 32px;\n}\n\n.move-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    box-shadow: 0 0 0 1px #000;\n}\n\n.move-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.confirm-button {\n    border : 5px solid black;\n    font-weight: 700;\n    transition: 500ms;\n}\n\n.confirm-button:hover {\n    border: 5px solid #fafafa;\n    color: #fafafa;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.css":
/*!***************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./toastify.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function(global) {
  // Object initialization
  var Toastify = function(options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
    // Library version
    version = "1.12.0";

  // Set the default global options
  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {
    },
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: '',
    backgroundColor: '',
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {
    },
    offset: {x: 0, y: 0},
    escapeMarkup: true,
    ariaLive: 'polite',
    style: {background: ''}
  };

  // Defining the prototype of the object
  Toastify.lib = Toastify.prototype = {
    toastify: version,

    constructor: Toastify,

    // Initializing the object with required parameters
    init: function(options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      }

      // Creating the options object
      this.options = {};

      this.toastElement = null;

      // Validating the options
      this.options.text = options.text || Toastify.defaults.text; // Display message
      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
      this.options.style = options.style || Toastify.defaults.style;
      if(options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      }

      // Returning the current object for chaining functions
      return this;
    },

    // Building the DOM element
    buildToast: function() {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      }

      // Creating the DOM object
      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className;

      // Positioning toast to left or right or center
      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.')
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      }

      // Assigning gravity of element
      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
      }

      // Loop through our style object and apply styles to divElement
      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      }

      // Announce the toast to screen readers
      if (this.options.ariaLive) {
        divElement.setAttribute('aria-live', this.options.ariaLive)
      }

      // Adding the toast message/node
      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node)
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;

          avatarElement.className = "toastify-avatar";

          if (this.options.position == "left" || this.options.positionLeft === true) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      }

      // Adding a close icon to the toast
      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("button");
        closeElement.type = "button";
        closeElement.setAttribute("aria-label", "Close");
        closeElement.className = "toast-close";
        closeElement.innerHTML = "&#10006;";

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );

        //Calculating screen width
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

        // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px
        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      }

      // Clear timeout while toast is focused
      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        // stop countdown
        divElement.addEventListener(
          "mouseover",
          function(event) {
            window.clearTimeout(divElement.timeOutValue);
          }
        )
        // add back the timeout
        divElement.addEventListener(
          "mouseleave",
          function() {
            divElement.timeOutValue = window.setTimeout(
              function() {
                // Remove the toast from DOM
                self.removeElement(divElement);
              },
              self.options.duration
            )
          }
        )
      }

      // Adding an on-click destination path
      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this)
        );
      }

      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }

      // Adding offset
      if(typeof this.options.offset === "object") {

        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);

        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

      }

      // Returning the generated element
      return divElement;
    },

    // Displaying the toast
    showToast: function() {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast();

      // Getting the root element to with the toast needs to be added
      var rootElement;
      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      // Validating if root element is present in DOM
      if (!rootElement) {
        throw "Root element is not defined";
      }

      // Adding the DOM element
      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);

      // Repositioning the toasts in case multiple toasts are present
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(
          function() {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        ); // Binding `this` for function invocation
      }

      // Supporting function chaining
      return this;
    },

    hideToast: function() {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement);
    },

    // Removing the element from the DOM
    removeElement: function(toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", "");

      // Removing the element from DOM after transition end
      window.setTimeout(
        function() {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          }

          // Remove the element from the DOM, only when the parent node was not removed before.
          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          }

          // Calling the callback function
          this.options.callback.call(toastElement);

          // Repositioning the toasts again
          Toastify.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },
  };

  // Positioning the toasts on the DOM
  Toastify.reposition = function() {

    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var offsetSize = {
      top: 15,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("toastify");

    var classUsed;

    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length-1)
      // Spacing between toasts
      var offset = 15;

      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }

    // Supporting function chaining
    return this;
  };

  // Helper function to get offset.
  function getAxisOffsetAValue(axis, options) {

    if(options.offset[axis]) {
      if(isNaN(options.offset[axis])) {
        return options.offset[axis];
      }
      else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';

  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (
      elem.className &&
      elem.className
        .trim()
        .split(/\s+/gi)
        .indexOf(yourClass) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Setting up the prototype for the init object
  Toastify.lib.init.prototype = Toastify.lib;

  // Returning the Toastify function to be assigned to the window object/module
  return Toastify;
});


/***/ }),

/***/ "./src/checkBoundary.js":
/*!******************************!*\
  !*** ./src/checkBoundary.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ "./src/errorHandler.js");

function checkBoundary(newX, newY, newAlign, length) {

    // If x is less than 0 or greater than 9 then throw an error.
    if(newX < 0) {
        (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("X cannot be under zero");
        throw("X Under 0");
    } else if(newX > 9) {
        (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("X cannot be higher than nine");
        throw("X over 9");
    }

    if(newY < 0) {
        (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("Y cannot be under zero")
        throw("Y under 0");
    } else if(newY > 9) {
        (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("Y cannot be higher than 9")
        throw("Y  over 9");
    }

    // If boundary conditions met and lenght is 1 then return 1.
    if(length === 1) {
        return 1;
    }
    
    // Check based on alignment.
    if(newAlign === "vertical") {
        if(length === 2) {
            if(newY === 9) {
                (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("2 length vertical ship cannot be placed & y=9");
                throw("Vertical 2 Length Boundary: Y @ 9 error");
            } 
            return 1;
        } else if(length === 3) {
            if(newY === 8 || newY === 9) {
                (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("Vertical 3 length ship cannot be placed @ y=8");
                throw("Vertical 3 length Boundary: Y @ 8 or 9 error");
            }
            return 1;
        } else {
            (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("Something went wrong from our side. Sorry :)");
            throw("Ship cannot be greater than 3");
        }
    } else if(newAlign === "horizontal") {
        if(length === 2) {
            if(newX === 9) {
                (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("Horizontal 2 length ship cannot be placed @ x=9");
                throw("Horizontal 2 length Boundary: X @ 9 error");
            }
            return 1;
        } else if( length === 3) {
            if(newX === 8 || newX === 9) {
                (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("Horizontal 3 length ship cannot be placed @ x=8 or x=9");
                throw("Horizontal 3 length Boundary: X @ 8 or 9 error");
            }
            return 1;
        } else {
            (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("Something went wrong from our side. Sorry :)");
            throw("Ship cannot be greater than 3");
        }
    } else {
        (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])("The alignment provided is wrong");
        throw("Alignment error : Write the correct new alignment");
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkBoundary); {

}

/***/ }),

/***/ "./src/checkShipConflict.js":
/*!**********************************!*\
  !*** ./src/checkShipConflict.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getShipCords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShipCords */ "./src/getShipCords.js");
// Checks whether the new x and new y are occupied by another ship.


// Returns 1 if any one element from expectCords exists in occupiedCords
function checkShipConflict(newX,newY,newAlign, length, occupiedCords) {

    // Get the expected coordinates that the ship will consume.
    const expectedCords = (0,_getShipCords__WEBPACK_IMPORTED_MODULE_0__["default"])(newX,newY,newAlign,length);

    // If the expected coordinates are already occupied by something then return 1, else return 0
    return occupiedCords.some(element => {
        return expectedCords.some(expectedElement => {
            return JSON.stringify(element) === JSON.stringify(expectedElement);
        });
    }) ? 1 : 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkShipConflict);

/***/ }),

/***/ "./src/displayBoard.js":
/*!*****************************!*\
  !*** ./src/displayBoard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getColor */ "./src/getColor.js");
/* harmony import */ var _ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/element/divGen */ "./src/ui/element/divGen.js");
/* harmony import */ var _ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/element/headingGen */ "./src/ui/element/headingGen.js");
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorHandler */ "./src/errorHandler.js");





// Builds the active player board and returns.
function buildActivePlayerBoard(player) {
    // Generates div for the player board.
    const activePlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("active-player-board");

    // For loop for adding each grid square (9x9)
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            // Generates the div for the grid square.
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("active-player-grid-square");

            
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // Color the square : if the ship is occupied and hit -> gold color
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            
            } else if(player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // Color the square : missed hit -> black
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } else if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // Color the square : only the ship is present but not hit -> gray.
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // If player clicks own board -> give error
            gridSquare.addEventListener("click",() => {
                (0,_errorHandler__WEBPACK_IMPORTED_MODULE_3__["default"])("Clicking on your own board is futile.")
            });

            // Appends the grid square to the board.
            activePlayerBoard.appendChild(gridSquare);
        }
    }

    // Returns the board.
    return activePlayerBoard;
}

// Builds and returns the opponent board.
function buildOppPlayerBoard(oppPlayer) {

    // Generate div to hold the opp player board.
    const oppPlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-player-board");

    // For loop for adding each grid square (9x9)
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            // Generates a div for each grid square.
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-player-grid-square");
            if(oppPlayer.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // If the square has been hit and was occupied -> gold
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // if the square was not occupied but hit -> black
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            }

            // Append the square to the board.
            oppPlayerBoard.appendChild(gridSquare);
        }
    }

    // Return the board.
    return oppPlayerBoard;
}

function getActivePlayerSide(player) {
    // Creates an active player div.
    const activePlayerSide = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("active-player-div");
    activePlayerSide.style.backgroundColor = (0,_getColor__WEBPACK_IMPORTED_MODULE_0__["default"])(player.color);

    // Heading for the active player with their name.
    const activePlayerHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__["default"])("active-player-heading");
    activePlayerHeading.textContent = `${player.name} Board`;
    activePlayerSide.appendChild(activePlayerHeading);
    
    // Generates active player board.
    const activePlayerBoard = buildActivePlayerBoard(player);
    activePlayerSide.appendChild(activePlayerBoard);

    // Returns the active player board.
    return activePlayerSide;
}

function getOppPlayerSide(oppPlayer) {
    // Creates div for opponent side.
    const oppPlayerSide = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-player-div");
    oppPlayerSide.style.backgroundColor = (0,_getColor__WEBPACK_IMPORTED_MODULE_0__["default"])(oppPlayer.color);

    // Heading for the opponent player with thier name
    const oppPlayerHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__["default"])("opp-player-heading");
    oppPlayerHeading.textContent = `${oppPlayer.name} Board`;
    oppPlayerSide.appendChild(oppPlayerHeading);
    
    // Generate opp player boad.
    const oppPlayerBoard = buildOppPlayerBoard(oppPlayer);
    oppPlayerSide.appendChild(oppPlayerBoard);

    // Return the board.
    return oppPlayerSide;
}

function displayPlayerBoard(player,oppPlayer) {
    // Create board display
    const boardDiv = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("board-div");

    // Get the active and opponent player side and append
    const activePlayerSide = getActivePlayerSide(player);
    const oppPlayerSide = getOppPlayerSide(oppPlayer);
    boardDiv.appendChild(activePlayerSide);
    boardDiv.appendChild(oppPlayerSide);
    return boardDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPlayerBoard);

/***/ }),

/***/ "./src/errorHandler.js":
/*!*****************************!*\
  !*** ./src/errorHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastify_js_src_toastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js/src/toastify.css */ "./node_modules/toastify-js/src/toastify.css");



function errorHandler(message) {
    toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text : message,
        duration : 3000,
        gravity: 'top',
        position: 'right',
        close : true,
        style: {
            background: "#0a0a0a",
        },
    }).showToast();
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandler);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   play2PGame: () => (/* binding */ play2PGame),
/* harmony export */   playCPUGame: () => (/* binding */ playCPUGame)
/* harmony export */ });
/* harmony import */ var _displayBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBoard */ "./src/displayBoard.js");


// Get the main container
const bodyContainer = document.querySelector(".container");

// Run the game loop.
function gameLoop(currPlayer,oppPlayer,onComplete) {
    // Empty the game loop and append the main board.
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild((0,_displayBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(currPlayer,oppPlayer));

    // If the current player is CPU.
    if(currPlayer.name === "CPU") {
        // Get random coordinates to attack and make sure that those coordinates have not already been attacked.
        let toAttackX,toAttackY;
        do {
            toAttackX = Math.floor(Math.random() * 9) + 1;
            toAttackY = Math.floor(Math.random() * 9) + 1;
        } while (oppPlayer.gameboard.hitSpots.some(([x, y]) => x === toAttackX && y === toAttackY));

        // Do the attack
        try {
            // Do recieve attack on the opponent player.
            oppPlayer.gameboard.receiveAttack(toAttackX,toAttackY);

            // If all of them have sunk -> game over condition.
            if(oppPlayer.gameboard.allSunk()) {
                onComplete(currPlayer);
                return;
            }

            // Switch players. 
            const p1 = currPlayer;
            const p2 = oppPlayer;
            gameLoop(p2,p1,onComplete);
        } catch(err) {
            console.log(err);
        }
    // If the current player is any other player then we need to give chance for the player.
    } else {

        // Get the opponent player grid squares and add the event listner for each.
        const oppGridSquares = Array.from(document.querySelectorAll(".opp-player-grid-square"));
        for(let i=0;i<9;i++) {
            for(let j=0;j<9;j++) {

                oppGridSquares[(i*9) + j].addEventListener("click",function () {
                    try {
                        oppPlayer.gameboard.receiveAttack(i+1,j+1);

                        if(oppPlayer.gameboard.allSunk()) {
                            onComplete(currPlayer);
                            return;
                        }
                        const p1 = currPlayer;
                        const p2 = oppPlayer;
                        gameLoop(p2,p1,onComplete);
                    } catch(err) {
                        console.log(err);
                    }
                })
            }
        }
    }
}

function play2PGame(player1, player2) {
    bodyContainer.innerHTML = "";
    gameLoop(player1,player2);
}


function playCPUGame(player1, CPU,onComplete) {
    bodyContainer.innerHTML = "";
    gameLoop(player1,CPU,onComplete);
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _checkBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkBoundary */ "./src/checkBoundary.js");
/* harmony import */ var _checkShipConflict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkShipConflict */ "./src/checkShipConflict.js");
/* harmony import */ var _getShipCords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getShipCords */ "./src/getShipCords.js");
/* harmony import */ var _getOccupiedCordsExceptTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOccupiedCordsExceptTarget */ "./src/getOccupiedCordsExceptTarget.js");
/* harmony import */ var _getHitShip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getHitShip */ "./src/getHitShip.js");







class GameBoard {
    constructor() {
        this.unsunkShips = [];
        this.hitSpots = [];
        this.occupiedSpots = [];
        this.sunkShips = [];

        const ship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1,1,1,"vertical",[]);
        this.unsunkShips.push(ship1);
        this.getOccupiedSpots();
        
        const ship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2,4,4,"vertical",this.occupiedSpots);
        this.unsunkShips.push(ship2);
        this.getOccupiedSpots();

        const ship3 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2,4,2,"horizontal",this.occupiedSpots);
        this.unsunkShips.push(ship3);
        this.getOccupiedSpots();
        
        const ship4 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3,7,7,"vertical",this.occupiedSpots);
        this.unsunkShips.push(ship4);
        this.getOccupiedSpots();

        const ship5 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3,1,9,"horizontal",this.occupiedSpots);
        this.unsunkShips.push(ship5);
        this.getOccupiedSpots();
    }

    getOccupiedSpots() {
        this.occupiedSpots = [];
        for(let i=0;i<this.unsunkShips.length;i++) {
            const newShipCords = (0,_getShipCords__WEBPACK_IMPORTED_MODULE_3__["default"])(
                this.unsunkShips[i].headX,
                this.unsunkShips[i].headY,
                this.unsunkShips[i].alignment,
                this.unsunkShips[i].length
            );
            for(let j=0;j<newShipCords.length;j++) {
                this.occupiedSpots.push(newShipCords[j]);
            }
        }
    }


    moveShip(shipNo,newX,newY) {
        let shipAlignment = this.unsunkShips[shipNo-1].alignment;
        let shipLength = this.unsunkShips[shipNo-1].length;

        if((0,_checkBoundary__WEBPACK_IMPORTED_MODULE_1__["default"])(newX,newY,shipAlignment,shipLength) === 1) {
            const remSpots = (0,_getOccupiedCordsExceptTarget__WEBPACK_IMPORTED_MODULE_4__["default"])(this.occupiedSpots,this.unsunkShips[shipNo-1].shipCords);
            if((0,_checkShipConflict__WEBPACK_IMPORTED_MODULE_2__["default"])(newX,newY,shipAlignment,shipLength,remSpots) === 0) {
                this.unsunkShips[shipNo-1].updateCords(newX,newY,shipAlignment);
                this.getOccupiedSpots();
            } else {
                throw("Ship Conflict Error");
            }
        } else {
            throw("Check boundary error");
        }
    }

    // Rotate ship
    rotateShip(shipNo,newAlign) {
        const shipLength = this.unsunkShips[shipNo-1].length;
        const shipX = this.unsunkShips[shipNo-1].headX;
        const shipY = this.unsunkShips[shipNo-1].headY;

        if((0,_checkBoundary__WEBPACK_IMPORTED_MODULE_1__["default"])(shipX,shipY,newAlign,shipLength) === 1) {
            const remSpots = (0,_getOccupiedCordsExceptTarget__WEBPACK_IMPORTED_MODULE_4__["default"])(this.occupiedSpots,this.unsunkShips[shipNo-1].shipCords);
            if((0,_checkShipConflict__WEBPACK_IMPORTED_MODULE_2__["default"])(shipX,shipY,newAlign,shipLength,remSpots) === 0) {
                this.unsunkShips[shipNo-1].updateCords(shipX, shipY, newAlign);
                this.getOccupiedSpots();
            } else {
                throw("Rotate Ship : Ship conflict error");
            }
        } else {
            throw("Rotate Ship : Check boundary error");
        }
    }

    // Recieve attack
    receiveAttack(toAttackX, toAttackY) {
        if(toAttackX < 0 || toAttackX > 9) {
            throw("Attack out of bounds X");
        } else if(toAttackY < 0 || toAttackY > 9) {
            throw("Attack out of bounds Y")
        }
        
        if(this.hitSpots.some(element => JSON.stringify(element) ===
            JSON.stringify([toAttackX,toAttackY]))) {
                throw("Attack coordinate already hit")
        }

        this.hitSpots.push([toAttackX,toAttackY]);
        
        if(this.occupiedSpots.some(element => JSON.stringify(element) ===
            JSON.stringify([toAttackX,toAttackY]))) {
                const shipToHit = (0,_getHitShip__WEBPACK_IMPORTED_MODULE_5__["default"])(this.unsunkShips, toAttackX, toAttackY);
                this.unsunkShips[shipToHit].getHit();
                if(this.unsunkShips[shipToHit].isSunk()===true) {
                    const ship = this.unsunkShips[shipToHit];
                    this.sunkShips.push(ship);
                    this.unsunkShips.splice(shipToHit,1);
                }
        }
        return true;
    }

    allSunk() {
        if(this.unsunkShips.length < 1) {
            return true;
        }
        return false;
    }
}

function newGameBoard() {
    const gameboard = new GameBoard;
    return gameboard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGameBoard);

/***/ }),

/***/ "./src/getColor.js":
/*!*************************!*\
  !*** ./src/getColor.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getColor(playerColor) {
    if(playerColor === "red") {
        return "var(--main-screen-red)";
    } else if(playerColor === "blue") {
        return "var(--main-screen-blue)";
    } else if(playerColor === "green") {
        return "var(--main-screen-green)";
    } else if(playerColor === "pink") {
        return "var(--main-screen-pink)"
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getColor);

/***/ }),

/***/ "./src/getHitShip.js":
/*!***************************!*\
  !*** ./src/getHitShip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getHitShip(shipArray, toAttackX, toAttackY) {
    for(let i=0;i<shipArray.length;i++) {
        for(let j=0;j<shipArray[i].shipCords.length;j++) {
            if(JSON.stringify(shipArray[i].shipCords[j]) === JSON.stringify([toAttackX,toAttackY])) {
                return i;
            }
        }
    }
    return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHitShip);

/***/ }),

/***/ "./src/getOccupiedCordsExceptTarget.js":
/*!*********************************************!*\
  !*** ./src/getOccupiedCordsExceptTarget.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getOccupiedExceptTarget(allOccupiedCords,shipCords) {
    const remSpots = allOccupiedCords.filter(item =>
        !shipCords.some(shipCoord =>
          item.every((val, index) => val === shipCoord[index])
        )
      );
      return remSpots;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOccupiedExceptTarget);

/***/ }),

/***/ "./src/getShipCords.js":
/*!*****************************!*\
  !*** ./src/getShipCords.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getShipCords(X,Y,align,length) {
    let occupiedCords = [];
    if(align === "vertical") {
        for(let i=0;i<length;i++) {
            occupiedCords.push([X,Y+i]);
        }
    } else if(align === "horizontal") {
        for(let i=0;i<length;i++) {
            occupiedCords.push([X+i,Y]);
        }
    } else {
        throw("GetShipCords : Alignment error");
    }

    return occupiedCords;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShipCords);

/***/ }),

/***/ "./src/moveCPUShips.js":
/*!*****************************!*\
  !*** ./src/moveCPUShips.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function moveCPUShips(CPU,onComplete) {
    for(let i=0;i<9;i++) {
        const targetShip = Math.floor(Math.random() * 4);
        const actionToPerform = Math.floor(Math.random() * 2) + 1;

        if(actionToPerform === 1) {
            console.log(targetShip,"Move ship");
            const moveToX = Math.floor(Math.random() * 9) + 1;
            const moveToY = Math.floor(Math.random() * 9) + 1;
            try {
                CPU.gameboard.moveShip(targetShip+1,moveToX,moveToY);
            } catch(err) {
                console.log(err);
            }
        } else if(actionToPerform === 2) {
            try {
                if(CPU.gameboard.unsunkShips[targetShip].alignment === "vertical") {
                    CPU.gameboard.rotateShip(targetShip+1,"horizontal");
                } else {
                    CPU.gameboard.rotateShip(targetShip+1,"vertical");
                }
            } catch(err) {
                console.log(err);
            }
        }
    }

    if(onComplete && typeof onComplete === 'function') {
        onComplete();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveCPUShips);

/***/ }),

/***/ "./src/moveShip.js":
/*!*************************!*\
  !*** ./src/moveShip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getColor */ "./src/getColor.js");
/* harmony import */ var _getHitShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHitShip */ "./src/getHitShip.js");
/* harmony import */ var _ui_element_btnGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/element/btnGen */ "./src/ui/element/btnGen.js");
/* harmony import */ var _ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/element/divGen */ "./src/ui/element/divGen.js");
/* harmony import */ var _ui_element_headingGen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/element/headingGen */ "./src/ui/element/headingGen.js");






function updateBoard(player) {
    const getBoard = document.querySelector('.board-container');
    getBoard.innerHTML = "";
    const moveBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("move-board");
    for(let i=1;i<10;i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("move-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            let longPressTimeout;
            gridSquare.addEventListener("mousedown", (event) => {
                // Prevent the default action of the mousedown event
                event.preventDefault();
                longPressTimeout = setTimeout(() => {
                    console.log(`Long press detected ${i},${j}`);
                    updateBoard(player);
                    const userInput = prompt("Enter the coordinates in the format x,y");
                    if(userInput !== null) {
                        const coordinates = userInput.split(',');
                        const x = parseInt(coordinates[0].trim(), 10);
                        const y = parseInt(coordinates[1].trim(), 10);

                        if(!isNaN(x) && !isNaN(y)) {
                            console.log(`The user entered ${x},${y}`);
                        } else {
                            console.log(`Invalid coordinates entered`);
                        }

                        const shipToMove = (0,_getHitShip__WEBPACK_IMPORTED_MODULE_1__["default"])(player.gameboard.unsunkShips,i,j);
                        console.log(shipToMove);

                        player.gameboard.moveShip(shipToMove+1,x,y);
                        updateBoard(player);
                    } else {
                        console.log("User cancelled the prompt");
                    }
                }, 1000);
            });

            gridSquare.addEventListener("mouseup",() => {
                clearTimeout();
            });

            // TODO - rotating ship not done
            gridSquare.addEventListener("click",() => {
                
                const shipHit = (0,_getHitShip__WEBPACK_IMPORTED_MODULE_1__["default"])(player.gameboard.unsunkShips,i,j);
                console.log(shipHit);
                try {
                    if(player.gameboard.unsunkShips[shipHit].alignment === "vertical") {
                        player.gameboard.rotateShip(shipHit+1,"horizontal");
                    } else {
                        player.gameboard.rotateShip(shipHit+1,"vertical");
                    }
                    console.log(player.gameboard.unsunkShips);
                } catch(err) {
                    console.log(err);
                }
                updateBoard(player);
            });

            moveBoard.appendChild(gridSquare);
        }
    }
    getBoard.appendChild(moveBoard);
}

function getBoard(player) {
    const moveBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("move-board");
    for(let i=1;i<10;i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("move-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            let longPressTimeout;
            gridSquare.addEventListener("mousedown", (event) => {
                // Prevent the default action of the mousedown event
                event.preventDefault();
                longPressTimeout = setTimeout(() => {
                    console.log(`Long press detected ${i},${j}`);
                    updateBoard(player);
                    const userInput = prompt("Enter the coordinates in the format x,y");
                    if(userInput !== null) {
                        const coordinates = userInput.split(',');
                        const x = parseInt(coordinates[0].trim(), 10);
                        const y = parseInt(coordinates[1].trim(), 10);

                        if(!isNaN(x) && !isNaN(y)) {
                            console.log(`The user entered ${x},${y}`);
                        } else {
                            console.log(`Invalid coordinates entered`);
                        }

                        const shipToMove = (0,_getHitShip__WEBPACK_IMPORTED_MODULE_1__["default"])(player.gameboard.unsunkShips,i,j);
                        console.log(shipToMove);

                        player.gameboard.moveShip(shipToMove+1,x,y);
                        updateBoard(player);
                    } else {
                        console.log("User cancelled the prompt");
                    }
                }, 500);
            });

            gridSquare.addEventListener("mouseup",() => {
                clearTimeout();
            });

            // TODO - rotating ship not done
            gridSquare.addEventListener("click",() => {
                
                const shipHit = (0,_getHitShip__WEBPACK_IMPORTED_MODULE_1__["default"])(player.gameboard.unsunkShips,i,j);
                console.log(shipHit);
                try {
                    if(player.gameboard.unsunkShips[shipHit].alignment === "vertical") {
                        player.gameboard.rotateShip(shipHit+1,"horizontal");
                    } else {
                        player.gameboard.rotateShip(shipHit+1,"vertical");
                    }
                    console.log(player.gameboard.unsunkShips);
                } catch(err) {
                    console.log(err);
                }
                updateBoard(player);
            })

            moveBoard.appendChild(gridSquare);
        }
    }
    return moveBoard;
}

function moveShip(player,onConfirm) {
    const bodyContainer = document.querySelector(".container");
    bodyContainer.innerHTML = "";
    

    const moveContainer = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("move-container");
    const colorToApply = (0,_getColor__WEBPACK_IMPORTED_MODULE_0__["default"])(player.color);
    moveContainer.style.backgroundColor = colorToApply;

    const moveHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_4__["default"])("move-heading");
    moveHeading.textContent = `${player.name} Set Your Board`;
    moveContainer.appendChild(moveHeading);

    const boardContainer = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("board-container");
    const board = getBoard(player);
    boardContainer.appendChild(board);
    moveContainer.appendChild(boardContainer);

    const confirmButton = (0,_ui_element_btnGen__WEBPACK_IMPORTED_MODULE_2__["default"])("confirm-button");
    confirmButton.textContent = "Confirm";
    confirmButton.style.backgroundColor = colorToApply;
    confirmButton.addEventListener("click",() => {
        if(onConfirm && typeof onConfirm === "function") {
            onConfirm();
        }
    })
    moveContainer.appendChild(confirmButton);

    const helpContainer = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("help-container");
    helpContainer.textContent = "Click to rotate, Long press and enter coordinates to move";
    moveContainer.appendChild(helpContainer);

    bodyContainer.appendChild(moveContainer);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveShip);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class player {
    constructor(name,color) {
        this.name = name;
        this.color = color;
        this.gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getColor() {
        return this.color;
    }

    setColor(newColor) {
        this.color = newColor;
    }
}

function newPlayer(name,color) {
    const createdPlayer = new player(name,color);
    return createdPlayer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newPlayer);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkBoundary */ "./src/checkBoundary.js");
/* harmony import */ var _checkShipConflict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkShipConflict */ "./src/checkShipConflict.js");
/* harmony import */ var _getShipCords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getShipCords */ "./src/getShipCords.js");




class Ship {
    constructor(length,headX,headY,alignment) {
        this.length = length;
        this.headX = headX;
        this.headY = headY;
        this.alignment = alignment;
        this.shipCords = (0,_getShipCords__WEBPACK_IMPORTED_MODULE_2__["default"])(this.headX,this.headY,this.alignment,this.length);
        this.hits = 0;
    }

    getHit() {
        this.hits++;
    }

    // Update coords
    updateCords(newHeadX,newHeadY,newAlign) {
        this.headX = newHeadX;
        this.headY = newHeadY;
        this.alignment = newAlign;
        this.shipCords = (0,_getShipCords__WEBPACK_IMPORTED_MODULE_2__["default"])(this.headX,this.headY,this.alignment,this.length);
    }

    isSunk() {
        if(this.hits === this.length) {
            return true;
        } else {
            return false;
        }
    }
}

function newShip(length,headX,headY,alignment,occupiedCords) {
    if(length < 1) {
        throw("Ship is too small");
    }
    if(length > 3) {
        throw("Ship is too big");
    }
    if((0,_checkBoundary__WEBPACK_IMPORTED_MODULE_0__["default"])(headX,headY,alignment,length) !== 1) {
        throw("Boundary exception");
    }
    if((0,_checkShipConflict__WEBPACK_IMPORTED_MODULE_1__["default"])(headX,headY,alignment,length,occupiedCords) === 1) {
        throw("Ship conflict error");
    }
    if((alignment !== "vertical") && (alignment !== "horizontal")) {
        throw("Alignment must be either vertical or horizontal");
    }
    const newShip = new Ship(length, headX,headY,alignment);
    return newShip;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newShip);

/***/ }),

/***/ "./src/ui/element/btnGen.js":
/*!**********************************!*\
  !*** ./src/ui/element/btnGen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateButton(className,id) {
    const newButton = document.createElement('button');
    newButton.classList.add('button');
    if(className) {
        newButton.classList.add(className);
    } if(id) {
        newButton.id = id;
    }
    return newButton;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateButton);

/***/ }),

/***/ "./src/ui/element/divGen.js":
/*!**********************************!*\
  !*** ./src/ui/element/divGen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateDiv(className, idName) {
    const newDiv = document.createElement('div');
    if(className) {
        newDiv.classList.add(className);
    }
    if(idName) {
        newDiv.id = idName;
    }
    return newDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDiv);

/***/ }),

/***/ "./src/ui/element/headingGen.js":
/*!**************************************!*\
  !*** ./src/ui/element/headingGen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateHeading(className, id) {
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading');
    if(className) {
        newHeading.classList.add(className);
    } 
    if(id) {
        newHeading.id = id;
    }
    return newHeading;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHeading);

/***/ }),

/***/ "./src/ui/element/materialIconGen.js":
/*!*******************************************!*\
  !*** ./src/ui/element/materialIconGen.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateMaterialIcon(iconName,fontSize) {
    const newIcon = document.createElement("i");
    newIcon.classList.add("material-icons");
    newIcon.textContent = iconName;
    newIcon.style.fontSize = fontSize;
    return newIcon;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMaterialIcon);

/***/ }),

/***/ "./src/ui/screen/init_main_screen.js":
/*!*******************************************!*\
  !*** ./src/ui/screen/init_main_screen.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _element_divGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element/divGen */ "./src/ui/element/divGen.js");
/* harmony import */ var _element_btnGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element/btnGen */ "./src/ui/element/btnGen.js");
/* harmony import */ var _element_materialIconGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element/materialIconGen */ "./src/ui/element/materialIconGen.js");
/* harmony import */ var _element_headingGen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element/headingGen */ "./src/ui/element/headingGen.js");





function init_main_screen_f() {
    const containerDiv = (0,_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("main-screen-container");
    
    const leftDiv = (0,_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("main-left-div");
    const leftDivIconDiv = (0,_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("main-left-icon-div");
    const leftDivIcon = (0,_element_materialIconGen__WEBPACK_IMPORTED_MODULE_2__["default"])("computer","240px");
    leftDivIconDiv.appendChild(leftDivIcon);
    const leftDivHead = (0,_element_headingGen__WEBPACK_IMPORTED_MODULE_3__["default"])("main-left-head");
    leftDivHead.textContent = "Computer";
    const leftDivButton = (0,_element_btnGen__WEBPACK_IMPORTED_MODULE_1__["default"])("main-left-button");
    leftDivButton.textContent = "Play Against Computer";
    leftDiv.appendChild(leftDivIconDiv);
    leftDiv.appendChild(leftDivHead);
    leftDiv.appendChild(leftDivButton);

    const rightDiv = (0,_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("main-right-div");
    const rightDivIconDiv = (0,_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("main-right-icon-div");
    const rightDivIcon = (0,_element_materialIconGen__WEBPACK_IMPORTED_MODULE_2__["default"])("person","240px");
    rightDivIconDiv.appendChild(rightDivIcon);
    const rightDivHead = (0,_element_headingGen__WEBPACK_IMPORTED_MODULE_3__["default"])("main-right-head");
    rightDivHead.textContent = "Player";
    const rightDivButton = (0,_element_btnGen__WEBPACK_IMPORTED_MODULE_1__["default"])("main-right-button");
    rightDivButton.textContent = "Play against another player";
    rightDiv.appendChild(rightDivIconDiv);
    rightDiv.appendChild(rightDivHead);
    rightDiv.appendChild(rightDivButton);


    containerDiv.appendChild(leftDiv);
    containerDiv.appendChild(rightDiv);
    return containerDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init_main_screen_f);

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_screen_init_main_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/screen/init_main_screen */ "./src/ui/screen/init_main_screen.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _moveShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moveShip */ "./src/moveShip.js");
/* harmony import */ var _moveCPUShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moveCPUShips */ "./src/moveCPUShips.js");
/* harmony import */ var _ui_element_headingGen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/element/headingGen */ "./src/ui/element/headingGen.js");
/* harmony import */ var _getColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getColor */ "./src/getColor.js");
/* harmony import */ var _ui_element_btnGen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/element/btnGen */ "./src/ui/element/btnGen.js");
/* harmony import */ var _ui_element_divGen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/element/divGen */ "./src/ui/element/divGen.js");
// Main screen appears allowing the user to choose between computer or player v player - DONE 
// Based on the users choice the next screen is shown where the user or users can choose their name and color
// Once the start game button is pressed the game
// Let player one place their ships
// Once the player one is done placing their ships
// If computer -> automate the process of placing ships
// If another player -> let player two place their ships.
// Begin the game loop until one of the players gameboards all sunk function returns true.
// when that happens we need to reset the game again by mostly making new players












const bodyContainer = document.querySelector(".container");

function displayWinMessage(player) {
    if(player) {
        bodyContainer.innerHTML = "";
        const winContainer = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_9__["default"])("win-container");
        winContainer.style.backgroundColor = (0,_getColor__WEBPACK_IMPORTED_MODULE_7__["default"])(player.color);

        const winMessage = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_6__["default"])("win-message");
        winMessage.textContent = `${player.name} has won`;
        winContainer.appendChild(winMessage);

        const winButton = (0,_ui_element_btnGen__WEBPACK_IMPORTED_MODULE_8__["default"])("win-button");
        winButton.style.backgroundColor = (0,_getColor__WEBPACK_IMPORTED_MODULE_7__["default"])(player.color);
        winButton.textContent = `Go Back Home`;
        winButton.addEventListener("click",pregame);
        winContainer.appendChild(winButton);

        bodyContainer.appendChild(winContainer);
    }
}

function init_CPU_game() {
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Bingus","pink");
    const CPU = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("CPU","blue");

    bodyContainer.innerHTML = "";
    (0,_moveShip__WEBPACK_IMPORTED_MODULE_4__["default"])(player1,() => {
        (0,_moveCPUShips__WEBPACK_IMPORTED_MODULE_5__["default"])(CPU,() => {
            (0,_game__WEBPACK_IMPORTED_MODULE_2__["default"])(player1,CPU,(winner) => {
                displayWinMessage(winner);
            });
        })
    });
    
    
}

function init_player_game() {
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Bingus","pink");
    const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Spoingus","blue");

    bodyContainer.innerHTML = "";
    (0,_moveShip__WEBPACK_IMPORTED_MODULE_4__["default"])(player1,() => {
        (0,_moveShip__WEBPACK_IMPORTED_MODULE_4__["default"])(player2,() => {
            (0,_game__WEBPACK_IMPORTED_MODULE_2__["default"])(player1,player2,(winner) => {
                displayWinMessage(winner);
            });
        })
    });
}

function pregame() {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild((0,_ui_screen_init_main_screen__WEBPACK_IMPORTED_MODULE_0__["default"])());
    const mainLeftButton = document.querySelector(".main-left-button");
    const mainRightButton = document.querySelector(".main-right-button");

    mainLeftButton.addEventListener("click",init_CPU_game);
    mainRightButton.addEventListener("click",init_player_game);
}

pregame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFP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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztB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V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEQ7QUFDeEM7QUFDVztBQUNBO0FBQ0M7QUFDUTtBQUNZO0FBQ3BCO0FBQ2U7QUFDSDs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhEQUFXO0FBQ3hDLDZDQUE2QyxxREFBUTs7QUFFckQsMkJBQTJCLGtFQUFlO0FBQzFDLG9DQUFvQyxhQUFhO0FBQ2pEOztBQUVBLDBCQUEwQiw4REFBYztBQUN4QywwQ0FBMEMscURBQVE7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtREFBUztBQUM3QixnQkFBZ0IsbURBQVM7O0FBRXpCO0FBQ0EsSUFBSSxxREFBUTtBQUNaLFFBQVEseURBQVk7QUFDcEIsWUFBWSxpREFBVztBQUN2QjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtREFBUztBQUM3QixvQkFBb0IsbURBQVM7O0FBRTdCO0FBQ0EsSUFBSSxxREFBUTtBQUNaLFFBQVEscURBQVE7QUFDaEIsWUFBWSxpREFBVztBQUN2QjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsdUVBQWtCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzPzJhZTkiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NoZWNrQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NoZWNrU2hpcENvbmZsaWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9kaXNwbGF5Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRDb2xvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0SGl0U2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0T2NjdXBpZWRDb3Jkc0V4Y2VwdFRhcmdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0U2hpcENvcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9tb3ZlQ1BVU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL21vdmVTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL2VsZW1lbnQvYnRuR2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9lbGVtZW50L2Rpdkdlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvZWxlbWVudC9oZWFkaW5nR2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9lbGVtZW50L21hdGVyaWFsSWNvbkdlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvc2NyZWVuL2luaXRfbWFpbl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXG4gKi9cblxuLnRvYXN0aWZ5IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTBweCAzNnB4IC00cHggcmdiYSg3NywgOTYsIDIzMiwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xufVxuXG4udG9hc3RpZnkub24ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi50b2FzdC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4udG9hc3RpZnktcmlnaHQge1xuICAgIHJpZ2h0OiAxNXB4O1xufVxuXG4udG9hc3RpZnktbGVmdCB7XG4gICAgbGVmdDogMTVweDtcbn1cblxuLnRvYXN0aWZ5LXRvcCB7XG4gICAgdG9wOiAtMTUwcHg7XG59XG5cbi50b2FzdGlmeS1ib3R0b20ge1xuICAgIGJvdHRvbTogLTE1MHB4O1xufVxuXG4udG9hc3RpZnktcm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnRvYXN0aWZ5LWF2YXRhciB7XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAtN3B4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2FzdGlmeS1jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRvYXN0aWZ5LXJpZ2h0LCAudG9hc3RpZnktbGVmdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztFQU1FOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUZBQXVGO0lBQ3ZGLDZEQUE2RDtJQUM3RCxxREFBcUQ7SUFDckQsZUFBZTtJQUNmLFVBQVU7SUFDVix3REFBd0Q7SUFDeEQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1Isc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogVG9hc3RpZnkganMgMS4xMi4wXFxuICogaHR0cHM6Ly9naXRodWIuY29tL2FwdmFydW4vdG9hc3RpZnktanNcXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcXG4gKlxcbiAqIENvcHlyaWdodCAoQykgMjAxOCBWYXJ1biBBIFBcXG4gKi9cXG5cXG4udG9hc3RpZnkge1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTBweCAzNnB4IC00cHggcmdiYSg3NywgOTYsIDIzMiwgMC4zKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNzNhNWZmLCAjNTQ3N2Y1KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcXG4gICAgei1pbmRleDogMjE0NzQ4MzY0NztcXG59XFxuXFxuLnRvYXN0aWZ5Lm9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRvYXN0LWNsb3NlIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXJpZ2h0IHtcXG4gICAgcmlnaHQ6IDE1cHg7XFxufVxcblxcbi50b2FzdGlmeS1sZWZ0IHtcXG4gICAgbGVmdDogMTVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXRvcCB7XFxuICAgIHRvcDogLTE1MHB4O1xcbn1cXG5cXG4udG9hc3RpZnktYm90dG9tIHtcXG4gICAgYm90dG9tOiAtMTUwcHg7XFxufVxcblxcbi50b2FzdGlmeS1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LWF2YXRhciB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgbWFyZ2luOiAtN3B4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udG9hc3RpZnktY2VudGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogLW1vei1maXQtY29udGVudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgICAudG9hc3RpZnktcmlnaHQsIC50b2FzdGlmeS1sZWZ0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tc2NyZWVuLXJlZCA6ICNlZjQ0NDQ7XG4gICAgLS1tYWluLXNjcmVlbi1ibHVlIDogIzM4YmRmODtcbiAgICAtLW1haW4tc2NyZWVuLWdyZWVuIDogIzRhZGU4MDtcbiAgICAtLW1haW4tc2NyZWVuLXBpbmsgOiAjZTg3OWY5O1xuXG4gICAgLS1taXNzZWQtaGl0LWJsYWNrIDogYmxhY2s7XG4gICAgLS1zaGlwLWhpdC1nb2xkIDogZ29sZDtcbiAgICAtLXNldC1zaGlwLWdyYXkgOiBncmF5O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luIDogMDtcbn1cblxuLm1haW4tc2NyZWVuLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1sZWZ0LWRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcblxuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXAgOiAzMnB4O1xufVxuXG4ubWFpbi1yaWdodC1kaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xuICAgIFxuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXAgOiAzMnB4O1xufVxuXG4uaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcbn1cblxuLm1haW4tbGVmdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLXJlZCk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWFpbi1yaWdodC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1haW4tbGVmdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcbn1cblxuLm1haW4tcmlnaHQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvciA6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xufVxuXG4uYm9hcmQtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hY3RpdmUtcGxheWVyLWRpdiB7XG4gICAgZGlzcGxheSAgOmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoIDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm9wcC1wbGF5ZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aCA6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hY3RpdmUtcGxheWVyLWJvYXJkIHtcbiAgICBkaXNwbGF5IDogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcbn1cblxuLmFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi5vcHAtcGxheWVyLWJvYXJkIHtcbiAgICBkaXNwbGF5IDogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcbn1cblxuLm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi53aW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bWw7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vdmUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzJweDtcbn1cblxuLm1vdmUtYm9hcmQge1xuICAgIGRpc3BsYXkgOiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcbn1cblxuLm1vdmUtcGxheWVyLWdyaWQtc3F1YXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xufVxuXG4uY29uZmlybS1idXR0b24ge1xuICAgIGJvcmRlciA6IDVweCBzb2xpZCBibGFjaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRyYW5zaXRpb246IDUwMG1zO1xufVxuXG4uY29uZmlybS1idXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmYWZhZmE7XG4gICAgY29sb3I6ICNmYWZhZmE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDRCQUE0Qjs7SUFFNUIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix3Q0FBd0M7O0lBRXhDLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlDQUF5Qzs7SUFFekMsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1tYWluLXNjcmVlbi1yZWQgOiAjZWY0NDQ0O1xcbiAgICAtLW1haW4tc2NyZWVuLWJsdWUgOiAjMzhiZGY4O1xcbiAgICAtLW1haW4tc2NyZWVuLWdyZWVuIDogIzRhZGU4MDtcXG4gICAgLS1tYWluLXNjcmVlbi1waW5rIDogI2U4NzlmOTtcXG5cXG4gICAgLS1taXNzZWQtaGl0LWJsYWNrIDogYmxhY2s7XFxuICAgIC0tc2hpcC1oaXQtZ29sZCA6IGdvbGQ7XFxuICAgIC0tc2V0LXNoaXAtZ3JheSA6IGdyYXk7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbiA6IDA7XFxufVxcblxcbi5tYWluLXNjcmVlbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWxlZnQtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcblxcbiAgICBkaXNwbGF5IDogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcCA6IDMycHg7XFxufVxcblxcbi5tYWluLXJpZ2h0LWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XFxuICAgIFxcbiAgICBkaXNwbGF5IDogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcCA6IDMycHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLm1haW4tbGVmdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubWFpbi1yaWdodC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1haW4tbGVmdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcbn1cXG5cXG4ubWFpbi1yaWdodC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcXG59XFxuXFxuLmJvYXJkLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXBsYXllci1kaXYge1xcbiAgICBkaXNwbGF5ICA6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGggOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wcC1wbGF5ZXItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGggOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItYm9hcmQge1xcbiAgICBkaXNwbGF5IDogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4ub3BwLXBsYXllci1ib2FyZCB7XFxuICAgIGRpc3BsYXkgOiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGEwYTBhO1xcbn1cXG5cXG4ub3BwLXBsYXllci1ncmlkLXNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XFxufVxcblxcbi53aW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1sO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5tb3ZlLWJvYXJkIHtcXG4gICAgZGlzcGxheSA6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4ubW92ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4uY29uZmlybS1idXR0b24ge1xcbiAgICBib3JkZXIgOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbn1cXG5cXG4uY29uZmlybS1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmFmYWZhO1xcbiAgICBjb2xvcjogI2ZhZmFmYTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2FzdGlmeS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9hc3RpZnkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIVxuICogVG9hc3RpZnkganMgMS4xMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXB2YXJ1bi90b2FzdGlmeS1qc1xuICogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VkXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFZhcnVuIEEgUFxuICovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuVG9hc3RpZnkgPSBmYWN0b3J5KCk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKGdsb2JhbCkge1xuICAvLyBPYmplY3QgaW5pdGlhbGl6YXRpb25cbiAgdmFyIFRvYXN0aWZ5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gUmV0dXJuaW5nIGEgbmV3IGluaXQgb2JqZWN0XG4gICAgICByZXR1cm4gbmV3IFRvYXN0aWZ5LmxpYi5pbml0KG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLy8gTGlicmFyeSB2ZXJzaW9uXG4gICAgdmVyc2lvbiA9IFwiMS4xMi4wXCI7XG5cbiAgLy8gU2V0IHRoZSBkZWZhdWx0IGdsb2JhbCBvcHRpb25zXG4gIFRvYXN0aWZ5LmRlZmF1bHRzID0ge1xuICAgIG9sZGVzdEZpcnN0OiB0cnVlLFxuICAgIHRleHQ6IFwiVG9hc3RpZnkgaXMgYXdlc29tZSFcIixcbiAgICBub2RlOiB1bmRlZmluZWQsXG4gICAgZHVyYXRpb246IDMwMDAsXG4gICAgc2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgZGVzdGluYXRpb246IHVuZGVmaW5lZCxcbiAgICBuZXdXaW5kb3c6IGZhbHNlLFxuICAgIGNsb3NlOiBmYWxzZSxcbiAgICBncmF2aXR5OiBcInRvYXN0aWZ5LXRvcFwiLFxuICAgIHBvc2l0aW9uTGVmdDogZmFsc2UsXG4gICAgcG9zaXRpb246ICcnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJycsXG4gICAgYXZhdGFyOiBcIlwiLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICBzdG9wT25Gb2N1czogdHJ1ZSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBvZmZzZXQ6IHt4OiAwLCB5OiAwfSxcbiAgICBlc2NhcGVNYXJrdXA6IHRydWUsXG4gICAgYXJpYUxpdmU6ICdwb2xpdGUnLFxuICAgIHN0eWxlOiB7YmFja2dyb3VuZDogJyd9XG4gIH07XG5cbiAgLy8gRGVmaW5pbmcgdGhlIHByb3RvdHlwZSBvZiB0aGUgb2JqZWN0XG4gIFRvYXN0aWZ5LmxpYiA9IFRvYXN0aWZ5LnByb3RvdHlwZSA9IHtcbiAgICB0b2FzdGlmeTogdmVyc2lvbixcblxuICAgIGNvbnN0cnVjdG9yOiBUb2FzdGlmeSxcblxuICAgIC8vIEluaXRpYWxpemluZyB0aGUgb2JqZWN0IHdpdGggcmVxdWlyZWQgcGFyYW1ldGVyc1xuICAgIGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFZlcmlmeWluZyBhbmQgdmFsaWRhdGluZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGluZyB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuXG4gICAgICB0aGlzLnRvYXN0RWxlbWVudCA9IG51bGw7XG5cbiAgICAgIC8vIFZhbGlkYXRpbmcgdGhlIG9wdGlvbnNcbiAgICAgIHRoaXMub3B0aW9ucy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnRleHQ7IC8vIERpc3BsYXkgbWVzc2FnZVxuICAgICAgdGhpcy5vcHRpb25zLm5vZGUgPSBvcHRpb25zLm5vZGUgfHwgVG9hc3RpZnkuZGVmYXVsdHMubm9kZTsgIC8vIERpc3BsYXkgY29udGVudCBhcyBub2RlXG4gICAgICB0aGlzLm9wdGlvbnMuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uID09PSAwID8gMCA6IG9wdGlvbnMuZHVyYXRpb24gfHwgVG9hc3RpZnkuZGVmYXVsdHMuZHVyYXRpb247IC8vIERpc3BsYXkgZHVyYXRpb25cbiAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgVG9hc3RpZnkuZGVmYXVsdHMuc2VsZWN0b3I7IC8vIFBhcmVudCBzZWxlY3RvclxuICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjayB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jYWxsYmFjazsgLy8gQ2FsbGJhY2sgYWZ0ZXIgZGlzcGxheVxuICAgICAgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uID0gb3B0aW9ucy5kZXN0aW5hdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5kZXN0aW5hdGlvbjsgLy8gT24tY2xpY2sgZGVzdGluYXRpb25cbiAgICAgIHRoaXMub3B0aW9ucy5uZXdXaW5kb3cgPSBvcHRpb25zLm5ld1dpbmRvdyB8fCBUb2FzdGlmeS5kZWZhdWx0cy5uZXdXaW5kb3c7IC8vIE9wZW4gZGVzdGluYXRpb24gaW4gbmV3IHdpbmRvd1xuICAgICAgdGhpcy5vcHRpb25zLmNsb3NlID0gb3B0aW9ucy5jbG9zZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jbG9zZTsgLy8gU2hvdyB0b2FzdCBjbG9zZSBpY29uXG4gICAgICB0aGlzLm9wdGlvbnMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eSA9PT0gXCJib3R0b21cIiA/IFwidG9hc3RpZnktYm90dG9tXCIgOiBUb2FzdGlmeS5kZWZhdWx0cy5ncmF2aXR5OyAvLyB0b2FzdCBwb3NpdGlvbiAtIHRvcCBvciBib3R0b21cbiAgICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbkxlZnQgPSBvcHRpb25zLnBvc2l0aW9uTGVmdCB8fCBUb2FzdGlmeS5kZWZhdWx0cy5wb3NpdGlvbkxlZnQ7IC8vIHRvYXN0IHBvc2l0aW9uIC0gbGVmdCBvciByaWdodFxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uID0gb3B0aW9ucy5wb3NpdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5wb3NpdGlvbjsgLy8gdG9hc3QgcG9zaXRpb24gLSBsZWZ0IG9yIHJpZ2h0XG4gICAgICB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgVG9hc3RpZnkuZGVmYXVsdHMuYmFja2dyb3VuZENvbG9yOyAvLyB0b2FzdCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICB0aGlzLm9wdGlvbnMuYXZhdGFyID0gb3B0aW9ucy5hdmF0YXIgfHwgVG9hc3RpZnkuZGVmYXVsdHMuYXZhdGFyOyAvLyBpbWcgZWxlbWVudCBzcmMgLSB1cmwgb3IgYSBwYXRoXG4gICAgICB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgfHwgVG9hc3RpZnkuZGVmYXVsdHMuY2xhc3NOYW1lOyAvLyBhZGRpdGlvbmFsIGNsYXNzIG5hbWVzIGZvciB0aGUgdG9hc3RcbiAgICAgIHRoaXMub3B0aW9ucy5zdG9wT25Gb2N1cyA9IG9wdGlvbnMuc3RvcE9uRm9jdXMgPT09IHVuZGVmaW5lZCA/IFRvYXN0aWZ5LmRlZmF1bHRzLnN0b3BPbkZvY3VzIDogb3B0aW9ucy5zdG9wT25Gb2N1czsgLy8gc3RvcCB0aW1lb3V0IG9uIGZvY3VzXG4gICAgICB0aGlzLm9wdGlvbnMub25DbGljayA9IG9wdGlvbnMub25DbGljayB8fCBUb2FzdGlmeS5kZWZhdWx0cy5vbkNsaWNrOyAvLyBDYWxsYmFjayBhZnRlciBjbGlja1xuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCA9IG9wdGlvbnMub2Zmc2V0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm9mZnNldDsgLy8gdG9hc3Qgb2Zmc2V0XG4gICAgICB0aGlzLm9wdGlvbnMuZXNjYXBlTWFya3VwID0gb3B0aW9ucy5lc2NhcGVNYXJrdXAgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZXNjYXBlTWFya3VwIDogVG9hc3RpZnkuZGVmYXVsdHMuZXNjYXBlTWFya3VwO1xuICAgICAgdGhpcy5vcHRpb25zLmFyaWFMaXZlID0gb3B0aW9ucy5hcmlhTGl2ZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5hcmlhTGl2ZTtcbiAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IG9wdGlvbnMuc3R5bGUgfHwgVG9hc3RpZnkuZGVmYXVsdHMuc3R5bGU7XG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5pbmcgdGhlIGN1cnJlbnQgb2JqZWN0IGZvciBjaGFpbmluZyBmdW5jdGlvbnNcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBCdWlsZGluZyB0aGUgRE9NIGVsZW1lbnRcbiAgICBidWlsZFRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFZhbGlkYXRpbmcgaWYgdGhlIG9wdGlvbnMgYXJlIGRlZmluZWRcbiAgICAgIGlmICghdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRocm93IFwiVG9hc3RpZnkgaXMgbm90IGluaXRpYWxpemVkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBET00gb2JqZWN0XG4gICAgICB2YXIgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9IFwidG9hc3RpZnkgb24gXCIgKyB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lO1xuXG4gICAgICAvLyBQb3NpdGlvbmluZyB0b2FzdCB0byBsZWZ0IG9yIHJpZ2h0IG9yIGNlbnRlclxuICAgICAgaWYgKCEhdGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIHRvYXN0aWZ5LVwiICsgdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG8gYmUgZGVwcmVjaWF0ZWQgaW4gZnVydGhlciB2ZXJzaW9uc1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIHRvYXN0aWZ5LWxlZnRcIjtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3BlcnR5IGBwb3NpdGlvbkxlZnRgIHdpbGwgYmUgZGVwcmVjaWF0ZWQgaW4gZnVydGhlciB2ZXJzaW9ucy4gUGxlYXNlIHVzZSBgcG9zaXRpb25gIGluc3RlYWQuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHBvc2l0aW9uXG4gICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktcmlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBc3NpZ25pbmcgZ3Jhdml0eSBvZiBlbGVtZW50XG4gICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMub3B0aW9ucy5ncmF2aXR5O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAvLyBUaGlzIGlzIGJlaW5nIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgdXNpbmcgdGhlIHN0eWxlIEhUTUwgRE9NIHByb3BlcnR5XG4gICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRJT04gTk9USUNFOiBcImJhY2tncm91bmRDb2xvclwiIGlzIGJlaW5nIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdGhlIFwic3R5bGUuYmFja2dyb3VuZFwiIHByb3BlcnR5LicpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggb3VyIHN0eWxlIG9iamVjdCBhbmQgYXBwbHkgc3R5bGVzIHRvIGRpdkVsZW1lbnRcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMub3B0aW9ucy5zdHlsZSkge1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHRoaXMub3B0aW9ucy5zdHlsZVtwcm9wZXJ0eV07XG4gICAgICB9XG5cbiAgICAgIC8vIEFubm91bmNlIHRoZSB0b2FzdCB0byBzY3JlZW4gcmVhZGVyc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hcmlhTGl2ZSkge1xuICAgICAgICBkaXZFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgdGhpcy5vcHRpb25zLmFyaWFMaXZlKVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgdGhlIHRvYXN0IG1lc3NhZ2Uvbm9kZVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub2RlICYmIHRoaXMub3B0aW9ucy5ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgbm9kZSwgd2UgaW5zZXJ0IGl0XG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5vcHRpb25zLm5vZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVzY2FwZU1hcmt1cCkge1xuICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5vcHRpb25zLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXZhdGFyICE9PSBcIlwiKSB7XG4gICAgICAgICAgdmFyIGF2YXRhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGF2YXRhckVsZW1lbnQuc3JjID0gdGhpcy5vcHRpb25zLmF2YXRhcjtcblxuICAgICAgICAgIGF2YXRhckVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdGlmeS1hdmF0YXJcIjtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgfHwgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIGxlZnQgb2YgY29udGVudFxuICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChhdmF0YXJFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBhdmF0YXJFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIGEgY2xvc2UgaWNvbiB0byB0aGUgdG9hc3RcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2UgPT09IHRydWUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgY2xvc2UgZWxlbWVudFxuICAgICAgICB2YXIgY2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VFbGVtZW50LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBjbG9zZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xuICAgICAgICBjbG9zZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdC1jbG9zZVwiO1xuICAgICAgICBjbG9zZUVsZW1lbnQuaW5uZXJIVE1MID0gXCImIzEwMDA2O1wiO1xuXG4gICAgICAgIC8vIFRyaWdnZXJpbmcgdGhlIHJlbW92YWwgb2YgdG9hc3QgZnJvbSBET00gb24gY2xvc2UgY2xpY2tcbiAgICAgICAgY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9DYWxjdWxhdGluZyBzY3JlZW4gd2lkdGhcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPiAwID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XG5cbiAgICAgICAgLy8gQWRkaW5nIHRoZSBjbG9zZSBpY29uIHRvIHRoZSB0b2FzdCBlbGVtZW50XG4gICAgICAgIC8vIERpc3BsYXkgb24gdGhlIHJpZ2h0IGlmIHNjcmVlbiB3aWR0aCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHhcbiAgICAgICAgaWYgKCh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgfHwgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkgJiYgd2lkdGggPiAzNjApIHtcbiAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgbGVmdCBvZiBjb250ZW50XG4gICAgICAgICAgZGl2RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNsb3NlRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGNsb3NlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgdGltZW91dCB3aGlsZSB0b2FzdCBpcyBmb2N1c2VkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0b3BPbkZvY3VzICYmIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyBzdG9wIGNvdW50ZG93blxuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJtb3VzZW92ZXJcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChkaXZFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC8vIGFkZCBiYWNrIHRoZSB0aW1lb3V0XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlbGVhdmVcIixcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpdkVsZW1lbnQudGltZU91dFZhbHVlID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUVsZW1lbnQoZGl2RWxlbWVudCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgYW4gb24tY2xpY2sgZGVzdGluYXRpb24gcGF0aFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5ld1dpbmRvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24sIFwiX2JsYW5rXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrKCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBvZmZzZXRcbiAgICAgIGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMub2Zmc2V0ID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgdmFyIHggPSBnZXRBeGlzT2Zmc2V0QVZhbHVlKFwieFwiLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB2YXIgeSA9IGdldEF4aXNPZmZzZXRBVmFsdWUoXCJ5XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHhPZmZzZXQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgPyB4IDogXCItXCIgKyB4O1xuICAgICAgICB2YXIgeU9mZnNldCA9IHRoaXMub3B0aW9ucy5ncmF2aXR5ID09IFwidG9hc3RpZnktdG9wXCIgPyB5IDogXCItXCIgKyB5O1xuXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4T2Zmc2V0ICsgXCIsXCIgKyB5T2Zmc2V0ICsgXCIpXCI7XG5cbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuaW5nIHRoZSBnZW5lcmF0ZWQgZWxlbWVudFxuICAgICAgcmV0dXJuIGRpdkVsZW1lbnQ7XG4gICAgfSxcblxuICAgIC8vIERpc3BsYXlpbmcgdGhlIHRvYXN0XG4gICAgc2hvd1RvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIENyZWF0aW5nIHRoZSBET00gb2JqZWN0IGZvciB0aGUgdG9hc3RcbiAgICAgIHRoaXMudG9hc3RFbGVtZW50ID0gdGhpcy5idWlsZFRvYXN0KCk7XG5cbiAgICAgIC8vIEdldHRpbmcgdGhlIHJvb3QgZWxlbWVudCB0byB3aXRoIHRoZSB0b2FzdCBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgdmFyIHJvb3RFbGVtZW50O1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCAodHlwZW9mIFNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnICYmIHRoaXMub3B0aW9ucy5zZWxlY3RvciBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpKSB7XG4gICAgICAgIHJvb3RFbGVtZW50ID0gdGhpcy5vcHRpb25zLnNlbGVjdG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgfVxuXG4gICAgICAvLyBWYWxpZGF0aW5nIGlmIHJvb3QgZWxlbWVudCBpcyBwcmVzZW50IGluIERPTVxuICAgICAgaWYgKCFyb290RWxlbWVudCkge1xuICAgICAgICB0aHJvdyBcIlJvb3QgZWxlbWVudCBpcyBub3QgZGVmaW5lZFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgdGhlIERPTSBlbGVtZW50XG4gICAgICB2YXIgZWxlbWVudFRvSW5zZXJ0ID0gVG9hc3RpZnkuZGVmYXVsdHMub2xkZXN0Rmlyc3QgPyByb290RWxlbWVudC5maXJzdENoaWxkIDogcm9vdEVsZW1lbnQubGFzdENoaWxkO1xuICAgICAgcm9vdEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMudG9hc3RFbGVtZW50LCBlbGVtZW50VG9JbnNlcnQpO1xuXG4gICAgICAvLyBSZXBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgaW4gY2FzZSBtdWx0aXBsZSB0b2FzdHMgYXJlIHByZXNlbnRcbiAgICAgIFRvYXN0aWZ5LnJlcG9zaXRpb24oKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRvYXN0IGZyb20gRE9NXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgKTsgLy8gQmluZGluZyBgdGhpc2AgZm9yIGZ1bmN0aW9uIGludm9jYXRpb25cbiAgICAgIH1cblxuICAgICAgLy8gU3VwcG9ydGluZyBmdW5jdGlvbiBjaGFpbmluZ1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGhpZGVUb2FzdDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZpbmcgdGhlIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgcmVtb3ZlRWxlbWVudDogZnVuY3Rpb24odG9hc3RFbGVtZW50KSB7XG4gICAgICAvLyBIaWRpbmcgdGhlIGVsZW1lbnRcbiAgICAgIC8vIHRvYXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwib25cIik7XG4gICAgICB0b2FzdEVsZW1lbnQuY2xhc3NOYW1lID0gdG9hc3RFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFwiIG9uXCIsIFwiXCIpO1xuXG4gICAgICAvLyBSZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIERPTSBhZnRlciB0cmFuc2l0aW9uIGVuZFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25zIG5vZGUgaWYgYW55XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub2RlICYmIHRoaXMub3B0aW9ucy5ub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5vcHRpb25zLm5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIHRoZSBET00sIG9ubHkgd2hlbiB0aGUgcGFyZW50IG5vZGUgd2FzIG5vdCByZW1vdmVkIGJlZm9yZS5cbiAgICAgICAgICBpZiAodG9hc3RFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRvYXN0RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbGluZyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2suY2FsbCh0b2FzdEVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gUmVwb3NpdGlvbmluZyB0aGUgdG9hc3RzIGFnYWluXG4gICAgICAgICAgVG9hc3RpZnkucmVwb3NpdGlvbigpO1xuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgIDQwMFxuICAgICAgKTsgLy8gQmluZGluZyBgdGhpc2AgZm9yIGZ1bmN0aW9uIGludm9jYXRpb25cbiAgICB9LFxuICB9O1xuXG4gIC8vIFBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgb24gdGhlIERPTVxuICBUb2FzdGlmeS5yZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBUb3AgbWFyZ2lucyB3aXRoIGdyYXZpdHlcbiAgICB2YXIgdG9wTGVmdE9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuICAgIHZhciB0b3BSaWdodE9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuICAgIHZhciBvZmZzZXRTaXplID0ge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIGJvdHRvbTogMTUsXG4gICAgfTtcblxuICAgIC8vIEdldCBhbGwgdG9hc3QgbWVzc2FnZXMgb24gdGhlIERPTVxuICAgIHZhciBhbGxUb2FzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9hc3RpZnlcIik7XG5cbiAgICB2YXIgY2xhc3NVc2VkO1xuXG4gICAgLy8gTW9kaWZ5aW5nIHRoZSBwb3NpdGlvbiBvZiBlYWNoIHRvYXN0IGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbFRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0dGluZyB0aGUgYXBwbGllZCBncmF2aXR5XG4gICAgICBpZiAoY29udGFpbnNDbGFzcyhhbGxUb2FzdHNbaV0sIFwidG9hc3RpZnktdG9wXCIpID09PSB0cnVlKSB7XG4gICAgICAgIGNsYXNzVXNlZCA9IFwidG9hc3RpZnktdG9wXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc1VzZWQgPSBcInRvYXN0aWZ5LWJvdHRvbVwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVpZ2h0ID0gYWxsVG9hc3RzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIGNsYXNzVXNlZCA9IGNsYXNzVXNlZC5zdWJzdHIoOSwgY2xhc3NVc2VkLmxlbmd0aC0xKVxuICAgICAgLy8gU3BhY2luZyBiZXR3ZWVuIHRvYXN0c1xuICAgICAgdmFyIG9mZnNldCA9IDE1O1xuXG4gICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aDtcblxuICAgICAgLy8gU2hvdyB0b2FzdCBpbiBjZW50ZXIgaWYgc2NyZWVuIHdpdGggbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDM2MHB4XG4gICAgICBpZiAod2lkdGggPD0gMzYwKSB7XG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBvc2l0aW9uXG4gICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgIG9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29udGFpbnNDbGFzcyhhbGxUb2FzdHNbaV0sIFwidG9hc3RpZnktbGVmdFwiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHBvc2l0aW9uXG4gICAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgICAgdG9wTGVmdE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IHRvcFJpZ2h0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgICAgdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydGluZyBmdW5jdGlvbiBjaGFpbmluZ1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgb2Zmc2V0LlxuICBmdW5jdGlvbiBnZXRBeGlzT2Zmc2V0QVZhbHVlKGF4aXMsIG9wdGlvbnMpIHtcblxuICAgIGlmKG9wdGlvbnMub2Zmc2V0W2F4aXNdKSB7XG4gICAgICBpZihpc05hTihvcHRpb25zLm9mZnNldFtheGlzXSkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub2Zmc2V0W2F4aXNdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm9mZnNldFtheGlzXSArICdweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcwcHgnO1xuXG4gIH1cblxuICBmdW5jdGlvbiBjb250YWluc0NsYXNzKGVsZW0sIHlvdXJDbGFzcykge1xuICAgIGlmICghZWxlbSB8fCB0eXBlb2YgeW91ckNsYXNzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGVsZW0uY2xhc3NOYW1lICYmXG4gICAgICBlbGVtLmNsYXNzTmFtZVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgvXFxzKy9naSlcbiAgICAgICAgLmluZGV4T2YoeW91ckNsYXNzKSA+IC0xXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldHRpbmcgdXAgdGhlIHByb3RvdHlwZSBmb3IgdGhlIGluaXQgb2JqZWN0XG4gIFRvYXN0aWZ5LmxpYi5pbml0LnByb3RvdHlwZSA9IFRvYXN0aWZ5LmxpYjtcblxuICAvLyBSZXR1cm5pbmcgdGhlIFRvYXN0aWZ5IGZ1bmN0aW9uIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSB3aW5kb3cgb2JqZWN0L21vZHVsZVxuICByZXR1cm4gVG9hc3RpZnk7XG59KTtcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5mdW5jdGlvbiBjaGVja0JvdW5kYXJ5KG5ld1gsIG5ld1ksIG5ld0FsaWduLCBsZW5ndGgpIHtcblxuICAgIC8vIElmIHggaXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIDkgdGhlbiB0aHJvdyBhbiBlcnJvci5cbiAgICBpZihuZXdYIDwgMCkge1xuICAgICAgICBlcnJvckhhbmRsZXIoXCJYIGNhbm5vdCBiZSB1bmRlciB6ZXJvXCIpO1xuICAgICAgICB0aHJvdyhcIlggVW5kZXIgMFwiKTtcbiAgICB9IGVsc2UgaWYobmV3WCA+IDkpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKFwiWCBjYW5ub3QgYmUgaGlnaGVyIHRoYW4gbmluZVwiKTtcbiAgICAgICAgdGhyb3coXCJYIG92ZXIgOVwiKTtcbiAgICB9XG5cbiAgICBpZihuZXdZIDwgMCkge1xuICAgICAgICBlcnJvckhhbmRsZXIoXCJZIGNhbm5vdCBiZSB1bmRlciB6ZXJvXCIpXG4gICAgICAgIHRocm93KFwiWSB1bmRlciAwXCIpO1xuICAgIH0gZWxzZSBpZihuZXdZID4gOSkge1xuICAgICAgICBlcnJvckhhbmRsZXIoXCJZIGNhbm5vdCBiZSBoaWdoZXIgdGhhbiA5XCIpXG4gICAgICAgIHRocm93KFwiWSAgb3ZlciA5XCIpO1xuICAgIH1cblxuICAgIC8vIElmIGJvdW5kYXJ5IGNvbmRpdGlvbnMgbWV0IGFuZCBsZW5naHQgaXMgMSB0aGVuIHJldHVybiAxLlxuICAgIGlmKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgYmFzZWQgb24gYWxpZ25tZW50LlxuICAgIGlmKG5ld0FsaWduID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgaWYobGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBpZihuZXdZID09PSA5KSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKFwiMiBsZW5ndGggdmVydGljYWwgc2hpcCBjYW5ub3QgYmUgcGxhY2VkICYgeT05XCIpO1xuICAgICAgICAgICAgICAgIHRocm93KFwiVmVydGljYWwgMiBMZW5ndGggQm91bmRhcnk6IFkgQCA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYobGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZihuZXdZID09PSA4IHx8IG5ld1kgPT09IDkpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIoXCJWZXJ0aWNhbCAzIGxlbmd0aCBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgQCB5PThcIik7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJWZXJ0aWNhbCAzIGxlbmd0aCBCb3VuZGFyeTogWSBAIDggb3IgOSBlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgZnJvbSBvdXIgc2lkZS4gU29ycnkgOilcIik7XG4gICAgICAgICAgICB0aHJvdyhcIlNoaXAgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKG5ld0FsaWduID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBpZihsZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGlmKG5ld1ggPT09IDkpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIoXCJIb3Jpem9udGFsIDIgbGVuZ3RoIHNoaXAgY2Fubm90IGJlIHBsYWNlZCBAIHg9OVwiKTtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkhvcml6b250YWwgMiBsZW5ndGggQm91bmRhcnk6IFggQCA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiggbGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZihuZXdYID09PSA4IHx8IG5ld1ggPT09IDkpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIoXCJIb3Jpem9udGFsIDMgbGVuZ3RoIHNoaXAgY2Fubm90IGJlIHBsYWNlZCBAIHg9OCBvciB4PTlcIik7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJIb3Jpem9udGFsIDMgbGVuZ3RoIEJvdW5kYXJ5OiBYIEAgOCBvciA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIoXCJTb21ldGhpbmcgd2VudCB3cm9uZyBmcm9tIG91ciBzaWRlLiBTb3JyeSA6KVwiKTtcbiAgICAgICAgICAgIHRocm93KFwiU2hpcCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDNcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckhhbmRsZXIoXCJUaGUgYWxpZ25tZW50IHByb3ZpZGVkIGlzIHdyb25nXCIpO1xuICAgICAgICB0aHJvdyhcIkFsaWdubWVudCBlcnJvciA6IFdyaXRlIHRoZSBjb3JyZWN0IG5ldyBhbGlnbm1lbnRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja0JvdW5kYXJ5OyB7XG5cbn0iLCIvLyBDaGVja3Mgd2hldGhlciB0aGUgbmV3IHggYW5kIG5ldyB5IGFyZSBvY2N1cGllZCBieSBhbm90aGVyIHNoaXAuXG5pbXBvcnQgZ2V0U2hpcENvcmRzIGZyb20gXCIuL2dldFNoaXBDb3Jkc1wiO1xuXG4vLyBSZXR1cm5zIDEgaWYgYW55IG9uZSBlbGVtZW50IGZyb20gZXhwZWN0Q29yZHMgZXhpc3RzIGluIG9jY3VwaWVkQ29yZHNcbmZ1bmN0aW9uIGNoZWNrU2hpcENvbmZsaWN0KG5ld1gsbmV3WSxuZXdBbGlnbiwgbGVuZ3RoLCBvY2N1cGllZENvcmRzKSB7XG5cbiAgICAvLyBHZXQgdGhlIGV4cGVjdGVkIGNvb3JkaW5hdGVzIHRoYXQgdGhlIHNoaXAgd2lsbCBjb25zdW1lLlxuICAgIGNvbnN0IGV4cGVjdGVkQ29yZHMgPSBnZXRTaGlwQ29yZHMobmV3WCxuZXdZLG5ld0FsaWduLGxlbmd0aCk7XG5cbiAgICAvLyBJZiB0aGUgZXhwZWN0ZWQgY29vcmRpbmF0ZXMgYXJlIGFscmVhZHkgb2NjdXBpZWQgYnkgc29tZXRoaW5nIHRoZW4gcmV0dXJuIDEsIGVsc2UgcmV0dXJuIDBcbiAgICByZXR1cm4gb2NjdXBpZWRDb3Jkcy5zb21lKGVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXhwZWN0ZWRDb3Jkcy5zb21lKGV4cGVjdGVkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0pID8gMSA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrU2hpcENvbmZsaWN0OyIsImltcG9ydCBnZXRDb2xvciBmcm9tIFwiLi9nZXRDb2xvclwiO1xuaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuL3VpL2VsZW1lbnQvZGl2R2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVIZWFkaW5nIGZyb20gXCIuL3VpL2VsZW1lbnQvaGVhZGluZ0dlblwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuLy8gQnVpbGRzIHRoZSBhY3RpdmUgcGxheWVyIGJvYXJkIGFuZCByZXR1cm5zLlxuZnVuY3Rpb24gYnVpbGRBY3RpdmVQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcbiAgICAvLyBHZW5lcmF0ZXMgZGl2IGZvciB0aGUgcGxheWVyIGJvYXJkLlxuICAgIGNvbnN0IGFjdGl2ZVBsYXllckJvYXJkID0gZ2VuZXJhdGVEaXYoXCJhY3RpdmUtcGxheWVyLWJvYXJkXCIpO1xuXG4gICAgLy8gRm9yIGxvb3AgZm9yIGFkZGluZyBlYWNoIGdyaWQgc3F1YXJlICg5eDkpXG4gICAgZm9yKGxldCBpPTE7IGk8MTA7IGkrKykge1xuICAgICAgICBmb3IobGV0IGo9MTtqPDEwO2orKykge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGVzIHRoZSBkaXYgZm9yIHRoZSBncmlkIHNxdWFyZS5cbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcImFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmVcIik7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopICYmIHBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICAvLyBDb2xvciB0aGUgc3F1YXJlIDogaWYgdGhlIHNoaXAgaXMgb2NjdXBpZWQgYW5kIGhpdCAtPiBnb2xkIGNvbG9yXG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNoaXAtaGl0LWdvbGQpXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZihwbGF5ZXIuZ2FtZWJvYXJkLmhpdFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29sb3IgdGhlIHNxdWFyZSA6IG1pc3NlZCBoaXQgLT4gYmxhY2tcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWlzc2VkLWhpdC1ibGFjaylcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICAvLyBDb2xvciB0aGUgc3F1YXJlIDogb25seSB0aGUgc2hpcCBpcyBwcmVzZW50IGJ1dCBub3QgaGl0IC0+IGdyYXkuXG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNldC1zaGlwLWdyYXkpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHBsYXllciBjbGlja3Mgb3duIGJvYXJkIC0+IGdpdmUgZXJyb3JcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihcIkNsaWNraW5nIG9uIHlvdXIgb3duIGJvYXJkIGlzIGZ1dGlsZS5cIilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmRzIHRoZSBncmlkIHNxdWFyZSB0byB0aGUgYm9hcmQuXG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGJvYXJkLlxuICAgIHJldHVybiBhY3RpdmVQbGF5ZXJCb2FyZDtcbn1cblxuLy8gQnVpbGRzIGFuZCByZXR1cm5zIHRoZSBvcHBvbmVudCBib2FyZC5cbmZ1bmN0aW9uIGJ1aWxkT3BwUGxheWVyQm9hcmQob3BwUGxheWVyKSB7XG5cbiAgICAvLyBHZW5lcmF0ZSBkaXYgdG8gaG9sZCB0aGUgb3BwIHBsYXllciBib2FyZC5cbiAgICBjb25zdCBvcHBQbGF5ZXJCb2FyZCA9IGdlbmVyYXRlRGl2KFwib3BwLXBsYXllci1ib2FyZFwiKTtcblxuICAgIC8vIEZvciBsb29wIGZvciBhZGRpbmcgZWFjaCBncmlkIHNxdWFyZSAoOXg5KVxuICAgIGZvcihsZXQgaT0xOyBpPDEwOyBpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTE7ajwxMDtqKyspIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlcyBhIGRpdiBmb3IgZWFjaCBncmlkIHNxdWFyZS5cbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcIm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgICAgICBpZihvcHBQbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikgJiYgb3BwUGxheWVyLmdhbWVib2FyZC5oaXRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzcXVhcmUgaGFzIGJlZW4gaGl0IGFuZCB3YXMgb2NjdXBpZWQgLT4gZ29sZFxuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaGlwLWhpdC1nb2xkKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc3F1YXJlIHdhcyBub3Qgb2NjdXBpZWQgYnV0IGhpdCAtPiBibGFja1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1taXNzZWQtaGl0LWJsYWNrKVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHNxdWFyZSB0byB0aGUgYm9hcmQuXG4gICAgICAgICAgICBvcHBQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgYm9hcmQuXG4gICAgcmV0dXJuIG9wcFBsYXllckJvYXJkO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVQbGF5ZXJTaWRlKHBsYXllcikge1xuICAgIC8vIENyZWF0ZXMgYW4gYWN0aXZlIHBsYXllciBkaXYuXG4gICAgY29uc3QgYWN0aXZlUGxheWVyU2lkZSA9IGdlbmVyYXRlRGl2KFwiYWN0aXZlLXBsYXllci1kaXZcIik7XG4gICAgYWN0aXZlUGxheWVyU2lkZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb2xvcihwbGF5ZXIuY29sb3IpO1xuXG4gICAgLy8gSGVhZGluZyBmb3IgdGhlIGFjdGl2ZSBwbGF5ZXIgd2l0aCB0aGVpciBuYW1lLlxuICAgIGNvbnN0IGFjdGl2ZVBsYXllckhlYWRpbmcgPSBnZW5lcmF0ZUhlYWRpbmcoXCJhY3RpdmUtcGxheWVyLWhlYWRpbmdcIik7XG4gICAgYWN0aXZlUGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSBCb2FyZGA7XG4gICAgYWN0aXZlUGxheWVyU2lkZS5hcHBlbmRDaGlsZChhY3RpdmVQbGF5ZXJIZWFkaW5nKTtcbiAgICBcbiAgICAvLyBHZW5lcmF0ZXMgYWN0aXZlIHBsYXllciBib2FyZC5cbiAgICBjb25zdCBhY3RpdmVQbGF5ZXJCb2FyZCA9IGJ1aWxkQWN0aXZlUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICBhY3RpdmVQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKGFjdGl2ZVBsYXllckJvYXJkKTtcblxuICAgIC8vIFJldHVybnMgdGhlIGFjdGl2ZSBwbGF5ZXIgYm9hcmQuXG4gICAgcmV0dXJuIGFjdGl2ZVBsYXllclNpZGU7XG59XG5cbmZ1bmN0aW9uIGdldE9wcFBsYXllclNpZGUob3BwUGxheWVyKSB7XG4gICAgLy8gQ3JlYXRlcyBkaXYgZm9yIG9wcG9uZW50IHNpZGUuXG4gICAgY29uc3Qgb3BwUGxheWVyU2lkZSA9IGdlbmVyYXRlRGl2KFwib3BwLXBsYXllci1kaXZcIik7XG4gICAgb3BwUGxheWVyU2lkZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb2xvcihvcHBQbGF5ZXIuY29sb3IpO1xuXG4gICAgLy8gSGVhZGluZyBmb3IgdGhlIG9wcG9uZW50IHBsYXllciB3aXRoIHRoaWVyIG5hbWVcbiAgICBjb25zdCBvcHBQbGF5ZXJIZWFkaW5nID0gZ2VuZXJhdGVIZWFkaW5nKFwib3BwLXBsYXllci1oZWFkaW5nXCIpO1xuICAgIG9wcFBsYXllckhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtvcHBQbGF5ZXIubmFtZX0gQm9hcmRgO1xuICAgIG9wcFBsYXllclNpZGUuYXBwZW5kQ2hpbGQob3BwUGxheWVySGVhZGluZyk7XG4gICAgXG4gICAgLy8gR2VuZXJhdGUgb3BwIHBsYXllciBib2FkLlxuICAgIGNvbnN0IG9wcFBsYXllckJvYXJkID0gYnVpbGRPcHBQbGF5ZXJCb2FyZChvcHBQbGF5ZXIpO1xuICAgIG9wcFBsYXllclNpZGUuYXBwZW5kQ2hpbGQob3BwUGxheWVyQm9hcmQpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBib2FyZC5cbiAgICByZXR1cm4gb3BwUGxheWVyU2lkZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllckJvYXJkKHBsYXllcixvcHBQbGF5ZXIpIHtcbiAgICAvLyBDcmVhdGUgYm9hcmQgZGlzcGxheVxuICAgIGNvbnN0IGJvYXJkRGl2ID0gZ2VuZXJhdGVEaXYoXCJib2FyZC1kaXZcIik7XG5cbiAgICAvLyBHZXQgdGhlIGFjdGl2ZSBhbmQgb3Bwb25lbnQgcGxheWVyIHNpZGUgYW5kIGFwcGVuZFxuICAgIGNvbnN0IGFjdGl2ZVBsYXllclNpZGUgPSBnZXRBY3RpdmVQbGF5ZXJTaWRlKHBsYXllcik7XG4gICAgY29uc3Qgb3BwUGxheWVyU2lkZSA9IGdldE9wcFBsYXllclNpZGUob3BwUGxheWVyKTtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChhY3RpdmVQbGF5ZXJTaWRlKTtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChvcHBQbGF5ZXJTaWRlKTtcbiAgICByZXR1cm4gYm9hcmREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQbGF5ZXJCb2FyZDsiLCJpbXBvcnQgVG9hc3RpZnkgZnJvbSBcInRvYXN0aWZ5LWpzXCI7XG5pbXBvcnQgXCJ0b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzXCI7XG5cbmZ1bmN0aW9uIGVycm9ySGFuZGxlcihtZXNzYWdlKSB7XG4gICAgVG9hc3RpZnkoe1xuICAgICAgICB0ZXh0IDogbWVzc2FnZSxcbiAgICAgICAgZHVyYXRpb24gOiAzMDAwLFxuICAgICAgICBncmF2aXR5OiAndG9wJyxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGNsb3NlIDogdHJ1ZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzBhMGEwYVwiLFxuICAgICAgICB9LFxuICAgIH0pLnNob3dUb2FzdCgpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxlcjsiLCJpbXBvcnQgZGlzcGxheVBsYXllckJvYXJkIGZyb20gXCIuL2Rpc3BsYXlCb2FyZFwiO1xuXG4vLyBHZXQgdGhlIG1haW4gY29udGFpbmVyXG5jb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbi8vIFJ1biB0aGUgZ2FtZSBsb29wLlxuZnVuY3Rpb24gZ2FtZUxvb3AoY3VyclBsYXllcixvcHBQbGF5ZXIsb25Db21wbGV0ZSkge1xuICAgIC8vIEVtcHR5IHRoZSBnYW1lIGxvb3AgYW5kIGFwcGVuZCB0aGUgbWFpbiBib2FyZC5cbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5UGxheWVyQm9hcmQoY3VyclBsYXllcixvcHBQbGF5ZXIpKTtcblxuICAgIC8vIElmIHRoZSBjdXJyZW50IHBsYXllciBpcyBDUFUuXG4gICAgaWYoY3VyclBsYXllci5uYW1lID09PSBcIkNQVVwiKSB7XG4gICAgICAgIC8vIEdldCByYW5kb20gY29vcmRpbmF0ZXMgdG8gYXR0YWNrIGFuZCBtYWtlIHN1cmUgdGhhdCB0aG9zZSBjb29yZGluYXRlcyBoYXZlIG5vdCBhbHJlYWR5IGJlZW4gYXR0YWNrZWQuXG4gICAgICAgIGxldCB0b0F0dGFja1gsdG9BdHRhY2tZO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0b0F0dGFja1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgICAgICB0b0F0dGFja1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgIH0gd2hpbGUgKG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZSgoW3gsIHldKSA9PiB4ID09PSB0b0F0dGFja1ggJiYgeSA9PT0gdG9BdHRhY2tZKSk7XG5cbiAgICAgICAgLy8gRG8gdGhlIGF0dGFja1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8gcmVjaWV2ZSBhdHRhY2sgb24gdGhlIG9wcG9uZW50IHBsYXllci5cbiAgICAgICAgICAgIG9wcFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0b0F0dGFja1gsdG9BdHRhY2tZKTtcblxuICAgICAgICAgICAgLy8gSWYgYWxsIG9mIHRoZW0gaGF2ZSBzdW5rIC0+IGdhbWUgb3ZlciBjb25kaXRpb24uXG4gICAgICAgICAgICBpZihvcHBQbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoY3VyclBsYXllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTd2l0Y2ggcGxheWVycy4gXG4gICAgICAgICAgICBjb25zdCBwMSA9IGN1cnJQbGF5ZXI7XG4gICAgICAgICAgICBjb25zdCBwMiA9IG9wcFBsYXllcjtcbiAgICAgICAgICAgIGdhbWVMb29wKHAyLHAxLG9uQ29tcGxldGUpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIC8vIElmIHRoZSBjdXJyZW50IHBsYXllciBpcyBhbnkgb3RoZXIgcGxheWVyIHRoZW4gd2UgbmVlZCB0byBnaXZlIGNoYW5jZSBmb3IgdGhlIHBsYXllci5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIEdldCB0aGUgb3Bwb25lbnQgcGxheWVyIGdyaWQgc3F1YXJlcyBhbmQgYWRkIHRoZSBldmVudCBsaXN0bmVyIGZvciBlYWNoLlxuICAgICAgICBjb25zdCBvcHBHcmlkU3F1YXJlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHAtcGxheWVyLWdyaWQtc3F1YXJlXCIpKTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTw5O2krKykge1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajw5O2orKykge1xuXG4gICAgICAgICAgICAgICAgb3BwR3JpZFNxdWFyZXNbKGkqOSkgKyBqXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHBQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSsxLGorMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wcFBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZShjdXJyUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwMSA9IGN1cnJQbGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwMiA9IG9wcFBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVMb29wKHAyLHAxLG9uQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYXkyUEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBnYW1lTG9vcChwbGF5ZXIxLHBsYXllcjIpO1xufVxuXG5cbmZ1bmN0aW9uIHBsYXlDUFVHYW1lKHBsYXllcjEsIENQVSxvbkNvbXBsZXRlKSB7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGdhbWVMb29wKHBsYXllcjEsQ1BVLG9uQ29tcGxldGUpO1xufVxuXG5leHBvcnQge3BsYXlDUFVHYW1lLHBsYXkyUEdhbWV9OyIsImltcG9ydCBuZXdTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjaGVja0JvdW5kYXJ5IGZyb20gXCIuL2NoZWNrQm91bmRhcnlcIjtcbmltcG9ydCBjaGVja1NoaXBDb25mbGljdCBmcm9tIFwiLi9jaGVja1NoaXBDb25mbGljdFwiO1xuaW1wb3J0IGdldFNoaXBDb3JkcyBmcm9tIFwiLi9nZXRTaGlwQ29yZHNcIjtcbmltcG9ydCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCBmcm9tIFwiLi9nZXRPY2N1cGllZENvcmRzRXhjZXB0VGFyZ2V0XCI7XG5pbXBvcnQgZ2V0SGl0U2hpcCBmcm9tIFwiLi9nZXRIaXRTaGlwXCI7XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRTcG90cyA9IFtdO1xuICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMgPSBbXTtcblxuICAgICAgICBjb25zdCBzaGlwMSA9IG5ld1NoaXAoMSwxLDEsXCJ2ZXJ0aWNhbFwiLFtdKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXAxKTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwMiA9IG5ld1NoaXAoMiw0LDQsXCJ2ZXJ0aWNhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwMik7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuXG4gICAgICAgIGNvbnN0IHNoaXAzID0gbmV3U2hpcCgyLDQsMixcImhvcml6b250YWxcIix0aGlzLm9jY3VwaWVkU3BvdHMpO1xuICAgICAgICB0aGlzLnVuc3Vua1NoaXBzLnB1c2goc2hpcDMpO1xuICAgICAgICB0aGlzLmdldE9jY3VwaWVkU3BvdHMoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNoaXA0ID0gbmV3U2hpcCgzLDcsNyxcInZlcnRpY2FsXCIsdGhpcy5vY2N1cGllZFNwb3RzKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXA0KTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG5cbiAgICAgICAgY29uc3Qgc2hpcDUgPSBuZXdTaGlwKDMsMSw5LFwiaG9yaXpvbnRhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwNSk7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuICAgIH1cblxuICAgIGdldE9jY3VwaWVkU3BvdHMoKSB7XG4gICAgICAgIHRoaXMub2NjdXBpZWRTcG90cyA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudW5zdW5rU2hpcHMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcENvcmRzID0gZ2V0U2hpcENvcmRzKFxuICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHNbaV0uaGVhZFgsXG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tpXS5oZWFkWSxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmFsaWdubWVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmxlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bmV3U2hpcENvcmRzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMucHVzaChuZXdTaGlwQ29yZHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBtb3ZlU2hpcChzaGlwTm8sbmV3WCxuZXdZKSB7XG4gICAgICAgIGxldCBzaGlwQWxpZ25tZW50ID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uYWxpZ25tZW50O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLmxlbmd0aDtcblxuICAgICAgICBpZihjaGVja0JvdW5kYXJ5KG5ld1gsbmV3WSxzaGlwQWxpZ25tZW50LHNoaXBMZW5ndGgpID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCByZW1TcG90cyA9IGdldE9jY3VwaWVkRXhjZXB0VGFyZ2V0KHRoaXMub2NjdXBpZWRTcG90cyx0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5zaGlwQ29yZHMpO1xuICAgICAgICAgICAgaWYoY2hlY2tTaGlwQ29uZmxpY3QobmV3WCxuZXdZLHNoaXBBbGlnbm1lbnQsc2hpcExlbmd0aCxyZW1TcG90cykgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS51cGRhdGVDb3JkcyhuZXdYLG5ld1ksc2hpcEFsaWdubWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiU2hpcCBDb25mbGljdCBFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiQ2hlY2sgYm91bmRhcnkgZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSb3RhdGUgc2hpcFxuICAgIHJvdGF0ZVNoaXAoc2hpcE5vLG5ld0FsaWduKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNoaXBYID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFg7XG4gICAgICAgIGNvbnN0IHNoaXBZID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFk7XG5cbiAgICAgICAgaWYoY2hlY2tCb3VuZGFyeShzaGlwWCxzaGlwWSxuZXdBbGlnbixzaGlwTGVuZ3RoKSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmVtU3BvdHMgPSBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCh0aGlzLm9jY3VwaWVkU3BvdHMsdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uc2hpcENvcmRzKTtcbiAgICAgICAgICAgIGlmKGNoZWNrU2hpcENvbmZsaWN0KHNoaXBYLHNoaXBZLG5ld0FsaWduLHNoaXBMZW5ndGgscmVtU3BvdHMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0udXBkYXRlQ29yZHMoc2hpcFgsIHNoaXBZLCBuZXdBbGlnbik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiUm90YXRlIFNoaXAgOiBTaGlwIGNvbmZsaWN0IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJSb3RhdGUgU2hpcCA6IENoZWNrIGJvdW5kYXJ5IGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjaWV2ZSBhdHRhY2tcbiAgICByZWNlaXZlQXR0YWNrKHRvQXR0YWNrWCwgdG9BdHRhY2tZKSB7XG4gICAgICAgIGlmKHRvQXR0YWNrWCA8IDAgfHwgdG9BdHRhY2tYID4gOSkge1xuICAgICAgICAgICAgdGhyb3coXCJBdHRhY2sgb3V0IG9mIGJvdW5kcyBYXCIpO1xuICAgICAgICB9IGVsc2UgaWYodG9BdHRhY2tZIDwgMCB8fCB0b0F0dGFja1kgPiA5KSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF0dGFjayBvdXQgb2YgYm91bmRzIFlcIilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5oaXRTcG90cy5zb21lKGVsZW1lbnQgPT4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09XG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbdG9BdHRhY2tYLHRvQXR0YWNrWV0pKSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQXR0YWNrIGNvb3JkaW5hdGUgYWxyZWFkeSBoaXRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGl0U3BvdHMucHVzaChbdG9BdHRhY2tYLHRvQXR0YWNrWV0pO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5vY2N1cGllZFNwb3RzLnNvbWUoZWxlbWVudCA9PiBKU09OLnN0cmluZ2lmeShlbGVtZW50KSA9PT1cbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt0b0F0dGFja1gsdG9BdHRhY2tZXSkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRvSGl0ID0gZ2V0SGl0U2hpcCh0aGlzLnVuc3Vua1NoaXBzLCB0b0F0dGFja1gsIHRvQXR0YWNrWSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwVG9IaXRdLmdldEhpdCgpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XS5pc1N1bmsoKT09PXRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW5rU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5zcGxpY2Uoc2hpcFRvSGl0LDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBpZih0aGlzLnVuc3Vua1NoaXBzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVCb2FyZDsiLCJmdW5jdGlvbiBnZXRDb2xvcihwbGF5ZXJDb2xvcikge1xuICAgIGlmKHBsYXllckNvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLXJlZClcIjtcbiAgICB9IGVsc2UgaWYocGxheWVyQ29sb3IgPT09IFwiYmx1ZVwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLWJsdWUpXCI7XG4gICAgfSBlbHNlIGlmKHBsYXllckNvbG9yID09PSBcImdyZWVuXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tbWFpbi1zY3JlZW4tZ3JlZW4pXCI7XG4gICAgfSBlbHNlIGlmKHBsYXllckNvbG9yID09PSBcInBpbmtcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1tYWluLXNjcmVlbi1waW5rKVwiXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2xvcjsiLCJmdW5jdGlvbiBnZXRIaXRTaGlwKHNoaXBBcnJheSwgdG9BdHRhY2tYLCB0b0F0dGFja1kpIHtcbiAgICBmb3IobGV0IGk9MDtpPHNoaXBBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0wO2o8c2hpcEFycmF5W2ldLnNoaXBDb3Jkcy5sZW5ndGg7aisrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShzaGlwQXJyYXlbaV0uc2hpcENvcmRzW2pdKSA9PT0gSlNPTi5zdHJpbmdpZnkoW3RvQXR0YWNrWCx0b0F0dGFja1ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SGl0U2hpcDsiLCJmdW5jdGlvbiBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldChhbGxPY2N1cGllZENvcmRzLHNoaXBDb3Jkcykge1xuICAgIGNvbnN0IHJlbVNwb3RzID0gYWxsT2NjdXBpZWRDb3Jkcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAhc2hpcENvcmRzLnNvbWUoc2hpcENvb3JkID0+XG4gICAgICAgICAgaXRlbS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBzaGlwQ29vcmRbaW5kZXhdKVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlbVNwb3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldDsiLCJmdW5jdGlvbiBnZXRTaGlwQ29yZHMoWCxZLGFsaWduLGxlbmd0aCkge1xuICAgIGxldCBvY2N1cGllZENvcmRzID0gW107XG4gICAgaWYoYWxpZ24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIG9jY3VwaWVkQ29yZHMucHVzaChbWCxZK2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihhbGlnbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBvY2N1cGllZENvcmRzLnB1c2goW1graSxZXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyhcIkdldFNoaXBDb3JkcyA6IEFsaWdubWVudCBlcnJvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXBpZWRDb3Jkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2hpcENvcmRzOyIsImZ1bmN0aW9uIG1vdmVDUFVTaGlwcyhDUFUsb25Db21wbGV0ZSkge1xuICAgIGZvcihsZXQgaT0wO2k8OTtpKyspIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U2hpcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICBjb25zdCBhY3Rpb25Ub1BlcmZvcm0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG5cbiAgICAgICAgaWYoYWN0aW9uVG9QZXJmb3JtID09PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRTaGlwLFwiTW92ZSBzaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVRvWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUb1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIENQVS5nYW1lYm9hcmQubW92ZVNoaXAodGFyZ2V0U2hpcCsxLG1vdmVUb1gsbW92ZVRvWSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihhY3Rpb25Ub1BlcmZvcm0gPT09IDIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYoQ1BVLmdhbWVib2FyZC51bnN1bmtTaGlwc1t0YXJnZXRTaGlwXS5hbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBDUFUuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAodGFyZ2V0U2hpcCsxLFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDUFUuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAodGFyZ2V0U2hpcCsxLFwidmVydGljYWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYob25Db21wbGV0ZSAmJiB0eXBlb2Ygb25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZlQ1BVU2hpcHM7IiwiaW1wb3J0IGdldENvbG9yIGZyb20gXCIuL2dldENvbG9yXCI7XG5pbXBvcnQgZ2V0SGl0U2hpcCBmcm9tIFwiLi9nZXRIaXRTaGlwXCI7XG5pbXBvcnQgZ2VuZXJhdGVCdXR0b24gZnJvbSBcIi4vdWkvZWxlbWVudC9idG5HZW5cIjtcbmltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi91aS9lbGVtZW50L2RpdkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi91aS9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtY29udGFpbmVyJyk7XG4gICAgZ2V0Qm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtb3ZlQm9hcmQgPSBnZW5lcmF0ZURpdihcIm1vdmUtYm9hcmRcIik7XG4gICAgZm9yKGxldCBpPTE7aTwxMDtpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTE7ajwxMDtqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcIm1vdmUtcGxheWVyLWdyaWQtc3F1YXJlXCIpO1xuICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNldC1zaGlwLWdyYXkpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBsb25nUHJlc3NUaW1lb3V0O1xuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBtb3VzZWRvd24gZXZlbnRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxvbmdQcmVzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYExvbmcgcHJlc3MgZGV0ZWN0ZWQgJHtpfSwke2p9YCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHByb21wdChcIkVudGVyIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgZm9ybWF0IHgseVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlcklucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHVzZXJJbnB1dC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzBdLnRyaW0oKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzFdLnRyaW0oKSwgMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSB1c2VyIGVudGVyZWQgJHt4fSwke3l9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZhbGlkIGNvb3JkaW5hdGVzIGVudGVyZWRgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRvTW92ZSA9IGdldEhpdFNoaXAocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyxpLGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcFRvTW92ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAoc2hpcFRvTW92ZSsxLHgseSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNhbmNlbGxlZCB0aGUgcHJvbXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUT0RPIC0gcm90YXRpbmcgc2hpcCBub3QgZG9uZVxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcEhpdCA9IGdldEhpdFNoaXAocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyxpLGopO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBIaXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHNbc2hpcEhpdF0uYWxpZ25tZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucm90YXRlU2hpcChzaGlwSGl0KzEsXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yb3RhdGVTaGlwKHNoaXBIaXQrMSxcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbW92ZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEJvYXJkLmFwcGVuZENoaWxkKG1vdmVCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIGdldEJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IG1vdmVCb2FyZCA9IGdlbmVyYXRlRGl2KFwibW92ZS1ib2FyZFwiKTtcbiAgICBmb3IobGV0IGk9MTtpPDEwO2krKykge1xuICAgICAgICBmb3IobGV0IGo9MTtqPDEwO2orKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGdlbmVyYXRlRGl2KFwibW92ZS1wbGF5ZXItZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2V0LXNoaXAtZ3JheSlcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvbmdQcmVzc1RpbWVvdXQ7XG4gICAgICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gb2YgdGhlIG1vdXNlZG93biBldmVudFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbG9uZ1ByZXNzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9uZyBwcmVzcyBkZXRlY3RlZCAke2l9LCR7an1gKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID0gcHJvbXB0KFwiRW50ZXIgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBmb3JtYXQgeCx5XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VySW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdXNlcklucHV0LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMF0udHJpbSgpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMV0udHJpbSgpLCAxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHVzZXIgZW50ZXJlZCAke3h9LCR7eX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgY29vcmRpbmF0ZXMgZW50ZXJlZGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwVG9Nb3ZlID0gZ2V0SGl0U2hpcChwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzLGksaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwVG9Nb3ZlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChzaGlwVG9Nb3ZlKzEseCx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY2FuY2VsbGVkIHRoZSBwcm9tcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVE9ETyAtIHJvdGF0aW5nIHNoaXAgbm90IGRvbmVcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBIaXQgPSBnZXRIaXRTaGlwKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHMsaSxqKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwSGl0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzW3NoaXBIaXRdLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAoc2hpcEhpdCsxLFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucm90YXRlU2hpcChzaGlwSGl0KzEsXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbW92ZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb3ZlQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIG1vdmVTaGlwKHBsYXllcixvbkNvbmZpcm0pIHtcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuXG4gICAgY29uc3QgbW92ZUNvbnRhaW5lciA9IGdlbmVyYXRlRGl2KFwibW92ZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgY29sb3JUb0FwcGx5ID0gZ2V0Q29sb3IocGxheWVyLmNvbG9yKTtcbiAgICBtb3ZlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVG9BcHBseTtcblxuICAgIGNvbnN0IG1vdmVIZWFkaW5nID0gZ2VuZXJhdGVIZWFkaW5nKFwibW92ZS1oZWFkaW5nXCIpO1xuICAgIG1vdmVIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IFNldCBZb3VyIEJvYXJkYDtcbiAgICBtb3ZlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVIZWFkaW5nKTtcblxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZ2VuZXJhdGVEaXYoXCJib2FyZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgYm9hcmQgPSBnZXRCb2FyZChwbGF5ZXIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICBtb3ZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBnZW5lcmF0ZUJ1dHRvbihcImNvbmZpcm0tYnV0dG9uXCIpO1xuICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVG9BcHBseTtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgaWYob25Db25maXJtICYmIHR5cGVvZiBvbkNvbmZpcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb25Db25maXJtKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIG1vdmVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgICBjb25zdCBoZWxwQ29udGFpbmVyID0gZ2VuZXJhdGVEaXYoXCJoZWxwLWNvbnRhaW5lclwiKTtcbiAgICBoZWxwQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDbGljayB0byByb3RhdGUsIExvbmcgcHJlc3MgYW5kIGVudGVyIGNvb3JkaW5hdGVzIHRvIG1vdmVcIjtcbiAgICBtb3ZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlbHBDb250YWluZXIpO1xuXG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlQ29udGFpbmVyKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZlU2hpcDsiLCJpbXBvcnQgbmV3R2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jbGFzcyBwbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ld0dhbWVCb2FyZCgpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yO1xuICAgIH1cblxuICAgIHNldENvbG9yKG5ld0NvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1BsYXllcihuYW1lLGNvbG9yKSB7XG4gICAgY29uc3QgY3JlYXRlZFBsYXllciA9IG5ldyBwbGF5ZXIobmFtZSxjb2xvcik7XG4gICAgcmV0dXJuIGNyZWF0ZWRQbGF5ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1BsYXllcjsiLCJpbXBvcnQgY2hlY2tCb3VuZGFyeSBmcm9tIFwiLi9jaGVja0JvdW5kYXJ5XCI7XG5pbXBvcnQgY2hlY2tTaGlwQ29uZmxpY3QgZnJvbSBcIi4vY2hlY2tTaGlwQ29uZmxpY3RcIjtcbmltcG9ydCBnZXRTaGlwQ29yZHMgZnJvbSBcIi4vZ2V0U2hpcENvcmRzXCI7XG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCxoZWFkWCxoZWFkWSxhbGlnbm1lbnQpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGVhZFggPSBoZWFkWDtcbiAgICAgICAgdGhpcy5oZWFkWSA9IGhlYWRZO1xuICAgICAgICB0aGlzLmFsaWdubWVudCA9IGFsaWdubWVudDtcbiAgICAgICAgdGhpcy5zaGlwQ29yZHMgPSBnZXRTaGlwQ29yZHModGhpcy5oZWFkWCx0aGlzLmhlYWRZLHRoaXMuYWxpZ25tZW50LHRoaXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjb29yZHNcbiAgICB1cGRhdGVDb3JkcyhuZXdIZWFkWCxuZXdIZWFkWSxuZXdBbGlnbikge1xuICAgICAgICB0aGlzLmhlYWRYID0gbmV3SGVhZFg7XG4gICAgICAgIHRoaXMuaGVhZFkgPSBuZXdIZWFkWTtcbiAgICAgICAgdGhpcy5hbGlnbm1lbnQgPSBuZXdBbGlnbjtcbiAgICAgICAgdGhpcy5zaGlwQ29yZHMgPSBnZXRTaGlwQ29yZHModGhpcy5oZWFkWCx0aGlzLmhlYWRZLHRoaXMuYWxpZ25tZW50LHRoaXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXdTaGlwKGxlbmd0aCxoZWFkWCxoZWFkWSxhbGlnbm1lbnQsb2NjdXBpZWRDb3Jkcykge1xuICAgIGlmKGxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhyb3coXCJTaGlwIGlzIHRvbyBzbWFsbFwiKTtcbiAgICB9XG4gICAgaWYobGVuZ3RoID4gMykge1xuICAgICAgICB0aHJvdyhcIlNoaXAgaXMgdG9vIGJpZ1wiKTtcbiAgICB9XG4gICAgaWYoY2hlY2tCb3VuZGFyeShoZWFkWCxoZWFkWSxhbGlnbm1lbnQsbGVuZ3RoKSAhPT0gMSkge1xuICAgICAgICB0aHJvdyhcIkJvdW5kYXJ5IGV4Y2VwdGlvblwiKTtcbiAgICB9XG4gICAgaWYoY2hlY2tTaGlwQ29uZmxpY3QoaGVhZFgsaGVhZFksYWxpZ25tZW50LGxlbmd0aCxvY2N1cGllZENvcmRzKSA9PT0gMSkge1xuICAgICAgICB0aHJvdyhcIlNoaXAgY29uZmxpY3QgZXJyb3JcIik7XG4gICAgfVxuICAgIGlmKChhbGlnbm1lbnQgIT09IFwidmVydGljYWxcIikgJiYgKGFsaWdubWVudCAhPT0gXCJob3Jpem9udGFsXCIpKSB7XG4gICAgICAgIHRocm93KFwiQWxpZ25tZW50IG11c3QgYmUgZWl0aGVyIHZlcnRpY2FsIG9yIGhvcml6b250YWxcIik7XG4gICAgfVxuICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChsZW5ndGgsIGhlYWRYLGhlYWRZLGFsaWdubWVudCk7XG4gICAgcmV0dXJuIG5ld1NoaXA7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3U2hpcDsiLCJmdW5jdGlvbiBnZW5lcmF0ZUJ1dHRvbihjbGFzc05hbWUsaWQpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgaWYoY2xhc3NOYW1lKSB7XG4gICAgICAgIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBpZihpZCkge1xuICAgICAgICBuZXdCdXR0b24uaWQgPSBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1dHRvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVCdXR0b247IiwiZnVuY3Rpb24gZ2VuZXJhdGVEaXYoY2xhc3NOYW1lLCBpZE5hbWUpIHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZihjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgaWYoaWROYW1lKSB7XG4gICAgICAgIG5ld0Rpdi5pZCA9IGlkTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Rpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEaXY7IiwiZnVuY3Rpb24gZ2VuZXJhdGVIZWFkaW5nKGNsYXNzTmFtZSwgaWQpIHtcbiAgICBjb25zdCBuZXdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgaWYoY2xhc3NOYW1lKSB7XG4gICAgICAgIG5ld0hlYWRpbmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gXG4gICAgaWYoaWQpIHtcbiAgICAgICAgbmV3SGVhZGluZy5pZCA9IGlkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3SGVhZGluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIZWFkaW5nOyIsImZ1bmN0aW9uIGdlbmVyYXRlTWF0ZXJpYWxJY29uKGljb25OYW1lLGZvbnRTaXplKSB7XG4gICAgY29uc3QgbmV3SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIG5ld0ljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xuICAgIG5ld0ljb24udGV4dENvbnRlbnQgPSBpY29uTmFtZTtcbiAgICBuZXdJY29uLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgcmV0dXJuIG5ld0ljb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWF0ZXJpYWxJY29uOyIsImltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi4vZWxlbWVudC9kaXZHZW5cIlxuaW1wb3J0IGdlbmVyYXRlQnV0dG9uIGZyb20gXCIuLi9lbGVtZW50L2J0bkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlTWF0ZXJpYWxJY29uIGZyb20gXCIuLi9lbGVtZW50L21hdGVyaWFsSWNvbkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi4vZWxlbWVudC9oZWFkaW5nR2VuXCI7XG5cbmZ1bmN0aW9uIGluaXRfbWFpbl9zY3JlZW5fZigpIHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBsZWZ0RGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLWxlZnQtZGl2XCIpO1xuICAgIGNvbnN0IGxlZnREaXZJY29uRGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLWxlZnQtaWNvbi1kaXZcIik7XG4gICAgY29uc3QgbGVmdERpdkljb24gPSBnZW5lcmF0ZU1hdGVyaWFsSWNvbihcImNvbXB1dGVyXCIsXCIyNDBweFwiKTtcbiAgICBsZWZ0RGl2SWNvbkRpdi5hcHBlbmRDaGlsZChsZWZ0RGl2SWNvbik7XG4gICAgY29uc3QgbGVmdERpdkhlYWQgPSBnZW5lcmF0ZUhlYWRpbmcoXCJtYWluLWxlZnQtaGVhZFwiKTtcbiAgICBsZWZ0RGl2SGVhZC50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXJcIjtcbiAgICBjb25zdCBsZWZ0RGl2QnV0dG9uID0gZ2VuZXJhdGVCdXR0b24oXCJtYWluLWxlZnQtYnV0dG9uXCIpO1xuICAgIGxlZnREaXZCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5zdCBDb21wdXRlclwiO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobGVmdERpdkljb25EaXYpO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobGVmdERpdkhlYWQpO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobGVmdERpdkJ1dHRvbik7XG5cbiAgICBjb25zdCByaWdodERpdiA9IGdlbmVyYXRlRGl2KFwibWFpbi1yaWdodC1kaXZcIik7XG4gICAgY29uc3QgcmlnaHREaXZJY29uRGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLXJpZ2h0LWljb24tZGl2XCIpO1xuICAgIGNvbnN0IHJpZ2h0RGl2SWNvbiA9IGdlbmVyYXRlTWF0ZXJpYWxJY29uKFwicGVyc29uXCIsXCIyNDBweFwiKTtcbiAgICByaWdodERpdkljb25EaXYuYXBwZW5kQ2hpbGQocmlnaHREaXZJY29uKTtcbiAgICBjb25zdCByaWdodERpdkhlYWQgPSBnZW5lcmF0ZUhlYWRpbmcoXCJtYWluLXJpZ2h0LWhlYWRcIik7XG4gICAgcmlnaHREaXZIZWFkLnRleHRDb250ZW50ID0gXCJQbGF5ZXJcIjtcbiAgICBjb25zdCByaWdodERpdkJ1dHRvbiA9IGdlbmVyYXRlQnV0dG9uKFwibWFpbi1yaWdodC1idXR0b25cIik7XG4gICAgcmlnaHREaXZCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW5zdCBhbm90aGVyIHBsYXllclwiO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2SWNvbkRpdik7XG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQocmlnaHREaXZIZWFkKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChyaWdodERpdkJ1dHRvbik7XG5cblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuICAgIHJldHVybiBjb250YWluZXJEaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfbWFpbl9zY3JlZW5fZjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBNYWluIHNjcmVlbiBhcHBlYXJzIGFsbG93aW5nIHRoZSB1c2VyIHRvIGNob29zZSBiZXR3ZWVuIGNvbXB1dGVyIG9yIHBsYXllciB2IHBsYXllciAtIERPTkUgXG4vLyBCYXNlZCBvbiB0aGUgdXNlcnMgY2hvaWNlIHRoZSBuZXh0IHNjcmVlbiBpcyBzaG93biB3aGVyZSB0aGUgdXNlciBvciB1c2VycyBjYW4gY2hvb3NlIHRoZWlyIG5hbWUgYW5kIGNvbG9yXG4vLyBPbmNlIHRoZSBzdGFydCBnYW1lIGJ1dHRvbiBpcyBwcmVzc2VkIHRoZSBnYW1lXG4vLyBMZXQgcGxheWVyIG9uZSBwbGFjZSB0aGVpciBzaGlwc1xuLy8gT25jZSB0aGUgcGxheWVyIG9uZSBpcyBkb25lIHBsYWNpbmcgdGhlaXIgc2hpcHNcbi8vIElmIGNvbXB1dGVyIC0+IGF1dG9tYXRlIHRoZSBwcm9jZXNzIG9mIHBsYWNpbmcgc2hpcHNcbi8vIElmIGFub3RoZXIgcGxheWVyIC0+IGxldCBwbGF5ZXIgdHdvIHBsYWNlIHRoZWlyIHNoaXBzLlxuLy8gQmVnaW4gdGhlIGdhbWUgbG9vcCB1bnRpbCBvbmUgb2YgdGhlIHBsYXllcnMgZ2FtZWJvYXJkcyBhbGwgc3VuayBmdW5jdGlvbiByZXR1cm5zIHRydWUuXG4vLyB3aGVuIHRoYXQgaGFwcGVucyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSBnYW1lIGFnYWluIGJ5IG1vc3RseSBtYWtpbmcgbmV3IHBsYXllcnNcblxuaW1wb3J0IGluaXRfbWFpbl9zY3JlZW5fZiBmcm9tIFwiLi91aS9zY3JlZW4vaW5pdF9tYWluX3NjcmVlblwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgcGxheUNQVUdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IG5ld1BsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBtb3ZlU2hpcCBmcm9tIFwiLi9tb3ZlU2hpcFwiO1xuaW1wb3J0IG1vdmVDUFVTaGlwcyBmcm9tIFwiLi9tb3ZlQ1BVU2hpcHNcIjtcbmltcG9ydCBnZW5lcmF0ZUhlYWRpbmcgZnJvbSBcIi4vdWkvZWxlbWVudC9oZWFkaW5nR2VuXCI7XG5pbXBvcnQgZ2V0Q29sb3IgZnJvbSBcIi4vZ2V0Q29sb3JcIjtcbmltcG9ydCBnZW5lcmF0ZUJ1dHRvbiBmcm9tIFwiLi91aS9lbGVtZW50L2J0bkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuL3VpL2VsZW1lbnQvZGl2R2VuXCI7XG5cbmNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gZGlzcGxheVdpbk1lc3NhZ2UocGxheWVyKSB7XG4gICAgaWYocGxheWVyKSB7XG4gICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29uc3Qgd2luQ29udGFpbmVyID0gZ2VuZXJhdGVEaXYoXCJ3aW4tY29udGFpbmVyXCIpO1xuICAgICAgICB3aW5Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0Q29sb3IocGxheWVyLmNvbG9yKTtcblxuICAgICAgICBjb25zdCB3aW5NZXNzYWdlID0gZ2VuZXJhdGVIZWFkaW5nKFwid2luLW1lc3NhZ2VcIik7XG4gICAgICAgIHdpbk1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0gaGFzIHdvbmA7XG4gICAgICAgIHdpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5NZXNzYWdlKTtcblxuICAgICAgICBjb25zdCB3aW5CdXR0b24gPSBnZW5lcmF0ZUJ1dHRvbihcIndpbi1idXR0b25cIik7XG4gICAgICAgIHdpbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb2xvcihwbGF5ZXIuY29sb3IpO1xuICAgICAgICB3aW5CdXR0b24udGV4dENvbnRlbnQgPSBgR28gQmFjayBIb21lYDtcbiAgICAgICAgd2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHByZWdhbWUpO1xuICAgICAgICB3aW5Db250YWluZXIuYXBwZW5kQ2hpbGQod2luQnV0dG9uKTtcblxuICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdpbkNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0X0NQVV9nYW1lKCkge1xuICAgIGNvbnN0IHBsYXllcjEgPSBuZXdQbGF5ZXIoXCJCaW5ndXNcIixcInBpbmtcIik7XG4gICAgY29uc3QgQ1BVID0gbmV3UGxheWVyKFwiQ1BVXCIsXCJibHVlXCIpO1xuXG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1vdmVTaGlwKHBsYXllcjEsKCkgPT4ge1xuICAgICAgICBtb3ZlQ1BVU2hpcHMoQ1BVLCgpID0+IHtcbiAgICAgICAgICAgIHBsYXlDUFVHYW1lKHBsYXllcjEsQ1BVLCh3aW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2luTWVzc2FnZSh3aW5uZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgXG4gICAgXG59XG5cbmZ1bmN0aW9uIGluaXRfcGxheWVyX2dhbWUoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IG5ld1BsYXllcihcIkJpbmd1c1wiLFwicGlua1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gbmV3UGxheWVyKFwiU3BvaW5ndXNcIixcImJsdWVcIik7XG5cbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbW92ZVNoaXAocGxheWVyMSwoKSA9PiB7XG4gICAgICAgIG1vdmVTaGlwKHBsYXllcjIsKCkgPT4ge1xuICAgICAgICAgICAgcGxheUNQVUdhbWUocGxheWVyMSxwbGF5ZXIyLCh3aW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2luTWVzc2FnZSh3aW5uZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZWdhbWUoKSB7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5pdF9tYWluX3NjcmVlbl9mKCkpO1xuICAgIGNvbnN0IG1haW5MZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWxlZnQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1haW5SaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1yaWdodC1idXR0b25cIik7XG5cbiAgICBtYWluTGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixpbml0X0NQVV9nYW1lKTtcbiAgICBtYWluUmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW5pdF9wbGF5ZXJfZ2FtZSk7XG59XG5cbnByZWdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=