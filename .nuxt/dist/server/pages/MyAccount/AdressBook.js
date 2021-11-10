exports.ids = [5];
exports.modules = {

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("01bddff6", content, true, context)
};

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBillingAddress_vue_vue_type_style_index_0_id_7dc83e79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBillingAddress_vue_vue_type_style_index_0_id_7dc83e79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBillingAddress_vue_vue_type_style_index_0_id_7dc83e79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBillingAddress_vue_vue_type_style_index_0_id_7dc83e79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBillingAddress_vue_vue_type_style_index_0_id_7dc83e79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".billing-addr[data-v-7dc83e79]{color:var(--c-black)}.billing-addr p[data-v-7dc83e79]{margin:0;line-height:1.43}.billing-addr p.billing-phone[data-v-7dc83e79]{margin-top:20px}@media(max-width:1023px){.billing-addr p.billing-phone[data-v-7dc83e79]{margin-top:15px}}.billing-addr p.billing-phone>a[data-v-7dc83e79]{display:inline-flex;align-items:center;color:var(--c-black)}.billing-addr p.billing-phone>a .sf-icon[data-v-7dc83e79]{margin-right:5px}.billing-addr p.billing-phone>a svg path[data-v-7dc83e79]{transition:all .3s ease 0s}.billing-addr p.billing-phone>a[data-v-7dc83e79]:hover{color:var(--c-primary);--icon-color:var(--c-primary)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 268:
/***/ (function(module) {

module.exports = JSON.parse("{\"countries\":[{\"country\":\"United States\",\"states\":[\"Alabama\",\"Alaska\",\"Arizona\",\"Arkansas\",\"California\",\"Colorado\",\"Connecticut\",\"Delaware\",\"District of Columbia\",\"Florida\",\"Georgia\",\"Hawaii\",\"Idaho\",\"Illinois\",\"Indiana\",\"Iowa\",\"Kansas\",\"Kentucky\",\"Louisiana\",\"Maine\",\"Maryland\",\"Massachusetts\",\"Michigan\",\"Minnesota\",\"Mississippi\",\"Missouri\",\"Montana\",\"Nebraska\",\"Nevada\",\"New Hampshire\",\"New Jersey\",\"New Mexico\",\"New York\",\"North Carolina\",\"North Dakota\",\"Ohio\",\"Oklahoma\",\"Oregon\",\"Pennsylvania\",\"Rhode Island\",\"South Carolina\",\"South Dakota\",\"Tennessee\",\"Texas\",\"Utah\",\"Vermont\",\"Virginia\",\"Washington\",\"West Virginia\",\"Wisconsin\",\"Wyoming\"]},{\"country\":\"Germany\",\"states\":[\"Baden-Wuerttemberg\",\"Bayern\",\"Berlin\",\"Brandenburg\",\"Bremen\",\"Hamburg\",\"Hessen\",\"Mecklenburg-Vorpommern\",\"Niedersachsen\",\"Nordrhein-Westfalen\",\"Rheinland-Pfalz\",\"Saarland\",\"Sachsen\",\"Sachsen-Anhalt\",\"Schleswig-Holstein\",\"Thueringen\"]},{\"country\":\"Canada\",\"states\":[\"Alberta\",\"British Columbia\",\"Manitoba\",\"New Brunswick\",\"Newfoundland and Labrador\",\"Northwest Territories\",\"Nova Scotia\",\"Nunavut\",\"Ontario\",\"Prince Edward Island\",\"Quebec\",\"Saskatchewan\",\"Yukon Territory\"]},{\"country\":\"Mexico\",\"states\":[\"Aguascalientes\",\"Baja California\",\"Baja California Sur\",\"Campeche\",\"Chiapas\",\"Chihuahua\",\"Coahuila de Zaragoza\",\"Colima\",\"Distrito Federal\",\"Durango\",\"Guanajuato\",\"Guerrero\",\"Hidalgo\",\"Jalisco\",\"Mexico\",\"Michoacan de Ocampo\",\"Morelos\",\"Nayarit\",\"Nuevo Leon\",\"Oaxaca\",\"Puebla\",\"Queretaro de Arteaga\",\"Quintana Roo\",\"San Luis Potosi\",\"Sinaloa\",\"Sonora\",\"Tabasco\",\"Tamaulipas\",\"Tlaxcala\",\"Veracruz-Llave\",\"Yucatan\",\"Zacatecas\"]},{\"country\":\"United Kingdom\",\"states\":[]},{\"country\":\"France\",\"states\":[\"Alsace\",\"Aquitaine\",\"Auvergne\",\"Basse-Normandie\",\"Bourgogne\",\"Bretagne\",\"Centre\",\"Champagne-Ardenne\",\"Corse\",\"Franche-Comte\",\"Haute-Normandie\",\"Ile-de-France\",\"Languedoc-Roussillon\",\"Limousin\",\"Lorraine\",\"Midi-Pyrenees\",\"Nord-Pas-de-Calais\",\"Pays de la Loire\",\"Picardie\",\"Poitou-Charentes\",\"Provence-Alpes-Cote d'Azur\",\"Rhone-Alpes\"]},{\"country\":\"Italy\",\"states\":[\"Abruzzo\",\"Basilicata\",\"Calabria\",\"Campania\",\"Emilia-Romagna\",\"Friuli-Venezia Giulia\",\"Lazio\",\"Liguria\",\"Lombardia\",\"Marche\",\"Molise\",\"Piemonte\",\"Puglia\",\"Sardegna\",\"Sicilia\",\"Toscana\",\"Trentino-Alto Adige\",\"Umbria\",\"Valle d'Aosta\",\"Veneto\"]},{\"country\":\"Spain\",\"states\":[\"Andalucia\",\"Aragon\",\"Asturias\",\"Baleares\",\"Ceuta\",\"Canarias\",\"Cantabria\",\"Castilla-La Mancha\",\"Castilla y Leon\",\"Cataluna\",\"Comunidad Valenciana\",\"Extremadura\",\"Galicia\",\"La Rioja\",\"Madrid\",\"Melilla\",\"Murcia\",\"Navarra\",\"Pais Vasco\"]},{\"country\":\"United Arab Emirates\",\"states\":[\"Abu Dhabi\",\"'Ajman\",\"Al Fujayrah\",\"Sharjah\",\"Dubai\",\"Ra's al Khaymah\",\"Umm al Qaywayn\"]},{\"country\":\"Saudi Arabia\",\"states\":[\"Al Bahah\",\"Al Hudud ash Shamaliyah\",\"Al Jawf\",\"Al Madinah\",\"Al Qasim\",\"Ar Riyad\",\"Ash Sharqiyah\",\"'Asir\",\"Ha'il\",\"Jizan\",\"Makkah\",\"Najran\",\"Tabuk\"]},{\"country\":\"India\",\"states\":[\"Andaman and Nicobar Islands\",\"Andhra Pradesh\",\"Arunachal Pradesh\",\"Assam\",\"Bihar\",\"Chandigarh\",\"Chhattisgarh\",\"Dadra and Nagar Haveli\",\"Daman and Diu\",\"Delhi\",\"Goa\",\"Gujarat\",\"Haryana\",\"Himachal Pradesh\",\"Jammu and Kashmir\",\"Jharkhand\",\"Karnataka\",\"Kerala\",\"Lakshadweep\",\"Madhya Pradesh\",\"Maharashtra\",\"Manipur\",\"Meghalaya\",\"Mizoram\",\"Nagaland\",\"Orissa\",\"Pondicherry\",\"Punjab\",\"Rajasthan\",\"Sikkim\",\"Tamil Nadu\",\"Tripura\",\"Uttaranchal\",\"Uttar Pradesh\",\"West Bengal\"]},{\"country\":\"Australia\",\"states\":[]},{\"country\":\"Singapore\",\"states\":[]},{\"country\":\"Hong Kong\",\"states\":[]},{\"country\":\"Indonesia\",\"states\":[\"Aceh\",\"Bali\",\"Banten\",\"Bengkulu\",\"Gorontalo\",\"Irian Jaya Barat\",\"Jakarta Raya\",\"Jambi\",\"Jawa Barat\",\"Jawa Tengah\",\"Jawa Timur\",\"Kalimantan Barat\",\"Kalimantan Selatan\",\"Kalimantan Tengah\",\"Kalimantan Timur\",\"Kepulauan Bangka Belitung\",\"Kepulauan Riau\",\"Lampung\",\"Maluku\",\"Maluku Utara\",\"Nusa Tenggara Barat\",\"Nusa Tenggara Timur\",\"Papua\",\"Riau\",\"Sulawesi Barat\",\"Sulawesi Selatan\",\"Sulawesi Tengah\",\"Sulawesi Tenggara\",\"Sulawesi Utara\",\"Sumatera Barat\",\"Sumatera Selatan\",\"Sumatera Utara\",\"Yogyakarta\"]},{\"country\":\"Thailand\",\"states\":[\"Amnat Charoen\",\"Ang Thong\",\"Buriram\",\"Chachoengsao\",\"Chai Nat\",\"Chaiyaphum\",\"Chanthaburi\",\"Chiang Mai\",\"Chiang Rai\",\"Chon Buri\",\"Chumphon\",\"Kalasin\",\"Kamphaeng Phet\",\"Kanchanaburi\",\"Khon Kaen\",\"Krabi\",\"Krung Thep Mahanakhon\",\"Lampang\",\"Lamphun\",\"Loei\",\"Lop Buri\",\"Mae Hong Son\",\"Maha Sarakham\",\"Mukdahan\",\"Nakhon Nayok\",\"Nakhon Pathom\",\"Nakhon Phanom\",\"Nakhon Ratchasima\",\"Nakhon Sawan\",\"Nakhon Si Thammarat\",\"Nan\",\"Narathiwat\",\"Nong Bua Lamphu\",\"Nong Khai\",\"Nonthaburi\",\"Pathum Thani\",\"Pattani\",\"Phangnga\",\"Phatthalung\",\"Phayao\",\"Phetchabun\",\"Phetchaburi\",\"Phichit\",\"Phitsanulok\",\"Phra Nakhon Si Ayutthaya\",\"Phrae\",\"Phuket\",\"Prachin Buri\",\"Prachuap Khiri Khan\",\"Ranong\",\"Ratchaburi\",\"Rayong\",\"Roi Et\",\"Sa Kaeo\",\"Sakon Nakhon\",\"Samut Prakan\",\"Samut Sakhon\",\"Samut Songkhram\",\"Sara Buri\",\"Satun\",\"Sing Buri\",\"Sisaket\",\"Songkhla\",\"Sukhothai\",\"Suphan Buri\",\"Surat Thani\",\"Surin\",\"Tak\",\"Trang\",\"Trat\",\"Ubon Ratchathani\",\"Udon Thani\",\"Uthai Thani\",\"Uttaradit\",\"Yala\",\"Yasothon\"]},{\"country\":\"China\",\"states\":[\"Anhui\",\"Fujian\",\"Gansu\",\"Guangdong\",\"Guizhou\",\"Hainan\",\"Hebei\",\"Heilongjiang\",\"Henan\",\"Hubei\",\"Hunan\",\"Jiangsu\",\"Jiangxi\",\"Jilin\",\"Liaoning\",\"Qinghai\",\"Shaanxi\",\"Shandong\",\"Shanxi\",\"Sichuan\",\"Yunnan\",\"Zhejiang\",\"Guangxi\",\"Nei Mongol\",\"Ningxia\",\"Xinjiang\",\"Xizang (Tibet)\",\"Beijing\",\"Chongqing\",\"Shanghai\",\"Tianjin\"]},{\"country\":\"Vietnam\",\"states\":[\"An Giang\",\"Bac Giang\",\"Bac Kan\",\"Bac Lieu\",\"Bac Ninh\",\"Ba Ria-Vung Tau\",\"Ben Tre\",\"Binh Dinh\",\"Binh Duong\",\"Binh Phuoc\",\"Binh Thuan\",\"Ca Mau\",\"Cao Bang\",\"Dac Lak\",\"Dac Nong\",\"Dien Bien\",\"Dong Nai\",\"Dong Thap\",\"Gia Lai\",\"Ha Giang\",\"Hai Duong\",\"Ha Nam\",\"Ha Tay\",\"Ha Tinh\",\"Hau Giang\",\"Hoa Binh\",\"Hung Yen\",\"Khanh Hoa\",\"Kien Giang\",\"Kon Tum\",\"Lai Chau\",\"Lam Dong\",\"Lang Son\",\"Lao Cai\",\"Long An\",\"Nam Dinh\",\"Nghe An\",\"Ninh Binh\",\"Ninh Thuan\",\"Phu Tho\",\"Phu Yen\",\"Quang Binh\",\"Quang Nam\",\"Quang Ngai\",\"Quang Ninh\",\"Quang Tri\",\"Soc Trang\",\"Son La\",\"Tay Ninh\",\"Thai Binh\",\"Thai Nguyen\",\"Thanh Hoa\",\"Thua Thien-Hue\",\"Tien Giang\",\"Tra Vinh\",\"Tuyen Quang\",\"Vinh Long\",\"Vinh Phuc\",\"Yen Bai\",\"Can Tho\",\"Da Nang\",\"Hai Phong\",\"Hanoi\",\"Ho Chi Minh\"]}]}");

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ed832812", content, true, context)
};

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/UserBillingAddress.vue?vue&type=template&id=7dc83e79&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"billing-addr",attrs:{"address":_vm.address}},[_vm._ssrNode("<section data-v-7dc83e79>","</section>",[_vm._ssrNode(((_vm.address.name)?("<p data-v-7dc83e79>"+_vm._ssrEscape(_vm._s(_vm.address.name))+"</p>"):"<!---->")+" "+((_vm.address.address2 || _vm.address.company)?("<p data-v-7dc83e79>"+_vm._ssrEscape(_vm._s(_vm.address.address2))+((_vm.address.address2)?("<span data-v-7dc83e79>,</span>"):"<!---->")+_vm._ssrEscape(" "+_vm._s(_vm.address.company))+"</p>"):"<!---->")+" "+((_vm.address.formattedArea)?("<p data-v-7dc83e79>"+_vm._ssrEscape(_vm._s(_vm.address.formattedArea))+"</p>"):"<!---->")+" "+((_vm.address.zip)?("<p data-v-7dc83e79>"+_vm._ssrEscape(_vm._s(_vm.address.zip))+"</p>"):"<!---->")+" "),(_vm.address.phone)?_vm._ssrNode("<p class=\"billing-phone\" data-v-7dc83e79>","</p>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",("tel:" + (_vm.address.phone))))+" data-v-7dc83e79>","</a>",[_c('SfIcon',{attrs:{"size":"18px","viewBox":"0 0 18 18","icon":"phone"}}),_vm._ssrNode(_vm._ssrEscape(" "+_vm._s(_vm.address.phone)))],2)]):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserBillingAddress.vue?vue&type=template&id=7dc83e79&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserBillingAddress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UserBillingAddressvue_type_script_lang_js_ = ({
  name: 'UserBillingAddress',
  props: {
    address: {
      default: {},
      type: Object
    }
  },
  components: {
    SfIcon: SfIcon["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/UserBillingAddress.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserBillingAddressvue_type_script_lang_js_ = (UserBillingAddressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/UserBillingAddress.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(266)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserBillingAddressvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7dc83e79",
  "755fb830"
  
)

/* harmony default export */ var UserBillingAddress = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/MyAccount/BillingAddressForm.vue?vue&type=template&id=3040db2c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my_account_content container-small"},[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{staticClass:"form",attrs:{"id":"billing-details-form"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.submitForm)}}},[_c('div',{staticClass:"row"},[_c('ValidationProvider',{staticClass:"col-6",attrs:{"rules":"required|min:2","tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_firstName","name":"firstName","label":"First Name","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.firstName),callback:function ($$v) {_vm.$set(_vm.form, "firstName", $$v)},expression:"form.firstName"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{staticClass:"col-6",attrs:{"rules":"required|min:2","tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_lastName","name":"lastName","label":"Last Name","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.lastName),callback:function ($$v) {_vm.$set(_vm.form, "lastName", $$v)},expression:"form.lastName"}})]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"row"},[_c('ValidationProvider',{staticClass:"col-6",attrs:{"rules":"required|min:5","tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_streetName","name":"streetName","label":"Street Name","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.streetName),callback:function ($$v) {_vm.$set(_vm.form, "streetName", $$v)},expression:"form.streetName"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{staticClass:"col-6",attrs:{"rules":"required|min:1","tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_apartment","name":"apartment","label":"House/Apartment number","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.apartment),callback:function ($$v) {_vm.$set(_vm.form, "apartment", $$v)},expression:"form.apartment"}})]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"row"},[_c('ValidationProvider',{staticClass:"col-6",attrs:{"rules":"required|min:2","tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_city","name":"city","label":"City","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.city),callback:function ($$v) {_vm.$set(_vm.form, "city", $$v)},expression:"form.city"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{staticClass:"col-6",attrs:{"rules":("required|oneOf:" + (_vm.allContries.map(function (c) { return c.name; }).join(',')))},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfSelect',{staticClass:"form__select sf-select--underlined form__element",attrs:{"data-cy":"billing-details-country_state","name":"country","label":"Country","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function($event){return _vm.getStateFromCountry(_vm.form.country)}},model:{value:(_vm.form.country),callback:function ($$v) {_vm.$set(_vm.form, "country", $$v)},expression:"form.country"}},_vm._l((_vm.allContries),function(ref){
var name = ref.name;
var index = ref.index;
return _c('SfSelectOption',{key:index,attrs:{"value":name}},[_vm._v("\n              "+_vm._s(name)+"\n            ")])}),1)]}}],null,true)}),_vm._v(" "),(_vm.states.length > 0)?_c('ValidationProvider',{staticClass:"col-12",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfSelect',{staticClass:"form__select sf-select--underlined form__element",attrs:{"data-cy":"billing-details-input_state","name":"state","label":"State/Province","valid":!errors[0],"errorMessage":errors[0],"selected":_vm.form.state},model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},_vm._l((_vm.states),function(name,index){return _c('SfSelectOption',{key:index,attrs:{"value":name}},[_vm._v("\n              "+_vm._s(name)+"\n            ")])}),1)]}}],null,true)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"row"},[_c('ValidationProvider',{staticClass:"col-6",attrs:{"rules":"required|min:4","tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_zipCode","name":"zipCode","label":"Zipcode","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.postalCode),callback:function ($$v) {_vm.$set(_vm.form, "postalCode", $$v)},expression:"form.postalCode"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{staticClass:"col-6",attrs:{"tag":"div"}},[_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_company","name":"company","label":"Company","tag":"div"},model:{value:(_vm.form.company),callback:function ($$v) {_vm.$set(_vm.form, "company", $$v)},expression:"form.company"}})],1),_vm._v(" "),_c('ValidationProvider',{staticClass:"col-12",attrs:{"rules":"required|min:8|max:15|regex:^(\\+?\\d[0-9]+)$","tag":"div"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_phoneNumber","name":"phone","label":"Phone number","valid":!errors[0],"errorMessage":errors[0]},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"my-account-bottom-action-wrap"},[_c('div',{staticClass:"form__button_wrap"},[_c('SfButton',{staticClass:"form__button",attrs:{"data-cy":"billing-details-btn_update"},nativeOn:{"click":function($event){return _vm.scrollToTop()}}},[_vm._v("\n            "+_vm._s(_vm.isNew ? "Add To My Address Book" : "Update My Address Book")+"\n          ")])],1),_vm._v(" "),_c('div',{staticClass:"form__button_wrap"},[_c('SfButton',{staticClass:"form__button",attrs:{"data-cy":"billing-details-btn_cancel"},on:{"click":function($event){_vm.$parent.edittingAddress = false, _vm.scrollToTop()}}},[_vm._v("Cancel")])],1)])])]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MyAccount/BillingAddressForm.vue?vue&type=template&id=3040db2c&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue + 9 modules
var SfSelect = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(24);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(18);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// EXTERNAL MODULE: ./static/country-state.json
var country_state = __webpack_require__(268);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyAccount/BillingAddressForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





Object(external_vee_validate_["extend"])('required', { ...rules["g" /* required */],
  message: 'This field is required'
});
Object(external_vee_validate_["extend"])('min', { ...rules["d" /* min */],
  message: 'The field should have at least {length} characters'
});
Object(external_vee_validate_["extend"])('max', { ...rules["c" /* max */],
  message: 'The field should have maximum {length} characters'
});
Object(external_vee_validate_["extend"])('oneOf', { ...rules["e" /* oneOf */],
  message: 'Invalid country'
});
Object(external_vee_validate_["extend"])('regex', { ...rules["f" /* regex */],
  message: 'Invalid phone number'
});
/* harmony default export */ var BillingAddressFormvue_type_script_lang_js_ = ({
  name: 'BillingAddressForm',
  components: {
    SfInput: SfInput["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfSelect: SfSelect["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    ValidationProvider: external_vee_validate_["ValidationProvider"],
    ValidationObserver: external_vee_validate_["ValidationObserver"]
  },
  props: {
    address: {
      type: Object,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      default: () => ({
        id: Math.random().toString().substr(2),
        firstName: '',
        lastName: '',
        streetName: '',
        apartment: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'United States',
        phone: '',
        company: '',
        isDefault: false
      })
    },
    isNew: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      states: [],
      defaultCountry: 'United States'
    };
  },

  mounted() {
    this.getStateFromCountry(this.address.country);
  },

  methods: {
    getStateFromCountry(country) {
      const allStates = country_state.countries.find(item => item.country === country);
      this.states = allStates ? allStates.states : [];
      this.form.state = this.states[0];
    }

  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props, {
    emit
  }) {
    const allContries = Object(composition_api_["ref"])([]);
    country_state.countries.map(item => {
      allContries.value.push({
        name: item.country
      });
    });
    const form = Object(composition_api_["ref"])({
      id: props.address.id,
      firstName: props.address.firstName,
      lastName: props.address.lastName,
      streetName: props.address.address1,
      apartment: props.address.address2,
      city: props.address.city,
      state: props.address.state,
      postalCode: props.address.zip,
      country: props.address.country,
      company: props.address.company,
      phone: props.address.phone,
      isDefault: props.address.isDefault
    });

    const submitForm = () => {
      emit('submit', {
        form,
        onComplete: () => {},
        onError: () => {}
      });
    };

    return {
      form,
      submitForm,
      allContries
    };
  }

});
// CONCATENATED MODULE: ./components/MyAccount/BillingAddressForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyAccount_BillingAddressFormvue_type_script_lang_js_ = (BillingAddressFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/MyAccount/BillingAddressForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MyAccount_BillingAddressFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cddeb9a2"
  
)

/* harmony default export */ var BillingAddressForm = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AdressBook_vue_vue_type_style_index_0_id_6983b80c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AdressBook_vue_vue_type_style_index_0_id_6983b80c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AdressBook_vue_vue_type_style_index_0_id_6983b80c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AdressBook_vue_vue_type_style_index_0_id_6983b80c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AdressBook_vue_vue_type_style_index_0_id_6983b80c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".billing-list[data-v-6983b80c]{display:flex;flex-wrap:wrap;margin-left:-10px;margin-right:-10px}.billing-list .billing[data-v-6983b80c]{padding-left:10px;padding-right:10px;flex:0 0 50%;max-width:50%;min-height:180px}@media(max-width:767px){.billing-list .billing[data-v-6983b80c]{flex:0 0 100%;max-width:100%}}.billing-list .billing[data-v-6983b80c]:nth-child(n+3){margin-top:20px}@media(max-width:767px){.billing-list .billing[data-v-6983b80c]:nth-child(n+3){margin-top:0}}@media(max-width:767px){.billing-list .billing+.billing[data-v-6983b80c]{margin-top:20px}}.billing-list .billing .billing__wrap[data-v-6983b80c]{border:1px solid var(--_c-gray-DDDDDD);border-radius:6px;padding:20px 15px 15px 20px;height:100%;display:flex;flex-direction:column;justify-content:space-between}.billing-list .billing.add-address-btn .billing__wrap[data-v-6983b80c]{padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.billing-list .billing.add-address-btn .billing__wrap:hover .sf-button[data-v-6983b80c]{color:var(--c-primary);--icon-color:var(--c-primary)}.billing-list .billing.add-address-btn .sf-button[data-v-6983b80c]{color:var(--c-black);--icon-color:var(--c-black);text-decoration:none;display:flex;align-items:center;font-weight:400;transition:all .3s ease 0s}.billing-list .billing.add-address-btn .sf-button[data-v-6983b80c]:hover{color:var(--c-primary);--icon-color:var(--c-primary)}.billing-list .billing.add-address-btn .sf-button .sf-icon[data-v-6983b80c]{width:21px;height:21px;margin-right:10px}.billing-list .billing.add-address-btn .sf-button .sf-icon svg path[data-v-6983b80c]{transition:all .3s ease 0s}.billing__actions[data-v-6983b80c]{display:flex;justify-content:flex-end;margin-top:28px}@media(max-width:1023px){.billing__actions[data-v-6983b80c]{margin-top:10px}}.billing__actions .sf-button[data-v-6983b80c]{color:var(--c-primary);font-size:12px;transition:all .3s ease 0s}.billing__actions .sf-button+.sf-button[data-v-6983b80c]{border-left:1px solid var(--_c-gray-888888);margin-left:10px;padding-left:10px}.billing__actions .sf-button[data-v-6983b80c]:hover{color:var(--_c-black-171717)}.address-loader[data-v-6983b80c]{margin:100px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/AdressBook.vue?vue&type=template&id=6983b80c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my_account_content_wrap"},[_vm._ssrNode("<div class=\"my_accoutn_title_wrap\" data-v-6983b80c>","</div>",[_c('SfHeading',{staticClass:"my_accoutn_title",attrs:{"level":1,"title":_vm.title}})],1),_vm._ssrNode(" "),(_vm.edittingAddress)?_vm._ssrNode("<div class=\"tab-orphan\" data-v-6983b80c>","</div>",[_vm._ssrNode("<div data-cy=\"billing-details-tab_change\" data-v-6983b80c>","</div>",[_c('BillingAddressForm',{attrs:{"address":_vm.activeAddress,"isNew":_vm.isNewAddress},on:{"submit":_vm.saveAddress}})],1)]):_vm._ssrNode("<div class=\"tab-orphan\" data-v-6983b80c>","</div>",[_c('transition',{attrs:{"name":"sf-collapse-top","mode":"out-in"}},[_c('div',{staticClass:"notifications"},[(!_vm.loading)?_c('SfNotification',{attrs:{"visible":_vm.visible,"title":"Are you sure?","message":"Are you sure you would like to remove this address from your account?","type":"secondary"},scopedSlots:_vm._u([{key:"action",fn:function(){return [_c('div',{staticClass:"button-wrap"},[_c('SfButton',{on:{"click":function($event){return _vm.handleRemove(_vm.addressToRemove)}}},[_vm._v("Yes")]),_vm._v(" "),_c('SfButton',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("Cancel")])],1)]},proxy:true},{key:"close",fn:function(){return [_c('div')]},proxy:true}],null,false,1994956572)}):_vm._e()],1)]),_vm._ssrNode(" "),(_vm.loading)?_c('SfLoader',{staticClass:"address-loader",class:{ loading: _vm.loading },attrs:{"loading":_vm.loading}},[_c('div')]):_vm._e(),_vm._ssrNode(" "),(!_vm.loading)?_vm._ssrNode("<div data-cy=\"billing-details-tab_details\" data-v-6983b80c>","</div>",[_vm._ssrNode("<div class=\"billing-list\" data-v-6983b80c>","</div>",[_vm._l((_vm.addresses),function(address){return _vm._ssrNode("<div class=\"billing\" data-v-6983b80c>","</div>",[_vm._ssrNode("<div class=\"billing__wrap\" data-v-6983b80c>","</div>",[_vm._ssrNode("<div class=\"billing__content\" data-v-6983b80c>","</div>",[_vm._ssrNode("<div class=\"billing__address\" data-v-6983b80c>","</div>",[_c('UserBillingAddress',{attrs:{"address":address}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"billing__actions\" data-v-6983b80c>","</div>",[_c('SfButton',{staticClass:" sf-button--text",attrs:{"data-cy":"billing-details-btn_change"},on:{"click":function($event){_vm.changeAddress(address), _vm.scrollToTop()}}},[_vm._v("\n                Edit\n              ")]),_vm._ssrNode(" "),_c('SfButton',{staticClass:"billing__button-delete sf-button--text",attrs:{"data-cy":"billing-details-btn_delete"},on:{"click":function($event){return _vm.ConfirmRemove(address)}}},[_vm._v("\n                Delete\n              ")])],2)],2)])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"billing add-address-btn\" data-v-6983b80c>","</div>",[_vm._ssrNode("<div class=\"billing__wrap\" data-v-6983b80c>","</div>",[_c('SfButton',{staticClass:"action-button sf-button--text",attrs:{"data-cy":"billing-details-btn_add"}},[_c('SfIcon',{attrs:{"icon":"plus"}}),_vm._v("\n              Add Address\n            ")],1)],1)])],2)]):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/MyAccount/AdressBook.vue?vue&type=template&id=6983b80c&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue + 4 modules
var SfLoader = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfNotification/SfNotification.vue + 4 modules
var SfNotification = __webpack_require__(235);

// EXTERNAL MODULE: ./components/UserBillingAddress.vue + 4 modules
var UserBillingAddress = __webpack_require__(272);

// EXTERNAL MODULE: ./components/MyAccount/BillingAddressForm.vue + 4 modules
var BillingAddressForm = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/shopify/lib/index.es.js
var index_es = __webpack_require__(7);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(5);

// EXTERNAL MODULE: ./composables/useUiNotification/index.ts
var useUiNotification = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/AdressBook.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var AdressBookvue_type_script_lang_js_ = ({
  name: 'AdressBook',
  components: {
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfLoader: SfLoader["a" /* default */],
    SfNotification: SfNotification["a" /* default */],
    UserBillingAddress: UserBillingAddress["a" /* default */],
    BillingAddressForm: BillingAddressForm["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: 'Address Book'
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      visible: false,
      addressToRemove: {}
    };
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    ConfirmRemove(address) {
      this.visible = true;
      this.addressToRemove = address;
    },

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async handleRemove(address) {
      this.isLoadervisible = true;
      await this.removeAddress(address).then(() => {
        this.visible = false;
      });
    }

  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const {
      billing,
      load: loadUserBilling,
      addAddress,
      deleteAddress,
      updateAddress,
      loading
    } = Object(index_es["k" /* useUserBilling */])();
    const addresses = Object(composition_api_["computed"])(() => index_es["o" /* userBillingGetters */].getAddresses(billing.value));
    const edittingAddress = Object(composition_api_["ref"])(false);
    const activeAddress = Object(composition_api_["ref"])(undefined);
    const isNewAddress = Object(composition_api_["computed"])(() => !activeAddress.value);
    const {
      send: sendNotification
    } = Object(useUiNotification["a" /* default */])();

    const changeAddress = (address = undefined) => {
      activeAddress.value = address;
      edittingAddress.value = true;
    };

    const removeAddress = async address => await deleteAddress({
      address
    }).then(() => {
      if (billing.value) {
        loadUserBilling();
        sendNotification({
          key: 'address_removed',
          message: 'Address has been removed successfully',
          type: 'success',
          title: 'Address removed!',
          icon: 'check'
        });
      } else {
        sendNotification({
          key: 'address_removed',
          message: 'Something went wrong, please retry',
          type: 'danger',
          title: 'Remove address failed!'
        });
      }
    });

    const saveAddress = async ({
      form,
      onComplete,
      onError
    }) => {
      try {
        const actionMethod = isNewAddress.value ? addAddress : updateAddress;
        let notificationMsg = 'Addressbook updated successfully';

        if (isNewAddress.value) {
          notificationMsg = 'Address added successfully';
        }

        const data = await actionMethod({
          address: form.value
        }).then(() => {
          if (billing.value) {
            loadUserBilling();
            sendNotification({
              key: 'address_success',
              message: notificationMsg,
              type: 'success',
              title: 'Success!',
              icon: 'check'
            });
          } else {
            sendNotification({
              key: 'address_failed',
              message: 'Somethig went wrong, please retry',
              type: 'danger',
              title: 'Failed!'
            });
          }
        });
        edittingAddress.value = false;
        activeAddress.value = undefined;
        await onComplete(data);
      } catch (error) {
        onError(error);
      }
    };

    Object(lib_index_es["onSSR"])(async () => {
      await loadUserBilling();
    });
    return {
      changeAddress,
      updateAddress,
      removeAddress,
      saveAddress,
      userBillingGetters: index_es["o" /* userBillingGetters */],
      addresses,
      edittingAddress,
      activeAddress,
      isNewAddress,
      loading
    };
  }

});
// CONCATENATED MODULE: ./pages/MyAccount/AdressBook.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyAccount_AdressBookvue_type_script_lang_js_ = (AdressBookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/MyAccount/AdressBook.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(293)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MyAccount_AdressBookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6983b80c",
  "710c051d"
  
)

/* harmony default export */ var AdressBook = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=AdressBook.js.map