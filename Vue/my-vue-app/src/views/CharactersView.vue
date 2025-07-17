<script setup>
import Card from '../components/Card.vue'
import { onMounted, ref } from 'vue'
import { getCharacters, getPokes } from '../services/services'

const chars = ref([])
const pokes = ref([])

onMounted ( async () => {

  chars.value = await getCharacters()
  pokes.value = await getPokes()

})





</script>

<template>
  <main>
    <h2>DBZ Fighters</h2>
    <!-- <ul>
      <li class="character" v-for="char in chars" :key="char.id">
        <h2>{{ char.name }}</h2>
      </li>
      
    </ul> -->

      <div class="character" v-for="poke in pokes" :key="poke.id">
        <h2>{{ poke.name }}</h2>
        <img :src="poke.image" />
        <span v-for="type in poke.types" :key="type">{{ type }}</span>
      </div>

    <section class="characters">
      <Card v-for="char in chars" :key="char.id" :info="char" />
    </section>

  </main>

</template>


<style scoped>

.characters {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.character {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid blue;
  border-radius: 8px;
  padding: 1rem;
}

/* .character {

  & img {
    max-height: 200px;
    width: auto;
    object-fit: contain;
  }
} */

</style>
