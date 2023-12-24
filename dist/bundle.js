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
}

.win-message {
    height: 100vh;
    width: 100%;
    display : flex;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4BAA4B;;IAE5B,0BAA0B;IAC1B,sBAAsB;IACtB,sBAAsB;IACtB,mJAAmJ;AACvJ;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,wCAAwC;;IAExC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,yCAAyC;;IAEzC,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,kCAAkC;IAClC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB","sourcesContent":[":root {\n    --main-screen-red : #ef4444;\n    --main-screen-blue : #38bdf8;\n\n    --missed-hit-black : black;\n    --ship-hit-gold : gold;\n    --set-ship-gray : gray;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    margin : 0;\n}\n\n.main-screen-container {\n    height: 100vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main-left-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-red);\n\n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.main-right-div {\n    height: 100%;\n    width: 50%;\n    background-color: var(--main-screen-blue);\n    \n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap : 32px;\n}\n\n.heading {\n    font-size: 64px;\n    font-weight: 700;\n}\n\n.button {\n    outline: none;\n    border: none;\n    padding: 16px;\n    font-weight: 700;\n    transition: 500ms;\n}\n\n.main-left-button {\n    background-color: var(--main-screen-red);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-right-button {\n    background-color: var(--main-screen-blue);\n    border: 5px solid black;\n    font-size: 16px;\n}\n\n.main-left-button:hover {\n    background-color: black;\n    color : var(--main-screen-red);\n}\n\n.main-right-button:hover {\n    background-color: black;\n    color : var(--main-screen-blue);\n}\n\n.board-div {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n}\n\n.active-player-div {\n    display  :flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.opp-player-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width : 50%;\n    height: 100%;\n}\n\n.active-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.active-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.opp-player-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    border: 1px solid #0a0a0a;\n}\n\n.opp-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.win-message {\n    height: 100vh;\n    width: 100%;\n    display : flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.move-container {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 32px;\n}\n\n.move-board {\n    display : grid;\n    grid-template-columns: repeat(9,60px);\n    grid-template-rows: repeat(9,60px);\n    box-shadow: 0 0 0 1px #000;\n}\n\n.move-player-grid-square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 0 0 1px #000;\n}\n\n.confirm-button {\n    border : 5px solid black;\n    font-weight: 700;\n    transition: 500ms;\n}\n\n.confirm-button:hover {\n    border: 5px solid #fafafa;\n    color: #fafafa;\n}"],"sourceRoot":""}]);
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
    activePlayerHeading.textContent = `${player.name} Board`;
    activePlayerSide.appendChild(activePlayerHeading);

    // Giving the active player side color
    // TODO - finish this logic add more colors.
    if(player.color === "red") {
        activePlayerSide.style.backgroundColor = "var(--main-screen-red)";
    } else {
        activePlayerSide.style.backgroundColor = "var(--main-screen-blue)";
    }

    const activePlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("active-player-board");
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("active-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } else if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
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
    oppPlayerHeading.textContent = `${oppPlayer.name} Board`;
    oppPlayerSide.appendChild(oppPlayerHeading);

    // Giving the opp player side color
    // Add the other colors
    if(oppPlayer.color === "red") {
        oppPlayerSide.style.backgroundColor = "var(--main-screen-red)";
    } else {
        oppPlayerSide.style.backgroundColor = "var(--main-screen-blue)";
    }

    const oppPlayerBoard = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("opp-player-board");
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("opp-player-grid-square");
            if(oppPlayer.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            }
            oppPlayerBoard.appendChild(gridSquare);
        }
    }
    oppPlayerSide.appendChild(oppPlayerBoard);

    return oppPlayerSide;
}

function displayPlayerBoard(player,oppPlayer) {
    const boardDiv = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_0__["default"])("board-div");
    
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


function gameLoop(currPlayer,oppPlayer) {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild((0,_displayBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(currPlayer,oppPlayer));

    if(currPlayer.name === "CPU") {
        let toAttackX,toAttackY;
        do {
            toAttackX = Math.floor(Math.random() * 9) + 1;
            toAttackY = Math.floor(Math.random() * 9) + 1;
        } while (oppPlayer.gameboard.hitSpots.some(([x, y]) => x === toAttackX && y === toAttackY));

        console.log(toAttackX,toAttackY);
        try {
            oppPlayer.gameboard.receiveAttack(toAttackX,toAttackY);

            if(oppPlayer.gameboard.allSunk()) {
                bodyContainer.innerHTML = "";
                const winMessage = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__["default"])("win-message");
                winMessage.style.backgroundColor = currPlayer.color;
                winMessage.textContent = `${currPlayer.name} has won`;
                bodyContainer.appendChild(winMessage);
                return;
            }
            const p1 = currPlayer;
            const p2 = oppPlayer;
            gameLoop(p2,p1);
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
                            bodyContainer.innerHTML = "";
                            const winMessage = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_2__["default"])("win-message");
                            winMessage.style.backgroundColor = currPlayer.color;
                            winMessage.textContent = `${currPlayer.name} has won`;
                            bodyContainer.appendChild(winMessage);
                            return;
                        }
                        const p1 = currPlayer;
                        const p2 = oppPlayer;
                        gameLoop(p2,p1);
                    } catch(err) {
                        console.log(err);
                    }
                })
            }
        }
    }
}

// function play2PGame(player1, player2) {
//     let currentPlayer = 1;
//     try {
//         while(player1.gameboard.allSunk() === false && player2.gameboard.allSunk() === false) {
//             if(currentPlayer === 1) {
                
//                 //player one plays
//             } else if(currentPlayer === 2) {
//                 // player two plays
//             }
    
//             //player switch
//             if(currentPlayer === 1) {
//                 // display modal asking player 1 to give the device to player 2
//                 currentPlayer = 2;
//             } else {
//                 // display modal asking player 2 to give the device to player 1
//                 currentPlayer = 1;
//             }
//         }
//     } catch(err) {
//         console.log(err);
//     }
    
// }


function playCPUGame(player1, CPU) {
    bodyContainer.innerHTML = "";
    gameLoop(player1,CPU);
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

function moveShip(player) {
    const bodyContainer = document.querySelector(".container");
    bodyContainer.innerHTML = "";
    

    const moveContainer = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("move-container");
    const colorToApply = (0,_getColor__WEBPACK_IMPORTED_MODULE_0__["default"])(player.color);
    moveContainer.style.backgroundColor = colorToApply;

    const moveHeading = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_4__["default"])("move-heading");
    moveHeading.textContent = "Set Your Board";
    moveContainer.appendChild(moveHeading);

    const boardContainer = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("board-container");
    const board = getBoard(player);
    boardContainer.appendChild(board);
    moveContainer.appendChild(boardContainer);

    const confirmButton = (0,_ui_element_btnGen__WEBPACK_IMPORTED_MODULE_2__["default"])("confirm-button");
    confirmButton.textContent = "Confirm";
    confirmButton.style.backgroundColor = colorToApply;
    moveContainer.appendChild(confirmButton);

    const helpContainer = (0,_ui_element_divGen__WEBPACK_IMPORTED_MODULE_3__["default"])("help-container");
    helpContainer.textContent = "Help content here";
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
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Bingus","red");
    const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("CPU","blue");

    bodyContainer.innerHTML = "";
    (0,_moveShip__WEBPACK_IMPORTED_MODULE_4__["default"])(player1);
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

pregame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQjs7Ozs7O1VDdENqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEQ7QUFDeEM7QUFDVztBQUNBO0FBQ0M7O0FBRWxDOztBQUVBO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCLG9CQUFvQixtREFBUzs7QUFFN0I7QUFDQSxJQUFJLHFEQUFRO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUVBQWtCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY2hlY2tCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY2hlY2tTaGlwQ29uZmxpY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2Rpc3BsYXlCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRDb2xvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0SGl0U2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0T2NjdXBpZWRDb3Jkc0V4Y2VwdFRhcmdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0U2hpcENvcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9tb3ZlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9lbGVtZW50L2J0bkdlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvZWxlbWVudC9kaXZHZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL2VsZW1lbnQvaGVhZGluZ0dlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvZWxlbWVudC9tYXRlcmlhbEljb25HZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL3NjcmVlbi9pbml0X21haW5fc2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1zY3JlZW4tcmVkIDogI2VmNDQ0NDtcbiAgICAtLW1haW4tc2NyZWVuLWJsdWUgOiAjMzhiZGY4O1xuXG4gICAgLS1taXNzZWQtaGl0LWJsYWNrIDogYmxhY2s7XG4gICAgLS1zaGlwLWhpdC1nb2xkIDogZ29sZDtcbiAgICAtLXNldC1zaGlwLWdyYXkgOiBncmF5O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luIDogMDtcbn1cblxuLm1haW4tc2NyZWVuLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1sZWZ0LWRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcblxuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXAgOiAzMnB4O1xufVxuXG4ubWFpbi1yaWdodC1kaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xuICAgIFxuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXAgOiAzMnB4O1xufVxuXG4uaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcbn1cblxuLm1haW4tbGVmdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLXJlZCk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWFpbi1yaWdodC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1haW4tbGVmdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcbn1cblxuLm1haW4tcmlnaHQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvciA6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xufVxuXG4uYm9hcmQtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hY3RpdmUtcGxheWVyLWRpdiB7XG4gICAgZGlzcGxheSAgOmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoIDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm9wcC1wbGF5ZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aCA6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hY3RpdmUtcGxheWVyLWJvYXJkIHtcbiAgICBkaXNwbGF5IDogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcbn1cblxuLmFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi5vcHAtcGxheWVyLWJvYXJkIHtcbiAgICBkaXNwbGF5IDogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcbn1cblxuLm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi53aW4tbWVzc2FnZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5IDogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW92ZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzMnB4O1xufVxuXG4ubW92ZS1ib2FyZCB7XG4gICAgZGlzcGxheSA6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xufVxuXG4ubW92ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi5jb25maXJtLWJ1dHRvbiB7XG4gICAgYm9yZGVyIDogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XG59XG5cbi5jb25maXJtLWJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZhZmFmYTtcbiAgICBjb2xvcjogI2ZhZmFmYTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0Qjs7SUFFNUIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix3Q0FBd0M7O0lBRXhDLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlDQUF5Qzs7SUFFekMsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tc2NyZWVuLXJlZCA6ICNlZjQ0NDQ7XFxuICAgIC0tbWFpbi1zY3JlZW4tYmx1ZSA6ICMzOGJkZjg7XFxuXFxuICAgIC0tbWlzc2VkLWhpdC1ibGFjayA6IGJsYWNrO1xcbiAgICAtLXNoaXAtaGl0LWdvbGQgOiBnb2xkO1xcbiAgICAtLXNldC1zaGlwLWdyYXkgOiBncmF5O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW4gOiAwO1xcbn1cXG5cXG4ubWFpbi1zY3JlZW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1sZWZ0LWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcXG5cXG4gICAgZGlzcGxheSA6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXAgOiAzMnB4O1xcbn1cXG5cXG4ubWFpbi1yaWdodC1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tc2NyZWVuLWJsdWUpO1xcbiAgICBcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXAgOiAzMnB4O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcblxcbi5tYWluLWxlZnQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1haW4tcmlnaHQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5tYWluLWxlZnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcXG59XFxuXFxuLm1haW4tcmlnaHQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XFxufVxcblxcbi5ib2FyZC1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItZGl2IHtcXG4gICAgZGlzcGxheSAgOmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoIDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5vcHAtcGxheWVyLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoIDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hY3RpdmUtcGxheWVyLWJvYXJkIHtcXG4gICAgZGlzcGxheSA6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhMGE7XFxufVxcblxcbi5hY3RpdmUtcGxheWVyLWdyaWQtc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcXG59XFxuXFxuLm9wcC1wbGF5ZXItYm9hcmQge1xcbiAgICBkaXNwbGF5IDogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcXG59XFxuXFxuLm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4ud2luLW1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW92ZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzJweDtcXG59XFxuXFxuLm1vdmUtYm9hcmQge1xcbiAgICBkaXNwbGF5IDogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XFxufVxcblxcbi5tb3ZlLXBsYXllci1ncmlkLXNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XFxufVxcblxcbi5jb25maXJtLWJ1dHRvbiB7XFxuICAgIGJvcmRlciA6IDVweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcblxcbi5jb25maXJtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmYWZhZmE7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjaGVja0JvdW5kYXJ5KG5ld1gsIG5ld1ksIG5ld0FsaWduLCBsZW5ndGgpIHtcbiAgICBpZihuZXdYIDwgMCkge1xuICAgICAgICB0aHJvdyhcIlggVW5kZXIgMFwiKTtcbiAgICB9IGVsc2UgaWYobmV3WCA+IDkpIHtcbiAgICAgICAgdGhyb3coXCJYIG92ZXIgOVwiKTtcbiAgICB9XG5cbiAgICBpZihuZXdZIDwgMCkge1xuICAgICAgICB0aHJvdyhcIlkgdW5kZXIgMFwiKTtcbiAgICB9IGVsc2UgaWYobmV3WSA+IDkpIHtcbiAgICAgICAgdGhyb3coXCJZICBvdmVyIDlcIik7XG4gICAgfVxuXG4gICAgaWYobGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBcbiAgICBpZihuZXdBbGlnbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGlmKGxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgaWYobmV3WSA9PT0gOSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiVmVydGljYWwgMiBMZW5ndGggQm91bmRhcnk6IFkgQCA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYobGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZihuZXdZID09PSA4IHx8IG5ld1kgPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlZlcnRpY2FsIDMgbGVuZ3RoIEJvdW5kYXJ5OiBZIEAgOCBvciA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcIlNoaXAgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKG5ld0FsaWduID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBpZihsZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGlmKG5ld1ggPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkhvcml6b250YWwgMiBsZW5ndGggQm91bmRhcnk6IFggQCA5IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiggbGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZihuZXdYID09PSA4IHx8IG5ld1ggPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIkhvcml6b250YWwgMyBsZW5ndGggQm91bmRhcnk6IFggQCA4IG9yIDkgZXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiU2hpcCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDNcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyhcIkFsaWdubWVudCBlcnJvciA6IFdyaXRlIHRoZSBjb3JyZWN0IG5ldyBhbGlnbm1lbnRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja0JvdW5kYXJ5OyB7XG5cbn0iLCIvLyBDaGVja3Mgd2hldGhlciB0aGUgbmV3IHggYW5kIG5ldyB5IGFyZSBvY2N1cGllZCBieSBhbm90aGVyIHNoaXAuXG5pbXBvcnQgZ2V0U2hpcENvcmRzIGZyb20gXCIuL2dldFNoaXBDb3Jkc1wiO1xuXG4vLyBSZXR1cm5zIDEgaWYgYW55IG9uZSBlbGVtZW50IGZyb20gZXhwZWN0Q29yZHMgZXhpc3RzIGluIG9jY3VwaWVkQ29yZHNcbmZ1bmN0aW9uIGNoZWNrU2hpcENvbmZsaWN0KG5ld1gsbmV3WSxuZXdBbGlnbiwgbGVuZ3RoLCBvY2N1cGllZENvcmRzKSB7XG4gICAgY29uc3QgZXhwZWN0ZWRDb3JkcyA9IGdldFNoaXBDb3JkcyhuZXdYLG5ld1ksbmV3QWxpZ24sbGVuZ3RoKTtcbiAgICByZXR1cm4gb2NjdXBpZWRDb3Jkcy5zb21lKGVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXhwZWN0ZWRDb3Jkcy5zb21lKGV4cGVjdGVkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0pID8gMSA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrU2hpcENvbmZsaWN0OyIsImltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi91aS9lbGVtZW50L2RpdkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi91aS9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUGxheWVyU2lkZShwbGF5ZXIpIHtcbiAgICAvLyBBY3RpdmUgcGxheWVyIHNpZGUgZGl2IGluaXRpYWxpemF0aW9uXG4gICAgY29uc3QgYWN0aXZlUGxheWVyU2lkZSA9IGdlbmVyYXRlRGl2KFwiYWN0aXZlLXBsYXllci1kaXZcIik7XG4gICAgY29uc3QgYWN0aXZlUGxheWVySGVhZGluZyA9IGdlbmVyYXRlSGVhZGluZyhcImFjdGl2ZS1wbGF5ZXItaGVhZGluZ1wiKTtcbiAgICBhY3RpdmVQbGF5ZXJIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IEJvYXJkYDtcbiAgICBhY3RpdmVQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKGFjdGl2ZVBsYXllckhlYWRpbmcpO1xuXG4gICAgLy8gR2l2aW5nIHRoZSBhY3RpdmUgcGxheWVyIHNpZGUgY29sb3JcbiAgICAvLyBUT0RPIC0gZmluaXNoIHRoaXMgbG9naWMgYWRkIG1vcmUgY29sb3JzLlxuICAgIGlmKHBsYXllci5jb2xvciA9PT0gXCJyZWRcIikge1xuICAgICAgICBhY3RpdmVQbGF5ZXJTaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWFpbi1zY3JlZW4tcmVkKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZVBsYXllclNpZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1tYWluLXNjcmVlbi1ibHVlKVwiO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVBsYXllckJvYXJkID0gZ2VuZXJhdGVEaXYoXCJhY3RpdmUtcGxheWVyLWJvYXJkXCIpO1xuICAgIGZvcihsZXQgaT0xOyBpPDEwOyBpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTE7ajwxMDtqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcImFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikgJiYgcGxheWVyLmdhbWVib2FyZC5oaXRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaGlwLWhpdC1nb2xkKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWlzc2VkLWhpdC1ibGFjaylcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2V0LXNoaXAtZ3JheSlcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHRoZSBldmVudCBsaXN0ZW5lciB0aGF0IGdpdmVzIGVycnJvciBpZiBjbGlja2VkXG4gICAgICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IGdpdmVBY3RpdmVQbGF5ZXJDbGlja0Vycm9yKGksaikpO1xuXG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RpdmVQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKGFjdGl2ZVBsYXllckJvYXJkKTtcblxuICAgIHJldHVybiBhY3RpdmVQbGF5ZXJTaWRlO1xufVxuXG5mdW5jdGlvbiBnaXZlQWN0aXZlUGxheWVyQ2xpY2tFcnJvcihyb3csY29sKSB7XG4gICAgY29uc29sZS5sb2coXCJDbGlja2luZyB5b3VyIG93biBib2FyZCBub3cgaXMgZnV0aWxlIDopXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRPcHBQbGF5ZXJTaWRlKG9wcFBsYXllcikge1xuICAgIC8vIE9wcG9uZW50IHBsYXllciBzaWRlIGRpdiBpbml0aWFsaXphdGlvblxuICAgIGNvbnN0IG9wcFBsYXllclNpZGUgPSBnZW5lcmF0ZURpdihcIm9wcC1wbGF5ZXItZGl2XCIpO1xuICAgIGNvbnN0IG9wcFBsYXllckhlYWRpbmcgPSBnZW5lcmF0ZUhlYWRpbmcoXCJvcHAtcGxheWVyLWhlYWRpbmdcIik7XG4gICAgb3BwUGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9IGAke29wcFBsYXllci5uYW1lfSBCb2FyZGA7XG4gICAgb3BwUGxheWVyU2lkZS5hcHBlbmRDaGlsZChvcHBQbGF5ZXJIZWFkaW5nKTtcblxuICAgIC8vIEdpdmluZyB0aGUgb3BwIHBsYXllciBzaWRlIGNvbG9yXG4gICAgLy8gQWRkIHRoZSBvdGhlciBjb2xvcnNcbiAgICBpZihvcHBQbGF5ZXIuY29sb3IgPT09IFwicmVkXCIpIHtcbiAgICAgICAgb3BwUGxheWVyU2lkZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLW1haW4tc2NyZWVuLXJlZClcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvcHBQbGF5ZXJTaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBvcHBQbGF5ZXJCb2FyZCA9IGdlbmVyYXRlRGl2KFwib3BwLXBsYXllci1ib2FyZFwiKTtcbiAgICBmb3IobGV0IGk9MTsgaTwxMDsgaSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0xO2o8MTA7aisrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlID0gZ2VuZXJhdGVEaXYoXCJvcHAtcGxheWVyLWdyaWQtc3F1YXJlXCIpO1xuICAgICAgICAgICAgaWYob3BwUGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopICYmIG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2hpcC1oaXQtZ29sZClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihvcHBQbGF5ZXIuZ2FtZWJvYXJkLmhpdFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLW1pc3NlZC1oaXQtYmxhY2spXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHBQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcHBQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKG9wcFBsYXllckJvYXJkKTtcblxuICAgIHJldHVybiBvcHBQbGF5ZXJTaWRlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyQm9hcmQocGxheWVyLG9wcFBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkRGl2ID0gZ2VuZXJhdGVEaXYoXCJib2FyZC1kaXZcIik7XG4gICAgXG4gICAgY29uc3QgYWN0aXZlUGxheWVyU2lkZSA9IGdldEFjdGl2ZVBsYXllclNpZGUocGxheWVyKTtcbiAgICBjb25zdCBvcHBQbGF5ZXJTaWRlID0gZ2V0T3BwUGxheWVyU2lkZShvcHBQbGF5ZXIpO1xuXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoYWN0aXZlUGxheWVyU2lkZSk7XG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQob3BwUGxheWVyU2lkZSk7XG4gICAgcmV0dXJuIGJvYXJkRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UGxheWVyQm9hcmQ7IiwiaW1wb3J0IGRpc3BsYXlQbGF5ZXJCb2FyZCBmcm9tIFwiLi9kaXNwbGF5Qm9hcmRcIjtcbmltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi91aS9lbGVtZW50L2RpdkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi91aS9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG5cbmZ1bmN0aW9uIGdhbWVMb29wKGN1cnJQbGF5ZXIsb3BwUGxheWVyKSB7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVBsYXllckJvYXJkKGN1cnJQbGF5ZXIsb3BwUGxheWVyKSk7XG5cbiAgICBpZihjdXJyUGxheWVyLm5hbWUgPT09IFwiQ1BVXCIpIHtcbiAgICAgICAgbGV0IHRvQXR0YWNrWCx0b0F0dGFja1k7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRvQXR0YWNrWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgICAgICAgIHRvQXR0YWNrWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgICAgfSB3aGlsZSAob3BwUGxheWVyLmdhbWVib2FyZC5oaXRTcG90cy5zb21lKChbeCwgeV0pID0+IHggPT09IHRvQXR0YWNrWCAmJiB5ID09PSB0b0F0dGFja1kpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0b0F0dGFja1gsdG9BdHRhY2tZKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wcFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0b0F0dGFja1gsdG9BdHRhY2tZKTtcblxuICAgICAgICAgICAgaWYob3BwUGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luTWVzc2FnZSA9IGdlbmVyYXRlSGVhZGluZyhcIndpbi1tZXNzYWdlXCIpO1xuICAgICAgICAgICAgICAgIHdpbk1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3VyclBsYXllci5jb2xvcjtcbiAgICAgICAgICAgICAgICB3aW5NZXNzYWdlLnRleHRDb250ZW50ID0gYCR7Y3VyclBsYXllci5uYW1lfSBoYXMgd29uYDtcbiAgICAgICAgICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdpbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHAxID0gY3VyclBsYXllcjtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gb3BwUGxheWVyO1xuICAgICAgICAgICAgZ2FtZUxvb3AocDIscDEpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9wcEdyaWRTcXVhcmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmVcIikpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPDk7aSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDk7aisrKSB7XG4gICAgICAgICAgICAgICAgb3BwR3JpZFNxdWFyZXNbKGkqOSkgKyBqXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHBQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSsxLGorMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wcFBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbk1lc3NhZ2UgPSBnZW5lcmF0ZUhlYWRpbmcoXCJ3aW4tbWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5NZXNzYWdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJQbGF5ZXIuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luTWVzc2FnZS50ZXh0Q29udGVudCA9IGAke2N1cnJQbGF5ZXIubmFtZX0gaGFzIHdvbmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwMSA9IGN1cnJQbGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwMiA9IG9wcFBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVMb29wKHAyLHAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiBwbGF5MlBHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbi8vICAgICBsZXQgY3VycmVudFBsYXllciA9IDE7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgd2hpbGUocGxheWVyMS5nYW1lYm9hcmQuYWxsU3VuaygpID09PSBmYWxzZSAmJiBwbGF5ZXIyLmdhbWVib2FyZC5hbGxTdW5rKCkgPT09IGZhbHNlKSB7XG4vLyAgICAgICAgICAgICBpZihjdXJyZW50UGxheWVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgLy9wbGF5ZXIgb25lIHBsYXlzXG4vLyAgICAgICAgICAgICB9IGVsc2UgaWYoY3VycmVudFBsYXllciA9PT0gMikge1xuLy8gICAgICAgICAgICAgICAgIC8vIHBsYXllciB0d28gcGxheXNcbi8vICAgICAgICAgICAgIH1cbiAgICBcbi8vICAgICAgICAgICAgIC8vcGxheWVyIHN3aXRjaFxuLy8gICAgICAgICAgICAgaWYoY3VycmVudFBsYXllciA9PT0gMSkge1xuLy8gICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgbW9kYWwgYXNraW5nIHBsYXllciAxIHRvIGdpdmUgdGhlIGRldmljZSB0byBwbGF5ZXIgMlxuLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAyO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IG1vZGFsIGFza2luZyBwbGF5ZXIgMiB0byBnaXZlIHRoZSBkZXZpY2UgdG8gcGxheWVyIDFcbi8vICAgICAgICAgICAgICAgICBjdXJyZW50UGxheWVyID0gMTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH0gY2F0Y2goZXJyKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgICAgfVxuICAgIFxuLy8gfVxuXG5cbmZ1bmN0aW9uIHBsYXlDUFVHYW1lKHBsYXllcjEsIENQVSkge1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBnYW1lTG9vcChwbGF5ZXIxLENQVSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlDUFVHYW1lOyIsImltcG9ydCBuZXdTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjaGVja0JvdW5kYXJ5IGZyb20gXCIuL2NoZWNrQm91bmRhcnlcIjtcbmltcG9ydCBjaGVja1NoaXBDb25mbGljdCBmcm9tIFwiLi9jaGVja1NoaXBDb25mbGljdFwiO1xuaW1wb3J0IGdldFNoaXBDb3JkcyBmcm9tIFwiLi9nZXRTaGlwQ29yZHNcIjtcbmltcG9ydCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCBmcm9tIFwiLi9nZXRPY2N1cGllZENvcmRzRXhjZXB0VGFyZ2V0XCI7XG5pbXBvcnQgZ2V0SGl0U2hpcCBmcm9tIFwiLi9nZXRIaXRTaGlwXCI7XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRTcG90cyA9IFtdO1xuICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMgPSBbXTtcblxuICAgICAgICBjb25zdCBzaGlwMSA9IG5ld1NoaXAoMSwxLDEsXCJ2ZXJ0aWNhbFwiLFtdKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXAxKTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwMiA9IG5ld1NoaXAoMiw0LDQsXCJ2ZXJ0aWNhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwMik7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuXG4gICAgICAgIGNvbnN0IHNoaXAzID0gbmV3U2hpcCgyLDQsMixcImhvcml6b250YWxcIix0aGlzLm9jY3VwaWVkU3BvdHMpO1xuICAgICAgICB0aGlzLnVuc3Vua1NoaXBzLnB1c2goc2hpcDMpO1xuICAgICAgICB0aGlzLmdldE9jY3VwaWVkU3BvdHMoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNoaXA0ID0gbmV3U2hpcCgzLDcsNyxcInZlcnRpY2FsXCIsdGhpcy5vY2N1cGllZFNwb3RzKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXA0KTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG5cbiAgICAgICAgY29uc3Qgc2hpcDUgPSBuZXdTaGlwKDMsMSw5LFwiaG9yaXpvbnRhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwNSk7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuICAgIH1cblxuICAgIGdldE9jY3VwaWVkU3BvdHMoKSB7XG4gICAgICAgIHRoaXMub2NjdXBpZWRTcG90cyA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudW5zdW5rU2hpcHMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcENvcmRzID0gZ2V0U2hpcENvcmRzKFxuICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHNbaV0uaGVhZFgsXG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tpXS5oZWFkWSxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmFsaWdubWVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmxlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bmV3U2hpcENvcmRzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMucHVzaChuZXdTaGlwQ29yZHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBtb3ZlU2hpcChzaGlwTm8sbmV3WCxuZXdZKSB7XG4gICAgICAgIGxldCBzaGlwQWxpZ25tZW50ID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uYWxpZ25tZW50O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLmxlbmd0aDtcblxuICAgICAgICBpZihjaGVja0JvdW5kYXJ5KG5ld1gsbmV3WSxzaGlwQWxpZ25tZW50LHNoaXBMZW5ndGgpID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCByZW1TcG90cyA9IGdldE9jY3VwaWVkRXhjZXB0VGFyZ2V0KHRoaXMub2NjdXBpZWRTcG90cyx0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5zaGlwQ29yZHMpO1xuICAgICAgICAgICAgaWYoY2hlY2tTaGlwQ29uZmxpY3QobmV3WCxuZXdZLHNoaXBBbGlnbm1lbnQsc2hpcExlbmd0aCxyZW1TcG90cykgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS51cGRhdGVDb3JkcyhuZXdYLG5ld1ksc2hpcEFsaWdubWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiU2hpcCBDb25mbGljdCBFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiQ2hlY2sgYm91bmRhcnkgZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSb3RhdGUgc2hpcFxuICAgIHJvdGF0ZVNoaXAoc2hpcE5vLG5ld0FsaWduKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNoaXBYID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFg7XG4gICAgICAgIGNvbnN0IHNoaXBZID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFk7XG5cbiAgICAgICAgaWYoY2hlY2tCb3VuZGFyeShzaGlwWCxzaGlwWSxuZXdBbGlnbixzaGlwTGVuZ3RoKSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmVtU3BvdHMgPSBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCh0aGlzLm9jY3VwaWVkU3BvdHMsdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uc2hpcENvcmRzKTtcbiAgICAgICAgICAgIGlmKGNoZWNrU2hpcENvbmZsaWN0KHNoaXBYLHNoaXBZLG5ld0FsaWduLHNoaXBMZW5ndGgscmVtU3BvdHMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0udXBkYXRlQ29yZHMoc2hpcFgsIHNoaXBZLCBuZXdBbGlnbik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiUm90YXRlIFNoaXAgOiBTaGlwIGNvbmZsaWN0IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJSb3RhdGUgU2hpcCA6IENoZWNrIGJvdW5kYXJ5IGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjaWV2ZSBhdHRhY2tcbiAgICByZWNlaXZlQXR0YWNrKHRvQXR0YWNrWCwgdG9BdHRhY2tZKSB7XG4gICAgICAgIGlmKHRvQXR0YWNrWCA8IDAgfHwgdG9BdHRhY2tYID4gOSkge1xuICAgICAgICAgICAgdGhyb3coXCJBdHRhY2sgb3V0IG9mIGJvdW5kcyBYXCIpO1xuICAgICAgICB9IGVsc2UgaWYodG9BdHRhY2tZIDwgMCB8fCB0b0F0dGFja1kgPiA5KSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF0dGFjayBvdXQgb2YgYm91bmRzIFlcIilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5oaXRTcG90cy5zb21lKGVsZW1lbnQgPT4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09XG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbdG9BdHRhY2tYLHRvQXR0YWNrWV0pKSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQXR0YWNrIGNvb3JkaW5hdGUgYWxyZWFkeSBoaXRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGl0U3BvdHMucHVzaChbdG9BdHRhY2tYLHRvQXR0YWNrWV0pO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5vY2N1cGllZFNwb3RzLnNvbWUoZWxlbWVudCA9PiBKU09OLnN0cmluZ2lmeShlbGVtZW50KSA9PT1cbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt0b0F0dGFja1gsdG9BdHRhY2tZXSkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRvSGl0ID0gZ2V0SGl0U2hpcCh0aGlzLnVuc3Vua1NoaXBzLCB0b0F0dGFja1gsIHRvQXR0YWNrWSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwVG9IaXRdLmdldEhpdCgpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XS5pc1N1bmsoKT09PXRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW5rU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5zcGxpY2Uoc2hpcFRvSGl0LDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBpZih0aGlzLnVuc3Vua1NoaXBzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVCb2FyZDsiLCJmdW5jdGlvbiBnZXRDb2xvcihwbGF5ZXJDb2xvcikge1xuICAgIGlmKHBsYXllckNvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLXJlZClcIjtcbiAgICB9IGVsc2UgaWYocGxheWVyQ29sb3IgPT09IFwiYmx1ZVwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLWJsdWUpXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2xvcjsiLCJmdW5jdGlvbiBnZXRIaXRTaGlwKHNoaXBBcnJheSwgdG9BdHRhY2tYLCB0b0F0dGFja1kpIHtcbiAgICBmb3IobGV0IGk9MDtpPHNoaXBBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0wO2o8c2hpcEFycmF5W2ldLnNoaXBDb3Jkcy5sZW5ndGg7aisrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShzaGlwQXJyYXlbaV0uc2hpcENvcmRzW2pdKSA9PT0gSlNPTi5zdHJpbmdpZnkoW3RvQXR0YWNrWCx0b0F0dGFja1ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SGl0U2hpcDsiLCJmdW5jdGlvbiBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldChhbGxPY2N1cGllZENvcmRzLHNoaXBDb3Jkcykge1xuICAgIGNvbnN0IHJlbVNwb3RzID0gYWxsT2NjdXBpZWRDb3Jkcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAhc2hpcENvcmRzLnNvbWUoc2hpcENvb3JkID0+XG4gICAgICAgICAgaXRlbS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBzaGlwQ29vcmRbaW5kZXhdKVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlbVNwb3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldDsiLCJmdW5jdGlvbiBnZXRTaGlwQ29yZHMoWCxZLGFsaWduLGxlbmd0aCkge1xuICAgIGxldCBvY2N1cGllZENvcmRzID0gW107XG4gICAgaWYoYWxpZ24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIG9jY3VwaWVkQ29yZHMucHVzaChbWCxZK2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihhbGlnbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBvY2N1cGllZENvcmRzLnB1c2goW1graSxZXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyhcIkdldFNoaXBDb3JkcyA6IEFsaWdubWVudCBlcnJvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXBpZWRDb3Jkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2hpcENvcmRzOyIsImltcG9ydCBnZXRDb2xvciBmcm9tIFwiLi9nZXRDb2xvclwiO1xuaW1wb3J0IGdldEhpdFNoaXAgZnJvbSBcIi4vZ2V0SGl0U2hpcFwiO1xuaW1wb3J0IGdlbmVyYXRlQnV0dG9uIGZyb20gXCIuL3VpL2VsZW1lbnQvYnRuR2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVEaXYgZnJvbSBcIi4vdWkvZWxlbWVudC9kaXZHZW5cIjtcbmltcG9ydCBnZW5lcmF0ZUhlYWRpbmcgZnJvbSBcIi4vdWkvZWxlbWVudC9oZWFkaW5nR2VuXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGdldEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWNvbnRhaW5lcicpO1xuICAgIGdldEJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgbW92ZUJvYXJkID0gZ2VuZXJhdGVEaXYoXCJtb3ZlLWJvYXJkXCIpO1xuICAgIGZvcihsZXQgaT0xO2k8MTA7aSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0xO2o8MTA7aisrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlID0gZ2VuZXJhdGVEaXYoXCJtb3ZlLXBsYXllci1ncmlkLXNxdWFyZVwiKTtcbiAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQub2NjdXBpZWRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zZXQtc2hpcC1ncmF5KVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPIC0gcm90YXRpbmcgc2hpcCBub3QgZG9uZVxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcEhpdCA9IGdldEhpdFNoaXAocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyxpLGopO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBIaXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHNbc2hpcEhpdF0uYWxpZ25tZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucm90YXRlU2hpcChzaGlwSGl0KzEsXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yb3RhdGVTaGlwKHNoaXBIaXQrMSxcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQocGxheWVyKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG1vdmVCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRCb2FyZC5hcHBlbmRDaGlsZChtb3ZlQm9hcmQpO1xufVxuXG5mdW5jdGlvbiBnZXRCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBtb3ZlQm9hcmQgPSBnZW5lcmF0ZURpdihcIm1vdmUtYm9hcmRcIik7XG4gICAgZm9yKGxldCBpPTE7aTwxMDtpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTE7ajwxMDtqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcIm1vdmUtcGxheWVyLWdyaWQtc3F1YXJlXCIpO1xuICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNldC1zaGlwLWdyYXkpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE8gLSByb3RhdGluZyBzaGlwIG5vdCBkb25lXG4gICAgICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwSGl0ID0gZ2V0SGl0U2hpcChwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzLGksaik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcEhpdCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwc1tzaGlwSGl0XS5hbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yb3RhdGVTaGlwKHNoaXBIaXQrMSxcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAoc2hpcEhpdCsxLFwidmVydGljYWxcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbW92ZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb3ZlQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIG1vdmVTaGlwKHBsYXllcikge1xuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG5cbiAgICBjb25zdCBtb3ZlQ29udGFpbmVyID0gZ2VuZXJhdGVEaXYoXCJtb3ZlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb2xvclRvQXBwbHkgPSBnZXRDb2xvcihwbGF5ZXIuY29sb3IpO1xuICAgIG1vdmVDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JUb0FwcGx5O1xuXG4gICAgY29uc3QgbW92ZUhlYWRpbmcgPSBnZW5lcmF0ZUhlYWRpbmcoXCJtb3ZlLWhlYWRpbmdcIik7XG4gICAgbW92ZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlNldCBZb3VyIEJvYXJkXCI7XG4gICAgbW92ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlSGVhZGluZyk7XG5cbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGdlbmVyYXRlRGl2KFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJvYXJkID0gZ2V0Qm9hcmQocGxheWVyKTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgbW92ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZ2VuZXJhdGVCdXR0b24oXCJjb25maXJtLWJ1dHRvblwiKTtcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclRvQXBwbHk7XG4gICAgbW92ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgIGNvbnN0IGhlbHBDb250YWluZXIgPSBnZW5lcmF0ZURpdihcImhlbHAtY29udGFpbmVyXCIpO1xuICAgIGhlbHBDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkhlbHAgY29udGVudCBoZXJlXCI7XG4gICAgbW92ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWxwQ29udGFpbmVyKTtcblxuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVTaGlwOyIsImltcG9ydCBuZXdHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIHBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSxjb2xvcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3R2FtZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XG4gICAgfVxuXG4gICAgc2V0Q29sb3IobmV3Q29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ld0NvbG9yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV3UGxheWVyKG5hbWUsY29sb3IpIHtcbiAgICBjb25zdCBjcmVhdGVkUGxheWVyID0gbmV3IHBsYXllcihuYW1lLGNvbG9yKTtcbiAgICByZXR1cm4gY3JlYXRlZFBsYXllcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3UGxheWVyOyIsImltcG9ydCBjaGVja0JvdW5kYXJ5IGZyb20gXCIuL2NoZWNrQm91bmRhcnlcIjtcbmltcG9ydCBjaGVja1NoaXBDb25mbGljdCBmcm9tIFwiLi9jaGVja1NoaXBDb25mbGljdFwiO1xuaW1wb3J0IGdldFNoaXBDb3JkcyBmcm9tIFwiLi9nZXRTaGlwQ29yZHNcIjtcblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLGhlYWRYLGhlYWRZLGFsaWdubWVudCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oZWFkWCA9IGhlYWRYO1xuICAgICAgICB0aGlzLmhlYWRZID0gaGVhZFk7XG4gICAgICAgIHRoaXMuYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICAgICAgICB0aGlzLnNoaXBDb3JkcyA9IGdldFNoaXBDb3Jkcyh0aGlzLmhlYWRYLHRoaXMuaGVhZFksdGhpcy5hbGlnbm1lbnQsdGhpcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGdldEhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNvb3Jkc1xuICAgIHVwZGF0ZUNvcmRzKG5ld0hlYWRYLG5ld0hlYWRZLG5ld0FsaWduKSB7XG4gICAgICAgIHRoaXMuaGVhZFggPSBuZXdIZWFkWDtcbiAgICAgICAgdGhpcy5oZWFkWSA9IG5ld0hlYWRZO1xuICAgICAgICB0aGlzLmFsaWdubWVudCA9IG5ld0FsaWduO1xuICAgICAgICB0aGlzLnNoaXBDb3JkcyA9IGdldFNoaXBDb3Jkcyh0aGlzLmhlYWRYLHRoaXMuaGVhZFksdGhpcy5hbGlnbm1lbnQsdGhpcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1NoaXAobGVuZ3RoLGhlYWRYLGhlYWRZLGFsaWdubWVudCxvY2N1cGllZENvcmRzKSB7XG4gICAgaWYobGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyhcIlNoaXAgaXMgdG9vIHNtYWxsXCIpO1xuICAgIH1cbiAgICBpZihsZW5ndGggPiAzKSB7XG4gICAgICAgIHRocm93KFwiU2hpcCBpcyB0b28gYmlnXCIpO1xuICAgIH1cbiAgICBpZihjaGVja0JvdW5kYXJ5KGhlYWRYLGhlYWRZLGFsaWdubWVudCxsZW5ndGgpICE9PSAxKSB7XG4gICAgICAgIHRocm93KFwiQm91bmRhcnkgZXhjZXB0aW9uXCIpO1xuICAgIH1cbiAgICBpZihjaGVja1NoaXBDb25mbGljdChoZWFkWCxoZWFkWSxhbGlnbm1lbnQsbGVuZ3RoLG9jY3VwaWVkQ29yZHMpID09PSAxKSB7XG4gICAgICAgIHRocm93KFwiU2hpcCBjb25mbGljdCBlcnJvclwiKTtcbiAgICB9XG4gICAgaWYoKGFsaWdubWVudCAhPT0gXCJ2ZXJ0aWNhbFwiKSAmJiAoYWxpZ25tZW50ICE9PSBcImhvcml6b250YWxcIikpIHtcbiAgICAgICAgdGhyb3coXCJBbGlnbm1lbnQgbXVzdCBiZSBlaXRoZXIgdmVydGljYWwgb3IgaG9yaXpvbnRhbFwiKTtcbiAgICB9XG4gICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgaGVhZFgsaGVhZFksYWxpZ25tZW50KTtcbiAgICByZXR1cm4gbmV3U2hpcDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXdTaGlwOyIsImZ1bmN0aW9uIGdlbmVyYXRlQnV0dG9uKGNsYXNzTmFtZSxpZCkge1xuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBpZihjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGlmKGlkKSB7XG4gICAgICAgIG5ld0J1dHRvbi5pZCA9IGlkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QnV0dG9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUJ1dHRvbjsiLCJmdW5jdGlvbiBnZW5lcmF0ZURpdihjbGFzc05hbWUsIGlkTmFtZSkge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmKGNsYXNzTmFtZSkge1xuICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBpZihpZE5hbWUpIHtcbiAgICAgICAgbmV3RGl2LmlkID0gaWROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZURpdjsiLCJmdW5jdGlvbiBnZW5lcmF0ZUhlYWRpbmcoY2xhc3NOYW1lLCBpZCkge1xuICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICBpZihjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3SGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBcbiAgICBpZihpZCkge1xuICAgICAgICBuZXdIZWFkaW5nLmlkID0gaWQ7XG4gICAgfVxuICAgIHJldHVybiBuZXdIZWFkaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUhlYWRpbmc7IiwiZnVuY3Rpb24gZ2VuZXJhdGVNYXRlcmlhbEljb24oaWNvbk5hbWUsZm9udFNpemUpIHtcbiAgICBjb25zdCBuZXdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgbmV3SWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gICAgbmV3SWNvbi50ZXh0Q29udGVudCA9IGljb25OYW1lO1xuICAgIG5ld0ljb24uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICByZXR1cm4gbmV3SWNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNYXRlcmlhbEljb247IiwiaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuLi9lbGVtZW50L2RpdkdlblwiXG5pbXBvcnQgZ2VuZXJhdGVCdXR0b24gZnJvbSBcIi4uL2VsZW1lbnQvYnRuR2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVNYXRlcmlhbEljb24gZnJvbSBcIi4uL2VsZW1lbnQvbWF0ZXJpYWxJY29uR2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVIZWFkaW5nIGZyb20gXCIuLi9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gaW5pdF9tYWluX3NjcmVlbl9mKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGdlbmVyYXRlRGl2KFwibWFpbi1zY3JlZW4tY29udGFpbmVyXCIpO1xuICAgIFxuICAgIGNvbnN0IGxlZnREaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tbGVmdC1kaXZcIik7XG4gICAgY29uc3QgbGVmdERpdkljb25EaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tbGVmdC1pY29uLWRpdlwiKTtcbiAgICBjb25zdCBsZWZ0RGl2SWNvbiA9IGdlbmVyYXRlTWF0ZXJpYWxJY29uKFwiY29tcHV0ZXJcIixcIjI0MHB4XCIpO1xuICAgIGxlZnREaXZJY29uRGl2LmFwcGVuZENoaWxkKGxlZnREaXZJY29uKTtcbiAgICBjb25zdCBsZWZ0RGl2SGVhZCA9IGdlbmVyYXRlSGVhZGluZyhcIm1haW4tbGVmdC1oZWFkXCIpO1xuICAgIGxlZnREaXZIZWFkLnRleHRDb250ZW50ID0gXCJDb21wdXRlclwiO1xuICAgIGNvbnN0IGxlZnREaXZCdXR0b24gPSBnZW5lcmF0ZUJ1dHRvbihcIm1haW4tbGVmdC1idXR0b25cIik7XG4gICAgbGVmdERpdkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpbnN0IENvbXB1dGVyXCI7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2SWNvbkRpdik7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2SGVhZCk7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2QnV0dG9uKTtcblxuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLXJpZ2h0LWRpdlwiKTtcbiAgICBjb25zdCByaWdodERpdkljb25EaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tcmlnaHQtaWNvbi1kaXZcIik7XG4gICAgY29uc3QgcmlnaHREaXZJY29uID0gZ2VuZXJhdGVNYXRlcmlhbEljb24oXCJwZXJzb25cIixcIjI0MHB4XCIpO1xuICAgIHJpZ2h0RGl2SWNvbkRpdi5hcHBlbmRDaGlsZChyaWdodERpdkljb24pO1xuICAgIGNvbnN0IHJpZ2h0RGl2SGVhZCA9IGdlbmVyYXRlSGVhZGluZyhcIm1haW4tcmlnaHQtaGVhZFwiKTtcbiAgICByaWdodERpdkhlYWQudGV4dENvbnRlbnQgPSBcIlBsYXllclwiO1xuICAgIGNvbnN0IHJpZ2h0RGl2QnV0dG9uID0gZ2VuZXJhdGVCdXR0b24oXCJtYWluLXJpZ2h0LWJ1dHRvblwiKTtcbiAgICByaWdodERpdkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBhZ2FpbnN0IGFub3RoZXIgcGxheWVyXCI7XG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQocmlnaHREaXZJY29uRGl2KTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChyaWdodERpdkhlYWQpO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2QnV0dG9uKTtcblxuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxlZnREaXYpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChyaWdodERpdik7XG4gICAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9tYWluX3NjcmVlbl9mOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIE1haW4gc2NyZWVuIGFwcGVhcnMgYWxsb3dpbmcgdGhlIHVzZXIgdG8gY2hvb3NlIGJldHdlZW4gY29tcHV0ZXIgb3IgcGxheWVyIHYgcGxheWVyIC0gRE9ORSBcbi8vIEJhc2VkIG9uIHRoZSB1c2VycyBjaG9pY2UgdGhlIG5leHQgc2NyZWVuIGlzIHNob3duIHdoZXJlIHRoZSB1c2VyIG9yIHVzZXJzIGNhbiBjaG9vc2UgdGhlaXIgbmFtZSBhbmQgY29sb3Jcbi8vIE9uY2UgdGhlIHN0YXJ0IGdhbWUgYnV0dG9uIGlzIHByZXNzZWQgdGhlIGdhbWVcbi8vIExldCBwbGF5ZXIgb25lIHBsYWNlIHRoZWlyIHNoaXBzXG4vLyBPbmNlIHRoZSBwbGF5ZXIgb25lIGlzIGRvbmUgcGxhY2luZyB0aGVpciBzaGlwc1xuLy8gSWYgY29tcHV0ZXIgLT4gYXV0b21hdGUgdGhlIHByb2Nlc3Mgb2YgcGxhY2luZyBzaGlwc1xuLy8gSWYgYW5vdGhlciBwbGF5ZXIgLT4gbGV0IHBsYXllciB0d28gcGxhY2UgdGhlaXIgc2hpcHMuXG4vLyBCZWdpbiB0aGUgZ2FtZSBsb29wIHVudGlsIG9uZSBvZiB0aGUgcGxheWVycyBnYW1lYm9hcmRzIGFsbCBzdW5rIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZS5cbi8vIHdoZW4gdGhhdCBoYXBwZW5zIHdlIG5lZWQgdG8gcmVzZXQgdGhlIGdhbWUgYWdhaW4gYnkgbW9zdGx5IG1ha2luZyBuZXcgcGxheWVyc1xuXG5pbXBvcnQgaW5pdF9tYWluX3NjcmVlbl9mIGZyb20gXCIuL3VpL3NjcmVlbi9pbml0X21haW5fc2NyZWVuXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBwbGF5Q1BVR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgbmV3UGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IG1vdmVTaGlwIGZyb20gXCIuL21vdmVTaGlwXCI7XG5cbmNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gaW5pdF9DUFVfZ2FtZSgpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gbmV3UGxheWVyKFwiQmluZ3VzXCIsXCJyZWRcIik7XG4gICAgY29uc3QgcGxheWVyMiA9IG5ld1BsYXllcihcIkNQVVwiLFwiYmx1ZVwiKTtcblxuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtb3ZlU2hpcChwbGF5ZXIxKTtcbn1cblxuZnVuY3Rpb24gaW5pdF9wbGF5ZXJfZ2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWx6aWVkIHBsYXllciBnYW1lXCIpO1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcHJlZ2FtZSgpIHtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRfbWFpbl9zY3JlZW5fZigpKTtcbiAgICBjb25zdCBtYWluTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1sZWZ0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWluUmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tcmlnaHQtYnV0dG9uXCIpO1xuXG4gICAgbWFpbkxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW5pdF9DUFVfZ2FtZSk7XG4gICAgbWFpblJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGluaXRfcGxheWVyX2dhbWUpO1xufVxuXG5wcmVnYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9