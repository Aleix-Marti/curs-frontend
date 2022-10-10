<script setup>

import {ref, onMounted } from 'vue'

import PhotoCard from '../components/PhotoCard.vue'
import myAPI from '../services/services.js'


const photos = ref([])


onMounted(() => {
  myAPI.getPhotos().then( (response) => {
    console.log(response.data)
    photos.value = response.data; 
  })
})



</script>

<template>
  <div class="new">
    <h1>API example</h1>
    <section class="cards">
      <PhotoCard v-for="photo in photos" :key="photo.id" :info="photo" />
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
