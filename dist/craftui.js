(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.CraftUi = {})));
}(this, (function (exports) { 'use strict';

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
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

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck$1(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties$1(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass$1(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties$1(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty$1(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _objectSpread$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      }

      return target;
    }

    function _slicedToArray$1(arr, i) {
      return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
    }

    function _arrayWithHoles$1(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit$1(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _nonIterableRest$1() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    var noop = function noop() {};

    var _WINDOW = {};
    var _DOCUMENT = {};
    var _PERFORMANCE = {
      mark: noop,
      measure: noop
    };

    try {
      if (typeof window !== 'undefined') _WINDOW = window;
      if (typeof document !== 'undefined') _DOCUMENT = document;
      if (typeof performance !== 'undefined') _PERFORMANCE = performance;
    } catch (e) {}

    var _ref = _WINDOW.navigator || {},
        _ref$userAgent = _ref.userAgent,
        userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var PERFORMANCE = _PERFORMANCE;
    var IS_BROWSER = !!WINDOW.document;
    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
    var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
    var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
    var DEFAULT_FAMILY_PREFIX = 'fa';
    var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
    var DATA_FA_I2SVG = 'data-fa-i2svg';
    var initial = WINDOW.FontAwesomeConfig || {};

    function getAttrConfig(attr) {
      var element = DOCUMENT.querySelector('script[' + attr + ']');

      if (element) {
        return element.getAttribute(attr);
      }
    }

    function coerce(val) {
      // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
      // We'll assume that this is an indication that it should be toggled to true
      // For example <script data-search-pseudo-elements src="..."></script>
      if (val === '') return true;
      if (val === 'false') return false;
      if (val === 'true') return true;
      return val;
    }

    if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
      var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
      attrs.forEach(function (_ref) {
        var _ref2 = _slicedToArray$1(_ref, 2),
            attr = _ref2[0],
            key = _ref2[1];

        var val = coerce(getAttrConfig(attr));

        if (val !== undefined && val !== null) {
          initial[key] = val;
        }
      });
    }

    var _default = {
      familyPrefix: DEFAULT_FAMILY_PREFIX,
      replacementClass: DEFAULT_REPLACEMENT_CLASS,
      autoReplaceSvg: true,
      autoAddCss: true,
      autoA11y: true,
      searchPseudoElements: false,
      observeMutations: true,
      keepOriginalSource: true,
      measurePerformance: false,
      showMissingIcons: true
    };

    var _config = _objectSpread$1({}, _default, initial);

    if (!_config.autoReplaceSvg) _config.observeMutations = false;

    var config = _objectSpread$1({}, _config);

    WINDOW.FontAwesomeConfig = config;
    var w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
    var namespace = w[NAMESPACE_IDENTIFIER];
    var functions = [];

    var listener = function listener() {
      DOCUMENT.removeEventListener('DOMContentLoaded', listener);
      loaded = 1;
      functions.map(function (fn) {
        return fn();
      });
    };

    var loaded = false;

    if (IS_DOM) {
      loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
      if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
    }

    var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
    var meaninglessTransform = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: false,
      flipY: false
    };

    function insertCss(css) {
      if (!css || !IS_DOM) {
        return;
      }

      var style = DOCUMENT.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      var headChildren = DOCUMENT.head.childNodes;
      var beforeChild = null;

      for (var i = headChildren.length - 1; i > -1; i--) {
        var child = headChildren[i];
        var tagName = (child.tagName || '').toUpperCase();

        if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
          beforeChild = child;
        }
      }

      DOCUMENT.head.insertBefore(style, beforeChild);
      return css;
    }

    var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function nextUniqueId() {
      var size = 12;
      var id = '';

      while (size-- > 0) {
        id += idPool[Math.random() * 62 | 0];
      }

      return id;
    }

    function htmlEscape(str) {
      return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function joinAttributes(attributes) {
      return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
        return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
      }, '').trim();
    }

    function joinStyles(styles) {
      return Object.keys(styles || {}).reduce(function (acc, styleName) {
        return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
      }, '');
    }

    function transformIsMeaningful(transform) {
      return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
    }

    function transformForSvg(_ref) {
      var transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      return {
        outer: outer,
        inner: inner,
        path: path
      };
    }

    var ALL_SPACE = {
      x: 0,
      y: 0,
      width: '100%',
      height: '100%'
    };

    function makeIconMasking(_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread$1({}, ALL_SPACE, {
          fill: 'white'
        })
      };
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread$1({}, trans.inner),
        children: [{
          tag: 'path',
          attributes: _objectSpread$1({}, mainPath.attributes, trans.path, {
            fill: 'black'
          })
        }]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread$1({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(nextUniqueId());
      var clipId = "clip-".concat(nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread$1({}, ALL_SPACE, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: [maskPath]
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread$1({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    }

    function makeIconStandard(_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          transform = _ref.transform,
          styles = _ref.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      if (transformIsMeaningful(transform)) {
        var trans = transformForSvg({
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
        children.push({
          tag: 'g',
          attributes: _objectSpread$1({}, trans.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread$1({}, trans.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread$1({}, main.icon.attributes, trans.path)
            }]
          }]
        });
      } else {
        children.push(main.icon);
      }

      return {
        children: children,
        attributes: attributes
      };
    }

    function asIcon(_ref) {
      var children = _ref.children,
          main = _ref.main,
          mask = _ref.mask,
          attributes = _ref.attributes,
          styles = _ref.styles,
          transform = _ref.transform;

      if (transformIsMeaningful(transform) && main.found && !mask.found) {
        var width = main.width,
            height = main.height;
        var offset = {
          x: width / height / 2,
          y: 0.5
        };
        attributes['style'] = joinStyles(_objectSpread$1({}, styles, {
          'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
        }));
      }

      return [{
        tag: 'svg',
        attributes: attributes,
        children: children
      }];
    }

    function asSymbol(_ref) {
      var prefix = _ref.prefix,
          iconName = _ref.iconName,
          children = _ref.children,
          attributes = _ref.attributes,
          symbol = _ref.symbol;
      var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
      return [{
        tag: 'svg',
        attributes: {
          style: 'display: none;'
        },
        children: [{
          tag: 'symbol',
          attributes: _objectSpread$1({}, attributes, {
            id: id
          }),
          children: children
        }]
      }];
    }

    function makeInlineSvgAbstract(params) {
      var _params$icons = params.icons,
          main = _params$icons.main,
          mask = _params$icons.mask,
          prefix = params.prefix,
          iconName = params.iconName,
          transform = params.transform,
          symbol = params.symbol,
          title = params.title,
          extra = params.extra,
          _params$watchable = params.watchable,
          watchable = _params$watchable === void 0 ? false : _params$watchable;

      var _ref = mask.found ? mask : main,
          width = _ref.width,
          height = _ref.height;

      var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
      var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
        return extra.classes.indexOf(c) === -1;
      }).concat(extra.classes).join(' ');
      var content = {
        children: [],
        attributes: _objectSpread$1({}, extra.attributes, {
          'data-prefix': prefix,
          'data-icon': iconName,
          'class': attrClass,
          'role': 'img',
          'xmlns': 'http://www.w3.org/2000/svg',
          'viewBox': "0 0 ".concat(width, " ").concat(height)
        })
      };

      if (watchable) {
        content.attributes[DATA_FA_I2SVG] = '';
      }

      if (title) content.children.push({
        tag: 'title',
        attributes: {
          id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
        },
        children: [title]
      });

      var args = _objectSpread$1({}, content, {
        prefix: prefix,
        iconName: iconName,
        main: main,
        mask: mask,
        transform: transform,
        symbol: symbol,
        styles: extra.styles
      });

      var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
          children = _ref2.children,
          attributes = _ref2.attributes;

      args.children = children;
      args.attributes = attributes;

      if (symbol) {
        return asSymbol(args);
      } else {
        return asIcon(args);
      }
    }

    var noop$1 = function noop() {};

    var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
      mark: noop$1,
      measure: noop$1
    };
    /**
     * Internal helper to bind a function known to have 4 arguments
     * to a given context.
     */

    var bindInternal4 = function bindInternal4(func, thisContext) {
      return function (a, b, c, d) {
        return func.call(thisContext, a, b, c, d);
      };
    };
    /**
     * # Reduce
     *
     * A fast object `.reduce()` implementation.
     *
     * @param  {Object}   subject      The object to reduce over.
     * @param  {Function} fn           The reducer function.
     * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
     * @param  {Object}   thisContext  The context for the reducer.
     * @return {mixed}                 The final result.
     */


    var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
      var keys = Object.keys(subject),
          length = keys.length,
          iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
          i,
          key,
          result;

      if (initialValue === undefined) {
        i = 1;
        result = subject[keys[0]];
      } else {
        i = 0;
        result = initialValue;
      }

      for (; i < length; i++) {
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
      }

      return result;
    };

    function defineIcons(prefix, icons) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _params$skipHooks = params.skipHooks,
          skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
      var normalized = Object.keys(icons).reduce(function (acc, iconName) {
        var icon = icons[iconName];
        var expanded = !!icon.icon;

        if (expanded) {
          acc[icon.iconName] = icon.icon;
        } else {
          acc[iconName] = icon;
        }

        return acc;
      }, {});

      if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
        namespace.hooks.addPack(prefix, normalized);
      } else {
        namespace.styles[prefix] = _objectSpread$1({}, namespace.styles[prefix] || {}, normalized);
      }
      /**
       * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
       * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
       * for `fas` so we'll easy the upgrade process for our users by automatically defining
       * this as well.
       */


      if (prefix === 'fas') {
        defineIcons('fa', icons);
      }
    }

    var styles = namespace.styles,
        shims = namespace.shims;
    var _byUnicode = {};
    var _byLigature = {};
    var _byOldName = {};

    var build = function build() {
      var lookup = function lookup(reducer) {
        return reduce(styles, function (o, style, prefix) {
          o[prefix] = reduce(style, reducer, {});
          return o;
        }, {});
      };

      _byUnicode = lookup(function (acc, icon, iconName) {
        if (icon[3]) {
          acc[icon[3]] = iconName;
        }

        return acc;
      });
      _byLigature = lookup(function (acc, icon, iconName) {
        var ligatures = icon[2];
        acc[iconName] = iconName;
        ligatures.forEach(function (ligature) {
          acc[ligature] = iconName;
        });
        return acc;
      });
      var hasRegular = 'far' in styles;
      _byOldName = reduce(shims, function (acc, shim) {
        var oldName = shim[0];
        var prefix = shim[1];
        var iconName = shim[2];

        if (prefix === 'far' && !hasRegular) {
          prefix = 'fas';
        }

        acc[oldName] = {
          prefix: prefix,
          iconName: iconName
        };
        return acc;
      }, {});
    };

    build();

    var styles$1 = namespace.styles;

    function iconFromMapping(mapping, prefix, iconName) {
      if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
        return {
          prefix: prefix,
          iconName: iconName,
          icon: mapping[prefix][iconName]
        };
      }
    }

    function toHtml(abstractNodes) {
      var tag = abstractNodes.tag,
          _abstractNodes$attrib = abstractNodes.attributes,
          attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
          _abstractNodes$childr = abstractNodes.children,
          children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

      if (typeof abstractNodes === 'string') {
        return htmlEscape(abstractNodes);
      } else {
        return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
      }
    }

    var parseTransformString = function parseTransformString(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      };

      if (!transformString) {
        return transform;
      } else {
        return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
          var parts = n.toLowerCase().split('-');
          var first = parts[0];
          var rest = parts.slice(1).join('-');

          if (first && rest === 'h') {
            acc.flipX = true;
            return acc;
          }

          if (first && rest === 'v') {
            acc.flipY = true;
            return acc;
          }

          rest = parseFloat(rest);

          if (isNaN(rest)) {
            return acc;
          }

          switch (first) {
            case 'grow':
              acc.size = acc.size + rest;
              break;

            case 'shrink':
              acc.size = acc.size - rest;
              break;

            case 'left':
              acc.x = acc.x - rest;
              break;

            case 'right':
              acc.x = acc.x + rest;
              break;

            case 'up':
              acc.y = acc.y - rest;
              break;

            case 'down':
              acc.y = acc.y + rest;
              break;

            case 'rotate':
              acc.rotate = acc.rotate + rest;
              break;
          }

          return acc;
        }, transform);
      }
    };

    function MissingIcon(error) {
      this.name = 'MissingIcon';
      this.message = error || 'Icon unavailable';
      this.stack = new Error().stack;
    }

    MissingIcon.prototype = Object.create(Error.prototype);
    MissingIcon.prototype.constructor = MissingIcon;
    var FILL = {
      fill: 'currentColor'
    };
    var ANIMATION_BASE = {
      attributeType: 'XML',
      repeatCount: 'indefinite',
      dur: '2s'
    };
    var RING = {
      tag: 'path',
      attributes: _objectSpread$1({}, FILL, {
        d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
      })
    };

    var OPACITY_ANIMATE = _objectSpread$1({}, ANIMATION_BASE, {
      attributeName: 'opacity'
    });

    var DOT = {
      tag: 'circle',
      attributes: _objectSpread$1({}, FILL, {
        cx: '256',
        cy: '364',
        r: '28'
      }),
      children: [{
        tag: 'animate',
        attributes: _objectSpread$1({}, ANIMATION_BASE, {
          attributeName: 'r',
          values: '28;14;28;28;14;28;'
        })
      }, {
        tag: 'animate',
        attributes: _objectSpread$1({}, OPACITY_ANIMATE, {
          values: '1;0;1;1;0;1;'
        })
      }]
    };
    var QUESTION = {
      tag: 'path',
      attributes: _objectSpread$1({}, FILL, {
        opacity: '1',
        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
      }),
      children: [{
        tag: 'animate',
        attributes: _objectSpread$1({}, OPACITY_ANIMATE, {
          values: '1;0;0;0;0;1;'
        })
      }]
    };
    var EXCLAMATION = {
      tag: 'path',
      attributes: _objectSpread$1({}, FILL, {
        opacity: '0',
        d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
      }),
      children: [{
        tag: 'animate',
        attributes: _objectSpread$1({}, OPACITY_ANIMATE, {
          values: '0;0;1;1;0;0;'
        })
      }]
    };
    var styles$2 = namespace.styles;

    var styles$3 = namespace.styles;

    var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}";

    function css() {
      var dfp = DEFAULT_FAMILY_PREFIX;
      var drc = DEFAULT_REPLACEMENT_CLASS;
      var fp = config.familyPrefix;
      var rc = config.replacementClass;
      var s = baseStyles;

      if (fp !== dfp || rc !== drc) {
        var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
        var rPatt = new RegExp("\\.".concat(drc), 'g');
        s = s.replace(dPatt, ".".concat(fp, "-")).replace(rPatt, ".".concat(rc));
      }

      return s;
    }

    var Library =
    /*#__PURE__*/
    function () {
      function Library() {
        _classCallCheck$1(this, Library);

        this.definitions = {};
      }

      _createClass$1(Library, [{
        key: "add",
        value: function add() {
          var _this = this;

          for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
            definitions[_key] = arguments[_key];
          }

          var additions = definitions.reduce(this._pullDefinitions, {});
          Object.keys(additions).forEach(function (key) {
            _this.definitions[key] = _objectSpread$1({}, _this.definitions[key] || {}, additions[key]);
            defineIcons(key, additions[key]);
            build();
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.definitions = {};
        }
      }, {
        key: "_pullDefinitions",
        value: function _pullDefinitions(additions, definition) {
          var normalized = definition.prefix && definition.iconName && definition.icon ? {
            0: definition
          } : definition;
          Object.keys(normalized).map(function (key) {
            var _normalized$key = normalized[key],
                prefix = _normalized$key.prefix,
                iconName = _normalized$key.iconName,
                icon = _normalized$key.icon;
            if (!additions[prefix]) additions[prefix] = {};
            additions[prefix][iconName] = icon;
          });
          return additions;
        }
      }]);

      return Library;
    }();

    function prepIcon(icon) {
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);
      return {
        found: true,
        width: width,
        height: height,
        icon: {
          tag: 'path',
          attributes: {
            fill: 'currentColor',
            d: vectorData[0]
          }
        }
      };
    }

    function ensureCss() {
      if (config.autoAddCss && !_cssInserted) {
        insertCss(css());
        _cssInserted = true;
      }
    }

    function apiObject(val, abstractCreator) {
      Object.defineProperty(val, 'abstract', {
        get: abstractCreator
      });
      Object.defineProperty(val, 'html', {
        get: function get() {
          return val.abstract.map(function (a) {
            return toHtml(a);
          });
        }
      });
      Object.defineProperty(val, 'node', {
        get: function get() {
          if (!IS_DOM) return;
          var container = DOCUMENT.createElement('div');
          container.innerHTML = val.html;
          return container.children;
        }
      });
      return val;
    }

    function findIconDefinition(iconLookup) {
      var _iconLookup$prefix = iconLookup.prefix,
          prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
          iconName = iconLookup.iconName;
      if (!iconName) return;
      return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
    }

    function resolveIcons(next) {
      return function (maybeIconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
        var mask = params.mask;

        if (mask) {
          mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
        }

        return next(iconDefinition, _objectSpread$1({}, params, {
          mask: mask
        }));
      };
    }

    var library = new Library();

    var _cssInserted = false;
    var parse = {
      transform: function transform(transformString) {
        return parseTransformString(transformString);
      }
    };
    var icon = resolveIcons(function (iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform = params.transform,
          transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
          _params$symbol = params.symbol,
          symbol = _params$symbol === void 0 ? false : _params$symbol,
          _params$mask = params.mask,
          mask = _params$mask === void 0 ? null : _params$mask,
          _params$title = params.title,
          title = _params$title === void 0 ? null : _params$title,
          _params$classes = params.classes,
          classes = _params$classes === void 0 ? [] : _params$classes,
          _params$attributes = params.attributes,
          attributes = _params$attributes === void 0 ? {} : _params$attributes,
          _params$styles = params.styles,
          styles = _params$styles === void 0 ? {} : _params$styles;
      if (!iconDefinition) return;
      var prefix = iconDefinition.prefix,
          iconName = iconDefinition.iconName,
          icon = iconDefinition.icon;
      return apiObject(_objectSpread$1({
        type: 'icon'
      }, iconDefinition), function () {
        ensureCss();

        if (config.autoA11y) {
          if (title) {
            attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
          } else {
            attributes['aria-hidden'] = 'true';
            attributes['focusable'] = 'false';
          }
        }

        return makeInlineSvgAbstract({
          icons: {
            main: prepIcon(icon),
            mask: mask ? prepIcon(mask.icon) : {
              found: false,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix: prefix,
          iconName: iconName,
          transform: _objectSpread$1({}, meaninglessTransform, transform),
          symbol: symbol,
          title: title,
          extra: {
            attributes: attributes,
            styles: styles,
            classes: classes
          }
        });
      });
    });

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
      return module = {
        exports: {}
      }, fn(module, module.exports), module.exports;
    }

    var humps = createCommonjsModule(function (module) {
      (function (global) {
        var _processKeys = function _processKeys(convert, obj, options) {
          if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
            return obj;
          }

          var output,
              i = 0,
              l = 0;

          if (_isArray(obj)) {
            output = [];

            for (l = obj.length; i < l; i++) {
              output.push(_processKeys(convert, obj[i], options));
            }
          } else {
            output = {};

            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                output[convert(key, options)] = _processKeys(convert, obj[key], options);
              }
            }
          }

          return output;
        }; // String conversion methods


        var separateWords = function separateWords(string, options) {
          options = options || {};
          var separator = options.separator || '_';
          var split = options.split || /(?=[A-Z])/;
          return string.split(split).join(separator);
        };

        var camelize = function camelize(string) {
          if (_isNumerical(string)) {
            return string;
          }

          string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
            return chr ? chr.toUpperCase() : '';
          }); // Ensure 1st char is always lowercase

          return string.substr(0, 1).toLowerCase() + string.substr(1);
        };

        var pascalize = function pascalize(string) {
          var camelized = camelize(string); // Ensure 1st char is always uppercase

          return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
        };

        var decamelize = function decamelize(string, options) {
          return separateWords(string, options).toLowerCase();
        }; // Utilities
        // Taken from Underscore.js


        var toString = Object.prototype.toString;

        var _isFunction = function _isFunction(obj) {
          return typeof obj === 'function';
        };

        var _isObject = function _isObject(obj) {
          return obj === Object(obj);
        };

        var _isArray = function _isArray(obj) {
          return toString.call(obj) == '[object Array]';
        };

        var _isDate = function _isDate(obj) {
          return toString.call(obj) == '[object Date]';
        };

        var _isRegExp = function _isRegExp(obj) {
          return toString.call(obj) == '[object RegExp]';
        };

        var _isBoolean = function _isBoolean(obj) {
          return toString.call(obj) == '[object Boolean]';
        }; // Performant way to determine if obj coerces to a number


        var _isNumerical = function _isNumerical(obj) {
          obj = obj - 0;
          return obj === obj;
        }; // Sets up function which handles processing keys
        // allowing the convert function to be modified by a callback


        var _processor = function _processor(convert, options) {
          var callback = options && 'process' in options ? options.process : options;

          if (typeof callback !== 'function') {
            return convert;
          }

          return function (string, options) {
            return callback(string, convert, options);
          };
        };

        var humps = {
          camelize: camelize,
          decamelize: decamelize,
          pascalize: pascalize,
          depascalize: decamelize,
          camelizeKeys: function camelizeKeys(object, options) {
            return _processKeys(_processor(camelize, options), object);
          },
          decamelizeKeys: function decamelizeKeys(object, options) {
            return _processKeys(_processor(decamelize, options), object, options);
          },
          pascalizeKeys: function pascalizeKeys(object, options) {
            return _processKeys(_processor(pascalize, options), object);
          },
          depascalizeKeys: function depascalizeKeys() {
            return this.decamelizeKeys.apply(this, arguments);
          }
        };

        if (module.exports) {
          module.exports = humps;
        } else {
          global.humps = humps;
        }
      })(commonjsGlobal);
    });

    var _typeof$2 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
      return _typeof(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
    };

    var defineProperty = function defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    var _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
      var target = {};

      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }

      return target;
    };

    function styleToObject(style) {
      return style.split(';').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return s;
      }).reduce(function (acc, pair) {
        var i = pair.indexOf(':');
        var prop = humps.camelize(pair.slice(0, i));
        var value = pair.slice(i + 1).trim();
        acc[prop] = value;
        return acc;
      }, {});
    }

    function classToObject(cls) {
      return cls.split(/\s+/).reduce(function (acc, c) {
        acc[c] = true;
        return acc;
      }, {});
    }

    function combineClassObjects() {
      for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
      }

      return objs.reduce(function (acc, obj) {
        if (Array.isArray(obj)) {
          acc = acc.concat(obj);
        } else {
          acc.push(obj);
        }

        return acc;
      }, []);
    }

    function convert(h, element) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var children = (element.children || []).map(convert.bind(null, h));
      var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
        var val = element.attributes[key];

        switch (key) {
          case 'class':
            acc['class'] = classToObject(val);
            break;

          case 'style':
            acc['style'] = styleToObject(val);
            break;

          default:
            acc.attrs[key] = val;
        }

        return acc;
      }, {
        'class': {},
        style: {},
        attrs: {}
      });
      var _data$class = data.class,
          dClass = _data$class === undefined ? {} : _data$class,
          _data$style = data.style,
          dStyle = _data$style === undefined ? {} : _data$style,
          _data$attrs = data.attrs,
          dAttrs = _data$attrs === undefined ? {} : _data$attrs,
          remainingData = objectWithoutProperties(data, ['class', 'style', 'attrs']);

      if (typeof element === 'string') {
        return element;
      } else {
        return h(element.tag, _extends$1({
          class: combineClassObjects(mixins.class, dClass),
          style: _extends$1({}, mixins.style, dStyle),
          attrs: _extends$1({}, mixins.attrs, dAttrs)
        }, remainingData, {
          props: props
        }), children);
      }
    }

    var PRODUCTION$1 = false;

    try {
      PRODUCTION$1 = "development" === 'production';
    } catch (e) {}

    function log() {
      if (!PRODUCTION$1 && console && typeof console.error === 'function') {
        var _console;

        (_console = console).error.apply(_console, arguments);
      }
    }

    function objectWithKey(key, value) {
      return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
    }

    function classList(props) {
      var _classes;

      var classes = (_classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
      }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);
      return Object.keys(classes).map(function (key) {
        return classes[key] ? key : null;
      }).filter(function (key) {
        return key;
      });
    }

    function normalizeIconArgs(icon$$1) {
      if (icon$$1 === null) {
        return null;
      }

      if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof$2(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
        return icon$$1;
      }

      if (Array.isArray(icon$$1) && icon$$1.length === 2) {
        return {
          prefix: icon$$1[0],
          iconName: icon$$1[1]
        };
      }

      if (typeof icon$$1 === 'string') {
        return {
          prefix: 'fas',
          iconName: icon$$1
        };
      }
    }

    var FontAwesomeIcon = {
      name: 'FontAwesomeIcon',
      functional: true,
      props: {
        border: {
          type: Boolean,
          default: false
        },
        fixedWidth: {
          type: Boolean,
          default: false
        },
        flip: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
          }
        },
        icon: {
          type: [Object, Array, String],
          required: true
        },
        mask: {
          type: [Object, Array, String],
          default: null
        },
        listItem: {
          type: Boolean,
          default: false
        },
        pull: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['right', 'left'].indexOf(value) > -1;
          }
        },
        pulse: {
          type: Boolean,
          default: false
        },
        rotation: {
          type: Number,
          default: null,
          validator: function validator(value) {
            return [90, 180, 270].indexOf(value) > -1;
          }
        },
        size: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
          }
        },
        spin: {
          type: Boolean,
          default: false
        },
        transform: {
          type: [String, Object],
          default: null
        },
        symbol: {
          type: [Boolean, String],
          default: false
        },
        title: {
          type: String,
          default: null
        }
      },
      render: function render(createElement, context) {
        var props = context.props;
        var iconArgs = props.icon,
            maskArgs = props.mask,
            symbol = props.symbol,
            title = props.title;
        var icon$$1 = normalizeIconArgs(iconArgs);
        var classes = objectWithKey('classes', classList(props));
        var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
        var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
        var renderedIcon = icon(icon$$1, _extends$1({}, classes, transform, mask, {
          symbol: symbol,
          title: title
        }));

        if (!renderedIcon) {
          return log('Could not find one or more icon(s)', icon$$1, mask);
        }

        var abstract = renderedIcon.abstract;
        var convertCurry = convert.bind(null, createElement);
        return convertCurry(abstract[0], {}, context.data);
      }
    };

    var faBars={prefix:'fas',iconName:'bars',icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]};var faBook={prefix:'fas',iconName:'book',icon:[448,512,[],"f02d","M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"]};var faBug={prefix:'fas',iconName:'bug',icon:[512,512,[],"f188","M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"]};var faCheck={prefix:'fas',iconName:'check',icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]};var faCoffee={prefix:'fas',iconName:'coffee',icon:[640,512,[],"f0f4","M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]};var faCopy={prefix:'fas',iconName:'copy',icon:[448,512,[],"f0c5","M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"]};var faDollarSign={prefix:'fas',iconName:'dollar-sign',icon:[288,512,[],"f155","M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"]};var faExclamationTriangle={prefix:'fas',iconName:'exclamation-triangle',icon:[576,512,[],"f071","M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]};var faHandshake={prefix:'fas',iconName:'handshake',icon:[640,512,[],"f2b5","M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"]};var faImage={prefix:'fas',iconName:'image',icon:[512,512,[],"f03e","M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"]};var faInfoCircle={prefix:'fas',iconName:'info-circle',icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]};var faKey={prefix:'fas',iconName:'key',icon:[512,512,[],"f084","M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"]};var faLink={prefix:'fas',iconName:'link',icon:[512,512,[],"f0c1","M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"]};var faPencilAlt={prefix:'fas',iconName:'pencil-alt',icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]};var faPlug={prefix:'fas',iconName:'plug',icon:[384,512,[],"f1e6","M256 144V32c0-17.673 14.327-32 32-32s32 14.327 32 32v112h-64zm112 16H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h16v32c0 77.406 54.969 141.971 128 156.796V512h64v-99.204c73.031-14.825 128-79.39 128-156.796v-32h16c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm-240-16V32c0-17.673-14.327-32-32-32S64 14.327 64 32v112h64z"]};var faPlus={prefix:'fas',iconName:'plus',icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]};var faSearch={prefix:'fas',iconName:'search',icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]};var faShoppingCart={prefix:'fas',iconName:'shopping-cart',icon:[576,512,[],"f07a","M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"]};var faTh={prefix:'fas',iconName:'th',icon:[512,512,[],"f00a","M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"]};var faTimes={prefix:'fas',iconName:'times',icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};var faUser={prefix:'fas',iconName:'user',icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]};

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

    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
