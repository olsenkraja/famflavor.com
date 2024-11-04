<script setup>
defineProps({
  icon: String,
  href: String,
})
</script>

<template>
  <NuxtLink :href>
    <IonIcon class="text-gray-600" :icon />
  </NuxtLink>
</template>