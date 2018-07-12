<template>
  <div>
    <p>Before child</p>
    <child-component
      :value="value"
      @input="$emit('input', $event)">
    </child-component>
    <p>After child</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ChildComponent from './ChildComponent.vue';

@Component({
  components: {
    ChildComponent,
  },
})
export default class ParentComponent extends Vue {
  @Prop() private value!: number;
}
</script>

<style lang="scss">
/** no-empty **/
</style>
