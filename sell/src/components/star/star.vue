<template>
  <div class="star" :class="starType">
      <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>