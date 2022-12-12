"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyMultipleLeads = exports.verifyLead = exports.updateLead = exports.starLead = exports.importLead = exports.getVerifiedLeads = exports.getLeadsByEmail = exports.getLeadsByDaterange = exports.getLeadsByCampaign = exports.getLeadsByAgent = exports.getLeadById = exports.getAllLeads = exports.deleteMultipleLeads = exports.deleteLead = exports.createLead = void 0;
var _Client = _interopRequireDefault(require("../client/Client"));
var _Lead = _interopRequireDefault(require("./Lead"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//create lead
var createLead = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var lead;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            lead = new _Lead["default"](req.body);
            lead.save();
            return _context.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Created Successfully',
              data: lead
            }));
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context.t0.message
            }));
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function createLead(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//get all leads
exports.createLead = createLead;
var getAllLeads = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var leads;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Lead["default"].find().sort({
              createdAt: -1
            });
          case 3:
            leads = _context2.sent;
            if (leads) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'No Lead Available'
            }));
          case 6:
            return _context2.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'All Leads Fetched Successfully',
              data: leads
            }));
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context2.t0.message
            }));
          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getAllLeads(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//get verified leads
exports.getAllLeads = getAllLeads;
var getVerifiedLeads = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var leads;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Lead["default"].find({
              isVerified: 'true'
            }).sort({
              createdAt: -1
            });
          case 3:
            leads = _context3.sent;
            if (leads) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'No Lead Available'
            }));
          case 6:
            return _context3.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'All Leads Fetched Successfully',
              data: leads
            }));
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context3.t0.message
            }));
          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getVerifiedLeads(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//get lead by id
exports.getVerifiedLeads = getVerifiedLeads;
var getLeadById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var lead;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Lead["default"].findById(req.query.id);
          case 3:
            lead = _context4.sent;
            if (lead) {
              _context4.next = 6;
              break;
            }
            return _context4.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 6:
            return _context4.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Fetched Successfully',
              data: lead
            }));
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context4.t0.message
            }));
          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function getLeadById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//get leads by agent name
exports.getLeadById = getLeadById;
var getLeadsByAgent = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var lead;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Lead["default"].findOne({
              agentName: req.query.agentName
            });
          case 3:
            lead = _context5.sent;
            if (lead) {
              _context5.next = 6;
              break;
            }
            return _context5.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 6:
            return _context5.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Fetched Successfully',
              data: lead
            }));
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context5.t0.message
            }));
          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function getLeadsByAgent(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//get leads by email
exports.getLeadsByAgent = getLeadsByAgent;
var getLeadsByEmail = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var user, lead;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _Client["default"].findOne({
              email: req.query.email
            });
          case 3:
            user = _context6.sent;
            _context6.next = 6;
            return _Lead["default"].find({
              campaignName: user.campaignName
            });
          case 6:
            lead = _context6.sent;
            if (lead) {
              _context6.next = 9;
              break;
            }
            return _context6.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 9:
            return _context6.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Fetched Successfully',
              data: lead
            }));
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context6.t0.message
            }));
          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function getLeadsByEmail(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//get leads by campaign name
exports.getLeadsByEmail = getLeadsByEmail;
var getLeadsByCampaign = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var lead;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log(req.query.campaignName);
            _context7.prev = 1;
            _context7.next = 4;
            return _Lead["default"].find({
              campaignName: req.query.campaignName
            });
          case 4:
            lead = _context7.sent;
            if (lead) {
              _context7.next = 7;
              break;
            }
            return _context7.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 7:
            return _context7.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Fetched Successfully',
              data: lead
            }));
          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](1);
            return _context7.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context7.t0.message
            }));
          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 10]]);
  }));
  return function getLeadsByCampaign(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//get leads by daterange

/* Three things:

To use dates in your queries, you need to wrap the strings in ISODate
Dates need to be in Y-M-D format
I’m guessing you probably want to also include data from the last day of April. In this case you should bring the end date forward by one day.
Putting these together, the query you likely want is:

{createdAt:{$gte:ISODate("2021-01-01"),$lt:ISODate("2020-05-01"}} */
exports.getLeadsByCampaign = getLeadsByCampaign;
var getLeadsByDaterange = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var lead;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _Lead["default"].findOne({
              createdAt: {
                $gte: ISODate(req.query.startingDate),
                $lt: ISODate(req.query.endingDate)
              }
            });
          case 3:
            lead = _context8.sent;
            if (lead) {
              _context8.next = 6;
              break;
            }
            return _context8.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 6:
            return _context8.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Fetched Successfully',
              data: lead
            }));
          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context8.t0.message
            }));
          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return function getLeadsByDaterange(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

//update lead
exports.getLeadsByDaterange = getLeadsByDaterange;
var updateLead = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var lead, updatedLead;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _Lead["default"].findById(req.body.id);
          case 3:
            lead = _context9.sent;
            if (lead) {
              _context9.next = 6;
              break;
            }
            return _context9.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 6:
            _context9.next = 8;
            return _Lead["default"].findByIdAndUpdate(req.body.id, req.body, {
              "new": true
            });
          case 8:
            updatedLead = _context9.sent;
            return _context9.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Updated Successfully',
              data: updatedLead
            }));
          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            return _context9.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context9.t0.message
            }));
          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 12]]);
  }));
  return function updateLead(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

//verify lead
exports.updateLead = updateLead;
var verifyLead = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var lead, updatedLead;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            console.log(req.body.id);
            _context10.next = 4;
            return _Lead["default"].findById(req.body.id);
          case 4:
            lead = _context10.sent;
            if (lead) {
              _context10.next = 7;
              break;
            }
            return _context10.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 7:
            _context10.next = 9;
            return _Lead["default"].findByIdAndUpdate(req.body.id, {
              isVerified: lead.isVerified === 'true' ? 'false' : 'true'
            }, {
              "new": true
            });
          case 9:
            updatedLead = _context10.sent;
            return _context10.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Updated Successfully',
              data: updatedLead
            }));
          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](0);
            return _context10.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context10.t0.message
            }));
          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 13]]);
  }));
  return function verifyLead(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

//star lead
exports.verifyLead = verifyLead;
var starLead = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var lead, updatedLead;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            console.log(req.body.id);
            _context11.next = 4;
            return _Lead["default"].findById(req.body.id);
          case 4:
            lead = _context11.sent;
            if (lead) {
              _context11.next = 7;
              break;
            }
            return _context11.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 7:
            _context11.next = 9;
            return _Lead["default"].findByIdAndUpdate(req.body.id, {
              isStarred: lead.isStarred === 'true' ? 'false' : 'true'
            }, {
              "new": true
            });
          case 9:
            updatedLead = _context11.sent;
            return _context11.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Updated Successfully',
              data: updatedLead
            }));
          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](0);
            return _context11.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context11.t0.message
            }));
          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 13]]);
  }));
  return function starLead(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

//verify many leads
exports.starLead = starLead;
var verifyMultipleLeads = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", res.json({
              status: 500,
              success: false,
              message: 'Import Lead'
            }));
          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return function verifyMultipleLeads(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

//delete lead
exports.verifyMultipleLeads = verifyMultipleLeads;
var deleteLead = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var lead;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _Lead["default"].findById(req.query.id);
          case 3:
            lead = _context13.sent;
            if (lead) {
              _context13.next = 6;
              break;
            }
            return _context13.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 6:
            _context13.next = 8;
            return _Lead["default"].findByIdAndDelete(req.query.id);
          case 8:
            return _context13.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Deleted Successfully'
            }));
          case 11:
            _context13.prev = 11;
            _context13.t0 = _context13["catch"](0);
            return _context13.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context13.t0.message
            }));
          case 14:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 11]]);
  }));
  return function deleteLead(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
//delete many lead
exports.deleteLead = deleteLead;
var deleteMultipleLeads = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var lead;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _Lead["default"].findById(req.body.id);
          case 3:
            lead = _context14.sent;
            if (lead) {
              _context14.next = 6;
              break;
            }
            return _context14.abrupt("return", res.json({
              status: 404,
              success: false,
              message: 'Lead Not Found'
            }));
          case 6:
            _context14.next = 8;
            return _Lead["default"].deleteMany();
          case 8:
            return _context14.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Deleted Successfully'
            }));
          case 11:
            _context14.prev = 11;
            _context14.t0 = _context14["catch"](0);
            return _context14.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context14.t0.message
            }));
          case 14:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 11]]);
  }));
  return function deleteMultipleLeads(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

//import lead
exports.deleteMultipleLeads = deleteMultipleLeads;
var importLead = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var leads;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _Lead["default"].create(req.body);
          case 3:
            leads = _context15.sent;
            return _context15.abrupt("return", res.json({
              status: 200,
              success: true,
              message: 'Lead Created Successfully',
              data: leads
            }));
          case 7:
            _context15.prev = 7;
            _context15.t0 = _context15["catch"](0);
            return _context15.abrupt("return", res.json({
              status: 500,
              success: false,
              message: _context15.t0.message
            }));
          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return function importLead(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
exports.importLead = importLead;