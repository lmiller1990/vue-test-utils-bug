<template>
  <div>
    <button
      @click="$emit('input', value + 1)">
      Clicky
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ChildComponent extends Vue {
  @Prop() private value!: number;
}
</script>

<style lang="scss">
/** no-empty **/
</style>
