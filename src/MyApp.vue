<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';

const props = defineProps(['foo']);

const baz = ref(123);

const log = (val: any) => {
  baz.value = val;
};

defineExpose({
  log,
});

const emits = defineEmits(['change']);

const onEmit = () => {
  console.log('----')
  emits('change', 'hello');
};
</script>

<template>
  <div class="wrap">
    <img src="./assets/vue.svg" class="logo" alt="Vite logo" />
    <div>props.foo: {{ props.foo }}</div>
    <div>baz: {{ baz }}</div>
    <button @click="onEmit()">emit</button>
  </div>
</template>
<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
