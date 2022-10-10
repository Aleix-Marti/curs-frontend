<script setup>
import {ref, onMounted} from 'vue' 
import myAPI from '../services/services.js'

const props = defineProps(['photoId'])

const information = ref({});

onMounted(() => {
  myAPI.getSinglePhoto( props.photoId ).then( (response) => {
    console.log(response.data)
    information.value = response.data; 
  })
})

</script>

<template>
  <div class="new">
    <h1>This is our Single View page</h1>
    <p>ID: {{ information.id }}</p>
    <h2>{{ information.title }}</h2>
    <img :src="information.url" alt="">
  </div>
</template>


<style>
.new {
  display: grid;
}
</style>
