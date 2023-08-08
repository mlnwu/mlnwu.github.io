"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LJ": () => (/* binding */ ga_measurement_id),
/* harmony export */   "LV": () => (/* binding */ pageview)
/* harmony export */ });
/* unused harmony export event */
const ga_measurement_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;
// logs page views
const pageview = (url)=>{
    window.gtag('config', ga_measurement_id, {
        page_path: url
    });
};
// logs specific events
const event = ({ action , params  })=>{
    window.gtag('event', action, params);
};


/***/ }),

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./data/portfolio.js
var portfolio = __webpack_require__(987);
// EXTERNAL MODULE: ./contexts/theme.js
var theme = __webpack_require__(697);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./lib/google-analytics.js
var google_analytics = __webpack_require__(246);
;// CONCATENATED MODULE: ./pages/_app.js


















function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (!google_analytics/* ga_measurement_id */.LJ) return;
        const handleRouteChange = (url)=>(0,google_analytics/* pageview */.LV)(url)
        ;
        router.events.on('routeChangeComplete', handleRouteChange);
        return ()=>router.events.off('routeChangeComplete', handleRouteChange)
        ;
    }, [
        router.events
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: portfolio/* home.name */.LE.name || 'Portfolio'
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(theme/* ThemeProvider */.f, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [595], () => (__webpack_exec__(239)));
module.exports = __webpack_exports__;

})();