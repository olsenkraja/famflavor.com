<script setup>
definePageMeta({
  layout: 'guest'
})
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center px-8 py-16">
    <div class="mb-auto"></div>
    <img alt="" src="/images/famflavor.svg">
    <div class="text-balance text-center text-xl text-white">
      Create and share your special recipes with your whole family!
    </div>
    <NuxtLink to="/welcome" class="text-center bg-white text-black rounded-xl w-full py-4 mt-auto">
      Let's cook!
    </NuxtLink>
  </div>
</template>