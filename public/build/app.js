(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_pages_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pages/PageLayout */ "./assets/js/pages/PageLayout.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_pages_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/App.css":
/*!***************************!*\
  !*** ./assets/js/App.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/api/BasicUrl.js":
/*!***********************************!*\
  !*** ./assets/js/api/BasicUrl.js ***!
  \***********************************/
/*! exports provided: API_URL, HEADERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
var API_URL = '/api';
var HEADERS = {
  'Content-Type': 'application/json'
};

/***/ }),

/***/ "./assets/js/api/Complaints.js":
/*!*************************************!*\
  !*** ./assets/js/api/Complaints.js ***!
  \*************************************/
/*! exports provided: getComplaints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComplaints", function() { return getComplaints; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getComplaints() {
  return _getComplaints.apply(this, arguments);
}

function _getComplaints() {
  _getComplaints = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/complaints.json")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getComplaints.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/Halls.js":
/*!********************************!*\
  !*** ./assets/js/api/Halls.js ***!
  \********************************/
/*! exports provided: getHalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHalls", function() { return getHalls; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getHalls() {
  return _getHalls.apply(this, arguments);
}

function _getHalls() {
  _getHalls = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/halls.json")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getHalls.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/Machines.js":
/*!***********************************!*\
  !*** ./assets/js/api/Machines.js ***!
  \***********************************/
/*! exports provided: getMachines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachines", function() { return getMachines; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getMachines() {
  return _getMachines.apply(this, arguments);
}

function _getMachines() {
  _getMachines = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/machines.json")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMachines.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/MachinesGroups.js":
/*!*****************************************!*\
  !*** ./assets/js/api/MachinesGroups.js ***!
  \*****************************************/
/*! exports provided: getMachinesGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachinesGroups", function() { return getMachinesGroups; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getMachinesGroups() {
  return _getMachinesGroups.apply(this, arguments);
}

function _getMachinesGroups() {
  _getMachinesGroups = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/machines_groups.json")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMachinesGroups.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/ObjectsAddresses.js":
/*!*******************************************!*\
  !*** ./assets/js/api/ObjectsAddresses.js ***!
  \*******************************************/
/*! exports provided: getObjectsAddresses, newObjectAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectsAddresses", function() { return getObjectsAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newObjectAddress", function() { return newObjectAddress; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getObjectsAddresses() {
  return _getObjectsAddresses.apply(this, arguments);
}

function _getObjectsAddresses() {
  _getObjectsAddresses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/object_addresses.json")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getObjectsAddresses.apply(this, arguments);
}

function newObjectAddress(_x) {
  return _newObjectAddress.apply(this, arguments);
}

function _newObjectAddress() {
  _newObjectAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/object_addresses"), {
              data: data
            }, {
              headers: _BasicUrl__WEBPACK_IMPORTED_MODULE_5__["HEADERS"]
            }).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _newObjectAddress.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/Orders.js":
/*!*********************************!*\
  !*** ./assets/js/api/Orders.js ***!
  \*********************************/
/*! exports provided: getOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getOrders() {
  return _getOrders.apply(this, arguments);
}

function _getOrders() {
  _getOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/orders.json")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getOrders.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/Resolve.js":
/*!**********************************!*\
  !*** ./assets/js/api/Resolve.js ***!
  \**********************************/
/*! exports provided: resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function resolve(_x) {
  return _resolve.apply(this, arguments);
}

function _resolve() {
  _resolve = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(promise) {
    var resolved;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resolved = {
              data: null,
              error: null
            };
            _context.prev = 1;
            _context.next = 4;
            return promise;

          case 4:
            resolved.data = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            resolved.error = _context.t0;

          case 10:
            return _context.abrupt("return", resolved);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _resolve.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/TodoType.js":
/*!***********************************!*\
  !*** ./assets/js/api/TodoType.js ***!
  \***********************************/
/*! exports provided: getTodoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodoType", function() { return getTodoType; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getTodoType() {
  return _getTodoType.apply(this, arguments);
}

function _getTodoType() {
  _getTodoType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/todo_types.json")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTodoType.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/Todos.js":
/*!********************************!*\
  !*** ./assets/js/api/Todos.js ***!
  \********************************/
/*! exports provided: getTodayTodos, getObjectTodos, getTodosByObjectAndType, getOverdueTodos, getNextWeekTodos, getTodayTodosTypesObjects, getOverdueTodosTypesObjects, getNextTodosTypesObjects, postNewTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayTodos", function() { return getTodayTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectTodos", function() { return getObjectTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodosByObjectAndType", function() { return getTodosByObjectAndType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverdueTodos", function() { return getOverdueTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextWeekTodos", function() { return getNextWeekTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayTodosTypesObjects", function() { return getTodayTodosTypesObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverdueTodosTypesObjects", function() { return getOverdueTodosTypesObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextTodosTypesObjects", function() { return getNextTodosTypesObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewTodo", function() { return postNewTodo; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Resolve */ "./assets/js/api/Resolve.js");
/* harmony import */ var _BasicUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BasicUrl */ "./assets/js/api/BasicUrl.js");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getTodayTodos(_x) {
  return _getTodayTodos.apply(this, arguments);
}

function _getTodayTodos() {
  _getTodayTodos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(date) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos.json?date=").concat(date, "&exists[endDate]=false")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTodayTodos.apply(this, arguments);
}

function getObjectTodos(_x2) {
  return _getObjectTodos.apply(this, arguments);
}

function _getObjectTodos() {
  _getObjectTodos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(objectAddress) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos.json?exist[endDate]=false&objectAddress=").concat(objectAddress)).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getObjectTodos.apply(this, arguments);
}

function getTodosByObjectAndType() {
  return _getTodosByObjectAndType.apply(this, arguments);
}

function _getTodosByObjectAndType() {
  _getTodosByObjectAndType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos/object/details")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTodosByObjectAndType.apply(this, arguments);
}

function getOverdueTodos(_x3) {
  return _getOverdueTodos.apply(this, arguments);
}

function _getOverdueTodos() {
  _getOverdueTodos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(date) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos.json?date[strictly_before]=").concat(date, "&exists[endDate]=false")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getOverdueTodos.apply(this, arguments);
}

function getNextWeekTodos(_x4) {
  return _getNextWeekTodos.apply(this, arguments);
}

function _getNextWeekTodos() {
  _getNextWeekTodos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(date) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos.json?date[strictly_after]=").concat(date, "&exists[endDate]=false")).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getNextWeekTodos.apply(this, arguments);
}

function getTodayTodosTypesObjects(_x5) {
  return _getTodayTodosTypesObjects.apply(this, arguments);
}

function _getTodayTodosTypesObjects() {
  _getTodayTodosTypesObjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(date) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos/today/details/").concat(date), {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTodayTodosTypesObjects.apply(this, arguments);
}

function getOverdueTodosTypesObjects(_x6) {
  return _getOverdueTodosTypesObjects.apply(this, arguments);
}

function _getOverdueTodosTypesObjects() {
  _getOverdueTodosTypesObjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(date) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos/overdue/details/").concat(date), {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getOverdueTodosTypesObjects.apply(this, arguments);
}

function getNextTodosTypesObjects(_x7) {
  return _getNextTodosTypesObjects.apply(this, arguments);
}

function _getNextTodosTypesObjects() {
  _getNextTodosTypesObjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(date) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos/next/details/").concat(date), {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getNextTodosTypesObjects.apply(this, arguments);
}

function postNewTodo(_x8) {
  return _postNewTodo.apply(this, arguments);
}

function _postNewTodo() {
  _postNewTodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: "POST",
              url: "".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/object_addresses"),
              data: {
                data: data
              },
              config: {
                headers: {
                  'Content-Type': 'application/json',
                  'accept': 'application/json'
                }
              }
            }).then(function (res) {
              return res.data;
            }));

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _postNewTodo.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/components/DashbordPart.js":
/*!**********************************************!*\
  !*** ./assets/js/components/DashbordPart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardPart; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _EntitySummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EntitySummary */ "./assets/js/components/EntitySummary.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    main: {
      display: 'flex',
      alignItems: 'stretch',
      margin: '1vw 0.5vw',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
  };
});
function DashboardPart(_ref) {
  var title = _ref.title,
      data = _ref.data,
      link = _ref.link;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  var toggleVisibility = function toggleVisibility() {
    setVisibility(!visibility);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    divider: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemText"], {
    primary: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Add"], null)), visibility ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Visibility"], {
    onClick: toggleVisibility
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["VisibilityOff"], {
    onClick: toggleVisibility
  })), visibility && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("header", {
    className: "".concat(classes.main, " ").concat(classes.flex)
  }, data.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_EntitySummary__WEBPACK_IMPORTED_MODULE_7__["EntitySummary"], {
      key: key,
      data: item,
      header: "Lista"
    });
  })));
}

/***/ }),

/***/ "./assets/js/components/EntityAll.js":
/*!*******************************************!*\
  !*** ./assets/js/components/EntityAll.js ***!
  \*******************************************/
/*! exports provided: EntityAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityAll", function() { return EntityAll; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _basic_CardSubtitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic/CardSubtitle */ "./assets/js/components/basic/CardSubtitle.js");
/* harmony import */ var _basic_ListBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/ListBody */ "./assets/js/components/basic/ListBody.js");











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '32%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    },
    title: {
      fontSize: 14
    }
  };
});
var EntityAll = function EntityAll(_ref) {
  var data = _ref.data,
      header = _ref.header;
  var classes = useStyles();
  console.log(data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    data: data.title
  }), data.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: data.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_basic_CardSubtitle__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
    header: header
  }), data.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_basic_ListBody__WEBPACK_IMPORTED_MODULE_10__["ListBody"], {
      data: item
    }));
  })));
};

/***/ }),

/***/ "./assets/js/components/EntitySummary.js":
/*!***********************************************!*\
  !*** ./assets/js/components/EntitySummary.js ***!
  \***********************************************/
/*! exports provided: EntitySummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitySummary", function() { return EntitySummary; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _basic_CardSubtitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/CardSubtitle */ "./assets/js/components/basic/CardSubtitle.js");
/* harmony import */ var _basic_ListBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/ListBody */ "./assets/js/components/basic/ListBody.js");












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '32%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    },
    title: {
      fontSize: 14
    }
  };
});
var EntitySummary = function EntitySummary(_ref) {
  var data = _ref.data,
      header = _ref.header;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
    data: data.title
  }), data.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: data.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_basic_CardSubtitle__WEBPACK_IMPORTED_MODULE_10__["CardSubtitle"], {
    header: header
  }), data.data.slice(0, 3).map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["List"], {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_basic_ListBody__WEBPACK_IMPORTED_MODULE_11__["ListBody"], {
      data: item
    }));
  })));
};

/***/ }),

/***/ "./assets/js/components/TodosPart.js":
/*!*******************************************!*\
  !*** ./assets/js/components/TodosPart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodosPart; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _EntityAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EntityAll */ "./assets/js/components/EntityAll.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    main: {
      display: 'flex',
      alignItems: 'stretch',
      margin: '1vw 0.5vw',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
  };
});
function TodosPart(_ref) {
  var title = _ref.title,
      data = _ref.data;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  var toggleVisibility = function toggleVisibility() {
    setVisibility(!visibility);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    divider: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemText"], {
    primary: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/addTodo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Add"], null)), visibility ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Visibility"], {
    onClick: toggleVisibility
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["VisibilityOff"], {
    onClick: toggleVisibility
  })), visibility && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("header", {
    className: "".concat(classes.main, " ").concat(classes.flex)
  }, Object.entries(data).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        item = _ref3[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_EntityAll__WEBPACK_IMPORTED_MODULE_7__["EntityAll"], {
      key: key,
      data: item,
      header: key
    });
  })));
}

/***/ }),

/***/ "./assets/js/components/basic/CardHeader.js":
/*!**************************************************!*\
  !*** ./assets/js/components/basic/CardHeader.js ***!
  \**************************************************/
/*! exports provided: CardHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  title: {
    fontSize: 14
  }
});
var CardHeader = function CardHeader(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, data);
};

/***/ }),

/***/ "./assets/js/components/basic/CardSubtitle.js":
/*!****************************************************!*\
  !*** ./assets/js/components/basic/CardSubtitle.js ***!
  \****************************************************/
/*! exports provided: CardSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return CardSubtitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var CardSubtitle = function CardSubtitle(_ref) {
  var header = _ref.header;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    component: "h2"
  }, header);
};

/***/ }),

/***/ "./assets/js/components/basic/ListBody.js":
/*!************************************************!*\
  !*** ./assets/js/components/basic/ListBody.js ***!
  \************************************************/
/*! exports provided: ListBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBody", function() { return ListBody; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    heading: {
      fontSize: theme.typography.pxToRem(12),
      flexBasis: '100%',
      flexShrink: 0,
      display: 'block'
    },
    list: {
      width: '100%',
      padding: '0 0 1vw 0'
    }
  };
});
var ListBody = function ListBody(_ref) {
  var data = _ref.data;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Accordion"], {
    className: classes.list,
    expanded: expanded === 'panel1',
    onChange: handleChange('panel1')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AccordionSummary"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle1",
    className: classes.heading
  }, data.title && data.title, data.supplier && data.supplier, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "caption"
  }, moment__WEBPACK_IMPORTED_MODULE_7___default()(data.date).format('LL')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AccordionDetails"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, data.description))));
};

/***/ }),

/***/ "./assets/js/components/basic/MenuItem.js":
/*!************************************************!*\
  !*** ./assets/js/components/basic/MenuItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItem; });
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





function MenuItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: item.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_0__["default"], null, item.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primary: item.title
  })));
}

/***/ }),

/***/ "./assets/js/components/form/basic/AddForm.js":
/*!****************************************************!*\
  !*** ./assets/js/components/form/basic/AddForm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddForm; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _FormPart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormPart */ "./assets/js/components/form/basic/FormPart.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    main: {
      display: 'flex',
      alignItems: 'stretch',
      margin: '1vw 0.5vw',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      borderRadius: '0.5vw'
    }
  };
});
function AddForm(_ref) {
  var form = _ref.form,
      forms = _ref.forms;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "".concat(classes.main, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "".concat(classes.card)
  }, form), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "".concat(classes.card)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormPart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    forms: forms
  })));
}

/***/ }),

/***/ "./assets/js/components/form/basic/Complaint.js":
/*!******************************************************!*\
  !*** ./assets/js/components/form/basic/Complaint.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Complaint; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _api_Machines__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/Machines */ "./assets/js/api/Machines.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function Complaint() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      machineList = _useState2[0],
      setMachineList = _useState2[1];

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var machines;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_Machines__WEBPACK_IMPORTED_MODULE_10__["getMachines"])();

              case 2:
                machines = _context.sent;

                if (!machines.error) {
                  setMachineList(machines.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
    data: "Dodaj reklamacj\u0119"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "partName",
    control: control,
    defaultValue: "",
    render: function render(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Nazwa cz\u0119\u015Bci",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "supplier",
    control: control,
    defaultValue: "",
    render: function render(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Dostawca",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "description",
    control: control,
    defaultValue: "",
    render: function render(_ref4) {
      var onChange = _ref4.onChange,
          value = _ref4.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Opis",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "filingDate",
    control: control,
    defaultValue: "",
    render: function render(_ref5) {
      var onChange = _ref5.onChange,
          value = _ref5.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Data zg\u0142oszenia",
        type: "date",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "machine",
    control: control,
    defaultValue: "",
    render: function render(_ref6) {
      var onChange = _ref6.onChange,
          value = _ref6.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Maszyna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, machineList && machineList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/components/form/basic/Form.js":
/*!*************************************************!*\
  !*** ./assets/js/components/form/basic/Form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Form(_ref) {
  var item = _ref.item;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  var toggleVisibility = function toggleVisibility() {
    setVisibility(!visibility);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    divider: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: item.title
  }), visibility ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Visibility"], {
    onClick: toggleVisibility
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["VisibilityOff"], {
    onClick: toggleVisibility
  })), visibility && item.data);
}

/***/ }),

/***/ "./assets/js/components/form/basic/FormPart.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/form/basic/FormPart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormPart; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./assets/js/components/form/basic/Form.js");



function FormPart(_ref) {
  var forms = _ref.forms;
  return forms.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      item: item
    });
  });
}

/***/ }),

/***/ "./assets/js/components/form/basic/Hall.js":
/*!*************************************************!*\
  !*** ./assets/js/components/form/basic/Hall.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hall; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/ObjectsAddresses */ "./assets/js/api/ObjectsAddresses.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function Hall() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      objectAddressList = _useState2[0],
      setObjectAddressList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var objectAddress;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_10__["getObjectsAddresses"])();

              case 2:
                objectAddress = _context.sent;

                if (!objectAddress.error) {
                  setObjectAddressList(objectAddress.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
    data: "Dodaj hal\u0119 / kurnik"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "name",
    control: control,
    defaultValue: "",
    render: function render(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Nazwa",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "description",
    control: control,
    defaultValue: "",
    render: function render(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Opis",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "objectAddress",
    control: control,
    defaultValue: "",
    render: function render(_ref4) {
      var onChange = _ref4.onChange,
          value = _ref4.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, objectAddressList && objectAddressList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/components/form/basic/Machine.js":
/*!****************************************************!*\
  !*** ./assets/js/components/form/basic/Machine.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Machine; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/ObjectsAddresses */ "./assets/js/api/ObjectsAddresses.js");
/* harmony import */ var _api_Halls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/Halls */ "./assets/js/api/Halls.js");
/* harmony import */ var _api_MachinesGroups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/MachinesGroups */ "./assets/js/api/MachinesGroups.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function Machine() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      objectAddressList = _useState2[0],
      setObjectAddressList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      hallList = _useState4[0],
      setHallList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      machinesGroupsList = _useState6[0],
      setMachinesGroupsList = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var objectAddress;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_10__["getObjectsAddresses"])();

              case 2:
                objectAddress = _context.sent;

                if (!objectAddress.error) {
                  setObjectAddressList(objectAddress.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var halls;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_api_Halls__WEBPACK_IMPORTED_MODULE_11__["getHalls"])();

              case 2:
                halls = _context2.sent;

                if (!halls.error) {
                  setHallList(halls.data);
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var machineGroups;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_api_MachinesGroups__WEBPACK_IMPORTED_MODULE_12__["getMachinesGroups"])();

              case 2:
                machineGroups = _context3.sent;

                if (!machineGroups.error) {
                  setMachinesGroupsList(machineGroups.data);
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function fetchData() {
        return _ref3.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
    data: "Dodaj maszyn\u0119 / urz\u0105dzenie"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "name",
    control: control,
    defaultValue: "",
    render: function render(_ref4) {
      var onChange = _ref4.onChange,
          value = _ref4.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Nazwa",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "serialNumber",
    control: control,
    defaultValue: "",
    render: function render(_ref5) {
      var onChange = _ref5.onChange,
          value = _ref5.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Numer seryjny",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "objectAddress",
    control: control,
    defaultValue: "",
    render: function render(_ref6) {
      var onChange = _ref6.onChange,
          value = _ref6.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, objectAddressList && objectAddressList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "hall",
    control: control,
    defaultValue: "",
    render: function render(_ref7) {
      var onChange = _ref7.onChange,
          value = _ref7.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Hala / Kurnik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, hallList && hallList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "machinesGroups",
    control: control,
    defaultValue: "",
    render: function render(_ref8) {
      var onChange = _ref8.onChange,
          value = _ref8.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Grupa maszyn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, machinesGroupsList && machinesGroupsList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/components/form/basic/MachineGroups.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/form/basic/MachineGroups.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MachineGroups; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function MachineGroups() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
    data: "Dodaj grup\u0119 maszyn"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    name: "name",
    control: control,
    defaultValue: "",
    render: function render(_ref) {
      var onChange = _ref.onChange,
          value = _ref.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "standard-basic",
        label: "Nazwa",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    name: "description",
    control: control,
    defaultValue: "",
    render: function render(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "standard-basic",
        label: "Opis",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    name: "serialNumber",
    control: control,
    defaultValue: "",
    render: function render(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "standard-basic",
        label: "Numer seryjny",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/components/form/basic/ObjectAddress.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/form/basic/ObjectAddress.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectAddress; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/ObjectsAddresses */ "./assets/js/api/ObjectsAddresses.js");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function ObjectAddress() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var newObject;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(JSON.stringify(data));
              _context.next = 3;
              return Object(_api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_9__["newObjectAddress"])(JSON.stringify(data));

            case 3:
              newObject = _context.sent;

              if (newObject.error) {
                console.log(newObject.error);
              } else {
                console.log(newObject.data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    id: "object-address-add",
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    data: "Dodaj lokalizacj\u0119"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    name: "name",
    control: control,
    defaultValue: "",
    render: function render(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        id: "standard-basic",
        label: "Nazwa",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    name: "street",
    control: control,
    defaultValue: "",
    render: function render(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        id: "standard-basic",
        label: "Ulica",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    name: "streetNumber",
    control: control,
    defaultValue: "",
    render: function render(_ref4) {
      var onChange = _ref4.onChange,
          value = _ref4.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        id: "standard-basic",
        label: "Nr domu / mieszkania",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    name: "phoneNumber",
    control: control,
    defaultValue: "",
    render: function render(_ref5) {
      var onChange = _ref5.onChange,
          value = _ref5.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        id: "standard-basic",
        label: "Numer telefonu",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    name: "email",
    control: control,
    defaultValue: "",
    render: function render(_ref6) {
      var onChange = _ref6.onChange,
          value = _ref6.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        id: "standard-basic",
        label: "Adres email",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/components/form/basic/Order.js":
/*!**************************************************!*\
  !*** ./assets/js/components/form/basic/Order.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Order; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/ObjectsAddresses */ "./assets/js/api/ObjectsAddresses.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function Order() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      objectAddressList = _useState2[0],
      setObjectAddressList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var objectAddress;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_10__["getObjectsAddresses"])();

              case 2:
                objectAddress = _context.sent;

                if (!objectAddress.error) {
                  setObjectAddressList(objectAddress.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
    data: "Dodaj hal\u0119 / kurnik"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "name",
    control: control,
    defaultValue: "",
    render: function render(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Nazwa",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "description",
    control: control,
    defaultValue: "",
    render: function render(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Opis",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "supplier",
    control: control,
    defaultValue: "",
    render: function render(_ref4) {
      var onChange = _ref4.onChange,
          value = _ref4.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Sprzedawca",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "orderDate",
    control: control,
    defaultValue: "",
    render: function render(_ref5) {
      var onChange = _ref5.onChange,
          value = _ref5.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        id: "standard-basic",
        label: "Data zam\xF3wienia",
        type: "date",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    name: "objectAddress",
    control: control,
    defaultValue: "",
    render: function render(_ref6) {
      var onChange = _ref6.onChange,
          value = _ref6.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, objectAddressList && objectAddressList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/components/form/basic/Todo.js":
/*!*************************************************!*\
  !*** ./assets/js/components/form/basic/Todo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todo; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");
/* harmony import */ var _api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/ObjectsAddresses */ "./assets/js/api/ObjectsAddresses.js");
/* harmony import */ var _api_Machines__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/Machines */ "./assets/js/api/Machines.js");
/* harmony import */ var _api_TodoType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../api/TodoType */ "./assets/js/api/TodoType.js");
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../api/Todos */ "./assets/js/api/Todos.js");







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function Todo() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var datas;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              datas = {
                'name': 'test2',
                'street': 'trtg2',
                'streetNumber': '2ybdu8',
                'phoneNumber': '84274940',
                'email': 'jfhfh@fhf2j.pl'
              };
              _context.next = 3;
              return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_14__["postNewTodo"])(datas);

            case 3:
              console.log(datas);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      objectAddressList = _useState2[0],
      setObjectAddressList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      machineList = _useState4[0],
      setMachineList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      todoTypeList = _useState6[0],
      setTodoTypeList = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var objectAddress;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_11__["getObjectsAddresses"])();

              case 2:
                objectAddress = _context2.sent;

                if (!objectAddress.error) {
                  setObjectAddressList(objectAddress.data);
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var machines;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_api_Machines__WEBPACK_IMPORTED_MODULE_12__["getMachines"])();

              case 2:
                machines = _context3.sent;

                if (!machines.error) {
                  setMachineList(machines.data);
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function fetchData() {
        return _ref3.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var todoTypes;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_api_TodoType__WEBPACK_IMPORTED_MODULE_13__["getTodoType"])();

              case 2:
                todoTypes = _context4.sent;

                if (!todoTypes.error) {
                  setTodoTypeList(todoTypes.data);
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function fetchData() {
        return _ref4.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
    data: "Dodaj zadanie"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "title",
    control: control,
    defaultValue: "",
    render: function render(_ref5) {
      var onChange = _ref5.onChange,
          value = _ref5.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        id: "standard-basic",
        label: "Nazwa",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "description",
    control: control,
    defaultValue: "",
    render: function render(_ref6) {
      var onChange = _ref6.onChange,
          value = _ref6.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        id: "standard-basic",
        label: "Opis",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "date",
    control: control,
    defaultValue: "",
    render: function render(_ref7) {
      var onChange = _ref7.onChange,
          value = _ref7.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        id: "standard-basic",
        label: "Data",
        type: "date",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "repeatTime",
    control: control,
    defaultValue: "",
    render: function render(_ref8) {
      var onChange = _ref8.onChange,
          value = _ref8.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        id: "standard-basic",
        label: "Czas powt\xF3rze\u0144 (dni)",
        type: "number",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "objectAddress",
    control: control,
    defaultValue: "",
    render: function render(_ref9) {
      var onChange = _ref9.onChange,
          value = _ref9.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, objectAddressList && objectAddressList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "machine",
    control: control,
    defaultValue: "",
    render: function render(_ref10) {
      var onChange = _ref10.onChange,
          value = _ref10.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Maszyna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "objectAddress",
        onChange: onChange
      }, machineList && machineList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "todoType",
    control: control,
    defaultValue: "",
    render: function render(_ref11) {
      var onChange = _ref11.onChange,
          value = _ref11.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
        id: "demo-simple-select-label"
      }, "Typ zadania"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        name: "setTodoType",
        onChange: onChange
      }, todoTypeList && todoTypeList.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
          key: item.id,
          value: item.id
        }, item.name);
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/components/form/basic/TodoType.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/form/basic/TodoType.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoType; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _basic_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/CardHeader */ "./assets/js/components/basic/CardHeader.js");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      minWidth: '300px',
      margin: '1vw 0',
      backgroundColor: '#eee',
      borderRadius: '0.5vw'
    },
    content: {
      flex: '1 0 auto'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    details: {
      display: 'flex',
      alignContent: 'center'
    }
  };
});
function TodoType() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
    data: "Dodaj typ zadania"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    name: "name",
    control: control,
    defaultValue: "",
    render: function render(_ref) {
      var onChange = _ref.onChange,
          value = _ref.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "standard-basic",
        label: "Nazwa",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    name: "description",
    control: control,
    defaultValue: "",
    render: function render(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "standard-basic",
        label: "Opis",
        onChange: onChange,
        value: value,
        InputLabelProps: {
          shrink: true
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Send"))));
}

/***/ }),

/***/ "./assets/js/pages/AddComplaint.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/AddComplaint.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddComplaint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form_basic_AddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form/basic/AddForm */ "./assets/js/components/form/basic/AddForm.js");
/* harmony import */ var _components_form_basic_Complaint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/basic/Complaint */ "./assets/js/components/form/basic/Complaint.js");
/* harmony import */ var _components_form_basic_Machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/basic/Machine */ "./assets/js/components/form/basic/Machine.js");




function AddComplaint() {
  var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_Complaint__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  var forms = [{
    "title": "Maszyny",
    "data": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_Machine__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_AddForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    form: form,
    forms: forms
  });
}

/***/ }),

/***/ "./assets/js/pages/AddOrder.js":
/*!*************************************!*\
  !*** ./assets/js/pages/AddOrder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddOrder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form_basic_AddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form/basic/AddForm */ "./assets/js/components/form/basic/AddForm.js");
/* harmony import */ var _components_form_basic_ObjectAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/basic/ObjectAddress */ "./assets/js/components/form/basic/ObjectAddress.js");
/* harmony import */ var _components_form_basic_Order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/basic/Order */ "./assets/js/components/form/basic/Order.js");




function AddOrder() {
  var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_Order__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  var forms = [{
    "title": "Lokalizacja",
    "data": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_ObjectAddress__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_AddForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    form: form,
    forms: forms
  });
}

/***/ }),

/***/ "./assets/js/pages/AddTodo.js":
/*!************************************!*\
  !*** ./assets/js/pages/AddTodo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTodo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form_basic_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form/basic/Todo */ "./assets/js/components/form/basic/Todo.js");
/* harmony import */ var _components_form_basic_ObjectAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/basic/ObjectAddress */ "./assets/js/components/form/basic/ObjectAddress.js");
/* harmony import */ var _components_form_basic_Machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/basic/Machine */ "./assets/js/components/form/basic/Machine.js");
/* harmony import */ var _components_form_basic_TodoType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/basic/TodoType */ "./assets/js/components/form/basic/TodoType.js");
/* harmony import */ var _components_form_basic_MachineGroups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/basic/MachineGroups */ "./assets/js/components/form/basic/MachineGroups.js");
/* harmony import */ var _components_form_basic_Hall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form/basic/Hall */ "./assets/js/components/form/basic/Hall.js");
/* harmony import */ var _components_form_basic_AddForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form/basic/AddForm */ "./assets/js/components/form/basic/AddForm.js");








function AddTodo() {
  var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_Todo__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  var forms = [{
    "title": "Dodaj lokalizacje",
    "data": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_ObjectAddress__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, {
    "title": "Dodaj maszyne",
    "data": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_Machine__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, {
    "title": "Dodaj typ zadania",
    "data": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_TodoType__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, {
    "title": "Dodaj halę / kurnik",
    "data": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_Hall__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, {
    "title": "Dodaj grupę maszyn",
    "data": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_MachineGroups__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_basic_AddForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    form: form,
    forms: forms
  });
}

/***/ }),

/***/ "./assets/js/pages/Dashboard.js":
/*!**************************************!*\
  !*** ./assets/js/pages/Dashboard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/Todos */ "./assets/js/api/Todos.js");
/* harmony import */ var _api_Complaints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/Complaints */ "./assets/js/api/Complaints.js");
/* harmony import */ var _api_Orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/Orders */ "./assets/js/api/Orders.js");
/* harmony import */ var _components_DashbordPart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DashbordPart */ "./assets/js/components/DashbordPart.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Dashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      todos = _useState2[0],
      setTodos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      orders = _useState4[0],
      setOrders = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      complaints = _useState6[0],
      setComplaints = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var today, overdue, nextWeek;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_4__["getTodayTodos"])(date);

              case 2:
                today = _context.sent;
                _context.next = 5;
                return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_4__["getOverdueTodos"])(date);

              case 5:
                overdue = _context.sent;
                _context.next = 8;
                return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_4__["getNextWeekTodos"])(date);

              case 8:
                nextWeek = _context.sent;

                if (!today.error && !overdue.error && !nextWeek.error) {
                  setTodos([{
                    title: 'Zaległe',
                    link: '/overdue',
                    data: overdue.data
                  }, {
                    title: 'Dzisiaj',
                    link: '/today',
                    data: today.data
                  }, {
                    title: 'Następny tydzień',
                    link: '/nextWeek',
                    data: nextWeek.data
                  }]);
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var orders;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_api_Orders__WEBPACK_IMPORTED_MODULE_6__["getOrders"])();

              case 2:
                orders = _context2.sent;

                if (!orders.error) {
                  setOrders([{
                    title: 'W realizacji',
                    link: null,
                    data: orders.data
                  }]);
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var complaints;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_api_Complaints__WEBPACK_IMPORTED_MODULE_5__["getComplaints"])();

              case 2:
                complaints = _context3.sent;

                if (!complaints.error) {
                  setComplaints([{
                    title: 'Zgłoszone',
                    link: null,
                    data: complaints.data
                  }]);
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function fetchData() {
        return _ref3.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_DashbordPart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Zadania",
    data: todos,
    link: "/addTodo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_DashbordPart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Zam\xF3wienia",
    data: orders,
    link: "/addOrder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_DashbordPart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Reklamacje",
    data: complaints,
    link: "/addComplaint"
  }));
}

/***/ }),

/***/ "./assets/js/pages/Menu.js":
/*!*********************************!*\
  !*** ./assets/js/pages/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_basic_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/basic/MenuItem */ "./assets/js/components/basic/MenuItem.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    toolbar: theme.mixins.toolbar
  };
});
function Menu() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null, [{
    title: 'Strona główna',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Home"], null),
    path: '/'
  }, {
    title: 'Zadania',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["ListAlt"], null),
    path: '/todos'
  }, {
    title: 'Reklamacje',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["ViewList"], null),
    path: '/reklamacje'
  }, {
    title: 'Zamówienia',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["ShoppingCart"], null),
    path: '/zamowienia'
  }, {
    title: 'Typy zadań',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Style"], null),
    path: '/typy_zadan'
  }].map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_basic_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      item: item
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null, [{
    title: 'Lokalizacje',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["LocationOn"], null),
    path: '/lokalizacje'
  }, {
    title: 'Hale',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["MeetingRoom"], null),
    path: '/hale'
  }, {
    title: 'Grupy maszyn',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DevicesOther"], null),
    path: '/grupy_maszyn'
  }, {
    title: 'Maszyny',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Devices"], null),
    path: '/maszyny'
  }].map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_basic_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      item: item
    });
  })));
}

/***/ }),

/***/ "./assets/js/pages/NextWeek.js":
/*!*************************************!*\
  !*** ./assets/js/pages/NextWeek.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App.css */ "./assets/js/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/Todos */ "./assets/js/api/Todos.js");
/* harmony import */ var _components_TodosPart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TodosPart */ "./assets/js/components/TodosPart.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Today() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var nextWeek;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_7__["getNextTodosTypesObjects"])(date);

              case 2:
                nextWeek = _context.sent;

                if (!nextWeek.error) {
                  setState(nextWeek.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return Object.entries(state).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        item = _ref3[1];

    return /*#__PURE__*/React.createElement(_components_TodosPart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: key,
      data: item,
      title: key
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Today);

/***/ }),

/***/ "./assets/js/pages/Overdue.js":
/*!************************************!*\
  !*** ./assets/js/pages/Overdue.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App.css */ "./assets/js/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/Todos */ "./assets/js/api/Todos.js");
/* harmony import */ var _components_TodosPart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TodosPart */ "./assets/js/components/TodosPart.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Overdue() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      overdueObjects = _useState2[0],
      setOverdueObject = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var overdueTodos;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_7__["getOverdueTodosTypesObjects"])(date);

              case 2:
                overdueTodos = _context.sent;

                if (!overdueTodos.error) {
                  setOverdueObject(overdueTodos.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return Object.entries(overdueObjects).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        item = _ref3[1];

    return /*#__PURE__*/React.createElement(_components_TodosPart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: key,
      data: item,
      title: key
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Overdue);

/***/ }),

/***/ "./assets/js/pages/PageLayout.js":
/*!***************************************!*\
  !*** ./assets/js/pages/PageLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Menu */ "./assets/js/pages/Menu.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dashboard */ "./assets/js/pages/Dashboard.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Overdue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Overdue */ "./assets/js/pages/Overdue.js");
/* harmony import */ var _Today__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Today */ "./assets/js/pages/Today.js");
/* harmony import */ var _NextWeek__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NextWeek */ "./assets/js/pages/NextWeek.js");
/* harmony import */ var _AddTodo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AddTodo */ "./assets/js/pages/AddTodo.js");
/* harmony import */ var _AddOrder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AddOrder */ "./assets/js/pages/AddOrder.js");
/* harmony import */ var _AddComplaint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AddComplaint */ "./assets/js/pages/AddComplaint.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Todos */ "./assets/js/pages/Todos.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    drawer: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth
    }),
    menuButton: _defineProperty({
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  };
});

function PageLayout(props) {
  var window = props.window;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var container = window !== undefined ? function () {
    return window().document.body;
  } : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "fixed",
    className: classes.appBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    noWrap: true
  }, "System zarz\u0105dzania utrzymania ruchu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: classes.drawer,
    "aria-label": "mailbox folders"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__["default"], {
    smUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: container,
    variant: "temporary",
    anchor: theme.direction === 'rtl' ? 'right' : 'left',
    open: mobileOpen,
    onClose: handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xsDown: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    path: "/overdue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Overdue__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    path: "/today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Today__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    path: "/nextWeek"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NextWeek__WEBPACK_IMPORTED_MODULE_17__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    path: "/addTodo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddTodo__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    path: "/addOrder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddOrder__WEBPACK_IMPORTED_MODULE_19__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    path: "/addComplaint"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddComplaint__WEBPACK_IMPORTED_MODULE_20__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
    path: "/todos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Todos__WEBPACK_IMPORTED_MODULE_21__["default"], null))))));
}

PageLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "./assets/js/pages/Today.js":
/*!**********************************!*\
  !*** ./assets/js/pages/Today.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App.css */ "./assets/js/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/Todos */ "./assets/js/api/Todos.js");
/* harmony import */ var _components_TodosPart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TodosPart */ "./assets/js/components/TodosPart.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Today() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      today = _useState2[0],
      setToday = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var todayTodos;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_7__["getTodayTodosTypesObjects"])(date);

              case 2:
                todayTodos = _context.sent;

                if (!todayTodos.error) {
                  setToday(todayTodos.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return Object.entries(today).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        item = _ref3[1];

    return /*#__PURE__*/React.createElement(_components_TodosPart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: key,
      data: item,
      title: key
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Today);

/***/ }),

/***/ "./assets/js/pages/Todos.js":
/*!**********************************!*\
  !*** ./assets/js/pages/Todos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todos; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/Todos */ "./assets/js/api/Todos.js");
/* harmony import */ var _components_TodosPart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TodosPart */ "./assets/js/components/TodosPart.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Todos() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      todos = _useState2[0],
      setTodos = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var todosList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_5__["getTodosByObjectAndType"])();

              case 2:
                todosList = _context.sent;

                if (!todosList.error) {
                  setTodos(todosList.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return todos ? Object.entries(todos).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        item = _ref3[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_TodosPart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: key,
      data: item
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CircularProgress"], null);
}

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvQmFzaWNVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9Db21wbGFpbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvSGFsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9NYWNoaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL01hY2hpbmVzR3JvdXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvT2JqZWN0c0FkZHJlc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL09yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL1Jlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9Ub2RvVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL1RvZG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Rhc2hib3JkUGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRpdHlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW50aXR5U3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ub2Rvc1BhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYmFzaWMvQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNpYy9DYXJkU3VidGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYmFzaWMvTGlzdEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYmFzaWMvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9BZGRGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvQ29tcGxhaW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL0Zvcm1QYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvSGFsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9NYWNoaW5lR3JvdXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvT2JqZWN0QWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvVG9kby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL1RvZG9UeXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9BZGRDb21wbGFpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0FkZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9BZGRUb2RvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL05leHRXZWVrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9PdmVyZHVlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9QYWdlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ub2RheS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvVG9kb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFQSV9VUkwiLCJIRUFERVJTIiwiZ2V0Q29tcGxhaW50cyIsInJlc29sdmUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZ2V0SGFsbHMiLCJnZXRNYWNoaW5lcyIsImdldE1hY2hpbmVzR3JvdXBzIiwiZ2V0T2JqZWN0c0FkZHJlc3NlcyIsIm5ld09iamVjdEFkZHJlc3MiLCJwb3N0IiwiaGVhZGVycyIsImdldE9yZGVycyIsInByb21pc2UiLCJyZXNvbHZlZCIsImVycm9yIiwiZ2V0VG9kb1R5cGUiLCJnZXRUb2RheVRvZG9zIiwiZGF0ZSIsImdldE9iamVjdFRvZG9zIiwib2JqZWN0QWRkcmVzcyIsImdldFRvZG9zQnlPYmplY3RBbmRUeXBlIiwiZ2V0T3ZlcmR1ZVRvZG9zIiwiZ2V0TmV4dFdlZWtUb2RvcyIsImdldFRvZGF5VG9kb3NUeXBlc09iamVjdHMiLCJnZXRPdmVyZHVlVG9kb3NUeXBlc09iamVjdHMiLCJnZXROZXh0VG9kb3NUeXBlc09iamVjdHMiLCJwb3N0TmV3VG9kbyIsIm1ldGhvZCIsInVybCIsImNvbmZpZyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZsZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFpbiIsIm1hcmdpbiIsImZsZXhXcmFwIiwiRGFzaGJvYXJkUGFydCIsInRpdGxlIiwibGluayIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInZpc2liaWxpdHkiLCJzZXRWaXNpYmlsaXR5IiwidG9nZ2xlVmlzaWJpbGl0eSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJjYXJkIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50IiwiZGV0YWlscyIsImFsaWduQ29udGVudCIsImZvbnRTaXplIiwiRW50aXR5QWxsIiwiaGVhZGVyIiwiY29uc29sZSIsImxvZyIsIkVudGl0eVN1bW1hcnkiLCJzbGljZSIsIlRvZG9zUGFydCIsIk9iamVjdCIsImVudHJpZXMiLCJDYXJkSGVhZGVyIiwiQ2FyZFN1YnRpdGxlIiwiaGVhZGluZyIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwiZmxleEJhc2lzIiwiZmxleFNocmluayIsImxpc3QiLCJwYWRkaW5nIiwiTGlzdEJvZHkiLCJSZWFjdCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImV2ZW50IiwiaXNFeHBhbmRlZCIsInN1cHBsaWVyIiwiTW9tZW50IiwiZm9ybWF0IiwiZGVzY3JpcHRpb24iLCJNZW51SXRlbSIsInBhdGgiLCJpY29uIiwiQWRkRm9ybSIsImZvcm0iLCJmb3JtcyIsInJvb3QiLCJzcGFjaW5nIiwiQ29tcGxhaW50IiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJtYWNoaW5lTGlzdCIsInNldE1hY2hpbmVMaXN0Iiwib25TdWJtaXQiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJtYWNoaW5lcyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJzaHJpbmsiLCJpZCIsIm5hbWUiLCJGb3JtIiwiRm9ybVBhcnQiLCJIYWxsIiwib2JqZWN0QWRkcmVzc0xpc3QiLCJzZXRPYmplY3RBZGRyZXNzTGlzdCIsIk1hY2hpbmUiLCJoYWxsTGlzdCIsInNldEhhbGxMaXN0IiwibWFjaGluZXNHcm91cHNMaXN0Iiwic2V0TWFjaGluZXNHcm91cHNMaXN0IiwiaGFsbHMiLCJtYWNoaW5lR3JvdXBzIiwiTWFjaGluZUdyb3VwcyIsIk9iamVjdEFkZHJlc3MiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3T2JqZWN0IiwiT3JkZXIiLCJUb2RvIiwiZGF0YXMiLCJ0b2RvVHlwZUxpc3QiLCJzZXRUb2RvVHlwZUxpc3QiLCJ0b2RvVHlwZXMiLCJUb2RvVHlwZSIsIkFkZENvbXBsYWludCIsIkFkZE9yZGVyIiwiQWRkVG9kbyIsIkRhc2hib2FyZCIsInRvZG9zIiwic2V0VG9kb3MiLCJvcmRlcnMiLCJzZXRPcmRlcnMiLCJjb21wbGFpbnRzIiwic2V0Q29tcGxhaW50cyIsInRvZGF5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwib3ZlcmR1ZSIsIm5leHRXZWVrIiwidG9vbGJhciIsIm1peGlucyIsIk1lbnUiLCJpbmRleCIsIlRvZGF5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIk92ZXJkdWUiLCJvdmVyZHVlT2JqZWN0cyIsInNldE92ZXJkdWVPYmplY3QiLCJvdmVyZHVlVG9kb3MiLCJkcmF3ZXJXaWR0aCIsImRyYXdlciIsImJyZWFrcG9pbnRzIiwidXAiLCJhcHBCYXIiLCJtYXJnaW5MZWZ0IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiZHJhd2VyUGFwZXIiLCJmbGV4R3JvdyIsIlBhZ2VMYXlvdXQiLCJwcm9wcyIsIndpbmRvdyIsInVzZVRoZW1lIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJjb250YWluZXIiLCJ1bmRlZmluZWQiLCJib2R5IiwiZGlyZWN0aW9uIiwicGFwZXIiLCJrZWVwTW91bnRlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzZXRUb2RheSIsInRvZGF5VG9kb3MiLCJUb2RvcyIsInRvZG9zTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7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O0FBQUEsR0FBMUIsQ0FBSCxnQkFFQSwyREFBQyxrRUFBRCxPQUhUO0FBS0QsQzs7Ozs7Ozs7Ozs7QUMxQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiLi9qcy9wYWdlcy9QYWdlTGF5b3V0XCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPFBhZ2VMYXlvdXQvPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcbilcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gJy9hcGknO1xuXG5leHBvcnQgY29uc3QgSEVBREVSUyA9IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL0Jhc2ljVXJsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcGxhaW50cygpIHtcbiAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgIGAke0FQSV9VUkx9L2NvbXBsYWludHMuanNvbmBcbiAgKVxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhhbGxzKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vaGFsbHMuanNvbmBcbiAgKVxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1hY2hpbmVzKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vbWFjaGluZXMuanNvbmBcbiAgKVxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1hY2hpbmVzR3JvdXBzKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vbWFjaGluZXNfZ3JvdXBzLmpzb25gXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAnLi9SZXNvbHZlJ1xuaW1wb3J0IHsgQVBJX1VSTCwgSEVBREVSUyB9IGZyb20gJy4vQmFzaWNVcmwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPYmplY3RzQWRkcmVzc2VzKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vb2JqZWN0X2FkZHJlc3Nlcy5qc29uYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5ld09iamVjdEFkZHJlc3MoZGF0YSkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5wb3N0KFxuICAgIGAke0FQSV9VUkx9L29iamVjdF9hZGRyZXNzZXNgLFxuICAgIHsgZGF0YSB9LFxuICAgIHtoZWFkZXJzOiBIRUFERVJTfVxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVycygpIHtcbiAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgIGAke0FQSV9VUkx9L29yZGVycy5qc29uYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlKHByb21pc2UpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSB7XG4gICAgZGF0YTogbnVsbCxcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHRyeSB7XG4gICAgcmVzb2x2ZWQuZGF0YSA9IGF3YWl0IHByb21pc2U7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJlc29sdmVkLmVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlZDtcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvZG9UeXBlKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vdG9kb190eXBlcy5qc29uYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL0Jhc2ljVXJsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlUb2RvcyhkYXRlKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS90b2Rvcy5qc29uP2RhdGU9JHtkYXRlfSZleGlzdHNbZW5kRGF0ZV09ZmFsc2VgXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T2JqZWN0VG9kb3Mob2JqZWN0QWRkcmVzcykge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vdG9kb3MuanNvbj9leGlzdFtlbmREYXRlXT1mYWxzZSZvYmplY3RBZGRyZXNzPSR7b2JqZWN0QWRkcmVzc31gXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9kb3NCeU9iamVjdEFuZFR5cGUoKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS90b2Rvcy9vYmplY3QvZGV0YWlsc2BcbiAgKVxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPdmVyZHVlVG9kb3MoZGF0ZSkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vdG9kb3MuanNvbj9kYXRlW3N0cmljdGx5X2JlZm9yZV09JHtkYXRlfSZleGlzdHNbZW5kRGF0ZV09ZmFsc2VgXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dFdlZWtUb2RvcyhkYXRlKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS90b2Rvcy5qc29uP2RhdGVbc3RyaWN0bHlfYWZ0ZXJdPSR7ZGF0ZX0mZXhpc3RzW2VuZERhdGVdPWZhbHNlYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5VG9kb3NUeXBlc09iamVjdHMoZGF0ZSl7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS90b2Rvcy90b2RheS9kZXRhaWxzLyR7ZGF0ZX1gLFxuICAgIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3ZlcmR1ZVRvZG9zVHlwZXNPYmplY3RzKGRhdGUpe1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vdG9kb3Mvb3ZlcmR1ZS9kZXRhaWxzLyR7ZGF0ZX1gLFxuICAgIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dFRvZG9zVHlwZXNPYmplY3RzKGRhdGUpe1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vdG9kb3MvbmV4dC9kZXRhaWxzLyR7ZGF0ZX1gLFxuICAgIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdE5ld1RvZG8oZGF0YSl7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zKHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIHVybDogYCR7QVBJX1VSTH0vb2JqZWN0X2FkZHJlc3Nlc2AsXG4gICAgZGF0YTogeyBkYXRhIH0sXG4gICAgY29uZmlnOiB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH1cbn0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgeyBFbnRpdHlTdW1tYXJ5IH0gZnJvbSAnLi9FbnRpdHlTdW1tYXJ5J1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgQWRkLCBWaXNpYmlsaXR5LCBWaXNpYmlsaXR5T2ZmIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIG1haW46IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIG1hcmdpbjogJzF2dyAwLjV2dycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFydCh7IHRpdGxlLCBkYXRhLCBsaW5rIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmlsaXR5KCF2aXNpYmlsaXR5KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3RJdGVtIGRpdmlkZXI+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGl0bGV9IC8+XG4gICAgICAgIDxMaW5rIHRvPXtsaW5rfT48QWRkIC8+PC9MaW5rPlxuICAgICAgICB7dmlzaWJpbGl0eSA/IDxWaXNpYmlsaXR5IG9uQ2xpY2s9e3RvZ2dsZVZpc2liaWxpdHl9IC8+IDogPFZpc2liaWxpdHlPZmYgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0gLz59XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAge3Zpc2liaWxpdHkgJiZcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1haW59ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgIDxFbnRpdHlTdW1tYXJ5IGtleT17a2V5fSBkYXRhPXtpdGVtfSBoZWFkZXI9J0xpc3RhJyAvPlxuICAgICAgICApKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgfVxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIExpc3QsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0J1xuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJy4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IENhcmRTdWJ0aXRsZSB9IGZyb20gJy4vYmFzaWMvQ2FyZFN1YnRpdGxlJ1xuaW1wb3J0IHsgTGlzdEJvZHkgfSBmcm9tICcuL2Jhc2ljL0xpc3RCb2R5J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMyJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBFbnRpdHlBbGwgPSAoeyBkYXRhLCBoZWFkZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9e2RhdGEudGl0bGV9IC8+XG4gICAgICAgICAge2RhdGEubGluayAmJlxuICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgPExpbmsgdG89e2RhdGEubGlua30+PE1vcmVWZXJ0SWNvbiAvPjwvTGluaz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRTdWJ0aXRsZSBoZWFkZXI9e2hlYWRlcn0gLz5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICA8TGlzdCBrZXk9e2tleX0+XG4gICAgICAgICAgICA8TGlzdEJvZHkgZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICA8L0xpc3Q+XG5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIExpc3QsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0J1xuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJy4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IENhcmRTdWJ0aXRsZSB9IGZyb20gJy4vYmFzaWMvQ2FyZFN1YnRpdGxlJ1xuaW1wb3J0IHsgTGlzdEJvZHkgfSBmcm9tICcuL2Jhc2ljL0xpc3RCb2R5J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMyJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBFbnRpdHlTdW1tYXJ5ID0gKHsgZGF0YSwgaGVhZGVyIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXRhaWxzfSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPXtkYXRhLnRpdGxlfSAvPlxuICAgICAgICAgIHtkYXRhLmxpbmsgJiZcbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtkYXRhLmxpbmt9PjxNb3JlVmVydEljb24gLz48L0xpbms+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDYXJkU3VidGl0bGUgaGVhZGVyPXtoZWFkZXJ9IC8+XG4gICAgICAgIHtkYXRhLmRhdGEuc2xpY2UoMCwgMykubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICA8TGlzdCBrZXk9e2tleX0+XG4gICAgICAgICAgICA8TGlzdEJvZHkgZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICA8L0xpc3Q+XG5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgRW50aXR5QWxsIH0gZnJvbSAnLi9FbnRpdHlBbGwnXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzLCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBBZGQsIFZpc2liaWxpdHksIFZpc2liaWxpdHlPZmYgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbWFpbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAuNXZ3JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2Rvc1BhcnQoeyB0aXRsZSwgZGF0YSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJpbGl0eSghdmlzaWJpbGl0eSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlzdEl0ZW0gZGl2aWRlcj5cbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0aXRsZX0gLz5cbiAgICAgICAgPExpbmsgdG89XCIvYWRkVG9kb1wiPjxBZGQgLz48L0xpbms+XG4gICAgICAgIHt2aXNpYmlsaXR5ID8gPFZpc2liaWxpdHkgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0gLz4gOiA8VmlzaWJpbGl0eU9mZiBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPn1cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICB7dmlzaWJpbGl0eSAmJlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWFpbn0gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgIHtPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIGl0ZW1dKSA9PiAoXG4gICAgICAgICAgPEVudGl0eUFsbCBrZXk9e2tleX0gZGF0YT17aXRlbX0gaGVhZGVyPXtrZXl9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICB9XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IENhcmRIZWFkZXIgPSAoe2RhdGF9KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIHtkYXRhfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ2FyZFN1YnRpdGxlID0gKHsgaGVhZGVyIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICB7aGVhZGVyfVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgICBBY2NvcmRpb24sXG4gICAgQWNjb3JkaW9uRGV0YWlscyxcbiAgICBBY2NvcmRpb25TdW1tYXJ5LFxuICAgIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIGhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gICAgICAgIGZsZXhCYXNpczogJzEwMCUnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcwIDAgMXZ3IDAnLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBMaXN0Qm9keSA9ICh7ZGF0YX0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xuICAgICAgICBzZXRFeHBhbmRlZChpc0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxuICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwxJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24vPn1cbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYmgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDFiaC1oZWFkZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlICYmIGRhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3VwcGxpZXIgJiYgZGF0YS5zdXBwbGllcn1cbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNb21lbnQoZGF0YS5kYXRlKS5mb3JtYXQoJ0xMJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvPlxuICAgICk7XG59IiwiaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0oe2l0ZW19KSB7XG4gIHJldHVybihcbiAgICA8TGluayB0bz17aXRlbS5wYXRofT5cbiAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtSWNvbj57aXRlbS5pY29ufTwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0udGl0bGV9Lz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaW5rPlxuICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcbmltcG9ydCBGb3JtUGFydCBmcm9tICcuL0Zvcm1QYXJ0J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIG1haW46IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIG1hcmdpbjogJzF2dyAwLjV2dycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRm9ybSh7IGZvcm0sIGZvcm1zIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tYWlufSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2Ake2NsYXNzZXMuY2FyZH1gfT5cbiAgICAgICAge2Zvcm19XG4gICAgICA8L1BhcGVyPlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmNhcmR9YH0+XG4gICAgICAgICAgPEZvcm1QYXJ0IGZvcm1zPXtmb3Jtc30vPlxuICAgICAgICA8L1BhcGVyPlxuXG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIENhcmRDb250ZW50LCBDYXJkLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IGdldE1hY2hpbmVzIH0gZnJvbSAnLi4vLi4vLi4vYXBpL01hY2hpbmVzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmID4gKic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgfSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMwJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBsYWludCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgY29udHJvbCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IFttYWNoaW5lTGlzdCwgc2V0TWFjaGluZUxpc3RdID0gdXNlU3RhdGUoKVxuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1hY2hpbmVzID0gYXdhaXQgZ2V0TWFjaGluZXMoKVxuICAgICAgaWYgKCFtYWNoaW5lcy5lcnJvcikge1xuICAgICAgICBzZXRNYWNoaW5lTGlzdChtYWNoaW5lcy5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiByZWtsYW1hY2rEmVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJwYXJ0TmFtZVwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmF6d2EgY3rEmcWbY2lcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cInN1cHBsaWVyXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEb3N0YXdjYVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk9waXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cImZpbGluZ0RhdGVcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgemfFgm9zemVuaWFcIlxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwibWFjaGluZVwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDw+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TWFzenluYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwib2JqZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21hY2hpbmVMaXN0ICYmIG1hY2hpbmVMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgVmlzaWJpbGl0eSwgVmlzaWJpbGl0eU9mZiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7IGl0ZW0gfSkge1xuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkoIXZpc2liaWxpdHkpXG4gIH1cbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxMaXN0SXRlbSBkaXZpZGVyPlxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICB7dmlzaWJpbGl0eVxuICAgICAgICAgICAgPyA8VmlzaWJpbGl0eSBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPlxuICAgICAgICAgICAgOiA8VmlzaWJpbGl0eU9mZiBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAge3Zpc2liaWxpdHkgJiZcbiAgICAgICAgICBpdGVtLmRhdGFcbiAgICAgICAgfVxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUGFydCh7IGZvcm1zIH0pIHtcblxuICByZXR1cm4gKFxuICAgIGZvcm1zLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICA8Rm9ybSBrZXk9e2tleX0gaXRlbT17aXRlbX0gLz5cbiAgICApKVxuICApXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQsIElucHV0TGFiZWwsIFNlbGVjdCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IENhcmRIZWFkZXIgfSBmcm9tICcuLi8uLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHsgZ2V0T2JqZWN0c0FkZHJlc3NlcyB9IGZyb20gJy4uLy4uLy4uL2FwaS9PYmplY3RzQWRkcmVzc2VzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmID4gKic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgfSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMwJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbGwoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oKVxuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSlcbiAgY29uc3QgW29iamVjdEFkZHJlc3NMaXN0LCBzZXRPYmplY3RBZGRyZXNzTGlzdF0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBvYmplY3RBZGRyZXNzID0gYXdhaXQgZ2V0T2JqZWN0c0FkZHJlc3NlcygpXG4gICAgICBpZighb2JqZWN0QWRkcmVzcy5lcnJvcil7XG4gICAgICAgIHNldE9iamVjdEFkZHJlc3NMaXN0KG9iamVjdEFkZHJlc3MuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXRhaWxzfSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPVwiRG9kYWogaGFsxJkgLyBrdXJuaWtcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmF6d2FcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJPcGlzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJvYmplY3RBZGRyZXNzXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPD5cbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5Mb2thbGl6YWNqYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwib2JqZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29iamVjdEFkZHJlc3NMaXN0ICYmIG9iamVjdEFkZHJlc3NMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQsIElucHV0TGFiZWwsIFNlbGVjdCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IENhcmRIZWFkZXIgfSBmcm9tICcuLi8uLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHsgZ2V0T2JqZWN0c0FkZHJlc3NlcyB9IGZyb20gJy4uLy4uLy4uL2FwaS9PYmplY3RzQWRkcmVzc2VzJ1xuaW1wb3J0IHsgZ2V0SGFsbHMgfSBmcm9tICcuLi8uLi8uLi9hcGkvSGFsbHMnXG5pbXBvcnQgeyBnZXRNYWNoaW5lc0dyb3VwcyB9IGZyb20gJy4uLy4uLy4uL2FwaS9NYWNoaW5lc0dyb3VwcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IConOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogJzI1Y2gnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWNoaW5lKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBjb250cm9sIH0gPSB1c2VGb3JtKClcbiAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpXG4gIGNvbnN0IFtvYmplY3RBZGRyZXNzTGlzdCwgc2V0T2JqZWN0QWRkcmVzc0xpc3RdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaGFsbExpc3QsIHNldEhhbGxMaXN0XSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW21hY2hpbmVzR3JvdXBzTGlzdCwgc2V0TWFjaGluZXNHcm91cHNMaXN0XSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG9iamVjdEFkZHJlc3MgPSBhd2FpdCBnZXRPYmplY3RzQWRkcmVzc2VzKClcbiAgICAgIGlmKCFvYmplY3RBZGRyZXNzLmVycm9yKXtcbiAgICAgICAgc2V0T2JqZWN0QWRkcmVzc0xpc3Qob2JqZWN0QWRkcmVzcy5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGhhbGxzID0gYXdhaXQgZ2V0SGFsbHMoKVxuICAgICAgaWYoIWhhbGxzLmVycm9yKXtcbiAgICAgICAgc2V0SGFsbExpc3QoaGFsbHMuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtYWNoaW5lR3JvdXBzID0gYXdhaXQgZ2V0TWFjaGluZXNHcm91cHMoKVxuICAgICAgaWYoIW1hY2hpbmVHcm91cHMuZXJyb3Ipe1xuICAgICAgICBzZXRNYWNoaW5lc0dyb3Vwc0xpc3QobWFjaGluZUdyb3Vwcy5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiBtYXN6eW7EmSAvIHVyesSFZHplbmllXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk5hendhXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJzZXJpYWxOdW1iZXJcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk51bWVyIHNlcnlqbnlcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cIm9iamVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8PlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkxva2FsaXphY2phPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJvYmplY3RBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7b2JqZWN0QWRkcmVzc0xpc3QgJiYgb2JqZWN0QWRkcmVzc0xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwiaGFsbFwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDw+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+SGFsYSAvIEt1cm5pazwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwib2JqZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hhbGxMaXN0ICYmIGhhbGxMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cIm1hY2hpbmVzR3JvdXBzXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPD5cbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5HcnVwYSBtYXN6eW48L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9iamVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttYWNoaW5lc0dyb3Vwc0xpc3QgJiYgbWFjaGluZXNHcm91cHNMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IENhcmRIZWFkZXIgfSBmcm9tICcuLi8uLi9iYXNpYy9DYXJkSGVhZGVyJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmID4gKic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgfSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMwJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hY2hpbmVHcm91cHMoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oKVxuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiBncnVwxJkgbWFzenluXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk5hendhXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiT3Bpc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwic2VyaWFsTnVtYmVyXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOdW1lciBzZXJ5am55XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIENhcmRDb250ZW50LCBDYXJkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IG5ld09iamVjdEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9hcGkvT2JqZWN0c0FkZHJlc3NlcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IConOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogJzI1Y2gnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPYmplY3RBZGRyZXNzKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBjb250cm9sIH0gPSB1c2VGb3JtKClcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIGNvbnN0IG5ld09iamVjdCA9IGF3YWl0IG5ld09iamVjdEFkZHJlc3MoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICBpZihuZXdPYmplY3QuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3T2JqZWN0LmVycm9yKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3T2JqZWN0LmRhdGEpXG4gICAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGlkPVwib2JqZWN0LWFkZHJlc3MtYWRkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT1cIkRvZGFqIGxva2FsaXphY2rEmVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYXp3YVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwic3RyZWV0XCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVbGljYVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwic3RyZWV0TnVtYmVyXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOciBkb211IC8gbWllc3prYW5pYVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVOdW1iZXJcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk51bWVyIHRlbGVmb251XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRyZXMgZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQsIElucHV0TGFiZWwsIFNlbGVjdCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IENhcmRIZWFkZXIgfSBmcm9tICcuLi8uLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHsgZ2V0T2JqZWN0c0FkZHJlc3NlcyB9IGZyb20gJy4uLy4uLy4uL2FwaS9PYmplY3RzQWRkcmVzc2VzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmID4gKic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgfSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMwJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBjb250cm9sIH0gPSB1c2VGb3JtKClcbiAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpXG4gIGNvbnN0IFtvYmplY3RBZGRyZXNzTGlzdCwgc2V0T2JqZWN0QWRkcmVzc0xpc3RdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgb2JqZWN0QWRkcmVzcyA9IGF3YWl0IGdldE9iamVjdHNBZGRyZXNzZXMoKVxuICAgICAgaWYoIW9iamVjdEFkZHJlc3MuZXJyb3Ipe1xuICAgICAgICBzZXRPYmplY3RBZGRyZXNzTGlzdChvYmplY3RBZGRyZXNzLmRhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT1cIkRvZGFqIGhhbMSZIC8ga3VybmlrXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk5hendhXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiT3Bpc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwic3VwcGxpZXJcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNwcnplZGF3Y2FcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cIm9yZGVyRGF0ZVwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSB6YW3Ds3dpZW5pYVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJvYmplY3RBZGRyZXNzXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPD5cbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5Mb2thbGl6YWNqYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwib2JqZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29iamVjdEFkZHJlc3NMaXN0ICYmIG9iamVjdEFkZHJlc3NMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0LCBCdXR0b24sIENhcmRDb250ZW50LCBDYXJkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IGdldE9iamVjdHNBZGRyZXNzZXMgfSBmcm9tICcuLi8uLi8uLi9hcGkvT2JqZWN0c0FkZHJlc3NlcydcbmltcG9ydCB7IGdldE1hY2hpbmVzIH0gZnJvbSAnLi4vLi4vLi4vYXBpL01hY2hpbmVzJ1xuaW1wb3J0IHsgZ2V0VG9kb1R5cGUgfSBmcm9tICcuLi8uLi8uLi9hcGkvVG9kb1R5cGUnXG5pbXBvcnQgeyBwb3N0TmV3VG9kbyB9IGZyb20gJy4uLy4uLy4uL2FwaS9Ub2RvcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IConOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogJzI1Y2gnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgY29udHJvbCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCBkYXRhcyA9XG4gICAgICB7XG4gICAgICAgICduYW1lJzogJ3Rlc3QyJyxcbiAgICAgICAgJ3N0cmVldCc6ICd0cnRnMicsXG4gICAgICAgICdzdHJlZXROdW1iZXInOiAnMnliZHU4JyxcbiAgICAgICAgJ3Bob25lTnVtYmVyJzogJzg0Mjc0OTQwJyxcbiAgICAgICAgJ2VtYWlsJzogJ2pmaGZoQGZoZjJqLnBsJyxcbiAgICAgIH1cbiAgXG4gICAgYXdhaXQgcG9zdE5ld1RvZG8oZGF0YXMpXG4gICAgY29uc29sZS5sb2coZGF0YXMpXG4gIH1cbiAgY29uc3QgW29iamVjdEFkZHJlc3NMaXN0LCBzZXRPYmplY3RBZGRyZXNzTGlzdF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFttYWNoaW5lTGlzdCwgc2V0TWFjaGluZUxpc3RdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbdG9kb1R5cGVMaXN0LCBzZXRUb2RvVHlwZUxpc3RdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgb2JqZWN0QWRkcmVzcyA9IGF3YWl0IGdldE9iamVjdHNBZGRyZXNzZXMoKVxuICAgICAgaWYgKCFvYmplY3RBZGRyZXNzLmVycm9yKSB7XG4gICAgICAgIHNldE9iamVjdEFkZHJlc3NMaXN0KG9iamVjdEFkZHJlc3MuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtYWNoaW5lcyA9IGF3YWl0IGdldE1hY2hpbmVzKClcbiAgICAgIGlmICghbWFjaGluZXMuZXJyb3IpIHtcbiAgICAgICAgc2V0TWFjaGluZUxpc3QobWFjaGluZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0b2RvVHlwZXMgPSBhd2FpdCBnZXRUb2RvVHlwZSgpXG4gICAgICBpZiAoIXRvZG9UeXBlcy5lcnJvcikge1xuICAgICAgICBzZXRUb2RvVHlwZUxpc3QodG9kb1R5cGVzLmRhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT0nRG9kYWogemFkYW5pZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT0nb2ZmJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nJ1xuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD0nc3RhbmRhcmQtYmFzaWMnXG4gICAgICAgICAgICAgIGxhYmVsPSdOYXp3YSdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nJ1xuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD0nc3RhbmRhcmQtYmFzaWMnXG4gICAgICAgICAgICAgIGxhYmVsPSdPcGlzJ1xuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT0nZGF0ZSdcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9JydcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J3N0YW5kYXJkLWJhc2ljJ1xuICAgICAgICAgICAgICBsYWJlbD0nRGF0YSdcbiAgICAgICAgICAgICAgdHlwZT0nZGF0ZSdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9J3JlcGVhdFRpbWUnXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPScnXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPSdzdGFuZGFyZC1iYXNpYydcbiAgICAgICAgICAgICAgbGFiZWw9J0N6YXMgcG93dMOzcnplxYQgKGRuaSknXG4gICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9J29iamVjdEFkZHJlc3MnXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPScnXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8PlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5Mb2thbGl6YWNqYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbCdcbiAgICAgICAgICAgICAgICBpZD0nZGVtby1zaW1wbGUtc2VsZWN0J1xuICAgICAgICAgICAgICAgIG5hbWU9J29iamVjdEFkZHJlc3MnXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29iamVjdEFkZHJlc3NMaXN0ICYmIG9iamVjdEFkZHJlc3NMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT0nbWFjaGluZSdcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9JydcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDw+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPk1hc3p5bmE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbElkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnXG4gICAgICAgICAgICAgICAgaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdCdcbiAgICAgICAgICAgICAgICBuYW1lPSdvYmplY3RBZGRyZXNzJ1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttYWNoaW5lTGlzdCAmJiBtYWNoaW5lTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9J3RvZG9UeXBlJ1xuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nJ1xuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPD5cbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbCc+VHlwIHphZGFuaWE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbElkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnXG4gICAgICAgICAgICAgICAgaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdCdcbiAgICAgICAgICAgICAgICBuYW1lPSdzZXRUb2RvVHlwZSdcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kb1R5cGVMaXN0ICYmIHRvZG9UeXBlTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cblxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uLCBDYXJkQ29udGVudCwgQ2FyZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJy4uLy4uL2Jhc2ljL0NhcmRIZWFkZXInXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgPiAqJzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgd2lkdGg6ICcyNWNoJyxcbiAgICB9LFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHdpZHRoOiAnMzAlJyxcbiAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41dncnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZmxleDogJzEgMCBhdXRvJyxcbiAgfSxcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1R5cGUoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oKVxuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiB0eXAgemFkYW5pYVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYXp3YVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk9waXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFkZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL0FkZEZvcm0nXG5pbXBvcnQgQ29tcGxhaW50IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Db21wbGFpbnQnXG5pbXBvcnQgTWFjaGluZSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvTWFjaGluZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQ29tcGxhaW50KCkge1xuICBjb25zdCBmb3JtID0gPENvbXBsYWludC8+XG4gIGNvbnN0IGZvcm1zID0gW1xuICAgIHtcInRpdGxlXCI6IFwiTWFzenlueVwiLFxuICAgICAgXCJkYXRhXCI6IDxNYWNoaW5lLz59XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxBZGRGb3JtIGZvcm09e2Zvcm19IGZvcm1zPXtmb3Jtc30vPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvQWRkRm9ybSdcbmltcG9ydCBPYmplY3RBZGRyZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9PYmplY3RBZGRyZXNzJ1xuaW1wb3J0IE9yZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9PcmRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkT3JkZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSA8T3JkZXIvPlxuICBjb25zdCBmb3JtcyA9IFtcbiAgICB7XCJ0aXRsZVwiOiBcIkxva2FsaXphY2phXCIsXG4gICAgXCJkYXRhXCI6IDxPYmplY3RBZGRyZXNzLz59XG4gIF1cblxuXG4gIHJldHVybiAoXG4gICAgPEFkZEZvcm0gZm9ybT17Zm9ybX0gZm9ybXM9e2Zvcm1zfS8+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvVG9kbydcbmltcG9ydCBPYmplY3RBZGRyZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9PYmplY3RBZGRyZXNzJ1xuaW1wb3J0IE1hY2hpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmUnXG5pbXBvcnQgVG9kb1R5cGUgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL1RvZG9UeXBlJ1xuaW1wb3J0IE1hY2hpbmVHcm91cHMgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmVHcm91cHMnXG5pbXBvcnQgSGFsbCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvSGFsbCdcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9BZGRGb3JtJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvZG8oKSB7XG4gIGNvbnN0IGZvcm0gPSA8VG9kby8+XG4gIGNvbnN0IGZvcm1zID0gW1xuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogbG9rYWxpemFjamVcIiwgXCJkYXRhXCI6IDxPYmplY3RBZGRyZXNzLz59LFxuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogbWFzenluZVwiLCBcImRhdGFcIjogPE1hY2hpbmUvPn0sXG4gICAge1widGl0bGVcIjogXCJEb2RhaiB0eXAgemFkYW5pYVwiLCBcImRhdGFcIjogPFRvZG9UeXBlLz59LFxuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogaGFsxJkgLyBrdXJuaWtcIiwgXCJkYXRhXCI6IDxIYWxsLz59LFxuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogZ3J1cMSZIG1hc3p5blwiLCBcImRhdGFcIjogPE1hY2hpbmVHcm91cHMvPn1cbiAgXVxuXG5cbiAgcmV0dXJuIChcbiAgICA8QWRkRm9ybSBmb3JtPXtmb3JtfSBmb3Jtcz17Zm9ybXN9Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0TmV4dFdlZWtUb2RvcywgZ2V0T3ZlcmR1ZVRvZG9zLCBnZXRUb2RheVRvZG9zIH0gZnJvbSAnLi4vYXBpL1RvZG9zJ1xuaW1wb3J0IHsgZ2V0Q29tcGxhaW50cyB9IGZyb20gJy4uL2FwaS9Db21wbGFpbnRzJ1xuaW1wb3J0IHsgZ2V0T3JkZXJzIH0gZnJvbSAnLi4vYXBpL09yZGVycydcbmltcG9ydCBEYXNoYm9hcmRQYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaGJvcmRQYXJ0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZSggW10pXG4gIGNvbnN0IFtjb21wbGFpbnRzLCBzZXRDb21wbGFpbnRzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKSxcbiAgICAgIGRhdGUgPSB0b2RheS5nZXRGdWxsWWVhcigpICsgJy0nICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKSArICctJyArIHRvZGF5LmdldERhdGUoKVxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZGF5ID0gYXdhaXQgZ2V0VG9kYXlUb2RvcyhkYXRlKVxuICAgICAgY29uc3Qgb3ZlcmR1ZSA9IGF3YWl0IGdldE92ZXJkdWVUb2RvcyhkYXRlKVxuICAgICAgY29uc3QgbmV4dFdlZWsgPSBhd2FpdCBnZXROZXh0V2Vla1RvZG9zKGRhdGUpXG4gICAgICBpZiAoIXRvZGF5LmVycm9yICYmICFvdmVyZHVlLmVycm9yICYmICFuZXh0V2Vlay5lcnJvcikge1xuICAgICAgICBzZXRUb2RvcyhbXG4gICAgICAgICAgeyB0aXRsZTogJ1phbGVnxYJlJywgbGluazogJy9vdmVyZHVlJywgZGF0YTogb3ZlcmR1ZS5kYXRhIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0R6aXNpYWonLCBsaW5rOiAnL3RvZGF5JywgZGF0YTogdG9kYXkuZGF0YSB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdOYXN0xJlwbnkgdHlkemllxYQnLCBsaW5rOiAnL25leHRXZWVrJywgZGF0YTogbmV4dFdlZWsuZGF0YSB9LFxuICAgICAgICBdKVxuICAgICAgfVxuXG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgZ2V0T3JkZXJzKClcbiAgICAgIGlmICghb3JkZXJzLmVycm9yKSB7XG4gICAgICAgIHNldE9yZGVycyhbXG4gICAgICAgICAgeyB0aXRsZTogJ1cgcmVhbGl6YWNqaScsIGxpbms6IG51bGwsIGRhdGE6IG9yZGVycy5kYXRhIH0sXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29tcGxhaW50cyA9IGF3YWl0IGdldENvbXBsYWludHMoKVxuICAgICAgaWYgKCFjb21wbGFpbnRzLmVycm9yKSB7XG4gICAgICAgIHNldENvbXBsYWludHMoW1xuICAgICAgICAgIHsgdGl0bGU6ICdaZ8WCb3N6b25lJywgbGluazogbnVsbCwgZGF0YTogY29tcGxhaW50cy5kYXRhIH0sXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEYXNoYm9hcmRQYXJ0IHRpdGxlPVwiWmFkYW5pYVwiIGRhdGE9e3RvZG9zfSBsaW5rPVwiL2FkZFRvZG9cIi8+XG4gICAgICA8RGFzaGJvYXJkUGFydCB0aXRsZT1cIlphbcOzd2llbmlhXCIgZGF0YT17b3JkZXJzfSBsaW5rPVwiL2FkZE9yZGVyXCIvPlxuICAgICAgPERhc2hib2FyZFBhcnQgdGl0bGU9XCJSZWtsYW1hY2plXCIgZGF0YT17Y29tcGxhaW50c30gbGluaz1cIi9hZGRDb21wbGFpbnRcIi8+XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7RGl2aWRlciwgTGlzdH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYmFzaWMvTWVudUl0ZW1cIjtcbmltcG9ydCB7XG4gIERldmljZXMsXG4gIERldmljZXNPdGhlcixcbiAgSG9tZSxcbiAgTGlzdEFsdCxcbiAgTG9jYXRpb25PbixcbiAgTWVldGluZ1Jvb20sXG4gIFNob3BwaW5nQ2FydCxcbiAgU3R5bGUsXG4gIFZpZXdMaXN0LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9Lz5cbiAgICAgIDxEaXZpZGVyLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7W1xuICAgICAgICAgIHt0aXRsZTogJ1N0cm9uYSBnxYLDs3duYScsIGljb246IDxIb21lLz4sIHBhdGg6ICcvJ30sXG4gICAgICAgICAge3RpdGxlOiAnWmFkYW5pYScsIGljb246IDxMaXN0QWx0Lz4sIHBhdGg6ICcvdG9kb3MnfSxcbiAgICAgICAgICB7dGl0bGU6ICdSZWtsYW1hY2plJywgaWNvbjogPFZpZXdMaXN0Lz4sIHBhdGg6ICcvcmVrbGFtYWNqZSd9LFxuICAgICAgICAgIHt0aXRsZTogJ1phbcOzd2llbmlhJywgaWNvbjogPFNob3BwaW5nQ2FydC8+LCBwYXRoOiAnL3phbW93aWVuaWEnfSxcbiAgICAgICAgICB7dGl0bGU6ICdUeXB5IHphZGHFhCcsIGljb246IDxTdHlsZS8+LCBwYXRoOiAnL3R5cHlfemFkYW4nfVxuICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gaXRlbT17aXRlbX0vPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICAgIDxEaXZpZGVyLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7W1xuICAgICAgICAgIHt0aXRsZTogJ0xva2FsaXphY2plJywgaWNvbjogPExvY2F0aW9uT24vPiwgcGF0aDogJy9sb2thbGl6YWNqZSd9LFxuICAgICAgICAgIHt0aXRsZTogJ0hhbGUnLCBpY29uOiA8TWVldGluZ1Jvb20vPiwgcGF0aDogJy9oYWxlJ30sXG4gICAgICAgICAge3RpdGxlOiAnR3J1cHkgbWFzenluJywgaWNvbjogPERldmljZXNPdGhlci8+LCBwYXRoOiAnL2dydXB5X21hc3p5bid9LFxuICAgICAgICAgIHt0aXRsZTogJ01hc3p5bnknLCBpY29uOiA8RGV2aWNlcy8+LCBwYXRoOiAnL21hc3p5bnknfVxuICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gaXRlbT17aXRlbX0vPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0ICcuLi9BcHAuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0TmV4dFRvZG9zVHlwZXNPYmplY3RzIH0gZnJvbSAnLi4vYXBpL1RvZG9zJ1xuaW1wb3J0IFRvZG9zUGFydCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9zUGFydCdcblxuZnVuY3Rpb24gVG9kYXkoKSB7XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dFdlZWsgPSBhd2FpdCBnZXROZXh0VG9kb3NUeXBlc09iamVjdHMoZGF0ZSlcbiAgICAgIGlmICghbmV4dFdlZWsuZXJyb3IpIHtcbiAgICAgICAgc2V0U3RhdGUobmV4dFdlZWsuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBPYmplY3QuZW50cmllcyhzdGF0ZSkubWFwKChba2V5LCBpdGVtXSkgPT4gKFxuICAgICAgPFRvZG9zUGFydCBrZXk9e2tleX0gZGF0YT17aXRlbX0gdGl0bGU9e2tleX0gLz5cbiAgICApKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5XG4iLCJpbXBvcnQgJy4uL0FwcC5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRPdmVyZHVlVG9kb3NUeXBlc09iamVjdHMgfSBmcm9tICcuLi9hcGkvVG9kb3MnXG5pbXBvcnQgVG9kb3NQYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb3NQYXJ0J1xuXG5mdW5jdGlvbiBPdmVyZHVlKCkge1xuICBjb25zdCBbb3ZlcmR1ZU9iamVjdHMsIHNldE92ZXJkdWVPYmplY3RdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG92ZXJkdWVUb2RvcyA9IGF3YWl0IGdldE92ZXJkdWVUb2Rvc1R5cGVzT2JqZWN0cyhkYXRlKVxuICAgICAgaWYgKCFvdmVyZHVlVG9kb3MuZXJyb3IpIHtcbiAgICAgICAgc2V0T3ZlcmR1ZU9iamVjdChvdmVyZHVlVG9kb3MuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIE9iamVjdC5lbnRyaWVzKG92ZXJkdWVPYmplY3RzKS5tYXAoKFtrZXksIGl0ZW1dKSA9PiAoXG4gICAgICA8VG9kb3NQYXJ0IGtleT17a2V5fSBkYXRhPXtpdGVtfSB0aXRsZT17a2V5fSAvPlxuICAgICkpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmR1ZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE92ZXJkdWUgZnJvbSAnLi9PdmVyZHVlJ1xuaW1wb3J0IFRvZGF5IGZyb20gJy4vVG9kYXknXG5pbXBvcnQgTmV4dFdlZWsgZnJvbSAnLi9OZXh0V2VlaydcbmltcG9ydCBBZGRUb2RvIGZyb20gJy4vQWRkVG9kbydcbmltcG9ydCBBZGRPcmRlciBmcm9tICcuL0FkZE9yZGVyJ1xuaW1wb3J0IEFkZENvbXBsYWludCBmcm9tICcuL0FkZENvbXBsYWludCdcbmltcG9ydCBUb2RvcyBmcm9tICcuL1RvZG9zJ1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgfSxcbiAgfSxcbiAgYXBwQmFyOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXG4gICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgICB9LFxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIFBhZ2VMYXlvdXQocHJvcHMpIHtcbiAgY29uc3QgeyB3aW5kb3cgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcbiAgfTtcblxuICBjb25zdCBjb250YWluZXIgPSB3aW5kb3cgIT09IHVuZGVmaW5lZCA/ICgpID0+IHdpbmRvdygpLmRvY3VtZW50LmJvZHkgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwPlxuICAgICAgICAgICAgU3lzdGVtIHphcnrEhWR6YW5pYSB1dHJ6eW1hbmlhIHJ1Y2h1XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn0gYXJpYS1sYWJlbD1cIm1haWxib3ggZm9sZGVyc1wiPlxuICAgICAgICAgIHsvKiBUaGUgaW1wbGVtZW50YXRpb24gY2FuIGJlIHN3YXBwZWQgd2l0aCBqcyB0byBhdm9pZCBTRU8gZHVwbGljYXRpb24gb2YgbGlua3MuICovfVxuICAgICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICBjb250YWluZXI9e2NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXG4gICAgICAgICAgICAgIGFuY2hvcj17dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCd9XG4gICAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBNb2RhbFByb3BzPXt7XG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnUvPlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgPEhpZGRlbiB4c0Rvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgICAgICAgICAgb3BlblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudS8+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLyc+XG4gICAgICAgICAgICAgIDxEYXNoYm9hcmQvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvb3ZlcmR1ZSc+XG4gICAgICAgICAgICAgIDxPdmVyZHVlLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi90b2RheVwiPlxuICAgICAgICAgICAgICA8VG9kYXkvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25leHRXZWVrXCI+XG4gICAgICAgICAgICAgIDxOZXh0V2Vlay8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRkVG9kb1wiPlxuICAgICAgICAgICAgICA8QWRkVG9kby8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRkT3JkZXJcIj5cbiAgICAgICAgICAgICAgPEFkZE9yZGVyLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZGRDb21wbGFpbnRcIj5cbiAgICAgICAgICAgICAgPEFkZENvbXBsYWludC8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdG9kb3NcIj5cbiAgICAgICAgICAgICAgPFRvZG9zLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5QYWdlTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxuICAgKiBZb3Ugd29uJ3QgbmVlZCBpdCBvbiB5b3VyIHByb2plY3QuXG4gICAqL1xuICB3aW5kb3c6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDtcbiIsImltcG9ydCAnLi4vQXBwLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFRvZGF5VG9kb3NUeXBlc09iamVjdHMgfSBmcm9tICcuLi9hcGkvVG9kb3MnXG5pbXBvcnQgVG9kb3NQYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb3NQYXJ0J1xuXG5mdW5jdGlvbiBUb2RheSgpIHtcbiAgY29uc3QgW3RvZGF5LCBzZXRUb2RheV0gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZGF5VG9kb3MgPSBhd2FpdCBhd2FpdCBnZXRUb2RheVRvZG9zVHlwZXNPYmplY3RzKGRhdGUpXG4gICAgICBpZighdG9kYXlUb2Rvcy5lcnJvcil7XG4gICAgICAgIHNldFRvZGF5KHRvZGF5VG9kb3MuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBPYmplY3QuZW50cmllcyh0b2RheSkubWFwKChba2V5LCBpdGVtXSkgPT4gKFxuICAgICAgPFRvZG9zUGFydCBrZXk9e2tleX0gZGF0YT17aXRlbX0gdGl0bGU9e2tleX0gLz5cbiAgICApKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRUb2Rvc0J5T2JqZWN0QW5kVHlwZSB9IGZyb20gJy4uL2FwaS9Ub2RvcydcbmltcG9ydCBUb2Rvc1BhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2Rvc1BhcnQnXG5pbXBvcnQge0NpcmN1bGFyUHJvZ3Jlc3N9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdG9kb3NMaXN0ID0gYXdhaXQgZ2V0VG9kb3NCeU9iamVjdEFuZFR5cGUoKVxuICAgICAgaWYgKCF0b2Rvc0xpc3QuZXJyb3IpIHtcbiAgICAgICAgc2V0VG9kb3ModG9kb3NMaXN0LmRhdGEpXG4gICAgICB9XG5cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICAgIHRvZG9zID8gT2JqZWN0LmVudHJpZXModG9kb3MpLm1hcCgoW2tleSwgaXRlbV0pID0+IChcbiAgICAgICAgPFRvZG9zUGFydCB0aXRsZT17a2V5fSBkYXRhPXtpdGVtfSAvPlxuICAgICAgKSkgOiA8Q2lyY3VsYXJQcm9ncmVzcy8+XG4gIClcbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi1iZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLWJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW4tc2cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtbXhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy1teC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL29jLWxuY1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1tb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLW1vLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=