exports.ids = [3];
exports.modules = {

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/ContactUs.vue?vue&type=template&id=2ae5fd22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>Contact Us</h1> <div>"+(_vm._s(_vm.content.body))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ContactUs.vue?vue&type=template&id=2ae5fd22&

// EXTERNAL MODULE: ./node_modules/@vue-storefront/shopify/lib/index.es.js
var index_es = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ContactUs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var ContactUsvue_type_script_lang_js_ = ({
  name: 'ContactUs',
  transition: 'fade',

  setup() {
    const {
      loading: contextsLoading,
      content,
      search
    } = Object(index_es["g" /* useContent */])('pageContents');
    Object(lib_index_es["onSSR"])(async () => {
      await search({
        slug: 'who-we-are',
        ContentType: 'page'
      });
    });
    return {
      content,
      contextsLoading
    };
  }

});
// CONCATENATED MODULE: ./pages/ContactUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ContactUsvue_type_script_lang_js_ = (ContactUsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/ContactUs.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ContactUsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a0c0fa04"
  
)

/* harmony default export */ var ContactUs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ContactUs.js.map