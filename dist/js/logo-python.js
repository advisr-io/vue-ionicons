(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueIonicons = factory());
}(this, (function () { 'use strict';

  var A_ROTATE = 'rotate';
  var A_BEAT = 'beat';
  var A_SHAKE = 'shake';
  var IoniconsMixin = {
    computed: {
      ionClass: function ionClass() {
        var addClass = '';

        if (this.animate === A_ROTATE) {
          addClass = 'ion-rotate ';
        } else if (this.animate === A_BEAT) {
          addClass = 'ion-beat ';
        } else if (this.animate === A_SHAKE) {
          addClass = 'ion-shake ';
        }

        return "".concat(this.rootClass, " ").concat(addClass);
      }
    },
    props: {
      title: {
        type: String,
        "default": ''
      },
      rootClass: {
        type: String,
        "default": ''
      },
      w: {
        type: String,
        "default": '1em'
      },
      h: {
        type: String,
        "default": '1em'
      },
      animate: {
        type: String,
        "default": ''
      }
    }
  };

  //
  var script = {
    name: "logo-python-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : null;
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-python-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M193.46 249.056a65.316 65.316 0 0 1 11.586-1.041l-3.122-.015h103.823c4.503 0 8.806-.617 12.908-1.754 19.37-5.363 33.345-22.537 33.345-43.663v-87.224c0-24.832-21.15-43.484-46.289-47.606-15.931-2.624-39.258-3.827-55.089-3.749-15.829.086-30.981 1.404-44.277 3.749C167.143 74.576 160 88.928 160 115.359V144h96v16H128.82c-35.628 0-64.538 42.571-64.813 95.242-.002.253-.007.505-.007.758 0 9.523.94 18.72 2.685 27.404C74.648 323.07 99.451 352 128.82 352H144v-45.935c0-26.827 20.146-51.733 49.46-57.009zm10.196-122.054c-9.592 0-17.384-7.785-17.384-17.403 0-9.664 7.774-17.52 17.384-17.52 9.574 0 17.399 7.855 17.399 17.52.001 9.618-7.809 17.403-17.399 17.403z"}}),_c('path',{attrs:{"d":"M443.951 222.543C434.78 186.021 411.033 160 383.18 160H368v40.672c0 33.915-22.286 58.474-49.489 62.681a53.943 53.943 0 0 1-8.301.646H206.351a51.41 51.41 0 0 0-13.049 1.672C174.18 270.689 160 286.6 160 307.236v87.227c0 24.832 24.977 39.426 49.481 46.551 29.327 8.531 61.267 10.068 96.366 0C329.15 434.354 352 420.893 352 394.463V368h-96v-16h127.18c25.24 0 47.107-21.365 57.814-52.549C445.474 286.404 448 271.641 448 256c0-11.768-1.433-23.038-4.049-33.457zM307.867 382.82c9.59 0 17.381 7.785 17.381 17.4 0 9.65-7.791 17.521-17.381 17.521-9.577 0-17.399-7.871-17.399-17.521 0-9.63 7.806-17.4 17.399-17.4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-python-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M193.46 249.056a65.316 65.316 0 0 1 11.586-1.041l-3.122-.015h103.823c4.503 0 8.806-.617 12.908-1.754 19.37-5.363 33.345-22.537 33.345-43.663v-87.224c0-24.832-21.15-43.484-46.289-47.606-15.931-2.624-39.258-3.827-55.089-3.749-15.829.086-30.981 1.404-44.277 3.749C167.143 74.576 160 88.928 160 115.359V144h96v16H128.82c-35.628 0-64.538 42.571-64.813 95.242-.002.253-.007.505-.007.758 0 9.523.94 18.72 2.685 27.404C74.648 323.07 99.451 352 128.82 352H144v-45.935c0-26.827 20.146-51.733 49.46-57.009zm10.196-122.054c-9.592 0-17.384-7.785-17.384-17.403 0-9.664 7.774-17.52 17.384-17.52 9.574 0 17.399 7.855 17.399 17.52.001 9.618-7.809 17.403-17.399 17.403z"}}),_c('path',{attrs:{"d":"M443.951 222.543C434.78 186.021 411.033 160 383.18 160H368v40.672c0 33.915-22.286 58.474-49.489 62.681a53.943 53.943 0 0 1-8.301.646H206.351a51.41 51.41 0 0 0-13.049 1.672C174.18 270.689 160 286.6 160 307.236v87.227c0 24.832 24.977 39.426 49.481 46.551 29.327 8.531 61.267 10.068 96.366 0C329.15 434.354 352 420.893 352 394.463V368h-96v-16h127.18c25.24 0 47.107-21.365 57.814-52.549C445.474 286.404 448 271.641 448 256c0-11.768-1.433-23.038-4.049-33.457zM307.867 382.82c9.59 0 17.381 7.785 17.381 17.4 0 9.65-7.791 17.521-17.381 17.521-9.577 0-17.399-7.871-17.399-17.521 0-9.63 7.806-17.4 17.399-17.4z"}})])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "logo-python.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var logoPython = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoPython;

})));
