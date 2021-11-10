exports.ids = [9];
exports.modules = {

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("614069fe", content, true, context)
};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3fb0c45e", content, true, context)
};

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;overflow:hidden;width:auto!important;height:auto!important;z-index:0}.simplebar-mask,.simplebar-offset{position:absolute;padding:0;margin:0;left:0;top:0;bottom:0;right:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:\" \";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;z-index:-1}.simplebar-height-auto-observer,.simplebar-track{position:absolute;overflow:hidden;pointer-events:none}.simplebar-track{z-index:1;right:0;bottom:0}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:\"\";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}.sf-scrollable__content{max-height:5rem;max-height:var(--scrollable-max-height,var(--_scrollable-max-height,5rem))}.sf-scrollable__content .simplebar-scrollbar:before{width:4px;background:var(--c-gray-variant);border-radius:10px}.sf-scrollable.is-open{--scrollable-max-height:auto}.sf-scrollable__view-all{margin:var(--scrollable-button-margin,var(--spacer-sm) 0 0 0)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-tabs{display:flex;flex-wrap:wrap}.sf-tabs__title{z-index:var(--tabs-title-z-index);display:flex;display:var(--tabs-title-display,flex);box-sizing:border-box;flex:0 0 100%;flex:var(--tabs-title-flex,0 0 100%);justify-content:space-between;margin:var(--tabs-title-margin);padding:var(--tabs-title-padding,var(--spacer-sm));background:var(--tabs-title-background);border:var(--tabs-title-border,var(--tabs-title-border-style,solid) var(--tabs-title-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--tabs-title-border-width,0 0 1px 0);color:var(--tabs-title-color);transition:color .15s ease-in-out;font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--tabs-title-font,var(--tabs-title-font-weight,var(--font-weight--normal)) var(--tabs-title-font-size,var(--font-size--base))/var(--tabs-title-font-line-height,1.4) var(--tabs-title-font-family,var(--font-family--secondary)))}.sf-tabs__title.is-active{--tabs-title-border-width:0;--tabs-title-color:var(--c-primary);--chevron-color:var(--c-primary)}.sf-tabs__title.is-active+.sf-tabs__content{--tabs-content-border-width:var(--tabs-content-border-width,1px 0 0 0)}.sf-tabs__content{flex:0 0 100%;order:var(--tabs-content-order);border:var(--tabs-content-border,var(--tabs-content-border-style,solid) var(--tabs-content-border-color,var(--c-light)));border-width:0;border-width:var(--tabs-content-border-width,0);color:var(--c-text);color:var(--tabs-content-color,var(--c-text));font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--tabs-content-font,var(--tabs-content-font-weight,var(--font-weight--light)) var(--tabs-content-font-size,var(--font-size--base))/var(--tabs-content-font-line-height,1.6) var(--tabs-content-font-family,var(--font-family--primary)))}.sf-tabs__content__tab{padding:var(--tabs-content-tab-padding,var(--spacer-base) var(--spacer-sm))}.sf-tabs__tab{display:contents}.sf-tabs__chevron{display:var(--tabs-chevron-display)}@media(min-width:1024px){.sf-tabs{--tabs-title-z-index:1;--tabs-content-order:1;--tabs-title-flex:0 0 auto;--tabs-title-margin:0 var(--spacer-lg) -2px 0;--tabs-title-padding:var(--spacer-xs) 0;--tabs-title-color:var(--c-text-muted);--tabs-title-font-size:var(--h4-font-size);--tabs-content-tab-padding:var(--spacer-xl) 0;--tabs-chevron-display:none}.sf-tabs__title.is-active{--tabs-title-border-width:0 0 2px 0;--tabs-title-border-color:var(--c-text);--tabs-title-color:var(--c-text)}.sf-tabs__title.is-active+.sf-tabs__content{--tabs-content-border-width:2px 0 0 0}.sf-tabs__title:hover{--tabs-title-color:var(--c-text)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=66cd21f1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.initialTabActivated),expression:"initialTabActivated"}],staticClass:"sf-tabs"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=66cd21f1&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=37f89d9a&
var SfTabvue_type_template_id_37f89d9a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-tabs__tab"},[_vm._t("title",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-tabs__title",class:{ 'is-active': _vm.isActive },attrs:{"aria-pressed":_vm.isActive.toString()},on:{"click":_vm.tabClick}},[_vm._v("\n      "+_vm._s(_vm.title)+"\n      "),_c('SfChevron',{staticClass:"sf-tabs__chevron",class:{ 'sf-chevron--right': !_vm.isActive }})],1)]},null,{ tabClick: _vm.tabClick, isActive: _vm.isActive, title: _vm.title }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-tabs__content\">","</div>",[(_vm.isActive)?_vm._ssrNode("<div class=\"sf-tabs__content__tab\">","</div>",[(_vm.tabMaxContentHeight)?_c('SfScrollable',{attrs:{"max-content-height":_vm.tabMaxContentHeight,"show-text":_vm.tabShowText,"hide-text":_vm.tabHideText}},[_vm._t("default")],2):_vm._t("default")],2):_vm._e()])],2)}
var SfTabvue_type_template_id_37f89d9a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=37f89d9a&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue + 4 modules
var SfChevron = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=49dba0d8&
var SfScrollablevue_type_template_id_49dba0d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-scrollable",class:{ 'is-open': !_vm.isHidden }},[_c('Simplebar',{ref:"content",staticClass:"sf-scrollable__content",style:(_vm.style)},[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("view-all",function(){return [_c('SfButton',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroll),expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{"click":function($event){_vm.isHidden = !_vm.isHidden}}},[(_vm.isHidden)?_c('span',[_vm._v(_vm._s(_vm.showText))]):_c('span',[_vm._v(_vm._s(_vm.hideText))])])]},null,{ hasScroll: _vm.hasScroll, showText: _vm.showText, hideText: _vm.hideText })],2)}
var SfScrollablevue_type_template_id_49dba0d8_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=49dba0d8&

// EXTERNAL MODULE: external "simplebar-vue"
var external_simplebar_vue_ = __webpack_require__(224);
var external_simplebar_vue_default = /*#__PURE__*/__webpack_require__.n(external_simplebar_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfScrollablevue_type_script_lang_js_ = ({
  name: "SfScrollable",
  components: {
    SfButton: SfButton["a" /* default */],
    Simplebar: external_simplebar_vue_default.a
  },
  props: {
    /*
     * Maximum height of visible content
     */
    maxContentHeight: {
      type: String,
      default: ""
    },

    /*
     * Text for button showing content
     */
    showText: {
      type: String,
      default: "Show"
    },

    /*
     * Text for button hiding content
     */
    hideText: {
      type: String,
      default: "Hide"
    }
  },

  data() {
    return {
      isHidden: true,
      hasScroll: false,
      contentEl: undefined
    };
  },

  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim() ? this.maxContentHeight : undefined
      };
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.contentEl = this.$refs.content.$el.querySelector(".simplebar-content");
      if (typeof MutationObserver === "undefined" || !this.contentEl) return;
      const observer = new MutationObserver(this.sizeCalc);
      this.sizeCalc();
      observer.observe(this.contentEl, {
        childList: true
      });
    });
  },

  methods: {
    sizeCalc() {
      const containerHeight = this.$refs.content.$el.offsetHeight;
      const contentHeight = this.contentEl.offsetHeight;
      this.hasScroll = contentHeight > containerHeight;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfScrollable_SfScrollablevue_type_script_lang_js_ = (SfScrollablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(241)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfScrollable_SfScrollablevue_type_script_lang_js_,
  SfScrollablevue_type_template_id_49dba0d8_render,
  SfScrollablevue_type_template_id_49dba0d8_staticRenderFns,
  false,
  injectStyles,
  null,
  "207ad184"
  
)

/* harmony default export */ var SfScrollable = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfTabvue_type_script_lang_js_ = ({
  name: "SfTab",
  components: {
    SfChevron: SfChevron["a" /* default */],
    SfScrollable: SfScrollable,
    SfButton: SfButton["a" /* default */]
  },
  inject: ["tabConfig"],
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isActive: false,
      desktopMin: 1024
    };
  },

  computed: {
    tabMaxContentHeight() {
      return this.tabConfig.tabMaxContentHeight;
    },

    tabShowText() {
      return this.tabConfig.tabShowText;
    },

    tabHideText() {
      return this.tabConfig.tabHideText;
    }

  },
  methods: {
    tabClick() {
      if (!check_environment["a" /* isClient */]) return;
      const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
      if (this.isActive && width > this.desktopMin) return;
      this.$parent.$emit("toggle", this._uid);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTabvue_type_script_lang_js_ = (SfTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue





/* normalize component */

var SfTab_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTabvue_type_script_lang_js_,
  SfTabvue_type_template_id_37f89d9a_render,
  SfTabvue_type_template_id_37f89d9a_staticRenderFns,
  false,
  null,
  null,
  "13b83c7e"
  
)

/* harmony default export */ var SfTab = (SfTab_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//


external_vue_default.a.component("SfTab", SfTab);
/* harmony default export */ var SfTabsvue_type_script_lang_js_ = ({
  name: "SfTabs",
  props: {
    /** Which tab should be open  */
    openTab: {
      type: Number,
      default: 1
    },

    /** Max height of visible content  */
    tabMaxContentHeight: {
      type: String,
      default: ""
    },

    /** Text for button showing content  */
    tabShowText: {
      type: String,
      default: "show"
    },

    /** Text for button hiding content  */
    tabHideText: {
      type: String,
      default: "hide"
    }
  },

  data() {
    return {
      initialTabActivated: false
    };
  },

  watch: {
    openTab(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.toggle(this.$children[newValue - 1]._uid);
    }

  },

  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  },

  methods: {
    toggle(id) {
      this.$children.forEach(child => {
        child.isActive = child._uid === id;
      });
      const activeTab = this.$children.findIndex(child => child.isActive === true) + 1;
      this.$emit("click:tab", activeTab);
    },

    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
        this.initialTabActivated = true;
      }
    }

  },
  provide: function () {
    const tabConfig = {};
    Object.defineProperty(tabConfig, "tabMaxContentHeight", {
      get: () => this.tabMaxContentHeight
    });
    Object.defineProperty(tabConfig, "tabShowText", {
      get: () => this.tabShowText
    });
    Object.defineProperty(tabConfig, "tabHideText", {
      get: () => this.tabHideText
    });
    return {
      tabConfig
    };
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTabs_SfTabsvue_type_script_lang_js_ = (SfTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue



function SfTabs_injectStyles (context) {
  
  var style0 = __webpack_require__(243)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTabs_component = Object(componentNormalizer["a" /* default */])(
  SfTabs_SfTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  SfTabs_injectStyles,
  null,
  "50a4a3d2"
  
)

/* harmony default export */ var SfTabs = __webpack_exports__["a"] = (SfTabs_component.exports);

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("33c5d69e", content, true, context)
};

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3254f3d6", content, true, context)
};

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul.tabs__header{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap}ul.tabs__header>li{border-bottom:1px solid var(--_c-gray-DDDDDD);position:relative;cursor:pointer;font-size:16px;line-height:1.5;font-weight:400;color:var(--_c-gray-888888);padding:0 20px 10px;transition:all .3s ease 0s}@media(max-width:1023px){ul.tabs__header>li{font-size:12px;padding:0 10px 10px}}ul.tabs__header>li:after{content:\"\";position:absolute;bottom:-1px;left:0;height:1px;width:0;background-color:transparent;transition:all .3s ease 0s}ul.tabs__header>li.tab__selected,ul.tabs__header>li:hover{color:var(--c-black)}ul.tabs__header>li.tab__selected:after,ul.tabs__header>li:hover:after{background-color:var(--c-black);width:100%}.tab{display:block;padding:30px 0 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".user_profile_detail .sf-property{margin-bottom:25px}@media(max-width:1023px){.user_profile_detail .sf-property{margin-bottom:15px}}.user_profile_detail .sf-property__name,.user_profile_detail .sf-property__value{font-size:16px;font-weight:400}@media(max-width:1023px){.user_profile_detail .sf-property__name,.user_profile_detail .sf-property__value{font-size:14px}}.user_profile_detail .sf-property__name{color:var(--_c-gray-666666);padding-right:20px;margin:0;width:10%;min-width:90px}@media(max-width:1023px){.user_profile_detail .sf-property__name{min-width:70px}}.user_profile_detail .sf-property__value{color:var(--c-black);font-weight:500}.message,.notice{font-family:var(--font-family-primary);line-height:1.6}.message{margin:0 0 var(--spacer-2xl) 0;font-size:var(--font-base-mobile)}@media(min-width:1024px){.message{font-size:var(--font-base-desktop)}}.message__label{font-weight:400}.notice{margin:var(--spacer-xl) 0 0 0;font-size:var(--font-xs-mobile)}@media(min-width:1024px){.notice{max-width:70%;margin:var(--spacer) 0 0 0;font-size:var(--font-xs-desktop)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/MyProfile.vue?vue&type=template&id=1214d939&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my_account_content_wrap"},[_vm._ssrNode("<div class=\"my_accoutn_title_wrap\">","</div>",[_c('SfHeading',{staticClass:"my_accoutn_title",attrs:{"level":1,"title":_vm.title}}),_vm._ssrNode(" "),(!_vm.isEdited)?_vm._ssrNode("<div class=\"my_accoutn_title_actions\">","</div>",[_c('SfButton',{staticClass:"edit_action",on:{"click":function($event){_vm.isEdited = true; _vm.scrollToTop()}}},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M11.7167 7.51667L12.4833 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.51667ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833Z","fill":"black"}})]),_vm._v("\n        Edit Your Profile\n      ")])],1):_vm._e()],2),_vm._ssrNode(" "),(_vm.isEdited)?_vm._ssrNode("<div class=\"my_account_content container-small\">","</div>",[_c('tabs',[_c('tab',{attrs:{"title":"Personal Data"}},[_c('ValidationObserver',{attrs:{"tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{staticClass:"form",on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.updateProfile)}}},[_c('div',{staticClass:"row"},[_c('ValidationProvider',{staticClass:"col-6",attrs:{"tag":"div","rules":"required|min:2"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_firstName","name":"firstName","label":"First Name","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.firstName),callback:function ($$v) {_vm.$set(_vm.form, "firstName", $$v)},expression:"form.firstName"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{staticClass:"col-6",attrs:{"tag":"div","rules":"required|min:2"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_lastName","name":"lastName","label":"Last Name","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.lastName),callback:function ($$v) {_vm.$set(_vm.form, "lastName", $$v)},expression:"form.lastName"}})]}}],null,true)})],1),_vm._v(" "),_c('ValidationProvider',{attrs:{"tag":"div","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_email","type":"email","name":"email","label":"Your e-mail","valid":!errors[0],"errorMessage":errors[0],"disabled":true},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})]}}],null,true)}),_vm._v(" "),_c('div',{staticClass:"my-account-bottom-action-wrap"},[_c('div',{staticClass:"form__button_wrap"},[_c('SfButton',{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update"},nativeOn:{"click":function($event){return _vm.scrollToTop()}}},[_vm._v("Update Profile")])],1),_vm._v(" "),_c('div',{staticClass:"form__button_wrap"},[_c('SfButton',{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},on:{"click":function($event){_vm.isEdited = false, _vm.scrollToTop()}}},[_vm._v("Cancel")])],1)])],1)]}}],null,false,800988059)})],1),_vm._v(" "),_c('tab',{attrs:{"title":"Password Change"}},[_c('ValidationObserver',{attrs:{"tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{staticClass:"form",on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.updatePassword)}}},[_c('div',{staticClass:"form__horizontal"},[_c('ValidationProvider',{attrs:{"tag":"div","rules":"required|min:5","vid":"password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_newPassword","type":"password","name":"newPassword","label":"New Password","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.newPassword),callback:function ($$v) {_vm.$set(_vm.form, "newPassword", $$v)},expression:"form.newPassword"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"tag":"div","rules":"required|confirmed:password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_repeatPassword","type":"password","name":"repeatPassword","label":"Repeat Password","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.repeatPassword),callback:function ($$v) {_vm.$set(_vm.form, "repeatPassword", $$v)},expression:"form.repeatPassword"}})]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"my-account-bottom-action-wrap"},[_c('div',{staticClass:"form__button_wrap"},[_c('SfButton',{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update-password"},nativeOn:{"click":function($event){return _vm.scrollToTop()}}},[_vm._v("Change password")])],1),_vm._v(" "),_c('div',{staticClass:"form__button_wrap"},[_c('SfButton',{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},nativeOn:{"click":function($event){_vm.isEdited = false, _vm.scrollToTop()}}},[_vm._v("Cancel")])],1)])])]}}],null,false,3521514364)})],1)],1)],1):_vm._ssrNode("<div class=\"user_profile_detail\">","</div>",[(_vm.displayName)?_c('SfProperty',{staticClass:"my-profile-cname",attrs:{"name":"Name","value":_vm.displayName}}):_vm._e(),_vm._ssrNode(" "),(_vm.email)?_c('SfProperty',{staticClass:"my-profile-cemail",attrs:{"name":"Email","value":_vm.email}}):_vm._e(),_vm._ssrNode(" "),(_vm.phone)?_c('SfProperty',{staticClass:"my-profile-cmobile",attrs:{"name":"Mobile","value":_vm.phone}}):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/MyAccount/MyProfile.vue?vue&type=template&id=1214d939&

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue + 14 modules
var SfTabs = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue + 4 modules
var SfAlert = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/shopify/lib/index.es.js
var index_es = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(5);

// EXTERNAL MODULE: ./composables/index.ts
var composables = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Tab.vue?vue&type=template&id=7d582e35&lang=html&
var Tabvue_type_template_id_7d582e35_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"tab"},[_vm._t("default")],2)}
var Tabvue_type_template_id_7d582e35_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./components/Tab.vue?vue&type=template&id=7d582e35&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      isActive: true
    };
  }

});
// CONCATENATED MODULE: ./components/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Tab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tabvue_type_script_lang_js_,
  Tabvue_type_template_id_7d582e35_lang_html_render,
  Tabvue_type_template_id_7d582e35_lang_html_staticRenderFns,
  false,
  null,
  null,
  "52e73381"
  
)

/* harmony default export */ var Tab = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Tabs.vue?vue&type=template&id=6fadf018&lang=html&
var Tabsvue_type_template_id_6fadf018_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs"},[_vm._ssrNode("<ul class=\"tabs__header\">"+(_vm._ssrList((_vm.tabs),function(tab,index){return ("<li"+(_vm._ssrClass(null,{"tab__selected": (index == _vm.selectedIndex)}))+">"+_vm._ssrEscape("\n      "+_vm._s(tab.title)+"\n    ")+"</li>")}))+"</ul> "),_vm._t("default")],2)}
var Tabsvue_type_template_id_6fadf018_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./components/Tabs.vue?vue&type=template&id=6fadf018&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tabsvue_type_script_lang_js_ = ({
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },

  data() {
    return {
      selectedIndex: 0,
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  mounted() {
    this.selectTab(0);
  },

  methods: {
    selectTab(i) {
      this.selectedIndex = i; // loop over all the tabs

      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Tabs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(289)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Tabs_component = Object(componentNormalizer["a" /* default */])(
  components_Tabsvue_type_script_lang_js_,
  Tabsvue_type_template_id_6fadf018_lang_html_render,
  Tabsvue_type_template_id_6fadf018_lang_html_staticRenderFns,
  false,
  injectStyles,
  null,
  "0daaddc2"
  
)

/* harmony default export */ var Tabs = (Tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/MyProfile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









Object(external_vee_validate_["extend"])('email', { ...rules["b" /* email */],
  message: 'Invalid email'
});
Object(external_vee_validate_["extend"])('required', { ...rules["g" /* required */],
  message: 'This field is required'
});
Object(external_vee_validate_["extend"])('min', { ...rules["d" /* min */],
  message: 'The field should have at least {length} characters'
});
Object(external_vee_validate_["extend"])('password', {
  validate: value => String(value).length >= 8 && String(value).match(/[A-Za-z]/gi) && String(value).match(/[0-9]/gi),
  message: 'Password must have at least 8 characters including one letter and a number'
});
Object(external_vee_validate_["extend"])('confirmed', { ...rules["a" /* confirmed */],
  message: 'Passwords don\'t match'
});
/* harmony default export */ var MyProfilevue_type_script_lang_js_ = ({
  name: 'PersonalDetails',
  components: {
    SfTabs: SfTabs["a" /* default */],
    SfInput: SfInput["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfAlert: SfAlert["a" /* default */],
    SfProperty: SfProperty["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    ValidationProvider: external_vee_validate_["ValidationProvider"],
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    Tab: Tab,
    Tabs: Tabs
  },
  props: {
    account: {
      type: Object,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      default: () => ({})
    },
    title: {
      type: String,
      default: 'My Profile'
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const {
      user,
      load: loadUser,
      changePassword,
      updateUser
    } = Object(index_es["j" /* useUser */])();
    const success = Object(composition_api_["ref"])(null);
    const error = Object(composition_api_["ref"])(null);
    const firstName = Object(composition_api_["computed"])(() => index_es["p" /* userGetters */].getFirstName(user.value));
    const lastName = Object(composition_api_["computed"])(() => index_es["p" /* userGetters */].getLastName(user.value));
    const email = Object(composition_api_["computed"])(() => index_es["p" /* userGetters */].getEmailAddress(user.value));
    const phone = Object(composition_api_["computed"])(() => index_es["p" /* userGetters */].getPhone(user.value));
    const displayName = Object(composition_api_["computed"])(() => index_es["p" /* userGetters */].getdisplayName(user.value));

    const resetForm = () => ({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      displayName: displayName.value,
      newPassword: ''
    });

    const {
      send: sendNotification
    } = Object(composables["b" /* useUiNotification */])();
    const isEdited = Object(composition_api_["ref"])(false);
    const form = Object(composition_api_["ref"])(resetForm());

    const handleForm = (fn, reset) => async () => {
      try {
        if (reset) {
          await fn({
            current: '',
            new: form.value.newPassword
          }).then(() => {
            loadUser();
            sendNotification({
              key: 'password_changed',
              message: 'Password changed successfully.',
              type: 'success',
              title: 'Success!',
              icon: 'check'
            });
          });
          form.value.newPassword = '';
          form.value.repeatPassword = '';
        } else {
          await fn({
            user: form.value
          }).then(() => {
            loadUser();
            sendNotification({
              key: 'profile_success',
              message: 'Profile updated successfully.',
              type: 'success',
              title: 'Success!',
              icon: 'check'
            });
          });
        }

        isEdited.value = false;
      } catch (e) {
        sendNotification({
          key: 'profile_failed',
          message: e.message,
          type: 'danger',
          title: 'Failed!'
        });
        return false;
      }
    };

    const updatePassword = async () => handleForm(changePassword, true)();

    const updateProfile = async () => handleForm(updateUser, false)();

    Object(lib_index_es["onSSR"])(async () => {
      await loadUser().then(() => {
        form.value.email = user.value.email;
        form.value.firstName = user.value.firstName;
        form.value.lastName = user.value.lastName;
      });
    });
    return {
      user,
      error,
      success,
      form,
      updatePassword,
      updateProfile,
      firstName,
      lastName,
      phone,
      displayName,
      email,
      isEdited
    };
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  head() {
    return {
      title: 'My Profile - Pure Daily Care',
      meta: [// hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'My Profile - Pure Daily Care',
        name: 'My Profile - Pure Daily Care',
        content: 'Pure Daily Care promotes natural beauty by combining the most modern technologies into easy-to-use, at-home products. Pure Daily Care technologies harness the healing power of naturally occurring phenomenon like steam, electricity and light to drastically improve your skin profile without the use of cosmetics.'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/MyAccount/MyProfile.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyAccount_MyProfilevue_type_script_lang_js_ = (MyProfilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/MyAccount/MyProfile.vue



function MyProfile_injectStyles (context) {
  
  var style0 = __webpack_require__(291)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MyProfile_component = Object(componentNormalizer["a" /* default */])(
  MyAccount_MyProfilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  MyProfile_injectStyles,
  null,
  "6262462f"
  
)

/* harmony default export */ var MyProfile = __webpack_exports__["default"] = (MyProfile_component.exports);

/***/ })

};;
//# sourceMappingURL=MyProfile.js.map