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
    name: "ios-cafe-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-cafe-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M369.7 404H110.1c-7.6 0-14.1 5.8-14.4 13.4-.4 8 6 14.6 14 14.6h259.6c7.6 0 14.1-5.8 14.4-13.4.3-8-6.1-14.6-14-14.6zm29.5-285.5c.1-10.8-4.2-20.9-12.2-28.4-7.2-6.6-16.7-10.1-26.5-10.1H86.8c-9.9 0-19.7 3.6-26.9 10.4-8.1 7.7-12.4 18.2-11.9 29.3C50.4 172 58.3 218 71.8 256.3c11 31.6 25.8 58.1 43.9 78.9 31.8 36.6 68.8 48.8 77.9 48.8h60.1c5.5 0 25-7.2 44.2-19.5 22.4-14.4 42.4-36.7 58.1-64.6 2 .1 4 .2 5.9.2 27.2 0 52.8-9.7 72.1-27.4 19.4-17.8 30.1-41.4 30.1-66.6-.1-38.9-25.9-73.5-64.9-87.6zm-29.7 153.1c14.2-34.5 23.6-76 27.8-123.4 0 0 0-.1.1 0 10.3 5 19.1 12.2 25.8 20.9 8.4 10.9 12.8 23.7 12.8 37 0 34-29.2 62.1-66.5 65.5z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-cafe-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M369.7 404H110.1c-7.6 0-14.1 5.8-14.4 13.4-.4 8 6 14.6 14 14.6h259.6c7.6 0 14.1-5.8 14.4-13.4.3-8-6.1-14.6-14-14.6zm29.5-285.5c.1-10.8-4.2-20.9-12.2-28.4-7.2-6.6-16.7-10.1-26.5-10.1H86.8c-9.9 0-19.7 3.6-26.9 10.4-8.1 7.7-12.4 18.2-11.9 29.3C50.4 172 58.3 218 71.8 256.3c11 31.6 25.8 58.1 43.9 78.9 31.8 36.6 68.8 48.8 77.9 48.8h60.1c5.5 0 25-7.2 44.2-19.5 22.4-14.4 42.4-36.7 58.1-64.6 2 .1 4 .2 5.9.2 27.2 0 52.8-9.7 72.1-27.4 19.4-17.8 30.1-41.4 30.1-66.6-.1-38.9-25.9-73.5-64.9-87.6zm-29.7 153.1c14.2-34.5 23.6-76 27.8-123.4 0 0 0-.1.1 0 10.3 5 19.1 12.2 25.8 20.9 8.4 10.9 12.8 23.7 12.8 37 0 34-29.2 62.1-66.5 65.5z"}})])])};
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
      component.__file = "ios-cafe.vue";

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
    

    
    var iosCafe = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosCafe;

})));
