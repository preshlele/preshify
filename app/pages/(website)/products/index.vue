<script lang="ts" setup>
useHead({
  title: "All Products",
});
</script>
<template>
  <div>
    View all products
    <ul>
        <li>
            <NuxtLink to="/products/GRTDEVEF">Top Perfume</NuxtLink>
            <NuxtLink to="/login">Login</NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
        </li>
    </ul>
  </div>
</template>