<script setup>

const props = defineProps(['turtleId'])


</script>

<template>
  <div class="new">
    <h1>This is our Photo View page</h1>
    <p>ID: {{ props.turtleId }}</p>
  </div>
</template>

<style>
.new {
  display: grid;
}
</style>
