"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/events/[slug]";
exports.ids = ["pages/api/events/[slug]"];
exports.modules = {

/***/ "./pages/api/events/[slug].js":
/*!************************************!*\
  !*** ./pages/api/events/[slug].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { events  } = __webpack_require__(/*! ./data.json */ \"./pages/api/events/data.json\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const evt = events.filter((ev)=>ev.slug === req.query.slug\n    );\n    if (req.method === \"GET\") {\n        res.status(200).json(evt);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} is not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZXZlbnRzL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQ0EsTUFBTSxFQUFDLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxpREFBYTtBQUV4QyxpRUFBZ0IsQ0FBQUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUM1QixLQUFLLENBQUNDLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxNQUFNLEVBQUVDLEVBQUUsR0FBS0EsRUFBRSxDQUFDQyxJQUFJLEtBQUtMLEdBQUcsQ0FBQ00sS0FBSyxDQUFDRCxJQUFJOztJQUU1RCxFQUFFLEVBQUVMLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3pCTixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ1AsR0FBRztJQUMxQixDQUFDLE1BQU0sQ0FBQztRQUNORCxHQUFHLENBQUNTLFNBQVMsQ0FBQyxDQUFPLFFBQUUsQ0FBQztZQUFBLENBQUs7UUFBQSxDQUFDO1FBQzlCVCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNFLE9BQU8sR0FBRyxPQUFPLEVBQUVYLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLGVBQWU7UUFBRSxDQUFDO0lBQ3pFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2V2ZW50cy9bc2x1Z10uanM/ZjhhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGV2ZW50cyB9ID0gcmVxdWlyZShcIi4vZGF0YS5qc29uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgZXZ0ID0gZXZlbnRzLmZpbHRlcigoZXYpID0+IGV2LnNsdWcgPT09IHJlcS5xdWVyeS5zbHVnKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIkdFVFwiXSk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gaXMgbm90IGFsbG93ZWRgIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImV2ZW50cyIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJldnQiLCJmaWx0ZXIiLCJldiIsInNsdWciLCJxdWVyeSIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJzZXRIZWFkZXIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/events/[slug].js\n");

/***/ }),

/***/ "./pages/api/events/data.json":
/*!************************************!*\
  !*** ./pages/api/events/data.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"events":[{"id":"1","name":"Throwback Thursdays with DJ Manny Duke","slug":"throwback-thursdays-with-dj-manny-duke","venue":"Horizon Club","address":"919 3rd Ave New York, New York(NY), 10022","performers":"DJ Manny Duke","date":"June 09, 2021","time":"10:00 PM EST","description":"Featuring deep cuts, party anthems and remixes nostalgic songs from two of the best decades of music with the very best music from the 90\'s and 2000\'s","image":"/images/sample/event1.jpg"},{"id":"2","name":"Boom Dance Festival Experience","slug":"boom-dance-festival-experience","venue":"Blackjacks","address":"966 Lexington Ave New York, New York(NY), 10021","performers":"DJ LUCK & MC NEAT, NICKY BLACKMARKET, DJ NICKY BLACKMARKET, RATPACK","date":"June 2, 2021","time":"8:00 PM EST","description":"It\'s looking more and more like we will be seeing events return in the summer! To celebrate this we are arranging a festival experience to say good bye to lock down! We will also be celebrating the fact Zoom Dance is one year old!","image":"/images/sample/event2.jpg"},{"id":"3","name":"Encore Night Boat Party","slug":"encore-night-boat-party","venue":"Encore","address":"675 Water St New York, New York(NY), 10002","performers":"Bad Boy Bill","date":"June 11, 2021","time":"7:00 PM EST","description":"Who is ready to party? I mean in the middle of the water, a boat with good music and drinks. If thats you then you have made it to the right place.","image":"/images/sample/event3.jpg"},{"id":"4","name":"Jam Concert Live","slug":"jam-concert-live","venue":"Club Ozone","address":"70 W 115th St New York, New York(NY), 10026","performers":"DJ RNB","date":"June 20, 2021","time":"10:00 PM EST","description":"The most diverse dj on the east coast, DJ RNB team up once again to bring you the next installment in the high energy, Jam Concert Live series!","image":"/images/sample/event4.jpg"},{"id":"5","name":"UnMute Rock Festival","slug":"unmute-rock-festival","venue":"Studio 54","address":"55 La Salle St #12K New York, New York(NY), 10027","performers":"Big Wednesday, Black Pyre, Calling Apollo","date":"June 30, 2021","time":"8:00 PM EST","description":"With bands from around the UK ready to send the roof into orbit, get ready for the loudest Welsh festival: the inaugural UnMute 2021.","image":"/images/sample/event5.jpg"},{"id":"6","name":"Soul Kitchen Party","slug":"soul-kitchen-party","venue":"Onyx Club","address":"60 Gramercy Park N #2 New York, New York(NY), 10010","performers":"A-Trak, Nightmares on Wax, Rakim, Jay Electronica","date":"July 2, 2021","time":"8:00 PM EST","description":"Dope party which features Hip Hop legends, emerging artists and world-class turntablists","image":"/images/sample/event6.jpg"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/events/[slug].js"));
module.exports = __webpack_exports__;

})();