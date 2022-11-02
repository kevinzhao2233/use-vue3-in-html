import { App, Plugin } from 'vue';
import MyApp from './MyApp.vue';

export default {
  install(Vue: App) {
    Vue.component('MyApp', MyApp);
    // 如果纯 HTML 引用该组件，则需要下面这样的组件名
    Vue.component('my-app', MyApp);
  },
} as Plugin;