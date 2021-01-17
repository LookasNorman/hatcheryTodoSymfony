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
  'Content-Type': 'application/ld+json'
};

/***/ }),

/***/ "./assets/js/api/Complaints.js":
/*!*************************************!*\
  !*** ./assets/js/api/Complaints.js ***!
  \*************************************/
/*! exports provided: getComplaints, postNewComplaints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComplaints", function() { return getComplaints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewComplaints", function() { return postNewComplaints; });
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/complaints")).then(function (res) {
              return res.data['hydra:member'];
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

function postNewComplaints(_x) {
  return _postNewComplaints.apply(this, arguments);
}

function _postNewComplaints() {
  _postNewComplaints = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/complaints"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
              }
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
  return _postNewComplaints.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/Halls.js":
/*!********************************!*\
  !*** ./assets/js/api/Halls.js ***!
  \********************************/
/*! exports provided: getHalls, postNewHall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHalls", function() { return getHalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewHall", function() { return postNewHall; });
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/halls")).then(function (res) {
              return res.data['hydra:member'];
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

function postNewHall(_x) {
  return _postNewHall.apply(this, arguments);
}

function _postNewHall() {
  _postNewHall = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/halls"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
              }
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
  return _postNewHall.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/Machines.js":
/*!***********************************!*\
  !*** ./assets/js/api/Machines.js ***!
  \***********************************/
/*! exports provided: getMachines, postNewMachines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachines", function() { return getMachines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewMachines", function() { return postNewMachines; });
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/machines")).then(function (res) {
              return res.data['hydra:member'];
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

function postNewMachines(_x) {
  return _postNewMachines.apply(this, arguments);
}

function _postNewMachines() {
  _postNewMachines = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/machines"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
              }
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
  return _postNewMachines.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/api/MachinesGroups.js":
/*!*****************************************!*\
  !*** ./assets/js/api/MachinesGroups.js ***!
  \*****************************************/
/*! exports provided: getMachinesGroups, postNewMachinesGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachinesGroups", function() { return getMachinesGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewMachinesGroups", function() { return postNewMachinesGroups; });
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/machines_groups")).then(function (res) {
              return res.data['hydra:member'];
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

function postNewMachinesGroups(_x) {
  return _postNewMachinesGroups.apply(this, arguments);
}

function _postNewMachinesGroups() {
  _postNewMachinesGroups = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/machines_groups"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
              }
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
  return _postNewMachinesGroups.apply(this, arguments);
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/object_addresses")).then(function (res) {
              return res.data['hydra:member'];
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/object_addresses"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
              }
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
/*! exports provided: getOrders, postNewOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewOrders", function() { return postNewOrders; });
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/orders")).then(function (res) {
              return res.data['hydra:member'];
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

function postNewOrders(_x) {
  return _postNewOrders.apply(this, arguments);
}

function _postNewOrders() {
  _postNewOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/orders"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
              }
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
  return _postNewOrders.apply(this, arguments);
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
/*! exports provided: getTodoType, postNewTodoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodoType", function() { return getTodoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewTodoType", function() { return postNewTodoType; });
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/todo_types")).then(function (res) {
              return res.data['hydra:member'];
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

function postNewTodoType(_x) {
  return _postNewTodoType.apply(this, arguments);
}

function _postNewTodoType() {
  _postNewTodoType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/todo_types"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
              }
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
  return _postNewTodoType.apply(this, arguments);
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos?date=").concat(date, "&exists[endDate]=false")).then(function (res) {
              return res.data['hydra:member'];
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos?exist[endDate]=false&objectAddress=").concat(objectAddress)).then(function (res) {
              return res.data['hydra:member'];
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos?date[strictly_before]=").concat(date, "&exists[endDate]=false")).then(function (res) {
              return res.data['hydra:member'];
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos?date[strictly_after]=").concat(date, "&exists[endDate]=false")).then(function (res) {
              return res.data['hydra:member'];
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
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_5__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_6__["API_URL"], "/todos"), data, {
              headers: {
                'Content-Type': 'application/json',
                'accept': 'application/ld+json'
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

/***/ "./assets/js/api/Users.js":
/*!********************************!*\
  !*** ./assets/js/api/Users.js ***!
  \********************************/
/*! exports provided: getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
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




function getUsers() {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_Resolve__WEBPACK_IMPORTED_MODULE_4__["resolve"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_BasicUrl__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/users")).then(function (res) {
              return res.data['hydra:member'];
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
  return _getUsers.apply(this, arguments);
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
/* harmony import */ var _api_Complaints__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/Complaints */ "./assets/js/api/Complaints.js");






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
      register = _useForm.register;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      machineList = _useState2[0],
      setMachineList = _useState2[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var postData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_Complaints__WEBPACK_IMPORTED_MODULE_11__["postNewComplaints"])(JSON.stringify(data));

            case 2:
              postData = _context.sent;

            case 3:
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

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var machines;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_api_Machines__WEBPACK_IMPORTED_MODULE_10__["getMachines"])();

              case 2:
                machines = _context2.sent;

                if (!machines.error) {
                  setMachineList(machines.data);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "partName",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Dostawca"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "supplier",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "description",
    ref: register()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Data zg\u0142oszenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "filingDate",
    type: "date",
    ref: register()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Maszyna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "machine",
    ref: register
  }, machineList && machineList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
/* harmony import */ var _api_Halls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/Halls */ "./assets/js/api/Halls.js");







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
function Hall() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var postData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_Halls__WEBPACK_IMPORTED_MODULE_12__["postNewHall"])(JSON.stringify(data));

            case 2:
              postData = _context.sent;

            case 3:
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
    data: "Dodaj hal\u0119 / kurnik"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "name",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "description",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
    name: "objectAddress",
    ref: register
  }, objectAddressList && objectAddressList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
/* harmony import */ var _api_Halls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/Halls */ "./assets/js/api/Halls.js");
/* harmony import */ var _api_MachinesGroups__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../api/MachinesGroups */ "./assets/js/api/MachinesGroups.js");
/* harmony import */ var _api_Machines__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../api/Machines */ "./assets/js/api/Machines.js");







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
function Machine() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var postData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_Machines__WEBPACK_IMPORTED_MODULE_14__["postNewMachines"])(JSON.stringify(data));

            case 2:
              postData = _context.sent;

            case 3:
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
      hallList = _useState4[0],
      setHallList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      machinesGroupsList = _useState6[0],
      setMachinesGroupsList = _useState6[1];

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
        var halls;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_api_Halls__WEBPACK_IMPORTED_MODULE_12__["getHalls"])();

              case 2:
                halls = _context3.sent;

                if (!halls.error) {
                  setHallList(halls.data);
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
        var machineGroups;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_api_MachinesGroups__WEBPACK_IMPORTED_MODULE_13__["getMachinesGroups"])();

              case 2:
                machineGroups = _context4.sent;

                if (!machineGroups.error) {
                  setMachinesGroupsList(machineGroups.data);
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
    data: "Dodaj maszyn\u0119 / urz\u0105dzenie"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "name",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Numer seryjny"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "serialNumber",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
    name: "objectAddress",
    ref: register
  }, objectAddressList && objectAddressList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Hala / Kurnik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
    name: "hall",
    ref: register
  }, hallList && hallList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Grupa maszyn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
    name: "machinesGroups",
    ref: register
  }, machinesGroupsList && machinesGroupsList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
/* harmony import */ var _api_MachinesGroups__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/MachinesGroups */ "./assets/js/api/MachinesGroups.js");





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
function MachineGroups() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var postData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_MachinesGroups__WEBPACK_IMPORTED_MODULE_9__["postNewMachinesGroups"])(JSON.stringify(data));

            case 2:
              postData = _context.sent;

            case 3:
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
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    data: "Dodaj grup\u0119 maszyn"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa grupy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "name",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "description",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
      register = _useForm.register;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var newObject;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_9__["newObjectAddress"])(JSON.stringify(data));

            case 2:
              newObject = _context.sent;

            case 3:
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "name",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Ulica"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "street",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nr domu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "streetNumber",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Telefon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "phoneNumber",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "email",
    ref: register
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
/* harmony import */ var _api_Orders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/Orders */ "./assets/js/api/Orders.js");







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
function Order() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var postData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_Orders__WEBPACK_IMPORTED_MODULE_12__["postNewOrders"])(JSON.stringify(data));

            case 2:
              postData = _context.sent;

            case 3:
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
    data: "Dodaj hal\u0119 / kurnik"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Tytu\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "name",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "description",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Dostawca"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "supplier",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Data zg\u0142oszenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "orderDate",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
    name: "objectAddress",
    ref: register
  }, objectAddressList && objectAddressList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
/* harmony import */ var _api_Machines__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/Machines */ "./assets/js/api/Machines.js");
/* harmony import */ var _api_TodoType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/TodoType */ "./assets/js/api/TodoType.js");
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../api/Todos */ "./assets/js/api/Todos.js");
/* harmony import */ var _api_Users__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../api/Users */ "./assets/js/api/Users.js");






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
function Todo() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      objectAddressList = _useState2[0],
      setObjectAddressList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      machineList = _useState4[0],
      setMachineList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      todoTypeList = _useState6[0],
      setTodoTypeList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      ownerList = _useState8[0],
      setOwnerList = _useState8[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var postData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_Todos__WEBPACK_IMPORTED_MODULE_13__["postNewTodo"])(JSON.stringify(data));

            case 2:
              postData = _context.sent;

            case 3:
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

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var objectAddress;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_api_ObjectsAddresses__WEBPACK_IMPORTED_MODULE_10__["getObjectsAddresses"])();

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
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var machines;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_api_Machines__WEBPACK_IMPORTED_MODULE_11__["getMachines"])();

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
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var todoTypes;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_api_TodoType__WEBPACK_IMPORTED_MODULE_12__["getTodoType"])();

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
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var users;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_api_Users__WEBPACK_IMPORTED_MODULE_14__["getUsers"])();

              case 2:
                users = _context5.sent;

                if (!users.error) {
                  setOwnerList(users.data);
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function fetchData() {
        return _ref5.apply(this, arguments);
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
    data: "Dodaj zadanie"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    className: classes.root,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "title",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "description",
    ref: register()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Data wykonania"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "date",
    id: "standard-basic",
    ref: register(),
    type: "date"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Czas powt\xF3rze\u0144 (dni)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "repeatTime",
    id: "standard-basic",
    ref: register({
      valueAsNumber: true
    }),
    type: "number"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "objectAddress",
    ref: register()
  }, objectAddressList && objectAddressList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Maszyna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "machine",
    ref: register()
  }, machineList && machineList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Typ zadania"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "todoType",
    ref: register()
  }, todoTypeList && todoTypeList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "W\u0142a\u015Bciciel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "owner",
    ref: register()
  }, ownerList && ownerList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.firstname);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
/* harmony import */ var _api_Todos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/Todos */ "./assets/js/api/Todos.js");
/* harmony import */ var _api_TodoType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/TodoType */ "./assets/js/api/TodoType.js");





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
function TodoType() {
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var postData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_TodoType__WEBPACK_IMPORTED_MODULE_10__["postNewTodoType"])(JSON.stringify(data));

            case 2:
              postData = _context.sent;

            case 3:
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
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "".concat(classes.details, " ").concat(classes.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_basic_CardHeader__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    data: "Dodaj typ zadania"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "name",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "description",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
      key: key,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvQmFzaWNVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9Db21wbGFpbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvSGFsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9NYWNoaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL01hY2hpbmVzR3JvdXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvT2JqZWN0c0FkZHJlc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL09yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL1Jlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9Ub2RvVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL1RvZG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRGFzaGJvcmRQYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudGl0eUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRpdHlTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvZG9zUGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNpYy9DYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Jhc2ljL0NhcmRTdWJ0aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNpYy9MaXN0Qm9keS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNpYy9NZW51SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL0FkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Db21wbGFpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvRm9ybVBhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9IYWxsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvTWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmVHcm91cHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9PYmplY3RBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvVG9kb1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0FkZENvbXBsYWludC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQWRkT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTmV4dFdlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL092ZXJkdWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1BhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1RvZGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQVBJX1VSTCIsIkhFQURFUlMiLCJnZXRDb21wbGFpbnRzIiwicmVzb2x2ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJwb3N0TmV3Q29tcGxhaW50cyIsInBvc3QiLCJoZWFkZXJzIiwiZ2V0SGFsbHMiLCJwb3N0TmV3SGFsbCIsImdldE1hY2hpbmVzIiwicG9zdE5ld01hY2hpbmVzIiwiZ2V0TWFjaGluZXNHcm91cHMiLCJwb3N0TmV3TWFjaGluZXNHcm91cHMiLCJnZXRPYmplY3RzQWRkcmVzc2VzIiwibmV3T2JqZWN0QWRkcmVzcyIsImdldE9yZGVycyIsInBvc3ROZXdPcmRlcnMiLCJwcm9taXNlIiwicmVzb2x2ZWQiLCJlcnJvciIsImdldFRvZG9UeXBlIiwicG9zdE5ld1RvZG9UeXBlIiwiZ2V0VG9kYXlUb2RvcyIsImRhdGUiLCJnZXRPYmplY3RUb2RvcyIsIm9iamVjdEFkZHJlc3MiLCJnZXRUb2Rvc0J5T2JqZWN0QW5kVHlwZSIsImdldE92ZXJkdWVUb2RvcyIsImdldE5leHRXZWVrVG9kb3MiLCJnZXRUb2RheVRvZG9zVHlwZXNPYmplY3RzIiwiZ2V0T3ZlcmR1ZVRvZG9zVHlwZXNPYmplY3RzIiwiZ2V0TmV4dFRvZG9zVHlwZXNPYmplY3RzIiwicG9zdE5ld1RvZG8iLCJnZXRVc2VycyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZsZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFpbiIsIm1hcmdpbiIsImZsZXhXcmFwIiwiRGFzaGJvYXJkUGFydCIsInRpdGxlIiwibGluayIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInZpc2liaWxpdHkiLCJzZXRWaXNpYmlsaXR5IiwidG9nZ2xlVmlzaWJpbGl0eSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJjYXJkIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjb250ZW50IiwiZGV0YWlscyIsImFsaWduQ29udGVudCIsImZvbnRTaXplIiwiRW50aXR5QWxsIiwiaGVhZGVyIiwiRW50aXR5U3VtbWFyeSIsInNsaWNlIiwiVG9kb3NQYXJ0IiwiT2JqZWN0IiwiZW50cmllcyIsIkNhcmRIZWFkZXIiLCJDYXJkU3VidGl0bGUiLCJoZWFkaW5nIiwidHlwb2dyYXBoeSIsInB4VG9SZW0iLCJmbGV4QmFzaXMiLCJmbGV4U2hyaW5rIiwibGlzdCIsInBhZGRpbmciLCJMaXN0Qm9keSIsIlJlYWN0IiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJpc0V4cGFuZGVkIiwic3VwcGxpZXIiLCJNb21lbnQiLCJmb3JtYXQiLCJkZXNjcmlwdGlvbiIsIk1lbnVJdGVtIiwicGF0aCIsImljb24iLCJBZGRGb3JtIiwiZm9ybSIsImZvcm1zIiwicm9vdCIsInNwYWNpbmciLCJDb21wbGFpbnQiLCJ1c2VGb3JtIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJtYWNoaW5lTGlzdCIsInNldE1hY2hpbmVMaXN0Iiwib25TdWJtaXQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdERhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJtYWNoaW5lcyIsImlkIiwibmFtZSIsIkZvcm0iLCJGb3JtUGFydCIsIkhhbGwiLCJvYmplY3RBZGRyZXNzTGlzdCIsInNldE9iamVjdEFkZHJlc3NMaXN0IiwiTWFjaGluZSIsImhhbGxMaXN0Iiwic2V0SGFsbExpc3QiLCJtYWNoaW5lc0dyb3Vwc0xpc3QiLCJzZXRNYWNoaW5lc0dyb3Vwc0xpc3QiLCJoYWxscyIsIm1hY2hpbmVHcm91cHMiLCJNYWNoaW5lR3JvdXBzIiwiT2JqZWN0QWRkcmVzcyIsIm5ld09iamVjdCIsIk9yZGVyIiwiVG9kbyIsInRvZG9UeXBlTGlzdCIsInNldFRvZG9UeXBlTGlzdCIsIm93bmVyTGlzdCIsInNldE93bmVyTGlzdCIsInRvZG9UeXBlcyIsInVzZXJzIiwidmFsdWVBc051bWJlciIsImZpcnN0bmFtZSIsIlRvZG9UeXBlIiwiQWRkQ29tcGxhaW50IiwiQWRkT3JkZXIiLCJBZGRUb2RvIiwiRGFzaGJvYXJkIiwidG9kb3MiLCJzZXRUb2RvcyIsIm9yZGVycyIsInNldE9yZGVycyIsImNvbXBsYWludHMiLCJzZXRDb21wbGFpbnRzIiwidG9kYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJvdmVyZHVlIiwibmV4dFdlZWsiLCJ0b29sYmFyIiwibWl4aW5zIiwiTWVudSIsImluZGV4IiwiVG9kYXkiLCJzdGF0ZSIsInNldFN0YXRlIiwiT3ZlcmR1ZSIsIm92ZXJkdWVPYmplY3RzIiwic2V0T3ZlcmR1ZU9iamVjdCIsIm92ZXJkdWVUb2RvcyIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwiYnJlYWtwb2ludHMiLCJ1cCIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJkcmF3ZXJQYXBlciIsImZsZXhHcm93IiwiUGFnZUxheW91dCIsInByb3BzIiwid2luZG93IiwidXNlVGhlbWUiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImhhbmRsZURyYXdlclRvZ2dsZSIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsImJvZHkiLCJkaXJlY3Rpb24iLCJwYXBlciIsImtlZXBNb3VudGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsInNldFRvZGF5IiwidG9kYXlUb2RvcyIsIlRvZG9zIiwidG9kb3NMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFBLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyw0Q0FBRCxDQUFPLFVBQVAscUJBQ0ksMkRBQUMsNERBQUQsT0FESixDQURKLEVBSUlDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUpKLEU7Ozs7Ozs7Ozs7O0FDSkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFPLElBQU1DLE9BQU8sR0FBRyxNQUFoQjtBQUVBLElBQU1DLE9BQU8sR0FBRztBQUFDLGtCQUFnQjtBQUFqQixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFFTyxTQUFlQyxhQUF0QjtBQUFBO0FBQUE7OzsyRUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUUMsd0RBQU8sQ0FBQ0MsNENBQUssQ0FBQ0MsR0FBTixXQUNoQkwsaURBRGdCLGtCQUdsQk0sSUFIa0IsQ0FHYixVQUFBQyxHQUFHO0FBQUEscUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLGNBQVQsQ0FBSjtBQUFBLGFBSFUsQ0FBRCxDQURmOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLFNBQWVDLGlCQUF0QjtBQUFBO0FBQUE7OzsrRUFBTyxrQkFBaUNELElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNRTCx3REFBTyxDQUFDQyw0Q0FBSyxDQUFDTSxJQUFOLFdBQ2RWLGlEQURjLGtCQUVqQlEsSUFGaUIsRUFHakI7QUFBQ0cscUJBQU8sRUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4vanMvcGFnZXMvUGFnZUxheW91dFwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxQYWdlTGF5b3V0Lz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9ICcvYXBpJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUlMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ30iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBsYWludHMoKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS9jb21wbGFpbnRzYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TmV3Q29tcGxhaW50cyhkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9jb21wbGFpbnRzYCxcbiAgICAgIGRhdGEsXG4gICAgICB7aGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdhY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbid9fVxuICApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAnLi9SZXNvbHZlJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vQmFzaWNVcmwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIYWxscygpIHtcbiAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgIGAke0FQSV9VUkx9L2hhbGxzYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TmV3SGFsbChkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9oYWxsc2AsXG4gICAgICBkYXRhLFxuICAgICAge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nfX1cbiAgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1hY2hpbmVzKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vbWFjaGluZXNgXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3ROZXdNYWNoaW5lcyhkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9tYWNoaW5lc2AsXG4gICAgICBkYXRhLFxuICAgICAge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nfX1cbiAgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL0Jhc2ljVXJsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWFjaGluZXNHcm91cHMoKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS9tYWNoaW5lc19ncm91cHNgXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3ROZXdNYWNoaW5lc0dyb3VwcyhkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9tYWNoaW5lc19ncm91cHNgLFxuICAgICAgZGF0YSxcbiAgICAgIHtoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ319XG4gIClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAnLi9SZXNvbHZlJ1xuaW1wb3J0IHsgQVBJX1VSTCwgSEVBREVSUyB9IGZyb20gJy4vQmFzaWNVcmwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPYmplY3RzQWRkcmVzc2VzKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vb2JqZWN0X2FkZHJlc3Nlc2BcbiAgKVxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbmV3T2JqZWN0QWRkcmVzcyhkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9vYmplY3RfYWRkcmVzc2VzYCxcbiAgICAgIGRhdGEsXG4gICAgICB7aGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdhY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbid9fVxuICApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7QVBJX1VSTH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVycygpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgICAgIGAke0FQSV9VUkx9L29yZGVyc2BcbiAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdE5ld09yZGVycyhkYXRhKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MucG9zdChcbiAgICAgICAgYCR7QVBJX1VSTH0vb3JkZXJzYCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nfX1cbiAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59IiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSkge1xuICBjb25zdCByZXNvbHZlZCA9IHtcbiAgICBkYXRhOiBudWxsLFxuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgdHJ5IHtcbiAgICByZXNvbHZlZC5kYXRhID0gYXdhaXQgcHJvbWlzZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmVzb2x2ZWQuZXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL0Jhc2ljVXJsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9kb1R5cGUoKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS90b2RvX3R5cGVzYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TmV3VG9kb1R5cGUoZGF0YSkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5wb3N0KFxuICAgICAgYCR7QVBJX1VSTH0vdG9kb190eXBlc2AsXG4gICAgICBkYXRhLFxuICAgICAge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nfX1cbiAgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQge0FQSV9VUkx9IGZyb20gJy4vQmFzaWNVcmwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2RheVRvZG9zKGRhdGUpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgICAgIGAke0FQSV9VUkx9L3RvZG9zP2RhdGU9JHtkYXRlfSZleGlzdHNbZW5kRGF0ZV09ZmFsc2VgXG4gICAgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9iamVjdFRvZG9zKG9iamVjdEFkZHJlc3MpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgICAgIGAke0FQSV9VUkx9L3RvZG9zP2V4aXN0W2VuZERhdGVdPWZhbHNlJm9iamVjdEFkZHJlc3M9JHtvYmplY3RBZGRyZXNzfWBcbiAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9kb3NCeU9iamVjdEFuZFR5cGUoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvcy9vYmplY3QvZGV0YWlsc2BcbiAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPdmVyZHVlVG9kb3MoZGF0ZSkge1xuICAgIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICAgICAgYCR7QVBJX1VSTH0vdG9kb3M/ZGF0ZVtzdHJpY3RseV9iZWZvcmVdPSR7ZGF0ZX0mZXhpc3RzW2VuZERhdGVdPWZhbHNlYFxuICAgIClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXh0V2Vla1RvZG9zKGRhdGUpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgICAgIGAke0FQSV9VUkx9L3RvZG9zP2RhdGVbc3RyaWN0bHlfYWZ0ZXJdPSR7ZGF0ZX0mZXhpc3RzW2VuZERhdGVdPWZhbHNlYFxuICAgIClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2RheVRvZG9zVHlwZXNPYmplY3RzKGRhdGUpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgICAgIGAke0FQSV9VUkx9L3RvZG9zL3RvZGF5L2RldGFpbHMvJHtkYXRlfWAsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE92ZXJkdWVUb2Rvc1R5cGVzT2JqZWN0cyhkYXRlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvcy9vdmVyZHVlL2RldGFpbHMvJHtkYXRlfWAsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5leHRUb2Rvc1R5cGVzT2JqZWN0cyhkYXRlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvcy9uZXh0L2RldGFpbHMvJHtkYXRlfWAsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3ROZXdUb2RvKGRhdGEpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5wb3N0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvc2AsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHtoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ319XG4gICAgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7QVBJX1VSTH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xuICAgIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICAgICAgYCR7QVBJX1VSTH0vdXNlcnNgXG4gICAgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCB7IEVudGl0eVN1bW1hcnkgfSBmcm9tICcuL0VudGl0eVN1bW1hcnknXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzLCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBBZGQsIFZpc2liaWxpdHksIFZpc2liaWxpdHlPZmYgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbWFpbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAuNXZ3JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRQYXJ0KHsgdGl0bGUsIGRhdGEsIGxpbmsgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkoIXZpc2liaWxpdHkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlzdEl0ZW0gZGl2aWRlcj5cbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0aXRsZX0gLz5cbiAgICAgICAgPExpbmsgdG89e2xpbmt9PjxBZGQgLz48L0xpbms+XG4gICAgICAgIHt2aXNpYmlsaXR5ID8gPFZpc2liaWxpdHkgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0gLz4gOiA8VmlzaWJpbGl0eU9mZiBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPn1cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICB7dmlzaWJpbGl0eSAmJlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWFpbn0gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgICAgPEVudGl0eVN1bW1hcnkga2V5PXtrZXl9IGRhdGE9e2l0ZW19IGhlYWRlcj0nTGlzdGEnIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICB9XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgTGlzdCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHsgQ2FyZFN1YnRpdGxlIH0gZnJvbSAnLi9iYXNpYy9DYXJkU3VidGl0bGUnXG5pbXBvcnQgeyBMaXN0Qm9keSB9IGZyb20gJy4vYmFzaWMvTGlzdEJvZHknXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHdpZHRoOiAnMzIlJyxcbiAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41dncnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZmxleDogJzEgMCBhdXRvJyxcbiAgfSxcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IEVudGl0eUFsbCA9ICh7IGRhdGEsIGhlYWRlciB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT17ZGF0YS50aXRsZX0gLz5cbiAgICAgICAgICB7ZGF0YS5saW5rICYmXG4gICAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgICA8TGluayB0bz17ZGF0YS5saW5rfT48TW9yZVZlcnRJY29uIC8+PC9MaW5rPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q2FyZFN1YnRpdGxlIGhlYWRlcj17aGVhZGVyfSAvPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgIDxMaXN0IGtleT17a2V5fT5cbiAgICAgICAgICAgIDxMaXN0Qm9keSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgIDwvTGlzdD5cblxuICAgICAgICApKX1cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgTGlzdCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHsgQ2FyZFN1YnRpdGxlIH0gZnJvbSAnLi9iYXNpYy9DYXJkU3VidGl0bGUnXG5pbXBvcnQgeyBMaXN0Qm9keSB9IGZyb20gJy4vYmFzaWMvTGlzdEJvZHknXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHdpZHRoOiAnMzIlJyxcbiAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41dncnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZmxleDogJzEgMCBhdXRvJyxcbiAgfSxcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IEVudGl0eVN1bW1hcnkgPSAoeyBkYXRhLCBoZWFkZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9e2RhdGEudGl0bGV9IC8+XG4gICAgICAgICAge2RhdGEubGluayAmJlxuICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgPExpbmsgdG89e2RhdGEubGlua30+PE1vcmVWZXJ0SWNvbiAvPjwvTGluaz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRTdWJ0aXRsZSBoZWFkZXI9e2hlYWRlcn0gLz5cbiAgICAgICAge2RhdGEuZGF0YS5zbGljZSgwLCAzKS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgIDxMaXN0IGtleT17a2V5fT5cbiAgICAgICAgICAgIDxMaXN0Qm9keSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgIDwvTGlzdD5cblxuICAgICAgICApKX1cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgeyBFbnRpdHlBbGwgfSBmcm9tICcuL0VudGl0eUFsbCdcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IEFkZCwgVmlzaWJpbGl0eSwgVmlzaWJpbGl0eU9mZiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBtYWluOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdzdHJldGNoJyxcbiAgICBtYXJnaW46ICcxdncgMC41dncnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICB9LFxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zUGFydCh7IHRpdGxlLCBkYXRhIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmlsaXR5KCF2aXNpYmlsaXR5KVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0SXRlbSBkaXZpZGVyPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RpdGxlfSAvPlxuICAgICAgICA8TGluayB0bz1cIi9hZGRUb2RvXCI+PEFkZCAvPjwvTGluaz5cbiAgICAgICAge3Zpc2liaWxpdHkgPyA8VmlzaWJpbGl0eSBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPiA6IDxWaXNpYmlsaXR5T2ZmIG9uQ2xpY2s9e3RvZ2dsZVZpc2liaWxpdHl9IC8+fVxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIHt2aXNpYmlsaXR5ICYmXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tYWlufSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAge09iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW2tleSwgaXRlbV0pID0+IChcbiAgICAgICAgICA8RW50aXR5QWxsIGtleT17a2V5fSBkYXRhPXtpdGVtfSBoZWFkZXI9e2tleX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICB0aXRsZToge1xuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2FyZEhlYWRlciA9ICh7ZGF0YX0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAge2RhdGF9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBDYXJkU3VidGl0bGUgPSAoeyBoZWFkZXIgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgIHtoZWFkZXJ9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICAgIEFjY29yZGlvbixcbiAgICBBY2NvcmRpb25EZXRhaWxzLFxuICAgIEFjY29yZGlvblN1bW1hcnksXG4gICAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBNb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEyKSxcbiAgICAgICAgZmxleEJhc2lzOiAnMTAwJScsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZzogJzAgMCAxdncgMCcsXG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IExpc3RCb2R5ID0gKHtkYXRhfSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBpc0V4cGFuZGVkKSA9PiB7XG4gICAgICAgIHNldEV4cGFuZGVkKGlzRXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XG4gICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09ICdwYW5lbDEnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwxJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbi8+fVxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFiaC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWJoLWhlYWRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGUgJiYgZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zdXBwbGllciAmJiBkYXRhLnN1cHBsaWVyfVxuICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge01vbWVudChkYXRhLmRhdGUpLmZvcm1hdCgnTEwnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC8+XG4gICAgKTtcbn0iLCJpbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51SXRlbSh7aXRlbX0pIHtcbiAgcmV0dXJuKFxuICAgIDxMaW5rIHRvPXtpdGVtLnBhdGh9PlxuICAgICAgPExpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW1JY29uPntpdGVtLmljb259PC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS50aXRsZX0vPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICA8L0xpbms+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuaW1wb3J0IEZvcm1QYXJ0IGZyb20gJy4vRm9ybVBhcnQnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbWFpbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAuNXZ3JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMwJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRGb3JtKHsgZm9ybSwgZm9ybXMgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1haW59ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5jYXJkfWB9PlxuICAgICAgICB7Zm9ybX1cbiAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2Ake2NsYXNzZXMuY2FyZH1gfT5cbiAgICAgICAgICA8Rm9ybVBhcnQgZm9ybXM9e2Zvcm1zfS8+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VGb3JtfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtCdXR0b24sIENhcmRDb250ZW50LCBDYXJkLCBJbnB1dExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7Q2FyZEhlYWRlcn0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7Z2V0TWFjaGluZXN9IGZyb20gJy4uLy4uLy4uL2FwaS9NYWNoaW5lcydcbmltcG9ydCB7cG9zdE5ld0NvbXBsYWludHN9IGZyb20gXCIuLi8uLi8uLi9hcGkvQ29tcGxhaW50c1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIHdpZHRoOiAnMzAlJyxcbiAgICAgICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICB9LFxuICAgIGZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgZGV0YWlsczoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGxhaW50KCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB7aGFuZGxlU3VibWl0LCByZWdpc3Rlcn0gPSB1c2VGb3JtKClcbiAgICBjb25zdCBbbWFjaGluZUxpc3QsIHNldE1hY2hpbmVMaXN0XSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcG9zdE5ld0NvbXBsYWludHMoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFjaGluZXMgPSBhd2FpdCBnZXRNYWNoaW5lcygpXG4gICAgICAgICAgICBpZiAoIW1hY2hpbmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0TWFjaGluZUxpc3QobWFjaGluZXMuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXRhaWxzfSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT1cIkRvZGFqIHJla2xhbWFjasSZXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5OYXp3YTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFydE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5Eb3N0YXdjYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VwcGxpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5PcGlzPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+RGF0YSB6Z8WCb3N6ZW5pYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsaW5nRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPk1hc3p5bmE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hY2hpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21hY2hpbmVMaXN0ICYmIG1hY2hpbmVMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW1bJ0BpZCddfT57aXRlbS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgVmlzaWJpbGl0eSwgVmlzaWJpbGl0eU9mZiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7IGl0ZW0gfSkge1xuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkoIXZpc2liaWxpdHkpXG4gIH1cbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxMaXN0SXRlbSBkaXZpZGVyPlxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICB7dmlzaWJpbGl0eVxuICAgICAgICAgICAgPyA8VmlzaWJpbGl0eSBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPlxuICAgICAgICAgICAgOiA8VmlzaWJpbGl0eU9mZiBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAge3Zpc2liaWxpdHkgJiZcbiAgICAgICAgICBpdGVtLmRhdGFcbiAgICAgICAgfVxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUGFydCh7IGZvcm1zIH0pIHtcblxuICByZXR1cm4gKFxuICAgIGZvcm1zLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICA8Rm9ybSBrZXk9e2tleX0gaXRlbT17aXRlbX0gLz5cbiAgICApKVxuICApXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUZvcm19IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0J1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQsIElucHV0TGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHtDYXJkSGVhZGVyfSBmcm9tICcuLi8uLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHtnZXRPYmplY3RzQWRkcmVzc2VzfSBmcm9tICcuLi8uLi8uLi9hcGkvT2JqZWN0c0FkZHJlc3NlcydcbmltcG9ydCB7cG9zdE5ld0hhbGx9IGZyb20gXCIuLi8uLi8uLi9hcGkvSGFsbHNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzI1Y2gnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB3aWR0aDogJzMwJScsXG4gICAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgICAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgfSxcbiAgICBmbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGRldGFpbHM6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbGwoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyfSA9IHVzZUZvcm0oKVxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBwb3N0TmV3SGFsbChKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG4gICAgY29uc3QgW29iamVjdEFkZHJlc3NMaXN0LCBzZXRPYmplY3RBZGRyZXNzTGlzdF0gPSB1c2VTdGF0ZSgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYmplY3RBZGRyZXNzID0gYXdhaXQgZ2V0T2JqZWN0c0FkZHJlc3NlcygpXG4gICAgICAgICAgICBpZiAoIW9iamVjdEFkZHJlc3MuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRPYmplY3RBZGRyZXNzTGlzdChvYmplY3RBZGRyZXNzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiBoYWzEmSAvIGt1cm5pa1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TmF6d2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5PcGlzPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5Mb2thbGl6YWNqYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2JqZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqZWN0QWRkcmVzc0xpc3QgJiYgb2JqZWN0QWRkcmVzc0xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7QnV0dG9uLCBDYXJkQ29udGVudCwgQ2FyZCwgSW5wdXRMYWJlbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQge0NhcmRIZWFkZXJ9IGZyb20gJy4uLy4uL2Jhc2ljL0NhcmRIZWFkZXInXG5pbXBvcnQge2dldE9iamVjdHNBZGRyZXNzZXN9IGZyb20gJy4uLy4uLy4uL2FwaS9PYmplY3RzQWRkcmVzc2VzJ1xuaW1wb3J0IHtnZXRIYWxsc30gZnJvbSAnLi4vLi4vLi4vYXBpL0hhbGxzJ1xuaW1wb3J0IHtnZXRNYWNoaW5lc0dyb3Vwc30gZnJvbSAnLi4vLi4vLi4vYXBpL01hY2hpbmVzR3JvdXBzJ1xuaW1wb3J0IHtwb3N0TmV3TWFjaGluZXN9IGZyb20gXCIuLi8uLi8uLi9hcGkvTWFjaGluZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzI1Y2gnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB3aWR0aDogJzMwJScsXG4gICAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgICAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgfSxcbiAgICBmbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGRldGFpbHM6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hY2hpbmUoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyfSA9IHVzZUZvcm0oKVxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBwb3N0TmV3TWFjaGluZXMoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuICAgIGNvbnN0IFtvYmplY3RBZGRyZXNzTGlzdCwgc2V0T2JqZWN0QWRkcmVzc0xpc3RdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtoYWxsTGlzdCwgc2V0SGFsbExpc3RdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFttYWNoaW5lc0dyb3Vwc0xpc3QsIHNldE1hY2hpbmVzR3JvdXBzTGlzdF0gPSB1c2VTdGF0ZSgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYmplY3RBZGRyZXNzID0gYXdhaXQgZ2V0T2JqZWN0c0FkZHJlc3NlcygpXG4gICAgICAgICAgICBpZiAoIW9iamVjdEFkZHJlc3MuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRPYmplY3RBZGRyZXNzTGlzdChvYmplY3RBZGRyZXNzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbGxzID0gYXdhaXQgZ2V0SGFsbHMoKVxuICAgICAgICAgICAgaWYgKCFoYWxscy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHNldEhhbGxMaXN0KGhhbGxzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hY2hpbmVHcm91cHMgPSBhd2FpdCBnZXRNYWNoaW5lc0dyb3VwcygpXG4gICAgICAgICAgICBpZiAoIW1hY2hpbmVHcm91cHMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRNYWNoaW5lc0dyb3Vwc0xpc3QobWFjaGluZUdyb3Vwcy5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPVwiRG9kYWogbWFzenluxJkgLyB1cnrEhWR6ZW5pZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TmF6d2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5OdW1lciBzZXJ5am55PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXJpYWxOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5Mb2thbGl6YWNqYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9iamVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29iamVjdEFkZHJlc3NMaXN0ICYmIG9iamVjdEFkZHJlc3NMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+SGFsYSAvIEt1cm5pazwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hhbGxMaXN0ICYmIGhhbGxMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+R3J1cGEgbWFzenluPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFjaGluZXNHcm91cHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge21hY2hpbmVzR3JvdXBzTGlzdCAmJiBtYWNoaW5lc0dyb3Vwc0xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtWydAaWQnXX0+e2l0ZW0ubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0J1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQsIElucHV0TGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJy4uLy4uL2Jhc2ljL0NhcmRIZWFkZXInXG5pbXBvcnQge3Bvc3ROZXdNYWNoaW5lc0dyb3Vwc30gZnJvbSBcIi4uLy4uLy4uL2FwaS9NYWNoaW5lc0dyb3Vwc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmID4gKic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgfSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMwJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hY2hpbmVHcm91cHMoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyIH0gPSB1c2VGb3JtKClcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcG9zdE5ld01hY2hpbmVzR3JvdXBzKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICB9XG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT1cIkRvZGFqIGdydXDEmSBtYXN6eW5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPk5hendhIGdydXB5PC9JbnB1dExhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5PcGlzPC9JbnB1dExhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUZvcm19IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0J1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQsIElucHV0TGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHtDYXJkSGVhZGVyfSBmcm9tICcuLi8uLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHtuZXdPYmplY3RBZGRyZXNzfSBmcm9tICcuLi8uLi8uLi9hcGkvT2JqZWN0c0FkZHJlc3NlcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzI1Y2gnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB3aWR0aDogJzMwJScsXG4gICAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgICAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgfSxcbiAgICBmbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGRldGFpbHM6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9iamVjdEFkZHJlc3MoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyfSA9IHVzZUZvcm0oKVxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0ID0gYXdhaXQgbmV3T2JqZWN0QWRkcmVzcyhKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBpZD1cIm9iamVjdC1hZGRyZXNzLWFkZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiBsb2thbGl6YWNqxJlcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5OYXp3YTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5VbGljYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPk5yIGRvbXU8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0cmVldE51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5UZWxlZm9uPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZU51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5FbWFpbDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VGb3JtfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtCdXR0b24sIENhcmRDb250ZW50LCBDYXJkLCBJbnB1dExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7Q2FyZEhlYWRlcn0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7Z2V0T2JqZWN0c0FkZHJlc3Nlc30gZnJvbSAnLi4vLi4vLi4vYXBpL09iamVjdHNBZGRyZXNzZXMnXG5pbXBvcnQge3Bvc3ROZXdPcmRlcnN9IGZyb20gXCIuLi8uLi8uLi9hcGkvT3JkZXJzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgd2lkdGg6ICcyNWNoJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgd2lkdGg6ICczMCUnLFxuICAgICAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC41dncnLFxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgIH0sXG4gICAgZmxleDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBkZXRhaWxzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgcmVnaXN0ZXJ9ID0gdXNlRm9ybSgpXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHBvc3ROZXdPcmRlcnMoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuICAgIGNvbnN0IFtvYmplY3RBZGRyZXNzTGlzdCwgc2V0T2JqZWN0QWRkcmVzc0xpc3RdID0gdXNlU3RhdGUoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0QWRkcmVzcyA9IGF3YWl0IGdldE9iamVjdHNBZGRyZXNzZXMoKVxuICAgICAgICAgICAgaWYgKCFvYmplY3RBZGRyZXNzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0T2JqZWN0QWRkcmVzc0xpc3Qob2JqZWN0QWRkcmVzcy5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPVwiRG9kYWogaGFsxJkgLyBrdXJuaWtcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlR5dHXFgjwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPk9waXM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+RG9zdGF3Y2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cHBsaWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+RGF0YSB6Z8WCb3N6ZW5pYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3JkZXJEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TG9rYWxpemFjamE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvYmplY3RBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvYmplY3RBZGRyZXNzTGlzdCAmJiBvYmplY3RBZGRyZXNzTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW1bJ0BpZCddfT57aXRlbS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUZvcm19IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHtJbnB1dExhYmVsLCBCdXR0b24sIENhcmRDb250ZW50LCBDYXJkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7Q2FyZEhlYWRlcn0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7Z2V0T2JqZWN0c0FkZHJlc3Nlc30gZnJvbSAnLi4vLi4vLi4vYXBpL09iamVjdHNBZGRyZXNzZXMnXG5pbXBvcnQge2dldE1hY2hpbmVzfSBmcm9tICcuLi8uLi8uLi9hcGkvTWFjaGluZXMnXG5pbXBvcnQge2dldFRvZG9UeXBlfSBmcm9tICcuLi8uLi8uLi9hcGkvVG9kb1R5cGUnXG5pbXBvcnQge3Bvc3ROZXdUb2RvfSBmcm9tICcuLi8uLi8uLi9hcGkvVG9kb3MnXG5pbXBvcnQge2dldFVzZXJzfSBmcm9tIFwiLi4vLi4vLi4vYXBpL1VzZXJzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgd2lkdGg6ICcyNWNoJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgd2lkdGg6ICczMCUnLFxuICAgICAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC41dncnLFxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgIH0sXG4gICAgZmxleDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBkZXRhaWxzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8oKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgcmVnaXN0ZXJ9ID0gdXNlRm9ybSgpXG4gICAgY29uc3QgW29iamVjdEFkZHJlc3NMaXN0LCBzZXRPYmplY3RBZGRyZXNzTGlzdF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW21hY2hpbmVMaXN0LCBzZXRNYWNoaW5lTGlzdF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3RvZG9UeXBlTGlzdCwgc2V0VG9kb1R5cGVMaXN0XSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbb3duZXJMaXN0LCBzZXRPd25lckxpc3RdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHBvc3ROZXdUb2RvKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdEFkZHJlc3MgPSBhd2FpdCBnZXRPYmplY3RzQWRkcmVzc2VzKClcbiAgICAgICAgICAgIGlmICghb2JqZWN0QWRkcmVzcy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHNldE9iamVjdEFkZHJlc3NMaXN0KG9iamVjdEFkZHJlc3MuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFjaGluZXMgPSBhd2FpdCBnZXRNYWNoaW5lcygpXG4gICAgICAgICAgICBpZiAoIW1hY2hpbmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0TWFjaGluZUxpc3QobWFjaGluZXMuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb1R5cGVzID0gYXdhaXQgZ2V0VG9kb1R5cGUoKVxuICAgICAgICAgICAgaWYgKCF0b2RvVHlwZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRUb2RvVHlwZUxpc3QodG9kb1R5cGVzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0VXNlcnMoKVxuICAgICAgICAgICAgaWYgKCF1c2Vycy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHNldE93bmVyTGlzdCh1c2Vycy5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPSdEb2RhaiB6YWRhbmllJy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbCc+TmF6d2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPk9waXM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPkRhdGEgd3lrb25hbmlhPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nc3RhbmRhcmQtYmFzaWMnXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkYXRlJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5DemFzIHBvd3TDs3J6ZcWEIChkbmkpPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JlcGVhdFRpbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nc3RhbmRhcmQtYmFzaWMnXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUFzTnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5Mb2thbGl6YWNqYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdvYmplY3RBZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqZWN0QWRkcmVzc0xpc3QgJiYgb2JqZWN0QWRkcmVzc0xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtWydAaWQnXX0gdmFsdWU9e2l0ZW1bJ0BpZCddfT57aXRlbS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5NYXN6eW5hPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21hY2hpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYWNoaW5lTGlzdCAmJiBtYWNoaW5lTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW1bJ0BpZCddfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPlR5cCB6YWRhbmlhPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvZG9UeXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kb1R5cGVMaXN0ICYmIHRvZG9UeXBlTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW1bJ0BpZCddfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPlfFgmHFm2NpY2llbDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdvd25lcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge293bmVyTGlzdCAmJiBvd25lckxpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtWydAaWQnXX0gdmFsdWU9e2l0ZW1bJ0BpZCddfT57aXRlbS5maXJzdG5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUZvcm0sIENvbnRyb2xsZXJ9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1RleHRGaWVsZCwgQnV0dG9uLCBDYXJkQ29udGVudCwgQ2FyZCwgSW5wdXRMYWJlbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQge0NhcmRIZWFkZXJ9IGZyb20gJy4uLy4uL2Jhc2ljL0NhcmRIZWFkZXInXG5pbXBvcnQge3Bvc3ROZXdUb2RvfSBmcm9tIFwiLi4vLi4vLi4vYXBpL1RvZG9zXCI7XG5pbXBvcnQge3Bvc3ROZXdUb2RvVHlwZX0gZnJvbSBcIi4uLy4uLy4uL2FwaS9Ub2RvVHlwZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIHdpZHRoOiAnMzAlJyxcbiAgICAgICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICB9LFxuICAgIGZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgZGV0YWlsczoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1R5cGUoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyfSA9IHVzZUZvcm0oKVxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBwb3N0TmV3VG9kb1R5cGUoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXRhaWxzfSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT1cIkRvZGFqIHR5cCB6YWRhbmlhXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbCc+TmF6d2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbCc+T3BpczwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9BZGRGb3JtJ1xuaW1wb3J0IENvbXBsYWludCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvQ29tcGxhaW50J1xuaW1wb3J0IE1hY2hpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZENvbXBsYWludCgpIHtcbiAgY29uc3QgZm9ybSA9IDxDb21wbGFpbnQvPlxuICBjb25zdCBmb3JtcyA9IFtcbiAgICB7XCJ0aXRsZVwiOiBcIk1hc3p5bnlcIixcbiAgICAgIFwiZGF0YVwiOiA8TWFjaGluZS8+fVxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8QWRkRm9ybSBmb3JtPXtmb3JtfSBmb3Jtcz17Zm9ybXN9Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFkZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL0FkZEZvcm0nXG5pbXBvcnQgT2JqZWN0QWRkcmVzcyBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvT2JqZWN0QWRkcmVzcydcbmltcG9ydCBPcmRlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvT3JkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZE9yZGVyKCkge1xuICBjb25zdCBmb3JtID0gPE9yZGVyLz5cbiAgY29uc3QgZm9ybXMgPSBbXG4gICAge1widGl0bGVcIjogXCJMb2thbGl6YWNqYVwiLFxuICAgIFwiZGF0YVwiOiA8T2JqZWN0QWRkcmVzcy8+fVxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8QWRkRm9ybSBmb3JtPXtmb3JtfSBmb3Jtcz17Zm9ybXN9Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Ub2RvJ1xuaW1wb3J0IE9iamVjdEFkZHJlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL09iamVjdEFkZHJlc3MnXG5pbXBvcnQgTWFjaGluZSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvTWFjaGluZSdcbmltcG9ydCBUb2RvVHlwZSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvVG9kb1R5cGUnXG5pbXBvcnQgTWFjaGluZUdyb3VwcyBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvTWFjaGluZUdyb3VwcydcbmltcG9ydCBIYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9IYWxsJ1xuaW1wb3J0IEFkZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL0FkZEZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvZG8oKSB7XG4gIGNvbnN0IGZvcm0gPSA8VG9kby8+XG4gIGNvbnN0IGZvcm1zID0gW1xuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogbG9rYWxpemFjamVcIiwgXCJkYXRhXCI6IDxPYmplY3RBZGRyZXNzLz59LFxuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogbWFzenluZVwiLCBcImRhdGFcIjogPE1hY2hpbmUvPn0sXG4gICAge1widGl0bGVcIjogXCJEb2RhaiB0eXAgemFkYW5pYVwiLCBcImRhdGFcIjogPFRvZG9UeXBlLz59LFxuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogaGFsxJkgLyBrdXJuaWtcIiwgXCJkYXRhXCI6IDxIYWxsLz59LFxuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogZ3J1cMSZIG1hc3p5blwiLCBcImRhdGFcIjogPE1hY2hpbmVHcm91cHMvPn1cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPEFkZEZvcm0gZm9ybT17Zm9ybX0gZm9ybXM9e2Zvcm1zfS8+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldE5leHRXZWVrVG9kb3MsIGdldE92ZXJkdWVUb2RvcywgZ2V0VG9kYXlUb2RvcyB9IGZyb20gJy4uL2FwaS9Ub2RvcydcbmltcG9ydCB7IGdldENvbXBsYWludHMgfSBmcm9tICcuLi9hcGkvQ29tcGxhaW50cydcbmltcG9ydCB7IGdldE9yZGVycyB9IGZyb20gJy4uL2FwaS9PcmRlcnMnXG5pbXBvcnQgRGFzaGJvYXJkUGFydCBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib3JkUGFydCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoIFtdKVxuICBjb25zdCBbY29tcGxhaW50cywgc2V0Q29tcGxhaW50c10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCksXG4gICAgICBkYXRlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSArICctJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLScgKyB0b2RheS5nZXREYXRlKClcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0b2RheSA9IGF3YWl0IGdldFRvZGF5VG9kb3MoZGF0ZSlcbiAgICAgIGNvbnN0IG92ZXJkdWUgPSBhd2FpdCBnZXRPdmVyZHVlVG9kb3MoZGF0ZSlcbiAgICAgIGNvbnN0IG5leHRXZWVrID0gYXdhaXQgZ2V0TmV4dFdlZWtUb2RvcyhkYXRlKVxuICAgICAgaWYgKCF0b2RheS5lcnJvciAmJiAhb3ZlcmR1ZS5lcnJvciAmJiAhbmV4dFdlZWsuZXJyb3IpIHtcbiAgICAgICAgc2V0VG9kb3MoW1xuICAgICAgICAgIHsgdGl0bGU6ICdaYWxlZ8WCZScsIGxpbms6ICcvb3ZlcmR1ZScsIGRhdGE6IG92ZXJkdWUuZGF0YSB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdEemlzaWFqJywgbGluazogJy90b2RheScsIGRhdGE6IHRvZGF5LmRhdGEgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnTmFzdMSZcG55IHR5ZHppZcWEJywgbGluazogJy9uZXh0V2VlaycsIGRhdGE6IG5leHRXZWVrLmRhdGEgfSxcbiAgICAgICAgXSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBnZXRPcmRlcnMoKVxuICAgICAgaWYgKCFvcmRlcnMuZXJyb3IpIHtcbiAgICAgICAgc2V0T3JkZXJzKFtcbiAgICAgICAgICB7IHRpdGxlOiAnVyByZWFsaXphY2ppJywgbGluazogbnVsbCwgZGF0YTogb3JkZXJzLmRhdGEgfSxcbiAgICAgICAgXSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGFpbnRzID0gYXdhaXQgZ2V0Q29tcGxhaW50cygpXG4gICAgICBpZiAoIWNvbXBsYWludHMuZXJyb3IpIHtcbiAgICAgICAgc2V0Q29tcGxhaW50cyhbXG4gICAgICAgICAgeyB0aXRsZTogJ1pnxYJvc3pvbmUnLCBsaW5rOiBudWxsLCBkYXRhOiBjb21wbGFpbnRzLmRhdGEgfSxcbiAgICAgICAgXSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERhc2hib2FyZFBhcnQgdGl0bGU9XCJaYWRhbmlhXCIgZGF0YT17dG9kb3N9IGxpbms9XCIvYWRkVG9kb1wiLz5cbiAgICAgIDxEYXNoYm9hcmRQYXJ0IHRpdGxlPVwiWmFtw7N3aWVuaWFcIiBkYXRhPXtvcmRlcnN9IGxpbms9XCIvYWRkT3JkZXJcIi8+XG4gICAgICA8RGFzaGJvYXJkUGFydCB0aXRsZT1cIlJla2xhbWFjamVcIiBkYXRhPXtjb21wbGFpbnRzfSBsaW5rPVwiL2FkZENvbXBsYWludFwiLz5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHtEaXZpZGVyLCBMaXN0fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9iYXNpYy9NZW51SXRlbVwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlcyxcbiAgRGV2aWNlc090aGVyLFxuICBIb21lLFxuICBMaXN0QWx0LFxuICBMb2NhdGlvbk9uLFxuICBNZWV0aW5nUm9vbSxcbiAgU2hvcHBpbmdDYXJ0LFxuICBTdHlsZSxcbiAgVmlld0xpc3QsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0vPlxuICAgICAgPERpdmlkZXIvPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtbXG4gICAgICAgICAge3RpdGxlOiAnU3Ryb25hIGfFgsOzd25hJywgaWNvbjogPEhvbWUvPiwgcGF0aDogJy8nfSxcbiAgICAgICAgICB7dGl0bGU6ICdaYWRhbmlhJywgaWNvbjogPExpc3RBbHQvPiwgcGF0aDogJy90b2Rvcyd9LFxuICAgICAgICAgIHt0aXRsZTogJ1Jla2xhbWFjamUnLCBpY29uOiA8Vmlld0xpc3QvPiwgcGF0aDogJy9yZWtsYW1hY2plJ30sXG4gICAgICAgICAge3RpdGxlOiAnWmFtw7N3aWVuaWEnLCBpY29uOiA8U2hvcHBpbmdDYXJ0Lz4sIHBhdGg6ICcvemFtb3dpZW5pYSd9LFxuICAgICAgICAgIHt0aXRsZTogJ1R5cHkgemFkYcWEJywgaWNvbjogPFN0eWxlLz4sIHBhdGg6ICcvdHlweV96YWRhbid9XG4gICAgICAgIF0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfS8+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgICAgPERpdmlkZXIvPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtbXG4gICAgICAgICAge3RpdGxlOiAnTG9rYWxpemFjamUnLCBpY29uOiA8TG9jYXRpb25Pbi8+LCBwYXRoOiAnL2xva2FsaXphY2plJ30sXG4gICAgICAgICAge3RpdGxlOiAnSGFsZScsIGljb246IDxNZWV0aW5nUm9vbS8+LCBwYXRoOiAnL2hhbGUnfSxcbiAgICAgICAgICB7dGl0bGU6ICdHcnVweSBtYXN6eW4nLCBpY29uOiA8RGV2aWNlc090aGVyLz4sIHBhdGg6ICcvZ3J1cHlfbWFzenluJ30sXG4gICAgICAgICAge3RpdGxlOiAnTWFzenlueScsIGljb246IDxEZXZpY2VzLz4sIHBhdGg6ICcvbWFzenlueSd9XG4gICAgICAgIF0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfS8+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgJy4uL0FwcC5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXROZXh0VG9kb3NUeXBlc09iamVjdHMgfSBmcm9tICcuLi9hcGkvVG9kb3MnXG5pbXBvcnQgVG9kb3NQYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb3NQYXJ0J1xuXG5mdW5jdGlvbiBUb2RheSgpIHtcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCksXG4gICAgICBkYXRlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSArICctJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLScgKyB0b2RheS5nZXREYXRlKClcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0V2VlayA9IGF3YWl0IGdldE5leHRUb2Rvc1R5cGVzT2JqZWN0cyhkYXRlKVxuICAgICAgaWYgKCFuZXh0V2Vlay5lcnJvcikge1xuICAgICAgICBzZXRTdGF0ZShuZXh0V2Vlay5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIE9iamVjdC5lbnRyaWVzKHN0YXRlKS5tYXAoKFtrZXksIGl0ZW1dKSA9PiAoXG4gICAgICA8VG9kb3NQYXJ0IGtleT17a2V5fSBkYXRhPXtpdGVtfSB0aXRsZT17a2V5fSAvPlxuICAgICkpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlcbiIsImltcG9ydCAnLi4vQXBwLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldE92ZXJkdWVUb2Rvc1R5cGVzT2JqZWN0cyB9IGZyb20gJy4uL2FwaS9Ub2RvcydcbmltcG9ydCBUb2Rvc1BhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2Rvc1BhcnQnXG5cbmZ1bmN0aW9uIE92ZXJkdWUoKSB7XG4gIGNvbnN0IFtvdmVyZHVlT2JqZWN0cywgc2V0T3ZlcmR1ZU9iamVjdF0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCksXG4gICAgICBkYXRlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSArICctJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLScgKyB0b2RheS5nZXREYXRlKCk7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgb3ZlcmR1ZVRvZG9zID0gYXdhaXQgZ2V0T3ZlcmR1ZVRvZG9zVHlwZXNPYmplY3RzKGRhdGUpXG4gICAgICBpZiAoIW92ZXJkdWVUb2Rvcy5lcnJvcikge1xuICAgICAgICBzZXRPdmVyZHVlT2JqZWN0KG92ZXJkdWVUb2Rvcy5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgT2JqZWN0LmVudHJpZXMob3ZlcmR1ZU9iamVjdHMpLm1hcCgoW2tleSwgaXRlbV0pID0+IChcbiAgICAgIDxUb2Rvc1BhcnQga2V5PXtrZXl9IGRhdGE9e2l0ZW19IHRpdGxlPXtrZXl9IC8+XG4gICAgKSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVyZHVlXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgT3ZlcmR1ZSBmcm9tICcuL092ZXJkdWUnXG5pbXBvcnQgVG9kYXkgZnJvbSAnLi9Ub2RheSdcbmltcG9ydCBOZXh0V2VlayBmcm9tICcuL05leHRXZWVrJ1xuaW1wb3J0IEFkZFRvZG8gZnJvbSAnLi9BZGRUb2RvJ1xuaW1wb3J0IEFkZE9yZGVyIGZyb20gJy4vQWRkT3JkZXInXG5pbXBvcnQgQWRkQ29tcGxhaW50IGZyb20gJy4vQWRkQ29tcGxhaW50J1xuaW1wb3J0IFRvZG9zIGZyb20gJy4vVG9kb3MnXG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICB9LFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxuICAgIH0sXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGRyYXdlclBhcGVyOiB7XG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gUGFnZUxheW91dChwcm9wcykge1xuICBjb25zdCB7IHdpbmRvdyB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHdpbmRvdyAhPT0gdW5kZWZpbmVkID8gKCkgPT4gd2luZG93KCkuZG9jdW1lbnQuYm9keSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XG4gICAgICAgICAgICBTeXN0ZW0gemFyesSFZHphbmlhIHV0cnp5bWFuaWEgcnVjaHVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfSBhcmlhLWxhYmVsPVwibWFpbGJveCBmb2xkZXJzXCI+XG4gICAgICAgICAgey8qIFRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgc3dhcHBlZCB3aXRoIGpzIHRvIGF2b2lkIFNFTyBkdXBsaWNhdGlvbiBvZiBsaW5rcy4gKi99XG4gICAgICAgICAgPEhpZGRlbiBzbVVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICAgIGNvbnRhaW5lcj17Y29udGFpbmVyfVxuICAgICAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcbiAgICAgICAgICAgICAgYW5jaG9yPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0J31cbiAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSwgLy8gQmV0dGVyIG9wZW4gcGVyZm9ybWFuY2Ugb24gbW9iaWxlLlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudS8+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICA8SGlkZGVuIHhzRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxuICAgICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51Lz5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9IC8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJz5cbiAgICAgICAgICAgICAgPERhc2hib2FyZC8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9vdmVyZHVlJz5cbiAgICAgICAgICAgICAgPE92ZXJkdWUvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3RvZGF5XCI+XG4gICAgICAgICAgICAgIDxUb2RheS8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV4dFdlZWtcIj5cbiAgICAgICAgICAgICAgPE5leHRXZWVrLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZGRUb2RvXCI+XG4gICAgICAgICAgICAgIDxBZGRUb2RvLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZGRPcmRlclwiPlxuICAgICAgICAgICAgICA8QWRkT3JkZXIvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkZENvbXBsYWludFwiPlxuICAgICAgICAgICAgICA8QWRkQ29tcGxhaW50Lz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi90b2Rvc1wiPlxuICAgICAgICAgICAgICA8VG9kb3MvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblBhZ2VMYXlvdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSW5qZWN0ZWQgYnkgdGhlIGRvY3VtZW50YXRpb24gdG8gd29yayBpbiBhbiBpZnJhbWUuXG4gICAqIFlvdSB3b24ndCBuZWVkIGl0IG9uIHlvdXIgcHJvamVjdC5cbiAgICovXG4gIHdpbmRvdzogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0O1xuIiwiaW1wb3J0ICcuLi9BcHAuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0VG9kYXlUb2Rvc1R5cGVzT2JqZWN0cyB9IGZyb20gJy4uL2FwaS9Ub2RvcydcbmltcG9ydCBUb2Rvc1BhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2Rvc1BhcnQnXG5cbmZ1bmN0aW9uIFRvZGF5KCkge1xuICBjb25zdCBbdG9kYXksIHNldFRvZGF5XSA9IHVzZVN0YXRlKFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCksXG4gICAgICBkYXRlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSArICctJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLScgKyB0b2RheS5nZXREYXRlKCk7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdG9kYXlUb2RvcyA9IGF3YWl0IGF3YWl0IGdldFRvZGF5VG9kb3NUeXBlc09iamVjdHMoZGF0ZSlcbiAgICAgIGlmKCF0b2RheVRvZG9zLmVycm9yKXtcbiAgICAgICAgc2V0VG9kYXkodG9kYXlUb2Rvcy5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIE9iamVjdC5lbnRyaWVzKHRvZGF5KS5tYXAoKFtrZXksIGl0ZW1dKSA9PiAoXG4gICAgICA8VG9kb3NQYXJ0IGtleT17a2V5fSBkYXRhPXtpdGVtfSB0aXRsZT17a2V5fSAvPlxuICAgICkpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFRvZG9zQnlPYmplY3RBbmRUeXBlIH0gZnJvbSAnLi4vYXBpL1RvZG9zJ1xuaW1wb3J0IFRvZG9zUGFydCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9zUGFydCdcbmltcG9ydCB7Q2lyY3VsYXJQcm9ncmVzc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKCkge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0b2Rvc0xpc3QgPSBhd2FpdCBnZXRUb2Rvc0J5T2JqZWN0QW5kVHlwZSgpXG4gICAgICBpZiAoIXRvZG9zTGlzdC5lcnJvcikge1xuICAgICAgICBzZXRUb2Rvcyh0b2Rvc0xpc3QuZGF0YSlcbiAgICAgIH1cblxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgICAgdG9kb3MgPyBPYmplY3QuZW50cmllcyh0b2RvcykubWFwKChba2V5LCBpdGVtXSkgPT4gKFxuICAgICAgICA8VG9kb3NQYXJ0IGtleT17a2V5fSB0aXRsZT17a2V5fSBkYXRhPXtpdGVtfSAvPlxuICAgICAgKSkgOiA8Q2lyY3VsYXJQcm9ncmVzcy8+XG4gIClcbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi1iZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLWJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW4tc2cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtbXhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy1teC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL29jLWxuY1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1tb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLW1vLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=