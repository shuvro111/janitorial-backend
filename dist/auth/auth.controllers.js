"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.resetPassword = exports.requestPasswordReset = exports.logout = exports.getUserById = exports.getSecret = void 0;
var _bcryptNodejs = require("bcrypt-nodejs");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _Client = _interopRequireDefault(require("../client/Client"));
var _config = require("../config/config");
var _nodemailer = require("../config/nodemailer");
var _Stuff = _interopRequireDefault(require("../stuff/Stuff"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
_dotenv["default"].config();
var tokenForStuff = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stuff) {
    var payload, token;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = {
              id: stuff._id,
              email: stuff.email,
              role: (stuff === null || stuff === void 0 ? void 0 : stuff.role) || 'client'
            };
            _context.next = 3;
            return 'Bearer ';
          case 3:
            _context.t0 = _context.sent;
            _context.t1 = _jsonwebtoken["default"].sign(payload, _config.secret, {
              expiresIn: '7d'
            });
            token = _context.t0 + _context.t1;
            return _context.abrupt("return", token);
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function tokenForStuff(_x) {
    return _ref.apply(this, arguments);
  };
}();
var expireToken = function expireToken() {
  return _jsonwebtoken["default"].sign({}, _config.secret, {
    expiresIn: '-1'
  });
};
var requestPasswordReset = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var email, user, _user, _secret, payload, token, link, mailOptions;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = req.body.email;
            _context2.prev = 1;
            _context2.next = 4;
            return _Stuff["default"].findOne({
              email: email
            });
          case 4:
            user = _context2.sent;
            if (user) {
              _context2.next = 10;
              break;
            }
            _context2.next = 8;
            return _Client["default"].findOne({
              email: email
            });
          case 8:
            _user = _context2.sent;
            if (!_user) {
              res.json({
                status: 404,
                success: false,
                message: 'User Not Found'
              });
            }
          case 10:
            console.log({
              user: user
            });
            _secret = process.env.RESET_PASSWORD_SECRET + user.password;
            console.log({
              secret: _secret
            });
            payload = {
              email: user.email,
              id: user._id,
              role: user.role
            };
            token = _jsonwebtoken["default"].sign(payload, _secret, {
              expiresIn: '24h'
            });
            link = "".concat(_config.client, "/reset-password/").concat(user._id, "&t=").concat(token);
            mailOptions = (0, _nodemailer.setMailOptions)(email, link);
            _context2.next = 19;
            return (0, _nodemailer.sendMail)(mailOptions).then(function () {
              res.json({
                status: 200,
                success: true,
                message: 'Mail Send Successful',
                data: {}
              });
            });
          case 19:
            _context2.next = 24;
            break;
          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context2.t0.message
            }));
          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 21]]);
  }));
  return function requestPasswordReset(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.requestPasswordReset = requestPasswordReset;
var resetPassword = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, token, id, newPassword, user, _user2, jwtsecret, payload, newUser;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, token = _req$body.token, id = _req$body.id, newPassword = _req$body.newPassword;
            _context3.prev = 1;
            _context3.next = 4;
            return _Stuff["default"].findById(id);
          case 4:
            user = _context3.sent;
            if (user) {
              _context3.next = 10;
              break;
            }
            _context3.next = 8;
            return _Client["default"].findById(id);
          case 8:
            _user2 = _context3.sent;
            if (!_user2) {
              res.json({
                status: 404,
                success: false,
                message: 'User Not Found'
              });
            }
          case 10:
            jwtsecret = process.env.RESET_PASSWORD_SECRET + user.password;
            console.log({
              token: token,
              jwtsecret: jwtsecret
            });
            _context3.next = 14;
            return _jsonwebtoken["default"].verify(token, jwtsecret);
          case 14:
            payload = _context3.sent;
            console.log({
              payload: payload
            });
            user.password = newPassword;
            _context3.next = 19;
            return user.save();
          case 19:
            newUser = _context3.sent;
            return _context3.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Password Changed Successfully',
              data: {
                user: newUser
              }
            }));
          case 23:
            _context3.prev = 23;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context3.t0.message
            }));
          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 23]]);
  }));
  return function resetPassword(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.resetPassword = resetPassword;
var logout = function logout(req, res) {
  try {
    expireToken();
    return res.json({
      status: 200,
      success: true,
      message: 'Logged Out Successfully'
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message
    });
  }
};
exports.logout = logout;
var signin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var _req$body2, email, password, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context5.prev = 1;
            _context5.next = 4;
            return _Stuff["default"].findOne({
              email: email
            });
          case 4:
            user = _context5.sent;
            if (user) {
              _context5.next = 9;
              break;
            }
            _context5.next = 8;
            return _Client["default"].findOne({
              email: email
            });
          case 8:
            user = _context5.sent;
          case 9:
            if (!user) {
              res.json({
                status: 404,
                success: false,
                message: 'User Not Found'
              });
            }
            (0, _bcryptNodejs.compare)(password, user.password, /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, isMatch) {
                var _user3, token;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!isMatch) {
                          _context4.next = 7;
                          break;
                        }
                        _context4.next = 3;
                        return tokenForStuff(user);
                      case 3:
                        token = _context4.sent;
                        return _context4.abrupt("return", res.json({
                          status: 200,
                          success: true,
                          message: 'Login Successful',
                          data: {
                            name: user.name,
                            email: user.email,
                            role: ((_user3 = user) === null || _user3 === void 0 ? void 0 : _user3.role) || 'client',
                            token: token
                          }
                        }));
                      case 7:
                        return _context4.abrupt("return", res.json({
                          status: 401,
                          success: false,
                          message: 'Password Does not Match'
                        }));
                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              return function (_x10, _x11) {
                return _ref5.apply(this, arguments);
              };
            }());
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context5.t0.message
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 13]]);
  }));
  return function signin(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
exports.signin = signin;
var getSecret = function getSecret(req, res) {
  return res.json({
    data: 'Secret'
  });
};
exports.getSecret = getSecret;
var getUserById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _Stuff["default"].findById(req.query.id);
          case 3:
            user = _context6.sent;
            if (user) {
              _context6.next = 8;
              break;
            }
            _context6.next = 7;
            return _Client["default"].findById(req.query.id);
          case 7:
            user = _context6.sent;
          case 8:
            if (user) {
              _context6.next = 12;
              break;
            }
            return _context6.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'User Not Found'
            }));
          case 12:
            return _context6.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'User fetched successfully',
              data: {
                user: user
              }
            }));
          case 13:
            _context6.next = 18;
            break;
          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context6.t0.message
            }));
          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return function getUserById(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getUserById = getUserById;