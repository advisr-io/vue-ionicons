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
    name: "logo-reddit-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-reddit-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('circle',{attrs:{"cx":"322.3","cy":"288.4","r":"31.8"}}),_c('circle',{attrs:{"cx":"190.3","cy":"288.4","r":"31.8"}}),_c('path',{attrs:{"d":"M480.5 251c0-27.7-22.2-50.2-49.5-50.2-13 0-24.7 5-33.6 13.3-33.2-23.4-78.4-38.5-128.7-40.7L292 95.7l69.6 13.9c.2 24.7 20.1 44.7 44.5 44.7 24.6 0 44.5-20.2 44.5-45.1S430.7 64 406.1 64c-18.6 0-34.5 11.6-41.2 28l-85.2-17-29.4 98.2-7.1.2c-50.3 2.2-95.5 17.4-128.7 40.7-8.8-8.3-20.6-13.3-33.6-13.3-27.3 0-49.5 22.5-49.5 50.2 0 19.6 11 36.5 27.1 44.8-.8 4.9-1.2 9.8-1.2 14.8C57.5 386.4 146.4 448 256 448s198.5-61.6 198.5-137.5c0-5-.4-9.9-1.1-14.8 16.1-8.3 27.1-25.2 27.1-44.7zM406.1 81.9c14.8 0 26.8 12.2 26.8 27.2s-12 27.2-26.8 27.2-26.8-12.2-26.8-27.2 12-27.2 26.8-27.2zM49.2 251c0-17.8 14.3-32.2 31.8-32.2 7.2 0 13.9 2.5 19.2 6.6-17.3 15.2-30.1 33-37 52.4-8.4-5.9-14-15.7-14-26.8zm337.2 141.9C351.8 416.8 305.5 430 256 430s-95.8-13.2-130.4-37.1c-32.5-22.5-50.4-51.8-50.4-82.4 0-3.2.2-6.5.6-9.7.7-6 2.2-11.9 4.3-17.7 5.6-15.6 16-30.3 30.7-43.4 4.4-3.9 9.2-7.7 14.4-11.3.1-.1.3-.2.4-.3C160.2 204.2 206.5 191 256 191s95.8 13.2 130.4 37.1c.1.1.3.2.4.3 5.2 3.6 10 7.4 14.4 11.3 14.7 13.1 25.1 27.8 30.7 43.4 2.1 5.8 3.5 11.7 4.3 17.7.4 3.2.6 6.4.6 9.7 0 30.6-17.9 59.9-50.4 82.4zm62.4-115.2c-6.9-19.4-19.7-37.2-37-52.4 5.3-4.1 12-6.6 19.2-6.6 17.5 0 31.8 14.5 31.8 32.2 0 11.2-5.6 21-14 26.8z"}}),_c('path',{attrs:{"d":"M320.5 357.9c-.2.2-24.2 24.2-64.5 24.4-40.9-.2-64.4-24.2-64.6-24.4l-12.6 12.4c1.2 1.2 29.6 29.5 77.2 29.7 47.6-.2 75.9-28.5 77.1-29.7l-12.6-12.4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-reddit-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('circle',{attrs:{"cx":"322.3","cy":"288.4","r":"31.8"}}),_c('circle',{attrs:{"cx":"190.3","cy":"288.4","r":"31.8"}}),_c('path',{attrs:{"d":"M480.5 251c0-27.7-22.2-50.2-49.5-50.2-13 0-24.7 5-33.6 13.3-33.2-23.4-78.4-38.5-128.7-40.7L292 95.7l69.6 13.9c.2 24.7 20.1 44.7 44.5 44.7 24.6 0 44.5-20.2 44.5-45.1S430.7 64 406.1 64c-18.6 0-34.5 11.6-41.2 28l-85.2-17-29.4 98.2-7.1.2c-50.3 2.2-95.5 17.4-128.7 40.7-8.8-8.3-20.6-13.3-33.6-13.3-27.3 0-49.5 22.5-49.5 50.2 0 19.6 11 36.5 27.1 44.8-.8 4.9-1.2 9.8-1.2 14.8C57.5 386.4 146.4 448 256 448s198.5-61.6 198.5-137.5c0-5-.4-9.9-1.1-14.8 16.1-8.3 27.1-25.2 27.1-44.7zM406.1 81.9c14.8 0 26.8 12.2 26.8 27.2s-12 27.2-26.8 27.2-26.8-12.2-26.8-27.2 12-27.2 26.8-27.2zM49.2 251c0-17.8 14.3-32.2 31.8-32.2 7.2 0 13.9 2.5 19.2 6.6-17.3 15.2-30.1 33-37 52.4-8.4-5.9-14-15.7-14-26.8zm337.2 141.9C351.8 416.8 305.5 430 256 430s-95.8-13.2-130.4-37.1c-32.5-22.5-50.4-51.8-50.4-82.4 0-3.2.2-6.5.6-9.7.7-6 2.2-11.9 4.3-17.7 5.6-15.6 16-30.3 30.7-43.4 4.4-3.9 9.2-7.7 14.4-11.3.1-.1.3-.2.4-.3C160.2 204.2 206.5 191 256 191s95.8 13.2 130.4 37.1c.1.1.3.2.4.3 5.2 3.6 10 7.4 14.4 11.3 14.7 13.1 25.1 27.8 30.7 43.4 2.1 5.8 3.5 11.7 4.3 17.7.4 3.2.6 6.4.6 9.7 0 30.6-17.9 59.9-50.4 82.4zm62.4-115.2c-6.9-19.4-19.7-37.2-37-52.4 5.3-4.1 12-6.6 19.2-6.6 17.5 0 31.8 14.5 31.8 32.2 0 11.2-5.6 21-14 26.8z"}}),_c('path',{attrs:{"d":"M320.5 357.9c-.2.2-24.2 24.2-64.5 24.4-40.9-.2-64.4-24.2-64.6-24.4l-12.6 12.4c1.2 1.2 29.6 29.5 77.2 29.7 47.6-.2 75.9-28.5 77.1-29.7l-12.6-12.4z"}})])])};
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
      component.__file = "logo-reddit.vue";

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
    

    
    var logoReddit = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoReddit;

})));
