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
    name: "ios-sync-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-sync-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M492 257.1c-2.6-2.6-6-4-9.6-4-3.6 0-7 1.4-9.6 4l-13 13c4.3-61.8-19.5-122.5-65.3-165C356.9 70.2 307.7 51 256.1 51c-26.7 0-52.8 5.1-77.4 15.1-25.5 10.4-48.3 25.6-67.7 45.3-13.2 13.4-24.6 28.5-33.6 44.8-1.9 3.4-2.3 7.4-1.2 11.1 1.1 3.7 3.8 6.8 7.2 8.5 2 1 4.2 1.5 6.4 1.5 5.2 0 9.9-2.8 12.4-7.3 7.9-14.3 17.8-27.5 29.4-39.1 16.8-16.8 36.3-29.8 58.1-38.7 21.1-8.6 43.4-12.9 66.2-12.9 22.9 0 45.2 4.3 66.3 12.9 21.8 8.9 41.4 21.9 58.2 38.8 20.3 20.4 35.4 45.6 43.8 73 7 22.9 9.2 47.3 6.6 71.2l-18.9-18.5c-2.5-2.4-5.8-3.8-9.3-3.8-3.5 0-6.9 1.4-9.4 3.9-5.2 5.2-5.2 13.6 0 18.8l42.8 42.9c1.9 1.9 4.4 2.9 7 2.9 2.6 0 5.1-1 7-2.9l42.1-42.2c5.2-5.3 5.2-13.9-.1-19.2zM428.6 335.9c-2-1-4.2-1.5-6.4-1.5-5.2 0-9.9 2.8-12.4 7.3-7.9 14.3-17.8 27.5-29.4 39.1-16.8 16.8-36.3 29.9-58.2 38.7-21.1 8.6-43.4 12.9-66.3 12.9s-45.2-4.3-66.2-12.9c-21.8-8.9-41.4-21.9-58.2-38.7-37.6-37.8-56-90.9-50.3-143.9l18.4 18.5c2.4 2.4 5.6 3.7 9 3.7 3.4 0 6.6-1.3 9-3.7l1.3-1.3c4.9-4.9 4.9-13 0-17.9l-42.9-43c-1.9-1.9-4.4-2.9-7-2.9-2.6 0-5.1 1-7 2.9l-42 42.3c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7-1.4 9.6-4l13-13.1c-1.8 25.8 1.3 52 9 76.5 9.9 31.4 26.8 59.3 50.3 82.8 19.5 19.6 42.2 34.7 67.6 45.1 24.5 10 50.4 15 76.9 15 26.5 0 52.4-5.1 76.9-15 25.4-10.3 48.1-25.5 67.6-45.1 13.5-13.5 25-28.8 34.2-45.4 1.9-3.4 2.3-7.4 1.2-11.1-1.2-3.7-3.8-6.8-7.3-8.5z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-sync-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M492 257.1c-2.6-2.6-6-4-9.6-4-3.6 0-7 1.4-9.6 4l-13 13c4.3-61.8-19.5-122.5-65.3-165C356.9 70.2 307.7 51 256.1 51c-26.7 0-52.8 5.1-77.4 15.1-25.5 10.4-48.3 25.6-67.7 45.3-13.2 13.4-24.6 28.5-33.6 44.8-1.9 3.4-2.3 7.4-1.2 11.1 1.1 3.7 3.8 6.8 7.2 8.5 2 1 4.2 1.5 6.4 1.5 5.2 0 9.9-2.8 12.4-7.3 7.9-14.3 17.8-27.5 29.4-39.1 16.8-16.8 36.3-29.8 58.1-38.7 21.1-8.6 43.4-12.9 66.2-12.9 22.9 0 45.2 4.3 66.3 12.9 21.8 8.9 41.4 21.9 58.2 38.8 20.3 20.4 35.4 45.6 43.8 73 7 22.9 9.2 47.3 6.6 71.2l-18.9-18.5c-2.5-2.4-5.8-3.8-9.3-3.8-3.5 0-6.9 1.4-9.4 3.9-5.2 5.2-5.2 13.6 0 18.8l42.8 42.9c1.9 1.9 4.4 2.9 7 2.9 2.6 0 5.1-1 7-2.9l42.1-42.2c5.2-5.3 5.2-13.9-.1-19.2zM428.6 335.9c-2-1-4.2-1.5-6.4-1.5-5.2 0-9.9 2.8-12.4 7.3-7.9 14.3-17.8 27.5-29.4 39.1-16.8 16.8-36.3 29.9-58.2 38.7-21.1 8.6-43.4 12.9-66.3 12.9s-45.2-4.3-66.2-12.9c-21.8-8.9-41.4-21.9-58.2-38.7-37.6-37.8-56-90.9-50.3-143.9l18.4 18.5c2.4 2.4 5.6 3.7 9 3.7 3.4 0 6.6-1.3 9-3.7l1.3-1.3c4.9-4.9 4.9-13 0-17.9l-42.9-43c-1.9-1.9-4.4-2.9-7-2.9-2.6 0-5.1 1-7 2.9l-42 42.3c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7-1.4 9.6-4l13-13.1c-1.8 25.8 1.3 52 9 76.5 9.9 31.4 26.8 59.3 50.3 82.8 19.5 19.6 42.2 34.7 67.6 45.1 24.5 10 50.4 15 76.9 15 26.5 0 52.4-5.1 76.9-15 25.4-10.3 48.1-25.5 67.6-45.1 13.5-13.5 25-28.8 34.2-45.4 1.9-3.4 2.3-7.4 1.2-11.1-1.2-3.7-3.8-6.8-7.3-8.5z"}})])])};
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
      component.__file = "ios-sync.vue";

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
    

    
    var iosSync = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosSync;

})));
