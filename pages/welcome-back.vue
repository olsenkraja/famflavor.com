<script setup>
definePageMeta({
  layout: 'guest'
})
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="mb-auto"></div>
    <img alt="" class="w-32" src="/images/famflavor.svg">
    <div class="h-2/3 w-full rounded-t-3xl bg-white text-black p-8 text-center flex flex-col">
      <div class="text-2xl">Welcome back!</div>
      <div class="text-gray-600 text-sm">Please log in with your details.</div>
      <div class="my-8 space-y-2">
        <input class="bg-gray-200 w-full h-12 px-6 rounded" placeholder="Email" type="text">
        <input class="bg-gray-200 w-full h-12 px-6 rounded" placeholder="Password" type="text">
        <div>
          <div class="text-right">
            <NuxtLink to="#">Forgot password?</NuxtLink>
          </div>
        </div>
      </div>
      <div class="mt-auto space-y-2">
        <button class="bg-black text-white w-full py-4 rounded-xl">Log in</button>
        <div class="text-xs flex space-x-2 justify-center">
          <div>Don’t have an account?</div>
          <NuxtLink to="/welcome" class="text-[#DC6521]">Sign Up</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>