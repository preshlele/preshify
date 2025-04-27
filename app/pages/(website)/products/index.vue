<script lang="ts" setup>
useHead({
  title: "All Products",
});

definePageMeta({
  layout: "website",
});
</script>
<template>
  <div>
    View all products
    <ul>
        <li>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/products/GRTDEVEF">Top Perfume</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/login">Login</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/">Home</NuxtLink>
        </li>
    </ul>
  </div>
</template>