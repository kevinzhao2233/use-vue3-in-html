<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';

const props = defineProps(['foo']);

const baz = ref(123);

const log = (val: any) => {
  baz.value = val;
};

interface Window {
  __MyApp__log: any;
}

(window as unknown as Window).__MyApp__log = log;
defineExpose({
  log,
});
console.log('>> 请使用 window.__MyApp__log 调用 MyApp 的 log 方法');

const emits = defineEmits(['emit']);

const onEmit = () => {
  emits('emit', 'hello');
};
</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo" alt="Vite logo" />
    <div>props.foo: {{ props.foo }}</div>
    <div>baz: {{ baz }}</div>
    <button @click="onEmit">emit</button>
  </div>
</template>
<style scoped>
* {
  text-align: center;
}
</style>
