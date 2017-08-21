(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("amazon-cognito-identity-js"), require("aws-sdk"), require("babel-polyfill"), require("redux-saga/effects"));
	else if(typeof define === 'function' && define.amd)
		define(["amazon-cognito-identity-js", "aws-sdk", "babel-polyfill", "redux-saga/effects"], factory);
	else if(typeof exports === 'object')
		exports["aws-cognito-redux-saga"] = factory(require("amazon-cognito-identity-js"), require("aws-sdk"), require("babel-polyfill"), require("redux-saga/effects"));
	else
		root["aws-cognito-redux-saga"] = factory(root["amazon-cognito-identity-js"], root["aws-sdk"], root["babel-polyfill"], root["redux-saga/effects"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH_INIT = exports.AUTH_INIT = 'AUTH_INIT';
var AUTH_SET_STATE = exports.AUTH_SET_STATE = 'AUTH_SET_STATE';
var AUTH_SIGN_UP = exports.AUTH_SIGN_UP = 'AUTH_SIGN_UP';
var AUTH_SIGN_IN = exports.AUTH_SIGN_IN = 'AUTH_SIGN_IN';
var AUTH_SIGN_OUT = exports.AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';
var AUTH_SIGNED_IN = exports.AUTH_SIGNED_IN = 'AUTH_SIGNED_IN';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(2), __webpack_require__(3));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["aws-cognito-promises"] = factory(require("amazon-cognito-identity-js"), require("aws-sdk"));else root["aws-cognito-promises"] = factory(root["amazon-cognito-identity-js"], root["aws-sdk"]);
})(undefined, function (__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 2);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getUser = exports.getUserPool = exports.get = exports.set = undefined;

      var _awsSdk = __webpack_require__(5);

      var _amazonCognitoIdentityJs = __webpack_require__(1);

      var appConfig = void 0;
      var userPool = void 0;

      var set = exports.set = function set(config) {
        appConfig = config;

        _awsSdk.Config.region = appConfig.region;
        _awsSdk.Config.credentials = new _awsSdk.CognitoIdentityCredentials({
          IdentityPoolId: appConfig.IdentityPoolId
        });

        userPool = new _amazonCognitoIdentityJs.CognitoUserPool({
          UserPoolId: appConfig.UserPoolId,
          ClientId: appConfig.ClientId
        });
      };

      var get = exports.get = function get() {
        return appConfig;
      };

      var getUserPool = exports.getUserPool = function getUserPool() {
        return userPool;
      };

      var getUser = exports.getUser = function getUser() {
        return userPool.getCurrentUser();
      };

      /***/
    },
    /* 1 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(3);

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.config = exports.getSession = exports.authSignOut = exports.getLocalUser = exports.authSignIn = exports.confirmation = exports.authRegister = undefined;

      var _register = __webpack_require__(4);

      var _register2 = _interopRequireDefault(_register);

      var _confirmation = __webpack_require__(6);

      var _confirmation2 = _interopRequireDefault(_confirmation);

      var _authenticate = __webpack_require__(7);

      var _authenticate2 = _interopRequireDefault(_authenticate);

      var _getLocalUser = __webpack_require__(8);

      var _getLocalUser2 = _interopRequireDefault(_getLocalUser);

      var _signOut = __webpack_require__(9);

      var _signOut2 = _interopRequireDefault(_signOut);

      var _getSession = __webpack_require__(10);

      var _getSession2 = _interopRequireDefault(_getSession);

      var _config = __webpack_require__(0);

      var config = _interopRequireWildcard(_config);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }newObj.default = obj;return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.authRegister = _register2.default;
      exports.confirmation = _confirmation2.default;
      exports.authSignIn = _authenticate2.default;
      exports.getLocalUser = _getLocalUser2.default;
      exports.authSignOut = _signOut2.default;
      exports.getSession = _getSession2.default;
      exports.config = config;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.default = function (email, password) {
        var userPool = (0, _config.getUserPool)();

        var attributeList = [new _amazonCognitoIdentityJs.CognitoUserAttribute({
          Name: 'email',
          Value: email
        })];
        return new Promise(function (resolve, reject) {
          userPool.signUp(email, password, attributeList, null, function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      };

      var _amazonCognitoIdentityJs = __webpack_require__(1);

      var _config = __webpack_require__(0);

      /***/
    },
    /* 5 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.default = function (email, code) {
        var userData = {
          Username: email,
          Pool: (0, _config.getUserPool)()
        };

        var cognitoUser = new _amazonCognitoIdentityJs.CognitoUser(userData);

        return new Promise(function (resolve, reject) {
          cognitoUser.confirmRegistration(code, true, function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      };

      var _amazonCognitoIdentityJs = __webpack_require__(1);

      var _config = __webpack_require__(0);

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.default = function (username, password) {
        var authenticationData = {
          Username: username,
          Password: password
        };
        var authenticationDetails = new _amazonCognitoIdentityJs.AuthenticationDetails(authenticationData);

        var userData = {
          Username: username,
          Pool: (0, _config.getUserPool)()
        };

        var cognitoUser = new _amazonCognitoIdentityJs.CognitoUser(userData);

        return new Promise(function (resolve, reject) {
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function onSuccess(result) {
              resolve(result);
            },
            onFailure: function onFailure(err) {
              reject(err);
            }
          });
        });
      };

      var _amazonCognitoIdentityJs = __webpack_require__(1);

      var _config = __webpack_require__(0);

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.default = function () {
        var cognitoUser = (0, _config.getUser)();

        if (cognitoUser) {
          return new Promise(function (resolve, reject) {
            cognitoUser.getSession(function (err, result) {
              if (err) {
                reject(err);
              } else {
                resolve(cognitoUser);
              }
            });
          });
        } else {
          throw new Error('no cognitiveUser value');
        }
      };

      var _config = __webpack_require__(0);

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.default = function () {
        var cognitoUser = (0, _config.getUser)();

        if (cognitoUser) {
          cognitoUser.signOut();
          Promise.resolve();
        } else {
          throw new Error('no cognitiveUser value');
        }
      };

      var _config = __webpack_require__(0);

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.default = function () {
        var cognitoUser = (0, _config.getUser)();

        if (cognitoUser) {
          return new Promise(function (resolve, reject) {
            cognitoUser.getSession(function (err, session) {
              if (err) {
                reject(err);
              } else {
                resolve(session);
              }
            });
          });
        } else {
          throw new Error('no cognitiveUser value');
        }
      };

      var _config = __webpack_require__(0);

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH_UNKNOWN = exports.AUTH_UNKNOWN = 'AUTH_UNKNOWN';
var AUTH_SUCCESS = exports.AUTH_SUCCESS = 'AUTH_SUCCESS';
var AUTH_FAIL = exports.AUTH_FAIL = 'AUTH_FAIL';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.state = exports.action = exports.sagas = exports.config = undefined;

var _sagas = __webpack_require__(8);

var _sagas2 = _interopRequireDefault(_sagas);

var _awsCognitoPromises = __webpack_require__(1);

var config = _interopRequireWildcard(_awsCognitoPromises);

var _actions = __webpack_require__(0);

var action = _interopRequireWildcard(_actions);

var _states = __webpack_require__(4);

var state = _interopRequireWildcard(_states);

var _reducer = __webpack_require__(11);

var reducer = _interopRequireWildcard(_reducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.config = config;
exports.sagas = _sagas2.default;
exports.action = action;
exports.state = state;
exports.reducer = reducer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = sagas;

var _awsCognitoPromises = __webpack_require__(1);

var _effects = __webpack_require__(10);

var _actions = __webpack_require__(0);

var actions = _interopRequireWildcard(_actions);

var _states = __webpack_require__(4);

var states = _interopRequireWildcard(_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(signedIn),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(signUp),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(signOut),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(signIn),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(init),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(sagas);

// auth is stateless. Each call to a auth action resets all state
var defaultState = {
  info: {},
  error: {},
  isSignedIn: states.AUTH_UNKNOWN,
  isConfirmed: states.AUTH_UNKNOWN,
  hasSignedUp: states.AUTH_UNKNOWN
};

function signedIn() {
  var user;
  return regeneratorRuntime.wrap(function signedIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_awsCognitoPromises.getSession);

        case 3:
          user = _awsCognitoPromises.config.getUser();
          _context.next = 6;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: _extends({}, defaultState, {
              isSignedIn: states.AUTH_SUCCESS,
              isConfirmed: states.AUTH_SUCCESS,
              info: user
            })
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: _extends({}, defaultState, {
              error: {}
            })
          });

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function signUp(action) {
  return regeneratorRuntime.wrap(function signUp$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_awsCognitoPromises.authRegister, action.payload.username, action.payload.password);

        case 3:
          _context2.next = 5;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: _extends({}, defaultState, {
              hasSignedUp: states.AUTH_SUCCESS
            })
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 11;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: _extends({}, defaultState, {
              error: _context2.t0
            })
          });

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 7]]);
}

function signOut() {
  return regeneratorRuntime.wrap(function signOut$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_awsCognitoPromises.authSignOut);

        case 3:
          _context3.next = 5;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: { isSignedIn: states.AUTH_FAIL }
          });

        case 5:
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 11;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: { error: _context3.t0, isSignedIn: states.AUTH_FAIL }
          });

        case 11:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 7]]);
}

function signIn(action) {
  var _action$payload, username, password, code, user;

  return regeneratorRuntime.wrap(function signIn$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _action$payload = action.payload, username = _action$payload.username, password = _action$payload.password, code = _action$payload.code;

          if (!code) {
            _context4.next = 5;
            break;
          }

          _context4.next = 5;
          return (0, _effects.call)(_awsCognitoPromises.confirmation, username, code);

        case 5:
          _context4.next = 7;
          return (0, _effects.call)(_awsCognitoPromises.authSignIn, username, password);

        case 7:
          user = _context4.sent;
          _context4.next = 10;
          return (0, _effects.call)(_awsCognitoPromises.getLocalUser);

        case 10:
          user = _context4.sent;
          _context4.next = 13;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: {
              isSignedIn: states.AUTH_SUCCESS,
              isConfirmed: states.AUTH_SUCCESS,
              info: user
            }
          });

        case 13:
          _context4.next = 24;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4['catch'](0);

          if (!(_context4.t0.code === 'UserNotConfirmedException')) {
            _context4.next = 22;
            break;
          }

          _context4.next = 20;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: { isConfirmed: states.AUTH_FAIL, error: _context4.t0 }
          });

        case 20:
          _context4.next = 24;
          break;

        case 22:
          _context4.next = 24;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: { isConfirmed: states.AUTH_SUCCESS, error: _context4.t0 }
          });

        case 24:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 15]]);
}

function init(action) {
  return regeneratorRuntime.wrap(function init$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.put)({
            type: actions.AUTH_SET_STATE,
            payload: _extends({}, defaultState)
          });

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function sagas() {
  return regeneratorRuntime.wrap(function sagas$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeLatest)(actions.AUTH_SIGN_UP, signUp);

        case 2:
          _context6.next = 4;
          return (0, _effects.takeLatest)(actions.AUTH_SIGN_IN, signIn);

        case 4:
          _context6.next = 6;
          return (0, _effects.takeLatest)(actions.AUTH_SIGN_OUT, signOut);

        case 6:
          _context6.next = 8;
          return (0, _effects.takeLatest)(actions.AUTH_SIGNED_IN, signedIn);

        case 8:
          _context6.next = 10;
          return (0, _effects.takeLatest)(actions.AUTH_INIT, init);

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.signedIn = exports.signOut = exports.signIn = exports.signUp = exports.init = undefined;

var _ACTION_HANDLERS;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(0);

var action = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = exports.init = function init() {
  return {
    type: action.AUTH_INIT,
    payload: {}
  };
};

var signUp = exports.signUp = function signUp(username, password) {
  return {
    type: action.AUTH_SIGN_UP,
    payload: {
      username: username,
      password: password
    }
  };
};

var signIn = exports.signIn = function signIn(username, password, code) {
  return {
    type: action.AUTH_SIGN_IN,
    payload: {
      username: username,
      password: password,
      code: code
    }
  };
};

var signOut = exports.signOut = function signOut() {
  return {
    type: action.AUTH_SIGN_OUT
  };
};

var signedIn = exports.signedIn = function signedIn() {
  return {
    type: action.AUTH_SIGNED_IN
  };
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, _defineProperty(_ACTION_HANDLERS, action.AUTH_SET_STATE, function (state, action) {
  return _extends({}, state, action.payload);
}), _defineProperty(_ACTION_HANDLERS, action.AUTH_INIT, function (state, action) {
  return _extends({}, state, action.payload);
}), _ACTION_HANDLERS);

var defaultState = {};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map