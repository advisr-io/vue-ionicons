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
    name: "ios-grid-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-grid-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M206 308h100c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2z"}}),_c('path',{attrs:{"d":"M64 96v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm330 108h-56c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14h-56c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h100c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-grid-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M206 308h100c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2z"}}),_c('path',{attrs:{"d":"M64 96v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm330 108h-56c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14h-56c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h100c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}})])])};
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
      component.__file = "ios-grid.vue";

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
    

    
    var iosGrid = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosGrid;

})));
