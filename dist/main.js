"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fancyfont.ttf */ "./src/fancyfont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n@font-face {\n    font-family: 'fancyfont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: lighter;\n    font-style: normal;\n}\n\nh1, p, h2, li {\n    color: rgb(233, 233, 233);\n}\n\nli {\n    list-style: none;\n    font-size: 20px;\n}\n\nul {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n    cursor: pointer;\n}\n\nli:hover {\n    transform: translateY(-3px);\n    color: white;\n}\n\nli:active {\n    transform: translateY(0px);\n    color: rgb(233, 233, 233);\n}\n\n/* Scrollbar Credit to https://github.com/michalosman/restaurant-page*/\n::-webkit-scrollbar {\n    overflow: overlay;\n    width: 10px;\n}\n\n  \n::-webkit-scrollbar-track {\n    background-color: #000;\n}\n  \n::-webkit-scrollbar-thumb {\n    background-color: #222;\n}\n  \n::-webkit-scrollbar-thumb:hover {\n    background-color: #444;\n}\n\n#foods {\n    padding: 50px 30px;\n    width: 80%;\n    display: grid;\n    gap: 60px 30px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-auto-rows: 300px;\n}\n.foodpicture {\n    margin: 0;\n    border-radius: 15px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n    margin: auto;\n    justify-self: center;\n}\n#foods > div {\n    z-index: 1;\n    padding: 40px;\n    border-radius: 15px;\n    background-color: rgba(0, 0, 0, 0.50);\n    cursor: pointer;\n}\n\niframe {\n    margin-bottom: 50px;\n    width: 80%;\n    height: 500px;\n}\n\n#foods > div:hover {\n    transform: scale(1.1);\n    background-color: rgba(104, 104, 104, 0.5);\n}\n  \n\nbody {\n    overflow-x: hidden;\n    min-width: 100vw;\n    min-height: 100vh;\n    transition: background-image 0.5s;\n    margin: 0;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    border-radius: 5px;\n    transition: 0.5s;\n    animation: fadeIn 0.5s;\n    flex: 1;\n    padding: 20px 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    min-width: max(600px, 40vw);\n    align-self: center;\n    margin: 100px 30vw;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n\nnav {\n    z-index: 20;\n    position: sticky;\n    top: 0;\n    background-color: rgb(15, 15, 15);\n}\n\n/*Animation to fadein*/\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n\nh1 {\n    font-family: 'fancyfont';\n    font-weight: lighter;\n    font-size: 70px;\n    margin: 20px;\n}\n\n.undertext {\n    margin-top: 0;\n    font-size: 20px;\n    font-weight: 200;\n    white-space: pre-line;\n    text-align: center;\n}\n\n.profilepicture {\n    border: 1px solid;\n    border-radius: 100%;\n    max-height: 500px;\n    box-shadow: 0 0 100px 100px black inset;\n}\n\nh2 {\n    margin-bottom: 10px;\n    font-weight: 300;\n    font-size: 40px;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(15, 15, 15);;\n}\n\n.header {\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    background-color: rgb(15, 15, 12);\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wIAAwI;AAC5I;;AAEA;IACI,wBAAwB;IACxB,4CAA2B;IAC3B,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA,sEAAsE;AACtE;IACI,iBAAiB;IACjB,WAAW;AACf;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,cAAc;IACd,2DAA2D;IAC3D,qBAAqB;AACzB;AACA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,0CAA0C;AAC9C;;;AAGA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,iCAAiC;IACjC,SAAS;IACT,yDAAyC;IACzC,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,OAAO;IACP,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,kBAAkB;IAClB,qCAAqC;AACzC;;;AAGA;IACI,WAAW;IACX,gBAAgB;IAChB,MAAM;IACN,iCAAiC;AACrC;;AAEA,sBAAsB;AACtB;IACI;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;AACJ;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;IACpB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,iCAAiC;IACjC,mBAAmB;AACvB","sourcesContent":["* {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n@font-face {\n    font-family: 'fancyfont';\n    src: url('./fancyfont.ttf');\n    font-weight: lighter;\n    font-style: normal;\n}\n\nh1, p, h2, li {\n    color: rgb(233, 233, 233);\n}\n\nli {\n    list-style: none;\n    font-size: 20px;\n}\n\nul {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n    cursor: pointer;\n}\n\nli:hover {\n    transform: translateY(-3px);\n    color: white;\n}\n\nli:active {\n    transform: translateY(0px);\n    color: rgb(233, 233, 233);\n}\n\n/* Scrollbar Credit to https://github.com/michalosman/restaurant-page*/\n::-webkit-scrollbar {\n    overflow: overlay;\n    width: 10px;\n}\n\n  \n::-webkit-scrollbar-track {\n    background-color: #000;\n}\n  \n::-webkit-scrollbar-thumb {\n    background-color: #222;\n}\n  \n::-webkit-scrollbar-thumb:hover {\n    background-color: #444;\n}\n\n#foods {\n    padding: 50px 30px;\n    width: 80%;\n    display: grid;\n    gap: 60px 30px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-auto-rows: 300px;\n}\n.foodpicture {\n    margin: 0;\n    border-radius: 15px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n    margin: auto;\n    justify-self: center;\n}\n#foods > div {\n    z-index: 1;\n    padding: 40px;\n    border-radius: 15px;\n    background-color: rgba(0, 0, 0, 0.50);\n    cursor: pointer;\n}\n\niframe {\n    margin-bottom: 50px;\n    width: 80%;\n    height: 500px;\n}\n\n#foods > div:hover {\n    transform: scale(1.1);\n    background-color: rgba(104, 104, 104, 0.5);\n}\n  \n\nbody {\n    overflow-x: hidden;\n    min-width: 100vw;\n    min-height: 100vh;\n    transition: background-image 0.5s;\n    margin: 0;\n    background-image: url(\"./restaurant.jpg\");\n    background-size: cover;\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    border-radius: 5px;\n    transition: 0.5s;\n    animation: fadeIn 0.5s;\n    flex: 1;\n    padding: 20px 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    min-width: max(600px, 40vw);\n    align-self: center;\n    margin: 100px 30vw;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n\nnav {\n    z-index: 20;\n    position: sticky;\n    top: 0;\n    background-color: rgb(15, 15, 15);\n}\n\n/*Animation to fadein*/\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n\nh1 {\n    font-family: 'fancyfont';\n    font-weight: lighter;\n    font-size: 70px;\n    margin: 20px;\n}\n\n.undertext {\n    margin-top: 0;\n    font-size: 20px;\n    font-weight: 200;\n    white-space: pre-line;\n    text-align: center;\n}\n\n.profilepicture {\n    border: 1px solid;\n    border-radius: 100%;\n    max-height: 500px;\n    box-shadow: 0 0 100px 100px black inset;\n}\n\nh2 {\n    margin-bottom: 10px;\n    font-weight: 300;\n    font-size: 40px;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(15, 15, 15);;\n}\n\n.header {\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    background-color: rgb(15, 15, 12);\n    align-items: center;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let content = document.createElement("div");
content.setAttribute("id", "content");
content.classList.add("contact");

//Actual content inside the div

//Title
let h2 = document.createElement("h2");
h2.textContent = "Contact Info";
content.appendChild(h2);

let phone = document.createElement("p");
phone.textContent = "📞 095863627";
content.appendChild(phone);


let address = document.createElement("p");
address.textContent = "🏠 Restaurant Vagabonda, Mantelikuja, Vantaa, Finland"
content.appendChild(address);

let googlemaps = document.createElement("iframe")
googlemaps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.4303279600406!2d24.802732316426837!3d60.25634094339136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df6e4045d0359%3A0xfac7e88580fc23e4!2sRavintola%20Vagabonda!5e0!3m2!1sfi!2sfi!4v1654008260437!5m2!1sfi!2sfi";
content.appendChild(googlemaps);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);

/***/ }),

/***/ "./src/Landing-page.js":
/*!*****************************!*\
  !*** ./src/Landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.jpg */ "./src/profile.jpg");


let content = document.createElement("div");
content.setAttribute("id", "content");
content.classList.add("home");

//Actual content inside the div

//Title
let h2 = document.createElement("h2");
h2.textContent = "Welcome to Vagabonda";
content.appendChild(h2);

//Undertext
let undertext = document.createElement("p");
undertext.textContent = "Operating since 1908 through\n family lineage"
undertext.classList.add("undertext");
content.appendChild(undertext);

//Profile Image
let profilepic = document.createElement("img");
profilepic.src = _profile_jpg__WEBPACK_IMPORTED_MODULE_0__;
profilepic.classList.add("profilepicture");
content.appendChild(profilepic);

//Final text
let text = document.createElement("p");
text.textContent = "Order online or come visit us!"
content.appendChild(text);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _food1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food1.jpg */ "./src/food1.jpg");
/* harmony import */ var _food2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food2.jpg */ "./src/food2.jpg");
/* harmony import */ var _food3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food3.jpg */ "./src/food3.jpg");
/* harmony import */ var _food4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food4.jpg */ "./src/food4.jpg");
/* harmony import */ var _food5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food5.jpg */ "./src/food5.jpg");
/* harmony import */ var _food6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food6.jpg */ "./src/food6.jpg");
/* harmony import */ var _food7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food7.jpg */ "./src/food7.jpg");
/* harmony import */ var _food8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food8.jpg */ "./src/food8.jpg");
//Import all the food photos










//Main div
let content = document.createElement("div");
content.setAttribute("id", "content");
content.classList.add("menu");

//Title
let h2 = document.createElement("h2");
h2.textContent = "Menu";
content.appendChild(h2);

//Actual content inside the div
let foods = document.createElement("div");
foods.setAttribute("id", "foods");

//All of the foods (cards)
let food1 = document.createElement("div");
let food2 = document.createElement("div");
let food3 = document.createElement("div");
let food4 = document.createElement("div");
let food5 = document.createElement("div");
let food6 = document.createElement("div");
let food7 = document.createElement("div");
let food8 = document.createElement("div");

//Create image elements
let foodpicture1 = document.createElement("img");
foodpicture1.src = _food1_jpg__WEBPACK_IMPORTED_MODULE_0__;
foodpicture1.classList.add("foodpicture");
food1.appendChild(foodpicture1);

let foodpicture2 = document.createElement("img");
foodpicture2.src = _food2_jpg__WEBPACK_IMPORTED_MODULE_1__;
foodpicture2.classList.add("foodpicture");
food2.appendChild(foodpicture2);

let foodpicture3 = document.createElement("img");
foodpicture3.src = _food3_jpg__WEBPACK_IMPORTED_MODULE_2__;
foodpicture3.classList.add("foodpicture");
food3.appendChild(foodpicture3);

let foodpicture4 = document.createElement("img");
foodpicture4.src = _food8_jpg__WEBPACK_IMPORTED_MODULE_7__;
foodpicture4.classList.add("foodpicture");
food4.appendChild(foodpicture4);

let foodpicture5 = document.createElement("img");
foodpicture5.src = _food5_jpg__WEBPACK_IMPORTED_MODULE_4__;
foodpicture5.classList.add("foodpicture");
food5.appendChild(foodpicture5);

let foodpicture6 = document.createElement("img");
foodpicture6.src = _food6_jpg__WEBPACK_IMPORTED_MODULE_5__;
foodpicture6.classList.add("foodpicture");
food6.appendChild(foodpicture6);

let foodpicture7 = document.createElement("img");
foodpicture7.src = _food7_jpg__WEBPACK_IMPORTED_MODULE_6__;
foodpicture7.classList.add("foodpicture");
food7.appendChild(foodpicture7);

let foodpicture8 = document.createElement("img");
foodpicture8.src = _food4_jpg__WEBPACK_IMPORTED_MODULE_3__;
foodpicture8.classList.add("foodpicture");
food8.appendChild(foodpicture8);
//Should have looped through these...


//Append all of the created stuff to the main div
foods.appendChild(food1);
foods.appendChild(food2);
foods.appendChild(food3);
foods.appendChild(food4);
foods.appendChild(food5);
foods.appendChild(food6);
foods.appendChild(food7);
foods.appendChild(food8);
content.appendChild(foods);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.jpg */ "./src/menu.jpg");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");
/* harmony import */ var _contact_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.jpg */ "./src/contact.jpg");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "./src/Contact.js");
/* harmony import */ var _Landing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Landing-page */ "./src/Landing-page.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
//Import the content from style.css


//Import the background images




//Import all the different content for the site





//Creates the header for the site
function createHeader() {
    //Create div for header
    let div = document.createElement("div");
    div.classList.add("header");

    //Website h1 logo
    let logo = document.createElement("h1");
    logo.textContent = "Vagabonda"

    //Add all the elements to the div
    div.appendChild(logo);
    return div;
}

//Creates the Navbar for the site
function createNav() {

    //Navbar
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    let home = document.createElement("li");
    home.textContent = "Home";
    let menu = document.createElement("li");
    menu.textContent = "Menu";
    let contact = document.createElement("li");
    contact.textContent = "Contact";

    //Create eventlisteners for all of the buttons
    home.addEventListener("click", function() {
        createContent(_Landing_page__WEBPACK_IMPORTED_MODULE_5__["default"]);
    });
    menu.addEventListener("click", function() {
        createContent(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"]);
    });
    contact.addEventListener("click", function() {
        createContent(_Contact__WEBPACK_IMPORTED_MODULE_4__["default"]);
    });

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    nav.appendChild(ul);

    return nav;
}

//Creates the content in the #content div
function createContent(content) {
    if(content === _Menu__WEBPACK_IMPORTED_MODULE_6__["default"]) {
        document.body.style.backgroundImage = `url('${_menu_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;
    }
    if(content === _Contact__WEBPACK_IMPORTED_MODULE_4__["default"]) {
        document.body.style.backgroundImage = `url('${_contact_jpg__WEBPACK_IMPORTED_MODULE_3__}')`;
    }
    if(content === _Landing_page__WEBPACK_IMPORTED_MODULE_5__["default"]) {
        document.body.style.backgroundImage = `url('${_restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;
    }
    
    divcontent.replaceWith(content)
    divcontent = content;
   
}

//Creates the footer for the site
function createFooter() {
    let div = document.createElement("div");
    div.classList.add("footer");

    let p = document.createElement("p");
    p.textContent = "Copyright © The Odin Project 2022, Sani Letchu";
    div.appendChild(p)

    return div;
    
}
//Create the div for content
let divcontent = document.createElement("div");
divcontent.setAttribute("id", "content");


document.body.appendChild(createHeader());
document.body.appendChild(createNav());
document.body.appendChild(divcontent);

//Initial content is landingContent
createContent(_Landing_page__WEBPACK_IMPORTED_MODULE_5__["default"]);

document.body.appendChild(createFooter());

/***/ }),

/***/ "./src/contact.jpg":
/*!*************************!*\
  !*** ./src/contact.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496eb3fe4d69e349dbe8.jpg";

/***/ }),

/***/ "./src/fancyfont.ttf":
/*!***************************!*\
  !*** ./src/fancyfont.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fd77cec1a8c094992ab.ttf";

/***/ }),

/***/ "./src/food1.jpg":
/*!***********************!*\
  !*** ./src/food1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f8c19d4a8500646202f.jpg";

/***/ }),

/***/ "./src/food2.jpg":
/*!***********************!*\
  !*** ./src/food2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "659b87d85c872e994dc2.jpg";

/***/ }),

/***/ "./src/food3.jpg":
/*!***********************!*\
  !*** ./src/food3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e8f2c577f2af6c4f846.jpg";

/***/ }),

/***/ "./src/food4.jpg":
/*!***********************!*\
  !*** ./src/food4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "295e172a58c60b57772c.jpg";

/***/ }),

/***/ "./src/food5.jpg":
/*!***********************!*\
  !*** ./src/food5.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbef276b7bc690e5776f.jpg";

/***/ }),

/***/ "./src/food6.jpg":
/*!***********************!*\
  !*** ./src/food6.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b00fc72d596b8b490681.jpg";

/***/ }),

/***/ "./src/food7.jpg":
/*!***********************!*\
  !*** ./src/food7.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fa75599faaa71860c48.jpg";

/***/ }),

/***/ "./src/food8.jpg":
/*!***********************!*\
  !*** ./src/food8.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68e75f0cca047f37d2e3.jpg";

/***/ }),

/***/ "./src/menu.jpg":
/*!**********************!*\
  !*** ./src/menu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a880891e541b18aa3dcc.jpg";

/***/ }),

/***/ "./src/profile.jpg":
/*!*************************!*\
  !*** ./src/profile.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4b7f841294985b5849f.jpg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d2794dc83c9f6633434.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZ0QjtBQUNxQjs7QUFFckI7QUFDbUM7QUFDUztBQUNIOztBQUV6QztBQUN1QztBQUNLO0FBQ1g7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFjO0FBQ3BDLEtBQUs7QUFDTDtBQUNBLHNCQUFzQiw2Q0FBVztBQUNqQyxLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsZ0RBQWM7QUFDcEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVc7QUFDOUIsc0RBQXNELHNDQUFTLENBQUM7QUFDaEU7QUFDQSxtQkFBbUIsZ0RBQWM7QUFDakMsc0RBQXNELHlDQUFZLENBQUM7QUFDbkU7QUFDQSxtQkFBbUIscURBQWM7QUFDakMsc0RBQXNELDRDQUFZLENBQUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMscURBQWM7O0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZmFuY3lmb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcmVzdGF1cmFudC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ZhbmN5Zm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEsIHAsIGgyLCBsaSB7XFxuICAgIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubGk6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxufVxcblxcbi8qIFNjcm9sbGJhciBDcmVkaXQgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY2hhbG9zbWFuL3Jlc3RhdXJhbnQtcGFnZSovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIG92ZXJmbG93OiBvdmVybGF5O1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuICBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuICBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG59XFxuICBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxuI2Zvb2RzIHtcXG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDYwcHggMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAzMDBweDtcXG59XFxuLmZvb2RwaWN0dXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4jZm9vZHMgPiBkaXYge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlmcmFtZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNTAwcHg7XFxufVxcblxcbiNmb29kcyA+IGRpdjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDEwNCwgMTA0LCAwLjUpO1xcbn1cXG4gIFxcblxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuNXM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IG1heCg2MDBweCwgNDB2dyk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMDBweCAzMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5cXG5uYXYge1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XFxufVxcblxcbi8qQW5pbWF0aW9uIHRvIGZhZGVpbiovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeWZvbnQnO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi51bmRlcnRleHQge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZXBpY3R1cmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMDBweCAxMDBweCBibGFjayBpbnNldDtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpOztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCwyREFBMkQ7SUFDM0QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBDQUEwQztBQUM5Qzs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsU0FBUztJQUNULHlEQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04saUNBQWlDO0FBQ3JDOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFuY3lmb250JztcXG4gICAgc3JjOiB1cmwoJy4vZmFuY3lmb250LnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSwgcCwgaDIsIGxpIHtcXG4gICAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5saTphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcXG59XFxuXFxuLyogU2Nyb2xsYmFyIENyZWRpdCB0byBodHRwczovL2dpdGh1Yi5jb20vbWljaGFsb3NtYW4vcmVzdGF1cmFudC1wYWdlKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4gIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4gIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbn1cXG4gIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG4jZm9vZHMge1xcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNjBweCAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDMwMHB4O1xcbn1cXG4uZm9vZHBpY3R1cmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbiNmb29kcyA+IGRpdiB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaWZyYW1lIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuI2Zvb2RzID4gZGl2OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA0LCAxMDQsIDAuNSk7XFxufVxcbiAgXFxuXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC41cztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vcmVzdGF1cmFudC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IG1heCg2MDBweCwgNDB2dyk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMDBweCAzMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5cXG5uYXYge1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XFxufVxcblxcbi8qQW5pbWF0aW9uIHRvIGZhZGVpbiovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeWZvbnQnO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi51bmRlcnRleHQge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZXBpY3R1cmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMDBweCAxMDBweCBibGFjayBpbnNldDtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpOztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbi8vQWN0dWFsIGNvbnRlbnQgaW5zaWRlIHRoZSBkaXZcblxuLy9UaXRsZVxubGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuaDIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgSW5mb1wiO1xuY29udGVudC5hcHBlbmRDaGlsZChoMik7XG5cbmxldCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xucGhvbmUudGV4dENvbnRlbnQgPSBcIvCfk54gMDk1ODYzNjI3XCI7XG5jb250ZW50LmFwcGVuZENoaWxkKHBob25lKTtcblxuXG5sZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuYWRkcmVzcy50ZXh0Q29udGVudCA9IFwi8J+PoCBSZXN0YXVyYW50IFZhZ2Fib25kYSwgTWFudGVsaWt1amEsIFZhbnRhYSwgRmlubGFuZFwiXG5jb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG5sZXQgZ29vZ2xlbWFwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIilcbmdvb2dsZW1hcHMuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxOTc5LjQzMDMyNzk2MDA0MDYhMmQyNC44MDI3MzIzMTY0MjY4MzchM2Q2MC4yNTYzNDA5NDMzOTEzNiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDY4ZGY2ZTQwNDVkMDM1OSUzQTB4ZmFjN2U4ODU4MGZjMjNlNCEyc1JhdmludG9sYSUyMFZhZ2Fib25kYSE1ZTAhM20yITFzZmkhMnNmaSE0djE2NTQwMDgyNjA0MzchNW0yITFzZmkhMnNmaVwiO1xuY29udGVudC5hcHBlbmRDaGlsZChnb29nbGVtYXBzKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudDsiLCJpbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi9wcm9maWxlLmpwZ1wiO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbi8vQWN0dWFsIGNvbnRlbnQgaW5zaWRlIHRoZSBkaXZcblxuLy9UaXRsZVxubGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuaDIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gVmFnYWJvbmRhXCI7XG5jb250ZW50LmFwcGVuZENoaWxkKGgyKTtcblxuLy9VbmRlcnRleHRcbmxldCB1bmRlcnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnVuZGVydGV4dC50ZXh0Q29udGVudCA9IFwiT3BlcmF0aW5nIHNpbmNlIDE5MDggdGhyb3VnaFxcbiBmYW1pbHkgbGluZWFnZVwiXG51bmRlcnRleHQuY2xhc3NMaXN0LmFkZChcInVuZGVydGV4dFwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodW5kZXJ0ZXh0KTtcblxuLy9Qcm9maWxlIEltYWdlXG5sZXQgcHJvZmlsZXBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5wcm9maWxlcGljLnNyYyA9IHByb2ZpbGU7XG5wcm9maWxlcGljLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlcGljdHVyZVwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvZmlsZXBpYyk7XG5cbi8vRmluYWwgdGV4dFxubGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRleHQudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZSBvciBjb21lIHZpc2l0IHVzIVwiXG5jb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50OyIsIi8vSW1wb3J0IGFsbCB0aGUgZm9vZCBwaG90b3NcbmltcG9ydCBmb29kcGljMSBmcm9tIFwiLi9mb29kMS5qcGdcIjtcbmltcG9ydCBmb29kcGljMiBmcm9tIFwiLi9mb29kMi5qcGdcIjtcbmltcG9ydCBmb29kcGljMyBmcm9tIFwiLi9mb29kMy5qcGdcIjtcbmltcG9ydCBmb29kcGljNCBmcm9tIFwiLi9mb29kNC5qcGdcIjtcbmltcG9ydCBmb29kcGljNSBmcm9tIFwiLi9mb29kNS5qcGdcIjtcbmltcG9ydCBmb29kcGljNiBmcm9tIFwiLi9mb29kNi5qcGdcIjtcbmltcG9ydCBmb29kcGljNyBmcm9tIFwiLi9mb29kNy5qcGdcIjtcbmltcG9ydCBmb29kcGljOCBmcm9tIFwiLi9mb29kOC5qcGdcIjtcblxuXG4vL01haW4gZGl2XG5sZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbi8vVGl0bGVcbmxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmgyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5jb250ZW50LmFwcGVuZENoaWxkKGgyKTtcblxuLy9BY3R1YWwgY29udGVudCBpbnNpZGUgdGhlIGRpdlxubGV0IGZvb2RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvb2RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vZHNcIik7XG5cbi8vQWxsIG9mIHRoZSBmb29kcyAoY2FyZHMpXG5sZXQgZm9vZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGZvb2QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBmb29kMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZm9vZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGZvb2Q1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBmb29kNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZm9vZDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGZvb2Q4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy9DcmVhdGUgaW1hZ2UgZWxlbWVudHNcbmxldCBmb29kcGljdHVyZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmUxLnNyYyA9IGZvb2RwaWMxO1xuZm9vZHBpY3R1cmUxLmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2QxLmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlMSk7XG5cbmxldCBmb29kcGljdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmUyLnNyYyA9IGZvb2RwaWMyO1xuZm9vZHBpY3R1cmUyLmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2QyLmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlMik7XG5cbmxldCBmb29kcGljdHVyZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmUzLnNyYyA9IGZvb2RwaWMzO1xuZm9vZHBpY3R1cmUzLmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2QzLmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlMyk7XG5cbmxldCBmb29kcGljdHVyZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmU0LnNyYyA9IGZvb2RwaWM4O1xuZm9vZHBpY3R1cmU0LmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2Q0LmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlNCk7XG5cbmxldCBmb29kcGljdHVyZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmU1LnNyYyA9IGZvb2RwaWM1O1xuZm9vZHBpY3R1cmU1LmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2Q1LmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlNSk7XG5cbmxldCBmb29kcGljdHVyZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmU2LnNyYyA9IGZvb2RwaWM2O1xuZm9vZHBpY3R1cmU2LmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2Q2LmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlNik7XG5cbmxldCBmb29kcGljdHVyZTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmU3LnNyYyA9IGZvb2RwaWM3O1xuZm9vZHBpY3R1cmU3LmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2Q3LmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlNyk7XG5cbmxldCBmb29kcGljdHVyZTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vZHBpY3R1cmU4LnNyYyA9IGZvb2RwaWM0O1xuZm9vZHBpY3R1cmU4LmNsYXNzTGlzdC5hZGQoXCJmb29kcGljdHVyZVwiKTtcbmZvb2Q4LmFwcGVuZENoaWxkKGZvb2RwaWN0dXJlOCk7XG4vL1Nob3VsZCBoYXZlIGxvb3BlZCB0aHJvdWdoIHRoZXNlLi4uXG5cblxuLy9BcHBlbmQgYWxsIG9mIHRoZSBjcmVhdGVkIHN0dWZmIHRvIHRoZSBtYWluIGRpdlxuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDEpO1xuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDIpO1xuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDMpO1xuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDQpO1xuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDUpO1xuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDYpO1xuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDcpO1xuZm9vZHMuYXBwZW5kQ2hpbGQoZm9vZDgpO1xuY29udGVudC5hcHBlbmRDaGlsZChmb29kcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7IiwiLy9JbXBvcnQgdGhlIGNvbnRlbnQgZnJvbSBzdHlsZS5jc3NcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL0ltcG9ydCB0aGUgYmFja2dyb3VuZCBpbWFnZXNcbmltcG9ydCBtZW51aW1hZ2UgZnJvbSAnLi9tZW51LmpwZyc7XG5pbXBvcnQgbGFuZGluZ2ltYWdlIGZyb20gJy4vcmVzdGF1cmFudC5qcGcnO1xuaW1wb3J0IGNvbnRhY3RpbWFnZSBmcm9tICcuL2NvbnRhY3QuanBnJztcblxuLy9JbXBvcnQgYWxsIHRoZSBkaWZmZXJlbnQgY29udGVudCBmb3IgdGhlIHNpdGVcbmltcG9ydCBjb250YWN0Q29udGVudCBmcm9tIFwiLi9Db250YWN0XCI7XG5pbXBvcnQgbGFuZGluZ0NvbnRlbnQgZnJvbSBcIi4vTGFuZGluZy1wYWdlXCI7XG5pbXBvcnQgbWVudUNvbnRlbnQgZnJvbSBcIi4vTWVudVwiO1xuXG5cbi8vQ3JlYXRlcyB0aGUgaGVhZGVyIGZvciB0aGUgc2l0ZVxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIC8vQ3JlYXRlIGRpdiBmb3IgaGVhZGVyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICAvL1dlYnNpdGUgaDEgbG9nb1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlZhZ2Fib25kYVwiXG5cbiAgICAvL0FkZCBhbGwgdGhlIGVsZW1lbnRzIHRvIHRoZSBkaXZcbiAgICBkaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuLy9DcmVhdGVzIHRoZSBOYXZiYXIgZm9yIHRoZSBzaXRlXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG5cbiAgICAvL05hdmJhclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIC8vQ3JlYXRlIGV2ZW50bGlzdGVuZXJzIGZvciBhbGwgb2YgdGhlIGJ1dHRvbnNcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3JlYXRlQ29udGVudChsYW5kaW5nQ29udGVudCk7XG4gICAgfSk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNyZWF0ZUNvbnRlbnQobWVudUNvbnRlbnQpO1xuICAgIH0pO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjcmVhdGVDb250ZW50KGNvbnRhY3RDb250ZW50KTtcbiAgICB9KTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG4vL0NyZWF0ZXMgdGhlIGNvbnRlbnQgaW4gdGhlICNjb250ZW50IGRpdlxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChjb250ZW50KSB7XG4gICAgaWYoY29udGVudCA9PT0gbWVudUNvbnRlbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke21lbnVpbWFnZX0nKWA7XG4gICAgfVxuICAgIGlmKGNvbnRlbnQgPT09IGNvbnRhY3RDb250ZW50KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtjb250YWN0aW1hZ2V9JylgO1xuICAgIH1cbiAgICBpZihjb250ZW50ID09PSBsYW5kaW5nQ29udGVudCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bGFuZGluZ2ltYWdlfScpYDtcbiAgICB9XG4gICAgXG4gICAgZGl2Y29udGVudC5yZXBsYWNlV2l0aChjb250ZW50KVxuICAgIGRpdmNvbnRlbnQgPSBjb250ZW50O1xuICAgXG59XG5cbi8vQ3JlYXRlcyB0aGUgZm9vdGVyIGZvciB0aGUgc2l0ZVxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgVGhlIE9kaW4gUHJvamVjdCAyMDIyLCBTYW5pIExldGNodVwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKVxuXG4gICAgcmV0dXJuIGRpdjtcbiAgICBcbn1cbi8vQ3JlYXRlIHRoZSBkaXYgZm9yIGNvbnRlbnRcbmxldCBkaXZjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpdmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdmNvbnRlbnQpO1xuXG4vL0luaXRpYWwgY29udGVudCBpcyBsYW5kaW5nQ29udGVudFxuY3JlYXRlQ29udGVudChsYW5kaW5nQ29udGVudCk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==