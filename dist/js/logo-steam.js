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
    name: "logo-steam-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-steam-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M478.8 208.2c0 19.8-16.1 36-36 36-19.8 0-36-16.1-36-36 0-19.8 16.1-36 36-36 19.8 0 36 16.2 36 36zM442.6 139c-38.1 0-69 30.7-69.4 68.7l-43.2 62c-1.8-.2-3.6-.3-5.4-.3-9.7 0-18.7 2.7-26.4 7.3L102.4 198c-5.1-23.2-25.9-40.7-50.6-40.7C23.3 157.2 0 180.6 0 209.1s23.3 51.8 51.8 51.8c9.7 0 18.7-2.7 26.4-7.3L274 332.2c5.1 23.3 25.8 40.8 50.6 40.8 26.8 0 49-20.6 51.5-46.7l66.5-48.6c38.3 0 69.4-31 69.4-69.3S480.9 139 442.6 139zm0 22.9c25.7 0 46.5 20.9 46.5 46.5 0 25.7-20.9 46.4-46.5 46.4-25.7 0-46.5-20.8-46.5-46.4 0-25.7 20.8-46.5 46.5-46.5zm-390.8 9c14.6 0 27.3 8.2 33.7 20.2l-18.9-7.6v.1c-15.3-5.5-32.2 2-38.3 17.1-6.1 15.2.9 32.3 15.7 38.9v.1l16.1 6.4c-2.6.6-5.4.9-8.2.9-21.1 0-38.1-17-38.1-38.1-.1-20.9 16.9-38 38-38zm272.8 112.2c21.1 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-14.7 0-27.4-8.2-33.7-20.3 6.3 2.5 12.5 5 18.8 7.6 15.5 6.2 33.2-1.3 39.4-16.8 6.2-15.5-1.3-33.1-16.9-39.4l-15.9-6.4c2.8-.5 5.5-.9 8.3-.9z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-steam-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M478.8 208.2c0 19.8-16.1 36-36 36-19.8 0-36-16.1-36-36 0-19.8 16.1-36 36-36 19.8 0 36 16.2 36 36zM442.6 139c-38.1 0-69 30.7-69.4 68.7l-43.2 62c-1.8-.2-3.6-.3-5.4-.3-9.7 0-18.7 2.7-26.4 7.3L102.4 198c-5.1-23.2-25.9-40.7-50.6-40.7C23.3 157.2 0 180.6 0 209.1s23.3 51.8 51.8 51.8c9.7 0 18.7-2.7 26.4-7.3L274 332.2c5.1 23.3 25.8 40.8 50.6 40.8 26.8 0 49-20.6 51.5-46.7l66.5-48.6c38.3 0 69.4-31 69.4-69.3S480.9 139 442.6 139zm0 22.9c25.7 0 46.5 20.9 46.5 46.5 0 25.7-20.9 46.4-46.5 46.4-25.7 0-46.5-20.8-46.5-46.4 0-25.7 20.8-46.5 46.5-46.5zm-390.8 9c14.6 0 27.3 8.2 33.7 20.2l-18.9-7.6v.1c-15.3-5.5-32.2 2-38.3 17.1-6.1 15.2.9 32.3 15.7 38.9v.1l16.1 6.4c-2.6.6-5.4.9-8.2.9-21.1 0-38.1-17-38.1-38.1-.1-20.9 16.9-38 38-38zm272.8 112.2c21.1 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-14.7 0-27.4-8.2-33.7-20.3 6.3 2.5 12.5 5 18.8 7.6 15.5 6.2 33.2-1.3 39.4-16.8 6.2-15.5-1.3-33.1-16.9-39.4l-15.9-6.4c2.8-.5 5.5-.9 8.3-.9z"}})])])};
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
      component.__file = "logo-steam.vue";

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
    

    
    var logoSteam = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoSteam;

})));
