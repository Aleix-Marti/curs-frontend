<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import TurtleCard from '../components/TurtleCard.vue'
import {ref} from 'vue'

const visible = ref(true)




const tmnt = [
  {id:1, name: 'Leonardo', weapon: 'Katana'},
  {id:2, name: 'Rapahel', weapon: 'Sai'},
  {id:3, name: 'Donatello', weapon: 'Jo'},
  {id:4, name: 'Michelangelo', weapon: 'Nunchuk'}
  ]


</script>

<template>
  <div class="new">
    <h1>This is our new page</h1>
    <h2>This is our subtitle</h2>
    <HelloWorld msg="You did it again!!" />
    <button @click="visible = !visible">Toggle</button>
    <p v-show="visible">Only visible when "visible" variable is true (v-show)</p>
    <p v-if="visible">Only visible when "visible" variable is true</p>
    <p v-else>Only visible when "visible" variable is false</p>

    <TurtleCard v-for="turtle in tmnt" :key="turtle.id" :info="turtle" />
  
    
  </div>
</template>

<style>
.new {
  display: grid;
}
</style>
