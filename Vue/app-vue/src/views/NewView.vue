<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="new">
    <h1>This is our new page</h1>
    <h2>This is our subtitle</h2>
    <HelloWorld msg="You did it again!!" /> 
  </div>
</template>

<style>
.new {
  display: grid;
}
@media (min-width: 1024px) {
  .new {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
