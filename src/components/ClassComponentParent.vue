<template>
  <div>
    <class-component-child
      @input="handle"
    />
  </div>
</template>

<script>
import Vue from "vue"
import { Component } from 'vue-property-decorator';
import ClassComponentChild from "./ClassComponentChild"

@Component({
  components: {
    ClassComponentChild
  }
})
export default class ClassComponentParent extends Vue {
  handle() {
    console.log("handle")
  }
}
</script>

<style scoped>
</style>
