exports.ids = [15];
exports.modules = {

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("40d1698a", content, true, context)
};

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("cd13127a", content, true, context)
};

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-steps__header{position:relative;width:100%;display:flex;border:var(--steps-border,var(--steps-border-style,solid) var(--steps-border-color,var(--c-light)));border-width:0;border-width:var(--steps-border-width,0);box-shadow:0 4px 11px rgba(var(--c-black-base),.1)}.sf-steps__step{position:relative;display:flex;flex:1;justify-content:center;align-items:center;background:var(--steps-step-background);padding:var(--steps-step-padding,var(--spacer-sm) var(--spacer-2xs));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--step-font,var(--step-font-weight,var(--font-weight--normal)) var(--step-font-size,var(--font-size--base))/var(--step-font-line-height,1.6) var(--step-font-family,var(--font-family--secondary)));color:var(--c-link);color:var(--steps-step-color,var(--c-link));cursor:pointer;cursor:var(--steps-step-cursor,pointer)}.sf-steps__step.current,.sf-steps__step.done{--steps-step-color:var(--c-primary);--steps-step-cursor:default;--step-font-weight:var(--font-weight--normal)}.sf-steps__step.is-done{--steps-step-cursor:pointer}.sf-steps__step.is-disabled{--steps-step-cursor:not-allowed}.sf-steps__progress{content:\"\";position:absolute;left:0;bottom:-2px;bottom:var(--steps-progress-bottom,-2px);display:block;width:var(--_steps-progress-width);width:var(--steps-progress-width,var(--_steps-progress-width));height:2px;height:var(--steps-progress-height,2px);background:var(--c-primary);background:var(--steps-progress-background,var(--c-primary));transform:scaleX(calc(var(--_steps-progress-active-step) - .5));transform:var(--steps-progress-transform,scale3d(calc(var(--_steps-progress-active-step) - .5),1,1));transform-origin:0 50%;transition:transform .15s ease-in-out;transition:var(--steps-progress-transition,transform .15s ease-in-out)}.sf-steps__title{text-align:center}.sf-steps__content{padding:var(--steps-content-padding,var(--spacer-base) 0 0 0)}@media(min-width:1024px){.sf-steps{--steps-step-color:var(--c-text-muted)}.sf-steps__header{box-shadow:none;--steps-border-width:0 0 2px 0}.sf-steps__step{--steps-step-padding:0 0 var(--spacer-xs) 0;--step-font-size:var(--font-size--base)}.sf-steps__step.current,.sf-steps__step.done{--steps-step-after-background:var(--c-primary)}.sf-steps__step:after{content:\"\";position:absolute;border-radius:100%;bottom:-3.52px;left:49%;width:6px;height:6px;background:transparent;background:var(--steps-step-after-background,transparent)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5b70d892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(307);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5b70d892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5b70d892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5b70d892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_5b70d892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#checkout[data-v-5b70d892]{box-sizing:border-box}@media(min-width:1024px){#checkout[data-v-5b70d892]{max-width:1240px;margin:0 auto}}@media(min-width:1024px){.checkout[data-v-5b70d892]{display:flex}}@media(min-width:1024px){.checkout__main[data-v-5b70d892]{flex:1;padding:var(--spacer-xl) 0 0 0}}@media(min-width:1024px){.checkout__aside[data-v-5b70d892]{flex:0 0 25.5rem;margin:0 0 0 4.25rem}}.checkout__steps[data-v-5b70d892]{--steps-content-padding:0 var(--spacer-base)}@media(min-width:1024px){.checkout__steps[data-v-5b70d892]{--steps-content-padding:0}}.checkout__steps-auth[data-v-5b70d892] .sf-steps__step:first-child{--steps-step-color:#e8e4e4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout.vue?vue&type=template&id=5b70d892&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"checkout"}},[_vm._ssrNode("<div class=\"checkout\" data-v-5b70d892>","</div>",[_vm._ssrNode("<div class=\"checkout__main\" data-v-5b70d892>","</div>",[(!_vm.isThankYou)?_c('SfSteps',{class:{ 'checkout__steps': true },attrs:{"active":_vm.currentStepIndex},on:{"change":_vm.handleStepClick}},_vm._l((_vm.STEPS),function(step,key){return _c('SfStep',{key:key,attrs:{"name":step}},[_c('nuxt-child')],1)}),1):_c('nuxt-child')],1),_vm._ssrNode(" "),(!_vm.isThankYou)?_vm._ssrNode("<div class=\"checkout__aside desktop-only\" data-v-5b70d892>","</div>",[_c('transition',{attrs:{"name":"fade"}},[_c('CartPreview',{key:"order-summary"})],1)],1):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout.vue?vue&type=template&id=5b70d892&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/SfSteps.vue?vue&type=template&id=d67b2de4&
var SfStepsvue_type_template_id_d67b2de4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-steps"},[_vm._ssrNode("<div class=\"sf-steps__header\">","</div>",[_vm._l((_vm.parsedSteps),function(step){return _vm._t("steps",function(){return [_c('SfButton',{key:step.index,staticClass:"sf-button--pure",class:{
          'sf-steps__step': true,
          'is-done': step.done,
          current: step.current,
          'is-disabled': step.disabled,
        },attrs:{"data-testid":"steps-button"},on:{"click":function($event){return _vm.stepClick(step)}}},[_c('span',{staticClass:"sf-steps__title"},[_vm._v(_vm._s(step.step))])])]},{"stepClick":_vm.stepClick},{ step: step })}),_vm._ssrNode(" <div data-testid=\"steps-progress\" class=\"sf-steps__progress\""+(_vm._ssrStyle(null,_vm.progress, null))+"></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-steps__content\">","</div>",[_vm._t("default")],2)],2)}
var SfStepsvue_type_template_id_d67b2de4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/SfSteps.vue?vue&type=template&id=d67b2de4&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=template&id=6b06d3ce&
var SfStepvue_type_template_id_6b06d3ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-step"},[(_vm.active)?_vm._t("default",null,{"index":_vm.index}):_vm._e()],2)}
var SfStepvue_type_template_id_6b06d3ce_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=template&id=6b06d3ce&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfStepvue_type_script_lang_js_ = ({
  name: "SfStep",
  inject: ["stepsData"],
  props: {
    /**
     * Name of the step
     */
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    internalName() {
      if (this.stepsData) {
        return this.stepsData.name;
      }

      return null;
    },

    index() {
      if (this.stepsData) {
        return this.stepsData.index;
      }

      return null;
    },

    active() {
      return this.internalName === this.name;
    }

  },

  created() {
    this.stepsData.updateSteps(this.name);
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfStepvue_type_script_lang_js_ = (SfStepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/_internal/SfStep.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfStepvue_type_script_lang_js_,
  SfStepvue_type_template_id_6b06d3ce_render,
  SfStepvue_type_template_id_6b06d3ce_staticRenderFns,
  false,
  null,
  null,
  "3bc04b24"
  
)

/* harmony default export */ var SfStep = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/SfSteps.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.component("SfStep", SfStep);
/* harmony default export */ var SfStepsvue_type_script_lang_js_ = ({
  name: "SfSteps",
  components: {
    SfButton: SfButton["a" /* default */]
  },
  model: {
    prop: "active",
    event: "change"
  },

  provide() {
    const stepsData = {};
    Object.defineProperty(stepsData, "index", {
      enumerable: false,
      get: () => this.active
    });
    Object.defineProperty(stepsData, "name", {
      enumerable: false,
      get: () => this.steps[this.active]
    });
    Object.defineProperty(stepsData, "updateSteps", {
      enumerable: false,
      value: this.updateSteps
    });
    return {
      stepsData
    };
  },

  props: {
    /**
     * Current active step
     */
    active: {
      type: Number,
      default: 0
    },

    /**
     * Disable clicking on  a past step
     */
    canGoBack: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      steps: []
    };
  },

  computed: {
    parsedSteps() {
      if (this.steps) {
        return this.steps.map((step, index) => ({
          index,
          step,
          done: index < this.active,
          disabled: !this.canGoBack && index < this.active,
          current: index === this.active
        }));
      }

      return [];
    },

    progress() {
      return {
        "--_steps-progress-width": `${100 / this.steps.length}%`,
        "--_steps-progress-active-step": this.active + 1
      };
    }

  },
  methods: {
    updateSteps(step) {
      if (this.steps.includes(step)) return;
      this.steps.push(step);
    },

    stepClick({
      index,
      disabled
    }) {
      if (!disabled) {
        /**
         * Active step changed event
         *
         * @event 'change'
         * @type {Number}
         */
        this.$emit("change", index);
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/SfSteps.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSteps_SfStepsvue_type_script_lang_js_ = (SfStepsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSteps/SfSteps.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(345)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfSteps_component = Object(componentNormalizer["a" /* default */])(
  SfSteps_SfStepsvue_type_script_lang_js_,
  SfStepsvue_type_template_id_d67b2de4_render,
  SfStepsvue_type_template_id_d67b2de4_staticRenderFns,
  false,
  injectStyles,
  null,
  "cb37a630"
  
)

/* harmony default export */ var SfSteps = (SfSteps_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/CartPreview.vue?vue&type=template&id=fca1de76&
var CartPreviewvue_type_template_id_fca1de76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b',[_vm._ssrNode("Please implement vendor specific CartPreview component in 'components/Checkout' directory")])}
var CartPreviewvue_type_template_id_fca1de76_staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/CartPreview.vue?vue&type=template&id=fca1de76&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/CartPreview.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var CartPreviewvue_type_script_lang_js_ = ({
  name: 'CartPreview'
});
// CONCATENATED MODULE: ./components/Checkout/CartPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_CartPreviewvue_type_script_lang_js_ = (CartPreviewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Checkout/CartPreview.vue





/* normalize component */

var CartPreview_component = Object(componentNormalizer["a" /* default */])(
  Checkout_CartPreviewvue_type_script_lang_js_,
  CartPreviewvue_type_template_id_fca1de76_render,
  CartPreviewvue_type_template_id_fca1de76_staticRenderFns,
  false,
  null,
  null,
  "26be223a"
  
)

/* harmony default export */ var CartPreview = (CartPreview_component.exports);
// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const STEPS = {
  shipping: 'Shipping',
  billing: 'Billing',
  payment: 'Payment'
};
/* harmony default export */ var Checkoutvue_type_script_lang_js_ = ({
  name: 'Checkout',
  components: {
    SfButton: SfButton["a" /* default */],
    SfSteps: SfSteps,
    CartPreview: CartPreview
  },

  setup(props, context) {
    const currentStep = Object(composition_api_["computed"])(() => context.root.$route.path.split('/').pop());
    const currentStepIndex = Object(composition_api_["computed"])(() => Object.keys(STEPS).findIndex(s => s === currentStep.value));
    const isThankYou = Object(composition_api_["computed"])(() => currentStep.value === 'thank-you');

    const handleStepClick = stepIndex => {
      const key = Object.keys(STEPS)[stepIndex];
      context.root.$router.push(`/checkout/${key}`);
    };

    return {
      handleStepClick,
      STEPS,
      currentStepIndex,
      isThankYou,
      currentStep
    };
  }

});
// CONCATENATED MODULE: ./pages/Checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Checkoutvue_type_script_lang_js_ = (Checkoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/Checkout.vue



function Checkout_injectStyles (context) {
  
  var style0 = __webpack_require__(347)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Checkout_component = Object(componentNormalizer["a" /* default */])(
  pages_Checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Checkout_injectStyles,
  "5b70d892",
  "e5ec1954"
  
)

/* harmony default export */ var Checkout = __webpack_exports__["default"] = (Checkout_component.exports);

/***/ })

};;
//# sourceMappingURL=15.js.map