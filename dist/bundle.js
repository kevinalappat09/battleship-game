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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4BAA4B;;IAE5B,0BAA0B;IAC1B,sBAAsB;IACtB,sBAAsB;IACtB,mJAAmJ;AACvJ;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,wCAAwC;;IAExC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,yCAAyC;;IAEzC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B","sourcesContent":[":root {\n    --main-screen-red : #ef4444;\n    --main-screen-blue : #38bdf8;\n\n    --missed-hit-black : black;\n    --ship-hit-gold : gold;\n    --set-ship-gray : gray;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    margin : 0;\n}\n\n.main-screen-container {\n    height: 100vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main-left-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-red);\n\n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.main-right-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-blue);\n    \n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.heading {\n    font-size: 64px;\n    font-weight: 700;\n}\n\n.button {\n    outline: none;\n    border: none;\n    padding: 16px;\n    font-weight: 700;\n    transition: 500ms;\n}\n\n.main-left-button {\n    background-color: var(--main-screen-red);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-right-button {\n    background-color: var(--main-screen-blue);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-left-button:hover {\n    background-color: black;\n    color : var(--main-screen-red);\n}\n\n.main-right-button:hover {\n    background-color: black;\n    color : var(--main-screen-blue);\n}\n\n.board-div {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n}\n\n.active-player-div {\n    display  :flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.opp-player-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.active-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.active-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.opp-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.opp-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/element/divGen */ "./src/ui/element/divGen.js");
/* harmony import */ var _ui_element_headingGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/element/headingGen */ "./src/ui/element/headingGen.js");



function getActivePlayerSide(player) {
    // Active player side div initialization
    const activePlayerSide = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("active-player-div");
    const activePlayerHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_1__["default"])("active-player-heading");
    activePlayerHeading.textContent = "Your Board";
    activePlayerSide.appendChild(activePlayerHeading);

    // Giving the active player side color
    // TODO - finish this logic add more colors.
    if(player.color === "red") {
        activePlayerSide.style.backgroundColor = "var(--main-screen-red)";
    } else {
        activePlayerSide.style.backgroundColor = "var(--main-screen-blue)";
    }

    const activePlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("active-player-board");
    for(let i=0; i<9; i++) {
        for(let j=0;j<9;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("active-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j) && player.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(player.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } else if(player.gameboard.occupiedSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // add the event listener that gives errror if clicked
            gridSquare.addEventListener("click",() => giveActivePlayerClickError(i,j));

            activePlayerBoard.appendChild(gridSquare);
        }
    }
    activePlayerSide.appendChild(activePlayerBoard);

    return activePlayerSide;
}

function giveActivePlayerClickError(row,col) {
    console.log("Clicking your own board now is futile :)");
}

function getOppPlayerSide(oppPlayer) {
    // Opponent player side div initialization
    const oppPlayerSide = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("opp-player-div");
    const oppPlayerHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-player-heading");
    oppPlayerHeading.textContent = "Opponent Board";
    oppPlayerSide.appendChild(oppPlayerHeading);

    // Giving the opp player side color
    // Add the other colors
    if(oppPlayer.color === "red") {
        oppPlayerSide.style.backgroundColor = "var(--main-screen-red)";
    } else {
        oppPlayerSide.style.backgroundColor = "var(--main-screen-blue)";
    }

    const oppPlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("opp-player-board");
    for(let i=0; i<9; i++) {
        for(let j=0;j<9;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("opp-player-grid-square");
            if(oppPlayer.gameboard.occupiedSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j) && oppPlayer.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(oppPlayer.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } 

            // add the event listener that gives errror if clicked
            gridSquare.addEventListener("click",() => oppPlayerClickFunction(i,j,oppPlayer));

            oppPlayerBoard.appendChild(gridSquare);
        }
    }
    oppPlayerSide.appendChild(oppPlayerBoard);

    return oppPlayerSide;
}

function oppPlayerClickFunction(row,col, oppPlayer) {
    oppPlayer.gameboard.receiveAttack(row,col);
    console.log(oppPlayer.gameboard.hitSpots);
}

function displayPlayerBoard(player, oppPlayer) {
    const boardDiv = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("board-div");
    
    const activePlayerSide = getActivePlayerSide(player);
    const oppPlayerSide = getOppPlayerSide(oppPlayer);

    boardDiv.appendChild(activePlayerSide);
    boardDiv.appendChild(oppPlayerSide);
    
    // add event listeners to each grid
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


const bodyContainer = document.querySelector(".container");

function play2PGame(player1, player2) {
    let currentPlayer = 1;
    try {
        while(player1.gameboard.allSunk() === false && player2.gameboard.allSunk() === false) {
            if(currentPlayer === 1) {
                
                //player one plays
            } else if(currentPlayer === 2) {
                // player two plays
            }
    
            //player switch
            if(currentPlayer === 1) {
                // display modal asking player 1 to give the device to player 2
                currentPlayer = 2;
            } else {
                // display modal asking player 2 to give the device to player 1
                currentPlayer = 1;
            }
        }
    } catch(err) {
        console.log(err);
    }
    
}

function playCPUGame(player1, CPU) {
    bodyContainer.innerHTML = "";
    let currentPlayer = 1;
    bodyContainer.appendChild((0,_displayBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(player1,CPU));
    // try {
        
    //     while(player1.gameboard.allSunk() === false && CPU.gameboard.allSunk() === false) {
    //         if(currentPlayer === 1) {
                
                    currentPlayer = 2;
    //         } else if(currentPlayer === 2) {
    //             // CPU randomly automatically plays and there is no need for any board to be displays for the CPU.
    //             // CPU plays
    //         }

    //         //player switch
    //         if(currentPlayer === 1) {
    //             //display message saying it is now CPU turn
    //             currentPlayer = 2;
    //         } else {
    //             // display message saying it is now player turn
    //             currentPlayer =1;
    //         }
    //     }
    // } catch(err) {
    //     console.log(err);
    // }
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
        for(let j=0;j<2;j++) {
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

function init_CPU_game() {
    console.log("Initialized CPU game");
    bodyContainer.innerHTML = "";
}

function init_player_game() {
    console.log("Initialzied player game");
    bodyContainer.innerHTML = "";
}

function pregame() {
    bodyContainer.appendChild((0,_ui_screen_init_main_screen__WEBPACK_IMPORTED_MODULE_0__["default"])());
    const mainLeftButton = document.querySelector(".main-left-button");
    const mainRightButton = document.querySelector(".main-right-button");

    mainLeftButton.addEventListener("click",init_CPU_game);
    mainRightButton.addEventListener("click",init_player_game);
}

const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Bingus","red");
player1.gameboard.receiveAttack(1,1);
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Spoingus","blue");

(0,_game__WEBPACK_IMPORTED_MODULE_2__["default"])(player1,player2);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBLDJCQUEyQiwyREFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCOzs7Ozs7VUN0Q2pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThEO0FBQ3hDO0FBQ1c7QUFDQTs7QUFFakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUVBQWtCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtREFBUztBQUN6QjtBQUNBLGdCQUFnQixtREFBUzs7QUFFekIsaURBQVcsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY2hlY2tCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY2hlY2tTaGlwQ29uZmxpY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2Rpc3BsYXlCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRIaXRTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRPY2N1cGllZENvcmRzRXhjZXB0VGFyZ2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRTaGlwQ29yZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvZWxlbWVudC9idG5HZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL2VsZW1lbnQvZGl2R2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9lbGVtZW50L2hlYWRpbmdHZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL2VsZW1lbnQvbWF0ZXJpYWxJY29uR2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9zY3JlZW4vaW5pdF9tYWluX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tc2NyZWVuLXJlZCA6ICNlZjQ0NDQ7XG4gICAgLS1tYWluLXNjcmVlbi1ibHVlIDogIzM4YmRmODtcblxuICAgIC0tbWlzc2VkLWhpdC1ibGFjayA6IGJsYWNrO1xuICAgIC0tc2hpcC1oaXQtZ29sZCA6IGdvbGQ7XG4gICAgLS1zZXQtc2hpcC1ncmF5IDogZ3JheTtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbiA6IDA7XG59XG5cbi5tYWluLXNjcmVlbi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tbGVmdC1kaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLXJlZCk7XG5cbiAgICBkaXNwbGF5IDogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwIDogMzJweDtcbn1cblxuLm1haW4tcmlnaHQtZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcbiAgICBcbiAgICBkaXNwbGF5IDogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwIDogMzJweDtcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XG59XG5cbi5tYWluLWxlZnQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1haW4tcmlnaHQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYWluLWxlZnQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvciA6IHZhcigtLW1haW4tc2NyZWVuLXJlZCk7XG59XG5cbi5tYWluLXJpZ2h0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcbn1cblxuLmJvYXJkLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWN0aXZlLXBsYXllci1kaXYge1xuICAgIGRpc3BsYXkgIDpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aCA6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vcHAtcGxheWVyLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGggOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWN0aXZlLXBsYXllci1ib2FyZCB7XG4gICAgZGlzcGxheSA6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhMGE7XG59XG5cbi5hY3RpdmUtcGxheWVyLWdyaWQtc3F1YXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xufVxuXG4ub3BwLXBsYXllci1ib2FyZCB7XG4gICAgZGlzcGxheSA6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhMGE7XG59XG5cbi5vcHAtcGxheWVyLWdyaWQtc3F1YXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCOztJQUU1QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtSkFBbUo7QUFDdko7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHdDQUF3Qzs7SUFFeEMsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YseUNBQXlDOztJQUV6QyxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tc2NyZWVuLXJlZCA6ICNlZjQ0NDQ7XFxuICAgIC0tbWFpbi1zY3JlZW4tYmx1ZSA6ICMzOGJkZjg7XFxuXFxuICAgIC0tbWlzc2VkLWhpdC1ibGFjayA6IGJsYWNrO1xcbiAgICAtLXNoaXAtaGl0LWdvbGQgOiBnb2xkO1xcbiAgICAtLXNldC1zaGlwLWdyYXkgOiBncmF5O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW4gOiAwO1xcbn1cXG5cXG4ubWFpbi1zY3JlZW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1sZWZ0LWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcXG5cXG4gICAgZGlzcGxheSA6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXAgOiAzMnB4O1xcbn1cXG5cXG4ubWFpbi1yaWdodC1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xcbiAgICBcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXAgOiAzMnB4O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcblxcbi5tYWluLWxlZnQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1haW4tcmlnaHQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5tYWluLWxlZnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcXG59XFxuXFxuLm1haW4tcmlnaHQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XFxufVxcblxcbi5ib2FyZC1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItZGl2IHtcXG4gICAgZGlzcGxheSAgOmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoIDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5vcHAtcGxheWVyLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoIDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hY3RpdmUtcGxheWVyLWJvYXJkIHtcXG4gICAgZGlzcGxheSA6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhMGE7XFxufVxcblxcbi5hY3RpdmUtcGxheWVyLWdyaWQtc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcXG59XFxuXFxuLm9wcC1wbGF5ZXItYm9hcmQge1xcbiAgICBkaXNwbGF5IDogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcXG59XFxuXFxuLm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjaGVja0JvdW5kYXJ5KG5ld1gsIG5ld1ksIG5ld0FsaWduLCBsZW5ndGgpIHtcbiAgICBpZihuZXdYIDwgMCkge1xuICAgICAgICB0aHJvdyhcIlggVW5kZXIgMFwiKTtcbiAgICB9IGVsc2UgaWYobmV3WCA+IDkpIHtcbiAgICAgICAgdGhyb3coXCJYIG92ZXIgOVwiKTtcbiAgICB9XG5cbiAgICBpZihuZXdZIDwgMCkge1xuICAgICAgICB0aHJvdyhcIlkgdW5kZXIgMFwiKTtcbiAgICB9IGVsc2UgaWYobmV3WSA+IDkpIHtcbiAgICAgICAgdGhyb3coXCJZICBvdmVyIDlcIik7XG4gICAgfVxuXG4gICAgaWYobGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBcbiAgICBpZihuZXdBbGlnbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGlmKGxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgaWYobmV3WSA9PT0gOSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiVmVydGljYWwgMiBMZW5ndGggQm91bmRhcnk6IFkgQCA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYobGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZihuZXdZID09PSA4IHx8IG5ld1kgPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlZlcnRpY2FsIDMgbGVuZ3RoIEJvdW5kYXJ5OiBZIEAgOCBvciA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcIlNoaXAgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKG5ld0FsaWduID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBpZihsZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGlmKG5ld1ggPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkhvcml6b250YWwgMiBsZW5ndGggQm91bmRhcnk6IFggQCA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiggbGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZihuZXdYID09PSA4IHx8IG5ld1ggPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkhvcml6b250YWwgMyBsZW5ndGggQm91bmRhcnk6IFggQCA4IG9yIDkgZXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiU2hpcCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDNcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyhcIkFsaWdubWVudCBlcnJvciA6IFdyaXRlIHRoZSBjb3JyZWN0IG5ldyBhbGlnbm1lbnRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja0JvdW5kYXJ5OyB7XG5cbn0iLCIvLyBDaGVja3Mgd2hldGhlciB0aGUgbmV3IHggYW5kIG5ldyB5IGFyZSBvY2N1cGllZCBieSBhbm90aGVyIHNoaXAuXG5pbXBvcnQgZ2V0U2hpcENvcmRzIGZyb20gXCIuL2dldFNoaXBDb3Jkc1wiO1xuXG4vLyBSZXR1cm5zIDEgaWYgYW55IG9uZSBlbGVtZW50IGZyb20gZXhwZWN0Q29yZHMgZXhpc3RzIGluIG9jY3VwaWVkQ29yZHNcbmZ1bmN0aW9uIGNoZWNrU2hpcENvbmZsaWN0KG5ld1gsbmV3WSxuZXdBbGlnbiwgbGVuZ3RoLCBvY2N1cGllZENvcmRzKSB7XG4gICAgY29uc3QgZXhwZWN0ZWRDb3JkcyA9IGdldFNoaXBDb3JkcyhuZXdYLG5ld1ksbmV3QWxpZ24sbGVuZ3RoKTtcbiAgICByZXR1cm4gb2NjdXBpZWRDb3Jkcy5zb21lKGVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXhwZWN0ZWRDb3Jkcy5zb21lKGV4cGVjdGVkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0pID8gMSA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrU2hpcENvbmZsaWN0OyIsImltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi91aS9lbGVtZW50L2RpdkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi91aS9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUGxheWVyU2lkZShwbGF5ZXIpIHtcbiAgICAvLyBBY3RpdmUgcGxheWVyIHNpZGUgZGl2IGluaXRpYWxpemF0aW9uXG4gICAgY29uc3QgYWN0aXZlUGxheWVyU2lkZSA9IGdlbmVyYXRlRGl2KFwiYWN0aXZlLXBsYXllci1kaXZcIik7XG4gICAgY29uc3QgYWN0aXZlUGxheWVySGVhZGluZyA9IGdlbmVyYXRlSGVhZGluZyhcImFjdGl2ZS1wbGF5ZXItaGVhZGluZ1wiKTtcbiAgICBhY3RpdmVQbGF5ZXJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gICAgYWN0aXZlUGxheWVyU2lkZS5hcHBlbmRDaGlsZChhY3RpdmVQbGF5ZXJIZWFkaW5nKTtcblxuICAgIC8vIEdpdmluZyB0aGUgYWN0aXZlIHBsYXllciBzaWRlIGNvbG9yXG4gICAgLy8gVE9ETyAtIGZpbmlzaCB0aGlzIGxvZ2ljIGFkZCBtb3JlIGNvbG9ycy5cbiAgICBpZihwbGF5ZXIuY29sb3IgPT09IFwicmVkXCIpIHtcbiAgICAgICAgYWN0aXZlUGxheWVyU2lkZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLW1haW4tc2NyZWVuLXJlZClcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVQbGF5ZXJTaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVQbGF5ZXJCb2FyZCA9IGdlbmVyYXRlRGl2KFwiYWN0aXZlLXBsYXllci1ib2FyZFwiKTtcbiAgICBmb3IobGV0IGk9MDsgaTw5OyBpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTA7ajw5O2orKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGdlbmVyYXRlRGl2KFwiYWN0aXZlLXBsYXllci1ncmlkLXNxdWFyZVwiKTtcbiAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQub2NjdXBpZWRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdLTEgPT09IGkgJiYgY29vcmRbMV0tMSA9PT0gaikgJiYgcGxheWVyLmdhbWVib2FyZC5oaXRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdLTEgPT09IGkgJiYgY29vcmRbMV0tMSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2hpcC1oaXQtZ29sZClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwbGF5ZXIuZ2FtZWJvYXJkLmhpdFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0tMSA9PT0gaSAmJiBjb29yZFsxXS0xID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1taXNzZWQtaGl0LWJsYWNrKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHBsYXllci5nYW1lYm9hcmQub2NjdXBpZWRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdLTEgPT09IGkgJiYgY29vcmRbMV0tMSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2V0LXNoaXAtZ3JheSlcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHRoZSBldmVudCBsaXN0ZW5lciB0aGF0IGdpdmVzIGVycnJvciBpZiBjbGlja2VkXG4gICAgICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IGdpdmVBY3RpdmVQbGF5ZXJDbGlja0Vycm9yKGksaikpO1xuXG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RpdmVQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKGFjdGl2ZVBsYXllckJvYXJkKTtcblxuICAgIHJldHVybiBhY3RpdmVQbGF5ZXJTaWRlO1xufVxuXG5mdW5jdGlvbiBnaXZlQWN0aXZlUGxheWVyQ2xpY2tFcnJvcihyb3csY29sKSB7XG4gICAgY29uc29sZS5sb2coXCJDbGlja2luZyB5b3VyIG93biBib2FyZCBub3cgaXMgZnV0aWxlIDopXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRPcHBQbGF5ZXJTaWRlKG9wcFBsYXllcikge1xuICAgIC8vIE9wcG9uZW50IHBsYXllciBzaWRlIGRpdiBpbml0aWFsaXphdGlvblxuICAgIGNvbnN0IG9wcFBsYXllclNpZGUgPSBnZW5lcmF0ZURpdihcIm9wcC1wbGF5ZXItZGl2XCIpO1xuICAgIGNvbnN0IG9wcFBsYXllckhlYWRpbmcgPSBnZW5lcmF0ZUhlYWRpbmcoXCJvcHAtcGxheWVyLWhlYWRpbmdcIik7XG4gICAgb3BwUGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3Bwb25lbnQgQm9hcmRcIjtcbiAgICBvcHBQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKG9wcFBsYXllckhlYWRpbmcpO1xuXG4gICAgLy8gR2l2aW5nIHRoZSBvcHAgcGxheWVyIHNpZGUgY29sb3JcbiAgICAvLyBBZGQgdGhlIG90aGVyIGNvbG9yc1xuICAgIGlmKG9wcFBsYXllci5jb2xvciA9PT0gXCJyZWRcIikge1xuICAgICAgICBvcHBQbGF5ZXJTaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWFpbi1zY3JlZW4tcmVkKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9wcFBsYXllclNpZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1tYWluLXNjcmVlbi1ibHVlKVwiO1xuICAgIH1cblxuICAgIGNvbnN0IG9wcFBsYXllckJvYXJkID0gZ2VuZXJhdGVEaXYoXCJvcHAtcGxheWVyLWJvYXJkXCIpO1xuICAgIGZvcihsZXQgaT0wOyBpPDk7IGkrKykge1xuICAgICAgICBmb3IobGV0IGo9MDtqPDk7aisrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlID0gZ2VuZXJhdGVEaXYoXCJvcHAtcGxheWVyLWdyaWQtc3F1YXJlXCIpO1xuICAgICAgICAgICAgaWYob3BwUGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0tMSA9PT0gaSAmJiBjb29yZFsxXS0xID09PSBqKSAmJiBvcHBQbGF5ZXIuZ2FtZWJvYXJkLmhpdFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0tMSA9PT0gaSAmJiBjb29yZFsxXS0xID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaGlwLWhpdC1nb2xkKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXS0xID09PSBpICYmIGNvb3JkWzFdLTEgPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLW1pc3NlZC1oaXQtYmxhY2spXCI7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRoYXQgZ2l2ZXMgZXJycm9yIGlmIGNsaWNrZWRcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4gb3BwUGxheWVyQ2xpY2tGdW5jdGlvbihpLGosb3BwUGxheWVyKSk7XG5cbiAgICAgICAgICAgIG9wcFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wcFBsYXllclNpZGUuYXBwZW5kQ2hpbGQob3BwUGxheWVyQm9hcmQpO1xuXG4gICAgcmV0dXJuIG9wcFBsYXllclNpZGU7XG59XG5cbmZ1bmN0aW9uIG9wcFBsYXllckNsaWNrRnVuY3Rpb24ocm93LGNvbCwgb3BwUGxheWVyKSB7XG4gICAgb3BwUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdyxjb2wpO1xuICAgIGNvbnNvbGUubG9nKG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyQm9hcmQocGxheWVyLCBvcHBQbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZERpdiA9IGdlbmVyYXRlRGl2KFwiYm9hcmQtZGl2XCIpO1xuICAgIFxuICAgIGNvbnN0IGFjdGl2ZVBsYXllclNpZGUgPSBnZXRBY3RpdmVQbGF5ZXJTaWRlKHBsYXllcik7XG4gICAgY29uc3Qgb3BwUGxheWVyU2lkZSA9IGdldE9wcFBsYXllclNpZGUob3BwUGxheWVyKTtcblxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGFjdGl2ZVBsYXllclNpZGUpO1xuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKG9wcFBsYXllclNpZGUpO1xuICAgIFxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCBncmlkXG4gICAgcmV0dXJuIGJvYXJkRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UGxheWVyQm9hcmQ7IiwiaW1wb3J0IGRpc3BsYXlQbGF5ZXJCb2FyZCBmcm9tIFwiLi9kaXNwbGF5Qm9hcmRcIjtcblxuY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBwbGF5MlBHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICBsZXQgY3VycmVudFBsYXllciA9IDE7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUocGxheWVyMS5nYW1lYm9hcmQuYWxsU3VuaygpID09PSBmYWxzZSAmJiBwbGF5ZXIyLmdhbWVib2FyZC5hbGxTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZihjdXJyZW50UGxheWVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9wbGF5ZXIgb25lIHBsYXlzXG4gICAgICAgICAgICB9IGVsc2UgaWYoY3VycmVudFBsYXllciA9PT0gMikge1xuICAgICAgICAgICAgICAgIC8vIHBsYXllciB0d28gcGxheXNcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vcGxheWVyIHN3aXRjaFxuICAgICAgICAgICAgaWYoY3VycmVudFBsYXllciA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgbW9kYWwgYXNraW5nIHBsYXllciAxIHRvIGdpdmUgdGhlIGRldmljZSB0byBwbGF5ZXIgMlxuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IG1vZGFsIGFza2luZyBwbGF5ZXIgMiB0byBnaXZlIHRoZSBkZXZpY2UgdG8gcGxheWVyIDFcbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWVyID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiBwbGF5Q1BVR2FtZShwbGF5ZXIxLCBDUFUpIHtcbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSAxO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVBsYXllckJvYXJkKHBsYXllcjEsQ1BVKSk7XG4gICAgLy8gdHJ5IHtcbiAgICAgICAgXG4gICAgLy8gICAgIHdoaWxlKHBsYXllcjEuZ2FtZWJvYXJkLmFsbFN1bmsoKSA9PT0gZmFsc2UgJiYgQ1BVLmdhbWVib2FyZC5hbGxTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgLy8gICAgICAgICBpZihjdXJyZW50UGxheWVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAyO1xuICAgIC8vICAgICAgICAgfSBlbHNlIGlmKGN1cnJlbnRQbGF5ZXIgPT09IDIpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyBDUFUgcmFuZG9tbHkgYXV0b21hdGljYWxseSBwbGF5cyBhbmQgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYW55IGJvYXJkIHRvIGJlIGRpc3BsYXlzIGZvciB0aGUgQ1BVLlxuICAgIC8vICAgICAgICAgICAgIC8vIENQVSBwbGF5c1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAvL3BsYXllciBzd2l0Y2hcbiAgICAvLyAgICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIgPT09IDEpIHtcbiAgICAvLyAgICAgICAgICAgICAvL2Rpc3BsYXkgbWVzc2FnZSBzYXlpbmcgaXQgaXMgbm93IENQVSB0dXJuXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudFBsYXllciA9IDI7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZSBzYXlpbmcgaXQgaXMgbm93IHBsYXllciB0dXJuXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudFBsYXllciA9MTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH0gY2F0Y2goZXJyKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5Q1BVR2FtZTsiLCJpbXBvcnQgbmV3U2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgY2hlY2tCb3VuZGFyeSBmcm9tIFwiLi9jaGVja0JvdW5kYXJ5XCI7XG5pbXBvcnQgY2hlY2tTaGlwQ29uZmxpY3QgZnJvbSBcIi4vY2hlY2tTaGlwQ29uZmxpY3RcIjtcbmltcG9ydCBnZXRTaGlwQ29yZHMgZnJvbSBcIi4vZ2V0U2hpcENvcmRzXCI7XG5pbXBvcnQgZ2V0T2NjdXBpZWRFeGNlcHRUYXJnZXQgZnJvbSBcIi4vZ2V0T2NjdXBpZWRDb3Jkc0V4Y2VwdFRhcmdldFwiO1xuaW1wb3J0IGdldEhpdFNoaXAgZnJvbSBcIi4vZ2V0SGl0U2hpcFwiO1xuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3Vua1NoaXBzID0gW107XG4gICAgICAgIHRoaXMuaGl0U3BvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5vY2N1cGllZFNwb3RzID0gW107XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzID0gW107XG5cbiAgICAgICAgY29uc3Qgc2hpcDEgPSBuZXdTaGlwKDEsMSwxLFwidmVydGljYWxcIixbXSk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwMSk7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2hpcDIgPSBuZXdTaGlwKDIsNCw0LFwidmVydGljYWxcIix0aGlzLm9jY3VwaWVkU3BvdHMpO1xuICAgICAgICB0aGlzLnVuc3Vua1NoaXBzLnB1c2goc2hpcDIpO1xuICAgICAgICB0aGlzLmdldE9jY3VwaWVkU3BvdHMoKTtcblxuICAgICAgICBjb25zdCBzaGlwMyA9IG5ld1NoaXAoMiw0LDIsXCJob3Jpem9udGFsXCIsdGhpcy5vY2N1cGllZFNwb3RzKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXAzKTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwNCA9IG5ld1NoaXAoMyw3LDcsXCJ2ZXJ0aWNhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwNCk7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuXG4gICAgICAgIGNvbnN0IHNoaXA1ID0gbmV3U2hpcCgzLDEsOSxcImhvcml6b250YWxcIix0aGlzLm9jY3VwaWVkU3BvdHMpO1xuICAgICAgICB0aGlzLnVuc3Vua1NoaXBzLnB1c2goc2hpcDUpO1xuICAgICAgICB0aGlzLmdldE9jY3VwaWVkU3BvdHMoKTtcbiAgICB9XG5cbiAgICBnZXRPY2N1cGllZFNwb3RzKCkge1xuICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnVuc3Vua1NoaXBzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXBDb3JkcyA9IGdldFNoaXBDb3JkcyhcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmhlYWRYLFxuICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHNbaV0uaGVhZFksXG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tpXS5hbGlnbm1lbnQsXG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tpXS5sZW5ndGhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPG5ld1NoaXBDb3Jkcy5sZW5ndGg7aisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vY2N1cGllZFNwb3RzLnB1c2gobmV3U2hpcENvcmRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbW92ZVNoaXAoc2hpcE5vLG5ld1gsbmV3WSkge1xuICAgICAgICBsZXQgc2hpcEFsaWdubWVudCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLmFsaWdubWVudDtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5sZW5ndGg7XG5cbiAgICAgICAgaWYoY2hlY2tCb3VuZGFyeShuZXdYLG5ld1ksc2hpcEFsaWdubWVudCxzaGlwTGVuZ3RoKSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmVtU3BvdHMgPSBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCh0aGlzLm9jY3VwaWVkU3BvdHMsdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uc2hpcENvcmRzKTtcbiAgICAgICAgICAgIGlmKGNoZWNrU2hpcENvbmZsaWN0KG5ld1gsbmV3WSxzaGlwQWxpZ25tZW50LHNoaXBMZW5ndGgscmVtU3BvdHMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0udXBkYXRlQ29yZHMobmV3WCxuZXdZLHNoaXBBbGlnbm1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlNoaXAgQ29uZmxpY3QgRXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcIkNoZWNrIGJvdW5kYXJ5IGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUm90YXRlIHNoaXBcbiAgICByb3RhdGVTaGlwKHNoaXBObyxuZXdBbGlnbikge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBzaGlwWCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLmhlYWRYO1xuICAgICAgICBjb25zdCBzaGlwWSA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLmhlYWRZO1xuXG4gICAgICAgIGlmKGNoZWNrQm91bmRhcnkoc2hpcFgsc2hpcFksbmV3QWxpZ24sc2hpcExlbmd0aCkgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbVNwb3RzID0gZ2V0T2NjdXBpZWRFeGNlcHRUYXJnZXQodGhpcy5vY2N1cGllZFNwb3RzLHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLnNoaXBDb3Jkcyk7XG4gICAgICAgICAgICBpZihjaGVja1NoaXBDb25mbGljdChzaGlwWCxzaGlwWSxuZXdBbGlnbixzaGlwTGVuZ3RoLHJlbVNwb3RzKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLnVwZGF0ZUNvcmRzKHNoaXBYLCBzaGlwWSwgbmV3QWxpZ24pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlJvdGF0ZSBTaGlwIDogU2hpcCBjb25mbGljdCBlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiUm90YXRlIFNoaXAgOiBDaGVjayBib3VuZGFyeSBlcnJvclwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY2lldmUgYXR0YWNrXG4gICAgcmVjZWl2ZUF0dGFjayh0b0F0dGFja1gsIHRvQXR0YWNrWSkge1xuICAgICAgICBpZih0b0F0dGFja1ggPCAwIHx8IHRvQXR0YWNrWCA+IDkpIHtcbiAgICAgICAgICAgIHRocm93KFwiQXR0YWNrIG91dCBvZiBib3VuZHMgWFwiKTtcbiAgICAgICAgfSBlbHNlIGlmKHRvQXR0YWNrWSA8IDAgfHwgdG9BdHRhY2tZID4gOSkge1xuICAgICAgICAgICAgdGhyb3coXCJBdHRhY2sgb3V0IG9mIGJvdW5kcyBZXCIpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuaGl0U3BvdHMuc29tZShlbGVtZW50ID0+IEpTT04uc3RyaW5naWZ5KGVsZW1lbnQpID09PVxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3RvQXR0YWNrWCx0b0F0dGFja1ldKSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkF0dGFjayBjb29yZGluYXRlIGFscmVhZHkgaGl0XCIpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpdFNwb3RzLnB1c2goW3RvQXR0YWNrWCx0b0F0dGFja1ldKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMub2NjdXBpZWRTcG90cy5zb21lKGVsZW1lbnQgPT4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09XG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbdG9BdHRhY2tYLHRvQXR0YWNrWV0pKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBUb0hpdCA9IGdldEhpdFNoaXAodGhpcy51bnN1bmtTaGlwcywgdG9BdHRhY2tYLCB0b0F0dGFja1kpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XS5nZXRIaXQoKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnVuc3Vua1NoaXBzW3NoaXBUb0hpdF0uaXNTdW5rKCk9PT10cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnVuc3Vua1NoaXBzW3NoaXBUb0hpdF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vua1NoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHMuc3BsaWNlKHNoaXBUb0hpdCwxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBpZih0aGlzLnVuc3Vua1NoaXBzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVCb2FyZDsiLCJmdW5jdGlvbiBnZXRIaXRTaGlwKHNoaXBBcnJheSwgdG9BdHRhY2tYLCB0b0F0dGFja1kpIHtcbiAgICBmb3IobGV0IGk9MDtpPHNoaXBBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0wO2o8MjtqKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KHNoaXBBcnJheVtpXS5zaGlwQ29yZHNbal0pID09PSBKU09OLnN0cmluZ2lmeShbdG9BdHRhY2tYLHRvQXR0YWNrWV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRIaXRTaGlwOyIsImZ1bmN0aW9uIGdldE9jY3VwaWVkRXhjZXB0VGFyZ2V0KGFsbE9jY3VwaWVkQ29yZHMsc2hpcENvcmRzKSB7XG4gICAgY29uc3QgcmVtU3BvdHMgPSBhbGxPY2N1cGllZENvcmRzLmZpbHRlcihpdGVtID0+XG4gICAgICAgICFzaGlwQ29yZHMuc29tZShzaGlwQ29vcmQgPT5cbiAgICAgICAgICBpdGVtLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IHNoaXBDb29yZFtpbmRleF0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICByZXR1cm4gcmVtU3BvdHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE9jY3VwaWVkRXhjZXB0VGFyZ2V0OyIsImZ1bmN0aW9uIGdldFNoaXBDb3JkcyhYLFksYWxpZ24sbGVuZ3RoKSB7XG4gICAgbGV0IG9jY3VwaWVkQ29yZHMgPSBbXTtcbiAgICBpZihhbGlnbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGVuZ3RoO2krKykge1xuICAgICAgICAgICAgb2NjdXBpZWRDb3Jkcy5wdXNoKFtYLFkraV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKGFsaWduID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIG9jY3VwaWVkQ29yZHMucHVzaChbWCtpLFldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93KFwiR2V0U2hpcENvcmRzIDogQWxpZ25tZW50IGVycm9yXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBvY2N1cGllZENvcmRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRTaGlwQ29yZHM7IiwiaW1wb3J0IG5ld0dhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY2xhc3MgcGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGNvbG9yKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXdHYW1lQm9hcmQoKTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcjtcbiAgICB9XG5cbiAgICBzZXRDb2xvcihuZXdDb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gbmV3Q29sb3I7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXdQbGF5ZXIobmFtZSxjb2xvcikge1xuICAgIGNvbnN0IGNyZWF0ZWRQbGF5ZXIgPSBuZXcgcGxheWVyKG5hbWUsY29sb3IpO1xuICAgIHJldHVybiBjcmVhdGVkUGxheWVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdQbGF5ZXI7IiwiaW1wb3J0IGNoZWNrQm91bmRhcnkgZnJvbSBcIi4vY2hlY2tCb3VuZGFyeVwiO1xuaW1wb3J0IGNoZWNrU2hpcENvbmZsaWN0IGZyb20gXCIuL2NoZWNrU2hpcENvbmZsaWN0XCI7XG5pbXBvcnQgZ2V0U2hpcENvcmRzIGZyb20gXCIuL2dldFNoaXBDb3Jkc1wiO1xuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsaGVhZFgsaGVhZFksYWxpZ25tZW50KSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhlYWRYID0gaGVhZFg7XG4gICAgICAgIHRoaXMuaGVhZFkgPSBoZWFkWTtcbiAgICAgICAgdGhpcy5hbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XG4gICAgICAgIHRoaXMuc2hpcENvcmRzID0gZ2V0U2hpcENvcmRzKHRoaXMuaGVhZFgsdGhpcy5oZWFkWSx0aGlzLmFsaWdubWVudCx0aGlzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuXG4gICAgZ2V0SGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY29vcmRzXG4gICAgdXBkYXRlQ29yZHMobmV3SGVhZFgsbmV3SGVhZFksbmV3QWxpZ24pIHtcbiAgICAgICAgdGhpcy5oZWFkWCA9IG5ld0hlYWRYO1xuICAgICAgICB0aGlzLmhlYWRZID0gbmV3SGVhZFk7XG4gICAgICAgIHRoaXMuYWxpZ25tZW50ID0gbmV3QWxpZ247XG4gICAgICAgIHRoaXMuc2hpcENvcmRzID0gZ2V0U2hpcENvcmRzKHRoaXMuaGVhZFgsdGhpcy5oZWFkWSx0aGlzLmFsaWdubWVudCx0aGlzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZih0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV3U2hpcChsZW5ndGgsaGVhZFgsaGVhZFksYWxpZ25tZW50LG9jY3VwaWVkQ29yZHMpIHtcbiAgICBpZihsZW5ndGggPCAxKSB7XG4gICAgICAgIHRocm93KFwiU2hpcCBpcyB0b28gc21hbGxcIik7XG4gICAgfVxuICAgIGlmKGxlbmd0aCA+IDMpIHtcbiAgICAgICAgdGhyb3coXCJTaGlwIGlzIHRvbyBiaWdcIik7XG4gICAgfVxuICAgIGlmKGNoZWNrQm91bmRhcnkoaGVhZFgsaGVhZFksYWxpZ25tZW50LGxlbmd0aCkgIT09IDEpIHtcbiAgICAgICAgdGhyb3coXCJCb3VuZGFyeSBleGNlcHRpb25cIik7XG4gICAgfVxuICAgIGlmKGNoZWNrU2hpcENvbmZsaWN0KGhlYWRYLGhlYWRZLGFsaWdubWVudCxsZW5ndGgsb2NjdXBpZWRDb3JkcykgPT09IDEpIHtcbiAgICAgICAgdGhyb3coXCJTaGlwIGNvbmZsaWN0IGVycm9yXCIpO1xuICAgIH1cbiAgICBpZigoYWxpZ25tZW50ICE9PSBcInZlcnRpY2FsXCIpICYmIChhbGlnbm1lbnQgIT09IFwiaG9yaXpvbnRhbFwiKSkge1xuICAgICAgICB0aHJvdyhcIkFsaWdubWVudCBtdXN0IGJlIGVpdGhlciB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXCIpO1xuICAgIH1cbiAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoLCBoZWFkWCxoZWFkWSxhbGlnbm1lbnQpO1xuICAgIHJldHVybiBuZXdTaGlwO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ld1NoaXA7IiwiZnVuY3Rpb24gZ2VuZXJhdGVCdXR0b24oY2xhc3NOYW1lLGlkKSB7XG4gICAgY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGlmKGNsYXNzTmFtZSkge1xuICAgICAgICBuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gaWYoaWQpIHtcbiAgICAgICAgbmV3QnV0dG9uLmlkID0gaWQ7XG4gICAgfVxuICAgIHJldHVybiBuZXdCdXR0b247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQnV0dG9uOyIsImZ1bmN0aW9uIGdlbmVyYXRlRGl2KGNsYXNzTmFtZSwgaWROYW1lKSB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYoY2xhc3NOYW1lKSB7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmKGlkTmFtZSkge1xuICAgICAgICBuZXdEaXYuaWQgPSBpZE5hbWU7XG4gICAgfVxuICAgIHJldHVybiBuZXdEaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlRGl2OyIsImZ1bmN0aW9uIGdlbmVyYXRlSGVhZGluZyhjbGFzc05hbWUsIGlkKSB7XG4gICAgY29uc3QgbmV3SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgIGlmKGNsYXNzTmFtZSkge1xuICAgICAgICBuZXdIZWFkaW5nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IFxuICAgIGlmKGlkKSB7XG4gICAgICAgIG5ld0hlYWRpbmcuaWQgPSBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0hlYWRpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSGVhZGluZzsiLCJmdW5jdGlvbiBnZW5lcmF0ZU1hdGVyaWFsSWNvbihpY29uTmFtZSxmb250U2l6ZSkge1xuICAgIGNvbnN0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBuZXdJY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcbiAgICBuZXdJY29uLnRleHRDb250ZW50ID0gaWNvbk5hbWU7XG4gICAgbmV3SWNvbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIHJldHVybiBuZXdJY29uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU1hdGVyaWFsSWNvbjsiLCJpbXBvcnQgZ2VuZXJhdGVEaXYgZnJvbSBcIi4uL2VsZW1lbnQvZGl2R2VuXCJcbmltcG9ydCBnZW5lcmF0ZUJ1dHRvbiBmcm9tIFwiLi4vZWxlbWVudC9idG5HZW5cIjtcbmltcG9ydCBnZW5lcmF0ZU1hdGVyaWFsSWNvbiBmcm9tIFwiLi4vZWxlbWVudC9tYXRlcmlhbEljb25HZW5cIjtcbmltcG9ydCBnZW5lcmF0ZUhlYWRpbmcgZnJvbSBcIi4uL2VsZW1lbnQvaGVhZGluZ0dlblwiO1xuXG5mdW5jdGlvbiBpbml0X21haW5fc2NyZWVuX2YoKSB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLXNjcmVlbi1jb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgbGVmdERpdiA9IGdlbmVyYXRlRGl2KFwibWFpbi1sZWZ0LWRpdlwiKTtcbiAgICBjb25zdCBsZWZ0RGl2SWNvbkRpdiA9IGdlbmVyYXRlRGl2KFwibWFpbi1sZWZ0LWljb24tZGl2XCIpO1xuICAgIGNvbnN0IGxlZnREaXZJY29uID0gZ2VuZXJhdGVNYXRlcmlhbEljb24oXCJjb21wdXRlclwiLFwiMjQwcHhcIik7XG4gICAgbGVmdERpdkljb25EaXYuYXBwZW5kQ2hpbGQobGVmdERpdkljb24pO1xuICAgIGNvbnN0IGxlZnREaXZIZWFkID0gZ2VuZXJhdGVIZWFkaW5nKFwibWFpbi1sZWZ0LWhlYWRcIik7XG4gICAgbGVmdERpdkhlYWQudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyXCI7XG4gICAgY29uc3QgbGVmdERpdkJ1dHRvbiA9IGdlbmVyYXRlQnV0dG9uKFwibWFpbi1sZWZ0LWJ1dHRvblwiKTtcbiAgICBsZWZ0RGl2QnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluc3QgQ29tcHV0ZXJcIjtcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKGxlZnREaXZJY29uRGl2KTtcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKGxlZnREaXZIZWFkKTtcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKGxlZnREaXZCdXR0b24pO1xuXG4gICAgY29uc3QgcmlnaHREaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tcmlnaHQtZGl2XCIpO1xuICAgIGNvbnN0IHJpZ2h0RGl2SWNvbkRpdiA9IGdlbmVyYXRlRGl2KFwibWFpbi1yaWdodC1pY29uLWRpdlwiKTtcbiAgICBjb25zdCByaWdodERpdkljb24gPSBnZW5lcmF0ZU1hdGVyaWFsSWNvbihcInBlcnNvblwiLFwiMjQwcHhcIik7XG4gICAgcmlnaHREaXZJY29uRGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2SWNvbik7XG4gICAgY29uc3QgcmlnaHREaXZIZWFkID0gZ2VuZXJhdGVIZWFkaW5nKFwibWFpbi1yaWdodC1oZWFkXCIpO1xuICAgIHJpZ2h0RGl2SGVhZC50ZXh0Q29udGVudCA9IFwiUGxheWVyXCI7XG4gICAgY29uc3QgcmlnaHREaXZCdXR0b24gPSBnZW5lcmF0ZUJ1dHRvbihcIm1haW4tcmlnaHQtYnV0dG9uXCIpO1xuICAgIHJpZ2h0RGl2QnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluc3QgYW5vdGhlciBwbGF5ZXJcIjtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChyaWdodERpdkljb25EaXYpO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2SGVhZCk7XG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQocmlnaHREaXZCdXR0b24pO1xuXG5cbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcbiAgICByZXR1cm4gY29udGFpbmVyRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0X21haW5fc2NyZWVuX2Y7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gTWFpbiBzY3JlZW4gYXBwZWFycyBhbGxvd2luZyB0aGUgdXNlciB0byBjaG9vc2UgYmV0d2VlbiBjb21wdXRlciBvciBwbGF5ZXIgdiBwbGF5ZXIgLSBET05FIFxuLy8gQmFzZWQgb24gdGhlIHVzZXJzIGNob2ljZSB0aGUgbmV4dCBzY3JlZW4gaXMgc2hvd24gd2hlcmUgdGhlIHVzZXIgb3IgdXNlcnMgY2FuIGNob29zZSB0aGVpciBuYW1lIGFuZCBjb2xvclxuLy8gT25jZSB0aGUgc3RhcnQgZ2FtZSBidXR0b24gaXMgcHJlc3NlZCB0aGUgZ2FtZVxuLy8gTGV0IHBsYXllciBvbmUgcGxhY2UgdGhlaXIgc2hpcHNcbi8vIE9uY2UgdGhlIHBsYXllciBvbmUgaXMgZG9uZSBwbGFjaW5nIHRoZWlyIHNoaXBzXG4vLyBJZiBjb21wdXRlciAtPiBhdXRvbWF0ZSB0aGUgcHJvY2VzcyBvZiBwbGFjaW5nIHNoaXBzXG4vLyBJZiBhbm90aGVyIHBsYXllciAtPiBsZXQgcGxheWVyIHR3byBwbGFjZSB0aGVpciBzaGlwcy5cbi8vIEJlZ2luIHRoZSBnYW1lIGxvb3AgdW50aWwgb25lIG9mIHRoZSBwbGF5ZXJzIGdhbWVib2FyZHMgYWxsIHN1bmsgZnVuY3Rpb24gcmV0dXJucyB0cnVlLlxuLy8gd2hlbiB0aGF0IGhhcHBlbnMgd2UgbmVlZCB0byByZXNldCB0aGUgZ2FtZSBhZ2FpbiBieSBtb3N0bHkgbWFraW5nIG5ldyBwbGF5ZXJzXG5cbmltcG9ydCBpbml0X21haW5fc2NyZWVuX2YgZnJvbSBcIi4vdWkvc2NyZWVuL2luaXRfbWFpbl9zY3JlZW5cIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHBsYXlDUFVHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBuZXdQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gaW5pdF9DUFVfZ2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemVkIENQVSBnYW1lXCIpO1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaW5pdF9wbGF5ZXJfZ2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWx6aWVkIHBsYXllciBnYW1lXCIpO1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcHJlZ2FtZSgpIHtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRfbWFpbl9zY3JlZW5fZigpKTtcbiAgICBjb25zdCBtYWluTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1sZWZ0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWluUmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tcmlnaHQtYnV0dG9uXCIpO1xuXG4gICAgbWFpbkxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW5pdF9DUFVfZ2FtZSk7XG4gICAgbWFpblJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGluaXRfcGxheWVyX2dhbWUpO1xufVxuXG5jb25zdCBwbGF5ZXIxID0gbmV3UGxheWVyKFwiQmluZ3VzXCIsXCJyZWRcIik7XG5wbGF5ZXIxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDEsMSk7XG5jb25zdCBwbGF5ZXIyID0gbmV3UGxheWVyKFwiU3BvaW5ndXNcIixcImJsdWVcIik7XG5cbnBsYXlDUFVHYW1lKHBsYXllcjEscGxheWVyMik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9