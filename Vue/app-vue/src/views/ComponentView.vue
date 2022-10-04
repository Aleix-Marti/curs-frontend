<script setup>

import {ref} from 'vue'

import TurtleCard from '../components/TurtleCard.vue'

const tmnt = [
  {id:1, name: 'Leonardo', weapon: 'Katana', color: 'blue'},
  {id:2, name: 'Rapahel', weapon: 'Sai', color: 'red'},
  {id:3, name: 'Donatello', weapon: 'Jo', color: 'purple'},
  {id:4, name: 'Michelangelo', weapon: 'Nunchuk', color: 'orange'}
  ]

const totalCount = ref(0);

const turtleName = ref('');
const turtleWeapon = ref('');


const updateCounter = (n, w) => {
  totalCount.value++
  turtleName.value = n;
  turtleWeapon.value = w;
}


</script>

<template>
  <div class="new">
    <h1>V-for component example</h1>
    <p>Total counter: {{ totalCount }}</p>
    <p v-if="turtleName !== '' ">{{ turtleName }} uses {{ turtleWeapon }}</p>
    <section class="cards">
      <TurtleCard v-for="turtle in tmnt" :key="turtle.id" :info="turtle" @response="updateCounter" />
    </section>
  </div>
</template>

<style>
.new {
  display: grid;
}
li {
  cursor: pointer;
}
li:hover {
  color: hsla(160, 100%, 37%, 1);
}
.cards {
  display: flex;
  gap: 2rem;
}
</style>
