(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Post.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(wpapi) {/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-content-loading */ \"./node_modules/vue-content-loading/dist/vuecontentloading.js\");\n/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_content_loading__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Skeleton: vue_content_loading__WEBPACK_IMPORTED_MODULE_0___default.a\n  },\n  props: [\"id\", \"slug\", \"data\", \"isSingle\"],\n  data: function data() {\n    return {\n      post: {},\n      error: \"\",\n      loaded: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    console.log(this.data);\n\n    if (_typeof(this.data) === \"object\") {\n      this.post = this.data;\n      this.loaded = true;\n    } else {\n      var req = wpapi.posts();\n      if (this.id) req.param(\"id\", this.id);\n      if (this.slug) req.param(\"slug\", this.slug);\n      req.then(function (posts) {\n        if (posts.length > 0) {\n          _this.post = posts[0];\n          _this.loaded = true;\n        }\n      })[\"catch\"](function (error) {\n        _this.error = error;\n        _this.loaded = true;\n      });\n    }\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! wue-wpapi */ \"./build/utils/wpapi.js\")[\"default\"]))\n\n//# sourceURL=webpack:///./src/components/Post.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/PostView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PostView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Post */ \"./src/components/Post.vue\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Post: _components_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/views/PostView.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n.post[data-v-0335f4d0] {\\r\\n  display: block;\\r\\n  font-family: sans-serif;\\n}\\nh2.post-title[data-v-0335f4d0] {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  color: #000;\\r\\n  padding-bottom: 15px;\\r\\n  margin-bottom: 15px;\\r\\n  border-bottom: 1px solid #EEE;\\n}\\nh2.post-title a[data-v-0335f4d0] {\\r\\n  color: #368ecc;\\r\\n  text-decoration: none;\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Post.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=template&id=0335f4d0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Post.vue?vue&type=template&id=0335f4d0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"article\",\n    { staticClass: \"post\" },\n    [\n      !_vm.loaded\n        ? [\n            _c(\"Skeleton\", { staticClass: \"post\" }, [\n              _c(\"circle\", { attrs: { cx: \"50\", cy: \"50\", r: \"50\" } }),\n              _vm._v(\" \"),\n              _c(\"rect\", {\n                attrs: {\n                  x: \"120\",\n                  y: \"20\",\n                  rx: \"4\",\n                  ry: \"4\",\n                  width: \"70%\",\n                  height: \"15\"\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"rect\", {\n                attrs: {\n                  x: \"120\",\n                  y: \"43\",\n                  rx: \"4\",\n                  ry: \"4\",\n                  width: \"50%\",\n                  height: \"10\"\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"rect\", {\n                attrs: {\n                  x: \"120\",\n                  y: \"60\",\n                  rx: \"4\",\n                  ry: \"4\",\n                  width: \"40%\",\n                  height: \"10\"\n                }\n              })\n            ])\n          ]\n        : _vm.error\n        ? [\n            _c(\"p\", { staticClass: \"message error\" }, [\n              _vm._v(_vm._s(_vm.error))\n            ])\n          ]\n        : [\n            _c(\n              \"h2\",\n              { staticClass: \"post-title\" },\n              [\n                !_vm.isSingle\n                  ? _c(\n                      \"router-link\",\n                      {\n                        attrs: {\n                          to: { name: \"post\", params: { slug: this.post.slug } }\n                        }\n                      },\n                      [\n                        _vm._v(\n                          \"\\n        \" +\n                            _vm._s(_vm.post.title.rendered) +\n                            \"\\n      \"\n                        )\n                      ]\n                    )\n                  : _c(\"span\", [\n                      _vm._v(\n                        \"\\n        \" +\n                          _vm._s(_vm.post.title.rendered) +\n                          \"\\n      \"\n                      )\n                    ])\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"post-contents\" }, [\n              _vm.isSingle\n                ? _c(\"div\", {\n                    domProps: { innerHTML: _vm._s(_vm.post.content.rendered) }\n                  })\n                : _c(\"div\", {\n                    domProps: { innerHTML: _vm._s(_vm.post.excerpt.rendered) }\n                  })\n            ])\n          ]\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Post.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PostView.vue?vue&type=template&id=57f64f1f&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PostView.vue?vue&type=template&id=57f64f1f& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/views/PostView.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"298b214a\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Post.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/Post.vue":
/*!*********************************!*\
  !*** ./src/components/Post.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post_vue_vue_type_template_id_0335f4d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.vue?vue&type=template&id=0335f4d0&scoped=true& */ \"./src/components/Post.vue?vue&type=template&id=0335f4d0&scoped=true&\");\n/* harmony import */ var _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.vue?vue&type=script&lang=js& */ \"./src/components/Post.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Post_vue_vue_type_style_index_0_id_0335f4d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css& */ \"./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Post_vue_vue_type_template_id_0335f4d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Post_vue_vue_type_template_id_0335f4d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0335f4d0\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Post.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Post.vue?");

/***/ }),

/***/ "./src/components/Post.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/Post.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Post.vue?");

/***/ }),

/***/ "./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_0335f4d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=style&index=0&id=0335f4d0&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_0335f4d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_0335f4d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_0335f4d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_0335f4d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_0335f4d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/Post.vue?");

/***/ }),

/***/ "./src/components/Post.vue?vue&type=template&id=0335f4d0&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/components/Post.vue?vue&type=template&id=0335f4d0&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_0335f4d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=template&id=0335f4d0&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Post.vue?vue&type=template&id=0335f4d0&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_0335f4d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_0335f4d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Post.vue?");

/***/ }),

/***/ "./src/views/PostView.vue":
/*!********************************!*\
  !*** ./src/views/PostView.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PostView_vue_vue_type_template_id_57f64f1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostView.vue?vue&type=template&id=57f64f1f& */ \"./src/views/PostView.vue?vue&type=template&id=57f64f1f&\");\n/* harmony import */ var _PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostView.vue?vue&type=script&lang=js& */ \"./src/views/PostView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _PostView_vue_vue_type_template_id_57f64f1f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _PostView_vue_vue_type_template_id_57f64f1f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/PostView.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/PostView.vue?");

/***/ }),

/***/ "./src/views/PostView.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/PostView.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./PostView.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/PostView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/PostView.vue?");

/***/ }),

/***/ "./src/views/PostView.vue?vue&type=template&id=57f64f1f&":
/*!***************************************************************!*\
  !*** ./src/views/PostView.vue?vue&type=template&id=57f64f1f& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_template_id_57f64f1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./PostView.vue?vue&type=template&id=57f64f1f& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PostView.vue?vue&type=template&id=57f64f1f&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_template_id_57f64f1f___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_template_id_57f64f1f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/PostView.vue?");

/***/ })

}]);