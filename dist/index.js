/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://wayapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://wayapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/public/scripts/index.js":
/*!*************************************!*\
  !*** ./src/public/scripts/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/public/styles/index.css\");\n/* harmony import */ var _img_monitachina_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/monitachina.png */ \"./src/public/img/monitachina.png\");\n/* harmony import */ var _img_lupa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/lupa.png */ \"./src/public/img/lupa.png\");\n/* harmony import */ var _img_luna_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/luna.png */ \"./src/public/img/luna.png\");\n/* harmony import */ var _img_mas_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/mas.png */ \"./src/public/img/mas.png\");\n/* harmony import */ var _img_twitter_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/twitter.png */ \"./src/public/img/twitter.png\");\n/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/github.png */ \"./src/public/img/github.png\");\n/* harmony import */ var _img_youtube_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/youtube.png */ \"./src/public/img/youtube.png\");\n/* harmony import */ var _img_facebook_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/facebook.png */ \"./src/public/img/facebook.png\");\n/* harmony import */ var _img_epic_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/epic.png */ \"./src/public/img/epic.png\");\n/* harmony import */ var _img_avion_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/avion.png */ \"./src/public/img/avion.png\");\n/* harmony import */ var _img_sistema_ventas_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/sistema-ventas.png */ \"./src/public/img/sistema-ventas.png\");\n// import '../styles/bootstrap/bootstrap.min.css'\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar loadSubs = function loadSubs() {\n  fetch('http://localhost:4000/api/subs/loadSubs', {\n    method: 'GET',\n    headers: {\n      'Content-type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    sessionStorage.setItem('subs', res.subs);\n  });\n};\nloadSubs();\nwindow.onload = function () {\n  var followers = document.querySelector('#followers');\n  var num = sessionStorage.getItem('subs');\n  followers.textContent = \"\".concat(num, \" followers\");\n};\n\n//# sourceURL=webpack://wayapp/./src/public/scripts/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/styles/index.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/styles/index.css ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&family=Zen+Kaku+Gothic+Antique:wght@900&family=Zen+Kaku+Gothic+New:wght@500&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: #FFFFFF;\\n  font-size: 30px;\\n  font-family: Nanum Gothic;\\n}\\n\\n.background {\\n  /* background: rgba(215,208,207,255); */\\n  background: linear-gradient(to bottom, rgb(215, 208, 207), rgb(165, 160, 159));\\n  width: 100%;\\n  height: 31.2em;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.floating-window {\\n  background: #FFFFFF;\\n  width: 83%;\\n  height: 93%;\\n  border-radius: 40px;\\n  box-shadow: 12px 20px 22px rgba(0, 0, 0, 0.3);\\n  display: flex;\\n}\\n\\n.img {\\n  border-radius: 40px;\\n  width: 20em;\\n  height: 100%;\\n  margin-right: 70px;\\n}\\n\\n.section-2 {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.headers {\\n  margin-top: 90px;\\n}\\n\\n.inputs {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 40px;\\n}\\n\\n.inputs input {\\n  margin-top: 20px;\\n  height: 2.1em;\\n}\\n\\n.clase-boton {\\n  background: rgb(2, 0, 0);\\n  color: #FFFFFF;\\n  margin-top: 20px;\\n  height: 2.1em;\\n}\\n\\n.help {\\n  margin-top: 60px;\\n}\\n\\n.help a {\\n  color: black;\\n}\\n\\n.p a {\\n  color: #0084D8;\\n}\\n\\n.img-fluid {\\n  border-top-left-radius: 40px;\\n  border-bottom-left-radius: 40px;\\n  height: 870.46px;\\n}\\n\\n.icono-iniciales2 {\\n  background: #34cfee;\\n  border-radius: 80%;\\n  padding-bottom: 8px;\\n  height: 32px;\\n  width: 40px;\\n  /* border: 1px solid black; */\\n  text-align: center;\\n}\\n\\n/* ---------------------PAGINA CONECTED----------------- */\\n.caja-principal {\\n  background: violet;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 31.2em;\\n}\\n\\n.cabecera-principal {\\n  background: #90E0EF;\\n  width: 100%;\\n  height: 5.2em;\\n  font-family: Rubik;\\n  display: flex;\\n  flex-direction: column-reverse;\\n}\\n\\n.datos-usuario {\\n  background: #90E0EF;\\n  height: 2.5em;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.datos-usuario div {\\n  background: #90E0EF;\\n  width: auto;\\n  display: flex;\\n  align-items: flex-end;\\n}\\n\\n.contenido-principal {\\n  background: #0084D8;\\n  width: 100%;\\n  height: 21em;\\n}\\n\\n.pie-principal {\\n  background: black;\\n  width: 100%;\\n  height: 6.3em;\\n}\\n\\n.botones {\\n  background: #0084D8;\\n  width: 70%;\\n  height: 100%;\\n  margin: 0px auto 0px auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n}\\n\\n.btn {\\n  background: #5e2129;\\n  display: flex;\\n  flex-direction: column;\\n  width: 200px;\\n  height: 35px;\\n  overflow: hidden;\\n  margin: 25px;\\n  transition: 1s;\\n  color: #FFFFFF;\\n  text-decoration: none;\\n  text-align: center;\\n}\\n\\n.btn-form-conected {\\n  background: #5e2129;\\n  display: flex;\\n  flex-direction: column;\\n  width: 200px;\\n  height: 35px;\\n  overflow: hidden;\\n  margin: 25px;\\n  transition: 1s;\\n  color: #FFFFFF;\\n  text-decoration: none;\\n  text-align: center;\\n}\\n\\n.btn-news-conected {\\n  background: #5e2129;\\n  display: flex;\\n  flex-direction: column;\\n  width: 200px;\\n  height: 35px;\\n  overflow: hidden;\\n  margin: 25px;\\n  transition: 1s;\\n  color: #FFFFFF;\\n  text-decoration: none;\\n  text-align: center;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #FFFFFF;\\n}\\n\\n.btn:hover {\\n  transform: scale(1.2);\\n}\\n\\n.btn-form-conected:hover {\\n  transform: scale(1.2);\\n}\\n\\n/* Formulario */\\n.formulario {\\n  background: #5e2129;\\n  margin: 0px 25rem 0px 25rem;\\n  height: 100%;\\n  font-family: \\\"Comfortaa\\\";\\n  color: #FFFFFF;\\n}\\n\\n.formulario form {\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-family: \\\"Comfortaa\\\";\\n}\\n\\n.formulario input {\\n  width: 20rem;\\n  padding: 20px;\\n  margin-bottom: 3rem;\\n}\\n\\n#contenido {\\n  height: 100px;\\n}\\n\\n.titulo-form {\\n  display: flex;\\n}\\n\\n.titulo-text {\\n  width: 6em;\\n}\\n\\n.autor-text {\\n  width: 6em;\\n}\\n\\n.descripcion-text {\\n  width: 6em;\\n}\\n\\n.contenido-text {\\n  width: 6em;\\n}\\n\\n/* Articulos */\\n.caja-background-news {\\n  background: #5e2129;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 58.5rem;\\n}\\n\\n.header-news {\\n  width: 100%;\\n  height: 9rem;\\n  background: #0084D8;\\n}\\n\\n.caja-principal-news {\\n  width: 100%;\\n  height: 41rem;\\n  background: #FFFFFF;\\n  overflow: hidden;\\n}\\n\\n.caja-secundaria-news {\\n  width: 95%;\\n  height: 37rem;\\n  background: #34cfee;\\n  margin: 2rem 3rem 2rem 3rem;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.box {\\n  width: 16rem;\\n  height: 15rem;\\n  background: #5e2129;\\n  border-radius: 4px;\\n  margin: 20px 10px 20px 10px;\\n  transition: 0.7s;\\n}\\n\\n.box:hover {\\n  transform: scale(1.07);\\n}\\n\\n.mini-box {\\n  width: 95%;\\n  height: 14rem;\\n  background: blanchedalmond;\\n  margin: 5px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-size: 20px;\\n}\\n\\n.idArticle {\\n  font-size: 16px;\\n}\\n\\nbody {\\n  background: #3f3f3f;\\n  margin: 0px;\\n  font-size: 30px;\\n}\\n\\n.caja-body {\\n  background: violet;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 42em;\\n}\\n\\n.cabecera {\\n  background: #FFFFFF;\\n  /* font-size: 1em; */\\n  width: 100%;\\n  height: 4.8em;\\n  font-family: Rubik;\\n}\\n\\n.datos-cabecera {\\n  background-color: #581845;\\n  width: 80%;\\n  height: 100%;\\n  margin: 0px auto 0px auto;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  color: #1E1E1E;\\n}\\n\\n.datos-cabecera a {\\n  margin: 0.2em;\\n  text-decoration: none;\\n  color: #1E1E1E;\\n  font-size: 0.5em;\\n}\\n\\n.datos {\\n  background: #FFFFFF;\\n  /* border: 1px solid wheat; */\\n  width: auto;\\n  height: auto;\\n  box-sizing: border-box;\\n  /* padding-top: 1em; */\\n}\\n\\n.RT {\\n  display: flex;\\n  justify-content: end;\\n}\\n\\n.caja-iconos {\\n  display: flex;\\n  width: 10em;\\n  height: 2.3em;\\n  align-items: flex-end;\\n  justify-content: end;\\n}\\n\\n.caja-iconos div {\\n  margin: 0px 9px 0px 9px;\\n}\\n\\n.icono-lupa {\\n  border: 1px solid white;\\n  height: 32px;\\n}\\n\\n.icono-seguir {\\n  border: 1px solid white;\\n  height: 32px;\\n  width: auto;\\n  font-size: 1em;\\n  text-align: top;\\n}\\n\\n.icono-luna {\\n  border: 1px solid white;\\n  height: 32px;\\n}\\n\\n.icono-iniciales {\\n  background: #34cfee;\\n  border-radius: 80%;\\n  padding-bottom: 8px;\\n  height: 32px;\\n  width: 40px;\\n  /* border: 1px solid black; */\\n  text-align: center;\\n}\\n\\n.caja-iconos2 {\\n  display: flex;\\n  width: 10em;\\n  height: 2.3em;\\n  align-items: flex-end;\\n  justify-content: end;\\n}\\n\\n.icon {\\n  height: 32px;\\n  width: auto;\\n  margin: 0px 0.08em 0px 0.08em;\\n}\\n\\n.RB {\\n  display: flex;\\n  justify-content: end;\\n}\\n\\n.LT {\\n  font-size: 0.8em;\\n  padding-top: 1.7em;\\n}\\n\\n.LB {\\n  padding-top: 1.1em;\\n  display: flex;\\n}\\n\\n.LB div:hover {\\n  background: rgba(215, 215, 215, 0.6);\\n}\\n\\n.home {\\n  width: auto;\\n  margin-right: 0.2em;\\n  text-align: center;\\n  border-top-left-radius: 6px;\\n  border-top-right-radius: 6px;\\n  padding: 0px 0.2em 0.2em 0.2em;\\n}\\n\\n.badges {\\n  width: auto;\\n  margin-right: 0.2em;\\n  text-align: center;\\n  border-top-left-radius: 6px;\\n  border-top-right-radius: 6px;\\n  padding: 0px 0.2em 0.2em 0.2em;\\n}\\n\\n.LB a:hover {\\n  /* background: rgba(215, 215, 215, 0.6); */\\n}\\n\\n.buscar {\\n  width: 32px;\\n  height: 32px;\\n}\\n\\n.autor {\\n  background: #FFFFFF;\\n  width: 100%;\\n  height: 7.9em;\\n  border-top: 1px solid rgba(215, 215, 215, 0.6);\\n  border-bottom: 1px solid rgba(215, 215, 215, 0.6);\\n}\\n\\n.datos-autor {\\n  display: flex;\\n  width: 55%;\\n  height: 100%;\\n  margin: 0px auto 0px auto;\\n  color: #1E1E1E;\\n  /* justify-content: space-between; */\\n}\\n\\n.nombre {\\n  font-size: 1em;\\n  font-family: Rubik;\\n  width: 60%;\\n}\\n\\n.data {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 1.5em;\\n}\\n\\n.data span {\\n  font-size: 0.6em;\\n  font-family: Nanum Gothic;\\n}\\n\\n/* -----------------------------INDEX----------------------- */\\n.skills {\\n  font-family: Nanum Gothic;\\n  font-size: 0.6em;\\n  margin-top: 0.8em;\\n  width: 100%;\\n}\\n\\n.foto {\\n  overflow: hidden;\\n  width: 200px;\\n  height: 200px;\\n  margin-left: 1.8em;\\n  margin-right: 0px;\\n  margin-top: 0.5em;\\n  border-radius: 50%;\\n}\\n\\nmain {\\n  background: #FFFFFF;\\n  width: 100%;\\n  height: 23.2em;\\n}\\n\\n.principal {\\n  width: 55%;\\n  height: 100%;\\n  margin: 0px auto 0px auto;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.suscribe {\\n  background: #FFFFFF;\\n  width: 100%;\\n  height: 4em;\\n  margin-top: 1.5em;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.caja-texto {\\n  width: 100%;\\n  height: 2em;\\n  border-radius: 8px;\\n  display: flex;\\n  align-items: center;\\n  border: 1px solid rgba(215, 215, 215, 0.6);\\n}\\n\\n.caja-texto:hover {\\n  transition: 0.6s;\\n  box-shadow: 3px 2px 3px 3px rgba(28, 28, 28, 0.5);\\n}\\n\\n.caja-texto input {\\n  width: 80%;\\n  height: 3em;\\n  padding: 0px;\\n  font-family: Poppins;\\n  margin-right: 0.5em;\\n  font-size: 0.5em;\\n  border: 0;\\n  outline: none;\\n}\\n\\n.caja-texto button {\\n  background: #FFFFFF;\\n  border: none;\\n  padding: 0.8em;\\n  width: 8em;\\n  margin-right: 0.8em;\\n  margin-left: 0px;\\n  font-family: Lato;\\n  font-size: 0.5em;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n\\n.caja-texto button:hover {\\n  background: rgba(215, 215, 215, 0.5);\\n}\\n\\n.avion {\\n  width: 1.1em;\\n  margin-right: 0.3em;\\n}\\n\\n.text {\\n  font-size: 10px;\\n  font-family: Montserrat;\\n  font-size: 0.5em;\\n  padding-top: 0.5em;\\n  box-sizing: border-box;\\n  color: #1E1E1E;\\n  margin-right: 0px;\\n}\\n\\n.articulos {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.articulo-index {\\n  width: 100%;\\n  height: 7.6em;\\n  margin-top: 1em;\\n  display: flex;\\n}\\n\\n.articulo-index a {\\n  color: #1E1E1E;\\n  text-decoration: none;\\n}\\n\\n.contenido-articulo {\\n  display: flex;\\n  flex-direction: column;\\n  width: 65%;\\n  font-size: 1em;\\n}\\n\\n.titulo-articulo {\\n  font-family: Roboto;\\n  font-size: 1.2em;\\n  width: 95%;\\n}\\n\\n.fecha-articulo {\\n  font-family: Lato;\\n  font-size: 0.45em;\\n  width: 40%;\\n}\\n\\n.texto-articulo {\\n  font-family: Titillium Web;\\n  font-size: 0.57em;\\n  width: 95%;\\n  line-height: 1.4;\\n  padding: 0.5em;\\n  text-align: justify;\\n}\\n\\n.imagen {\\n  width: 15em;\\n  height: 200px;\\n  border-radius: 4px;\\n  margin: 0.8em 2em 0.8em 2em;\\n}\\n\\nfooter {\\n  background: #fafafa;\\n  width: 100%;\\n  height: 6.3em;\\n}\\n\\n.pie {\\n  width: 50%;\\n  height: 100%;\\n  margin: 0px auto 0px auto;\\n  display: flex;\\n  flex-direction: column;\\n  font-family: Lato;\\n  font-size: 0.5em;\\n}\\n\\n.info-pie {\\n  width: 50%;\\n  height: 6em;\\n  margin: 0px auto 0px auto;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n}\\n\\n.logo {\\n  width: 50%;\\n  height: 6em;\\n  margin: 0px auto 0px auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.imagen {\\n  width: 6em;\\n  height: 6em;\\n}\\n\\n/* ---------------------INDEX FIN------------------- */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://wayapp/./src/public/styles/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/public/styles/index.css":
/*!*************************************!*\
  !*** ./src/public/styles/index.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://wayapp/./src/public/styles/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://wayapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://wayapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://wayapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://wayapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://wayapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://wayapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/public/img/avion.png":
/*!**********************************!*\
  !*** ./src/public/img/avion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/avion.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/avion.png?");

/***/ }),

/***/ "./src/public/img/epic.png":
/*!*********************************!*\
  !*** ./src/public/img/epic.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/epic.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/epic.png?");

/***/ }),

/***/ "./src/public/img/facebook.png":
/*!*************************************!*\
  !*** ./src/public/img/facebook.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/facebook.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/facebook.png?");

/***/ }),

/***/ "./src/public/img/github.png":
/*!***********************************!*\
  !*** ./src/public/img/github.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/github.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/github.png?");

/***/ }),

/***/ "./src/public/img/luna.png":
/*!*********************************!*\
  !*** ./src/public/img/luna.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/luna.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/luna.png?");

/***/ }),

/***/ "./src/public/img/lupa.png":
/*!*********************************!*\
  !*** ./src/public/img/lupa.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/lupa.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/lupa.png?");

/***/ }),

/***/ "./src/public/img/mas.png":
/*!********************************!*\
  !*** ./src/public/img/mas.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/mas.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/mas.png?");

/***/ }),

/***/ "./src/public/img/monitachina.png":
/*!****************************************!*\
  !*** ./src/public/img/monitachina.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/monitachina.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/monitachina.png?");

/***/ }),

/***/ "./src/public/img/sistema-ventas.png":
/*!*******************************************!*\
  !*** ./src/public/img/sistema-ventas.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/sistema-ventas.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/sistema-ventas.png?");

/***/ }),

/***/ "./src/public/img/twitter.png":
/*!************************************!*\
  !*** ./src/public/img/twitter.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/twitter.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/twitter.png?");

/***/ }),

/***/ "./src/public/img/youtube.png":
/*!************************************!*\
  !*** ./src/public/img/youtube.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/youtube.png\";\n\n//# sourceURL=webpack://wayapp/./src/public/img/youtube.png?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/scripts/index.js");
/******/ 	
/******/ })()
;