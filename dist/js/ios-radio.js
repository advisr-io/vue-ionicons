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
    name: "ios-radio-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-radio-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M60 256c0-51 18.6-97.9 54-135.6 5.3-5.7 5.2-14.8-.4-20.3-2.6-2.6-6.1-4.1-9.7-4.1-3.8 0-7.4 1.6-10.1 4.4C53.3 143.7 32 197.4 32 256c0 58.5 21.3 112.3 61.7 155.5 2.7 2.9 6.3 4.5 10.2 4.5 3.6 0 7.1-1.4 9.7-3.9 2.7-2.6 4.3-6.2 4.4-10 .1-3.9-1.3-7.6-4-10.3C78.6 353.9 60 307 60 256zm358.2-155.6c-2.6-2.8-6.2-4.4-10-4.4-3.6 0-7.1 1.4-9.7 3.9-2.7 2.6-4.3 6.2-4.4 10-.1 3.9 1.3 7.6 4 10.3 35.3 37.8 54 84.7 54 135.7s-18.6 97.9-54 135.7c-5.3 5.6-5.2 14.7.3 20.2 2.5 2.6 6 4 9.7 4 3.9 0 7.6-1.6 10.2-4.6 40.4-43 61.7-96.7 61.7-155.2 0-58.5-21.3-112.4-61.8-155.6z"}}),_c('path',{attrs:{"d":"M159.2 347.7c-24.1-24.3-37.3-56.6-37.3-90.9 0-35 13.8-67.9 38.8-92.4 5.5-5.3 5.6-14.2.2-19.8-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4C110.7 174.2 94 214.1 94 256.8c0 41.6 16.1 80.9 45.3 110.6 2.7 2.7 6.2 4.2 9.9 4.2s7.2-1.5 9.8-4.2c2.6-2.6 4.1-6.1 4.1-9.8.2-3.7-1.2-7.2-3.9-9.9zM371 144.5c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 25 24.5 38.7 56.5 38.7 91.5 0 34.2-13.1 67.4-37.1 91.8-5.4 5.4-5.3 14.3.1 19.7 2.6 2.6 6.2 4.1 9.8 4.1 3.8 0 7.4-1.5 9.9-4.1C402 337.7 418 297.6 418 256c0-42.5-16.7-81.5-47-111.5z"}}),_c('path',{attrs:{"d":"M207.1 183.4c-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4.1-19.8 19.5-30.8 45.6-30.8 73.3 0 27.1 10.5 52.7 29.5 72.1 2.7 2.7 6.2 4.2 10 4.2 3.7 0 7.2-1.4 9.8-4 2.7-2.6 4.2-6.1 4.2-9.9 0-3.8-1.4-7.3-4.1-10-13.8-14-21.4-32.6-21.4-52.5 0-20.3 8-39.2 22.4-53.4 5.4-5.2 5.5-14.1.2-19.7zm118.6-.2c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 14.5 14.3 22.4 33.3 22.4 53.5 0 19.8-7.6 38.5-21.5 52.5-2.6 2.6-4.1 6.2-4 9.9 0 3.7 1.5 7.2 4.1 9.8 2.6 2.6 6.2 4.1 9.8 4.1 3.7 0 7.3-1.5 9.9-4.2 19.1-19.4 29.6-45 29.6-72.1.1-27.8-10.8-53.8-30.6-73.4zM256 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17.1-38-38-38z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-radio-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M60 256c0-51 18.6-97.9 54-135.6 5.3-5.7 5.2-14.8-.4-20.3-2.6-2.6-6.1-4.1-9.7-4.1-3.8 0-7.4 1.6-10.1 4.4C53.3 143.7 32 197.4 32 256c0 58.5 21.3 112.3 61.7 155.5 2.7 2.9 6.3 4.5 10.2 4.5 3.6 0 7.1-1.4 9.7-3.9 2.7-2.6 4.3-6.2 4.4-10 .1-3.9-1.3-7.6-4-10.3C78.6 353.9 60 307 60 256zm358.2-155.6c-2.6-2.8-6.2-4.4-10-4.4-3.6 0-7.1 1.4-9.7 3.9-2.7 2.6-4.3 6.2-4.4 10-.1 3.9 1.3 7.6 4 10.3 35.3 37.8 54 84.7 54 135.7s-18.6 97.9-54 135.7c-5.3 5.6-5.2 14.7.3 20.2 2.5 2.6 6 4 9.7 4 3.9 0 7.6-1.6 10.2-4.6 40.4-43 61.7-96.7 61.7-155.2 0-58.5-21.3-112.4-61.8-155.6z"}}),_c('path',{attrs:{"d":"M159.2 347.7c-24.1-24.3-37.3-56.6-37.3-90.9 0-35 13.8-67.9 38.8-92.4 5.5-5.3 5.6-14.2.2-19.8-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4C110.7 174.2 94 214.1 94 256.8c0 41.6 16.1 80.9 45.3 110.6 2.7 2.7 6.2 4.2 9.9 4.2s7.2-1.5 9.8-4.2c2.6-2.6 4.1-6.1 4.1-9.8.2-3.7-1.2-7.2-3.9-9.9zM371 144.5c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 25 24.5 38.7 56.5 38.7 91.5 0 34.2-13.1 67.4-37.1 91.8-5.4 5.4-5.3 14.3.1 19.7 2.6 2.6 6.2 4.1 9.8 4.1 3.8 0 7.4-1.5 9.9-4.1C402 337.7 418 297.6 418 256c0-42.5-16.7-81.5-47-111.5z"}}),_c('path',{attrs:{"d":"M207.1 183.4c-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4.1-19.8 19.5-30.8 45.6-30.8 73.3 0 27.1 10.5 52.7 29.5 72.1 2.7 2.7 6.2 4.2 10 4.2 3.7 0 7.2-1.4 9.8-4 2.7-2.6 4.2-6.1 4.2-9.9 0-3.8-1.4-7.3-4.1-10-13.8-14-21.4-32.6-21.4-52.5 0-20.3 8-39.2 22.4-53.4 5.4-5.2 5.5-14.1.2-19.7zm118.6-.2c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 14.5 14.3 22.4 33.3 22.4 53.5 0 19.8-7.6 38.5-21.5 52.5-2.6 2.6-4.1 6.2-4 9.9 0 3.7 1.5 7.2 4.1 9.8 2.6 2.6 6.2 4.1 9.8 4.1 3.7 0 7.3-1.5 9.9-4.2 19.1-19.4 29.6-45 29.6-72.1.1-27.8-10.8-53.8-30.6-73.4zM256 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17.1-38-38-38z"}})])])};
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
      component.__file = "ios-radio.vue";

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
    

    
    var iosRadio = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosRadio;

})));
