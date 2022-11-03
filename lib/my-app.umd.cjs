(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("vue")) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.MyApp = factory(global.vue));
})(this, function(vue) {
  "use strict";
  const _imports_0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg==";
  const _withScopeId = (n) => (vue.pushScopeId("data-v-fd9921c1"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "wrap" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("img", {
    src: _imports_0,
    class: "logo",
    alt: "Vite logo"
  }, null, -1));
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "MyApp",
    props: ["foo"],
    emits: ["change"],
    setup(__props, { expose, emit: emits }) {
      const props = __props;
      const baz = vue.ref(123);
      const log = (val) => {
        baz.value = val;
      };
      window.__MyApp__log = log;
      expose({
        log
      });
      console.log(">> \u8BF7\u4F7F\u7528 window.__MyApp__log \u8C03\u7528 MyApp \u7684 log \u65B9\u6CD5");
      const onEmit = () => {
        console.log("----");
        emits("change", "hello");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          vue.createElementVNode("div", null, "props.foo: " + vue.toDisplayString(props.foo), 1),
          vue.createElementVNode("div", null, "baz: " + vue.toDisplayString(baz.value), 1),
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => onEmit())
          }, "emit")
        ]);
      };
    }
  });
  const MyApp_vue_vue_type_style_index_0_scoped_fd9921c1_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const MyApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd9921c1"]]);
  const index = {
    install(Vue) {
      Vue.component("MyApp", MyApp);
      Vue.component("my-app", MyApp);
    }
  };
  return index;
});
