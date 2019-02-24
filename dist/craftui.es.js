import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faTimes, faTh, faBars, faPlus, faKey, faPlug, faImage, faUser, faPencilAlt, faExclamationTriangle, faBug, faShoppingCart, faDollarSign, faHandshake, faLink, faCheck, faBook, faSearch, faCopy, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'Btn',
  props: {
    type: {
      type: String,
      default: null
    },
    large: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"c-btn",class:[( _obj = {}, _obj[_vm.type] = true, _obj.large = _vm.large, _obj.block = _vm.block, _obj.outline = _vm.outline, _obj.loading = _vm.loading, _obj )],attrs:{"disabled":_vm.disabled},on:{"click":function($event){return _vm.$emit('click')}}},[(_vm.icon)?_c('icon',{attrs:{"icon":_vm.icon}}):_vm._e(),_vm._v(" "),(_vm.loading)?[_c('loading-indicator')]:_vm._e(),_vm._v(" "),_c('div',{staticClass:"c-btn-content"},[_vm._t("default")],2)],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Btn = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
var script$1 = {
  props: ['value'],
  extends: Btn
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{class:_vm.cssClass,attrs:{"type":"submit","disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"click":function($event){return _vm.$emit('click')}}})};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var BtnInput = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
var script$2 = {
  props: ['id', 'label']
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field",attrs:{"id":'field-' + _vm.id}},[(_vm.label)?_c('label',{attrs:{"for":_vm.id}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_vm._t("default")],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Field = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
//
//
//
var script$3 = {
  props: ['icon', 'cssClass']
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('font-awesome-icon',{class:_vm.cssClass,attrs:{"icon":_vm.icon}})};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Icon = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

/* script */
/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$4 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading-indicator"},[_c('div',{staticClass:"animation"})])}];

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var LoadingIndicator = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    {},
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  props: ['errors', 'id', 'label', 'value', 'instructions']
};

/* script */
const __vue_script__$4 = script$4;
/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"field"},[_c('label',[_c('input',{attrs:{"id":_vm.id,"type":"checkbox"},domProps:{"value":_vm.value,"checked":_vm.value},on:{"change":function($event){return _vm.$emit('input', $event.target.checked)}}}),_vm._v("\n            "+_vm._s(_vm.label)+"\n        ")]),_vm._v(" "),(_vm.instructions)?_c('p',{staticClass:"instructions",domProps:{"innerHTML":_vm._s(_vm.instructions)}}):_vm._e(),_vm._v(" "),_vm._l((_vm.errors),function(error,index){return _c('div',{key:index,staticClass:"invalid-feedback"},[_vm._v(_vm._s(error))])})],2)])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = "data-v-ac5bdb82";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var CheckboxField = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$4,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  props: ['options', 'label', 'instructions', 'value', 'errors'],
  data: function data() {
    return {
      localValue: []
    };
  },
  mounted: function mounted() {
    this.localValue = JSON.parse(JSON.stringify(this.value));
  }
};

/* script */
const __vue_script__$5 = script$5;
/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('fieldset',{staticClass:"checkboxes"},[_c('legend',[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.instructions)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v(_vm._s(_vm.instructions))])]):_vm._e(),_vm._v(" "),_c('ul',_vm._l((this.options),function(option,index){return _c('li',{key:index},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.localValue),expression:"localValue"}],attrs:{"type":"checkbox"},domProps:{"value":option.value,"checked":Array.isArray(_vm.localValue)?_vm._i(_vm.localValue,option.value)>-1:(_vm.localValue)},on:{"change":[function($event){var $$a=_vm.localValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=option.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.localValue=$$a.concat([$$v]));}else{$$i>-1&&(_vm.localValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.localValue=$$c;}},function($event){return _vm.$emit('input', _vm.localValue)}]}}),_vm._v("\n                    "+_vm._s(option.label)+"\n                ")])])}),0),_vm._v(" "),_vm._l((_vm.errors),function(error,index){return _c('div',{key:index,staticClass:"invalid-feedback"},[_vm._v(_vm._s(error))])})],2)])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = "data-v-2744c7e4";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var CheckboxSet = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$5,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
var script$6 = {
  props: ['id', 'checked', 'disabled']
};

/* script */
const __vue_script__$6 = script$6;
/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"lightswitch",class:{disabled: _vm.disabled},attrs:{"for":_vm.id}},[_c('input',{attrs:{"id":_vm.id,"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":_vm.checked},on:{"input":function($event){return _vm.$emit('update:checked', $event.target.checked)},"change":function($event){return _vm.$emit('change', $event)}}}),_vm._v(" "),_c('div',{staticClass:"slider round"})])])};
var __vue_staticRenderFns__$7 = [];

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = "data-v-2b9d01d8";
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var LightswitchInput = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$6,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

//
var script$7 = {
  props: ['label', 'id', 'checked', 'instructions', 'disabled'],
  components: {
    Field: Field,
    LightswitchInput: LightswitchInput
  }
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('field',{attrs:{"id":_vm.id,"label":_vm.label}},[(_vm.instructions)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v(_vm._s(_vm.instructions))])]):_vm._e(),_vm._v(" "),_c('lightswitch-input',{attrs:{"id":_vm.id,"checked":_vm.checked,"disabled":_vm.disabled},on:{"change":function($event){return _vm.$emit('change', $event)},"update:checked":function($event){return _vm.$emit('update:checked', $event)}}})],1)};
var __vue_staticRenderFns__$8 = [];

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var LightswitchField = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$7,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  props: ['id', 'name', 'placeholder', 'value', 'autofocus', 'size'],
  created: function created() {
    this.$on('focus', function () {
      this.$refs.input.focus();
    });
  }
};

/* script */
const __vue_script__$8 = script$8;
/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"input",class:{'w-full': !_vm.size },attrs:{"autofocus":_vm.autofocus,"id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder,"autocomplete":"off","type":"password"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}})};
var __vue_staticRenderFns__$9 = [];

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = "data-v-705a656d";
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PasswordInput = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$8,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

//
var script$9 = {
  props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'size', 'instructions'],
  components: {
    Field: Field,
    PasswordInput: PasswordInput
  },
  created: function created() {
    this.$on('focus', function () {
      this.$refs.input.$emit('focus');
    });
  }
};

/* script */
const __vue_script__$9 = script$9;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('field',{attrs:{"id":_vm.id,"label":_vm.label}},[(_vm.instructions)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v(_vm._s(_vm.instructions))])]):_vm._e(),_vm._v(" "),_c('password-input',{ref:"input",class:{'is-invalid': _vm.errors },attrs:{"id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder,"value":_vm.value,"size":_vm.size,"autofocus":_vm.autofocus},on:{"input":function($event){return _vm.$emit('input', $event)}}}),_vm._v(" "),_vm._l((_vm.errors),function(error,key){return _c('div',{key:key,staticClass:"invalid-feedback"},[_vm._v("\n        "+_vm._s(error)+"\n    ")])})],2)};
var __vue_staticRenderFns__$a = [];

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PasswordField = normalizeComponent_1(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$9,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
var script$a = {
  props: ['fullwidth', 'options', 'value']
};

/* script */
const __vue_script__$a = script$a;
/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"select"},[_c('select',{class:{ 'w-full': _vm.fullwidth },domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target[$event.target.selectedIndex].value)}}},_vm._l((_vm.options),function(option,key){return _c('option',{key:key,domProps:{"value":option.value}},[_vm._v(_vm._s(option.label))])}),0)])])};
var __vue_staticRenderFns__$b = [];

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = "data-v-211a2741";
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SelectInput = normalizeComponent_1(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$a,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

//
var script$b = {
  props: ['label', 'instructions', 'fullwidth', 'id', 'options', 'value', 'errors'],
  components: {
    Field: Field,
    SelectInput: SelectInput
  }
};

/* script */
const __vue_script__$b = script$b;

/* template */
var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('field',{attrs:{"id":_vm.id + '-label',"label":_vm.label}},[(_vm.instructions)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v(_vm._s(_vm.instructions))])]):_vm._e(),_vm._v(" "),_c('select-input',{attrs:{"fullwidth":_vm.fullwidth,"options":_vm.options,"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event)}}}),_vm._v(" "),_vm._l((_vm.errors),function(error,key){return _c('div',{key:key,staticClass:"invalid-feedback"},[_vm._v("\n        "+_vm._s(error)+"\n    ")])})],2)};
var __vue_staticRenderFns__$c = [];

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SelectField = normalizeComponent_1(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$b,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$c = {
  props: ['id', 'placeholder', 'value', 'cols', 'disabled', 'autocapitalize', 'spellcheck', 'size']
};

/* script */
const __vue_script__$c = script$c;
/* template */
var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{class:{'w-full': !_vm.size },attrs:{"cols":_vm.cols,"disabled":_vm.disabled,"id":_vm.id,"placeholder":_vm.placeholder,"autocapitalize":_vm.autocapitalize,"spellcheck":_vm.spellcheck,"autocomplete":"off","type":"text"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}})};
var __vue_staticRenderFns__$d = [];

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = "data-v-26b56155";
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextareaInput = normalizeComponent_1(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$c,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

//
var script$d = {
  props: ['label', 'instructions', 'id', 'placeholder', 'value', 'cols', 'rows', 'errors', 'disabled', 'autocapitalize', 'spellcheck', 'size', 'max'],
  components: {
    Field: Field,
    TextareaInput: TextareaInput
  },
  computed: {
    remainingChars: function remainingChars() {
      if (this.max) {
        return this.max - this.value.length;
      }
    }
  }
};

/* script */
const __vue_script__$d = script$d;
/* template */
var __vue_render__$e = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('field',{attrs:{"id":_vm.id + '-label',"label":_vm.label}},[(_vm.instructions)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v(_vm._s(_vm.instructions))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"wrapper"},[_c('textarea-input',{class:{
                    'is-invalid': _vm.errors,
                    'text-red-dark': _vm.max && _vm.max < this.value.length
                },attrs:{"autocapitalize":_vm.autocapitalize,"cols":_vm.cols,"disabled":_vm.disabled,"id":_vm.id,"placeholder":_vm.placeholder,"rows":_vm.rows ? _vm.rows : 4,"spellcheck":_vm.spellcheck,"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event)}}}),_vm._v(" "),(_vm.max)?_c('p',{staticClass:"max",class:{
                'text-grey': _vm.remainingChars >= 20,
                'text-orange': _vm.remainingChars < 20 && _vm.remainingChars >= 0,
                'text-red': _vm.remainingChars < 0
            }},[_vm._v(_vm._s(_vm.remainingChars)+" character"+_vm._s(_vm.remainingChars > 1 || _vm.remainingChars < 1 ? 's' : '')+" left.")]):_vm._e()],1),_vm._v(" "),_vm._l((_vm.errors),function(error,key){return _c('div',{key:key,staticClass:"invalid-feedback"},[_vm._v(_vm._s(error))])})],2)};
var __vue_staticRenderFns__$e = [];

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = "data-v-76633c9c";
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextareaField = normalizeComponent_1(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$d,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Inputmask from 'inputmask'
var script$e = {
  props: ['id', 'name', 'placeholder', 'value', 'autofocus', 'disabled', 'mask', 'autocapitalize', 'spellcheck', 'readonly', 'size'],
  created: function created() {
    this.$on('focus', function () {
      this.$refs.input.focus();
    });
  },
  directives: {
    mask: {
      bind: function bind(el, binding) {
        if (binding.value) ;
      }
    }
  }
};

/* script */
const __vue_script__$e = script$e;
/* template */
var __vue_render__$f = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{directives:[{name:"mask",rawName:"v-mask",value:(_vm.mask),expression:"mask"}],ref:"input",class:{'w-full': !_vm.size },attrs:{"autofocus":_vm.autofocus,"disabled":_vm.disabled,"id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder,"autocomplete":"off","autocapitalize":_vm.autocapitalize,"spellcheck":_vm.spellcheck,"readonly":_vm.readonly,"size":_vm.size,"type":"text"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}})};
var __vue_staticRenderFns__$f = [];

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = "data-v-dc457ad4";
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextInput = normalizeComponent_1(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$e,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    undefined,
    undefined
  );

//
var script$f = {
  props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'disabled', 'instructions', 'mask', 'autocapitalize', 'spellcheck', 'readonly', 'size', 'max'],
  components: {
    Field: Field,
    TextInput: TextInput
  },
  computed: {
    remainingChars: function remainingChars() {
      if (this.max) {
        return this.max - this.value.length;
      }
    }
  },
  created: function created() {
    this.$on('focus', function () {
      this.$refs.input.$emit('focus');
    });
  }
};

/* script */
const __vue_script__$f = script$f;
/* template */
var __vue_render__$g = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('field',{attrs:{"id":_vm.id,"label":_vm.label}},[(_vm.instructions)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v(_vm._s(_vm.instructions))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"wrapper"},[_c('text-input',{ref:"input",class:{
                    'is-invalid': _vm.errors,
                    'text-red-dark': _vm.max && _vm.max < this.value.length
                },attrs:{"autofocus":_vm.autofocus,"disabled":_vm.disabled,"id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder,"value":_vm.value,"mask":_vm.mask,"autocapitalize":_vm.autocapitalize,"spellcheck":_vm.spellcheck,"readonly":_vm.readonly},on:{"input":function($event){return _vm.$emit('input', $event)}}}),_vm._v(" "),(_vm.max)?_c('p',{staticClass:"max",class:{
                'text-grey': _vm.remainingChars >= 20,
                'text-orange': _vm.remainingChars < 20 && _vm.remainingChars >= 0,
                'text-red': _vm.remainingChars < 0
            }},[_vm._v(_vm._s(_vm.remainingChars)+" character"+_vm._s(_vm.remainingChars > 1 || _vm.remainingChars < 1 ? 's' : '')+" left.")]):_vm._e()],1),_vm._v(" "),_vm._l((_vm.errors),function(error,key){return _c('div',{key:key,staticClass:"invalid-feedback"},[_vm._v("\n        "+_vm._s(error)+"\n    ")])})],2)};
var __vue_staticRenderFns__$g = [];

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = "data-v-339cab58";
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextField = normalizeComponent_1(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$f,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$g = {
  props: ['id', 'placeholder', 'value', 'autofocus', 'disabled', 'size'],
  created: function created() {
    this.$on('focus', function () {
      this.$refs.input.focus();
    });
  }
};

/* script */
const __vue_script__$g = script$g;
/* template */
var __vue_render__$h = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"input",class:{'w-full': !_vm.size },attrs:{"autofocus":_vm.autofocus,"disabled":_vm.disabled,"id":_vm.id,"placeholder":_vm.placeholder,"autocomplete":"off","type":"url"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}})};
var __vue_staticRenderFns__$h = [];

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = "data-v-f7dac5a4";
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var UrlInput = normalizeComponent_1(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$g,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    undefined,
    undefined
  );

//
var script$h = {
  props: ['label', 'id', 'placeholder', 'value', 'autofocus', 'errors', 'disabled', 'instructions', 'size'],
  components: {
    Field: Field,
    UrlInput: UrlInput
  },
  created: function created() {
    this.$on('focus', function () {
      this.$refs.input.$emit('focus');
    });
  }
};

/* script */
const __vue_script__$h = script$h;

/* template */
var __vue_render__$i = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('field',{attrs:{"id":_vm.id,"label":_vm.label}},[(_vm.instructions)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v(_vm._s(_vm.instructions))])]):_vm._e(),_vm._v(" "),_c('url-input',{ref:"input",class:{'is-invalid': _vm.errors },attrs:{"autofocus":_vm.autofocus,"disabled":_vm.disabled,"id":_vm.id,"placeholder":_vm.placeholder,"value":_vm.value,"size":_vm.size},on:{"input":function($event){return _vm.$emit('input', $event)}}}),_vm._v(" "),_vm._l((_vm.errors),function(error,key){return _c('div',{key:key,staticClass:"invalid-feedback"},[_vm._v("\n        "+_vm._s(error)+"\n    ")])})],2)};
var __vue_staticRenderFns__$i = [];

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var UrlField = normalizeComponent_1(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$h,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$i = {
  props: ['id', 'name', 'placeholder', 'value', 'autofocus', 'disabled', 'readonly', 'min', 'max', 'step', 'pattern'],
  created: function created() {
    this.$on('focus', function () {
      this.$refs.input.focus();
    });
  }
};

/* script */
const __vue_script__$i = script$i;

/* template */
var __vue_render__$j = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"input",attrs:{"autofocus":_vm.autofocus,"disabled":_vm.disabled,"id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder,"autocomplete":"off","readonly":_vm.readonly,"min":_vm.min,"max":_vm.max,"step":_vm.step,"pattern":_vm.pattern,"type":"number"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)},"change":function($event){return _vm.$emit('change', $event)},"keypress":function($event){return _vm.$emit('keypress', $event)},"keydown":function($event){return _vm.$emit('keydown', $event)},"keyup":function($event){return _vm.$emit('keyup', $event)}}})};
var __vue_staticRenderFns__$j = [];

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var NumberInput = normalizeComponent_1(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$i,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    undefined,
    undefined
  );

var CraftComponents = {
  Btn: Btn,
  BtnInput: BtnInput,
  Field: Field,
  Icon: Icon,
  LoadingIndicator: LoadingIndicator,
  CheckboxField: CheckboxField,
  CheckboxSet: CheckboxSet,
  LightswitchField: LightswitchField,
  PasswordField: PasswordField,
  SelectField: SelectField,
  TextareaField: TextareaField,
  TextField: TextField,
  UrlField: UrlField,
  LightswitchInput: LightswitchInput,
  PasswordInput: PasswordInput,
  SelectInput: SelectInput,
  TextareaInput: TextareaInput,
  TextInput: TextInput,
  NumberInput: NumberInput,
  UrlInput: UrlInput
};

var index = {
  install: function install(Vue) {
    // Craft Components
    Object.keys(CraftComponents).forEach(function (name) {
      Vue.component(name, CraftComponents[name]);
    });
    config.autoAddCss = false;
    library.add([faCoffee, faTimes, faTh, faBars, faPlus, faKey, faPlug, faImage, faUser, faPencilAlt, faExclamationTriangle, faBug, faShoppingCart, faDollarSign, faHandshake, faLink, faCheck, faBook, faSearch, faCopy, faInfoCircle]); // Font Awesome

    Vue.component('font-awesome-icon', FontAwesomeIcon);
  }
};

export default index;
