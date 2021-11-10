exports.ids = [12];
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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("58bb6f95", content, true, context)
};

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ShippingDetails_vue_vue_type_style_index_0_id_b4e93192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(319);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ShippingDetails_vue_vue_type_style_index_0_id_b4e93192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ShippingDetails_vue_vue_type_style_index_0_id_b4e93192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ShippingDetails_vue_vue_type_style_index_0_id_b4e93192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ShippingDetails_vue_vue_type_style_index_0_id_b4e93192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".message[data-v-b4e93192]{font-family:var(--font-family--primary);line-height:1.6;font-size:var(--font-size--base);margin:0 0 var(--spacer-base)}.shipping-list[data-v-b4e93192]{margin-bottom:var(--spacer-base)}.shipping[data-v-b4e93192]{display:flex;padding:var(--spacer-xl) 0;border-top:1px solid var(--c-light)}.shipping[data-v-b4e93192]:last-child{border-bottom:1px solid var(--c-light)}.shipping__content[data-v-b4e93192]{flex:1;color:var(--c-text);font-size:var(--font-size--base);font-weight:300;line-height:1.6}.shipping__actions[data-v-b4e93192]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}@media(min-width:1024px){.shipping__actions[data-v-b4e93192]{flex-direction:row;align-items:center;justify-content:flex-end}}.shipping__button-delete[data-v-b4e93192]{color:var(--c-link)}@media(min-width:1024px){.shipping__button-delete[data-v-b4e93192]{margin-left:var(--spacer-base)}}.shipping__address[data-v-b4e93192],.shipping__address p[data-v-b4e93192]{margin:0}.shipping__client-name[data-v-b4e93192]{font-size:var(--font-size--base);font-weight:500}.action-button[data-v-b4e93192]{width:100%}@media(min-width:1024px){.action-button[data-v-b4e93192]{width:auto}}@media(max-width:1023px){.tab-orphan[data-v-b4e93192]  .sf-tabs__title{display:none}.tab-orphan[data-v-b4e93192]  .sf-tabs__content{border:0;padding:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/ShippingDetails.vue?vue&type=template&id=b4e93192&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.edittingAddress)?_c('SfTabs',{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[_c('SfTab',{attrs:{"title":_vm.isNewAddress ? 'Add the address' : 'Update the address'}},[_c('p',{staticClass:"message"},[_vm._v("\n        "+_vm._s(_vm.$t('Contact details updated'))+"\n      ")]),_vm._v(" "),_c('ShippingAddressForm',{attrs:{"address":_vm.activeAddress,"isNew":_vm.isNewAddress},on:{"submit":_vm.saveAddress}})],1)],1):_c('SfTabs',{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[_c('SfTab',{attrs:{"title":"Shipping details"}},[_c('p',{staticClass:"message"},[_vm._v("\n        "+_vm._s(_vm.$t('Manage shipping addresses'))+"\n      ")]),_vm._v(" "),_c('transition-group',{staticClass:"shipping-list",attrs:{"tag":"div","name":"fade"}},_vm._l((_vm.addresses),function(address){return _c('div',{key:_vm.userShippingGetters.getId(address),staticClass:"shipping"},[_c('div',{staticClass:"shipping__content"},[_c('div',{staticClass:"shipping__address"},[_c('UserShippingAddress',{attrs:{"address":address}})],1)]),_vm._v(" "),_c('div',{staticClass:"shipping__actions"},[_c('SfIcon',{staticClass:"smartphone-only",attrs:{"icon":"cross","color":"gray","size":"14px","role":"button"},on:{"click":function($event){return _vm.removeAddress(address)}}}),_vm._v(" "),_c('SfButton',{on:{"click":function($event){return _vm.changeAddress(address)}}},[_vm._v("\n              "+_vm._s(_vm.$t('Change'))+"\n            ")]),_vm._v(" "),_c('SfButton',{staticClass:"color-light shipping__button-delete desktop-only",on:{"click":function($event){return _vm.removeAddress(address)}}},[_vm._v("\n              "+_vm._s(_vm.$t('Delete'))+"\n            ")])],1)])}),0),_vm._v(" "),_c('SfButton',{staticClass:"action-button",on:{"click":function($event){return _vm.changeAddress()}}},[_vm._v("\n        "+_vm._s(_vm.$t('Add new address'))+"\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/MyAccount/ShippingDetails.vue?vue&type=template&id=b4e93192&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue + 14 modules
var SfTabs = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/UserShippingAddress.vue?vue&type=template&id=4e298058&
var UserShippingAddressvue_type_template_id_4e298058_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shipping-addr",attrs:{"address":_vm.address}},[_vm._ssrNode("<section><p><strong>"+_vm._ssrEscape(_vm._s(_vm.address.name))+"</strong></p> <p><i>"+_vm._ssrEscape(_vm._s(_vm.address.company))+"</i></p> <p><i>"+_vm._ssrEscape(_vm._s(_vm.address.formattedArea))+"</i></p> <p><i>"+_vm._ssrEscape(_vm._s(_vm.address.phone))+"</i></p> <p><i>"+_vm._ssrEscape(_vm._s(_vm.address.email))+"</i></p></section>")])}
var UserShippingAddressvue_type_template_id_4e298058_staticRenderFns = []


// CONCATENATED MODULE: ./components/UserShippingAddress.vue?vue&type=template&id=4e298058&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserShippingAddress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var UserShippingAddressvue_type_script_lang_js_ = ({
  name: 'UserShippingAddress',
  props: {
    address: {
      default: {},
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./components/UserShippingAddress.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserShippingAddressvue_type_script_lang_js_ = (UserShippingAddressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/UserShippingAddress.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserShippingAddressvue_type_script_lang_js_,
  UserShippingAddressvue_type_template_id_4e298058_render,
  UserShippingAddressvue_type_template_id_4e298058_staticRenderFns,
  false,
  null,
  null,
  "00dcac07"
  
)

/* harmony default export */ var UserShippingAddress = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/MyAccount/ShippingAddressForm.vue?vue&type=template&id=50b5c3d6&
var ShippingAddressFormvue_type_template_id_50b5c3d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b',[_vm._ssrNode("Please implement vendor specific ShippingAddressForm component in 'components/MyAccount' directory")])}
var ShippingAddressFormvue_type_template_id_50b5c3d6_staticRenderFns = []


// CONCATENATED MODULE: ./components/MyAccount/ShippingAddressForm.vue?vue&type=template&id=50b5c3d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyAccount/ShippingAddressForm.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var ShippingAddressFormvue_type_script_lang_js_ = ({
  name: 'ShippingAddressForm'
});
// CONCATENATED MODULE: ./components/MyAccount/ShippingAddressForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyAccount_ShippingAddressFormvue_type_script_lang_js_ = (ShippingAddressFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/MyAccount/ShippingAddressForm.vue





/* normalize component */

var ShippingAddressForm_component = Object(componentNormalizer["a" /* default */])(
  MyAccount_ShippingAddressFormvue_type_script_lang_js_,
  ShippingAddressFormvue_type_template_id_50b5c3d6_render,
  ShippingAddressFormvue_type_template_id_50b5c3d6_staticRenderFns,
  false,
  null,
  null,
  "b1c2c130"
  
)

/* harmony default export */ var ShippingAddressForm = (ShippingAddressForm_component.exports);
// EXTERNAL MODULE: ./node_modules/@vue-storefront/shopify/lib/index.es.js
var index_es = __webpack_require__(7);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/ShippingDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var ShippingDetailsvue_type_script_lang_js_ = ({
  name: 'ShippingDetails',
  components: {
    SfTabs: SfTabs["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    UserShippingAddress: UserShippingAddress,
    ShippingAddressForm: ShippingAddressForm
  },

  setup() {
    const {
      shipping,
      load: loadUserShipping,
      addAddress,
      deleteAddress,
      updateAddress
    } = Object(index_es["m" /* useUserShipping */])();
    const addresses = Object(composition_api_["computed"])(() => index_es["q" /* userShippingGetters */].getAddresses(shipping.value));
    const edittingAddress = Object(composition_api_["ref"])(false);
    const activeAddress = Object(composition_api_["ref"])(undefined);
    const isNewAddress = Object(composition_api_["computed"])(() => !activeAddress.value);

    const changeAddress = (address = undefined) => {
      activeAddress.value = address;
      edittingAddress.value = true;
    };

    const removeAddress = address => deleteAddress({
      address
    });

    const saveAddress = async ({
      form,
      onComplete,
      onError
    }) => {
      try {
        const actionMethod = isNewAddress.value ? addAddress : updateAddress;
        const data = await actionMethod({
          address: form
        });
        edittingAddress.value = false;
        activeAddress.value = undefined;
        await onComplete(data);
      } catch (error) {
        onError(error);
      }
    };

    Object(lib_index_es["onSSR"])(async () => {
      await loadUserShipping();
    });
    return {
      changeAddress,
      updateAddress,
      removeAddress,
      saveAddress,
      userShippingGetters: index_es["q" /* userShippingGetters */],
      addresses,
      edittingAddress,
      activeAddress,
      isNewAddress
    };
  }

});
// CONCATENATED MODULE: ./pages/MyAccount/ShippingDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyAccount_ShippingDetailsvue_type_script_lang_js_ = (ShippingDetailsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/MyAccount/ShippingDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(369)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ShippingDetails_component = Object(componentNormalizer["a" /* default */])(
  MyAccount_ShippingDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b4e93192",
  "35230186"
  
)

/* harmony default export */ var ShippingDetails = __webpack_exports__["default"] = (ShippingDetails_component.exports);

/***/ })

};;
//# sourceMappingURL=ShippingDetails.js.map