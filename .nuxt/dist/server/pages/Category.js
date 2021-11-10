exports.ids = [2];
exports.modules = {

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3b501660", content, true, context)
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("210d60a7", content, true, context)
};

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7532bb99", content, true, context)
};

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=b4ae474c&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-rating'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._l((Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max))),function(index){return _vm._t("icon-positive",function(){return [_c(_vm.injections.components.SfIcon,{key:("p" + index),tag:"component",staticClass:"sf-rating__icon",attrs:{"size":"0.875rem","icon":_vm.props.icon,"coverage":index === Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max)) &&
        _vm.$options.finalScore(_vm.props.score, _vm.props.max) % 1 > 0
          ? _vm.$options.finalScore(_vm.props.score, _vm.props.max) % 1
          : 1}})]})}),_vm._ssrNode(" "),_vm._l((parseInt(_vm.$options.finalMax(_vm.props.max), 10) -
    Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max))),function(index){return _vm._t("icon-negative",function(){return [_c(_vm.injections.components.SfIcon,{key:("n" + index),tag:"component",staticClass:"sf-rating__icon sf-rating__icon--negative",attrs:{"icon":_vm.props.icon}})]})})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=b4ae474c&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfRatingvue_type_script_lang_js_ = ({
  name: "SfRating",
  inject: {
    components: {
      default: {
        SfIcon: SfIcon["a" /* default */]
      }
    }
  },
  props: {
    /**
     * Maximum score
     */
    max: {
      type: Number,
      default: 5
    },

    /**
     * Score (obviously must be less than maximum)
     */
    score: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: "star"
    }
  },

  finalScore(score, max) {
    if (!score) {
      return 0;
    } else if (score < 0) {
      return 0;
    } else if (score > max && max > 0) {
      return max;
    } else if (max <= 0) {
      return 0;
    } else {
      return score;
    }
  },

  finalMax(max) {
    return !max || max <= 0 ? 1 : max;
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRating_SfRatingvue_type_script_lang_js_ = (SfRatingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(252)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfRating_SfRatingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "28cf725a"
  
)

/* harmony default export */ var SfRating = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2db9990c", content, true, context)
};

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(245);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-rating{display:flex}.sf-rating__icon{--icon-size:0.875rem;--icon-color:var(--c-primary);--icon-color-negative:var(--c-gray-variant)}.sf-rating__icon--negative{--icon-color:var(--icon-color-negative)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-product-card{box-sizing:border-box;position:relative;z-index:var(--product-card-z-index);max-width:10.625rem;max-width:var(--product-card-max-width,10.625rem);flex:0 1 10.625rem;flex:0 1 var(--product-card-max-width,10.625rem);height:var(--product-card-height);padding:var(--product-card-padding,var(--spacer-xs));background-color:var(--c-white);background-color:var(--product-card-background,var(--c-white))}.sf-product-card:after{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;transition:var(--product-card-transition);box-shadow:var(--product-card-box-shadow)}.sf-product-card:hover{--product-card-image-opacity:1;--product-card-image-even-opacity:1;--product-card-wishlist-icon-opacity:1;--product-card-add-button-opacity:1;--product-card-z-index:1}.sf-product-card:active,.sf-product-card:hover{--product-card-box-shadow:0px 4px 11px rgba(29,31,34,0.1)}.sf-product-card__link{display:block;width:100%;line-height:0;text-decoration:none;margin:0;margin:var(--product-card-link-margin,0);text-align:left}.sf-product-card__title{font:var(--font-weight--normal) var(--h5-font-size)/1.6 var(--font-family--secondary);font:var(--product-card-title-font,var(--product-card-title-font-weight,var(--font-weight--normal)) var(--product-card-title-font-size,var(--h5-font-size))/var(--product-card-title-font-line-height,1.6) var(--product-card-title-font-family,var(--font-family--secondary)));color:var(--c-link);color:var(--product-card-title-color,var(--c-link));margin:var(--product-card-title-margin,var(--spacer-xs) 0 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sf-product-card__image-wrapper{position:relative}.sf-product-card__image,.sf-product-card__picture{transition:opacity .15s ease-in-out;transition:var(--product-card-image-transition,opacity .15s ease-in-out);opacity:var(--product-card-image-opacity)}.sf-product-card__image:nth-child(2n),.sf-product-card__picture:nth-child(2n){position:absolute;top:0;left:0;opacity:0;opacity:var(--product-card-image-even-opacity,0)}.sf-product-card__image .sf-image,.sf-product-card__picture .sf-image{--image-width:100%;--image-height:auto}.sf-product-card__badge{position:absolute;top:var(--spacer-xs);top:var(--product-card-badge-top,var(--spacer-xs));left:0;left:var(--product-card-badge-left,0)}.sf-product-card__add-button{--circle-icon-position:absolute;--button-box-shadow:0px 4px 11px rgba(29,31,34,0.1);right:1rem;right:var(--product-card-add-button-right,1rem);bottom:0;bottom:var(--product-card-add-button-bottom,0);display:none;display:var(--product-card-add-button-display,none);transform:translate3d(0,50%,0);transform:var(--product-card-add-button-transform,translate3d(0,50%,0));opacity:0;opacity:var(--product-card-add-button-opacity,0)}.sf-product-card__add-button:focus{--product-card-add-button-opacity:1}.sf-product-card__price{margin:0;margin:var(--product-card-margin,0)}.sf-product-card__reviews{display:flex;align-items:center}.sf-product-card__rating{display:flex}.sf-product-card__reviews-count{margin:var(--product-card-reviews-count-margin,0 0 0 var(--spacer-xs));color:var(--c-text);color:var(--product-card-reviews-count-color,var(--c-text));text-decoration:none;font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--secondary);font:var(--product-reviews-count-font,var(--product-reviews-count-font-weight,var(--font-weight--light)) var(--product-reviews-count-font-size,var(--font-size--sm))/var(--product-reviews-count-font-line-height,1.6) var(--product-reviews-count-font-family,var(--font-family--secondary)))}.sf-product-card__wishlist-icon{--icon-color:var(--c-dark-variant);position:absolute;top:var(--spacer-xs);top:var(--product-card-wishlist-icon-top,var(--spacer-xs));right:var(--spacer-xs);right:var(--product-card-wishlist-icon-right,var(--spacer-xs));padding:0;padding:var(--product-card-wishlist-icon-padding,0);opacity:1;opacity:var(--product-card-wishlist-icon-opacity,1);transition:opacity .15s ease-in-out;transition:var(--product-card-wishlist-icon-transition,opacity .15s ease-in-out);cursor:pointer}.sf-product-card.on-wishlist,.sf-product-card__wishlist-icon:focus{--product-card-wishlist-icon-opacity:1}@media(min-width:1024px){.sf-product-card{--product-card-max-width:15.5rem;--product-card-padding:var(--spacer-sm);--product-card-transition:box-shadow 150ms ease-in-out;--product-card-wishlist-icon-top:var(--spacer-base);--product-card-wishlist-icon-right:var(--spacer-base);--product-card-wishlist-icon-opacity:0;--product-card-add-button-display:flex;--product-card-title-margin:var(--spacer-sm) 0 0 0;--product-card-margin:var(--spacer-xs) 0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2b915ef0", content, true, context)
};

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-breadcrumbs__list{display:flex;flex-wrap:wrap;padding:0;margin:0;list-style:none}.sf-breadcrumbs__list-item:not(:last-child):after{padding:var(--breadcrumbs-list-item-before-padding,0 var(--spacer-sm));content:\"|\";content:var(--breadcrumbs-list-item-seperator,\"|\");color:var(--c-text-muted);color:var(--breadcrumbs-list-item-before-color,var(--c-text-muted))}.sf-breadcrumbs__breadcrumb{font:var(--font-weight--normal) var(--font-size--xs)/1.6 var(--font-family--secondary);font:var(--breadcrumbs-font,var(--breadcrumbs-font-weight,var(--font-weight--normal)) var(--breadcrumbs-font-size,var(--font-size--xs))/var(--breadcrumbs-font-line-height,1.6) var(--breadcrumbs-font-family,var(--font-family--secondary)));--link-color:var(--c-text-muted);--link-text-decoration:none}.sf-breadcrumbs__breadcrumb:hover{--link-color:var(--c-text)}.sf-breadcrumbs__breadcrumb.current{--link-color:var(--c-text);cursor:default}@media(min-width:1024px){.sf-breadcrumbs{--breadcrumbs-font-size:var(--font-size--sm)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-color{box-sizing:border-box;position:relative;width:2.5rem;width:var(--color-width,var(--color-size,2.5rem));height:2.5rem;height:var(--color-height,var(--color-size,2.5rem));background:var(--color-background);border-radius:var(--color-border-radius);--color-box-shadow-opacity:0;--color-box-shadow-transition-duration:150ms;transition:transform .15s linear}.sf-color:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;border-radius:inherit;transition:opacity .2s ease-in-out,box-shadow .2s ease-in-out;transition:var(--color-box-shadow-transition,opacity var(--color-box-shadow-transition-opacity-duration,.2s) var(--color-box-shadow-transition-opacity-timing-function,ease-in-out),box-shadow var(--color-box-shadow-transition-box-shadow-duration,.2s) var(--color-box-shadow-transition-box-shadow-timing-function,ease-in-out));opacity:var(--color-box-shadow-opacity);box-shadow:0 4px 4px 0 var(--c-black);box-shadow:var(--color-box-shadow,var(--color-box-shadow-h-offset,0) var(--color-box-shadow-v-offset,4px) var(--color-box-shadow-blur,4px) var(--color-box-shadow-spread,0) var(--color-box-shadow-color,var(--c-black)));will-change:opacity,box-shadow}.sf-color__badge{--badge-padding:var(--spacer-2xs);--badge-border-radius:100%;position:absolute}@media(min-width:1024px){.sf-color{--color-size:0.75rem}.sf-color.is-active,.sf-color:hover{transform:scale(1.667);--color-box-shadow-opacity:0.25}.sf-color:active{--color-box-shadow:none}}.sf-color--rounded{--color-border-radius:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-add-to-cart{display:flex}.sf-add-to-cart__button{--button-font-weight:var(--font-weight--semibold);--button-width:100%;align-items:center}.sf-add-to-cart__button:disabled{color:var(--c-text-disabled)}.sf-add-to-cart__select-quantity{--add-to-cart-select-quantity-margin:0 var(--spacer-base) 0 0;flex:none;margin:var(--add-to-cart-select-quantity-margin,0 0 0 var(--spacer-xs))}@media(min-width:1024px){.sf-add-to-cart{--add-to-cart-select-quantity-display:flex}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4ea4bfa0", content, true, context)
};

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("28c6b8eb", content, true, context)
};

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6458750e", content, true, context)
};

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ebc8337", content, true, context)
};

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4ddf6cb0", content, true, context)
};

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("68e4654d", content, true, context)
};

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=7700ba53&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.injections.components.SfButton,_vm._g(_vm._b({tag:"component",class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-button--pure sf-color',
    { 'is-active': _vm.props.selected } ],style:(Object.assign({}, _vm.data.style,
    _vm.data.staticStyle,
    {'--color-background': _vm.props.color})),attrs:{"aria-pressed":_vm.props.selected.toString(),"data-testid":_vm.props.color}},'component',_vm.data.attrs,false),_vm.listeners),[_c('transition',{attrs:{"name":"sf-bounce"}},[_vm._t("badge",function(){return [(_vm.props.selected && _vm.props.hasBadge)?_c(_vm.injections.components.SfBadge,{tag:"component",staticClass:"sf-color__badge smartphone-only"},[_c(_vm.injections.components.SfIcon,{tag:"component",attrs:{"size":"16px","color":"white","icon":"check","aria-hidden":"true"}})],1):_vm._e()]},null,{ props: _vm.props })],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=7700ba53&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfColorvue_type_script_lang_js_ = ({
  name: "SfColor",
  inject: {
    components: {
      default: {
        SfBadge: SfBadge["a" /* default */],
        SfIcon: SfIcon["a" /* default */],
        SfButton: SfButton["a" /* default */]
      }
    }
  },
  props: {
    color: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    hasBadge: {
      type: Boolean,
      default: true
    }
  },

  style(color) {
    return color;
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfColor_SfColorvue_type_script_lang_js_ = (SfColorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(275)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfColor_SfColorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "4fce9ff5"
  
)

/* harmony default export */ var SfColor = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=508816ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-product-card",attrs:{"data-testid":"product-card"}},[_vm._ssrNode("<div class=\"sf-product-card__image-wrapper\">","</div>",[_vm._t("image",function(){return [_c('SfButton',_vm._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.link,"data-testid":"product-link"}},_vm.$listeners),[(Array.isArray(_vm.image))?_vm._l((_vm.image.slice(0, 2)),function(picture,key){return _c('SfImage',{key:key,staticClass:"sf-product-card__picture",attrs:{"src":picture,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})}):_c('SfImage',{staticClass:"sf-product-card__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})],2)]},null,{ image: _vm.image, title: _vm.title, link: _vm.link, imageHeight: _vm.imageHeight, imageWidth: _vm.imageWidth }),_vm._ssrNode(" "),_vm._t("badge",function(){return [(_vm.badgeLabel)?_c('SfBadge',{staticClass:"sf-product-card__badge",class:_vm.badgeColorClass},[_vm._v(_vm._s(_vm.badgeLabel))]):_vm._e()]},null,{ badgeLabel: _vm.badgeLabel, badgeColor: _vm.badgeColor }),_vm._ssrNode(" "),(_vm.wishlistIcon !== false)?_c('SfButton',{class:_vm.wishlistIconClasses,attrs:{"aria-label":(_vm.ariaLabel + " " + _vm.title),"data-testid":"product-wishlist-button"},on:{"click":_vm.toggleIsOnWishlist}},[_vm._t("wishlist-icon",function(){return [_c('SfIcon',{attrs:{"icon":_vm.currentWishlistIcon,"size":"22px","data-test":"sf-wishlist-icon"}})]},null,{ currentWishlistIcon: _vm.currentWishlistIcon })],2):_vm._e(),_vm._ssrNode(" "),(_vm.showAddToCartButton)?[_vm._t("add-to-cart",function(){return [_c('SfCircleIcon',{staticClass:"sf-product-card__add-button",attrs:{"aria-label":("Add to Cart " + _vm.title),"has-badge":_vm.showAddedToCartBadge,"disabled":_vm.addToCartDisabled,"data-testid":"product-add-icon"},on:{"click":_vm.onAddToCart}},[_c('div',{staticClass:"sf-product-card__add-button--icons"},[(!_vm.isAddingToCart && !_vm.isAddedToCart)?_c('transition',{attrs:{"name":"sf-pulse","mode":"out-in"}},[_vm._t("add-to-cart-icon",function(){return [_c('SfIcon',{key:"add_to_cart",attrs:{"icon":"add_to_cart","size":"20px","color":"white"}})]})],2):_c('transition',{attrs:{"name":"sf-pulse","mode":"out-in"}},[_vm._t("adding-to-cart-icon",function(){return [_c('SfIcon',{key:"added_to_cart",attrs:{"icon":"added_to_cart","size":"20px","color":"white"}})]})],2)],1)])]},null,{
          isAddedToCart: _vm.isAddedToCart,
          showAddedToCartBadge: _vm.showAddedToCartBadge,
          isAddingToCart: _vm.isAddingToCart,
          title: _vm.title,
        })]:_vm._e()],2),_vm._ssrNode(" "),_vm._t("title",function(){return [_c('SfButton',_vm._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.link,"data-testid":"product-link"}},_vm.$listeners),[_c('h3',{staticClass:"sf-product-card__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])])]},null,{ title: _vm.title, link: _vm.link }),_vm._ssrNode(" "),_vm._t("price",function(){return [(_vm.regularPrice)?_c('SfPrice',{staticClass:"sf-product-card__price",attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}}):_vm._e()]},null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._ssrNode(" "),_vm._t("reviews",function(){return [(typeof _vm.scoreRating === 'number')?_c('div',{staticClass:"sf-product-card__reviews"},[_c('SfRating',{staticClass:"sf-product-card__rating",attrs:{"max":_vm.maxRating,"score":_vm.scoreRating}}),_vm._v(" "),(_vm.reviewsCount)?_c('SfButton',{staticClass:"sf-button--pure sf-product-card__reviews-count",attrs:{"aria-label":("Read " + _vm.reviewsCount + " reviews about " + _vm.title),"data-testid":"product-review-button"},on:{"click":function($event){return _vm.$emit('click:reviews')}}},[_vm._v("\n        ("+_vm._s(_vm.reviewsCount)+")\n      ")]):_vm._e()],1):_vm._e()]},null,{ maxRating: _vm.maxRating, scoreRating: _vm.scoreRating })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=508816ba&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/variables/colors.js
var colors = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue + 4 modules
var SfRating = __webpack_require__(249);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfProductCardvue_type_script_lang_js_ = ({
  name: "SfProductCard",
  components: {
    SfPrice: SfPrice["a" /* default */],
    SfRating: SfRating["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfBadge: SfBadge["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [Array, Object, String],
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 216
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 326
    },

    /**
     * Badge label
     */
    badgeLabel: {
      type: String,
      default: ""
    },

    /**
     * Badge color
     * It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.
     * Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.
     */
    badgeColor: {
      type: String,
      default: ""
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Link to product page
     */
    link: {
      type: [String, Object],
      default: ""
    },

    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined
    },

    /**
     * Product rating
     */
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Product reviews count
     */
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Maximum product rating
     */
    maxRating: {
      type: [Number, String],
      default: 5
    },

    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart"
    },

    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    isOnWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },

    /**
     * Status of whether product is on wish list or not
     */
    isOnWishlist: {
      type: Boolean,
      default: false
    },

    /**
     * Status of showing add to cart button
     */
    showAddToCartButton: {
      type: Boolean,
      default: false
    },

    /**
     * isAddedToCart status of whether button is showed, product is added or not
     */
    isAddedToCart: {
      type: Boolean,
      deafult: false
    },

    /**
     * addToCartDisabled status of whether button is disabled when out of stock
     */
    addToCartDisabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isAddingToCart: false
    };
  },

  computed: {
    isSFColors() {
      return colors["a" /* colorsValues */].includes(this.badgeColor.trim());
    },

    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : "";
    },

    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },

    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },

    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },

    wishlistIconClasses() {
      const defaultClass = "sf-button--pure sf-product-card__wishlist-icon";
      return `${defaultClass} ${this.isOnWishlist ? "on-wishlist" : ""}`;
    }

  },
  methods: {
    toggleIsOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    },

    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProductCard_SfProductCardvue_type_script_lang_js_ = (SfProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(254)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfProductCard_SfProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4390634c"
  
)

/* harmony default export */ var SfProductCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=template&id=1e13d9b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-add-to-cart"},[_vm._t("quantity-select-input",function(){return [_c('SfQuantitySelector',{staticClass:"sf-add-to-cart__select-quantity",attrs:{"qty":_vm.qty,"aria-label":"Quantity","disabled":_vm.disabled},on:{"input":function($event){return _vm.$emit('input', $event)}}})]},null,{ qty: _vm.qty }),_vm._ssrNode(" "),_vm._t("add-to-cart-btn",function(){return [_c('SfButton',_vm._g({staticClass:"sf-add-to-cart__button",attrs:{"disabled":_vm.disabled}},_vm.$listeners),[_vm._v("\n      Add to cart\n    ")])]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=template&id=1e13d9b3&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue + 4 modules
var SfQuantitySelector = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfAddToCartvue_type_script_lang_js_ = ({
  name: "SfAddToCart",
  components: {
    SfButton: SfButton["a" /* default */],
    SfQuantitySelector: SfQuantitySelector["a" /* default */]
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Boolean to indicate whether product
     * can be added to cart
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAddToCart_SfAddToCartvue_type_script_lang_js_ = (SfAddToCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(277)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfAddToCart_SfAddToCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7f7ce7dc"
  
)

/* harmony default export */ var SfAddToCart = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=template&id=68ddb570&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('nav',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-breadcrumbs'],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"aria-label":"breadcrumb"}},'nav',_vm.data.attrs,false),_vm.listeners),[_vm._ssrNode("<ol class=\"sf-breadcrumbs__list\">","</ol>",_vm._l((_vm.props.breadcrumbs),function(breadcrumb,i){return _vm._ssrNode("<li"+(_vm._ssrAttr("aria-current",_vm.$options.breadcrumbLast(_vm.props.breadcrumbs) === i && 'page'))+" class=\"sf-breadcrumbs__list-item\">","</li>",[(_vm.$options.breadcrumbLast(_vm.props.breadcrumbs) !== i)?[_vm._t("link",function(){return [_c(_vm.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb",attrs:{"link":breadcrumb.link,"data-testid":breadcrumb.text}},[_vm._v("\n            "+_vm._s(breadcrumb.text)+"\n          ")])]},null,{ breadcrumb: breadcrumb })]:[_vm._t("current",function(){return [_c(_vm.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{"link":breadcrumb.link}},[_vm._v("\n            "+_vm._s(breadcrumb.text)+"\n          ")])]},null,{ breadcrumb: breadcrumb })]],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=template&id=68ddb570&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfBreadcrumbsvue_type_script_lang_js_ = ({
  name: "SfBreadcrumbs",
  inject: {
    components: {
      default: {
        SfLink: SfLink["a" /* default */]
      }
    }
  },
  props: {
    /**
     * List of breadcrumbs (array of nested objects: `[ { text, route } ]`)
     */
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },

  breadcrumbLast(breadcrumbs) {
    return breadcrumbs.length - 1;
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBreadcrumbs_SfBreadcrumbsvue_type_script_lang_js_ = (SfBreadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBreadcrumbs_SfBreadcrumbsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "3723a8cf"
  
)

/* harmony default export */ var SfBreadcrumbs = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-filter{--checkbox-order:1;--checkbox-border-radius:100%;--color-size:1.5rem;width:100%;--checkbox-border-color:transparent}.sf-filter__color{margin:var(--filter-color-margin,0 var(--spacer-sm) 0 0)}.sf-filter__label{display:flex;display:var(--filter-label-display,flex);align-items:center;align-items:var(--filter-label-align-items,center);margin:0;margin:var(--filter-label-margin,0);color:var(--c-link);color:var(--filter-label-color,var(--c-link));font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--primary);font:var(--filter-label-font,var(--filter-label-font-weight,var(--font-weight--normal)) var(--filter-label-font-size,var(--font-size--base))/var(--filter-label-font-line-height,1.4) var(--filter-label-font-family,var(--font-family--primary)));-webkit-text-decoration:var(--filter-label-text-decoration);text-decoration:var(--filter-label-text-decoration);transition:transform .15s ease-in-out;transform:var(--filter-label-transform);transform-origin:center left}.sf-filter__count{display:var(--filter-count-display);margin:var(--filter-count-margin,0 var(--spacer-sm) 0 auto);color:var(--c-text-muted);color:var(--filter-count-color,var(--c-text-muted));font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--filter-count-font,var(--filter-count-font-weight,var(--font-weight--normal)) var(--filter-count-font-size,var(--font-size--base))/var(--filter-count-font-line-height,1.4) var(--filter-count-font-family,var(--font-family--secondary)))}.sf-filter--active{--filter-count-color:var(--c-primary);--filter-label-color:var(--c-primary)}@media(min-width:1024px){.sf-filter{--checkbox-border-radius:0;--checkbox-border-color:var(--c-text-muted);--checkbox-order:0;--filter-color-margin:0;--filter-label-margin:0 0 0 var(--spacer-xs);--filter-count-margin:0 0 0 auto;--filter-label-font-size:var(--font-size--sm);--filter-count-font-size:var(--font-size--sm)}.sf-filter.is-active{--filter-label-color:var(--c-text);--filter-count-color:var(--c-text-muted);--checkbox-border-color:var(--c-primary)}}@media(min-width:1024px){.sf-filter.is-color{--checkbox-display:none;--filter-label-display:none;--filter-count-display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(301);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-product-card-horizontal{display:flex;box-sizing:border-box;padding:var(--product-card-horizontal-padding,var(--spacer-xs));background-color:var(--c-white);background-color:var(--product-card-horizontal-background,var(--c-white));--property-value-font-weight:var(--font-weight--normal)}.sf-product-card-horizontal__link{color:inherit;text-decoration:inherit}.sf-product-card-horizontal__link--image{display:block;line-height:0}.sf-product-card-horizontal__image-wrapper{flex:0 0 5.3125rem;flex:0 0 var(--product-card-horizontal-image-width,5.3125rem);position:relative}.sf-product-card-horizontal__image-wrapper:hover{--product-card-horizontal-image-opacity:1;--product-card-horizontal-image-even-opacity:1}.sf-product-card-horizontal__image,.sf-product-card-horizontal__picture{transition:opacity .15s ease-in-out;transition:var(--product-card-horizontal-image-transition,opacity .15s ease-in-out);opacity:var(--product-card-horizontal-image-opacity)}.sf-product-card-horizontal__image:nth-child(2n),.sf-product-card-horizontal__picture:nth-child(2n){position:absolute;top:0;left:0;opacity:0;opacity:var(--product-card-horizontal-image-even-opacity,0)}.sf-product-card-horizontal__main{position:relative;display:flex;flex:1;flex-direction:column;flex-direction:var(--product-card-horizontal-flex-direction,column);padding:var(--product-card-horizontal-main-padding,0 0 0 var(--spacer-sm))}.sf-product-card-horizontal__actions-wrapper,.sf-product-card-horizontal__details{display:flex;flex-direction:column}.sf-product-card-horizontal__actions-wrapper{flex:1;align-items:flex-start;align-items:var(--product-card-horizontal-actions-wrapper,flex-start);margin:var(--product-card-horizontal-actions-wrapper-margin,var(--spacer-sm) 0 0 0)}.sf-product-card-horizontal__title{margin:0;color:var(--c-link);color:var(--product-card-horizontal-title-color,var(--c-link));font:var(--font-weight--medium) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--product-card-horizontal-title-font,var(--product-card-horizontal-title-font-weight,var(--font-weight--medium)) var(--product-card-horizontal-title-font-size,var(--font-size--base))/var(--product-card-horizontal-title-font-line-height,1.6) var(--product-card-horizontal-title-font-family,var(--font-family--secondary)))}.sf-product-card-horizontal__description{margin:var(--product-card-horizontal-description-margin,var(--spacer-sm) 0);color:var(--c-text-muted);color:var(--product-card-horizontal-description-color,var(--c-text-muted));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--product-card-horizontal-description-font,var(--product-card-horizontal-description-font-weight,var(--font-weight--normal)) var(--product-card-horizontal-description-font-size,var(--font-size--base))/var(--product-card-horizontal-description-font-line-height,1.6) var(--product-card-horizontal-description-font-family,var(--font-family--primary)))}.sf-product-card-horizontal__configuration{margin:0;margin:var(--product-card-horizontal-configuration-margin,0)}.sf-product-card-horizontal__reviews{display:flex;align-items:center;margin:auto 0 0;margin:var(--product-card-horizontal-review-margin,auto 0 0 0);font:var(--font-weight--light) var(--font-size--sm)/1.4 var(--font-family--secondary);font:var(--product-card-horizontal-reviews-font,var(--product-card-horizontal-reviews-font-weight,var(--font-weight--light)) var(--product-card-horizontal-reviews-font-size,var(--font-size--sm))/var(--product-card-horizontal-reviews-font-line-height,1.4) var(--product-card-horizontal-reviews-font-family,var(--font-family--secondary)))}.sf-product-card-horizontal__reviews-count{--button-font-size:var(--font-size--sm);--button-font-weight:var(--font-weight--light);color:var(--c-text);text-decoration:none;margin:0 0 0 var(--spacer-xs)}.sf-product-card-horizontal__actions{margin:0;margin:var(--product-card-horizontal-actions-margin,0)}.sf-product-card-horizontal__add-to-cart{margin:0;margin:var(--product-card-horizontal-add-to-cart-margin,0)}.sf-product-card-horizontal__wishlist-icon{--icon-color:var(--c-dark-variant);position:absolute;top:0;right:0}.sf-product-card-horizontal:hover{box-shadow:0 4px 11px rgba(29,31,34,.1);box-shadow:var(--product-card-horizontal-box-shadow,0 4px 11px rgba(29,31,34,.1))}@media(min-width:1024px){.sf-product-card-horizontal{--product-card-horizontal-flex-direction:row;--product-card-horizontal-image-width:8.75rem;--product-card-horizontal-padding:var(--spacer-xs) var(--spacer-sm) var(--spacer-xs) var(--spacer-xs);--product-card-horizontal-actions-wrapper:flex-end;--product-card-horizontal-review-margin:var(--spacer-xs) 0 0 0;--product-card-horizontal-configuration-margin:auto 0 var(--spacer-xs) 0;--product-card-horizontal-add-to-cart-margin:auto 0 0 0;--product-card-horizontal-actions-margin:var(--spacer-base) 0 0 0;--product-card-horizontal-actions-wrapper-margin:0;--product-card-horizontal-title-font-weight:var(--font-weight--normal)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-pagination{display:flex;align-items:center}.sf-pagination__item{--link-text-decoration:none;color:var(--c-gray-variant);color:var(--pagination-item-color,var(--c-gray-variant));width:var(--pagination-item-width);height:var(--pagination-item-height);margin:var(--pagination-item-margin,0 var(--spacer-2xs));font:var(--font-weight--medium) var(--font-size--lg)/1.4 var(--font-family--secondary);font:var(--pagination-font,var(--pagination-font-weight,var(--font-weight--medium)) var(--pagination-font-size,var(--font-size--lg))/var(--pagination-font-line-height,1.4) var(--pagination-font-family,var(--font-family--secondary)))}.sf-pagination__item--next,.sf-pagination__item.prev{--pagination-item-width:1.125rem;--pagination-item-height:1.125rem}.sf-pagination__item.prev{--pagination-item-margin:0 var(--spacer-base) 0 0}.sf-pagination__item.next{--pagination-item-margin:0 0 0 var(--spacer-base)}.sf-pagination__item.current{--pagination-item-color:var(--c-text);cursor:default}.sf-pagination__item:hover{--pagination-item-color:var(--c-primary)}@media(min-width:1024px){.sf-pagination{--pagination-item-margin:0 var(--spacer-xs)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(303);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-accordion-item{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.sf-accordion-item__header{display:flex;justify-content:space-between;justify-content:var(--accordion-item-header-justify,space-between);padding:var(--accordion-item-header-padding,var(--spacer-sm));color:var(--accordion-item-header-color);transition:color .15s ease-in-out;text-align:left;width:100%;border:var(--accordion-item-header-border,var(--accordion-item-header-border-style,solid) var(--accordion-item-header-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--accordion-item-header-border-width,0 0 1px 0);font:var(--font-weight--medium) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--accordion-item-header-font,var(--accordion-item-header-font-weight,var(--font-weight--medium)) var(--accordion-item-header-font-size,var(--font-size--base))/var(--accordion-item-header-font-line-height,1.4) var(--accordion-item-header-font-family,var(--font-family--secondary)))}.sf-accordion-item__header.is-open{--accordion-item-header-border-width:0;--accordion-item-header-color:var(--c-primary);--chevron-color:var(--c-primary)}.sf-accordion-item__content{padding:var(--accordion-item-content-padding,var(--spacer-base) var(--spacer-sm));color:var(--c-text);color:var(--accordion-item-content-color,var(--c-text));border:var(--accordion-item-content-border,var(--accordion-item-content-border-style,solid) var(--accordion-item-content-border-color,var(--c-light)));border-width:1px 0;border-width:var(--accordion-item-content-border-width,1px 0);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--accordion-item-content-font,var(--accordion-item-content-font-weight,var(--font-weight--light)) var(--accordion-item-content-font-size,var(--font-size--base))/var(--accordion-item-content-font-line-height,1.6) var(--accordion-item-content-font-family,var(--font-family--primary)))}.sf-accordion-item__chevron{display:none;display:var(--accordion-item-chevron-display,none);flex:0 0 auto}@media(min-width:1024px){.sf-accordion-item{--accordion-item-header-padding:var(--spacer-xs) 0;--accordion-item-header-font-size:var(--h4-font-size);--accordion-item-header-font-weight:var(--font-weight--normal);--accordion-item-header-border-width:0;--accordion-item-content-border-width:0;--accordion-item-content-padding:var(--spacer-base) 0}}.sf-accordion.has-chevron{--accordion-item-chevron-display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(304);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-accordion-item{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.sf-accordion-item__header{display:flex;justify-content:space-between;justify-content:var(--accordion-item-header-justify,space-between);padding:var(--accordion-item-header-padding,var(--spacer-sm));color:var(--accordion-item-header-color);transition:color .15s ease-in-out;text-align:left;width:100%;border:var(--accordion-item-header-border,var(--accordion-item-header-border-style,solid) var(--accordion-item-header-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--accordion-item-header-border-width,0 0 1px 0);font:var(--font-weight--medium) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--accordion-item-header-font,var(--accordion-item-header-font-weight,var(--font-weight--medium)) var(--accordion-item-header-font-size,var(--font-size--base))/var(--accordion-item-header-font-line-height,1.4) var(--accordion-item-header-font-family,var(--font-family--secondary)))}.sf-accordion-item__header.is-open{--accordion-item-header-border-width:0;--accordion-item-header-color:var(--c-primary);--chevron-color:var(--c-primary)}.sf-accordion-item__content{padding:var(--accordion-item-content-padding,var(--spacer-base) var(--spacer-sm));color:var(--c-text);color:var(--accordion-item-content-color,var(--c-text));border:var(--accordion-item-content-border,var(--accordion-item-content-border-style,solid) var(--accordion-item-content-border-color,var(--c-light)));border-width:1px 0;border-width:var(--accordion-item-content-border-width,1px 0);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--accordion-item-content-font,var(--accordion-item-content-font-weight,var(--font-weight--light)) var(--accordion-item-content-font-size,var(--font-size--base))/var(--accordion-item-content-font-line-height,1.6) var(--accordion-item-content-font-family,var(--font-family--primary)))}.sf-accordion-item__chevron{display:none;display:var(--accordion-item-chevron-display,none);flex:0 0 auto}@media(min-width:1024px){.sf-accordion-item{--accordion-item-header-padding:var(--spacer-xs) 0;--accordion-item-header-font-size:var(--h4-font-size);--accordion-item-header-font-weight:var(--font-weight--normal);--accordion-item-header-border-width:0;--accordion-item-content-border-width:0;--accordion-item-content-padding:var(--spacer-base) 0}}.sf-accordion.has-chevron{--accordion-item-chevron-display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_02a8a9e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(305);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_02a8a9e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_02a8a9e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_02a8a9e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_02a8a9e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#category[data-v-02a8a9e1]{box-sizing:border-box}@media(min-width:1024px){#category[data-v-02a8a9e1]{max-width:1240px;margin:0 auto}}.main.section[data-v-02a8a9e1]{padding:var(--spacer-xs)}@media(min-width:1024px){.main.section[data-v-02a8a9e1]{padding:0}}.breadcrumbs[data-v-02a8a9e1]{margin:var(--spacer-base) auto var(--spacer-lg)}.navbar[data-v-02a8a9e1]{position:relative;display:flex;border:solid var(--c-light);border-width:0 0 1px}@media(min-width:1024px){.navbar[data-v-02a8a9e1]{border-width:1px 0}}.navbar.section[data-v-02a8a9e1]{padding:var(--spacer-sm)}@media(min-width:1024px){.navbar.section[data-v-02a8a9e1]{padding:0}}.navbar__aside[data-v-02a8a9e1],.navbar__main[data-v-02a8a9e1]{display:flex;align-items:center;padding:var(--spacer-sm) 0}.navbar__aside[data-v-02a8a9e1]{flex:0 0 15%;padding:var(--spacer-sm) var(--spacer-sm);border:solid var(--c-light);border-width:0 1px 0 0}.navbar__main[data-v-02a8a9e1]{flex:1;padding:0;justify-content:space-between}@media(min-width:1024px){.navbar__main[data-v-02a8a9e1]{padding:var(--spacer-xs) var(--spacer-xl)}}.navbar__title[data-v-02a8a9e1]{--heading-title-font-weight:var(--font-weight--semibold);--heading-title-font-size:var(--font-size--xl)}.navbar__filters-icon[data-v-02a8a9e1]{margin:0 0 0 var(--spacer-xs);order:1}@media(min-width:1024px){.navbar__filters-icon[data-v-02a8a9e1]{margin:0 var(--spacer-xs) 0 0;order:0}}.navbar__filters-button[data-v-02a8a9e1]{display:flex;align-items:center;--button-font-size:var(--font-size--base);--button-text-decoration:none;--button-color:var(--c-link);--button-font-weight:var(--font-weight--normal)}@media(max-width:1023px){.navbar__filters-button[data-v-02a8a9e1]{--button-font-weight:var(--font-weight--medium);order:2}}.navbar__filters-button svg[data-v-02a8a9e1]{fill:var(--c-text-muted);transition:fill .15s ease}.navbar__filters-button:hover svg[data-v-02a8a9e1]{fill:var(--c-primary)}.navbar__label[data-v-02a8a9e1]{font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal);color:var(--c-text-muted)}@media(min-width:1024px){.navbar__label[data-v-02a8a9e1]{color:var(--c-link);margin:0 var(--spacer-2xs) 0 0}}.navbar__select[data-v-02a8a9e1]{--select-width:220px;--select-padding:0;--select-height:auto;--select-selected-padding:0 var(--spacer-lg) 0 var(--spacer-2xs);--select-margin:0;--select-option-font-size:var(--font-size-sm);--select-error-message-height:0}.navbar__select[data-v-02a8a9e1]  .sf-select__dropdown{font-size:var(--font-size-sm);font-family:var(--font-family--secondary);font-weight:var(--font-weight--light);margin:0}.navbar__select[data-v-02a8a9e1]  .sf-select__placeholder{--select-option-font-size:var(--font-size-sm)}.navbar__sort[data-v-02a8a9e1]{display:flex;align-items:center;margin:0 auto 0 var(--spacer-2xl)}.navbar__counter[data-v-02a8a9e1]{font-family:var(--font-family--secondary);order:1}@media(min-width:1024px){.navbar__counter[data-v-02a8a9e1]{margin:auto 0 auto auto;order:0}}.navbar__view[data-v-02a8a9e1]{display:flex;align-items:center;order:0}@media(min-width:1024px){.navbar__view[data-v-02a8a9e1]{margin:0 0 0 var(--spacer-2xl);order:0}}.navbar__view-icon[data-v-02a8a9e1]{cursor:pointer;margin:0 var(--spacer-base) 0 0}.navbar__view-icon[data-v-02a8a9e1]:last-child{margin:0}.navbar__view-label[data-v-02a8a9e1]{margin:0 var(--spacer-sm) 0 0;font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);text-decoration:none;color:var(--c-link)}.sort-by[data-v-02a8a9e1]{flex:unset;width:11.875rem}.main[data-v-02a8a9e1]{display:flex}.sidebar[data-v-02a8a9e1]{flex:0 0 15%;padding:var(--spacer-sm);border:solid var(--c-light);border-width:0 1px 0 0}.sidebar-filters[data-v-02a8a9e1]{--sidebar-title-display:none;--sidebar-top-padding:0}@media(min-width:1024px){.sidebar-filters[data-v-02a8a9e1]{--sidebar-content-padding:0 var(--spacer-xl);--sidebar-bottom-padding:0 var(--spacer-xl)}}.list[data-v-02a8a9e1]{--menu-item-font-size:var(--font-size--sm)}.list__item[data-v-02a8a9e1]:not(:last-of-type){--list-item-margin:0 0 var(--spacer-sm) 0}.list__item .nuxt-link-exact-active[data-v-02a8a9e1]{text-decoration:underline}.products[data-v-02a8a9e1]{box-sizing:border-box;flex:1;margin:0}.products__grid[data-v-02a8a9e1]{justify-content:space-between}@media(min-width:1024px){.products__grid[data-v-02a8a9e1]{justify-content:flex-start}}.products__grid[data-v-02a8a9e1],.products__list[data-v-02a8a9e1]{display:flex;flex-wrap:wrap}.products__product-card[data-v-02a8a9e1]{--product-card-title-margin:var(--spacer-base) 0 0 0;--product-card-title-font-weight:var(--font-weight--medium);--product-card-title-margin:var(--spacer-xs) 0 0 0;flex:1 1 50%}@media(min-width:1024px){.products__product-card[data-v-02a8a9e1]{--product-card-title-font-weight:var(--font-weight--normal);--product-card-add-button-bottom:var(--spacer-base);--product-card-title-margin:var(--spacer-sm) 0 0 0}}.products__product-card-horizontal[data-v-02a8a9e1]{flex:0 0 100%}.products__slide-enter[data-v-02a8a9e1]{opacity:0;transform:scale(.5)}.products__slide-enter-active[data-v-02a8a9e1]{transition:all .2s ease;transition-delay:calc(0.1s*var(--index))}@media(min-width:1024px){.products__grid[data-v-02a8a9e1]{margin:var(--spacer-sm) 0 0 var(--spacer-sm)}.products__pagination[data-v-02a8a9e1]{display:flex;justify-content:flex-start;margin:var(--spacer-xl) 0 0 0}.products__product-card-horizontal[data-v-02a8a9e1]{margin:var(--spacer-lg) 0}.products__product-card[data-v-02a8a9e1]{flex:1 1 20%}.products__list[data-v-02a8a9e1]{margin:0 0 0 var(--spacer-sm)}}.products__show-on-page[data-v-02a8a9e1]{display:flex;justify-content:flex-end;align-items:baseline}.products__show-on-page__label[data-v-02a8a9e1]{font-family:var(--font-family--secondary);font-size:var(--font-size--sm)}.loading[data-v-02a8a9e1]{margin:var(--spacer-3xl) auto}@media(min-width:1024px){.loading[data-v-02a8a9e1]{margin-top:6.25rem}}[data-v-02a8a9e1] .sf-sidebar__aside{--sidebar-z-index:3}.filters__title[data-v-02a8a9e1]{--heading-title-font-size:var(--font-size--xl);margin:var(--spacer-xl) 0 var(--spacer-base) 0}.filters__title[data-v-02a8a9e1]:first-child{margin:calc(var(--spacer-xl) + var(--spacer-base)) 0 var(--spacer-xs) 0}.filters__colors[data-v-02a8a9e1]{display:flex}.filters__color[data-v-02a8a9e1]{margin:var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) 0}.filters__chosen[data-v-02a8a9e1]{color:var(--c-text-muted);font-weight:var(--font-weight--normal);font-family:var(--font-family--secondary);position:absolute;right:var(--spacer-xl)}.filters__item[data-v-02a8a9e1]{--radio-container-padding:0 var(--spacer-sm) 0 var(--spacer-xl);--radio-background:transparent;--filter-label-color:var(--c-secondary-variant);--filter-count-color:var(--c-secondary-variant);--checkbox-padding:0 var(--spacer-sm) 0 var(--spacer-xl);padding:var(--spacer-sm) 0;border-bottom:1px solid var(--c-light)}.filters__item[data-v-02a8a9e1]:last-child{border-bottom:0}@media(min-width:1024px){.filters__item[data-v-02a8a9e1]{--checkbox-padding:0;margin:var(--spacer-sm) 0;border:0;padding:0}}.filters__accordion-item[data-v-02a8a9e1]{--accordion-item-content-padding:0;position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;width:100vw}.filters__buttons[data-v-02a8a9e1]{margin:var(--spacer-sm) 0}.filters__button-clear[data-v-02a8a9e1]{--button-background:var(--c-light);--button-color:var(--c-dark-variant);margin:var(--spacer-xs) 0 0 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Category.vue?vue&type=template&id=02a8a9e1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"category"}},[_c('SfBreadcrumbs',{staticClass:"breadcrumbs breadcrumbs-center",attrs:{"breadcrumbs":_vm.breadcrumbs},scopedSlots:_vm._u([{key:"link",fn:function(ref){
var breadcrumb = ref.breadcrumb;
return [_c('nuxt-link',{staticClass:"sf-link disable-active-link sf-breadcrumbs__breadcrumb",attrs:{"data-testid":breadcrumb.text,"to":breadcrumb.route.link}},[_vm._v("\n        "+_vm._s(breadcrumb.text)+"\n      ")])]}}])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"navbar section\" data-v-02a8a9e1>","</div>",[_vm._ssrNode("<div class=\"navbar__main\" data-v-02a8a9e1>","</div>",[_vm._ssrNode("<div class=\"navbar__sort desktop-only\" data-v-02a8a9e1>","</div>",[_vm._ssrNode("<span class=\"navbar__label\" data-v-02a8a9e1>"+_vm._ssrEscape(_vm._s(_vm.$t("Sort by"))+":")+"</span> "),_c('SfSelect',{staticClass:"navbar__select",attrs:{"value":_vm.sortBy.selected,"placeholder":"Select sorting","data-cy":"category-select_sortBy"},on:{"input":_vm.th.changeSorting}},_vm._l((_vm.sortBy.options),function(option){return _c('SfSelectOption',{key:option.id,staticClass:"sort-by__option",attrs:{"value":option.id}},[_vm._v(_vm._s(option.value))])}),1)],2),_vm._ssrNode(" <div class=\"navbar__counter\" data-v-02a8a9e1><span class=\"navbar__label desktop-only\" data-v-02a8a9e1>"+_vm._ssrEscape(_vm._s(_vm.$t("Products found"))+":\n        ")+"</span> <span class=\"desktop-only\" data-v-02a8a9e1>"+_vm._ssrEscape(_vm._s(_vm.pagination.totalItems))+"</span> <span class=\"navbar__label smartphone-only\" data-v-02a8a9e1>"+_vm._ssrEscape(_vm._s(_vm.pagination.totalItems)+" Items")+"</span></div> "),_vm._ssrNode("<div class=\"navbar__view\" data-v-02a8a9e1>","</div>",[_vm._ssrNode("<span class=\"navbar__view-label desktop-only\" data-v-02a8a9e1>"+_vm._ssrEscape(_vm._s(_vm.$t("View")))+"</span> "),_c('SfIcon',{staticClass:"navbar__view-icon",attrs:{"data-cy":"category-icon_grid-view","color":_vm.isCategoryGridView ? 'black' : 'dark-secondary',"icon":"tiles","size":"12px","role":"button","aria-label":"Change to grid view","aria-pressed":_vm.isCategoryGridView},on:{"click":_vm.toggleCategoryGridView}}),_vm._ssrNode(" "),_c('SfIcon',{staticClass:"navbar__view-icon",attrs:{"data-cy":"category-icon_list-view","color":!_vm.isCategoryGridView ? 'black' : 'dark-secondary',"icon":"list","size":"12px","role":"button","aria-label":"Change to list view","aria-pressed":!_vm.isCategoryGridView},on:{"click":_vm.toggleCategoryGridView}})],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main section\" data-v-02a8a9e1>","</div>",[_c('SfLoader',{class:{ loading: _vm.loading },attrs:{"loading":_vm.loading}},[(!_vm.loading)?_c('div',{staticClass:"products"},[(_vm.isCategoryGridView)?_c('transition-group',{staticClass:"products__grid",attrs:{"appear":"","name":"products__slide","tag":"div"}},_vm._l((_vm.products),function(product,i){return _c('SfProductCard',{key:_vm.productGetters.getId(product),staticClass:"products__product-card",style:({ '--index': i }),attrs:{"data-cy":"category-product-card","title":_vm.productGetters.getName(product),"image":_vm.productGetters.getCoverImage(product),"regular-price":_vm.$n(_vm.productGetters.getPrice(product).regular, 'currency'),"special-price":_vm.productGetters.getPrice(product).special &&
              _vm.$n(_vm.productGetters.getPrice(product).special, 'currency'),"max-rating":5,"score-rating":_vm.productGetters.getAverageRating(product),"show-add-to-cart-button":true,"isOnWishlist":false,"isAddedToCart":_vm.isInCart({ product: product }),"link":_vm.localePath(
                ("/p/" + (_vm.productGetters.getId(product)) + "/" + (_vm.productGetters.getSlug(
                  product
                )))
              )},on:{"click:wishlist":function($event){return _vm.addItemToWishlist({ product: product })},"click:add-to-cart":function($event){return _vm.HandleAddTocart({ product: product, quantity:1 })}}})}),1):_c('transition-group',{staticClass:"products__list",attrs:{"appear":"","name":"products__slide","tag":"div"}},_vm._l((_vm.products),function(product,i){return _c('SfProductCardHorizontal',{key:_vm.productGetters.getId(product),staticClass:"products__product-card-horizontal",style:({ '--index': i }),attrs:{"data-cy":"category-product-cart_wishlist","title":_vm.productGetters.getName(product),"description":_vm.productGetters.getDescription(product),"image":_vm.productGetters.getCoverImage(product),"regular-price":_vm.$n(_vm.productGetters.getPrice(product).regular, 'currency'),"special-price":_vm.productGetters.getPrice(product).special &&
              _vm.$n(_vm.productGetters.getPrice(product).special, 'currency'),"max-rating":5,"score-rating":3,"is-on-wishlist":false,"link":_vm.localePath(
                ("/p/" + (_vm.productGetters.getId(product)) + "/" + (_vm.productGetters.getSlug(
                  product
                )))
              )},on:{"click:wishlist":function($event){return _vm.addItemToWishlist({ product: product })},"click:add-to-cart":function($event){return _vm.HandleAddTocart({ product: product, quantity:1 })}},scopedSlots:_vm._u([{key:"configuration",fn:function(){return [_c('SfProperty',{staticClass:"desktop-only",staticStyle:{"margin":"0 0 1rem 0"},attrs:{"name":"Size","value":"XS"}}),_vm._v(" "),_c('SfProperty',{staticClass:"desktop-only",attrs:{"name":"Color","value":"white"}})]},proxy:true},{key:"actions",fn:function(){return [_c('SfButton',{staticClass:"sf-button--text desktop-only",staticStyle:{"margin":"0 0 1rem auto","display":"block"},on:{"click":function () {}}},[_vm._v("\n                Save for later\n              ")]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text desktop-only",staticStyle:{"margin":"0 0 0 auto","display":"block"},on:{"click":function () {}}},[_vm._v("\n                Add to compare\n              ")])]},proxy:true}],null,true)})}),1),_vm._v(" "),(!_vm.loading)?_c('SfPagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.pagination.totalPages > 1),expression:"pagination.totalPages > 1"}],staticClass:"products__pagination desktop-only",attrs:{"data-cy":"category-pagination","current":_vm.pagination.currentPage,"total":_vm.pagination.totalPages,"visible":5}}):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pagination.totalPages > 1),expression:"pagination.totalPages > 1"}],staticClass:"products__show-on-page"},[_c('span',{staticClass:"products__show-on-page__label"},[_vm._v("Show on page:")]),_vm._v(" "),_c('SfSelect',{staticClass:"products__items-per-page",attrs:{"value":_vm.pagination.itemsPerPage.toString()},on:{"input":_vm.th.changeItemsPerPage}},_vm._l((_vm.pagination.pageOptions),function(option){return _c('SfSelectOption',{key:option,staticClass:"products__items-per-page__option",attrs:{"value":option}},[_vm._v("\n              "+_vm._s(option)+"\n            ")])}),1)],1)],1):_vm._e()])],1),_vm._ssrNode(" "),_c('SfSidebar',{staticClass:"sidebar-filters",attrs:{"visible":_vm.isFilterSidebarOpen,"title":"Filters"},on:{"close":_vm.toggleFilterSidebar},scopedSlots:_vm._u([{key:"content-bottom",fn:function(){return [_c('div',{staticClass:"filters__buttons"},[_c('SfButton',{staticClass:"sf-button--full-width",on:{"click":_vm.applyFilters}},[_vm._v("Done")]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--full-width filters__button-clear",on:{"click":_vm.clearFilters}},[_vm._v("Clear all")])],1)]},proxy:true}])},[_c('div',{staticClass:"filters desktop-only"},_vm._l((_vm.facets),function(facet,i){return _c('div',{key:i},[_c('SfHeading',{key:("filter-title-" + (facet.id)),staticClass:"filters__title sf-heading--left",attrs:{"level":4,"title":facet.label}}),_vm._v(" "),(_vm.isFacetColor(facet))?_c('div',{key:((facet.id) + "-colors"),staticClass:"filters__colors"},_vm._l((facet.options),function(option){return _c('SfColor',{key:((facet.id) + "-" + (option.value)),staticClass:"filters__color",attrs:{"data-cy":("category-filter_color_" + (option.value)),"color":option.value,"selected":_vm.isFilterSelected(facet, option)},on:{"click":function () { return _vm.selectFilter(facet, option); }}})}),1):_c('div',_vm._l((facet.options),function(option){return _c('SfFilter',{key:((facet.id) + "-" + (option.value)),staticClass:"filters__item",attrs:{"data-cy":("category-filter_" + (facet.id) + "_" + (option.value)),"label":option.id + "" + (option.count ? (" (" + (option.count) + ")") : ''),"selected":_vm.isFilterSelected(facet, option)},on:{"change":function () { return _vm.selectFilter(facet, option); }}})}),1)],1)}),0),_vm._v(" "),_c('SfAccordion',{staticClass:"filters smartphone-only"},_vm._l((_vm.facets),function(facet,i){return _c('div',{key:i},[_c('SfAccordionItem',{key:("filter-title-" + (facet.id)),staticClass:"filters__accordion-item",attrs:{"header":facet.label}},_vm._l((facet.options),function(option){return _c('SfFilter',{key:((facet.id) + "-" + (option.id)),staticClass:"filters__item",attrs:{"label":option.id,"selected":_vm.isFilterSelected(facet, option)},on:{"change":function () { return _vm.selectFilter(facet, option); }}})}),1)],1)}),0)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Category.vue?vue&type=template&id=02a8a9e1&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue + 4 modules
var SfSidebar = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfFilter/SfFilter.vue?vue&type=template&id=437f07b7&
var SfFiltervue_type_template_id_437f07b7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfCheckbox',_vm._g({staticClass:"sf-filter",class:{ 'is-active': _vm.selected, 'is-color': _vm.color },attrs:{"name":_vm.label,"selected":_vm.selected},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("color",function(){return [(_vm.color)?_c('SfColor',{staticClass:"sf-filter__color",attrs:{"color":_vm.color,"has-badge":false,"selected":_vm.selected},on:{"click":function($event){return _vm.$emit('change', !_vm.selected)}}}):_vm._e()]},null,{ color: _vm.color, selected: _vm.selected }),_vm._v(" "),_vm._t("label",function(){return [_c('div',{staticClass:"sf-filter__label"},[_vm._v(_vm._s(_vm.label))])]},null,{ label: _vm.label }),_vm._v(" "),_vm._t("count",function(){return [_c('div',{staticClass:"sf-filter__count"},[_vm._v(_vm._s(_vm.count))])]},null,{ count: _vm.count })]},proxy:true}],null,true)},_vm.$listeners))}
var SfFiltervue_type_template_id_437f07b7_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfFilter/SfFilter.vue?vue&type=template&id=437f07b7&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue + 4 modules
var SfColor = __webpack_require__(329);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfFilter/SfFilter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfFiltervue_type_script_lang_js_ = ({
  name: "SfFilter",
  components: {
    SfCheckbox: SfCheckbox["a" /* default */],
    SfColor: SfColor["a" /* default */]
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    count: {
      type: [String, Number],
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfFilter/SfFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfFilter_SfFiltervue_type_script_lang_js_ = (SfFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfFilter/SfFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(333)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfFilter_SfFiltervue_type_script_lang_js_,
  SfFiltervue_type_template_id_437f07b7_render,
  SfFiltervue_type_template_id_437f07b7_staticRenderFns,
  false,
  injectStyles,
  null,
  "298cc844"
  
)

/* harmony default export */ var SfFilter = (component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue + 4 modules
var SfProductCard = __webpack_require__(330);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=template&id=727703ab&
var SfProductCardHorizontalvue_type_template_id_727703ab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-product-card-horizontal"},[_vm._ssrNode("<div class=\"sf-product-card-horizontal__image-wrapper\">","</div>",[_vm._t("image",function(){return [_c('SfLink',{staticClass:"sf-product-card-horizontal__link sf-product-card-horizontal__link--image",attrs:{"link":_vm.link}},[(Array.isArray(_vm.image))?_vm._l((_vm.image.slice(0, 2)),function(picture,key){return _c('SfImage',{key:key,staticClass:"sf-product-card-horizontal__picture",attrs:{"src":picture,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})}):_c('SfImage',{staticClass:"sf-product-card-horizontal__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})],2)]},null,{ image: _vm.image, title: _vm.title, link: _vm.link, imageHeight: _vm.imageHeight, imageWidth: _vm.imageWidth })],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-product-card-horizontal__main\">","</div>",[_vm._ssrNode("<div class=\"sf-product-card-horizontal__details\">","</div>",[_vm._t("title",function(){return [_c('SfLink',{staticClass:"sf-product-card-horizontal__link",attrs:{"link":_vm.link}},[_c('h3',{staticClass:"sf-product-card-horizontal__title"},[_vm._v("\n            "+_vm._s(_vm.title)+"\n          ")])])]},null,{ title: _vm.title, link: _vm.link }),_vm._ssrNode(" "),_vm._t("description",function(){return [_c('p',{staticClass:"sf-product-card-horizontal__description desktop-only"},[_vm._v("\n          "+_vm._s(_vm.description)+"\n        ")])]}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-product-card-horizontal__configuration\">","</div>",[_vm._t("configuration")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-product-card-horizontal__actions-wrapper\">","</div>",[_vm._t("price",function(){return [(_vm.regularPrice)?_c('SfPrice',{staticClass:"sf-product-card-horizontal__price",attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}}):_vm._e()]},null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._ssrNode(" "),_vm._t("reviews",function(){return [(typeof _vm.scoreRating === 'number')?_c('div',{staticClass:"sf-product-card-horizontal__reviews"},[_c('SfRating',{staticClass:"sf-product-card-horizontal__rating",attrs:{"max":_vm.maxRating,"score":_vm.scoreRating}}),_vm._v(" "),(_vm.reviewsCount)?_c('SfButton',{staticClass:"sf-button--pure sf-product-card-horizontal__reviews-count",attrs:{"aria-label":("Read " + _vm.reviewsCount + " reviews about " + _vm.title),"href":"#"},on:{"click":function($event){return _vm.$emit('click:reviews')}}},[_vm._v("\n            ("+_vm._s(_vm.reviewsCount)+")\n          ")]):_vm._e()],1):_vm._e()]},null,{ maxRating: _vm.maxRating, scoreRating: _vm.scoreRating }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-product-card-horizontal__actions\">","</div>",[_vm._t("actions")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-product-card-horizontal__add-to-cart\">","</div>",[_vm._t("add-to-cart",function(){return [_c('SfAddToCart',{staticClass:"sf-product-card-horizontal__add-to-cart desktop-only",attrs:{"qty":_vm.qty},on:{"input":function($event){return _vm.$emit('input', $event)},"click":function($event){return _vm.$emit('click:add-to-cart')}}})]})],2)],2),_vm._ssrNode(" "),(_vm.wishlistIcon !== false)?_c('SfButton',{staticClass:"sf-button--pure smartphone-only",class:_vm.wishlistIconClasses,attrs:{"aria-label":(_vm.ariaLabel + " " + _vm.title)},on:{"click":_vm.toggleIsOnWishlist}},[_vm._t("wishlist-icon",function(){return [_c('SfIcon',{attrs:{"icon":_vm.currentWishlistIcon,"size":"19px","data-test":"sf-wishlist-icon"}})]},null,{ currentWishlistIcon: _vm.currentWishlistIcon })],2):_vm._e()],2)],2)}
var SfProductCardHorizontalvue_type_template_id_727703ab_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=template&id=727703ab&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue + 4 modules
var SfRating = __webpack_require__(249);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue + 4 modules
var SfAddToCart = __webpack_require__(331);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var SfProductCardHorizontalvue_type_script_lang_js_ = ({
  name: "SfProductCardHorizontal",
  components: {
    SfPrice: SfPrice["a" /* default */],
    SfRating: SfRating["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfAddToCart: SfAddToCart["a" /* default */]
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Product description
     */
    description: {
      type: String,
      default: ""
    },

    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [Array, Object, String],
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 140
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 200
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Link to product page
     */
    link: {
      type: [String, Object],
      default: ""
    },

    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined
    },

    /**
     * Product rating
     */
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Product reviews count
     */
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Maximum product rating
     */
    maxRating: {
      type: [Number, String],
      default: 5
    },

    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart"
    },

    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    isOnWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },

    /**
     * Status of whether product is on wish list or not
     */
    isOnWishlist: {
      type: Boolean,
      default: false
    },

    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },

    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },

    wishlistIconClasses() {
      const defaultClass = "sf-product-card-horizontal__wishlist-icon";
      return `${defaultClass} ${this.isOnWishlist ? "sf-product-card-horizontal--on-wishlist" : ""}`;
    }

  },
  methods: {
    toggleIsOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProductCardHorizontal_SfProductCardHorizontalvue_type_script_lang_js_ = (SfProductCardHorizontalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue



function SfProductCardHorizontal_injectStyles (context) {
  
  var style0 = __webpack_require__(335)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfProductCardHorizontal_component = Object(componentNormalizer["a" /* default */])(
  SfProductCardHorizontal_SfProductCardHorizontalvue_type_script_lang_js_,
  SfProductCardHorizontalvue_type_template_id_727703ab_render,
  SfProductCardHorizontalvue_type_template_id_727703ab_staticRenderFns,
  false,
  SfProductCardHorizontal_injectStyles,
  null,
  "33fb3bd8"
  
)

/* harmony default export */ var SfProductCardHorizontal = (SfProductCardHorizontal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfPagination/SfPagination.vue?vue&type=template&id=c344da96&
var SfPaginationvue_type_template_id_c344da96_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sf-pagination"},[_vm._t("prev",function(){return [(_vm.hasArrows)?_c('div',{staticClass:"sf-pagination__item prev"},[_c(_vm.componentIs,{tag:"component",class:{
          'sf-button--pure': !_vm.hasRouter,
          'sf-arrow--transparent': !_vm.hasRouter && !_vm.canGoPrev,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(_vm.getPrev) : null,"disabled":!_vm.hasRouter && !_vm.canGoPrev ? true : false,"aria-label":"Go to previous page"},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(_vm.getPrev)}}},[_c('SfIcon',{attrs:{"icon":"arrow_left","size":"1.125rem"}})],1)],1):_vm._e()]},null,{ isDisabled: !_vm.canGoPrev, go: _vm.go, prev: _vm.getPrev }),_vm._ssrNode(" "),(_vm.showFirst)?[_vm._t("number",function(){return [_c(_vm.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{
          'sf-button--pure': !_vm.hasRouter,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(1) : null},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(1)}}},[_vm._v("\n        1\n      ")])]},null,{ page: 1 }),_vm._ssrNode(" "),(_vm.firstVisiblePageNumber > 2)?_vm._t("points",function(){return [_c('div',{staticClass:"sf-pagination__item"},[_vm._v("...")])]}):_vm._e()]:_vm._e(),_vm._ssrNode(" "),_vm._l((_vm.limitedPageNumbers),function(page){return [_vm._t("number",function(){return [_c(_vm.currentPage === page ? 'span' : _vm.componentIs,{key:page,tag:"component",staticClass:"sf-pagination__item",class:{
          'sf-button--pure': !_vm.hasRouter && _vm.currentPage !== page,
          current: _vm.currentPage === page,
        },attrs:{"link":_vm.hasRouter && _vm.currentPage !== page ? _vm.getLinkTo(page) : null},on:{"click":function($event){!_vm.hasRouter && _vm.currentPage !== page ? _vm.go(page) : null}}},[_vm._v("\n        "+_vm._s(page)+"\n      ")])]},null,{ page: page, currentPage: _vm.currentPage })]}),_vm._ssrNode(" "),(_vm.showLast)?[(_vm.lastVisiblePageNumber < _vm.total - 1)?_vm._t("points",function(){return [_c('div',{staticClass:"sf-pagination__item"},[_vm._v("...")])]}):_vm._e(),_vm._ssrNode(" "),_vm._t("number",function(){return [_c(_vm.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{
          'sf-button--pure': !_vm.hasRouter,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(_vm.total) : null},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(_vm.total)}}},[_vm._v("\n        "+_vm._s(_vm.total)+"\n      ")])]},null,{ page: _vm.total })]:_vm._e(),_vm._ssrNode(" "),_vm._t("next",function(){return [(_vm.hasArrows)?_c('div',{staticClass:"sf-pagination__item next"},[_c(_vm.componentIs,{tag:"component",class:{
          'sf-button--pure': !_vm.hasRouter,
          'sf-arrow--transparent': !_vm.hasRouter && !_vm.canGoNext,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(_vm.getNext) : null,"disabled":!_vm.hasRouter && !_vm.canGoNext ? true : false,"aria-label":"Go to previous next"},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(_vm.getNext)}}},[_c('SfIcon',{attrs:{"icon":"arrow_right","size":"1.125rem"}})],1)],1):_vm._e()]},null,{ isDisabled: !_vm.canGoNext, go: _vm.go, next: _vm.getNext })],2)}
var SfPaginationvue_type_template_id_c344da96_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfPagination/SfPagination.vue?vue&type=template&id=c344da96&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfPagination/SfPagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfPaginationvue_type_script_lang_js_ = ({
  name: "SfPagination",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * Total number of pages
     */
    total: {
      type: Number,
      default: 0
    },

    /**
     * Maximum visible pagination items
     */
    visible: {
      type: Number,
      default: 5
    },

    /**
     * Status of arrows display
     */
    hasArrows: {
      type: Boolean,
      default: true
    },

    /**
     * Current page number, for non router
     */
    current: {
      type: Number,
      default: 1
    },

    /**
     * Name of page query param for router
     */
    pageParamName: {
      type: String,
      default: "page"
    }
  },
  computed: {
    hasRouter() {
      return this.$route;
    },

    componentIs() {
      return this.hasRouter ? "SfLink" : "SfButton";
    },

    currentPage() {
      return this.hasRouter ? this.$route.query[this.pageParamName] ? parseInt(this.$route.query[this.pageParamName], 10) : 1 : this.current;
    },

    getPrev() {
      return this.currentPage === this.firstVisiblePageNumber ? this.currentPage : this.currentPage - 1;
    },

    canGoPrev() {
      return this.currentPage !== this.firstVisiblePageNumber;
    },

    getNext() {
      return this.currentPage === this.lastVisiblePageNumber ? this.currentPage : this.currentPage + 1;
    },

    canGoNext() {
      return this.currentPage !== this.lastVisiblePageNumber;
    },

    showFirst() {
      return this.firstVisiblePageNumber > 1;
    },

    showLast() {
      return this.lastVisiblePageNumber < this.total;
    },

    listOfPageNumbers() {
      return Array.from(Array(this.total), (_, i) => i + 1);
    },

    limitedPageNumbers() {
      if (this.total <= this.visible) {
        return this.listOfPageNumbers;
      }

      if (this.currentPage < this.visible - Math.floor(this.visible / 2) + 1) {
        return this.listOfPageNumbers.slice(0, this.visible);
      }

      if (this.total - this.currentPage < this.visible - Math.ceil(this.visible / 2) + 1) {
        return this.listOfPageNumbers.slice(this.total - this.visible);
      }

      return this.listOfPageNumbers.slice(this.currentPage - Math.ceil(this.visible / 2), this.currentPage + Math.floor(this.visible / 2));
    },

    firstVisiblePageNumber() {
      return this.limitedPageNumbers[0];
    },

    lastVisiblePageNumber() {
      return this.limitedPageNumbers[this.limitedPageNumbers.length - 1];
    }

  },
  methods: {
    go(page) {
      this.$emit("click", page);
    },

    getLinkTo(page) {
      const pageNumber = page.toString();

      if (this.hasRouter) {
        return { ...this.$route,
          query: { ...this.$route.query,
            [this.pageParamName]: page
          }
        };
      } else {
        return pageNumber;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfPagination/SfPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfPagination_SfPaginationvue_type_script_lang_js_ = (SfPaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfPagination/SfPagination.vue



function SfPagination_injectStyles (context) {
  
  var style0 = __webpack_require__(337)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfPagination_component = Object(componentNormalizer["a" /* default */])(
  SfPagination_SfPaginationvue_type_script_lang_js_,
  SfPaginationvue_type_template_id_c344da96_render,
  SfPaginationvue_type_template_id_c344da96_staticRenderFns,
  false,
  SfPagination_injectStyles,
  null,
  "702f2a1e"
  
)

/* harmony default export */ var SfPagination = (SfPagination_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=template&id=5aa4d7be&
var SfAccordionvue_type_template_id_5aa4d7be_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-accordion",class:{ 'has-chevron': _vm.showChevron }},[_vm._t("default")],2)}
var SfAccordionvue_type_template_id_5aa4d7be_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=template&id=5aa4d7be&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/deprecation-warning.js
const deprecationWarning = (componentName, msg) => {
   false && false;
};
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=template&id=cf38a9fe&
var SfAccordionItemvue_type_template_id_cf38a9fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-accordion-item"},[_vm._t("header",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-accordion-item__header",class:{ 'is-open': _vm.isOpen },attrs:{"aria-pressed":_vm.isOpen.toString(),"aria-expanded":_vm.isOpen.toString()},on:{"click":_vm.accordionClick}},[_vm._v("\n      "+_vm._s(_vm.header)+"\n      "),_vm._v(" "),_vm._t("additional-info"),_vm._v(" "),_c('SfChevron',{staticClass:"sf-accordion-item__chevron",class:{ 'sf-chevron--right': !_vm.isOpen },attrs:{"tabindex":"0"}})],2)]},null,{
      header: _vm.header,
      isOpen: _vm.isOpen,
      accordionClick: _vm.accordionClick,
      showChevron: _vm.$parent.showChevron,
    }),_vm._ssrNode(" "),_c('SfExpand',{attrs:{"transition":_vm.$parent.transition}},[(_vm.isOpen)?_c('div',[_c('div',{staticClass:"sf-accordion-item__content"},[_vm._t("default")],2)]):_vm._e()])],2)}
var SfAccordionItemvue_type_template_id_cf38a9fe_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=template&id=cf38a9fe&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(229);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/transitions/component/SfExpand.js
/* harmony default export */ var SfExpand = ({
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "sf-expand"
    },
    group: {
      type: Boolean,
      default: false
    }
  },

  render(createElement, {
    data,
    children,
    props
  }) {
    const isOff = props.transition === false;
    const listeners = {
      beforeEnter: function (el) {
        el.style.setProperty("height", "auto");
      },
      enter: function (el) {
        el.style.setProperty("height", "auto");
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", "0");
        requestAnimationFrame(() => {
          el.style.setProperty("height", height);
        });
      },
      leave: function (el) {
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", height);
        requestAnimationFrame(() => {
          el.style.setProperty("height", "0");
        });
      }
    };
    return createElement("transition", { ...data,
      attrs: {
        name: isOff ? "" : props.transition
      },
      on: props.transition === "sf-expand" && listeners
    }, children);
  }

});
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue + 4 modules
var SfChevron = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfAccordionItemvue_type_script_lang_js_ = ({
  name: "SfAccordionItem",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfChevron: SfChevron["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfExpand: SfExpand
  },
  props: {
    header: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    accordionClick() {
      this.$parent.$emit("toggle", this._uid);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfAccordionItemvue_type_script_lang_js_ = (SfAccordionItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue



function SfAccordionItem_injectStyles (context) {
  
  var style0 = __webpack_require__(339)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfAccordionItem_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfAccordionItemvue_type_script_lang_js_,
  SfAccordionItemvue_type_template_id_cf38a9fe_render,
  SfAccordionItemvue_type_template_id_cf38a9fe_staticRenderFns,
  false,
  SfAccordionItem_injectStyles,
  null,
  "a8de9744"
  
)

/* harmony default export */ var SfAccordionItem = (SfAccordionItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=script&lang=js&
//
//
//
//
//
//



external_vue_default.a.component("SfAccordionItem", SfAccordionItem);
/* harmony default export */ var SfAccordionvue_type_script_lang_js_ = ({
  name: "SfAccordion",
  props: {
    /**
     * Opens an accordion item based on title. If 'all' string is passed then all items will be open by default.
     */
    open: {
      type: [String, Array],
      default: ""
    },

    /**
     * Opens the first accordion item if set to "true"
     * @deprecated will be removed in 1.0.0 use open prop instead
     */
    firstOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Allows to open multiple accordion items if set to "true"
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Overlay transition effect
     */
    transition: {
      type: String,
      default: "sf-expand"
    },
    showChevron: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      openHeader: this.open
    };
  },

  mounted() {
    this.$on("toggle", this.toggleHandler);
    this.setAsOpen();
  },

  updated() {
    this.setAsOpen();
  },

  methods: {
    setAsOpen() {
      if (this.$children && this.$children.length) {
        // TODO remove in 1.0.0 ->
        if (this.firstOpen) {
          this.$children[0].isOpen = this.firstOpen;
          deprecationWarning(this.$options.name, "Prop 'firstOpen' has been deprecated and will be removed in v1.0.0. Use 'open' instead.");
          return;
        } // <- TODO remove in 1.0.0


        if (this.open === "all") {
          this.multiple = true;
          this.openHeader = this.$children.map(child => child.header);
        }

        this.$children.forEach(child => {
          child.isOpen = Array.isArray(this.openHeader) ? this.openHeader.includes(child.header) : this.openHeader === child.header;
        });
      }
    },

    toggleHandler(slotId) {
      if (!this.multiple && !Array.isArray(this.openHeader)) {
        this.$children.forEach(child => {
          if (child._uid === slotId) {
            child.isOpen = !child.isOpen;
            this.openHeader = child.header;
          } else {
            child.isOpen = false;
          }
        });
      } else {
        const clickedHeader = this.$children.find(child => {
          return child._uid === slotId;
        });
        clickedHeader.isOpen = !clickedHeader.isOpen;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAccordion_SfAccordionvue_type_script_lang_js_ = (SfAccordionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue



function SfAccordion_injectStyles (context) {
  
  var style0 = __webpack_require__(341)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfAccordion_component = Object(componentNormalizer["a" /* default */])(
  SfAccordion_SfAccordionvue_type_script_lang_js_,
  SfAccordionvue_type_template_id_5aa4d7be_render,
  SfAccordionvue_type_template_id_5aa4d7be_staticRenderFns,
  false,
  SfAccordion_injectStyles,
  null,
  "0774b544"
  
)

/* harmony default export */ var SfAccordion = (SfAccordion_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue + 9 modules
var SfSelect = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue + 4 modules
var SfBreadcrumbs = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue + 4 modules
var SfLoader = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(102);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/shopify/lib/index.es.js
var index_es = __webpack_require__(7);

// EXTERNAL MODULE: ./composables/index.ts
var composables = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Category.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Categoryvue_type_script_lang_js_ = ({
  transition: 'fade',

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      currentCate: '',
      breadcrumbs: [{
        text: 'Home',
        route: {
          link: '/'
        }
      }, {
        text: this.removeSpaceFromText(this.$route.params.slug_1),
        route: {
          link: '#'
        }
      }]
    };
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props, context) {
    const th = Object(composables["a" /* useUiHelpers */])();
    const uiState = Object(composables["c" /* useUiState */])();
    const {
      addItem: addItemToCart,
      isInCart
    } = Object(index_es["e" /* useCart */])();
    const {
      send: sendNotification
    } = Object(composables["b" /* useUiNotification */])();
    const {
      addItem: addItemToWishlist
    } = Object(index_es["n" /* useWishlist */])();
    const {
      result,
      search,
      loading
    } = Object(index_es["h" /* useFacet */])();
    const products = Object(composition_api_["computed"])(() => index_es["b" /* facetGetters */].getProducts(result.value));
    const sortBy = Object(composition_api_["computed"])(() => index_es["b" /* facetGetters */].getSortOptions(result.value));
    const facets = Object(composition_api_["computed"])(() => index_es["b" /* facetGetters */].getGrouped(result.value, ['color', 'size']));
    const pagination = Object(composition_api_["computed"])(() => index_es["b" /* facetGetters */].getPagination(result.value));
    Object(lib_index_es["onSSR"])(async () => {
      await search(th.getFacetsFromURL());
    });
    const {
      isFacetColor
    } = Object(composables["a" /* useUiHelpers */])();
    const {
      toggleCategoryGridView
    } = Object(composables["c" /* useUiState */])();
    Object(composition_api_["onMounted"])(() => {
      context.root.$scrollTo(context.root.$el, 2000);
    });
    return { ...uiState,
      th,
      products,
      loading,
      productGetters: index_es["d" /* productGetters */],
      pagination,
      sortBy,
      facets,
      sendNotification,
      addItemToWishlist,
      addItemToCart,
      isInCart,
      isFacetColor,
      toggleCategoryGridView
    };
  },

  components: {
    SfButton: SfButton["a" /* default */],
    SfSidebar: SfSidebar["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfFilter: SfFilter,
    SfProductCard: SfProductCard["a" /* default */],
    SfProductCardHorizontal: SfProductCardHorizontal,
    SfPagination: SfPagination,
    SfAccordion: SfAccordion,
    SfSelect: SfSelect["a" /* default */],
    SfBreadcrumbs: SfBreadcrumbs["a" /* default */],
    SfLoader: SfLoader["a" /* default */],
    SfColor: SfColor["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfProperty: SfProperty["a" /* default */]
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    HandleAddTocart(productObj) {
      this.addItemToCart(productObj).then(() => {
        this.sendNotification({
          key: 'added_to_cart',
          message: 'Product has been successfully added to cart !',
          type: 'success',
          title: 'Product added!',
          icon: 'check'
        });
      });
    },

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    removeSpaceFromText(str) {
      let i;
      const frags = str.split('-');

      for (i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
      }

      return frags.join(' ');
    }

  }
});
// CONCATENATED MODULE: ./pages/Category.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Categoryvue_type_script_lang_js_ = (Categoryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/Category.vue



function Category_injectStyles (context) {
  
  var style0 = __webpack_require__(343)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Category_component = Object(componentNormalizer["a" /* default */])(
  pages_Categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Category_injectStyles,
  "02a8a9e1",
  "4f42c70e"
  
)

/* harmony default export */ var Category = __webpack_exports__["default"] = (Category_component.exports);

/***/ })

};;
//# sourceMappingURL=Category.js.map