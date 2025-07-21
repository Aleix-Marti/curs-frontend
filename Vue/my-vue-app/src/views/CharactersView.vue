<script setup>
// import Card from '../components/Card.vue'
import Fighter from '../components/Fighter.vue'
import { onMounted, ref } from 'vue'
import { getCharacters, getPokes, getFighters } from '../services/services'

const chars = ref([])
const pokes = ref([])
const fighters = ref([])

onMounted ( async () => {

  // chars.value = await getCharacters()
  // pokes.value = await getPokes()
  fighters.value = await getFighters()

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

    <section class="characters">
      <!-- <div class="character" v-for="f in fighters" :key="f.id">
        <h2>{{ f.name }}</h2>
        <img :src="f.img" />
        <div>{{ f.attack }} | {{ f.deffense }}</div>
      </div> -->
      <Fighter v-for="f in fighters" :key="f.id" :info="f" />
      
    </section>

      <!-- <div class="character" v-for="poke in pokes" :key="poke.id">
        <h2>{{ poke.name }}</h2>
        <img :src="poke.image" />
        <span v-for="type in poke.types" :key="type">{{ type }}</span>
      </div>

    <section class="characters">
      <Card v-for="char in chars" :key="char.id" :info="char" />
    </section> -->

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
