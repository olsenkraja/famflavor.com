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
      <div class="text-2xl">Welcome!</div>
      <div class="text-gray-600 text-sm">Create your account now for free.</div>
      <div class="my-8 space-y-2">
        <input class="bg-gray-200 w-full h-12 px-6 rounded" placeholder="Email" type="text">
        <input class="bg-gray-200 w-full h-12 px-6 rounded" placeholder="Password" type="text">
        <input class="bg-gray-200 w-full h-12 px-6 rounded" placeholder="Confirm Password" type="text">
        <div class="text-xs w-full text-left">
          <label for="tos">
            <input id="tos" type="checkbox">
            I agree to <b>Terms Conditions & Privacy Policy</b>.
          </label>
        </div>
      </div>
      <div class="mt-auto space-y-2">
        <button class="bg-black text-white w-full py-4 rounded-xl">Sign Up</button>
        <div class="text-xs flex space-x-2 justify-center">
          <div>Already have an account?</div>
          <NuxtLink class="text-[#DC6521]" to="/welcome-back">Log in</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>