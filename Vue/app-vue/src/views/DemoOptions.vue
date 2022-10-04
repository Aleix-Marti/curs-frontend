<script>
/**
 * Exemple de pàgina utilitzant el format Options API
 */

// Components que utilitza el template.
import HelloWorld from '../components/HelloWorld.vue'

export default {
  // Instanciar els components que utilitza el template, importats anteriorment
  components: {
    HelloWorld
  },
  // Constants i variables sobre les que treballar amb el template  
  data() {
    return {
      tmnt: [
        {id:1, name: 'Leonardo', weapon: 'Katana'},
        {id:2, name: 'Rapahel', weapon: 'Sai'},
        {id:3, name: 'Donatello', weapon: 'Jo'},
        {id:4, name: 'Michelangelo', weapon: 'Nunchuk'}
        ],
      visible: true,
      inc: 0,
      word: 'Hola',
      count: 0
    }
  },
  // Funcions pròpies fetes a mida que es puguin necessitar
  methods: {
    increment() {
      this.count++
    },
    reverse() {
      let temp = this.word.split('');
      temp.reverse();
      this.word = temp.join('');
    }
  },
  // Lifecycle hooks, o punts que podem utilitzar per llençar les nostre pròpies funcions.
  // En aquest cas, quan la vista estigui del tot creada, s'executarà un console.log
  // https://vuejs.org/guide/essentials/lifecycle.html
  mounted() {
    console.log(`the component is now mounted.`)
  }
}
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
