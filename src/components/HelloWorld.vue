<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <parent-component
      v-model="timesClicked">
    </parent-component>
    <p>Clicked {{ timesClicked }} times</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ParentComponent from './ParentComponent.vue';

@Component({
  components: {
    ParentComponent,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private timesClicked: number = 0;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
