webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/app.scss */ "./styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_posts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/posts */ "./store/actions/posts/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Homepage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Homepage, _React$Component);

  function Homepage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Homepage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Homepage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Homepage, [{
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx("h1", null, "Posts"), __jsx("button", {
        onClick: function onClick() {
          _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute('/comments');
        }
      }, "All Comments"), this.props.posts.posts || this.props.posts.posts.length > 0 ? this.props.posts.posts.map(function (post) {
        return __jsx("div", {
          className: "content",
          key: post.id
        }, __jsx("p", {
          className: "content__title"
        }, post.title), __jsx("p", null, post.body), __jsx("button", {
          onClick: function onClick() {
            _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute('comments', {
              slug: post.id
            });
          }
        }, "Comments on this post"));
      }) : __jsx("p", null, "No posts yet!"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              store = _ref.store;

              if (!store.getState().posts.posts) {
                _context2.next = 7;
                break;
              }

              console.log("in if statement");
              _context2.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.getState().posts.posts);

            case 5:
              _context2.t0 = _context2.sent;
              return _context2.abrupt("return", {
                posts: _context2.t0
              });

            case 7:
              _context2.next = 9;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_store_actions_posts__WEBPACK_IMPORTED_MODULE_8__["getPosts"])()).then(function _callee(e) {
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(e);

                      case 2:
                        _context.t0 = _context.sent;
                        return _context.abrupt("return", {
                          posts: _context.t0
                        });

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state;
})(Homepage));
/*
const mapDispatchToProps = dispatch => ({
  setPosts: bindActionCreators(setPosts, dispatch),
  getPosts: bindActionCreators(getPosts, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Homepage);

 */

/*
const postsFetch = await fetch(`${API_URL}/posts`);
    const posts = await postsFetch.json()
    store.getState();
    store.dispatch(setPosts(posts));
    return {posts}
 */

/***/ })

})
//# sourceMappingURL=index.js.b2c2c920bf108f31c1ab.hot-update.js.map