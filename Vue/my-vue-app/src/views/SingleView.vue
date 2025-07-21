<script setup>

import { onMounted, ref } from 'vue'
import { getSingleFighter } from '@/services/services.js'
import IconSwords from '@/components/icons/IconSwords.vue'
import IconShield from '@/components/icons/IconShield.vue'



const props = defineProps(['id'])
const fighter = ref({})

onMounted( async () => {

  console.log(props.id)
  
  fighter.value = await getSingleFighter( props.id )

})

</script> 

<template>
  <!-- <h1>hello single view id:{{ props.id}}</h1> -->

  <article class="fighter">
    <h2>{{ fighter.name }}</h2>
    <img :src="fighter.img" />
    <div class="fight">  <IconSwords />{{ fighter.attack }} | <IconShield />{{ fighter.deffense }}</div>
    <p>{{ fighter.description }}</p>
  </article>

</template>

<style scoped>
.fighter {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid #ccc; */
  /* border-radius: 8px; */
  padding: 1rem;
  color: rgb(223, 223, 223);
}
.fighter img {
  max-height: 200px;
  width: auto;
  object-fit: contain;
}
.fight {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .25rem;
}
</style>