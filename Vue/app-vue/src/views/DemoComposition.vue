<script setup>
// És necessari escriure l'atribut setup al tag script per poder treballar amb la Composition API

/**
 * Exemple de pàgina utilitzant el format Composition API
 */

// Components que utilitza el template. Només cal importartlo aquí i ja es pot utilitzar
import HelloWorld from '../components/HelloWorld.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'

// Constants i variables sobre les que treballar amb el template
const tmnt = [
  {id:1, name: 'Leonardo', weapon: 'Katana'},
  {id:2, name: 'Rapahel', weapon: 'Sai'},
  {id:3, name: 'Donatello', weapon: 'Jo'},
  {id:4, name: 'Michelangelo', weapon: 'Nunchuk'}
  ]

let visible = ref(true);
let inc = ref(0);
let word = ref('Hola');
let count = ref(0);

// Funcions pròpies fetes a mida que es puguin necessitar
const reverse = () => {
  let temp = word.value.split('');
  temp.reverse();
  word.value = temp.join('');
}

const increment = () => count.value++; 

// Lifecycle hooks, o punts que podem utilitzar per llençar les nostre pròpies funcions.
// En aquest cas, quan la vista estigui del tot creada, s'executarà un console.log
// https://vuejs.org/guide/essentials/lifecycle.html

onMounted(() => {
  console.log(`the component is now mounted.`)
})

</script>


<template>
  <div class="new">
    <button v-on:click="visible = !visible">Toggle</button>
    <button @click="inc++">Inc {{inc}}</button>
    <button @click="increment">Count {{count}}</button>
    <button @click="reverse">reverse {{word}}</button>

    <h1 v-if="visible">This is our new page</h1>
    <h2 :class="{ 'is-green' : visible }">This is our subtitle</h2>
    <HelloWorld msg="You did it again!!" /> 

    <ul>
      <li v-for="turtle in tmnt" :key="turtle.id">{{ turtle.name }}</li>
    </ul>
  </div>

</template>

<style>
.is-green {
  color: lime;
}
.new {
  display: grid;
}
</style>
