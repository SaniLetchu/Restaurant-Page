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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n@font-face {\n    font-family: 'fancyfont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: lighter;\n    font-style: normal;\n}\n\nh1, p, h2, li {\n    color: rgb(233, 233, 233);\n}\n\nli {\n    list-style: none;\n    font-size: 20px;\n}\n\nul {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n    cursor: pointer;\n}\n\nli:hover {\n    transform: translateY(-3px);\n    color: white;\n}\n\nli:active {\n    transform: translateY(0px);\n    color: rgb(233, 233, 233);\n}\n\n/* Scrollbar Credit to https://github.com/michalosman/restaurant-page*/\n::-webkit-scrollbar {\n    overflow: overlay;\n    width: 10px;\n}\n\n  \n::-webkit-scrollbar-track {\n    background-color: #000;\n}\n  \n::-webkit-scrollbar-thumb {\n    background-color: #222;\n}\n  \n::-webkit-scrollbar-thumb:hover {\n    background-color: #444;\n}\n\n#foods {\n    padding: 50px 30px;\n    width: 80%;\n    display: grid;\n    gap: 60px 30px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-auto-rows: 300px;\n}\n.foodpicture {\n    margin: 0;\n    border-radius: 15px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n    margin: auto;\n    justify-self: center;\n}\n#foods > div {\n    z-index: 1;\n    padding: 40px;\n    border-radius: 15px;\n    background-color: rgba(0, 0, 0, 0.50);\n    cursor: pointer;\n}\n\niframe {\n    margin-bottom: 50px;\n    width: 80%;\n    height: 500px;\n}\n\n#foods > div:hover {\n    transform: scale(1.1);\n    background-color: rgba(104, 104, 104, 0.5);\n}\n  \n\nbody {\n    background-repeat: no-repeat;\n    background-position: center center;\n    overflow-x: hidden;\n    min-width: 100vw;\n    min-height: 100vh;\n    transition: background-image 0.5s;\n    margin: 0;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    border-radius: 5px;\n    transition: 0.5s;\n    animation: fadeIn 0.5s;\n    flex: 1;\n    padding: 20px 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    min-width: max(600px, 40vw);\n    align-self: center;\n    margin: 100px 30vw;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n\nnav {\n    margin-top: 0;\n    z-index: 20;\n    position: sticky;\n    top: 0;\n    background-color: rgb(15, 15, 15);\n}\n\n/*Animation to fadein*/\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n\np {\n    text-align: center;\n}\n\nh1 {\n    font-family: 'fancyfont';\n    font-weight: lighter;\n    font-size: 70px;\n    text-align: center;\n    margin: 20px 0px;\n}\n\nh2 {\n    text-align: center;\n}\n\n.undertext {\n    margin-top: 0;\n    font-size: 20px;\n    font-weight: 200;\n    white-space: pre-line;\n    text-align: center;\n}\n\n.profilepicture {\n    border: 1px solid;\n    border-radius: 100%;\n    max-height: 500px;\n    box-shadow: 0 0 100px 100px black inset;\n}\n\nh2 {\n    margin-bottom: 10px;\n    font-weight: 300;\n    font-size: 40px;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(15, 15, 15);;\n}\n\n.header {\n    margin-bottom: 0;\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    background-color: rgb(15, 15, 12);\n    align-items: center;\n}\n\n@media (max-width: 850px) {\n    #content {\n        width: 100%;\n        min-width: 100%;\n        padding: 20px 0px;\n        margin: 100px 0px;\n    }\n    .profilepicture {\n        max-height: 100%;\n        max-width: 80%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wIAAwI;AAC5I;;AAEA;IACI,wBAAwB;IACxB,4CAA2B;IAC3B,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA,sEAAsE;AACtE;IACI,iBAAiB;IACjB,WAAW;AACf;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,cAAc;IACd,2DAA2D;IAC3D,qBAAqB;AACzB;AACA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,0CAA0C;AAC9C;;;AAGA;IACI,4BAA4B;IAC5B,kCAAkC;IAClC,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,iCAAiC;IACjC,SAAS;IACT,yDAAyC;IACzC,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,OAAO;IACP,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,kBAAkB;IAClB,qCAAqC;AACzC;;;AAGA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,MAAM;IACN,iCAAiC;AACrC;;AAEA,sBAAsB;AACtB;IACI;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;AACJ;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;IACI;QACI,WAAW;QACX,eAAe;QACf,iBAAiB;QACjB,iBAAiB;IACrB;IACA;QACI,gBAAgB;QAChB,cAAc;IAClB;AACJ","sourcesContent":["* {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n@font-face {\n    font-family: 'fancyfont';\n    src: url('./fancyfont.ttf');\n    font-weight: lighter;\n    font-style: normal;\n}\n\nh1, p, h2, li {\n    color: rgb(233, 233, 233);\n}\n\nli {\n    list-style: none;\n    font-size: 20px;\n}\n\nul {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n    cursor: pointer;\n}\n\nli:hover {\n    transform: translateY(-3px);\n    color: white;\n}\n\nli:active {\n    transform: translateY(0px);\n    color: rgb(233, 233, 233);\n}\n\n/* Scrollbar Credit to https://github.com/michalosman/restaurant-page*/\n::-webkit-scrollbar {\n    overflow: overlay;\n    width: 10px;\n}\n\n  \n::-webkit-scrollbar-track {\n    background-color: #000;\n}\n  \n::-webkit-scrollbar-thumb {\n    background-color: #222;\n}\n  \n::-webkit-scrollbar-thumb:hover {\n    background-color: #444;\n}\n\n#foods {\n    padding: 50px 30px;\n    width: 80%;\n    display: grid;\n    gap: 60px 30px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-auto-rows: 300px;\n}\n.foodpicture {\n    margin: 0;\n    border-radius: 15px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n    margin: auto;\n    justify-self: center;\n}\n#foods > div {\n    z-index: 1;\n    padding: 40px;\n    border-radius: 15px;\n    background-color: rgba(0, 0, 0, 0.50);\n    cursor: pointer;\n}\n\niframe {\n    margin-bottom: 50px;\n    width: 80%;\n    height: 500px;\n}\n\n#foods > div:hover {\n    transform: scale(1.1);\n    background-color: rgba(104, 104, 104, 0.5);\n}\n  \n\nbody {\n    background-repeat: no-repeat;\n    background-position: center center;\n    overflow-x: hidden;\n    min-width: 100vw;\n    min-height: 100vh;\n    transition: background-image 0.5s;\n    margin: 0;\n    background-image: url(\"./restaurant.jpg\");\n    background-size: cover;\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    border-radius: 5px;\n    transition: 0.5s;\n    animation: fadeIn 0.5s;\n    flex: 1;\n    padding: 20px 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    min-width: max(600px, 40vw);\n    align-self: center;\n    margin: 100px 30vw;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n\nnav {\n    margin-top: 0;\n    z-index: 20;\n    position: sticky;\n    top: 0;\n    background-color: rgb(15, 15, 15);\n}\n\n/*Animation to fadein*/\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n\np {\n    text-align: center;\n}\n\nh1 {\n    font-family: 'fancyfont';\n    font-weight: lighter;\n    font-size: 70px;\n    text-align: center;\n    margin: 20px 0px;\n}\n\nh2 {\n    text-align: center;\n}\n\n.undertext {\n    margin-top: 0;\n    font-size: 20px;\n    font-weight: 200;\n    white-space: pre-line;\n    text-align: center;\n}\n\n.profilepicture {\n    border: 1px solid;\n    border-radius: 100%;\n    max-height: 500px;\n    box-shadow: 0 0 100px 100px black inset;\n}\n\nh2 {\n    margin-bottom: 10px;\n    font-weight: 300;\n    font-size: 40px;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(15, 15, 15);;\n}\n\n.header {\n    margin-bottom: 0;\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    background-color: rgb(15, 15, 12);\n    align-items: center;\n}\n\n@media (max-width: 850px) {\n    #content {\n        width: 100%;\n        min-width: 100%;\n        padding: 20px 0px;\n        margin: 100px 0px;\n    }\n    .profilepicture {\n        max-height: 100%;\n        max-width: 80%;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBWSxDQUFDO0FBQ25FO0FBQ0EsbUJBQW1CLHFEQUFjO0FBQ2pDLHNEQUFzRCw0Q0FBWSxDQUFDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHFEQUFjOztBQUU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9Db250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9MYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZhbmN5Zm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3Jlc3RhdXJhbnQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeWZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmgxLCBwLCBoMiwgbGkge1xcbiAgICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmxpOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgQ3JlZGl0IHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWxvc21hbi9yZXN0YXVyYW50LXBhZ2UqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbiAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbiAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxufVxcbiAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcbiNmb29kcyB7XFxuICAgIHBhZGRpbmc6IDUwcHggMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA2MHB4IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBncmlkLWF1dG8tcm93czogMzAwcHg7XFxufVxcbi5mb29kcGljdHVyZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuI2Zvb2RzID4gZGl2IHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pZnJhbWUge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4jZm9vZHMgPiBkaXY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDQsIDEwNCwgMC41KTtcXG59XFxuICBcXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjVzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiBtYXgoNjAwcHgsIDQwdncpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTAwcHggMzB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuXFxubmF2IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcbn1cXG5cXG4vKkFuaW1hdGlvbiB0byBmYWRlaW4qL1xcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFuY3lmb250JztcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVuZGVydGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9maWxlcGljdHVyZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwMHB4IDEwMHB4IGJsYWNrIGluc2V0O1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDEyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XFxuICAgICAgICBtYXJnaW46IDEwMHB4IDBweDtcXG4gICAgfVxcbiAgICAucHJvZmlsZXBpY3R1cmUge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCwyREFBMkQ7SUFDM0QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBDQUEwQztBQUM5Qzs7O0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QseURBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04saUNBQWlDO0FBQ3JDOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFuY3lmb250JztcXG4gICAgc3JjOiB1cmwoJy4vZmFuY3lmb250LnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSwgcCwgaDIsIGxpIHtcXG4gICAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5saTphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcXG59XFxuXFxuLyogU2Nyb2xsYmFyIENyZWRpdCB0byBodHRwczovL2dpdGh1Yi5jb20vbWljaGFsb3NtYW4vcmVzdGF1cmFudC1wYWdlKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4gIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4gIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbn1cXG4gIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG4jZm9vZHMge1xcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNjBweCAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDMwMHB4O1xcbn1cXG4uZm9vZHBpY3R1cmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbiNmb29kcyA+IGRpdiB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaWZyYW1lIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuI2Zvb2RzID4gZGl2OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA0LCAxMDQsIDAuNSk7XFxufVxcbiAgXFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC41cztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vcmVzdGF1cmFudC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IG1heCg2MDBweCwgNDB2dyk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMDBweCAzMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5cXG5uYXYge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XFxufVxcblxcbi8qQW5pbWF0aW9uIHRvIGZhZGVpbiovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbnAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeWZvbnQnO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udW5kZXJ0ZXh0IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2ZpbGVwaWN0dXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTAwcHggMTAwcHggYmxhY2sgaW5zZXQ7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTs7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gICAgICAgIG1hcmdpbjogMTAwcHggMHB4O1xcbiAgICB9XFxuICAgIC5wcm9maWxlcGljdHVyZSB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcblxuLy9BY3R1YWwgY29udGVudCBpbnNpZGUgdGhlIGRpdlxuXG4vL1RpdGxlXG5sZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5oMi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBJbmZvXCI7XG5jb250ZW50LmFwcGVuZENoaWxkKGgyKTtcblxubGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5waG9uZS50ZXh0Q29udGVudCA9IFwi8J+TniAwOTU4NjM2MjdcIjtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG5cbmxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5hZGRyZXNzLnRleHRDb250ZW50ID0gXCLwn4+gIFJlc3RhdXJhbnQgVmFnYWJvbmRhLCBNYW50ZWxpa3VqYSwgVmFudGFhLCBGaW5sYW5kXCJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbmxldCBnb29nbGVtYXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKVxuZ29vZ2xlbWFwcy5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDE5NzkuNDMwMzI3OTYwMDQwNiEyZDI0LjgwMjczMjMxNjQyNjgzNyEzZDYwLjI1NjM0MDk0MzM5MTM2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0NjhkZjZlNDA0NWQwMzU5JTNBMHhmYWM3ZTg4NTgwZmMyM2U0ITJzUmF2aW50b2xhJTIwVmFnYWJvbmRhITVlMCEzbTIhMXNmaSEyc2ZpITR2MTY1NDAwODI2MDQzNyE1bTIhMXNmaSEyc2ZpXCI7XG5jb250ZW50LmFwcGVuZENoaWxkKGdvb2dsZW1hcHMpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50OyIsImltcG9ydCBwcm9maWxlIGZyb20gXCIuL3Byb2ZpbGUuanBnXCI7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuLy9BY3R1YWwgY29udGVudCBpbnNpZGUgdGhlIGRpdlxuXG4vL1RpdGxlXG5sZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5oMi50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBWYWdhYm9uZGFcIjtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuXG4vL1VuZGVydGV4dFxubGV0IHVuZGVydGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xudW5kZXJ0ZXh0LnRleHRDb250ZW50ID0gXCJPcGVyYXRpbmcgc2luY2UgMTkwOCB0aHJvdWdoXFxuIGZhbWlseSBsaW5lYWdlXCJcbnVuZGVydGV4dC5jbGFzc0xpc3QuYWRkKFwidW5kZXJ0ZXh0XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZCh1bmRlcnRleHQpO1xuXG4vL1Byb2ZpbGUgSW1hZ2VcbmxldCBwcm9maWxlcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnByb2ZpbGVwaWMuc3JjID0gcHJvZmlsZTtcbnByb2ZpbGVwaWMuY2xhc3NMaXN0LmFkZChcInByb2ZpbGVwaWN0dXJlXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChwcm9maWxlcGljKTtcblxuLy9GaW5hbCB0ZXh0XG5sZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xudGV4dC50ZXh0Q29udGVudCA9IFwiT3JkZXIgb25saW5lIG9yIGNvbWUgdmlzaXQgdXMhXCJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7IiwiLy9JbXBvcnQgYWxsIHRoZSBmb29kIHBob3Rvc1xuaW1wb3J0IGZvb2RwaWMxIGZyb20gXCIuL2Zvb2QxLmpwZ1wiO1xuaW1wb3J0IGZvb2RwaWMyIGZyb20gXCIuL2Zvb2QyLmpwZ1wiO1xuaW1wb3J0IGZvb2RwaWMzIGZyb20gXCIuL2Zvb2QzLmpwZ1wiO1xuaW1wb3J0IGZvb2RwaWM0IGZyb20gXCIuL2Zvb2Q0LmpwZ1wiO1xuaW1wb3J0IGZvb2RwaWM1IGZyb20gXCIuL2Zvb2Q1LmpwZ1wiO1xuaW1wb3J0IGZvb2RwaWM2IGZyb20gXCIuL2Zvb2Q2LmpwZ1wiO1xuaW1wb3J0IGZvb2RwaWM3IGZyb20gXCIuL2Zvb2Q3LmpwZ1wiO1xuaW1wb3J0IGZvb2RwaWM4IGZyb20gXCIuL2Zvb2Q4LmpwZ1wiO1xuXG5cbi8vTWFpbiBkaXZcbmxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuLy9UaXRsZVxubGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuaDIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuXG4vL0FjdHVhbCBjb250ZW50IGluc2lkZSB0aGUgZGl2XG5sZXQgZm9vZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9vZHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb29kc1wiKTtcblxuLy9BbGwgb2YgdGhlIGZvb2RzIChjYXJkcylcbmxldCBmb29kMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZm9vZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGZvb2QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBmb29kNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZm9vZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGZvb2Q2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBmb29kNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZm9vZDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vL0NyZWF0ZSBpbWFnZSBlbGVtZW50c1xubGV0IGZvb2RwaWN0dXJlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTEuc3JjID0gZm9vZHBpYzE7XG5mb29kcGljdHVyZTEuY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDEuYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmUxKTtcblxubGV0IGZvb2RwaWN0dXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTIuc3JjID0gZm9vZHBpYzI7XG5mb29kcGljdHVyZTIuY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDIuYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmUyKTtcblxubGV0IGZvb2RwaWN0dXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTMuc3JjID0gZm9vZHBpYzM7XG5mb29kcGljdHVyZTMuY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDMuYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmUzKTtcblxubGV0IGZvb2RwaWN0dXJlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTQuc3JjID0gZm9vZHBpYzg7XG5mb29kcGljdHVyZTQuY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDQuYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmU0KTtcblxubGV0IGZvb2RwaWN0dXJlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTUuc3JjID0gZm9vZHBpYzU7XG5mb29kcGljdHVyZTUuY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDUuYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmU1KTtcblxubGV0IGZvb2RwaWN0dXJlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTYuc3JjID0gZm9vZHBpYzY7XG5mb29kcGljdHVyZTYuY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDYuYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmU2KTtcblxubGV0IGZvb2RwaWN0dXJlNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTcuc3JjID0gZm9vZHBpYzc7XG5mb29kcGljdHVyZTcuY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDcuYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmU3KTtcblxubGV0IGZvb2RwaWN0dXJlOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb29kcGljdHVyZTguc3JjID0gZm9vZHBpYzQ7XG5mb29kcGljdHVyZTguY2xhc3NMaXN0LmFkZChcImZvb2RwaWN0dXJlXCIpO1xuZm9vZDguYXBwZW5kQ2hpbGQoZm9vZHBpY3R1cmU4KTtcbi8vU2hvdWxkIGhhdmUgbG9vcGVkIHRocm91Z2ggdGhlc2UuLi5cblxuXG4vL0FwcGVuZCBhbGwgb2YgdGhlIGNyZWF0ZWQgc3R1ZmYgdG8gdGhlIG1haW4gZGl2XG5mb29kcy5hcHBlbmRDaGlsZChmb29kMSk7XG5mb29kcy5hcHBlbmRDaGlsZChmb29kMik7XG5mb29kcy5hcHBlbmRDaGlsZChmb29kMyk7XG5mb29kcy5hcHBlbmRDaGlsZChmb29kNCk7XG5mb29kcy5hcHBlbmRDaGlsZChmb29kNSk7XG5mb29kcy5hcHBlbmRDaGlsZChmb29kNik7XG5mb29kcy5hcHBlbmRDaGlsZChmb29kNyk7XG5mb29kcy5hcHBlbmRDaGlsZChmb29kOCk7XG5jb250ZW50LmFwcGVuZENoaWxkKGZvb2RzKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudDsiLCIvL0ltcG9ydCB0aGUgY29udGVudCBmcm9tIHN0eWxlLmNzc1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vSW1wb3J0IHRoZSBiYWNrZ3JvdW5kIGltYWdlc1xuaW1wb3J0IG1lbnVpbWFnZSBmcm9tICcuL21lbnUuanBnJztcbmltcG9ydCBsYW5kaW5naW1hZ2UgZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5pbXBvcnQgY29udGFjdGltYWdlIGZyb20gJy4vY29udGFjdC5qcGcnO1xuXG4vL0ltcG9ydCBhbGwgdGhlIGRpZmZlcmVudCBjb250ZW50IGZvciB0aGUgc2l0ZVxuaW1wb3J0IGNvbnRhY3RDb250ZW50IGZyb20gXCIuL0NvbnRhY3RcIjtcbmltcG9ydCBsYW5kaW5nQ29udGVudCBmcm9tIFwiLi9MYW5kaW5nLXBhZ2VcIjtcbmltcG9ydCBtZW51Q29udGVudCBmcm9tIFwiLi9NZW51XCI7XG5cblxuLy9DcmVhdGVzIHRoZSBoZWFkZXIgZm9yIHRoZSBzaXRlXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgLy9DcmVhdGUgZGl2IGZvciBoZWFkZXJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIC8vV2Vic2l0ZSBoMSBsb2dvXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiVmFnYWJvbmRhXCJcblxuICAgIC8vQWRkIGFsbCB0aGUgZWxlbWVudHMgdG8gdGhlIGRpdlxuICAgIGRpdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG4vL0NyZWF0ZXMgdGhlIE5hdmJhciBmb3IgdGhlIHNpdGVcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcblxuICAgIC8vTmF2YmFyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgLy9DcmVhdGUgZXZlbnRsaXN0ZW5lcnMgZm9yIGFsbCBvZiB0aGUgYnV0dG9uc1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjcmVhdGVDb250ZW50KGxhbmRpbmdDb250ZW50KTtcbiAgICB9KTtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3JlYXRlQ29udGVudChtZW51Q29udGVudCk7XG4gICAgfSk7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoY29udGFjdENvbnRlbnQpO1xuICAgIH0pO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbi8vQ3JlYXRlcyB0aGUgY29udGVudCBpbiB0aGUgI2NvbnRlbnQgZGl2XG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGNvbnRlbnQpIHtcbiAgICBpZihjb250ZW50ID09PSBtZW51Q29udGVudCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bWVudWltYWdlfScpYDtcbiAgICB9XG4gICAgaWYoY29udGVudCA9PT0gY29udGFjdENvbnRlbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2NvbnRhY3RpbWFnZX0nKWA7XG4gICAgfVxuICAgIGlmKGNvbnRlbnQgPT09IGxhbmRpbmdDb250ZW50KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtsYW5kaW5naW1hZ2V9JylgO1xuICAgIH1cbiAgICBcbiAgICBkaXZjb250ZW50LnJlcGxhY2VXaXRoKGNvbnRlbnQpXG4gICAgZGl2Y29udGVudCA9IGNvbnRlbnQ7XG4gICBcbn1cblxuLy9DcmVhdGVzIHRoZSBmb290ZXIgZm9yIHRoZSBzaXRlXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSBUaGUgT2RpbiBQcm9qZWN0IDIwMjIsIFNhbmkgTGV0Y2h1XCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApXG5cbiAgICByZXR1cm4gZGl2O1xuICAgIFxufVxuLy9DcmVhdGUgdGhlIGRpdiBmb3IgY29udGVudFxubGV0IGRpdmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2Y29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Y29udGVudCk7XG5cbi8vSW5pdGlhbCBjb250ZW50IGlzIGxhbmRpbmdDb250ZW50XG5jcmVhdGVDb250ZW50KGxhbmRpbmdDb250ZW50KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9