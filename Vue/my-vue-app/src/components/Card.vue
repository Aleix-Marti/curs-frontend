<script setup>

  const props = defineProps(['info'])

</script>


<template>

  <article class="character">
    <h2>{{ props.info.name }}</h2>
    <img :src="props.info.image" />
  </article>

</template>

<style scoped>
.character {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
}
.character img {
  max-height: 200px;
  width: auto;
  object-fit: contain;
}
</style>

