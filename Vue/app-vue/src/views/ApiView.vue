<script setup>

import {ref, onMounted, computed } from 'vue'

import PhotoCard from '../components/PhotoCard.vue'
import myAPI from '../services/services.js'


const photos = ref([])
const search = ref("")


onMounted(() => {
  myAPI.getPhotos().then( (response) => {
    console.log(response.data)
    photos.value = response.data; 
  })
})

const filteredPhotos = computed(() => {
  return photos.value.filter( (photo) => {
    // return photo.title.toLowerCase().includes( search.value.toLowerCase() )
    return photo.title.toLowerCase().startsWith( search.value.toLowerCase() )
  })
})


</script>

<template>
  <div class="new">
    <h1>API example</h1>

    <input v-model="search" type="text" placeholder="type to search...">
    <br>
    <section class="cards">
      <PhotoCard v-for="photo in filteredPhotos" :key="photo.id" :info="photo" />
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
  max-width: 50vw;
  flex-wrap: wrap;
}
</style>
