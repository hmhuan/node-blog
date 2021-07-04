/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/authorize.js":
/*!**************************!*\
  !*** ./src/authorize.js ***!
  \**************************/
/***/ ((module) => {

eval("var authorize = function authorize(req, res, next) {\n  console.log(\"authorize\");\n  next();\n};\n\nmodule.exports = authorize;\n\n//# sourceURL=webpack://blog/./src/authorize.js?");

/***/ }),

/***/ "./src/controllers/BeverageController.js":
/*!***********************************************!*\
  !*** ./src/controllers/BeverageController.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar beverageService = __webpack_require__(/*! ../services/beverage.service */ \"./src/services/beverage.service.js\");\n\nvar BeverageController = /*#__PURE__*/function () {\n  function BeverageController() {\n    _classCallCheck(this, BeverageController);\n  }\n\n  _createClass(BeverageController, [{\n    key: \"index\",\n    value: function () {\n      var _index = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n        var beverages;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return beverageService.findAll();\n\n              case 3:\n                beverages = _context.sent;\n                res.status(200).json(beverages);\n                _context.next = 10;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                res.status(404);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      function index(_x, _x2) {\n        return _index.apply(this, arguments);\n      }\n\n      return index;\n    }()\n  }, {\n    key: \"find\",\n    value: function () {\n      var _find = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n        var id, result, beverage;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                id = Number(req.params.id);\n                _context2.next = 4;\n                return beverageService.findById(id);\n\n              case 4:\n                result = _context2.sent;\n                beverage = result.beverage;\n\n                if (!beverage) {\n                  _context2.next = 8;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", res.status(200).json(beverage));\n\n              case 8:\n                return _context2.abrupt(\"return\", res.status(404).json(result));\n\n              case 11:\n                _context2.prev = 11;\n                _context2.t0 = _context2[\"catch\"](0);\n                res.status(_context2.t0.status).json({\n                  message: _context2.t0.message\n                });\n\n              case 14:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 11]]);\n      }));\n\n      function find(_x3, _x4) {\n        return _find.apply(this, arguments);\n      }\n\n      return find;\n    }()\n  }]);\n\n  return BeverageController;\n}();\n\nmodule.exports = new BeverageController();\n\n//# sourceURL=webpack://blog/./src/controllers/BeverageController.js?");

/***/ }),

/***/ "./src/controllers/BlogController.js":
/*!*******************************************!*\
  !*** ./src/controllers/BlogController.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BlogController = /*#__PURE__*/function () {\n  function BlogController() {\n    _classCallCheck(this, BlogController);\n  }\n\n  _createClass(BlogController, [{\n    key: \"index\",\n    value: function index(req, res, next) {\n      res.render('blog');\n    }\n  }]);\n\n  return BlogController;\n}();\n\nmodule.exports = new BlogController();\n\n//# sourceURL=webpack://blog/./src/controllers/BlogController.js?");

/***/ }),

/***/ "./src/controllers/FoodController.js":
/*!*******************************************!*\
  !*** ./src/controllers/FoodController.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar foodService = __webpack_require__(/*! ../services/food.service */ \"./src/services/food.service.js\");\n\nvar FoodController = /*#__PURE__*/function () {\n  function FoodController() {\n    _classCallCheck(this, FoodController);\n  }\n\n  _createClass(FoodController, [{\n    key: \"index\",\n    value: function index(req, res, next) {\n      foodService.findAll(req, res, next);\n    }\n  }]);\n\n  return FoodController;\n}();\n\nmodule.exports = new FoodController();\n\n//# sourceURL=webpack://blog/./src/controllers/FoodController.js?");

/***/ }),

/***/ "./src/controllers/HomeController.js":
/*!*******************************************!*\
  !*** ./src/controllers/HomeController.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HomeRouter = /*#__PURE__*/function () {\n  function HomeRouter() {\n    _classCallCheck(this, HomeRouter);\n  }\n\n  _createClass(HomeRouter, [{\n    key: \"index\",\n    value: function index(req, res, next) {\n      res.render('home');\n    }\n  }]);\n\n  return HomeRouter;\n}();\n\nmodule.exports = new HomeRouter();\n\n//# sourceURL=webpack://blog/./src/controllers/HomeController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar handlebars = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nvar logger = __webpack_require__(/*! ./logger */ \"./src/logger.js\");\n\nvar authorize = __webpack_require__(/*! ./authorize */ \"./src/authorize.js\");\n\nvar router = __webpack_require__(/*! ./routers/index.router */ \"./src/routers/index.router.js\");\n\nvar db = __webpack_require__(/*! ./resource/config/db */ \"./src/resource/config/db/index.js\");\n\ndb.connect();\ndotenv.config();\nvar app = express();\nvar PORT = process.env.PORT || 5000;\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.use(cors()); // Http logger\n// app.use(morgan('combined'))\n\napp.use([logger, authorize]); // Template engine\n\napp.engine('hbs', handlebars({\n  extname: '.hbs'\n}));\napp.set('view engine', 'hbs');\napp.set('views', path.join(__dirname, 'views'));\nrouter(app);\napp.listen(PORT, function () {\n  console.log(\"listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://blog/./src/index.js?");

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((module) => {

eval("var logger = function logger(req, res, next) {\n  var method = req.method;\n  var url = req.get('host') + req.url;\n  var date = new Date();\n  console.log(method, url, date);\n  next();\n};\n\nmodule.exports = logger;\n\n//# sourceURL=webpack://blog/./src/logger.js?");

/***/ }),

/***/ "./src/models/Beverage.js":
/*!********************************!*\
  !*** ./src/models/Beverage.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar Beverage = new Schema({\n  _id: {\n    type: Number\n  },\n  name: {\n    type: String\n  },\n  desciption: {\n    type: String\n  },\n  image: {\n    type: String\n  },\n  createdAt: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updatedAt: {\n    type: Date,\n    \"default\": Date.now\n  }\n});\nmodule.exports = mongoose.model('Beverage', Beverage);\n\n//# sourceURL=webpack://blog/./src/models/Beverage.js?");

/***/ }),

/***/ "./src/models/Food.js":
/*!****************************!*\
  !*** ./src/models/Food.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar Food = new Schema({\n  _id: {\n    type: Number\n  },\n  name: {\n    type: String\n  },\n  desciption: {\n    type: String\n  },\n  image: {\n    type: String\n  },\n  createdAt: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updatedAt: {\n    type: Date,\n    \"default\": Date.now\n  }\n});\nmodule.exports = mongoose.model('Food', Food);\n\n//# sourceURL=webpack://blog/./src/models/Food.js?");

/***/ }),

/***/ "./src/resource/config/db/index.js":
/*!*****************************************!*\
  !*** ./src/resource/config/db/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nfunction connect(_x) {\n  return _connect.apply(this, arguments);\n}\n\nfunction _connect() {\n  _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(collection) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return mongoose.connect(\"mongodb://localhost:27017/testing\", {\n              useNewUrlParser: true,\n              useUnifiedTopology: true\n            });\n\n          case 3:\n            console.info(\"Connect DB successfully.\");\n            _context.next = 9;\n            break;\n\n          case 6:\n            _context.prev = 6;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(\"Connect DB failed.\");\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 6]]);\n  }));\n  return _connect.apply(this, arguments);\n}\n\nmodule.exports = {\n  connect: connect\n};\n\n//# sourceURL=webpack://blog/./src/resource/config/db/index.js?");

/***/ }),

/***/ "./src/routers/beverage.router.js":
/*!****************************************!*\
  !*** ./src/routers/beverage.router.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar beverageController = __webpack_require__(/*! ../controllers/BeverageController */ \"./src/controllers/BeverageController.js\");\n\nvar router = express.Router();\nrouter.get('/:id', beverageController.find);\nrouter.get('/', beverageController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://blog/./src/routers/beverage.router.js?");

/***/ }),

/***/ "./src/routers/blog.router.js":
/*!************************************!*\
  !*** ./src/routers/blog.router.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar blogController = __webpack_require__(/*! ../controllers/BlogController */ \"./src/controllers/BlogController.js\");\n\nrouter.get('/', blogController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://blog/./src/routers/blog.router.js?");

/***/ }),

/***/ "./src/routers/food.router.js":
/*!************************************!*\
  !*** ./src/routers/food.router.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar foodController = __webpack_require__(/*! ../controllers/FoodController */ \"./src/controllers/FoodController.js\");\n\nvar router = express.Router();\nrouter.get('/', foodController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://blog/./src/routers/food.router.js?");

/***/ }),

/***/ "./src/routers/home.router.js":
/*!************************************!*\
  !*** ./src/routers/home.router.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar homeController = __webpack_require__(/*! ../controllers/HomeController */ \"./src/controllers/HomeController.js\");\n\nrouter.get('/', homeController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://blog/./src/routers/home.router.js?");

/***/ }),

/***/ "./src/routers/index.router.js":
/*!*************************************!*\
  !*** ./src/routers/index.router.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var homeRouter = __webpack_require__(/*! ./home.router */ \"./src/routers/home.router.js\");\n\nvar blogRouter = __webpack_require__(/*! ./blog.router */ \"./src/routers/blog.router.js\");\n\nvar beverageRouter = __webpack_require__(/*! ./beverage.router */ \"./src/routers/beverage.router.js\");\n\nvar foodRouter = __webpack_require__(/*! ./food.router */ \"./src/routers/food.router.js\");\n\nfunction router(app) {\n  app.use('/home', homeRouter);\n  app.use('/v1/beverages', beverageRouter);\n  app.use('/v1/foods', foodRouter);\n  app.use('/blog', blogRouter);\n  app.use('/*', homeRouter);\n}\n\nmodule.exports = router;\n\n//# sourceURL=webpack://blog/./src/routers/index.router.js?");

/***/ }),

/***/ "./src/services/beverage.service.js":
/*!******************************************!*\
  !*** ./src/services/beverage.service.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Beverage = __webpack_require__(/*! ../models/Beverage */ \"./src/models/Beverage.js\");\n\nvar BeverageService = /*#__PURE__*/function () {\n  function BeverageService() {\n    _classCallCheck(this, BeverageService);\n  }\n\n  _createClass(BeverageService, [{\n    key: \"findAll\",\n    value: function findAll() {\n      return Beverage.find({});\n    }\n  }, {\n    key: \"findById\",\n    value: function findById(id) {\n      return Beverage.findById(id).then(function (beverageItem) {\n        if (beverageItem) {\n          return {\n            beverage: beverageItem\n          };\n        }\n\n        return {\n          message: \"Not found\"\n        };\n      })[\"catch\"](function (error) {\n        console.log(\"\".concat(error));\n        throw {\n          status: 400,\n          message: \"Bad request\"\n        };\n      });\n    }\n  }]);\n\n  return BeverageService;\n}();\n\nmodule.exports = new BeverageService();\n\n//# sourceURL=webpack://blog/./src/services/beverage.service.js?");

/***/ }),

/***/ "./src/services/food.service.js":
/*!**************************************!*\
  !*** ./src/services/food.service.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Food = __webpack_require__(/*! ../models/Food */ \"./src/models/Food.js\");\n\nvar FoodService = /*#__PURE__*/function () {\n  function FoodService() {\n    _classCallCheck(this, FoodService);\n  }\n\n  _createClass(FoodService, [{\n    key: \"findAll\",\n    value: function findAll(req, res, next) {\n      Food.find({}).then(function (foods) {\n        if (foods.length == 0) {\n          return res.status(404).json({\n            message: \"No foods\"\n          });\n        }\n\n        return res.json(foods);\n      })[\"catch\"](next);\n    }\n  }]);\n\n  return FoodService;\n}();\n\nmodule.exports = new FoodService();\n\n//# sourceURL=webpack://blog/./src/services/food.service.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-handlebars");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;