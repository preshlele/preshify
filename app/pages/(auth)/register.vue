<script lang="ts" setup>
useHead({
  title: "Register",
});

definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div>
    Register Page
    <ul>
        <li>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/">Home</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/login">Login</NuxtLink>
        </li>
    </ul>
  </div>
</template>