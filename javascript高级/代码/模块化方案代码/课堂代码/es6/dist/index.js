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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = common;
//export是es6的模块化定义的静态暴露方式
function common(){
    return "common依赖库"
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zs_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ls_js__ = __webpack_require__(3);
// * 表示获取所有在模块中使用export关键字对外暴露的函数或者对象
// as 是把需要暴露函数或者对象放到自定义的命名空间当中



window.onload = function(){
    __WEBPACK_IMPORTED_MODULE_0__zs_js__["a" /* add */]()
    __WEBPACK_IMPORTED_MODULE_0__zs_js__["b" /* list */]()
    __WEBPACK_IMPORTED_MODULE_1__ls_js__["a" /* add */]()
    __WEBPACK_IMPORTED_MODULE_1__ls_js__["b" /* list */]()
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* harmony export (immutable) */ __webpack_exports__["b"] = list;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(0);
// {}表示模块暴露的函数或者对象的名称是时候,名称可以随便定义只要符合变量定义的规则即可
// from后面表示模块定义的文件路径

//import {demo,display} from "./common/common2.js"


function add(){
    test()
    console.log("es6 - zs of add function,common="+Object(__WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */])())
}


function list(){
    test()
    console.log("es6 - zs of list function,common="+Object(__WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */])())
}

//如果没有使用export暴露的函数 只能再模块内部使用
function test(){
    console.log("private of test from zs")
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return list; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(0);
// {}表示模块暴露的函数或者对象的名称是时候,名称可以随便定义只要符合变量定义的规则即可
// from后面表示模块定义的文件路径

//import {demo,display} from "./common/common2.js"


function add(){
    test()
    console.log("es6 - ls of add function,common="+Object(__WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */])())
}


function list(){
    test()
    console.log("es6 - ls of list function,common="+Object(__WEBPACK_IMPORTED_MODULE_0__common_common_js__["a" /* common */])())
}

//如果没有使用export暴露的函数 只能再模块内部使用
function test(){
    console.log("private of test from ls")
}



/***/ })
/******/ ]);