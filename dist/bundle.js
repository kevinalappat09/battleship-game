/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
    flex-direction: column;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4BAA4B;IAC5B,6BAA6B;IAC7B,4BAA4B;;IAE5B,0BAA0B;IAC1B,sBAAsB;IACtB,sBAAsB;IACtB,mJAAmJ;AACvJ;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,wCAAwC;;IAExC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,yCAAyC;;IAEzC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB","sourcesContent":[":root {\n    --main-screen-red : #ef4444;\n    --main-screen-blue : #38bdf8;\n    --main-screen-green : #4ade80;\n    --main-screen-pink : #e879f9;\n\n    --missed-hit-black : black;\n    --ship-hit-gold : gold;\n    --set-ship-gray : gray;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    margin : 0;\n}\n\n.main-screen-container {\n    height: 100vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main-left-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-red);\n\n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.main-right-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-blue);\n    \n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.heading {\n    font-size: 64px;\n    font-weight: 700;\n}\n\n.button {\n    outline: none;\n    border: none;\n    padding: 16px;\n    font-weight: 700;\n    transition: 500ms;\n}\n\n.main-left-button {\n    background-color: var(--main-screen-red);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-right-button {\n    background-color: var(--main-screen-blue);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-left-button:hover {\n    background-color: black;\n    color : var(--main-screen-red);\n}\n\n.main-right-button:hover {\n    background-color: black;\n    color : var(--main-screen-blue);\n}\n\n.board-div {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n}\n\n.active-player-div {\n    display  :flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.opp-player-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.active-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.active-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.opp-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.opp-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.win-container {\n    height: 100vh;\n    width: 100%;\n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-container {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 32px;\n}\n\n.move-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    box-shadow: 0 0 0 1px #000;\n}\n\n.move-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.confirm-button {\n    border : 5px solid black;\n    font-weight: 700;\n    transition: 500ms;\n}\n\n.confirm-button:hover {\n    border: 5px solid #fafafa;\n    color: #fafafa;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/checkBoundary.js":
/*!******************************!*\
  !*** ./src/checkBoundary.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkBoundary(newX, newY, newAlign, length) {
    if(newX < 0) {
        throw("X Under 0");
    } else if(newX > 9) {
        throw("X over 9");
    }

    if(newY < 0) {
        throw("Y under 0");
    } else if(newY > 9) {
        throw("Y  over 9");
    }

    if(length === 1) {
        return 1;
    }
    
    if(newAlign === "vertical") {
        if(length === 2) {
            if(newY === 9) {
                throw("Vertical 2 Length Boundary: Y @ 9 error");
            } 
            return 1;
        } else if(length === 3) {
            if(newY === 8 || newY === 9) {
                throw("Vertical 3 length Boundary: Y @ 8 or 9 error");
            }
            return 1;
        } else {
            throw("Ship cannot be greater than 3");
        }
    } else if(newAlign === "horizontal") {
        if(length === 2) {
            if(newX === 9) {
                throw("Horizontal 2 length Boundary: X @ 9 error");
            }
            return 1;
        } else if( length === 3) {
            if(newX === 8 || newX === 9) {
                throw("Horizontal 3 length Boundary: X @ 8 or 9 error");
            }
            return 1;
        } else {
            throw("Ship cannot be greater than 3");
        }
    } else {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getShipCords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShipCords */ "./src/getShipCords.js");
// Checks whether the new x and new y are occupied by another ship.


// Returns 1 if any one element from expectCords exists in occupiedCords
function checkShipConflict(newX,newY,newAlign, length, occupiedCords) {
    const expectedCords = (0,_getShipCords__WEBPACK_IMPORTED_MODULE_0__["default"])(newX,newY,newAlign,length);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getColor */ "./src/getColor.js");
/* harmony import */ var _ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/element/divGen */ "./src/ui/element/divGen.js");
/* harmony import */ var _ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/element/headingGen */ "./src/ui/element/headingGen.js");




function buildActivePlayerBoard(player) {
    const activePlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("active-player-board");
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("active-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } else if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // add the event listener that gives errror if clicked
            gridSquare.addEventListener("click",() => {
                console.log("Clicking your own board now is futile :)");
            });
            activePlayerBoard.appendChild(gridSquare);
        }
    }
    return activePlayerBoard;
}

function buildOppPlayerBoard(oppPlayer) {
    const oppPlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-player-board");
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-player-grid-square");
            if(oppPlayer.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            }
            oppPlayerBoard.appendChild(gridSquare);
        }
    }
    return oppPlayerBoard;
}

function getActivePlayerSide(player) {
    const activePlayerSide = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("active-player-div");
    const activePlayerHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__["default"])("active-player-heading");
    activePlayerHeading.textContent = `${player.name} Board`;
    activePlayerSide.appendChild(activePlayerHeading);
    activePlayerSide.style.backgroundColor = (0,_getColor__WEBPACK_IMPORTED_MODULE_0__["default"])(player.color);
    const activePlayerBoard = buildActivePlayerBoard(player);
    activePlayerSide.appendChild(activePlayerBoard);
    return activePlayerSide;
}

function getOppPlayerSide(oppPlayer) {
    const oppPlayerSide = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-player-div");
    const oppPlayerHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__["default"])("opp-player-heading");
    oppPlayerHeading.textContent = `${oppPlayer.name} Board`;
    oppPlayerSide.appendChild(oppPlayerHeading);
    oppPlayerSide.style.backgroundColor = (0,_getColor__WEBPACK_IMPORTED_MODULE_0__["default"])(oppPlayer.color);
    const oppPlayerBoard = buildOppPlayerBoard(oppPlayer);
    oppPlayerSide.appendChild(oppPlayerBoard);
    return oppPlayerSide;
}

function displayPlayerBoard(player,oppPlayer) {
    const boardDiv = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__["default"])("board-div");
    const activePlayerSide = getActivePlayerSide(player);
    const oppPlayerSide = getOppPlayerSide(oppPlayer);
    boardDiv.appendChild(activePlayerSide);
    boardDiv.appendChild(oppPlayerSide);
    return boardDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPlayerBoard);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBoard */ "./src/displayBoard.js");
/* harmony import */ var _ui_element_divGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/element/divGen */ "./src/ui/element/divGen.js");
/* harmony import */ var _ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/element/headingGen */ "./src/ui/element/headingGen.js");




const bodyContainer = document.querySelector(".container");


function gameLoop(currPlayer,oppPlayer,onComplete) {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild((0,_displayBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(currPlayer,oppPlayer));

    if(currPlayer.name === "CPU") {
        let toAttackX,toAttackY;
        do {
            toAttackX = Math.floor(Math.random() * 9) + 1;
            toAttackY = Math.floor(Math.random() * 9) + 1;
        } while (oppPlayer.gameboard.hitSpots.some(([x, y]) => x === toAttackX && y === toAttackY));

        try {
            oppPlayer.gameboard.receiveAttack(toAttackX,toAttackY);

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
    } else {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playCPUGame);

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4RDtBQUN4QztBQUNXO0FBQ0E7QUFDQztBQUNRO0FBQ1k7QUFDcEI7QUFDZTtBQUNIOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOERBQVc7QUFDeEMsNkNBQTZDLHFEQUFROztBQUVyRCwyQkFBMkIsa0VBQWU7QUFDMUMsb0NBQW9DLGFBQWE7QUFDakQ7O0FBRUEsMEJBQTBCLDhEQUFjO0FBQ3hDLDBDQUEwQyxxREFBUTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCLGdCQUFnQixtREFBUzs7QUFFekI7QUFDQSxJQUFJLHFEQUFRO0FBQ1osUUFBUSx5REFBWTtBQUNwQixZQUFZLGlEQUFXO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCLG9CQUFvQixtREFBUzs7QUFFN0I7QUFDQSxJQUFJLHFEQUFRO0FBQ1osUUFBUSxxREFBUTtBQUNoQixZQUFZLGlEQUFXO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix1RUFBa0I7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jaGVja0JvdW5kYXJ5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jaGVja1NoaXBDb25mbGljdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZGlzcGxheUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2dldENvbG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRIaXRTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRPY2N1cGllZENvcmRzRXhjZXB0VGFyZ2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRTaGlwQ29yZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL21vdmVDUFVTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvbW92ZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvZWxlbWVudC9idG5HZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL2VsZW1lbnQvZGl2R2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9lbGVtZW50L2hlYWRpbmdHZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL2VsZW1lbnQvbWF0ZXJpYWxJY29uR2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9zY3JlZW4vaW5pdF9tYWluX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tc2NyZWVuLXJlZCA6ICNlZjQ0NDQ7XG4gICAgLS1tYWluLXNjcmVlbi1ibHVlIDogIzM4YmRmODtcbiAgICAtLW1haW4tc2NyZWVuLWdyZWVuIDogIzRhZGU4MDtcbiAgICAtLW1haW4tc2NyZWVuLXBpbmsgOiAjZTg3OWY5O1xuXG4gICAgLS1taXNzZWQtaGl0LWJsYWNrIDogYmxhY2s7XG4gICAgLS1zaGlwLWhpdC1nb2xkIDogZ29sZDtcbiAgICAtLXNldC1zaGlwLWdyYXkgOiBncmF5O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luIDogMDtcbn1cblxuLm1haW4tc2NyZWVuLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1sZWZ0LWRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcblxuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXAgOiAzMnB4O1xufVxuXG4ubWFpbi1yaWdodC1kaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xuICAgIFxuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXAgOiAzMnB4O1xufVxuXG4uaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcbn1cblxuLm1haW4tbGVmdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLXJlZCk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWFpbi1yaWdodC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1haW4tbGVmdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcbn1cblxuLm1haW4tcmlnaHQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvciA6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xufVxuXG4uYm9hcmQtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hY3RpdmUtcGxheWVyLWRpdiB7XG4gICAgZGlzcGxheSAgOmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoIDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm9wcC1wbGF5ZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aCA6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hY3RpdmUtcGxheWVyLWJvYXJkIHtcbiAgICBkaXNwbGF5IDogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcbn1cblxuLmFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi5vcHAtcGxheWVyLWJvYXJkIHtcbiAgICBkaXNwbGF5IDogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcbn1cblxuLm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi53aW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vdmUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzJweDtcbn1cblxuLm1vdmUtYm9hcmQge1xuICAgIGRpc3BsYXkgOiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcbn1cblxuLm1vdmUtcGxheWVyLWdyaWQtc3F1YXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xufVxuXG4uY29uZmlybS1idXR0b24ge1xuICAgIGJvcmRlciA6IDVweCBzb2xpZCBibGFjaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRyYW5zaXRpb246IDUwMG1zO1xufVxuXG4uY29uZmlybS1idXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmYWZhZmE7XG4gICAgY29sb3I6ICNmYWZhZmE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDRCQUE0Qjs7SUFFNUIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix3Q0FBd0M7O0lBRXhDLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlDQUF5Qzs7SUFFekMsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1tYWluLXNjcmVlbi1yZWQgOiAjZWY0NDQ0O1xcbiAgICAtLW1haW4tc2NyZWVuLWJsdWUgOiAjMzhiZGY4O1xcbiAgICAtLW1haW4tc2NyZWVuLWdyZWVuIDogIzRhZGU4MDtcXG4gICAgLS1tYWluLXNjcmVlbi1waW5rIDogI2U4NzlmOTtcXG5cXG4gICAgLS1taXNzZWQtaGl0LWJsYWNrIDogYmxhY2s7XFxuICAgIC0tc2hpcC1oaXQtZ29sZCA6IGdvbGQ7XFxuICAgIC0tc2V0LXNoaXAtZ3JheSA6IGdyYXk7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbiA6IDA7XFxufVxcblxcbi5tYWluLXNjcmVlbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWxlZnQtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcblxcbiAgICBkaXNwbGF5IDogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcCA6IDMycHg7XFxufVxcblxcbi5tYWluLXJpZ2h0LWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XFxuICAgIFxcbiAgICBkaXNwbGF5IDogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcCA6IDMycHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLm1haW4tbGVmdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubWFpbi1yaWdodC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1haW4tbGVmdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcbn1cXG5cXG4ubWFpbi1yaWdodC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcXG59XFxuXFxuLmJvYXJkLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXBsYXllci1kaXYge1xcbiAgICBkaXNwbGF5ICA6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGggOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wcC1wbGF5ZXItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGggOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItYm9hcmQge1xcbiAgICBkaXNwbGF5IDogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4ub3BwLXBsYXllci1ib2FyZCB7XFxuICAgIGRpc3BsYXkgOiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGEwYTBhO1xcbn1cXG5cXG4ub3BwLXBsYXllci1ncmlkLXNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XFxufVxcblxcbi53aW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5tb3ZlLWJvYXJkIHtcXG4gICAgZGlzcGxheSA6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4ubW92ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4uY29uZmlybS1idXR0b24ge1xcbiAgICBib3JkZXIgOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbn1cXG5cXG4uY29uZmlybS1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmFmYWZhO1xcbiAgICBjb2xvcjogI2ZhZmFmYTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY2hlY2tCb3VuZGFyeShuZXdYLCBuZXdZLCBuZXdBbGlnbiwgbGVuZ3RoKSB7XG4gICAgaWYobmV3WCA8IDApIHtcbiAgICAgICAgdGhyb3coXCJYIFVuZGVyIDBcIik7XG4gICAgfSBlbHNlIGlmKG5ld1ggPiA5KSB7XG4gICAgICAgIHRocm93KFwiWCBvdmVyIDlcIik7XG4gICAgfVxuXG4gICAgaWYobmV3WSA8IDApIHtcbiAgICAgICAgdGhyb3coXCJZIHVuZGVyIDBcIik7XG4gICAgfSBlbHNlIGlmKG5ld1kgPiA5KSB7XG4gICAgICAgIHRocm93KFwiWSAgb3ZlciA5XCIpO1xuICAgIH1cblxuICAgIGlmKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgXG4gICAgaWYobmV3QWxpZ24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBpZihsZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGlmKG5ld1kgPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlZlcnRpY2FsIDIgTGVuZ3RoIEJvdW5kYXJ5OiBZIEAgOSBlcnJvclwiKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmKGxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgaWYobmV3WSA9PT0gOCB8fCBuZXdZID09PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJWZXJ0aWNhbCAzIGxlbmd0aCBCb3VuZGFyeTogWSBAIDggb3IgOSBlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJTaGlwIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gM1wiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihuZXdBbGlnbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgaWYobGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBpZihuZXdYID09PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJIb3Jpem9udGFsIDIgbGVuZ3RoIEJvdW5kYXJ5OiBYIEAgOSBlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYoIGxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgaWYobmV3WCA9PT0gOCB8fCBuZXdYID09PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJIb3Jpem9udGFsIDMgbGVuZ3RoIEJvdW5kYXJ5OiBYIEAgOCBvciA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcIlNoaXAgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3coXCJBbGlnbm1lbnQgZXJyb3IgOiBXcml0ZSB0aGUgY29ycmVjdCBuZXcgYWxpZ25tZW50XCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tCb3VuZGFyeTsge1xuXG59IiwiLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIG5ldyB4IGFuZCBuZXcgeSBhcmUgb2NjdXBpZWQgYnkgYW5vdGhlciBzaGlwLlxuaW1wb3J0IGdldFNoaXBDb3JkcyBmcm9tIFwiLi9nZXRTaGlwQ29yZHNcIjtcblxuLy8gUmV0dXJucyAxIGlmIGFueSBvbmUgZWxlbWVudCBmcm9tIGV4cGVjdENvcmRzIGV4aXN0cyBpbiBvY2N1cGllZENvcmRzXG5mdW5jdGlvbiBjaGVja1NoaXBDb25mbGljdChuZXdYLG5ld1ksbmV3QWxpZ24sIGxlbmd0aCwgb2NjdXBpZWRDb3Jkcykge1xuICAgIGNvbnN0IGV4cGVjdGVkQ29yZHMgPSBnZXRTaGlwQ29yZHMobmV3WCxuZXdZLG5ld0FsaWduLGxlbmd0aCk7XG4gICAgcmV0dXJuIG9jY3VwaWVkQ29yZHMuc29tZShlbGVtZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkQ29yZHMuc29tZShleHBlY3RlZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGVsZW1lbnQpID09PSBKU09OLnN0cmluZ2lmeShleHBlY3RlZEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9KSA/IDEgOiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja1NoaXBDb25mbGljdDsiLCJpbXBvcnQgZ2V0Q29sb3IgZnJvbSBcIi4vZ2V0Q29sb3JcIjtcbmltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi91aS9lbGVtZW50L2RpdkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi91aS9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gYnVpbGRBY3RpdmVQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBhY3RpdmVQbGF5ZXJCb2FyZCA9IGdlbmVyYXRlRGl2KFwiYWN0aXZlLXBsYXllci1ib2FyZFwiKTtcbiAgICBmb3IobGV0IGk9MTsgaTwxMDsgaSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0xO2o8MTA7aisrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlID0gZ2VuZXJhdGVEaXYoXCJhY3RpdmUtcGxheWVyLWdyaWQtc3F1YXJlXCIpO1xuICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopICYmIHBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2hpcC1oaXQtZ29sZClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwbGF5ZXIuZ2FtZWJvYXJkLmhpdFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLW1pc3NlZC1oaXQtYmxhY2spXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNldC1zaGlwLWdyYXkpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdGhhdCBnaXZlcyBlcnJyb3IgaWYgY2xpY2tlZFxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2luZyB5b3VyIG93biBib2FyZCBub3cgaXMgZnV0aWxlIDopXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlUGxheWVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkT3BwUGxheWVyQm9hcmQob3BwUGxheWVyKSB7XG4gICAgY29uc3Qgb3BwUGxheWVyQm9hcmQgPSBnZW5lcmF0ZURpdihcIm9wcC1wbGF5ZXItYm9hcmRcIik7XG4gICAgZm9yKGxldCBpPTE7IGk8MTA7IGkrKykge1xuICAgICAgICBmb3IobGV0IGo9MTtqPDEwO2orKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGdlbmVyYXRlRGl2KFwib3BwLXBsYXllci1ncmlkLXNxdWFyZVwiKTtcbiAgICAgICAgICAgIGlmKG9wcFBsYXllci5nYW1lYm9hcmQub2NjdXBpZWRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSAmJiBvcHBQbGF5ZXIuZ2FtZWJvYXJkLmhpdFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNoaXAtaGl0LWdvbGQpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYob3BwUGxheWVyLmdhbWVib2FyZC5oaXRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1taXNzZWQtaGl0LWJsYWNrKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3BwUGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZFNxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wcFBsYXllckJvYXJkO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVQbGF5ZXJTaWRlKHBsYXllcikge1xuICAgIGNvbnN0IGFjdGl2ZVBsYXllclNpZGUgPSBnZW5lcmF0ZURpdihcImFjdGl2ZS1wbGF5ZXItZGl2XCIpO1xuICAgIGNvbnN0IGFjdGl2ZVBsYXllckhlYWRpbmcgPSBnZW5lcmF0ZUhlYWRpbmcoXCJhY3RpdmUtcGxheWVyLWhlYWRpbmdcIik7XG4gICAgYWN0aXZlUGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSBCb2FyZGA7XG4gICAgYWN0aXZlUGxheWVyU2lkZS5hcHBlbmRDaGlsZChhY3RpdmVQbGF5ZXJIZWFkaW5nKTtcbiAgICBhY3RpdmVQbGF5ZXJTaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldENvbG9yKHBsYXllci5jb2xvcik7XG4gICAgY29uc3QgYWN0aXZlUGxheWVyQm9hcmQgPSBidWlsZEFjdGl2ZVBsYXllckJvYXJkKHBsYXllcik7XG4gICAgYWN0aXZlUGxheWVyU2lkZS5hcHBlbmRDaGlsZChhY3RpdmVQbGF5ZXJCb2FyZCk7XG4gICAgcmV0dXJuIGFjdGl2ZVBsYXllclNpZGU7XG59XG5cbmZ1bmN0aW9uIGdldE9wcFBsYXllclNpZGUob3BwUGxheWVyKSB7XG4gICAgY29uc3Qgb3BwUGxheWVyU2lkZSA9IGdlbmVyYXRlRGl2KFwib3BwLXBsYXllci1kaXZcIik7XG4gICAgY29uc3Qgb3BwUGxheWVySGVhZGluZyA9IGdlbmVyYXRlSGVhZGluZyhcIm9wcC1wbGF5ZXItaGVhZGluZ1wiKTtcbiAgICBvcHBQbGF5ZXJIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7b3BwUGxheWVyLm5hbWV9IEJvYXJkYDtcbiAgICBvcHBQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKG9wcFBsYXllckhlYWRpbmcpO1xuICAgIG9wcFBsYXllclNpZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0Q29sb3Iob3BwUGxheWVyLmNvbG9yKTtcbiAgICBjb25zdCBvcHBQbGF5ZXJCb2FyZCA9IGJ1aWxkT3BwUGxheWVyQm9hcmQob3BwUGxheWVyKTtcbiAgICBvcHBQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKG9wcFBsYXllckJvYXJkKTtcbiAgICByZXR1cm4gb3BwUGxheWVyU2lkZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllckJvYXJkKHBsYXllcixvcHBQbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZERpdiA9IGdlbmVyYXRlRGl2KFwiYm9hcmQtZGl2XCIpO1xuICAgIGNvbnN0IGFjdGl2ZVBsYXllclNpZGUgPSBnZXRBY3RpdmVQbGF5ZXJTaWRlKHBsYXllcik7XG4gICAgY29uc3Qgb3BwUGxheWVyU2lkZSA9IGdldE9wcFBsYXllclNpZGUob3BwUGxheWVyKTtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChhY3RpdmVQbGF5ZXJTaWRlKTtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChvcHBQbGF5ZXJTaWRlKTtcbiAgICByZXR1cm4gYm9hcmREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQbGF5ZXJCb2FyZDsiLCJpbXBvcnQgZGlzcGxheVBsYXllckJvYXJkIGZyb20gXCIuL2Rpc3BsYXlCb2FyZFwiO1xuaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuL3VpL2VsZW1lbnQvZGl2R2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVIZWFkaW5nIGZyb20gXCIuL3VpL2VsZW1lbnQvaGVhZGluZ0dlblwiO1xuXG5jb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cblxuZnVuY3Rpb24gZ2FtZUxvb3AoY3VyclBsYXllcixvcHBQbGF5ZXIsb25Db21wbGV0ZSkge1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlQbGF5ZXJCb2FyZChjdXJyUGxheWVyLG9wcFBsYXllcikpO1xuXG4gICAgaWYoY3VyclBsYXllci5uYW1lID09PSBcIkNQVVwiKSB7XG4gICAgICAgIGxldCB0b0F0dGFja1gsdG9BdHRhY2tZO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0b0F0dGFja1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgICAgICB0b0F0dGFja1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgIH0gd2hpbGUgKG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZSgoW3gsIHldKSA9PiB4ID09PSB0b0F0dGFja1ggJiYgeSA9PT0gdG9BdHRhY2tZKSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wcFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0b0F0dGFja1gsdG9BdHRhY2tZKTtcblxuICAgICAgICAgICAgaWYob3BwUGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKGN1cnJQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHAxID0gY3VyclBsYXllcjtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gb3BwUGxheWVyO1xuICAgICAgICAgICAgZ2FtZUxvb3AocDIscDEsb25Db21wbGV0ZSk7XG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3BwR3JpZFNxdWFyZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BwLXBsYXllci1ncmlkLXNxdWFyZVwiKSk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8OTtpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8OTtqKyspIHtcbiAgICAgICAgICAgICAgICBvcHBHcmlkU3F1YXJlc1soaSo5KSArIGpdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhpKzEsaisxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BwUGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKGN1cnJQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAxID0gY3VyclBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAyID0gb3BwUGxheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUxvb3AocDIscDEsb25Db21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGxheTJQR2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGdhbWVMb29wKHBsYXllcjEscGxheWVyMik7XG59XG5cblxuZnVuY3Rpb24gcGxheUNQVUdhbWUocGxheWVyMSwgQ1BVLG9uQ29tcGxldGUpIHtcbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZ2FtZUxvb3AocGxheWVyMSxDUFUsb25Db21wbGV0ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlDUFVHYW1lOyIsImltcG9ydCBuZXdTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjaGVja0JvdW5kYXJ5IGZyb20gXCIuL2NoZWNrQm91bmRhcnlcIjtcbmltcG9ydCBjaGVja1NoaXBDb25mbGljdCBmcm9tIFwiLi9jaGVja1NoaXBDb25mbGljdFwiO1xuaW1wb3J0IGdldFNoaXBDb3JkcyBmcm9tIFwiLi9nZXRTaGlwQ29yZHNcIjtcbmltcG9ydCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCBmcm9tIFwiLi9nZXRPY2N1cGllZENvcmRzRXhjZXB0VGFyZ2V0XCI7XG5pbXBvcnQgZ2V0SGl0U2hpcCBmcm9tIFwiLi9nZXRIaXRTaGlwXCI7XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRTcG90cyA9IFtdO1xuICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMgPSBbXTtcblxuICAgICAgICBjb25zdCBzaGlwMSA9IG5ld1NoaXAoMSwxLDEsXCJ2ZXJ0aWNhbFwiLFtdKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXAxKTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwMiA9IG5ld1NoaXAoMiw0LDQsXCJ2ZXJ0aWNhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwMik7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuXG4gICAgICAgIGNvbnN0IHNoaXAzID0gbmV3U2hpcCgyLDQsMixcImhvcml6b250YWxcIix0aGlzLm9jY3VwaWVkU3BvdHMpO1xuICAgICAgICB0aGlzLnVuc3Vua1NoaXBzLnB1c2goc2hpcDMpO1xuICAgICAgICB0aGlzLmdldE9jY3VwaWVkU3BvdHMoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNoaXA0ID0gbmV3U2hpcCgzLDcsNyxcInZlcnRpY2FsXCIsdGhpcy5vY2N1cGllZFNwb3RzKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXA0KTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG5cbiAgICAgICAgY29uc3Qgc2hpcDUgPSBuZXdTaGlwKDMsMSw5LFwiaG9yaXpvbnRhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwNSk7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuICAgIH1cblxuICAgIGdldE9jY3VwaWVkU3BvdHMoKSB7XG4gICAgICAgIHRoaXMub2NjdXBpZWRTcG90cyA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudW5zdW5rU2hpcHMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcENvcmRzID0gZ2V0U2hpcENvcmRzKFxuICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHNbaV0uaGVhZFgsXG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tpXS5oZWFkWSxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmFsaWdubWVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmxlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bmV3U2hpcENvcmRzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMucHVzaChuZXdTaGlwQ29yZHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBtb3ZlU2hpcChzaGlwTm8sbmV3WCxuZXdZKSB7XG4gICAgICAgIGxldCBzaGlwQWxpZ25tZW50ID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uYWxpZ25tZW50O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLmxlbmd0aDtcblxuICAgICAgICBpZihjaGVja0JvdW5kYXJ5KG5ld1gsbmV3WSxzaGlwQWxpZ25tZW50LHNoaXBMZW5ndGgpID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCByZW1TcG90cyA9IGdldE9jY3VwaWVkRXhjZXB0VGFyZ2V0KHRoaXMub2NjdXBpZWRTcG90cyx0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5zaGlwQ29yZHMpO1xuICAgICAgICAgICAgaWYoY2hlY2tTaGlwQ29uZmxpY3QobmV3WCxuZXdZLHNoaXBBbGlnbm1lbnQsc2hpcExlbmd0aCxyZW1TcG90cykgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS51cGRhdGVDb3JkcyhuZXdYLG5ld1ksc2hpcEFsaWdubWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiU2hpcCBDb25mbGljdCBFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiQ2hlY2sgYm91bmRhcnkgZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSb3RhdGUgc2hpcFxuICAgIHJvdGF0ZVNoaXAoc2hpcE5vLG5ld0FsaWduKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNoaXBYID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFg7XG4gICAgICAgIGNvbnN0IHNoaXBZID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFk7XG5cbiAgICAgICAgaWYoY2hlY2tCb3VuZGFyeShzaGlwWCxzaGlwWSxuZXdBbGlnbixzaGlwTGVuZ3RoKSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmVtU3BvdHMgPSBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCh0aGlzLm9jY3VwaWVkU3BvdHMsdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uc2hpcENvcmRzKTtcbiAgICAgICAgICAgIGlmKGNoZWNrU2hpcENvbmZsaWN0KHNoaXBYLHNoaXBZLG5ld0FsaWduLHNoaXBMZW5ndGgscmVtU3BvdHMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0udXBkYXRlQ29yZHMoc2hpcFgsIHNoaXBZLCBuZXdBbGlnbik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiUm90YXRlIFNoaXAgOiBTaGlwIGNvbmZsaWN0IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJSb3RhdGUgU2hpcCA6IENoZWNrIGJvdW5kYXJ5IGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjaWV2ZSBhdHRhY2tcbiAgICByZWNlaXZlQXR0YWNrKHRvQXR0YWNrWCwgdG9BdHRhY2tZKSB7XG4gICAgICAgIGlmKHRvQXR0YWNrWCA8IDAgfHwgdG9BdHRhY2tYID4gOSkge1xuICAgICAgICAgICAgdGhyb3coXCJBdHRhY2sgb3V0IG9mIGJvdW5kcyBYXCIpO1xuICAgICAgICB9IGVsc2UgaWYodG9BdHRhY2tZIDwgMCB8fCB0b0F0dGFja1kgPiA5KSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF0dGFjayBvdXQgb2YgYm91bmRzIFlcIilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5oaXRTcG90cy5zb21lKGVsZW1lbnQgPT4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09XG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbdG9BdHRhY2tYLHRvQXR0YWNrWV0pKSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQXR0YWNrIGNvb3JkaW5hdGUgYWxyZWFkeSBoaXRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGl0U3BvdHMucHVzaChbdG9BdHRhY2tYLHRvQXR0YWNrWV0pO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5vY2N1cGllZFNwb3RzLnNvbWUoZWxlbWVudCA9PiBKU09OLnN0cmluZ2lmeShlbGVtZW50KSA9PT1cbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt0b0F0dGFja1gsdG9BdHRhY2tZXSkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRvSGl0ID0gZ2V0SGl0U2hpcCh0aGlzLnVuc3Vua1NoaXBzLCB0b0F0dGFja1gsIHRvQXR0YWNrWSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwVG9IaXRdLmdldEhpdCgpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XS5pc1N1bmsoKT09PXRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW5rU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5zcGxpY2Uoc2hpcFRvSGl0LDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBpZih0aGlzLnVuc3Vua1NoaXBzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVCb2FyZDsiLCJmdW5jdGlvbiBnZXRDb2xvcihwbGF5ZXJDb2xvcikge1xuICAgIGlmKHBsYXllckNvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLXJlZClcIjtcbiAgICB9IGVsc2UgaWYocGxheWVyQ29sb3IgPT09IFwiYmx1ZVwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLWJsdWUpXCI7XG4gICAgfSBlbHNlIGlmKHBsYXllckNvbG9yID09PSBcImdyZWVuXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tbWFpbi1zY3JlZW4tZ3JlZW4pXCI7XG4gICAgfSBlbHNlIGlmKHBsYXllckNvbG9yID09PSBcInBpbmtcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1tYWluLXNjcmVlbi1waW5rKVwiXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2xvcjsiLCJmdW5jdGlvbiBnZXRIaXRTaGlwKHNoaXBBcnJheSwgdG9BdHRhY2tYLCB0b0F0dGFja1kpIHtcbiAgICBmb3IobGV0IGk9MDtpPHNoaXBBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0wO2o8c2hpcEFycmF5W2ldLnNoaXBDb3Jkcy5sZW5ndGg7aisrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShzaGlwQXJyYXlbaV0uc2hpcENvcmRzW2pdKSA9PT0gSlNPTi5zdHJpbmdpZnkoW3RvQXR0YWNrWCx0b0F0dGFja1ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SGl0U2hpcDsiLCJmdW5jdGlvbiBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldChhbGxPY2N1cGllZENvcmRzLHNoaXBDb3Jkcykge1xuICAgIGNvbnN0IHJlbVNwb3RzID0gYWxsT2NjdXBpZWRDb3Jkcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAhc2hpcENvcmRzLnNvbWUoc2hpcENvb3JkID0+XG4gICAgICAgICAgaXRlbS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBzaGlwQ29vcmRbaW5kZXhdKVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlbVNwb3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldDsiLCJmdW5jdGlvbiBnZXRTaGlwQ29yZHMoWCxZLGFsaWduLGxlbmd0aCkge1xuICAgIGxldCBvY2N1cGllZENvcmRzID0gW107XG4gICAgaWYoYWxpZ24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIG9jY3VwaWVkQ29yZHMucHVzaChbWCxZK2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihhbGlnbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBvY2N1cGllZENvcmRzLnB1c2goW1graSxZXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyhcIkdldFNoaXBDb3JkcyA6IEFsaWdubWVudCBlcnJvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXBpZWRDb3Jkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2hpcENvcmRzOyIsImZ1bmN0aW9uIG1vdmVDUFVTaGlwcyhDUFUsb25Db21wbGV0ZSkge1xuICAgIGZvcihsZXQgaT0wO2k8OTtpKyspIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U2hpcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICBjb25zdCBhY3Rpb25Ub1BlcmZvcm0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG5cbiAgICAgICAgaWYoYWN0aW9uVG9QZXJmb3JtID09PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRTaGlwLFwiTW92ZSBzaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVRvWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUb1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIENQVS5nYW1lYm9hcmQubW92ZVNoaXAodGFyZ2V0U2hpcCsxLG1vdmVUb1gsbW92ZVRvWSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihhY3Rpb25Ub1BlcmZvcm0gPT09IDIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYoQ1BVLmdhbWVib2FyZC51bnN1bmtTaGlwc1t0YXJnZXRTaGlwXS5hbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBDUFUuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAodGFyZ2V0U2hpcCsxLFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDUFUuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAodGFyZ2V0U2hpcCsxLFwidmVydGljYWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYob25Db21wbGV0ZSAmJiB0eXBlb2Ygb25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZlQ1BVU2hpcHM7IiwiaW1wb3J0IGdldENvbG9yIGZyb20gXCIuL2dldENvbG9yXCI7XG5pbXBvcnQgZ2V0SGl0U2hpcCBmcm9tIFwiLi9nZXRIaXRTaGlwXCI7XG5pbXBvcnQgZ2VuZXJhdGVCdXR0b24gZnJvbSBcIi4vdWkvZWxlbWVudC9idG5HZW5cIjtcbmltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi91aS9lbGVtZW50L2RpdkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi91aS9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtY29udGFpbmVyJyk7XG4gICAgZ2V0Qm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtb3ZlQm9hcmQgPSBnZW5lcmF0ZURpdihcIm1vdmUtYm9hcmRcIik7XG4gICAgZm9yKGxldCBpPTE7aTwxMDtpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTE7ajwxMDtqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcIm1vdmUtcGxheWVyLWdyaWQtc3F1YXJlXCIpO1xuICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNldC1zaGlwLWdyYXkpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBsb25nUHJlc3NUaW1lb3V0O1xuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBtb3VzZWRvd24gZXZlbnRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxvbmdQcmVzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYExvbmcgcHJlc3MgZGV0ZWN0ZWQgJHtpfSwke2p9YCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHByb21wdChcIkVudGVyIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgZm9ybWF0IHgseVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlcklucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHVzZXJJbnB1dC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzBdLnRyaW0oKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzFdLnRyaW0oKSwgMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSB1c2VyIGVudGVyZWQgJHt4fSwke3l9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZhbGlkIGNvb3JkaW5hdGVzIGVudGVyZWRgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRvTW92ZSA9IGdldEhpdFNoaXAocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyxpLGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcFRvTW92ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAoc2hpcFRvTW92ZSsxLHgseSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNhbmNlbGxlZCB0aGUgcHJvbXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUT0RPIC0gcm90YXRpbmcgc2hpcCBub3QgZG9uZVxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcEhpdCA9IGdldEhpdFNoaXAocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyxpLGopO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBIaXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHNbc2hpcEhpdF0uYWxpZ25tZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucm90YXRlU2hpcChzaGlwSGl0KzEsXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yb3RhdGVTaGlwKHNoaXBIaXQrMSxcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbW92ZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEJvYXJkLmFwcGVuZENoaWxkKG1vdmVCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIGdldEJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IG1vdmVCb2FyZCA9IGdlbmVyYXRlRGl2KFwibW92ZS1ib2FyZFwiKTtcbiAgICBmb3IobGV0IGk9MTtpPDEwO2krKykge1xuICAgICAgICBmb3IobGV0IGo9MTtqPDEwO2orKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGdlbmVyYXRlRGl2KFwibW92ZS1wbGF5ZXItZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2V0LXNoaXAtZ3JheSlcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvbmdQcmVzc1RpbWVvdXQ7XG4gICAgICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gb2YgdGhlIG1vdXNlZG93biBldmVudFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbG9uZ1ByZXNzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9uZyBwcmVzcyBkZXRlY3RlZCAke2l9LCR7an1gKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID0gcHJvbXB0KFwiRW50ZXIgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBmb3JtYXQgeCx5XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VySW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdXNlcklucHV0LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMF0udHJpbSgpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMV0udHJpbSgpLCAxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHVzZXIgZW50ZXJlZCAke3h9LCR7eX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgY29vcmRpbmF0ZXMgZW50ZXJlZGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwVG9Nb3ZlID0gZ2V0SGl0U2hpcChwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzLGksaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwVG9Nb3ZlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChzaGlwVG9Nb3ZlKzEseCx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY2FuY2VsbGVkIHRoZSBwcm9tcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVE9ETyAtIHJvdGF0aW5nIHNoaXAgbm90IGRvbmVcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBIaXQgPSBnZXRIaXRTaGlwKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHMsaSxqKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwSGl0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzW3NoaXBIaXRdLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAoc2hpcEhpdCsxLFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucm90YXRlU2hpcChzaGlwSGl0KzEsXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbW92ZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb3ZlQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIG1vdmVTaGlwKHBsYXllcixvbkNvbmZpcm0pIHtcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuXG4gICAgY29uc3QgbW92ZUNvbnRhaW5lciA9IGdlbmVyYXRlRGl2KFwibW92ZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgY29sb3JUb0FwcGx5ID0gZ2V0Q29sb3IocGxheWVyLmNvbG9yKTtcbiAgICBtb3ZlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVG9BcHBseTtcblxuICAgIGNvbnN0IG1vdmVIZWFkaW5nID0gZ2VuZXJhdGVIZWFkaW5nKFwibW92ZS1oZWFkaW5nXCIpO1xuICAgIG1vdmVIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IFNldCBZb3VyIEJvYXJkYDtcbiAgICBtb3ZlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVIZWFkaW5nKTtcblxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZ2VuZXJhdGVEaXYoXCJib2FyZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgYm9hcmQgPSBnZXRCb2FyZChwbGF5ZXIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICBtb3ZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBnZW5lcmF0ZUJ1dHRvbihcImNvbmZpcm0tYnV0dG9uXCIpO1xuICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVG9BcHBseTtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgaWYob25Db25maXJtICYmIHR5cGVvZiBvbkNvbmZpcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb25Db25maXJtKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIG1vdmVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgICBjb25zdCBoZWxwQ29udGFpbmVyID0gZ2VuZXJhdGVEaXYoXCJoZWxwLWNvbnRhaW5lclwiKTtcbiAgICBoZWxwQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDbGljayB0byByb3RhdGUsIExvbmcgcHJlc3MgYW5kIGVudGVyIGNvb3JkaW5hdGVzIHRvIG1vdmVcIjtcbiAgICBtb3ZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlbHBDb250YWluZXIpO1xuXG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlQ29udGFpbmVyKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZlU2hpcDsiLCJpbXBvcnQgbmV3R2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jbGFzcyBwbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ld0dhbWVCb2FyZCgpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yO1xuICAgIH1cblxuICAgIHNldENvbG9yKG5ld0NvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1BsYXllcihuYW1lLGNvbG9yKSB7XG4gICAgY29uc3QgY3JlYXRlZFBsYXllciA9IG5ldyBwbGF5ZXIobmFtZSxjb2xvcik7XG4gICAgcmV0dXJuIGNyZWF0ZWRQbGF5ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1BsYXllcjsiLCJpbXBvcnQgY2hlY2tCb3VuZGFyeSBmcm9tIFwiLi9jaGVja0JvdW5kYXJ5XCI7XG5pbXBvcnQgY2hlY2tTaGlwQ29uZmxpY3QgZnJvbSBcIi4vY2hlY2tTaGlwQ29uZmxpY3RcIjtcbmltcG9ydCBnZXRTaGlwQ29yZHMgZnJvbSBcIi4vZ2V0U2hpcENvcmRzXCI7XG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCxoZWFkWCxoZWFkWSxhbGlnbm1lbnQpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGVhZFggPSBoZWFkWDtcbiAgICAgICAgdGhpcy5oZWFkWSA9IGhlYWRZO1xuICAgICAgICB0aGlzLmFsaWdubWVudCA9IGFsaWdubWVudDtcbiAgICAgICAgdGhpcy5zaGlwQ29yZHMgPSBnZXRTaGlwQ29yZHModGhpcy5oZWFkWCx0aGlzLmhlYWRZLHRoaXMuYWxpZ25tZW50LHRoaXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjb29yZHNcbiAgICB1cGRhdGVDb3JkcyhuZXdIZWFkWCxuZXdIZWFkWSxuZXdBbGlnbikge1xuICAgICAgICB0aGlzLmhlYWRYID0gbmV3SGVhZFg7XG4gICAgICAgIHRoaXMuaGVhZFkgPSBuZXdIZWFkWTtcbiAgICAgICAgdGhpcy5hbGlnbm1lbnQgPSBuZXdBbGlnbjtcbiAgICAgICAgdGhpcy5zaGlwQ29yZHMgPSBnZXRTaGlwQ29yZHModGhpcy5oZWFkWCx0aGlzLmhlYWRZLHRoaXMuYWxpZ25tZW50LHRoaXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXdTaGlwKGxlbmd0aCxoZWFkWCxoZWFkWSxhbGlnbm1lbnQsb2NjdXBpZWRDb3Jkcykge1xuICAgIGlmKGxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhyb3coXCJTaGlwIGlzIHRvbyBzbWFsbFwiKTtcbiAgICB9XG4gICAgaWYobGVuZ3RoID4gMykge1xuICAgICAgICB0aHJvdyhcIlNoaXAgaXMgdG9vIGJpZ1wiKTtcbiAgICB9XG4gICAgaWYoY2hlY2tCb3VuZGFyeShoZWFkWCxoZWFkWSxhbGlnbm1lbnQsbGVuZ3RoKSAhPT0gMSkge1xuICAgICAgICB0aHJvdyhcIkJvdW5kYXJ5IGV4Y2VwdGlvblwiKTtcbiAgICB9XG4gICAgaWYoY2hlY2tTaGlwQ29uZmxpY3QoaGVhZFgsaGVhZFksYWxpZ25tZW50LGxlbmd0aCxvY2N1cGllZENvcmRzKSA9PT0gMSkge1xuICAgICAgICB0aHJvdyhcIlNoaXAgY29uZmxpY3QgZXJyb3JcIik7XG4gICAgfVxuICAgIGlmKChhbGlnbm1lbnQgIT09IFwidmVydGljYWxcIikgJiYgKGFsaWdubWVudCAhPT0gXCJob3Jpem9udGFsXCIpKSB7XG4gICAgICAgIHRocm93KFwiQWxpZ25tZW50IG11c3QgYmUgZWl0aGVyIHZlcnRpY2FsIG9yIGhvcml6b250YWxcIik7XG4gICAgfVxuICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChsZW5ndGgsIGhlYWRYLGhlYWRZLGFsaWdubWVudCk7XG4gICAgcmV0dXJuIG5ld1NoaXA7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3U2hpcDsiLCJmdW5jdGlvbiBnZW5lcmF0ZUJ1dHRvbihjbGFzc05hbWUsaWQpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgaWYoY2xhc3NOYW1lKSB7XG4gICAgICAgIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBpZihpZCkge1xuICAgICAgICBuZXdCdXR0b24uaWQgPSBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1dHRvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVCdXR0b247IiwiZnVuY3Rpb24gZ2VuZXJhdGVEaXYoY2xhc3NOYW1lLCBpZE5hbWUpIHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZihjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgaWYoaWROYW1lKSB7XG4gICAgICAgIG5ld0Rpdi5pZCA9IGlkTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Rpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVEaXY7IiwiZnVuY3Rpb24gZ2VuZXJhdGVIZWFkaW5nKGNsYXNzTmFtZSwgaWQpIHtcbiAgICBjb25zdCBuZXdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgaWYoY2xhc3NOYW1lKSB7XG4gICAgICAgIG5ld0hlYWRpbmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gXG4gICAgaWYoaWQpIHtcbiAgICAgICAgbmV3SGVhZGluZy5pZCA9IGlkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3SGVhZGluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIZWFkaW5nOyIsImZ1bmN0aW9uIGdlbmVyYXRlTWF0ZXJpYWxJY29uKGljb25OYW1lLGZvbnRTaXplKSB7XG4gICAgY29uc3QgbmV3SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIG5ld0ljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xuICAgIG5ld0ljb24udGV4dENvbnRlbnQgPSBpY29uTmFtZTtcbiAgICBuZXdJY29uLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgcmV0dXJuIG5ld0ljb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWF0ZXJpYWxJY29uOyIsImltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi4vZWxlbWVudC9kaXZHZW5cIlxuaW1wb3J0IGdlbmVyYXRlQnV0dG9uIGZyb20gXCIuLi9lbGVtZW50L2J0bkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlTWF0ZXJpYWxJY29uIGZyb20gXCIuLi9lbGVtZW50L21hdGVyaWFsSWNvbkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi4vZWxlbWVudC9oZWFkaW5nR2VuXCI7XG5cbmZ1bmN0aW9uIGluaXRfbWFpbl9zY3JlZW5fZigpIHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBsZWZ0RGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLWxlZnQtZGl2XCIpO1xuICAgIGNvbnN0IGxlZnREaXZJY29uRGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLWxlZnQtaWNvbi1kaXZcIik7XG4gICAgY29uc3QgbGVmdERpdkljb24gPSBnZW5lcmF0ZU1hdGVyaWFsSWNvbihcImNvbXB1dGVyXCIsXCIyNDBweFwiKTtcbiAgICBsZWZ0RGl2SWNvbkRpdi5hcHBlbmRDaGlsZChsZWZ0RGl2SWNvbik7XG4gICAgY29uc3QgbGVmdERpdkhlYWQgPSBnZW5lcmF0ZUhlYWRpbmcoXCJtYWluLWxlZnQtaGVhZFwiKTtcbiAgICBsZWZ0RGl2SGVhZC50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXJcIjtcbiAgICBjb25zdCBsZWZ0RGl2QnV0dG9uID0gZ2VuZXJhdGVCdXR0b24oXCJtYWluLWxlZnQtYnV0dG9uXCIpO1xuICAgIGxlZnREaXZCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5zdCBDb21wdXRlclwiO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobGVmdERpdkljb25EaXYpO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobGVmdERpdkhlYWQpO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobGVmdERpdkJ1dHRvbik7XG5cbiAgICBjb25zdCByaWdodERpdiA9IGdlbmVyYXRlRGl2KFwibWFpbi1yaWdodC1kaXZcIik7XG4gICAgY29uc3QgcmlnaHREaXZJY29uRGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLXJpZ2h0LWljb24tZGl2XCIpO1xuICAgIGNvbnN0IHJpZ2h0RGl2SWNvbiA9IGdlbmVyYXRlTWF0ZXJpYWxJY29uKFwicGVyc29uXCIsXCIyNDBweFwiKTtcbiAgICByaWdodERpdkljb25EaXYuYXBwZW5kQ2hpbGQocmlnaHREaXZJY29uKTtcbiAgICBjb25zdCByaWdodERpdkhlYWQgPSBnZW5lcmF0ZUhlYWRpbmcoXCJtYWluLXJpZ2h0LWhlYWRcIik7XG4gICAgcmlnaHREaXZIZWFkLnRleHRDb250ZW50ID0gXCJQbGF5ZXJcIjtcbiAgICBjb25zdCByaWdodERpdkJ1dHRvbiA9IGdlbmVyYXRlQnV0dG9uKFwibWFpbi1yaWdodC1idXR0b25cIik7XG4gICAgcmlnaHREaXZCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW5zdCBhbm90aGVyIHBsYXllclwiO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2SWNvbkRpdik7XG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQocmlnaHREaXZIZWFkKTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChyaWdodERpdkJ1dHRvbik7XG5cblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuICAgIHJldHVybiBjb250YWluZXJEaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfbWFpbl9zY3JlZW5fZjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBNYWluIHNjcmVlbiBhcHBlYXJzIGFsbG93aW5nIHRoZSB1c2VyIHRvIGNob29zZSBiZXR3ZWVuIGNvbXB1dGVyIG9yIHBsYXllciB2IHBsYXllciAtIERPTkUgXG4vLyBCYXNlZCBvbiB0aGUgdXNlcnMgY2hvaWNlIHRoZSBuZXh0IHNjcmVlbiBpcyBzaG93biB3aGVyZSB0aGUgdXNlciBvciB1c2VycyBjYW4gY2hvb3NlIHRoZWlyIG5hbWUgYW5kIGNvbG9yXG4vLyBPbmNlIHRoZSBzdGFydCBnYW1lIGJ1dHRvbiBpcyBwcmVzc2VkIHRoZSBnYW1lXG4vLyBMZXQgcGxheWVyIG9uZSBwbGFjZSB0aGVpciBzaGlwc1xuLy8gT25jZSB0aGUgcGxheWVyIG9uZSBpcyBkb25lIHBsYWNpbmcgdGhlaXIgc2hpcHNcbi8vIElmIGNvbXB1dGVyIC0+IGF1dG9tYXRlIHRoZSBwcm9jZXNzIG9mIHBsYWNpbmcgc2hpcHNcbi8vIElmIGFub3RoZXIgcGxheWVyIC0+IGxldCBwbGF5ZXIgdHdvIHBsYWNlIHRoZWlyIHNoaXBzLlxuLy8gQmVnaW4gdGhlIGdhbWUgbG9vcCB1bnRpbCBvbmUgb2YgdGhlIHBsYXllcnMgZ2FtZWJvYXJkcyBhbGwgc3VuayBmdW5jdGlvbiByZXR1cm5zIHRydWUuXG4vLyB3aGVuIHRoYXQgaGFwcGVucyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSBnYW1lIGFnYWluIGJ5IG1vc3RseSBtYWtpbmcgbmV3IHBsYXllcnNcblxuaW1wb3J0IGluaXRfbWFpbl9zY3JlZW5fZiBmcm9tIFwiLi91aS9zY3JlZW4vaW5pdF9tYWluX3NjcmVlblwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgcGxheUNQVUdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IG5ld1BsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBtb3ZlU2hpcCBmcm9tIFwiLi9tb3ZlU2hpcFwiO1xuaW1wb3J0IG1vdmVDUFVTaGlwcyBmcm9tIFwiLi9tb3ZlQ1BVU2hpcHNcIjtcbmltcG9ydCBnZW5lcmF0ZUhlYWRpbmcgZnJvbSBcIi4vdWkvZWxlbWVudC9oZWFkaW5nR2VuXCI7XG5pbXBvcnQgZ2V0Q29sb3IgZnJvbSBcIi4vZ2V0Q29sb3JcIjtcbmltcG9ydCBnZW5lcmF0ZUJ1dHRvbiBmcm9tIFwiLi91aS9lbGVtZW50L2J0bkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuL3VpL2VsZW1lbnQvZGl2R2VuXCI7XG5cbmNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gZGlzcGxheVdpbk1lc3NhZ2UocGxheWVyKSB7XG4gICAgaWYocGxheWVyKSB7XG4gICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29uc3Qgd2luQ29udGFpbmVyID0gZ2VuZXJhdGVEaXYoXCJ3aW4tY29udGFpbmVyXCIpO1xuICAgICAgICB3aW5Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0Q29sb3IocGxheWVyLmNvbG9yKTtcblxuICAgICAgICBjb25zdCB3aW5NZXNzYWdlID0gZ2VuZXJhdGVIZWFkaW5nKFwid2luLW1lc3NhZ2VcIik7XG4gICAgICAgIHdpbk1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0gaGFzIHdvbmA7XG4gICAgICAgIHdpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5NZXNzYWdlKTtcblxuICAgICAgICBjb25zdCB3aW5CdXR0b24gPSBnZW5lcmF0ZUJ1dHRvbihcIndpbi1idXR0b25cIik7XG4gICAgICAgIHdpbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb2xvcihwbGF5ZXIuY29sb3IpO1xuICAgICAgICB3aW5CdXR0b24udGV4dENvbnRlbnQgPSBgR28gQmFjayBIb21lYDtcbiAgICAgICAgd2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHByZWdhbWUpO1xuICAgICAgICB3aW5Db250YWluZXIuYXBwZW5kQ2hpbGQod2luQnV0dG9uKTtcblxuICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdpbkNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0X0NQVV9nYW1lKCkge1xuICAgIGNvbnN0IHBsYXllcjEgPSBuZXdQbGF5ZXIoXCJCaW5ndXNcIixcInBpbmtcIik7XG4gICAgY29uc3QgQ1BVID0gbmV3UGxheWVyKFwiQ1BVXCIsXCJibHVlXCIpO1xuXG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1vdmVTaGlwKHBsYXllcjEsKCkgPT4ge1xuICAgICAgICBtb3ZlQ1BVU2hpcHMoQ1BVLCgpID0+IHtcbiAgICAgICAgICAgIHBsYXlDUFVHYW1lKHBsYXllcjEsQ1BVLCh3aW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2luTWVzc2FnZSh3aW5uZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgXG4gICAgXG59XG5cbmZ1bmN0aW9uIGluaXRfcGxheWVyX2dhbWUoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IG5ld1BsYXllcihcIkJpbmd1c1wiLFwicGlua1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gbmV3UGxheWVyKFwiU3BvaW5ndXNcIixcImJsdWVcIik7XG5cbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbW92ZVNoaXAocGxheWVyMSwoKSA9PiB7XG4gICAgICAgIG1vdmVTaGlwKHBsYXllcjIsKCkgPT4ge1xuICAgICAgICAgICAgcGxheUNQVUdhbWUocGxheWVyMSxwbGF5ZXIyLCh3aW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2luTWVzc2FnZSh3aW5uZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZWdhbWUoKSB7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5pdF9tYWluX3NjcmVlbl9mKCkpO1xuICAgIGNvbnN0IG1haW5MZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWxlZnQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1haW5SaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1yaWdodC1idXR0b25cIik7XG5cbiAgICBtYWluTGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixpbml0X0NQVV9nYW1lKTtcbiAgICBtYWluUmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW5pdF9wbGF5ZXJfZ2FtZSk7XG59XG5cbnByZWdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=