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


function gameLoop(currPlayer,oppPlayer,onComplete) {
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
    moveHeading.textContent = "Set Your Board";
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
        const winMessage = (0,_ui_element_headingGen__WEBPACK_IMPORTED_MODULE_6__["default"])("win-message");
        winMessage.style.backgroundColor = player.color;
        winMessage.textContent = `${player.name} has won`;
        bodyContainer.appendChild(winMessage);
    }
}

function init_CPU_game() {
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Bingus","red");
    const CPU = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("CPU","blue");

    bodyContainer.innerHTML = "";
    (0,_moveShip__WEBPACK_IMPORTED_MODULE_4__["default"])(player1,() => {
        (0,_moveCPUShips__WEBPACK_IMPORTED_MODULE_5__["default"])(CPU,() => {
            (0,_game__WEBPACK_IMPORTED_MODULE_2__["default"])(player1,CPU,(winner) => {
                displayWinMessage(winner);
            });
        })
        // Make it so that the playCPU game can take a function argument for oncomplete whihc will do as we say it to.
    });
    
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEQ7QUFDeEM7QUFDVztBQUNBO0FBQ0M7QUFDUTs7QUFFWTs7QUFFdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtFQUFlO0FBQzFDO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCLGdCQUFnQixtREFBUzs7QUFFekI7QUFDQSxJQUFJLHFEQUFRO0FBQ1osUUFBUSx5REFBWTtBQUNwQixZQUFZLGlEQUFXO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUVBQWtCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY2hlY2tCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY2hlY2tTaGlwQ29uZmxpY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2Rpc3BsYXlCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nZXRDb2xvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0SGl0U2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0T2NjdXBpZWRDb3Jkc0V4Y2VwdFRhcmdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2V0U2hpcENvcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9tb3ZlQ1BVU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL21vdmVTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3VpL2VsZW1lbnQvYnRuR2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9lbGVtZW50L2Rpdkdlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvZWxlbWVudC9oZWFkaW5nR2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy91aS9lbGVtZW50L21hdGVyaWFsSWNvbkdlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvdWkvc2NyZWVuL2luaXRfbWFpbl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLXNjcmVlbi1yZWQgOiAjZWY0NDQ0O1xuICAgIC0tbWFpbi1zY3JlZW4tYmx1ZSA6ICMzOGJkZjg7XG5cbiAgICAtLW1pc3NlZC1oaXQtYmxhY2sgOiBibGFjaztcbiAgICAtLXNoaXAtaGl0LWdvbGQgOiBnb2xkO1xuICAgIC0tc2V0LXNoaXAtZ3JheSA6IGdyYXk7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW4gOiAwO1xufVxuXG4ubWFpbi1zY3JlZW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWxlZnQtZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xuXG4gICAgZGlzcGxheSA6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcCA6IDMycHg7XG59XG5cbi5tYWluLXJpZ2h0LWRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XG4gICAgXG4gICAgZGlzcGxheSA6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcCA6IDMycHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRyYW5zaXRpb246IDUwMG1zO1xufVxuXG4ubWFpbi1sZWZ0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tcmVkKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYWluLXJpZ2h0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWFpbi1sZWZ0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xufVxuXG4ubWFpbi1yaWdodC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yIDogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XG59XG5cbi5ib2FyZC1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFjdGl2ZS1wbGF5ZXItZGl2IHtcbiAgICBkaXNwbGF5ICA6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGggOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3BwLXBsYXllci1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoIDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFjdGl2ZS1wbGF5ZXItYm9hcmQge1xuICAgIGRpc3BsYXkgOiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGEwYTBhO1xufVxuXG4uYWN0aXZlLXBsYXllci1ncmlkLXNxdWFyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcbn1cblxuLm9wcC1wbGF5ZXItYm9hcmQge1xuICAgIGRpc3BsYXkgOiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksNjBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGEwYTBhO1xufVxuXG4ub3BwLXBsYXllci1ncmlkLXNxdWFyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcbn1cblxuLndpbi1tZXNzYWdlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb3ZlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMycHg7XG59XG5cbi5tb3ZlLWJvYXJkIHtcbiAgICBkaXNwbGF5IDogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksNjBweCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XG59XG5cbi5tb3ZlLXBsYXllci1ncmlkLXNxdWFyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcbn1cblxuLmNvbmZpcm0tYnV0dG9uIHtcbiAgICBib3JkZXIgOiA1cHggc29saWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcbn1cblxuLmNvbmZpcm0tYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmFmYWZhO1xuICAgIGNvbG9yOiAjZmFmYWZhO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCOztJQUU1QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtSkFBbUo7QUFDdko7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHdDQUF3Qzs7SUFFeEMsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YseUNBQXlDOztJQUV6QyxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1zY3JlZW4tcmVkIDogI2VmNDQ0NDtcXG4gICAgLS1tYWluLXNjcmVlbi1ibHVlIDogIzM4YmRmODtcXG5cXG4gICAgLS1taXNzZWQtaGl0LWJsYWNrIDogYmxhY2s7XFxuICAgIC0tc2hpcC1oaXQtZ29sZCA6IGdvbGQ7XFxuICAgIC0tc2V0LXNoaXAtZ3JheSA6IGdyYXk7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbiA6IDA7XFxufVxcblxcbi5tYWluLXNjcmVlbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWxlZnQtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcblxcbiAgICBkaXNwbGF5IDogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcCA6IDMycHg7XFxufVxcblxcbi5tYWluLXJpZ2h0LWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zY3JlZW4tYmx1ZSk7XFxuICAgIFxcbiAgICBkaXNwbGF5IDogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcCA6IDMycHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLm1haW4tbGVmdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubWFpbi1yaWdodC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1haW4tbGVmdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1yZWQpO1xcbn1cXG5cXG4ubWFpbi1yaWdodC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3IgOiB2YXIoLS1tYWluLXNjcmVlbi1ibHVlKTtcXG59XFxuXFxuLmJvYXJkLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXBsYXllci1kaXYge1xcbiAgICBkaXNwbGF5ICA6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGggOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wcC1wbGF5ZXItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGggOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItYm9hcmQge1xcbiAgICBkaXNwbGF5IDogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSw2MHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcXG59XFxuXFxuLmFjdGl2ZS1wbGF5ZXItZ3JpZC1zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xcbn1cXG5cXG4ub3BwLXBsYXllci1ib2FyZCB7XFxuICAgIGRpc3BsYXkgOiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGEwYTBhO1xcbn1cXG5cXG4ub3BwLXBsYXllci1ncmlkLXNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7XFxufVxcblxcbi53aW4tbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5IDogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4ubW92ZS1ib2FyZCB7XFxuICAgIGRpc3BsYXkgOiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LDYwcHgpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcXG59XFxuXFxuLm1vdmUtcGxheWVyLWdyaWQtc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9uIHtcXG4gICAgYm9yZGVyIDogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZhZmFmYTtcXG4gICAgY29sb3I6ICNmYWZhZmE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNoZWNrQm91bmRhcnkobmV3WCwgbmV3WSwgbmV3QWxpZ24sIGxlbmd0aCkge1xuICAgIGlmKG5ld1ggPCAwKSB7XG4gICAgICAgIHRocm93KFwiWCBVbmRlciAwXCIpO1xuICAgIH0gZWxzZSBpZihuZXdYID4gOSkge1xuICAgICAgICB0aHJvdyhcIlggb3ZlciA5XCIpO1xuICAgIH1cblxuICAgIGlmKG5ld1kgPCAwKSB7XG4gICAgICAgIHRocm93KFwiWSB1bmRlciAwXCIpO1xuICAgIH0gZWxzZSBpZihuZXdZID4gOSkge1xuICAgICAgICB0aHJvdyhcIlkgIG92ZXIgOVwiKTtcbiAgICB9XG5cbiAgICBpZihsZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIFxuICAgIGlmKG5ld0FsaWduID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgaWYobGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBpZihuZXdZID09PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJWZXJ0aWNhbCAyIExlbmd0aCBCb3VuZGFyeTogWSBAIDkgZXJyb3JcIik7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZihsZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGlmKG5ld1kgPT09IDggfHwgbmV3WSA9PT0gOSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiVmVydGljYWwgMyBsZW5ndGggQm91bmRhcnk6IFkgQCA4IG9yIDkgZXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiU2hpcCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDNcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYobmV3QWxpZ24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGlmKGxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgaWYobmV3WCA9PT0gOSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiSG9yaXpvbnRhbCAyIGxlbmd0aCBCb3VuZGFyeTogWCBAIDkgZXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmKCBsZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGlmKG5ld1ggPT09IDggfHwgbmV3WCA9PT0gOSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiSG9yaXpvbnRhbCAzIGxlbmd0aCBCb3VuZGFyeTogWCBAIDggb3IgOSBlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJTaGlwIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gM1wiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93KFwiQWxpZ25tZW50IGVycm9yIDogV3JpdGUgdGhlIGNvcnJlY3QgbmV3IGFsaWdubWVudFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrQm91bmRhcnk7IHtcblxufSIsIi8vIENoZWNrcyB3aGV0aGVyIHRoZSBuZXcgeCBhbmQgbmV3IHkgYXJlIG9jY3VwaWVkIGJ5IGFub3RoZXIgc2hpcC5cbmltcG9ydCBnZXRTaGlwQ29yZHMgZnJvbSBcIi4vZ2V0U2hpcENvcmRzXCI7XG5cbi8vIFJldHVybnMgMSBpZiBhbnkgb25lIGVsZW1lbnQgZnJvbSBleHBlY3RDb3JkcyBleGlzdHMgaW4gb2NjdXBpZWRDb3Jkc1xuZnVuY3Rpb24gY2hlY2tTaGlwQ29uZmxpY3QobmV3WCxuZXdZLG5ld0FsaWduLCBsZW5ndGgsIG9jY3VwaWVkQ29yZHMpIHtcbiAgICBjb25zdCBleHBlY3RlZENvcmRzID0gZ2V0U2hpcENvcmRzKG5ld1gsbmV3WSxuZXdBbGlnbixsZW5ndGgpO1xuICAgIHJldHVybiBvY2N1cGllZENvcmRzLnNvbWUoZWxlbWVudCA9PiB7XG4gICAgICAgIHJldHVybiBleHBlY3RlZENvcmRzLnNvbWUoZXhwZWN0ZWRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShlbGVtZW50KSA9PT0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfSkgPyAxIDogMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tTaGlwQ29uZmxpY3Q7IiwiaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuL3VpL2VsZW1lbnQvZGl2R2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVIZWFkaW5nIGZyb20gXCIuL3VpL2VsZW1lbnQvaGVhZGluZ0dlblwiO1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVQbGF5ZXJTaWRlKHBsYXllcikge1xuICAgIC8vIEFjdGl2ZSBwbGF5ZXIgc2lkZSBkaXYgaW5pdGlhbGl6YXRpb25cbiAgICBjb25zdCBhY3RpdmVQbGF5ZXJTaWRlID0gZ2VuZXJhdGVEaXYoXCJhY3RpdmUtcGxheWVyLWRpdlwiKTtcbiAgICBjb25zdCBhY3RpdmVQbGF5ZXJIZWFkaW5nID0gZ2VuZXJhdGVIZWFkaW5nKFwiYWN0aXZlLXBsYXllci1oZWFkaW5nXCIpO1xuICAgIGFjdGl2ZVBsYXllckhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0gQm9hcmRgO1xuICAgIGFjdGl2ZVBsYXllclNpZGUuYXBwZW5kQ2hpbGQoYWN0aXZlUGxheWVySGVhZGluZyk7XG5cbiAgICAvLyBHaXZpbmcgdGhlIGFjdGl2ZSBwbGF5ZXIgc2lkZSBjb2xvclxuICAgIC8vIFRPRE8gLSBmaW5pc2ggdGhpcyBsb2dpYyBhZGQgbW9yZSBjb2xvcnMuXG4gICAgaWYocGxheWVyLmNvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIGFjdGl2ZVBsYXllclNpZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1tYWluLXNjcmVlbi1yZWQpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlUGxheWVyU2lkZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLW1haW4tc2NyZWVuLWJsdWUpXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlUGxheWVyQm9hcmQgPSBnZW5lcmF0ZURpdihcImFjdGl2ZS1wbGF5ZXItYm9hcmRcIik7XG4gICAgZm9yKGxldCBpPTE7IGk8MTA7IGkrKykge1xuICAgICAgICBmb3IobGV0IGo9MTtqPDEwO2orKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGdlbmVyYXRlRGl2KFwiYWN0aXZlLXBsYXllci1ncmlkLXNxdWFyZVwiKTtcbiAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQub2NjdXBpZWRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSAmJiBwbGF5ZXIuZ2FtZWJvYXJkLmhpdFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNoaXAtaGl0LWdvbGQpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocGxheWVyLmdhbWVib2FyZC5oaXRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1taXNzZWQtaGl0LWJsYWNrKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHBsYXllci5nYW1lYm9hcmQub2NjdXBpZWRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zZXQtc2hpcC1ncmF5KVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRoYXQgZ2l2ZXMgZXJycm9yIGlmIGNsaWNrZWRcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4gZ2l2ZUFjdGl2ZVBsYXllckNsaWNrRXJyb3IoaSxqKSk7XG5cbiAgICAgICAgICAgIGFjdGl2ZVBsYXllckJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdGl2ZVBsYXllclNpZGUuYXBwZW5kQ2hpbGQoYWN0aXZlUGxheWVyQm9hcmQpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZVBsYXllclNpZGU7XG59XG5cbmZ1bmN0aW9uIGdpdmVBY3RpdmVQbGF5ZXJDbGlja0Vycm9yKHJvdyxjb2wpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNsaWNraW5nIHlvdXIgb3duIGJvYXJkIG5vdyBpcyBmdXRpbGUgOilcIik7XG59XG5cbmZ1bmN0aW9uIGdldE9wcFBsYXllclNpZGUob3BwUGxheWVyKSB7XG4gICAgLy8gT3Bwb25lbnQgcGxheWVyIHNpZGUgZGl2IGluaXRpYWxpemF0aW9uXG4gICAgY29uc3Qgb3BwUGxheWVyU2lkZSA9IGdlbmVyYXRlRGl2KFwib3BwLXBsYXllci1kaXZcIik7XG4gICAgY29uc3Qgb3BwUGxheWVySGVhZGluZyA9IGdlbmVyYXRlSGVhZGluZyhcIm9wcC1wbGF5ZXItaGVhZGluZ1wiKTtcbiAgICBvcHBQbGF5ZXJIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7b3BwUGxheWVyLm5hbWV9IEJvYXJkYDtcbiAgICBvcHBQbGF5ZXJTaWRlLmFwcGVuZENoaWxkKG9wcFBsYXllckhlYWRpbmcpO1xuXG4gICAgLy8gR2l2aW5nIHRoZSBvcHAgcGxheWVyIHNpZGUgY29sb3JcbiAgICAvLyBBZGQgdGhlIG90aGVyIGNvbG9yc1xuICAgIGlmKG9wcFBsYXllci5jb2xvciA9PT0gXCJyZWRcIikge1xuICAgICAgICBvcHBQbGF5ZXJTaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWFpbi1zY3JlZW4tcmVkKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9wcFBsYXllclNpZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1tYWluLXNjcmVlbi1ibHVlKVwiO1xuICAgIH1cblxuICAgIGNvbnN0IG9wcFBsYXllckJvYXJkID0gZ2VuZXJhdGVEaXYoXCJvcHAtcGxheWVyLWJvYXJkXCIpO1xuICAgIGZvcihsZXQgaT0xOyBpPDEwOyBpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTE7ajwxMDtqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcIm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgICAgICBpZihvcHBQbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikgJiYgb3BwUGxheWVyLmdhbWVib2FyZC5oaXRTcG90cy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBpICYmIGNvb3JkWzFdID09PSBqKSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaGlwLWhpdC1nb2xkKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbWlzc2VkLWhpdC1ibGFjaylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wcFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wcFBsYXllclNpZGUuYXBwZW5kQ2hpbGQob3BwUGxheWVyQm9hcmQpO1xuXG4gICAgcmV0dXJuIG9wcFBsYXllclNpZGU7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJCb2FyZChwbGF5ZXIsb3BwUGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmREaXYgPSBnZW5lcmF0ZURpdihcImJvYXJkLWRpdlwiKTtcbiAgICBcbiAgICBjb25zdCBhY3RpdmVQbGF5ZXJTaWRlID0gZ2V0QWN0aXZlUGxheWVyU2lkZShwbGF5ZXIpO1xuICAgIGNvbnN0IG9wcFBsYXllclNpZGUgPSBnZXRPcHBQbGF5ZXJTaWRlKG9wcFBsYXllcik7XG5cbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChhY3RpdmVQbGF5ZXJTaWRlKTtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChvcHBQbGF5ZXJTaWRlKTtcbiAgICByZXR1cm4gYm9hcmREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQbGF5ZXJCb2FyZDsiLCJpbXBvcnQgZGlzcGxheVBsYXllckJvYXJkIGZyb20gXCIuL2Rpc3BsYXlCb2FyZFwiO1xuaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuL3VpL2VsZW1lbnQvZGl2R2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVIZWFkaW5nIGZyb20gXCIuL3VpL2VsZW1lbnQvaGVhZGluZ0dlblwiO1xuXG5jb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cblxuZnVuY3Rpb24gZ2FtZUxvb3AoY3VyclBsYXllcixvcHBQbGF5ZXIsb25Db21wbGV0ZSkge1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlQbGF5ZXJCb2FyZChjdXJyUGxheWVyLG9wcFBsYXllcikpO1xuXG4gICAgaWYoY3VyclBsYXllci5uYW1lID09PSBcIkNQVVwiKSB7XG4gICAgICAgIGxldCB0b0F0dGFja1gsdG9BdHRhY2tZO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0b0F0dGFja1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgICAgICB0b0F0dGFja1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgIH0gd2hpbGUgKG9wcFBsYXllci5nYW1lYm9hcmQuaGl0U3BvdHMuc29tZSgoW3gsIHldKSA9PiB4ID09PSB0b0F0dGFja1ggJiYgeSA9PT0gdG9BdHRhY2tZKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codG9BdHRhY2tYLHRvQXR0YWNrWSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHBQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodG9BdHRhY2tYLHRvQXR0YWNrWSk7XG5cbiAgICAgICAgICAgIGlmKG9wcFBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShjdXJyUGxheWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwMSA9IGN1cnJQbGF5ZXI7XG4gICAgICAgICAgICBjb25zdCBwMiA9IG9wcFBsYXllcjtcbiAgICAgICAgICAgIGdhbWVMb29wKHAyLHAxLG9uQ29tcGxldGUpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9wcEdyaWRTcXVhcmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wcC1wbGF5ZXItZ3JpZC1zcXVhcmVcIikpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPDk7aSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDk7aisrKSB7XG4gICAgICAgICAgICAgICAgb3BwR3JpZFNxdWFyZXNbKGkqOSkgKyBqXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHBQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSsxLGorMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wcFBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZShjdXJyUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwMSA9IGN1cnJQbGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwMiA9IG9wcFBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVMb29wKHAyLHAxLG9uQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHBsYXkyUEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuLy8gICAgIGxldCBjdXJyZW50UGxheWVyID0gMTtcbi8vICAgICB0cnkge1xuLy8gICAgICAgICB3aGlsZShwbGF5ZXIxLmdhbWVib2FyZC5hbGxTdW5rKCkgPT09IGZhbHNlICYmIHBsYXllcjIuZ2FtZWJvYXJkLmFsbFN1bmsoKSA9PT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAvL3BsYXllciBvbmUgcGxheXNcbi8vICAgICAgICAgICAgIH0gZWxzZSBpZihjdXJyZW50UGxheWVyID09PSAyKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gcGxheWVyIHR3byBwbGF5c1xuLy8gICAgICAgICAgICAgfVxuICAgIFxuLy8gICAgICAgICAgICAgLy9wbGF5ZXIgc3dpdGNoXG4vLyAgICAgICAgICAgICBpZihjdXJyZW50UGxheWVyID09PSAxKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBtb2RhbCBhc2tpbmcgcGxheWVyIDEgdG8gZ2l2ZSB0aGUgZGV2aWNlIHRvIHBsYXllciAyXG4vLyAgICAgICAgICAgICAgICAgY3VycmVudFBsYXllciA9IDI7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgbW9kYWwgYXNraW5nIHBsYXllciAyIHRvIGdpdmUgdGhlIGRldmljZSB0byBwbGF5ZXIgMVxuLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAxO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSBjYXRjaChlcnIpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbi8vICAgICB9XG4gICAgXG4vLyB9XG5cblxuZnVuY3Rpb24gcGxheUNQVUdhbWUocGxheWVyMSwgQ1BVLG9uQ29tcGxldGUpIHtcbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZ2FtZUxvb3AocGxheWVyMSxDUFUsb25Db21wbGV0ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlDUFVHYW1lOyIsImltcG9ydCBuZXdTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjaGVja0JvdW5kYXJ5IGZyb20gXCIuL2NoZWNrQm91bmRhcnlcIjtcbmltcG9ydCBjaGVja1NoaXBDb25mbGljdCBmcm9tIFwiLi9jaGVja1NoaXBDb25mbGljdFwiO1xuaW1wb3J0IGdldFNoaXBDb3JkcyBmcm9tIFwiLi9nZXRTaGlwQ29yZHNcIjtcbmltcG9ydCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCBmcm9tIFwiLi9nZXRPY2N1cGllZENvcmRzRXhjZXB0VGFyZ2V0XCI7XG5pbXBvcnQgZ2V0SGl0U2hpcCBmcm9tIFwiLi9nZXRIaXRTaGlwXCI7XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRTcG90cyA9IFtdO1xuICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMgPSBbXTtcblxuICAgICAgICBjb25zdCBzaGlwMSA9IG5ld1NoaXAoMSwxLDEsXCJ2ZXJ0aWNhbFwiLFtdKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXAxKTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwMiA9IG5ld1NoaXAoMiw0LDQsXCJ2ZXJ0aWNhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwMik7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuXG4gICAgICAgIGNvbnN0IHNoaXAzID0gbmV3U2hpcCgyLDQsMixcImhvcml6b250YWxcIix0aGlzLm9jY3VwaWVkU3BvdHMpO1xuICAgICAgICB0aGlzLnVuc3Vua1NoaXBzLnB1c2goc2hpcDMpO1xuICAgICAgICB0aGlzLmdldE9jY3VwaWVkU3BvdHMoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNoaXA0ID0gbmV3U2hpcCgzLDcsNyxcInZlcnRpY2FsXCIsdGhpcy5vY2N1cGllZFNwb3RzKTtcbiAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5wdXNoKHNoaXA0KTtcbiAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG5cbiAgICAgICAgY29uc3Qgc2hpcDUgPSBuZXdTaGlwKDMsMSw5LFwiaG9yaXpvbnRhbFwiLHRoaXMub2NjdXBpZWRTcG90cyk7XG4gICAgICAgIHRoaXMudW5zdW5rU2hpcHMucHVzaChzaGlwNSk7XG4gICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcG90cygpO1xuICAgIH1cblxuICAgIGdldE9jY3VwaWVkU3BvdHMoKSB7XG4gICAgICAgIHRoaXMub2NjdXBpZWRTcG90cyA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudW5zdW5rU2hpcHMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcENvcmRzID0gZ2V0U2hpcENvcmRzKFxuICAgICAgICAgICAgICAgIHRoaXMudW5zdW5rU2hpcHNbaV0uaGVhZFgsXG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tpXS5oZWFkWSxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmFsaWdubWVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW2ldLmxlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bmV3U2hpcENvcmRzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9jY3VwaWVkU3BvdHMucHVzaChuZXdTaGlwQ29yZHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBtb3ZlU2hpcChzaGlwTm8sbmV3WCxuZXdZKSB7XG4gICAgICAgIGxldCBzaGlwQWxpZ25tZW50ID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uYWxpZ25tZW50O1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcE5vLTFdLmxlbmd0aDtcblxuICAgICAgICBpZihjaGVja0JvdW5kYXJ5KG5ld1gsbmV3WSxzaGlwQWxpZ25tZW50LHNoaXBMZW5ndGgpID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCByZW1TcG90cyA9IGdldE9jY3VwaWVkRXhjZXB0VGFyZ2V0KHRoaXMub2NjdXBpZWRTcG90cyx0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5zaGlwQ29yZHMpO1xuICAgICAgICAgICAgaWYoY2hlY2tTaGlwQ29uZmxpY3QobmV3WCxuZXdZLHNoaXBBbGlnbm1lbnQsc2hpcExlbmd0aCxyZW1TcG90cykgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS51cGRhdGVDb3JkcyhuZXdYLG5ld1ksc2hpcEFsaWdubWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiU2hpcCBDb25mbGljdCBFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiQ2hlY2sgYm91bmRhcnkgZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSb3RhdGUgc2hpcFxuICAgIHJvdGF0ZVNoaXAoc2hpcE5vLG5ld0FsaWduKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0aGlzLnVuc3Vua1NoaXBzW3NoaXBOby0xXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNoaXBYID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFg7XG4gICAgICAgIGNvbnN0IHNoaXBZID0gdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uaGVhZFk7XG5cbiAgICAgICAgaWYoY2hlY2tCb3VuZGFyeShzaGlwWCxzaGlwWSxuZXdBbGlnbixzaGlwTGVuZ3RoKSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmVtU3BvdHMgPSBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldCh0aGlzLm9jY3VwaWVkU3BvdHMsdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0uc2hpcENvcmRzKTtcbiAgICAgICAgICAgIGlmKGNoZWNrU2hpcENvbmZsaWN0KHNoaXBYLHNoaXBZLG5ld0FsaWduLHNoaXBMZW5ndGgscmVtU3BvdHMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwTm8tMV0udXBkYXRlQ29yZHMoc2hpcFgsIHNoaXBZLCBuZXdBbGlnbik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPY2N1cGllZFNwb3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93KFwiUm90YXRlIFNoaXAgOiBTaGlwIGNvbmZsaWN0IGVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJSb3RhdGUgU2hpcCA6IENoZWNrIGJvdW5kYXJ5IGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjaWV2ZSBhdHRhY2tcbiAgICByZWNlaXZlQXR0YWNrKHRvQXR0YWNrWCwgdG9BdHRhY2tZKSB7XG4gICAgICAgIGlmKHRvQXR0YWNrWCA8IDAgfHwgdG9BdHRhY2tYID4gOSkge1xuICAgICAgICAgICAgdGhyb3coXCJBdHRhY2sgb3V0IG9mIGJvdW5kcyBYXCIpO1xuICAgICAgICB9IGVsc2UgaWYodG9BdHRhY2tZIDwgMCB8fCB0b0F0dGFja1kgPiA5KSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF0dGFjayBvdXQgb2YgYm91bmRzIFlcIilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5oaXRTcG90cy5zb21lKGVsZW1lbnQgPT4gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT09XG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbdG9BdHRhY2tYLHRvQXR0YWNrWV0pKSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQXR0YWNrIGNvb3JkaW5hdGUgYWxyZWFkeSBoaXRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGl0U3BvdHMucHVzaChbdG9BdHRhY2tYLHRvQXR0YWNrWV0pO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5vY2N1cGllZFNwb3RzLnNvbWUoZWxlbWVudCA9PiBKU09OLnN0cmluZ2lmeShlbGVtZW50KSA9PT1cbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt0b0F0dGFja1gsdG9BdHRhY2tZXSkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRvSGl0ID0gZ2V0SGl0U2hpcCh0aGlzLnVuc3Vua1NoaXBzLCB0b0F0dGFja1gsIHRvQXR0YWNrWSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwc1tzaGlwVG9IaXRdLmdldEhpdCgpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XS5pc1N1bmsoKT09PXRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMudW5zdW5rU2hpcHNbc2hpcFRvSGl0XTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW5rU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1bmtTaGlwcy5zcGxpY2Uoc2hpcFRvSGl0LDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBpZih0aGlzLnVuc3Vua1NoaXBzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVCb2FyZDsiLCJmdW5jdGlvbiBnZXRDb2xvcihwbGF5ZXJDb2xvcikge1xuICAgIGlmKHBsYXllckNvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLXJlZClcIjtcbiAgICB9IGVsc2UgaWYocGxheWVyQ29sb3IgPT09IFwiYmx1ZVwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLW1haW4tc2NyZWVuLWJsdWUpXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2xvcjsiLCJmdW5jdGlvbiBnZXRIaXRTaGlwKHNoaXBBcnJheSwgdG9BdHRhY2tYLCB0b0F0dGFja1kpIHtcbiAgICBmb3IobGV0IGk9MDtpPHNoaXBBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGZvcihsZXQgaj0wO2o8c2hpcEFycmF5W2ldLnNoaXBDb3Jkcy5sZW5ndGg7aisrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShzaGlwQXJyYXlbaV0uc2hpcENvcmRzW2pdKSA9PT0gSlNPTi5zdHJpbmdpZnkoW3RvQXR0YWNrWCx0b0F0dGFja1ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SGl0U2hpcDsiLCJmdW5jdGlvbiBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldChhbGxPY2N1cGllZENvcmRzLHNoaXBDb3Jkcykge1xuICAgIGNvbnN0IHJlbVNwb3RzID0gYWxsT2NjdXBpZWRDb3Jkcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAhc2hpcENvcmRzLnNvbWUoc2hpcENvb3JkID0+XG4gICAgICAgICAgaXRlbS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBzaGlwQ29vcmRbaW5kZXhdKVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlbVNwb3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRPY2N1cGllZEV4Y2VwdFRhcmdldDsiLCJmdW5jdGlvbiBnZXRTaGlwQ29yZHMoWCxZLGFsaWduLGxlbmd0aCkge1xuICAgIGxldCBvY2N1cGllZENvcmRzID0gW107XG4gICAgaWYoYWxpZ24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIG9jY3VwaWVkQ29yZHMucHVzaChbWCxZK2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihhbGlnbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBvY2N1cGllZENvcmRzLnB1c2goW1graSxZXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyhcIkdldFNoaXBDb3JkcyA6IEFsaWdubWVudCBlcnJvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXBpZWRDb3Jkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2hpcENvcmRzOyIsImZ1bmN0aW9uIG1vdmVDUFVTaGlwcyhDUFUsb25Db21wbGV0ZSkge1xuICAgIGZvcihsZXQgaT0wO2k8OTtpKyspIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U2hpcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICBjb25zdCBhY3Rpb25Ub1BlcmZvcm0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG5cbiAgICAgICAgaWYoYWN0aW9uVG9QZXJmb3JtID09PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRTaGlwLFwiTW92ZSBzaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVRvWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUb1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIENQVS5nYW1lYm9hcmQubW92ZVNoaXAodGFyZ2V0U2hpcCsxLG1vdmVUb1gsbW92ZVRvWSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihhY3Rpb25Ub1BlcmZvcm0gPT09IDIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYoQ1BVLmdhbWVib2FyZC51bnN1bmtTaGlwc1t0YXJnZXRTaGlwXS5hbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBDUFUuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAodGFyZ2V0U2hpcCsxLFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDUFUuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAodGFyZ2V0U2hpcCsxLFwidmVydGljYWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYob25Db21wbGV0ZSAmJiB0eXBlb2Ygb25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZlQ1BVU2hpcHM7IiwiaW1wb3J0IGdldENvbG9yIGZyb20gXCIuL2dldENvbG9yXCI7XG5pbXBvcnQgZ2V0SGl0U2hpcCBmcm9tIFwiLi9nZXRIaXRTaGlwXCI7XG5pbXBvcnQgZ2VuZXJhdGVCdXR0b24gZnJvbSBcIi4vdWkvZWxlbWVudC9idG5HZW5cIjtcbmltcG9ydCBnZW5lcmF0ZURpdiBmcm9tIFwiLi91aS9lbGVtZW50L2RpdkdlblwiO1xuaW1wb3J0IGdlbmVyYXRlSGVhZGluZyBmcm9tIFwiLi91aS9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtY29udGFpbmVyJyk7XG4gICAgZ2V0Qm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtb3ZlQm9hcmQgPSBnZW5lcmF0ZURpdihcIm1vdmUtYm9hcmRcIik7XG4gICAgZm9yKGxldCBpPTE7aTwxMDtpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTE7ajwxMDtqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBnZW5lcmF0ZURpdihcIm1vdmUtcGxheWVyLWdyaWQtc3F1YXJlXCIpO1xuICAgICAgICAgICAgaWYocGxheWVyLmdhbWVib2FyZC5vY2N1cGllZFNwb3RzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IGkgJiYgY29vcmRbMV0gPT09IGopKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNldC1zaGlwLWdyYXkpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBsb25nUHJlc3NUaW1lb3V0O1xuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBtb3VzZWRvd24gZXZlbnRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxvbmdQcmVzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYExvbmcgcHJlc3MgZGV0ZWN0ZWQgJHtpfSwke2p9YCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHByb21wdChcIkVudGVyIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgZm9ybWF0IHgseVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlcklucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHVzZXJJbnB1dC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzBdLnRyaW0oKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzFdLnRyaW0oKSwgMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSB1c2VyIGVudGVyZWQgJHt4fSwke3l9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZhbGlkIGNvb3JkaW5hdGVzIGVudGVyZWRgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRvTW92ZSA9IGdldEhpdFNoaXAocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyxpLGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcFRvTW92ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAoc2hpcFRvTW92ZSsxLHgseSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNhbmNlbGxlZCB0aGUgcHJvbXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUT0RPIC0gcm90YXRpbmcgc2hpcCBub3QgZG9uZVxuICAgICAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcEhpdCA9IGdldEhpdFNoaXAocGxheWVyLmdhbWVib2FyZC51bnN1bmtTaGlwcyxpLGopO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBIaXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHNbc2hpcEhpdF0uYWxpZ25tZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucm90YXRlU2hpcChzaGlwSGl0KzEsXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yb3RhdGVTaGlwKHNoaXBIaXQrMSxcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbW92ZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEJvYXJkLmFwcGVuZENoaWxkKG1vdmVCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIGdldEJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IG1vdmVCb2FyZCA9IGdlbmVyYXRlRGl2KFwibW92ZS1ib2FyZFwiKTtcbiAgICBmb3IobGV0IGk9MTtpPDEwO2krKykge1xuICAgICAgICBmb3IobGV0IGo9MTtqPDEwO2orKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGdlbmVyYXRlRGl2KFwibW92ZS1wbGF5ZXItZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLm9jY3VwaWVkU3BvdHMuc29tZShjb29yZCA9PiBjb29yZFswXSA9PT0gaSAmJiBjb29yZFsxXSA9PT0gaikpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2V0LXNoaXAtZ3JheSlcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvbmdQcmVzc1RpbWVvdXQ7XG4gICAgICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gb2YgdGhlIG1vdXNlZG93biBldmVudFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbG9uZ1ByZXNzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9uZyBwcmVzcyBkZXRlY3RlZCAke2l9LCR7an1gKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID0gcHJvbXB0KFwiRW50ZXIgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBmb3JtYXQgeCx5XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VySW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdXNlcklucHV0LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMF0udHJpbSgpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMV0udHJpbSgpLCAxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHVzZXIgZW50ZXJlZCAke3h9LCR7eX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgY29vcmRpbmF0ZXMgZW50ZXJlZGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwVG9Nb3ZlID0gZ2V0SGl0U2hpcChwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzLGksaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwVG9Nb3ZlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChzaGlwVG9Nb3ZlKzEseCx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY2FuY2VsbGVkIHRoZSBwcm9tcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVE9ETyAtIHJvdGF0aW5nIHNoaXAgbm90IGRvbmVcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBIaXQgPSBnZXRIaXRTaGlwKHBsYXllci5nYW1lYm9hcmQudW5zdW5rU2hpcHMsaSxqKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwSGl0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzW3NoaXBIaXRdLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJvdGF0ZVNoaXAoc2hpcEhpdCsxLFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucm90YXRlU2hpcChzaGlwSGl0KzEsXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLnVuc3Vua1NoaXBzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbW92ZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb3ZlQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIG1vdmVTaGlwKHBsYXllcixvbkNvbmZpcm0pIHtcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuXG4gICAgY29uc3QgbW92ZUNvbnRhaW5lciA9IGdlbmVyYXRlRGl2KFwibW92ZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgY29sb3JUb0FwcGx5ID0gZ2V0Q29sb3IocGxheWVyLmNvbG9yKTtcbiAgICBtb3ZlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVG9BcHBseTtcblxuICAgIGNvbnN0IG1vdmVIZWFkaW5nID0gZ2VuZXJhdGVIZWFkaW5nKFwibW92ZS1oZWFkaW5nXCIpO1xuICAgIG1vdmVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJTZXQgWW91ciBCb2FyZFwiO1xuICAgIG1vdmVDb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUhlYWRpbmcpO1xuXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBnZW5lcmF0ZURpdihcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBib2FyZCA9IGdldEJvYXJkKHBsYXllcik7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgIG1vdmVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGdlbmVyYXRlQnV0dG9uKFwiY29uZmlybS1idXR0b25cIik7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JUb0FwcGx5O1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICBpZihvbkNvbmZpcm0gJiYgdHlwZW9mIG9uQ29uZmlybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvbkNvbmZpcm0oKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgbW92ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgIGNvbnN0IGhlbHBDb250YWluZXIgPSBnZW5lcmF0ZURpdihcImhlbHAtY29udGFpbmVyXCIpO1xuICAgIGhlbHBDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNsaWNrIHRvIHJvdGF0ZSwgTG9uZyBwcmVzcyBhbmQgZW50ZXIgY29vcmRpbmF0ZXMgdG8gbW92ZVwiO1xuICAgIG1vdmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVscENvbnRhaW5lcik7XG5cbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVDb250YWluZXIpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVTaGlwOyIsImltcG9ydCBuZXdHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIHBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSxjb2xvcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3R2FtZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XG4gICAgfVxuXG4gICAgc2V0Q29sb3IobmV3Q29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ld0NvbG9yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV3UGxheWVyKG5hbWUsY29sb3IpIHtcbiAgICBjb25zdCBjcmVhdGVkUGxheWVyID0gbmV3IHBsYXllcihuYW1lLGNvbG9yKTtcbiAgICByZXR1cm4gY3JlYXRlZFBsYXllcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3UGxheWVyOyIsImltcG9ydCBjaGVja0JvdW5kYXJ5IGZyb20gXCIuL2NoZWNrQm91bmRhcnlcIjtcbmltcG9ydCBjaGVja1NoaXBDb25mbGljdCBmcm9tIFwiLi9jaGVja1NoaXBDb25mbGljdFwiO1xuaW1wb3J0IGdldFNoaXBDb3JkcyBmcm9tIFwiLi9nZXRTaGlwQ29yZHNcIjtcblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLGhlYWRYLGhlYWRZLGFsaWdubWVudCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oZWFkWCA9IGhlYWRYO1xuICAgICAgICB0aGlzLmhlYWRZID0gaGVhZFk7XG4gICAgICAgIHRoaXMuYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICAgICAgICB0aGlzLnNoaXBDb3JkcyA9IGdldFNoaXBDb3Jkcyh0aGlzLmhlYWRYLHRoaXMuaGVhZFksdGhpcy5hbGlnbm1lbnQsdGhpcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGdldEhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNvb3Jkc1xuICAgIHVwZGF0ZUNvcmRzKG5ld0hlYWRYLG5ld0hlYWRZLG5ld0FsaWduKSB7XG4gICAgICAgIHRoaXMuaGVhZFggPSBuZXdIZWFkWDtcbiAgICAgICAgdGhpcy5oZWFkWSA9IG5ld0hlYWRZO1xuICAgICAgICB0aGlzLmFsaWdubWVudCA9IG5ld0FsaWduO1xuICAgICAgICB0aGlzLnNoaXBDb3JkcyA9IGdldFNoaXBDb3Jkcyh0aGlzLmhlYWRYLHRoaXMuaGVhZFksdGhpcy5hbGlnbm1lbnQsdGhpcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1NoaXAobGVuZ3RoLGhlYWRYLGhlYWRZLGFsaWdubWVudCxvY2N1cGllZENvcmRzKSB7XG4gICAgaWYobGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyhcIlNoaXAgaXMgdG9vIHNtYWxsXCIpO1xuICAgIH1cbiAgICBpZihsZW5ndGggPiAzKSB7XG4gICAgICAgIHRocm93KFwiU2hpcCBpcyB0b28gYmlnXCIpO1xuICAgIH1cbiAgICBpZihjaGVja0JvdW5kYXJ5KGhlYWRYLGhlYWRZLGFsaWdubWVudCxsZW5ndGgpICE9PSAxKSB7XG4gICAgICAgIHRocm93KFwiQm91bmRhcnkgZXhjZXB0aW9uXCIpO1xuICAgIH1cbiAgICBpZihjaGVja1NoaXBDb25mbGljdChoZWFkWCxoZWFkWSxhbGlnbm1lbnQsbGVuZ3RoLG9jY3VwaWVkQ29yZHMpID09PSAxKSB7XG4gICAgICAgIHRocm93KFwiU2hpcCBjb25mbGljdCBlcnJvclwiKTtcbiAgICB9XG4gICAgaWYoKGFsaWdubWVudCAhPT0gXCJ2ZXJ0aWNhbFwiKSAmJiAoYWxpZ25tZW50ICE9PSBcImhvcml6b250YWxcIikpIHtcbiAgICAgICAgdGhyb3coXCJBbGlnbm1lbnQgbXVzdCBiZSBlaXRoZXIgdmVydGljYWwgb3IgaG9yaXpvbnRhbFwiKTtcbiAgICB9XG4gICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgaGVhZFgsaGVhZFksYWxpZ25tZW50KTtcbiAgICByZXR1cm4gbmV3U2hpcDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXdTaGlwOyIsImZ1bmN0aW9uIGdlbmVyYXRlQnV0dG9uKGNsYXNzTmFtZSxpZCkge1xuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBpZihjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGlmKGlkKSB7XG4gICAgICAgIG5ld0J1dHRvbi5pZCA9IGlkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QnV0dG9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUJ1dHRvbjsiLCJmdW5jdGlvbiBnZW5lcmF0ZURpdihjbGFzc05hbWUsIGlkTmFtZSkge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmKGNsYXNzTmFtZSkge1xuICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBpZihpZE5hbWUpIHtcbiAgICAgICAgbmV3RGl2LmlkID0gaWROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZURpdjsiLCJmdW5jdGlvbiBnZW5lcmF0ZUhlYWRpbmcoY2xhc3NOYW1lLCBpZCkge1xuICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICBpZihjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3SGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBcbiAgICBpZihpZCkge1xuICAgICAgICBuZXdIZWFkaW5nLmlkID0gaWQ7XG4gICAgfVxuICAgIHJldHVybiBuZXdIZWFkaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUhlYWRpbmc7IiwiZnVuY3Rpb24gZ2VuZXJhdGVNYXRlcmlhbEljb24oaWNvbk5hbWUsZm9udFNpemUpIHtcbiAgICBjb25zdCBuZXdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgbmV3SWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gICAgbmV3SWNvbi50ZXh0Q29udGVudCA9IGljb25OYW1lO1xuICAgIG5ld0ljb24uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICByZXR1cm4gbmV3SWNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNYXRlcmlhbEljb247IiwiaW1wb3J0IGdlbmVyYXRlRGl2IGZyb20gXCIuLi9lbGVtZW50L2RpdkdlblwiXG5pbXBvcnQgZ2VuZXJhdGVCdXR0b24gZnJvbSBcIi4uL2VsZW1lbnQvYnRuR2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVNYXRlcmlhbEljb24gZnJvbSBcIi4uL2VsZW1lbnQvbWF0ZXJpYWxJY29uR2VuXCI7XG5pbXBvcnQgZ2VuZXJhdGVIZWFkaW5nIGZyb20gXCIuLi9lbGVtZW50L2hlYWRpbmdHZW5cIjtcblxuZnVuY3Rpb24gaW5pdF9tYWluX3NjcmVlbl9mKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGdlbmVyYXRlRGl2KFwibWFpbi1zY3JlZW4tY29udGFpbmVyXCIpO1xuICAgIFxuICAgIGNvbnN0IGxlZnREaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tbGVmdC1kaXZcIik7XG4gICAgY29uc3QgbGVmdERpdkljb25EaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tbGVmdC1pY29uLWRpdlwiKTtcbiAgICBjb25zdCBsZWZ0RGl2SWNvbiA9IGdlbmVyYXRlTWF0ZXJpYWxJY29uKFwiY29tcHV0ZXJcIixcIjI0MHB4XCIpO1xuICAgIGxlZnREaXZJY29uRGl2LmFwcGVuZENoaWxkKGxlZnREaXZJY29uKTtcbiAgICBjb25zdCBsZWZ0RGl2SGVhZCA9IGdlbmVyYXRlSGVhZGluZyhcIm1haW4tbGVmdC1oZWFkXCIpO1xuICAgIGxlZnREaXZIZWFkLnRleHRDb250ZW50ID0gXCJDb21wdXRlclwiO1xuICAgIGNvbnN0IGxlZnREaXZCdXR0b24gPSBnZW5lcmF0ZUJ1dHRvbihcIm1haW4tbGVmdC1idXR0b25cIik7XG4gICAgbGVmdERpdkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpbnN0IENvbXB1dGVyXCI7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2SWNvbkRpdik7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2SGVhZCk7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2QnV0dG9uKTtcblxuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZ2VuZXJhdGVEaXYoXCJtYWluLXJpZ2h0LWRpdlwiKTtcbiAgICBjb25zdCByaWdodERpdkljb25EaXYgPSBnZW5lcmF0ZURpdihcIm1haW4tcmlnaHQtaWNvbi1kaXZcIik7XG4gICAgY29uc3QgcmlnaHREaXZJY29uID0gZ2VuZXJhdGVNYXRlcmlhbEljb24oXCJwZXJzb25cIixcIjI0MHB4XCIpO1xuICAgIHJpZ2h0RGl2SWNvbkRpdi5hcHBlbmRDaGlsZChyaWdodERpdkljb24pO1xuICAgIGNvbnN0IHJpZ2h0RGl2SGVhZCA9IGdlbmVyYXRlSGVhZGluZyhcIm1haW4tcmlnaHQtaGVhZFwiKTtcbiAgICByaWdodERpdkhlYWQudGV4dENvbnRlbnQgPSBcIlBsYXllclwiO1xuICAgIGNvbnN0IHJpZ2h0RGl2QnV0dG9uID0gZ2VuZXJhdGVCdXR0b24oXCJtYWluLXJpZ2h0LWJ1dHRvblwiKTtcbiAgICByaWdodERpdkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBhZ2FpbnN0IGFub3RoZXIgcGxheWVyXCI7XG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQocmlnaHREaXZJY29uRGl2KTtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChyaWdodERpdkhlYWQpO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2QnV0dG9uKTtcblxuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxlZnREaXYpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChyaWdodERpdik7XG4gICAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9tYWluX3NjcmVlbl9mOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIE1haW4gc2NyZWVuIGFwcGVhcnMgYWxsb3dpbmcgdGhlIHVzZXIgdG8gY2hvb3NlIGJldHdlZW4gY29tcHV0ZXIgb3IgcGxheWVyIHYgcGxheWVyIC0gRE9ORSBcbi8vIEJhc2VkIG9uIHRoZSB1c2VycyBjaG9pY2UgdGhlIG5leHQgc2NyZWVuIGlzIHNob3duIHdoZXJlIHRoZSB1c2VyIG9yIHVzZXJzIGNhbiBjaG9vc2UgdGhlaXIgbmFtZSBhbmQgY29sb3Jcbi8vIE9uY2UgdGhlIHN0YXJ0IGdhbWUgYnV0dG9uIGlzIHByZXNzZWQgdGhlIGdhbWVcbi8vIExldCBwbGF5ZXIgb25lIHBsYWNlIHRoZWlyIHNoaXBzXG4vLyBPbmNlIHRoZSBwbGF5ZXIgb25lIGlzIGRvbmUgcGxhY2luZyB0aGVpciBzaGlwc1xuLy8gSWYgY29tcHV0ZXIgLT4gYXV0b21hdGUgdGhlIHByb2Nlc3Mgb2YgcGxhY2luZyBzaGlwc1xuLy8gSWYgYW5vdGhlciBwbGF5ZXIgLT4gbGV0IHBsYXllciB0d28gcGxhY2UgdGhlaXIgc2hpcHMuXG4vLyBCZWdpbiB0aGUgZ2FtZSBsb29wIHVudGlsIG9uZSBvZiB0aGUgcGxheWVycyBnYW1lYm9hcmRzIGFsbCBzdW5rIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZS5cbi8vIHdoZW4gdGhhdCBoYXBwZW5zIHdlIG5lZWQgdG8gcmVzZXQgdGhlIGdhbWUgYWdhaW4gYnkgbW9zdGx5IG1ha2luZyBuZXcgcGxheWVyc1xuXG5pbXBvcnQgaW5pdF9tYWluX3NjcmVlbl9mIGZyb20gXCIuL3VpL3NjcmVlbi9pbml0X21haW5fc2NyZWVuXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBwbGF5Q1BVR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgbmV3UGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IG1vdmVTaGlwIGZyb20gXCIuL21vdmVTaGlwXCI7XG5pbXBvcnQgbW92ZUNQVVNoaXBzIGZyb20gXCIuL21vdmVDUFVTaGlwc1wiO1xuXG5pbXBvcnQgZ2VuZXJhdGVIZWFkaW5nIGZyb20gXCIuL3VpL2VsZW1lbnQvaGVhZGluZ0dlblwiO1xuXG5jb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlXaW5NZXNzYWdlKHBsYXllcikge1xuICAgIGlmKHBsYXllcikge1xuICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IHdpbk1lc3NhZ2UgPSBnZW5lcmF0ZUhlYWRpbmcoXCJ3aW4tbWVzc2FnZVwiKTtcbiAgICAgICAgd2luTWVzc2FnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwbGF5ZXIuY29sb3I7XG4gICAgICAgIHdpbk1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0gaGFzIHdvbmA7XG4gICAgICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQod2luTWVzc2FnZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0X0NQVV9nYW1lKCkge1xuICAgIGNvbnN0IHBsYXllcjEgPSBuZXdQbGF5ZXIoXCJCaW5ndXNcIixcInJlZFwiKTtcbiAgICBjb25zdCBDUFUgPSBuZXdQbGF5ZXIoXCJDUFVcIixcImJsdWVcIik7XG5cbiAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbW92ZVNoaXAocGxheWVyMSwoKSA9PiB7XG4gICAgICAgIG1vdmVDUFVTaGlwcyhDUFUsKCkgPT4ge1xuICAgICAgICAgICAgcGxheUNQVUdhbWUocGxheWVyMSxDUFUsKHdpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlXaW5NZXNzYWdlKHdpbm5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gTWFrZSBpdCBzbyB0aGF0IHRoZSBwbGF5Q1BVIGdhbWUgY2FuIHRha2UgYSBmdW5jdGlvbiBhcmd1bWVudCBmb3Igb25jb21wbGV0ZSB3aGloYyB3aWxsIGRvIGFzIHdlIHNheSBpdCB0by5cbiAgICB9KTtcbiAgICBcbiAgICBcbn1cblxuZnVuY3Rpb24gaW5pdF9wbGF5ZXJfZ2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWx6aWVkIHBsYXllciBnYW1lXCIpO1xuICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcHJlZ2FtZSgpIHtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRfbWFpbl9zY3JlZW5fZigpKTtcbiAgICBjb25zdCBtYWluTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1sZWZ0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWluUmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tcmlnaHQtYnV0dG9uXCIpO1xuXG4gICAgbWFpbkxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW5pdF9DUFVfZ2FtZSk7XG4gICAgbWFpblJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGluaXRfcGxheWVyX2dhbWUpO1xufVxuXG5wcmVnYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9