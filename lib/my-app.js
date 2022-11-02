import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, toDisplayString, pushScopeId, popScopeId } from "vue";
const _imports_0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg==";
const _withScopeId = (n) => (pushScopeId("data-v-04803b90"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("img", {
  src: _imports_0,
  class: "logo",
  alt: "Vite logo"
}, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyApp",
  props: ["foo"],
  emits: ["emit"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const baz = ref(123);
    const log = (val) => {
      baz.value = val;
    };
    window.__MyApp__log = log;
    expose({
      log
    });
    console.log(">> \u8BF7\u4F7F\u7528 window.__MyApp__log \u8C03\u7528 MyApp \u7684 log \u65B9\u6CD5");
    const onEmit = () => {
      emits("emit", "hello");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createElementVNode("div", null, "props.foo: " + toDisplayString(props.foo), 1),
        createElementVNode("div", null, "baz: " + toDisplayString(baz.value), 1),
        createElementVNode("button", { onClick: onEmit }, "emit")
      ]);
    };
  }
});
const MyApp_vue_vue_type_style_index_0_scoped_04803b90_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const MyApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04803b90"]]);
const index = {
  install(Vue) {
    Vue.component("MyApp", MyApp);
    Vue.component("my-app", MyApp);
  }
};
export {
  index as default
};
