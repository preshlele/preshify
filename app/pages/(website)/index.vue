<script lang="ts" setup>
useHead({
  title: "Welcome",
});

definePageMeta({
  layout: "website",
});
</script>
<template>
  <div>
    <ul>
        <li>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/products">All Products</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/login">Login</NuxtLink>
        </li>
    </ul>
    Landing Page
  </div>
</template>