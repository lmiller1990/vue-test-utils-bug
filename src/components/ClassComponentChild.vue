<template>
  <div>
    <button @click="$emit('input')" id="btn">Btn</button>
  </div>
</template>

<script>
export default {
  name: 'ClassComponentChild'
}
</script>
