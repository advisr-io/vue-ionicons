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
    name: "logo-playstation-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-playstation-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M399.8 203c-.8-17.1-3.3-34.5-10.8-50.1-4.1-8.6-9.7-16.5-16.5-23.2-6.3-6.4-13.6-11.7-21.3-16.3-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1 8.3.2 16.7-1.7 24-5.7 7.6-4.1 13.9-10.4 18.4-17.8 5.1-8.3 8.2-17.8 9.9-27.3 1.9-10.8 2-22.1 1.6-33.3zM86.7 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5-9.8 4.1-19.4 8.7-28.1 14.8-3.8 2.6-7.2 5.9-9.2 10.1s-2.2 9.2-.5 13.6c2 5.1 5.8 9.3 10.1 12.6 7.8 5.9 17.1 9.5 26.4 12.2 28.4 9.4 58.4 14 88.4 13.3 14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3-7.1 1.6-14.4 2.1-21.6 2.2-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2 .3-4 1.7-5.4 2.8-2.9 6.8-4.5 10.6-6z"}}),_c('path',{attrs:{"d":"M512 345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8 .3-23.1.5-31 1.4-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8c9.7-3.3 20.1-4.6 30.3-4.6 6.5.2 13.2.7 19.4 3.1 2.2.9 4.5 2.2 5.5 4.5.9 2.6-.9 5-2.9 6.5-4.7 3.8-10.7 5.3-16.2 7.4-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4 7.9-4 15.8-8.6 21.8-15.3 3.1-3.6 5-8 5-13.1z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-playstation-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M399.8 203c-.8-17.1-3.3-34.5-10.8-50.1-4.1-8.6-9.7-16.5-16.5-23.2-6.3-6.4-13.6-11.7-21.3-16.3-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1 8.3.2 16.7-1.7 24-5.7 7.6-4.1 13.9-10.4 18.4-17.8 5.1-8.3 8.2-17.8 9.9-27.3 1.9-10.8 2-22.1 1.6-33.3zM86.7 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5-9.8 4.1-19.4 8.7-28.1 14.8-3.8 2.6-7.2 5.9-9.2 10.1s-2.2 9.2-.5 13.6c2 5.1 5.8 9.3 10.1 12.6 7.8 5.9 17.1 9.5 26.4 12.2 28.4 9.4 58.4 14 88.4 13.3 14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3-7.1 1.6-14.4 2.1-21.6 2.2-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2 .3-4 1.7-5.4 2.8-2.9 6.8-4.5 10.6-6z"}}),_c('path',{attrs:{"d":"M512 345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8 .3-23.1.5-31 1.4-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8c9.7-3.3 20.1-4.6 30.3-4.6 6.5.2 13.2.7 19.4 3.1 2.2.9 4.5 2.2 5.5 4.5.9 2.6-.9 5-2.9 6.5-4.7 3.8-10.7 5.3-16.2 7.4-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4 7.9-4 15.8-8.6 21.8-15.3 3.1-3.6 5-8 5-13.1z"}})])])};
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
      component.__file = "logo-playstation.vue";

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
    

    
    var logoPlaystation = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoPlaystation;

})));
