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
      register = _useForm.register;

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "name",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Numer seryjny"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "serialNumber",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "objectAddress",
    ref: register
  }, objectAddressList && objectAddressList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Hala / Kurnik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "hall",
    ref: register
  }, hallList && hallList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Grupa maszyn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "machinesGroups",
    ref: register
  }, machinesGroupsList && machinesGroupsList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item.id,
      value: item['@id']
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "title",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "description",
    ref: register()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "date",
    id: "standard-basic",
    ref: register(),
    type: "date"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "repeatTime",
    id: "standard-basic",
    ref: register({
      valueAsNumber: true
    }),
    type: "number"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Lokalizacja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "objectAddress",
    ref: register()
  }, objectAddressList && objectAddressList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Maszyna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "machine",
    ref: register()
  }, machineList && machineList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "Typ zadania"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "todoType",
    ref: register()
  }, todoTypeList && todoTypeList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    id: "demo-simple-select-label"
  }, "W\u0142a\u015Bciciel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: "owner",
    ref: register()
  }, ownerList && ownerList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: item['@id'],
      value: item['@id']
    }, item.firstname);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvQmFzaWNVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9Db21wbGFpbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvSGFsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9NYWNoaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL01hY2hpbmVzR3JvdXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvT2JqZWN0c0FkZHJlc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL09yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL1Jlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9Ub2RvVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpL1RvZG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRGFzaGJvcmRQYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudGl0eUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRpdHlTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvZG9zUGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNpYy9DYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Jhc2ljL0NhcmRTdWJ0aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNpYy9MaXN0Qm9keS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNpYy9NZW51SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL0FkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Db21wbGFpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvRm9ybVBhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9IYWxsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvTWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmVHcm91cHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9PYmplY3RBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9Ub2RvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vYmFzaWMvVG9kb1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0FkZENvbXBsYWludC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQWRkT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTmV4dFdlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL092ZXJkdWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1BhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1RvZGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQVBJX1VSTCIsIkhFQURFUlMiLCJnZXRDb21wbGFpbnRzIiwicmVzb2x2ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJwb3N0TmV3Q29tcGxhaW50cyIsInBvc3QiLCJoZWFkZXJzIiwiZ2V0SGFsbHMiLCJwb3N0TmV3SGFsbCIsImdldE1hY2hpbmVzIiwicG9zdE5ld01hY2hpbmVzIiwiZ2V0TWFjaGluZXNHcm91cHMiLCJnZXRPYmplY3RzQWRkcmVzc2VzIiwibmV3T2JqZWN0QWRkcmVzcyIsImdldE9yZGVycyIsInByb21pc2UiLCJyZXNvbHZlZCIsImVycm9yIiwiZ2V0VG9kb1R5cGUiLCJnZXRUb2RheVRvZG9zIiwiZGF0ZSIsImdldE9iamVjdFRvZG9zIiwib2JqZWN0QWRkcmVzcyIsImdldFRvZG9zQnlPYmplY3RBbmRUeXBlIiwiZ2V0T3ZlcmR1ZVRvZG9zIiwiZ2V0TmV4dFdlZWtUb2RvcyIsImdldFRvZGF5VG9kb3NUeXBlc09iamVjdHMiLCJnZXRPdmVyZHVlVG9kb3NUeXBlc09iamVjdHMiLCJnZXROZXh0VG9kb3NUeXBlc09iamVjdHMiLCJwb3N0TmV3VG9kbyIsImdldFVzZXJzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZmxleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYWluIiwibWFyZ2luIiwiZmxleFdyYXAiLCJEYXNoYm9hcmRQYXJ0IiwidGl0bGUiLCJsaW5rIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwidmlzaWJpbGl0eSIsInNldFZpc2liaWxpdHkiLCJ0b2dnbGVWaXNpYmlsaXR5IiwibWFwIiwiaXRlbSIsImtleSIsImNhcmQiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImNvbnRlbnQiLCJkZXRhaWxzIiwiYWxpZ25Db250ZW50IiwiZm9udFNpemUiLCJFbnRpdHlBbGwiLCJoZWFkZXIiLCJFbnRpdHlTdW1tYXJ5Iiwic2xpY2UiLCJUb2Rvc1BhcnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiQ2FyZEhlYWRlciIsIkNhcmRTdWJ0aXRsZSIsImhlYWRpbmciLCJ0eXBvZ3JhcGh5IiwicHhUb1JlbSIsImZsZXhCYXNpcyIsImZsZXhTaHJpbmsiLCJsaXN0IiwicGFkZGluZyIsIkxpc3RCb2R5IiwiUmVhY3QiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsImlzRXhwYW5kZWQiLCJzdXBwbGllciIsIk1vbWVudCIsImZvcm1hdCIsImRlc2NyaXB0aW9uIiwiTWVudUl0ZW0iLCJwYXRoIiwiaWNvbiIsIkFkZEZvcm0iLCJmb3JtIiwiZm9ybXMiLCJyb290Iiwic3BhY2luZyIsIkNvbXBsYWludCIsInVzZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsIm1hY2hpbmVMaXN0Iiwic2V0TWFjaGluZUxpc3QiLCJvblN1Ym1pdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0RGF0YSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsIm1hY2hpbmVzIiwiaWQiLCJuYW1lIiwiRm9ybSIsIkZvcm1QYXJ0IiwiSGFsbCIsIm9iamVjdEFkZHJlc3NMaXN0Iiwic2V0T2JqZWN0QWRkcmVzc0xpc3QiLCJNYWNoaW5lIiwiY29uc29sZSIsImxvZyIsImhhbGxMaXN0Iiwic2V0SGFsbExpc3QiLCJtYWNoaW5lc0dyb3Vwc0xpc3QiLCJzZXRNYWNoaW5lc0dyb3Vwc0xpc3QiLCJoYWxscyIsIm1hY2hpbmVHcm91cHMiLCJNYWNoaW5lR3JvdXBzIiwiY29udHJvbCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJzaHJpbmsiLCJPYmplY3RBZGRyZXNzIiwibmV3T2JqZWN0IiwiT3JkZXIiLCJUb2RvIiwidG9kb1R5cGVMaXN0Iiwic2V0VG9kb1R5cGVMaXN0Iiwib3duZXJMaXN0Iiwic2V0T3duZXJMaXN0IiwidG9kb1R5cGVzIiwidXNlcnMiLCJ2YWx1ZUFzTnVtYmVyIiwiZmlyc3RuYW1lIiwiVG9kb1R5cGUiLCJBZGRDb21wbGFpbnQiLCJBZGRPcmRlciIsIkFkZFRvZG8iLCJEYXNoYm9hcmQiLCJ0b2RvcyIsInNldFRvZG9zIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiY29tcGxhaW50cyIsInNldENvbXBsYWludHMiLCJ0b2RheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIm92ZXJkdWUiLCJuZXh0V2VlayIsInRvb2xiYXIiLCJtaXhpbnMiLCJNZW51IiwiaW5kZXgiLCJUb2RheSIsInN0YXRlIiwic2V0U3RhdGUiLCJPdmVyZHVlIiwib3ZlcmR1ZU9iamVjdHMiLCJzZXRPdmVyZHVlT2JqZWN0Iiwib3ZlcmR1ZVRvZG9zIiwiZHJhd2VyV2lkdGgiLCJkcmF3ZXIiLCJicmVha3BvaW50cyIsInVwIiwiYXBwQmFyIiwibWFyZ2luTGVmdCIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsImRyYXdlclBhcGVyIiwiZmxleEdyb3ciLCJQYWdlTGF5b3V0IiwicHJvcHMiLCJ3aW5kb3ciLCJ1c2VUaGVtZSIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwiaGFuZGxlRHJhd2VyVG9nZ2xlIiwiY29udGFpbmVyIiwidW5kZWZpbmVkIiwiYm9keSIsImRpcmVjdGlvbiIsInBhcGVyIiwia2VlcE1vdW50ZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic2V0VG9kYXkiLCJ0b2RheVRvZG9zIiwiVG9kb3MiLCJ0b2Rvc0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLDRDQUFELENBQU8sVUFBUCxxQkFDSSwyREFBQyw0REFBRCxPQURKLENBREosRUFJSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSkosRTs7Ozs7Ozs7Ozs7QUNKQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBRUEsSUFBTUMsT0FBTyxHQUFHO0FBQUMsa0JBQWdCO0FBQWpCLENBQWhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTtBQUVPLFNBQWVDLGFBQXRCO0FBQUE7QUFBQTs7OzJFQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNRQyx3REFBTyxDQUFDQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQ2hCTCxpREFEZ0Isa0JBR2xCTSxJQUhrQixDQUdiLFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVMsY0FBVCxDQUFKO0FBQUEsYUFIVSxDQUFELENBRGY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBT0EsU0FBZUMsaUJBQXRCO0FBQUE7QUFBQTs7OytFQUFPLGtCQUFpQ0QsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1FMLHdEQUFPLENBQUNDLDRDQUFLLENBQUNNLElBQU4sV0FDZFYsaURBRGMsa0JBRWpCUSxJQUZpQixFQUdqQjtBQUFDRyxxQkFBTyxFQUFFO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4vanMvcGFnZXMvUGFnZUxheW91dFwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxQYWdlTGF5b3V0Lz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9ICcvYXBpJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUlMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ30iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBsYWludHMoKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS9jb21wbGFpbnRzYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TmV3Q29tcGxhaW50cyhkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9jb21wbGFpbnRzYCxcbiAgICAgIGRhdGEsXG4gICAgICB7aGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdhY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbid9fVxuICApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAnLi9SZXNvbHZlJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vQmFzaWNVcmwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIYWxscygpIHtcbiAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgIGAke0FQSV9VUkx9L2hhbGxzYFxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TmV3SGFsbChkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9oYWxsc2AsXG4gICAgICBkYXRhLFxuICAgICAge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nfX1cbiAgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1hY2hpbmVzKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vbWFjaGluZXNgXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3ROZXdNYWNoaW5lcyhkYXRhKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLnBvc3QoXG4gICAgICBgJHtBUElfVVJMfS9tYWNoaW5lc2AsXG4gICAgICBkYXRhLFxuICAgICAge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nfX1cbiAgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL0Jhc2ljVXJsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWFjaGluZXNHcm91cHMoKSB7XG4gIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICBgJHtBUElfVVJMfS9tYWNoaW5lc19ncm91cHNgXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJy4vUmVzb2x2ZSdcbmltcG9ydCB7IEFQSV9VUkwsIEhFQURFUlMgfSBmcm9tICcuL0Jhc2ljVXJsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T2JqZWN0c0FkZHJlc3NlcygpIHtcbiAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgIGAke0FQSV9VUkx9L29iamVjdF9hZGRyZXNzZXNgXG4gIClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5ld09iamVjdEFkZHJlc3MoZGF0YSkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5wb3N0KFxuICAgIGAke0FQSV9VUkx9L29iamVjdF9hZGRyZXNzZXNgLFxuICAgIHsgZGF0YSB9LFxuICAgIHtoZWFkZXJzOiBIRUFERVJTfVxuICApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQge0FQSV9VUkx9IGZyb20gJy4vQmFzaWNVcmwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS9vcmRlcnNgXG4gICAgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlKHByb21pc2UpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSB7XG4gICAgZGF0YTogbnVsbCxcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHRyeSB7XG4gICAgcmVzb2x2ZWQuZGF0YSA9IGF3YWl0IHByb21pc2U7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJlc29sdmVkLmVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlZDtcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9CYXNpY1VybCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvZG9UeXBlKCkge1xuICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgYCR7QVBJX1VSTH0vdG9kb190eXBlc2BcbiAgKVxuICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAnLi9SZXNvbHZlJ1xuaW1wb3J0IHtBUElfVVJMfSBmcm9tICcuL0Jhc2ljVXJsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlUb2RvcyhkYXRlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvcz9kYXRlPSR7ZGF0ZX0mZXhpc3RzW2VuZERhdGVdPWZhbHNlYFxuICAgIClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPYmplY3RUb2RvcyhvYmplY3RBZGRyZXNzKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvcz9leGlzdFtlbmREYXRlXT1mYWxzZSZvYmplY3RBZGRyZXNzPSR7b2JqZWN0QWRkcmVzc31gXG4gICAgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvZG9zQnlPYmplY3RBbmRUeXBlKCkge1xuICAgIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICAgICAgYCR7QVBJX1VSTH0vdG9kb3Mvb2JqZWN0L2RldGFpbHNgXG4gICAgKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3ZlcmR1ZVRvZG9zKGRhdGUpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgICAgIGAke0FQSV9VUkx9L3RvZG9zP2RhdGVbc3RyaWN0bHlfYmVmb3JlXT0ke2RhdGV9JmV4aXN0c1tlbmREYXRlXT1mYWxzZWBcbiAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dFdlZWtUb2RvcyhkYXRlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvcz9kYXRlW3N0cmljdGx5X2FmdGVyXT0ke2RhdGV9JmV4aXN0c1tlbmREYXRlXT1mYWxzZWBcbiAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlUb2Rvc1R5cGVzT2JqZWN0cyhkYXRlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MuZ2V0KFxuICAgICAgICBgJHtBUElfVVJMfS90b2Rvcy90b2RheS9kZXRhaWxzLyR7ZGF0ZX1gLFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPdmVyZHVlVG9kb3NUeXBlc09iamVjdHMoZGF0ZSkge1xuICAgIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICAgICAgYCR7QVBJX1VSTH0vdG9kb3Mvb3ZlcmR1ZS9kZXRhaWxzLyR7ZGF0ZX1gLFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXh0VG9kb3NUeXBlc09iamVjdHMoZGF0ZSkge1xuICAgIHJldHVybiBhd2FpdCByZXNvbHZlKGF4aW9zLmdldChcbiAgICAgICAgYCR7QVBJX1VSTH0vdG9kb3MvbmV4dC9kZXRhaWxzLyR7ZGF0ZX1gLFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TmV3VG9kbyhkYXRhKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmUoYXhpb3MucG9zdChcbiAgICAgICAgYCR7QVBJX1VSTH0vdG9kb3NgLFxuICAgICAgICBkYXRhLFxuICAgICAgICB7aGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdhY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbid9fVxuICAgIClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKSlcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICcuL1Jlc29sdmUnXG5pbXBvcnQge0FQSV9VUkx9IGZyb20gJy4vQmFzaWNVcmwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VycygpIHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZShheGlvcy5nZXQoXG4gICAgICAgIGAke0FQSV9VUkx9L3VzZXJzYFxuICAgIClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSkpXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgeyBFbnRpdHlTdW1tYXJ5IH0gZnJvbSAnLi9FbnRpdHlTdW1tYXJ5J1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgQWRkLCBWaXNpYmlsaXR5LCBWaXNpYmlsaXR5T2ZmIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIG1haW46IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIG1hcmdpbjogJzF2dyAwLjV2dycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFydCh7IHRpdGxlLCBkYXRhLCBsaW5rIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmlsaXR5KCF2aXNpYmlsaXR5KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3RJdGVtIGRpdmlkZXI+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGl0bGV9IC8+XG4gICAgICAgIDxMaW5rIHRvPXtsaW5rfT48QWRkIC8+PC9MaW5rPlxuICAgICAgICB7dmlzaWJpbGl0eSA/IDxWaXNpYmlsaXR5IG9uQ2xpY2s9e3RvZ2dsZVZpc2liaWxpdHl9IC8+IDogPFZpc2liaWxpdHlPZmYgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0gLz59XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAge3Zpc2liaWxpdHkgJiZcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1haW59ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgIDxFbnRpdHlTdW1tYXJ5IGtleT17a2V5fSBkYXRhPXtpdGVtfSBoZWFkZXI9J0xpc3RhJyAvPlxuICAgICAgICApKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgfVxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIExpc3QsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0J1xuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJy4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IENhcmRTdWJ0aXRsZSB9IGZyb20gJy4vYmFzaWMvQ2FyZFN1YnRpdGxlJ1xuaW1wb3J0IHsgTGlzdEJvZHkgfSBmcm9tICcuL2Jhc2ljL0xpc3RCb2R5J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMyJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBFbnRpdHlBbGwgPSAoeyBkYXRhLCBoZWFkZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9e2RhdGEudGl0bGV9IC8+XG4gICAgICAgICAge2RhdGEubGluayAmJlxuICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgPExpbmsgdG89e2RhdGEubGlua30+PE1vcmVWZXJ0SWNvbiAvPjwvTGluaz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRTdWJ0aXRsZSBoZWFkZXI9e2hlYWRlcn0gLz5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICA8TGlzdCBrZXk9e2tleX0+XG4gICAgICAgICAgICA8TGlzdEJvZHkgZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICA8L0xpc3Q+XG5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIExpc3QsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0J1xuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJy4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IENhcmRTdWJ0aXRsZSB9IGZyb20gJy4vYmFzaWMvQ2FyZFN1YnRpdGxlJ1xuaW1wb3J0IHsgTGlzdEJvZHkgfSBmcm9tICcuL2Jhc2ljL0xpc3RCb2R5J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogJzMyJScsXG4gICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBFbnRpdHlTdW1tYXJ5ID0gKHsgZGF0YSwgaGVhZGVyIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXRhaWxzfSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPXtkYXRhLnRpdGxlfSAvPlxuICAgICAgICAgIHtkYXRhLmxpbmsgJiZcbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtkYXRhLmxpbmt9PjxNb3JlVmVydEljb24gLz48L0xpbms+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDYXJkU3VidGl0bGUgaGVhZGVyPXtoZWFkZXJ9IC8+XG4gICAgICAgIHtkYXRhLmRhdGEuc2xpY2UoMCwgMykubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICA8TGlzdCBrZXk9e2tleX0+XG4gICAgICAgICAgICA8TGlzdEJvZHkgZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICA8L0xpc3Q+XG5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgRW50aXR5QWxsIH0gZnJvbSAnLi9FbnRpdHlBbGwnXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzLCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBBZGQsIFZpc2liaWxpdHksIFZpc2liaWxpdHlPZmYgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbWFpbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgbWFyZ2luOiAnMXZ3IDAuNXZ3JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2Rvc1BhcnQoeyB0aXRsZSwgZGF0YSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJpbGl0eSghdmlzaWJpbGl0eSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlzdEl0ZW0gZGl2aWRlcj5cbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0aXRsZX0gLz5cbiAgICAgICAgPExpbmsgdG89XCIvYWRkVG9kb1wiPjxBZGQgLz48L0xpbms+XG4gICAgICAgIHt2aXNpYmlsaXR5ID8gPFZpc2liaWxpdHkgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0gLz4gOiA8VmlzaWJpbGl0eU9mZiBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fSAvPn1cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICB7dmlzaWJpbGl0eSAmJlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWFpbn0gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgIHtPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIGl0ZW1dKSA9PiAoXG4gICAgICAgICAgPEVudGl0eUFsbCBrZXk9e2tleX0gZGF0YT17aXRlbX0gaGVhZGVyPXtrZXl9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICB9XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IENhcmRIZWFkZXIgPSAoe2RhdGF9KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIHtkYXRhfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ2FyZFN1YnRpdGxlID0gKHsgaGVhZGVyIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICB7aGVhZGVyfVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgICBBY2NvcmRpb24sXG4gICAgQWNjb3JkaW9uRGV0YWlscyxcbiAgICBBY2NvcmRpb25TdW1tYXJ5LFxuICAgIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIGhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gICAgICAgIGZsZXhCYXNpczogJzEwMCUnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcwIDAgMXZ3IDAnLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBMaXN0Qm9keSA9ICh7ZGF0YX0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xuICAgICAgICBzZXRFeHBhbmRlZChpc0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxuICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwxJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24vPn1cbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYmgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDFiaC1oZWFkZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlICYmIGRhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3VwcGxpZXIgJiYgZGF0YS5zdXBwbGllcn1cbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNb21lbnQoZGF0YS5kYXRlKS5mb3JtYXQoJ0xMJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvPlxuICAgICk7XG59IiwiaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0oe2l0ZW19KSB7XG4gIHJldHVybihcbiAgICA8TGluayB0bz17aXRlbS5wYXRofT5cbiAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtSWNvbj57aXRlbS5pY29ufTwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0udGl0bGV9Lz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaW5rPlxuICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcbmltcG9ydCBGb3JtUGFydCBmcm9tICcuL0Zvcm1QYXJ0J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIG1haW46IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIG1hcmdpbjogJzF2dyAwLjV2dycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRm9ybSh7IGZvcm0sIGZvcm1zIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tYWlufSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2Ake2NsYXNzZXMuY2FyZH1gfT5cbiAgICAgICAge2Zvcm19XG4gICAgICA8L1BhcGVyPlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmNhcmR9YH0+XG4gICAgICAgICAgPEZvcm1QYXJ0IGZvcm1zPXtmb3Jtc30vPlxuICAgICAgICA8L1BhcGVyPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7QnV0dG9uLCBDYXJkQ29udGVudCwgQ2FyZCwgSW5wdXRMYWJlbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQge0NhcmRIZWFkZXJ9IGZyb20gJy4uLy4uL2Jhc2ljL0NhcmRIZWFkZXInXG5pbXBvcnQge2dldE1hY2hpbmVzfSBmcm9tICcuLi8uLi8uLi9hcGkvTWFjaGluZXMnXG5pbXBvcnQge3Bvc3ROZXdDb21wbGFpbnRzfSBmcm9tIFwiLi4vLi4vLi4vYXBpL0NvbXBsYWludHNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzI1Y2gnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB3aWR0aDogJzMwJScsXG4gICAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgICAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgfSxcbiAgICBmbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGRldGFpbHM6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBsYWludCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgcmVnaXN0ZXJ9ID0gdXNlRm9ybSgpXG4gICAgY29uc3QgW21hY2hpbmVMaXN0LCBzZXRNYWNoaW5lTGlzdF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHBvc3ROZXdDb21wbGFpbnRzKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hY2hpbmVzID0gYXdhaXQgZ2V0TWFjaGluZXMoKVxuICAgICAgICAgICAgaWYgKCFtYWNoaW5lcy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHNldE1hY2hpbmVMaXN0KG1hY2hpbmVzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiByZWtsYW1hY2rEmVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TmF6d2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhcnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+RG9zdGF3Y2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cHBsaWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+T3BpczwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkRhdGEgemfFgm9zemVuaWE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGluZ0RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5NYXN6eW5hPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWNoaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYWNoaW5lTGlzdCAmJiBtYWNoaW5lTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtWydAaWQnXX0+e2l0ZW0ubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IFZpc2liaWxpdHksIFZpc2liaWxpdHlPZmYgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBpdGVtIH0pIHtcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmlsaXR5KCF2aXNpYmlsaXR5KVxuICB9XG4gIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8TGlzdEl0ZW0gZGl2aWRlcj5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAge3Zpc2liaWxpdHlcbiAgICAgICAgICAgID8gPFZpc2liaWxpdHkgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0gLz5cbiAgICAgICAgICAgIDogPFZpc2liaWxpdHlPZmYgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIHt2aXNpYmlsaXR5ICYmXG4gICAgICAgICAgaXRlbS5kYXRhXG4gICAgICAgIH1cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVBhcnQoeyBmb3JtcyB9KSB7XG5cbiAgcmV0dXJuIChcbiAgICBmb3Jtcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgPEZvcm0ga2V5PXtrZXl9IGl0ZW09e2l0ZW19IC8+XG4gICAgKSlcbiAgKVxufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VGb3JtfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtCdXR0b24sIENhcmRDb250ZW50LCBDYXJkLCBJbnB1dExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7Q2FyZEhlYWRlcn0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7Z2V0T2JqZWN0c0FkZHJlc3Nlc30gZnJvbSAnLi4vLi4vLi4vYXBpL09iamVjdHNBZGRyZXNzZXMnXG5pbXBvcnQge3Bvc3ROZXdIYWxsfSBmcm9tIFwiLi4vLi4vLi4vYXBpL0hhbGxzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgd2lkdGg6ICcyNWNoJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgd2lkdGg6ICczMCUnLFxuICAgICAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnMXZ3IDAnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC41dncnLFxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgIH0sXG4gICAgZmxleDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBkZXRhaWxzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYWxsKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB7aGFuZGxlU3VibWl0LCByZWdpc3Rlcn0gPSB1c2VGb3JtKClcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcG9zdE5ld0hhbGwoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuICAgIGNvbnN0IFtvYmplY3RBZGRyZXNzTGlzdCwgc2V0T2JqZWN0QWRkcmVzc0xpc3RdID0gdXNlU3RhdGUoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0QWRkcmVzcyA9IGF3YWl0IGdldE9iamVjdHNBZGRyZXNzZXMoKVxuICAgICAgICAgICAgaWYgKCFvYmplY3RBZGRyZXNzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0T2JqZWN0QWRkcmVzc0xpc3Qob2JqZWN0QWRkcmVzcy5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPVwiRG9kYWogaGFsxJkgLyBrdXJuaWtcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPk5hendhPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+T3BpczwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TG9rYWxpemFjamE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9iamVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29iamVjdEFkZHJlc3NMaXN0ICYmIG9iamVjdEFkZHJlc3NMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW1bJ0BpZCddfT57aXRlbS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUZvcm19IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0J1dHRvbiwgQ2FyZENvbnRlbnQsIENhcmQsIElucHV0TGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHtDYXJkSGVhZGVyfSBmcm9tICcuLi8uLi9iYXNpYy9DYXJkSGVhZGVyJ1xuaW1wb3J0IHtnZXRPYmplY3RzQWRkcmVzc2VzfSBmcm9tICcuLi8uLi8uLi9hcGkvT2JqZWN0c0FkZHJlc3NlcydcbmltcG9ydCB7Z2V0SGFsbHN9IGZyb20gJy4uLy4uLy4uL2FwaS9IYWxscydcbmltcG9ydCB7Z2V0TWFjaGluZXNHcm91cHN9IGZyb20gJy4uLy4uLy4uL2FwaS9NYWNoaW5lc0dyb3VwcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzI1Y2gnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB3aWR0aDogJzMwJScsXG4gICAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgICAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgfSxcbiAgICBmbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGRldGFpbHM6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hY2hpbmUoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyfSA9IHVzZUZvcm0oKVxuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnN0IFtvYmplY3RBZGRyZXNzTGlzdCwgc2V0T2JqZWN0QWRkcmVzc0xpc3RdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtoYWxsTGlzdCwgc2V0SGFsbExpc3RdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFttYWNoaW5lc0dyb3Vwc0xpc3QsIHNldE1hY2hpbmVzR3JvdXBzTGlzdF0gPSB1c2VTdGF0ZSgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYmplY3RBZGRyZXNzID0gYXdhaXQgZ2V0T2JqZWN0c0FkZHJlc3NlcygpXG4gICAgICAgICAgICBpZiAoIW9iamVjdEFkZHJlc3MuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRPYmplY3RBZGRyZXNzTGlzdChvYmplY3RBZGRyZXNzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbGxzID0gYXdhaXQgZ2V0SGFsbHMoKVxuICAgICAgICAgICAgaWYgKCFoYWxscy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHNldEhhbGxMaXN0KGhhbGxzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hY2hpbmVHcm91cHMgPSBhd2FpdCBnZXRNYWNoaW5lc0dyb3VwcygpXG4gICAgICAgICAgICBpZiAoIW1hY2hpbmVHcm91cHMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRNYWNoaW5lc0dyb3Vwc0xpc3QobWFjaGluZUdyb3Vwcy5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPVwiRG9kYWogbWFzenluxJkgLyB1cnrEhWR6ZW5pZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TmF6d2E8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5OdW1lciBzZXJ5am55PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXJpYWxOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5Mb2thbGl6YWNqYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9iamVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29iamVjdEFkZHJlc3NMaXN0ICYmIG9iamVjdEFkZHJlc3NMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+SGFsYSAvIEt1cm5pazwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hhbGxMaXN0ICYmIGhhbGxMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+R3J1cGEgbWFzenluPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFjaGluZXNHcm91cHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge21hY2hpbmVzR3JvdXBzTGlzdCAmJiBtYWNoaW5lc0dyb3Vwc0xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtWydAaWQnXX0+e2l0ZW0ubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIENhcmRDb250ZW50LCBDYXJkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IConOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogJzI1Y2gnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWNoaW5lR3JvdXBzKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBjb250cm9sIH0gPSB1c2VGb3JtKClcbiAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXRhaWxzfSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhPVwiRG9kYWogZ3J1cMSZIG1hc3p5blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYXp3YVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk9waXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cInNlcmlhbE51bWJlclwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTnVtZXIgc2VyeWpueVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uLCBDYXJkQ29udGVudCwgQ2FyZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJy4uLy4uL2Jhc2ljL0NhcmRIZWFkZXInXG5pbXBvcnQgeyBuZXdPYmplY3RBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vYXBpL09iamVjdHNBZGRyZXNzZXMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgPiAqJzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgd2lkdGg6ICcyNWNoJyxcbiAgICB9LFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHdpZHRoOiAnMzAlJyxcbiAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICBtYXJnaW46ICcxdncgMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41dncnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZmxleDogJzEgMCBhdXRvJyxcbiAgfSxcbiAgZmxleDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2JqZWN0QWRkcmVzcygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgY29udHJvbCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICBjb25zdCBuZXdPYmplY3QgPSBhd2FpdCBuZXdPYmplY3RBZGRyZXNzKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgaWYobmV3T2JqZWN0LmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld09iamVjdC5lcnJvcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld09iamVjdC5kYXRhKVxuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBpZD1cIm9iamVjdC1hZGRyZXNzLWFkZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiBsb2thbGl6YWNqxJlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmF6d2FcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cInN0cmVldFwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVWxpY2FcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cInN0cmVldE51bWJlclwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTnIgZG9tdSAvIG1pZXN6a2FuaWFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOdW1lciB0ZWxlZm9udVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkFkcmVzIGVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIENhcmRDb250ZW50LCBDYXJkLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcbmltcG9ydCB7IGdldE9iamVjdHNBZGRyZXNzZXMgfSBmcm9tICcuLi8uLi8uLi9hcGkvT2JqZWN0c0FkZHJlc3NlcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IConOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogJzI1Y2gnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgY29udHJvbCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICBjb25zdCBbb2JqZWN0QWRkcmVzc0xpc3QsIHNldE9iamVjdEFkZHJlc3NMaXN0XSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG9iamVjdEFkZHJlc3MgPSBhd2FpdCBnZXRPYmplY3RzQWRkcmVzc2VzKClcbiAgICAgIGlmKCFvYmplY3RBZGRyZXNzLmVycm9yKXtcbiAgICAgICAgc2V0T2JqZWN0QWRkcmVzc0xpc3Qob2JqZWN0QWRkcmVzcy5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRldGFpbHN9ICR7Y2xhc3Nlcy5mbGV4fWB9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGE9XCJEb2RhaiBoYWzEmSAvIGt1cm5pa1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYXp3YVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk9waXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cInN1cHBsaWVyXCJcbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTcHJ6ZWRhd2NhXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJvcmRlckRhdGVcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgemFtw7N3aWVuaWFcIlxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICBuYW1lPVwib2JqZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDw+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+TG9rYWxpemFjamE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9iamVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvYmplY3RBZGRyZXNzTGlzdCAmJiBvYmplY3RBZGRyZXNzTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VGb3JtfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCB7SW5wdXRMYWJlbCwgQnV0dG9uLCBDYXJkQ29udGVudCwgQ2FyZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQge0NhcmRIZWFkZXJ9IGZyb20gJy4uLy4uL2Jhc2ljL0NhcmRIZWFkZXInXG5pbXBvcnQge2dldE9iamVjdHNBZGRyZXNzZXN9IGZyb20gJy4uLy4uLy4uL2FwaS9PYmplY3RzQWRkcmVzc2VzJ1xuaW1wb3J0IHtnZXRNYWNoaW5lc30gZnJvbSAnLi4vLi4vLi4vYXBpL01hY2hpbmVzJ1xuaW1wb3J0IHtnZXRUb2RvVHlwZX0gZnJvbSAnLi4vLi4vLi4vYXBpL1RvZG9UeXBlJ1xuaW1wb3J0IHtwb3N0TmV3VG9kb30gZnJvbSAnLi4vLi4vLi4vYXBpL1RvZG9zJ1xuaW1wb3J0IHtnZXRVc2Vyc30gZnJvbSBcIi4uLy4uLy4uL2FwaS9Vc2Vyc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIHdpZHRoOiAnMzAlJyxcbiAgICAgICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAuNXZ3JyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICB9LFxuICAgIGZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgZGV0YWlsczoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyfSA9IHVzZUZvcm0oKVxuICAgIGNvbnN0IFtvYmplY3RBZGRyZXNzTGlzdCwgc2V0T2JqZWN0QWRkcmVzc0xpc3RdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFttYWNoaW5lTGlzdCwgc2V0TWFjaGluZUxpc3RdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFt0b2RvVHlwZUxpc3QsIHNldFRvZG9UeXBlTGlzdF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW293bmVyTGlzdCwgc2V0T3duZXJMaXN0XSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBwb3N0TmV3VG9kbyhKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYmplY3RBZGRyZXNzID0gYXdhaXQgZ2V0T2JqZWN0c0FkZHJlc3NlcygpXG4gICAgICAgICAgICBpZiAoIW9iamVjdEFkZHJlc3MuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRPYmplY3RBZGRyZXNzTGlzdChvYmplY3RBZGRyZXNzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hY2hpbmVzID0gYXdhaXQgZ2V0TWFjaGluZXMoKVxuICAgICAgICAgICAgaWYgKCFtYWNoaW5lcy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHNldE1hY2hpbmVMaXN0KG1hY2hpbmVzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9UeXBlcyA9IGF3YWl0IGdldFRvZG9UeXBlKClcbiAgICAgICAgICAgIGlmICghdG9kb1R5cGVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0VG9kb1R5cGVMaXN0KHRvZG9UeXBlcy5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGdldFVzZXJzKClcbiAgICAgICAgICAgIGlmICghdXNlcnMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRPd25lckxpc3QodXNlcnMuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXRhaWxzfSAke2NsYXNzZXMuZmxleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT0nRG9kYWogemFkYW5pZScvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzdGFuZGFyZC1iYXNpYydcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2RhdGUnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmVwZWF0VGltZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzdGFuZGFyZC1iYXNpYydcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQXNOdW1iZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWwnPkxva2FsaXphY2phPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J29iamVjdEFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvYmplY3RBZGRyZXNzTGlzdCAmJiBvYmplY3RBZGRyZXNzTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW1bJ0BpZCddfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5NYXN6eW5hPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21hY2hpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYWNoaW5lTGlzdCAmJiBtYWNoaW5lTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW1bJ0BpZCddfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD0nZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsJz5UeXAgemFkYW5pYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0b2RvVHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9UeXBlTGlzdCAmJiB0b2RvVHlwZUxpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtWydAaWQnXX0gdmFsdWU9e2l0ZW1bJ0BpZCddfT57aXRlbS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbCc+V8WCYcWbY2ljaWVsPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J293bmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3duZXJMaXN0ICYmIG93bmVyTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW1bJ0BpZCddfSB2YWx1ZT17aXRlbVsnQGlkJ119PntpdGVtLmZpcnN0bmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIENhcmRDb250ZW50LCBDYXJkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnLi4vLi4vYmFzaWMvQ2FyZEhlYWRlcidcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IConOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogJzI1Y2gnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6ICczMCUnLFxuICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgIG1hcmdpbjogJzF2dyAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjV2dycsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvVHlwZSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgY29udHJvbCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGV0YWlsc30gJHtjbGFzc2VzLmZsZXh9YH0+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YT1cIkRvZGFqIHR5cCB6YWRhbmlhXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk5hendhXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiT3Bpc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvQWRkRm9ybSdcbmltcG9ydCBDb21wbGFpbnQgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL0NvbXBsYWludCdcbmltcG9ydCBNYWNoaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9NYWNoaW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRDb21wbGFpbnQoKSB7XG4gIGNvbnN0IGZvcm0gPSA8Q29tcGxhaW50Lz5cbiAgY29uc3QgZm9ybXMgPSBbXG4gICAge1widGl0bGVcIjogXCJNYXN6eW55XCIsXG4gICAgICBcImRhdGFcIjogPE1hY2hpbmUvPn1cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPEFkZEZvcm0gZm9ybT17Zm9ybX0gZm9ybXM9e2Zvcm1zfS8+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9BZGRGb3JtJ1xuaW1wb3J0IE9iamVjdEFkZHJlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL09iamVjdEFkZHJlc3MnXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL09yZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRPcmRlcigpIHtcbiAgY29uc3QgZm9ybSA9IDxPcmRlci8+XG4gIGNvbnN0IGZvcm1zID0gW1xuICAgIHtcInRpdGxlXCI6IFwiTG9rYWxpemFjamFcIixcbiAgICBcImRhdGFcIjogPE9iamVjdEFkZHJlc3MvPn1cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPEFkZEZvcm0gZm9ybT17Zm9ybX0gZm9ybXM9e2Zvcm1zfS8+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvVG9kbydcbmltcG9ydCBPYmplY3RBZGRyZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9PYmplY3RBZGRyZXNzJ1xuaW1wb3J0IE1hY2hpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmUnXG5pbXBvcnQgVG9kb1R5cGUgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL1RvZG9UeXBlJ1xuaW1wb3J0IE1hY2hpbmVHcm91cHMgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Jhc2ljL01hY2hpbmVHcm91cHMnXG5pbXBvcnQgSGFsbCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vYmFzaWMvSGFsbCdcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9iYXNpYy9BZGRGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUb2RvKCkge1xuICBjb25zdCBmb3JtID0gPFRvZG8vPlxuICBjb25zdCBmb3JtcyA9IFtcbiAgICB7XCJ0aXRsZVwiOiBcIkRvZGFqIGxva2FsaXphY2plXCIsIFwiZGF0YVwiOiA8T2JqZWN0QWRkcmVzcy8+fSxcbiAgICB7XCJ0aXRsZVwiOiBcIkRvZGFqIG1hc3p5bmVcIiwgXCJkYXRhXCI6IDxNYWNoaW5lLz59LFxuICAgIHtcInRpdGxlXCI6IFwiRG9kYWogdHlwIHphZGFuaWFcIiwgXCJkYXRhXCI6IDxUb2RvVHlwZS8+fSxcbiAgICB7XCJ0aXRsZVwiOiBcIkRvZGFqIGhhbMSZIC8ga3VybmlrXCIsIFwiZGF0YVwiOiA8SGFsbC8+fSxcbiAgICB7XCJ0aXRsZVwiOiBcIkRvZGFqIGdydXDEmSBtYXN6eW5cIiwgXCJkYXRhXCI6IDxNYWNoaW5lR3JvdXBzLz59XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxBZGRGb3JtIGZvcm09e2Zvcm19IGZvcm1zPXtmb3Jtc30vPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXROZXh0V2Vla1RvZG9zLCBnZXRPdmVyZHVlVG9kb3MsIGdldFRvZGF5VG9kb3MgfSBmcm9tICcuLi9hcGkvVG9kb3MnXG5pbXBvcnQgeyBnZXRDb21wbGFpbnRzIH0gZnJvbSAnLi4vYXBpL0NvbXBsYWludHMnXG5pbXBvcnQgeyBnZXRPcmRlcnMgfSBmcm9tICcuLi9hcGkvT3JkZXJzJ1xuaW1wb3J0IERhc2hib2FyZFBhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9EYXNoYm9yZFBhcnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKCBbXSlcbiAgY29uc3QgW2NvbXBsYWludHMsIHNldENvbXBsYWludHNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdG9kYXkgPSBhd2FpdCBnZXRUb2RheVRvZG9zKGRhdGUpXG4gICAgICBjb25zdCBvdmVyZHVlID0gYXdhaXQgZ2V0T3ZlcmR1ZVRvZG9zKGRhdGUpXG4gICAgICBjb25zdCBuZXh0V2VlayA9IGF3YWl0IGdldE5leHRXZWVrVG9kb3MoZGF0ZSlcbiAgICAgIGlmICghdG9kYXkuZXJyb3IgJiYgIW92ZXJkdWUuZXJyb3IgJiYgIW5leHRXZWVrLmVycm9yKSB7XG4gICAgICAgIHNldFRvZG9zKFtcbiAgICAgICAgICB7IHRpdGxlOiAnWmFsZWfFgmUnLCBsaW5rOiAnL292ZXJkdWUnLCBkYXRhOiBvdmVyZHVlLmRhdGEgfSxcbiAgICAgICAgICB7IHRpdGxlOiAnRHppc2lhaicsIGxpbms6ICcvdG9kYXknLCBkYXRhOiB0b2RheS5kYXRhIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ05hc3TEmXBueSB0eWR6aWXFhCcsIGxpbms6ICcvbmV4dFdlZWsnLCBkYXRhOiBuZXh0V2Vlay5kYXRhIH0sXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgZ2V0T3JkZXJzKClcbiAgICAgIGlmICghb3JkZXJzLmVycm9yKSB7XG4gICAgICAgIHNldE9yZGVycyhbXG4gICAgICAgICAgeyB0aXRsZTogJ1cgcmVhbGl6YWNqaScsIGxpbms6IG51bGwsIGRhdGE6IG9yZGVycy5kYXRhIH0sXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29tcGxhaW50cyA9IGF3YWl0IGdldENvbXBsYWludHMoKVxuICAgICAgaWYgKCFjb21wbGFpbnRzLmVycm9yKSB7XG4gICAgICAgIHNldENvbXBsYWludHMoW1xuICAgICAgICAgIHsgdGl0bGU6ICdaZ8WCb3N6b25lJywgbGluazogbnVsbCwgZGF0YTogY29tcGxhaW50cy5kYXRhIH0sXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEYXNoYm9hcmRQYXJ0IHRpdGxlPVwiWmFkYW5pYVwiIGRhdGE9e3RvZG9zfSBsaW5rPVwiL2FkZFRvZG9cIi8+XG4gICAgICA8RGFzaGJvYXJkUGFydCB0aXRsZT1cIlphbcOzd2llbmlhXCIgZGF0YT17b3JkZXJzfSBsaW5rPVwiL2FkZE9yZGVyXCIvPlxuICAgICAgPERhc2hib2FyZFBhcnQgdGl0bGU9XCJSZWtsYW1hY2plXCIgZGF0YT17Y29tcGxhaW50c30gbGluaz1cIi9hZGRDb21wbGFpbnRcIi8+XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7RGl2aWRlciwgTGlzdH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYmFzaWMvTWVudUl0ZW1cIjtcbmltcG9ydCB7XG4gIERldmljZXMsXG4gIERldmljZXNPdGhlcixcbiAgSG9tZSxcbiAgTGlzdEFsdCxcbiAgTG9jYXRpb25PbixcbiAgTWVldGluZ1Jvb20sXG4gIFNob3BwaW5nQ2FydCxcbiAgU3R5bGUsXG4gIFZpZXdMaXN0LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9Lz5cbiAgICAgIDxEaXZpZGVyLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7W1xuICAgICAgICAgIHt0aXRsZTogJ1N0cm9uYSBnxYLDs3duYScsIGljb246IDxIb21lLz4sIHBhdGg6ICcvJ30sXG4gICAgICAgICAge3RpdGxlOiAnWmFkYW5pYScsIGljb246IDxMaXN0QWx0Lz4sIHBhdGg6ICcvdG9kb3MnfSxcbiAgICAgICAgICB7dGl0bGU6ICdSZWtsYW1hY2plJywgaWNvbjogPFZpZXdMaXN0Lz4sIHBhdGg6ICcvcmVrbGFtYWNqZSd9LFxuICAgICAgICAgIHt0aXRsZTogJ1phbcOzd2llbmlhJywgaWNvbjogPFNob3BwaW5nQ2FydC8+LCBwYXRoOiAnL3phbW93aWVuaWEnfSxcbiAgICAgICAgICB7dGl0bGU6ICdUeXB5IHphZGHFhCcsIGljb246IDxTdHlsZS8+LCBwYXRoOiAnL3R5cHlfemFkYW4nfVxuICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gaXRlbT17aXRlbX0vPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICAgIDxEaXZpZGVyLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7W1xuICAgICAgICAgIHt0aXRsZTogJ0xva2FsaXphY2plJywgaWNvbjogPExvY2F0aW9uT24vPiwgcGF0aDogJy9sb2thbGl6YWNqZSd9LFxuICAgICAgICAgIHt0aXRsZTogJ0hhbGUnLCBpY29uOiA8TWVldGluZ1Jvb20vPiwgcGF0aDogJy9oYWxlJ30sXG4gICAgICAgICAge3RpdGxlOiAnR3J1cHkgbWFzenluJywgaWNvbjogPERldmljZXNPdGhlci8+LCBwYXRoOiAnL2dydXB5X21hc3p5bid9LFxuICAgICAgICAgIHt0aXRsZTogJ01hc3p5bnknLCBpY29uOiA8RGV2aWNlcy8+LCBwYXRoOiAnL21hc3p5bnknfVxuICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gaXRlbT17aXRlbX0vPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0ICcuLi9BcHAuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0TmV4dFRvZG9zVHlwZXNPYmplY3RzIH0gZnJvbSAnLi4vYXBpL1RvZG9zJ1xuaW1wb3J0IFRvZG9zUGFydCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9zUGFydCdcblxuZnVuY3Rpb24gVG9kYXkoKSB7XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dFdlZWsgPSBhd2FpdCBnZXROZXh0VG9kb3NUeXBlc09iamVjdHMoZGF0ZSlcbiAgICAgIGlmICghbmV4dFdlZWsuZXJyb3IpIHtcbiAgICAgICAgc2V0U3RhdGUobmV4dFdlZWsuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBPYmplY3QuZW50cmllcyhzdGF0ZSkubWFwKChba2V5LCBpdGVtXSkgPT4gKFxuICAgICAgPFRvZG9zUGFydCBrZXk9e2tleX0gZGF0YT17aXRlbX0gdGl0bGU9e2tleX0gLz5cbiAgICApKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5XG4iLCJpbXBvcnQgJy4uL0FwcC5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRPdmVyZHVlVG9kb3NUeXBlc09iamVjdHMgfSBmcm9tICcuLi9hcGkvVG9kb3MnXG5pbXBvcnQgVG9kb3NQYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb3NQYXJ0J1xuXG5mdW5jdGlvbiBPdmVyZHVlKCkge1xuICBjb25zdCBbb3ZlcmR1ZU9iamVjdHMsIHNldE92ZXJkdWVPYmplY3RdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG92ZXJkdWVUb2RvcyA9IGF3YWl0IGdldE92ZXJkdWVUb2Rvc1R5cGVzT2JqZWN0cyhkYXRlKVxuICAgICAgaWYgKCFvdmVyZHVlVG9kb3MuZXJyb3IpIHtcbiAgICAgICAgc2V0T3ZlcmR1ZU9iamVjdChvdmVyZHVlVG9kb3MuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIE9iamVjdC5lbnRyaWVzKG92ZXJkdWVPYmplY3RzKS5tYXAoKFtrZXksIGl0ZW1dKSA9PiAoXG4gICAgICA8VG9kb3NQYXJ0IGtleT17a2V5fSBkYXRhPXtpdGVtfSB0aXRsZT17a2V5fSAvPlxuICAgICkpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmR1ZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE92ZXJkdWUgZnJvbSAnLi9PdmVyZHVlJ1xuaW1wb3J0IFRvZGF5IGZyb20gJy4vVG9kYXknXG5pbXBvcnQgTmV4dFdlZWsgZnJvbSAnLi9OZXh0V2VlaydcbmltcG9ydCBBZGRUb2RvIGZyb20gJy4vQWRkVG9kbydcbmltcG9ydCBBZGRPcmRlciBmcm9tICcuL0FkZE9yZGVyJ1xuaW1wb3J0IEFkZENvbXBsYWludCBmcm9tICcuL0FkZENvbXBsYWludCdcbmltcG9ydCBUb2RvcyBmcm9tICcuL1RvZG9zJ1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgfSxcbiAgfSxcbiAgYXBwQmFyOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXG4gICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgICB9LFxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIFBhZ2VMYXlvdXQocHJvcHMpIHtcbiAgY29uc3QgeyB3aW5kb3cgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcbiAgfTtcblxuICBjb25zdCBjb250YWluZXIgPSB3aW5kb3cgIT09IHVuZGVmaW5lZCA/ICgpID0+IHdpbmRvdygpLmRvY3VtZW50LmJvZHkgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwPlxuICAgICAgICAgICAgU3lzdGVtIHphcnrEhWR6YW5pYSB1dHJ6eW1hbmlhIHJ1Y2h1XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn0gYXJpYS1sYWJlbD1cIm1haWxib3ggZm9sZGVyc1wiPlxuICAgICAgICAgIHsvKiBUaGUgaW1wbGVtZW50YXRpb24gY2FuIGJlIHN3YXBwZWQgd2l0aCBqcyB0byBhdm9pZCBTRU8gZHVwbGljYXRpb24gb2YgbGlua3MuICovfVxuICAgICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICBjb250YWluZXI9e2NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXG4gICAgICAgICAgICAgIGFuY2hvcj17dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCd9XG4gICAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBNb2RhbFByb3BzPXt7XG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnUvPlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgPEhpZGRlbiB4c0Rvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgICAgICAgICAgb3BlblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudS8+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLyc+XG4gICAgICAgICAgICAgIDxEYXNoYm9hcmQvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvb3ZlcmR1ZSc+XG4gICAgICAgICAgICAgIDxPdmVyZHVlLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi90b2RheVwiPlxuICAgICAgICAgICAgICA8VG9kYXkvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25leHRXZWVrXCI+XG4gICAgICAgICAgICAgIDxOZXh0V2Vlay8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRkVG9kb1wiPlxuICAgICAgICAgICAgICA8QWRkVG9kby8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRkT3JkZXJcIj5cbiAgICAgICAgICAgICAgPEFkZE9yZGVyLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZGRDb21wbGFpbnRcIj5cbiAgICAgICAgICAgICAgPEFkZENvbXBsYWludC8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdG9kb3NcIj5cbiAgICAgICAgICAgICAgPFRvZG9zLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5QYWdlTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxuICAgKiBZb3Ugd29uJ3QgbmVlZCBpdCBvbiB5b3VyIHByb2plY3QuXG4gICAqL1xuICB3aW5kb3c6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDtcbiIsImltcG9ydCAnLi4vQXBwLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFRvZGF5VG9kb3NUeXBlc09iamVjdHMgfSBmcm9tICcuLi9hcGkvVG9kb3MnXG5pbXBvcnQgVG9kb3NQYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb3NQYXJ0J1xuXG5mdW5jdGlvbiBUb2RheSgpIHtcbiAgY29uc3QgW3RvZGF5LCBzZXRUb2RheV0gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZGF5VG9kb3MgPSBhd2FpdCBhd2FpdCBnZXRUb2RheVRvZG9zVHlwZXNPYmplY3RzKGRhdGUpXG4gICAgICBpZighdG9kYXlUb2Rvcy5lcnJvcil7XG4gICAgICAgIHNldFRvZGF5KHRvZGF5VG9kb3MuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBPYmplY3QuZW50cmllcyh0b2RheSkubWFwKChba2V5LCBpdGVtXSkgPT4gKFxuICAgICAgPFRvZG9zUGFydCBrZXk9e2tleX0gZGF0YT17aXRlbX0gdGl0bGU9e2tleX0gLz5cbiAgICApKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRUb2Rvc0J5T2JqZWN0QW5kVHlwZSB9IGZyb20gJy4uL2FwaS9Ub2RvcydcbmltcG9ydCBUb2Rvc1BhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2Rvc1BhcnQnXG5pbXBvcnQge0NpcmN1bGFyUHJvZ3Jlc3N9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdG9kb3NMaXN0ID0gYXdhaXQgZ2V0VG9kb3NCeU9iamVjdEFuZFR5cGUoKVxuICAgICAgaWYgKCF0b2Rvc0xpc3QuZXJyb3IpIHtcbiAgICAgICAgc2V0VG9kb3ModG9kb3NMaXN0LmRhdGEpXG4gICAgICB9XG5cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICAgIHRvZG9zID8gT2JqZWN0LmVudHJpZXModG9kb3MpLm1hcCgoW2tleSwgaXRlbV0pID0+IChcbiAgICAgICAgPFRvZG9zUGFydCBrZXk9e2tleX0gdGl0bGU9e2tleX0gZGF0YT17aXRlbX0gLz5cbiAgICAgICkpIDogPENpcmN1bGFyUHJvZ3Jlc3MvPlxuICApXG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4tYmRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi1iZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLW14XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtbXguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9