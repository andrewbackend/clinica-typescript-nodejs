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

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clinica__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinica */ \"./src/ts/clinica.ts\");\n/* harmony import */ var _paciente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paciente */ \"./src/ts/paciente.ts\");\n\n\nconst clinica = new _clinica__WEBPACK_IMPORTED_MODULE_0__.Clinica();\nconst pacienteForm = document.getElementById(\"pacienteForm\");\nconst pacientesTabla = document.getElementById(\"pacientesTabla\");\nconst buscarPacienteInput = document.getElementById(\"buscarPaciente\");\npacienteForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const nombre = document.getElementById(\"nombre\").value;\n    const apellido = document.getElementById(\"apellido\").value;\n    const edad = parseInt(document.getElementById(\"edad\").value);\n    const genero = document.getElementById(\"genero\").value;\n    const diagnostico = document.getElementById(\"diagnostico\").value;\n    const nuevoPaciente = new _paciente__WEBPACK_IMPORTED_MODULE_1__.Paciente(nombre, apellido, edad, genero, diagnostico, new Date());\n    clinica.agregarPaciente(nuevoPaciente);\n    actualizarTablaPacientes(clinica.listarPacientes());\n    pacienteForm.reset();\n});\nfunction actualizarTablaPacientes(pacientes) {\n    pacientesTabla.innerHTML = \"\";\n    pacientes.forEach((paciente) => {\n        const fila = document.createElement(\"tr\");\n        fila.innerHTML = `\r\n      <td>${paciente.nombre}</td>\r\n      <td>${paciente.apellido}</td>\r\n      <td>${paciente.edad}</td>\r\n      <td>${paciente.genero}</td>\r\n      <td>${paciente.diagnostico}</td>\r\n      <td>${paciente.fechaRegistro.toLocaleDateString()}</td>\r\n    `;\n        pacientesTabla.appendChild(fila);\n    });\n}\nbuscarPacienteInput.addEventListener(\"input\", () => {\n    const termino = buscarPacienteInput.value;\n    const resultados = clinica.buscarPacientes(termino);\n    actualizarTablaPacientes(resultados);\n});\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/clinica.ts":
/*!***************************!*\
  !*** ./src/ts/clinica.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Clinica: () => (/* binding */ Clinica)\n/* harmony export */ });\nclass Clinica {\n    constructor() {\n        this.pacientes = [];\n    }\n    agregarPaciente(paciente) {\n        this.pacientes.push(paciente);\n    }\n    listarPacientes() {\n        return this.pacientes;\n    }\n    buscarPacientes(termino) {\n        return this.pacientes.filter((paciente) => paciente.nombre.toLowerCase().includes(termino.toLowerCase()) ||\n            paciente.apellido.toLowerCase().includes(termino.toLowerCase()));\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/clinica.ts?");

/***/ }),

/***/ "./src/ts/paciente.ts":
/*!****************************!*\
  !*** ./src/ts/paciente.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Paciente: () => (/* binding */ Paciente)\n/* harmony export */ });\nclass Paciente {\n    constructor(nombre, apellido, edad, genero, diagnostico, fechaRegistro) {\n        this.nombre = nombre;\n        this.apellido = apellido;\n        this.edad = edad;\n        this.genero = genero;\n        this.diagnostico = diagnostico;\n        this.fechaRegistro = fechaRegistro;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/paciente.ts?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/app.ts");
/******/ 	
/******/ })()
;